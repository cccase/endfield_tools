/**
 * Damage Calculator for Arknights: Endfield
 * Implements operator stat calculation and skill damage formula.
 */
(function(global) {
  'use strict';

  const DEFAULT_TARGET_ENEMY = {
    level: 90,
    defense: 100,
    physicalRes: 0,
    heatRes: 0,
    electricRes: 0,
    cryoRes: 0,
    natureRes: 0,
    vulnerability: 0,
    isBroken: false,
    breakMultiplier: 1.5,
    artsAttachment: 'none',    // 'none' | 'heat' | 'cryo' | 'electric' | 'nature'
    attachmentStacks: 0,       // 0 ~ 4
    artsAnomaly: 'none',       // 'none' | 'combustion' (燃焼) | 'corrosion' (腐食) | 'freeze' (凍結) | 'shock' (感電)
    crushStacks: 0,            // 0 ~ 4 (物理脆弱・クラッシュ段階)
    consumeAttachment: false,  // アーツ反応による付着消費
    consumeCrush: false        // 猛撃・破砕によるクラッシュ段階消費
  };

  /**
   * キャラクターの総合ステータス（基礎＋武器＋防具＋セット効果＋能力値倍率）を算出
   */
  function calculateCharacterStats(charData, weaponConfig, armorConfig, masterData) {
    if (!charData) return null;

    const baseStats = charData.baseStats || {};
    let charBaseAtk = baseStats.atk || 0;
    let str = baseStats.strength || 0;
    let agi = baseStats.agility || 0;
    let intel = baseStats.intellect || 0;
    let wil = baseStats.willpower || 0;
    let critRate = baseStats.critRate !== undefined ? baseStats.critRate : 0.05;
    let critDamage = baseStats.critDamage !== undefined ? baseStats.critDamage : 0.50;
    let artsIntensity = baseStats.artsIntensity || 0;

    let weaponAtk = 0;
    let atkPercent = 0.0;
    let flatAtk = 0.0;

    const damageBonuses = {
      physical: 0.0,
      heat: 0.0,
      electric: 0.0,
      cryo: 0.0,
      nature: 0.0,
      skill: 0.0,
      combo: 0.0,
      ult: 0.0,
      all: 0.0
    };

    // 1. 武器の加算
    let curWeapon = null;
    if (weaponConfig && weaponConfig.id && weaponConfig.id !== 'none' && masterData) {
      if (masterData.weapons) {
        curWeapon = masterData.weapons.find(w => w.id === weaponConfig.id || w.name === weaponConfig.id);
      } else if (global.WEAPON_DATA && global.WEAPON_DATA.weapons) {
        curWeapon = global.WEAPON_DATA.weapons.find(w => w.id === weaponConfig.id || w.name === weaponConfig.id);
      }
    }

    if (curWeapon) {
      weaponAtk = curWeapon.baseAtk || 0;
      const skills = curWeapon.skills || [];

      // スキル1: メイン能力UP
      if (skills[0] && skills[0].ranks) {
        const s1Lvl = Math.min(skills[0].ranks.length, Math.max(1, weaponConfig.s1 || 9));
        const rankVal = skills[0].ranks[s1Lvl - 1];
        const valStr = Array.isArray(rankVal) ? rankVal[0] : rankVal;
        const numVal = parseFloat(String(valStr).replace(/[+%]/g, '')) || 0;
        const mainStatName = charData.mainStat;
        if (mainStatName === '筋力') str += numVal;
        else if (mainStatName === '敏捷') agi += numVal;
        else if (mainStatName === '知性') intel += numVal;
        else if (mainStatName === '意志') wil += numVal;
      }

      // スキル2: 攻撃力UP%
      if (skills[1] && skills[1].ranks) {
        const s2Lvl = Math.min(skills[1].ranks.length, Math.max(1, weaponConfig.s2 || 9));
        const rankVal = skills[1].ranks[s2Lvl - 1];
        const valStr = Array.isArray(rankVal) ? rankVal[0] : rankVal;
        if (typeof valStr === 'string' && valStr.includes('%')) {
          atkPercent += (parseFloat(valStr.replace(/[+%]/g, '')) || 0) / 100.0;
        } else {
          atkPercent += (parseFloat(valStr) || 0) / 100.0;
        }
      }

      // スキル3: パッシブ効果解析（アーツダメージUP, 物理ダメージUP等）
      if (skills[2] && skills[2].ranks) {
        const s3Lvl = Math.min(skills[2].ranks.length, Math.max(1, weaponConfig.s3 || 4));
        const rankVal = skills[2].ranks[s3Lvl - 1];
        const text = Array.isArray(rankVal) ? rankVal[0] : String(rankVal || '');
        const artMatches = text.match(/アーツダメージ\+([0-9.]+)%/);
        if (artMatches) {
          const v = parseFloat(artMatches[1]) / 100.0;
          damageBonuses.heat += v;
          damageBonuses.electric += v;
          damageBonuses.cryo += v;
          damageBonuses.nature += v;
        }
        const physMatches = text.match(/物理ダメージ\+([0-9.]+)%/);
        if (physMatches) {
          damageBonuses.physical += parseFloat(physMatches[1]) / 100.0;
        }
      }
    }

    // 2. 防具の加算
    if (armorConfig && masterData) {
      const slots = ['body', 'arm', 'acc1', 'acc2'];
      const slotMap = {
        body: masterData.bodyArmor || [],
        arm: masterData.armArmor || [],
        acc1: masterData.accessory || [],
        acc2: masterData.accessory || []
      };

      slots.forEach(slot => {
        const itemId = armorConfig[slot];
        if (!itemId || itemId === 'none') return;
        const item = slotMap[slot].find(i => i.id === itemId);
        if (!item) return;

        const detail = item.detail || item;
        const subStats = detail.subStats || [];
        subStats.forEach(sub => {
          const st = sub.stat;
          const val = sub.value || 0;
          if (st === 'strength') str += val;
          else if (st === 'agility') agi += val;
          else if (st === 'intellect') intel += val;
          else if (st === 'willpower') wil += val;
          else if (st === 'atkPercent') atkPercent += val;
          else if (st === 'atk') flatAtk += val;
          else if (st === 'critRate') critRate += val;
          else if (st === 'critDamage') critDamage += val;
          else if (st === 'artsIntensity') artsIntensity += val;
          else if (st === 'physicalDamageUp') damageBonuses.physical += val;
          else if (st === 'artsDamageUp') {
            ['heat', 'electric', 'cryo', 'nature'].forEach(elem => damageBonuses[elem] += val);
          } else if (st === 'heatAndNatureDamageUp') {
            damageBonuses.heat += val;
            damageBonuses.nature += val;
          } else if (st === 'cryoAndElectricDamageUp') {
            damageBonuses.cryo += val;
            damageBonuses.electric += val;
          } else if (st === 'skillDamageUp') damageBonuses.skill += val;
          else if (st === 'comboDamageUp') damageBonuses.combo += val;
          else if (st === 'ultDamageUp') damageBonuses.ult += val;
          else if (st === 'allSkillDamageUp') {
            damageBonuses.skill += val;
            damageBonuses.combo += val;
            damageBonuses.ult += val;
          }
        });
      });

      // 3. 防具セット効果
      const setId = armorConfig.armorSet;
      if (setId && setId !== 'none' && setId !== 'other') {
        if (setId === 'set_volcano') {
          artsIntensity += 30.0;
        } else if (setId === 'set_syusei') {
          damageBonuses.all += 0.20;
        } else if (setId === 'set_kyuho') {
          atkPercent += 0.08;
        } else if (setId === 'set_tenken') {
          ['heat', 'electric', 'cryo', 'nature'].forEach(elem => damageBonuses[elem] += 0.16);
        } else if (setId === 'set_oryu') {
          damageBonuses.physical += 0.20;
        } else if (setId === 'set_mancho') {
          damageBonuses.skill += 0.25;
        }
      }
    }

    // 4. 能力値倍率: 1 + (メイン能力 * 0.005) + (サブ能力 * 0.002)
    const statMap = { '筋力': str, '敏捷': agi, '知性': intel, '意志': wil };
    const mainVal = statMap[charData.mainStat] || 0;
    const subVal = statMap[charData.subStat] || 0;
    const statMultiplier = 1.0 + (mainVal * 0.005) + (subVal * 0.002);

    // 5. 最終攻撃力
    const baseAtk = charBaseAtk + weaponAtk;
    const totalAtk = (baseAtk * (1.0 + atkPercent) + flatAtk) * statMultiplier;

    return {
      charName: charData.name,
      setId: armorConfig ? armorConfig.armorSet : null,
      baseAtk: Math.round(baseAtk),
      totalAtk: Math.round(totalAtk),
      atkPercent: Math.round(atkPercent * 1000) / 10,
      flatAtk: flatAtk,
      statMultiplier: Math.round(statMultiplier * 1000) / 1000,
      mainStatName: charData.mainStat,
      mainStatVal: Math.round(mainVal),
      subStatName: charData.subStat,
      subStatVal: Math.round(subVal),
      str: Math.round(str),
      agi: Math.round(agi),
      int: Math.round(intel),
      wil: Math.round(wil),
      critRate: Math.round(critRate * 1000) / 1000,
      critDamage: Math.round(critDamage * 1000) / 1000,
      artsIntensity: Math.round(artsIntensity),
      damageBonuses: damageBonuses
    };
  }

  /**
   * 該当スキルの倍率を取得（デフォルト: lv9）
   */
  function getSkillMultiplier(skill, skillLevelKey) {
    if (!skill || !skill.multipliers) return 1.0;
    const mults = skill.multipliers;
    if (skillLevelKey && mults[skillLevelKey] !== undefined) {
      return mults[skillLevelKey];
    }
    // フォールバック順: lv9 -> lv10_spec1 -> 最初のキー -> 1.0
    return mults.lv9 || mults.lv10_spec1 || mults[Object.keys(mults)[0]] || 1.0;
  }

  /**
   * 最終スキルダメージ（期待値 / 会心時 / 非会心時）および計算内訳の算出
   */
  function calculateSkillDamage(stats, skill, skillLevelKey, targetEnemy, context) {
    if (!stats || !skill) {
      return { expected: 0, crit: 0, nonCrit: 0 };
    }

    const enemy = Object.assign({}, DEFAULT_TARGET_ENEMY, targetEnemy || {});
    const mult = getSkillMultiplier(skill, skillLevelKey);
    const dmgType = skill.damageType || '物理';
    const skillType = skill.type || 'skill';

    // 1. 与ダメージUP枠
    const bonuses = stats.damageBonuses || {};
    let bonusSum = bonuses.all || 0.0;

    const elemKeyMap = {
      '物理': 'physical',
      '灼熱': 'heat',
      '寒冷': 'cryo',
      '電磁': 'electric',
      '自然': 'nature'
    };
    const elemKey = elemKeyMap[dmgType] || 'physical';
    bonusSum += (bonuses[elemKey] || 0.0);

    if (skillType === 'skill' || skillType === 'skill2' || skillType === 'skill3') {
      bonusSum += (bonuses.skill || 0.0);
    } else if (skillType === 'combo') {
      bonusSum += (bonuses.combo || 0.0);
    } else if (skillType === 'ult') {
      bonusSum += (bonuses.ult || 0.0);
    }

    // === アーツ付着・状態異常・クラッシュ消費によるボーナス ===
    // (A) 火山セット: 敵が燃焼時に灼熱ダメージ+50%、腐食時に自然ダメージ+50%
    if (stats.setId === 'set_volcano') {
      if ((enemy.artsAnomaly === 'combustion' || enemy.artsAttachment === 'heat') && dmgType === '灼熱') {
        bonusSum += 0.50;
      }
      if ((enemy.artsAnomaly === 'corrosion' || enemy.artsAttachment === 'nature') && dmgType === '自然') {
        bonusSum += 0.50;
      }
    }

    // (B) クラッシュ消費（猛撃・破砕）時の段階数に応じた追加効果（1段階以上の時のみ消費発動）
    const consumedCrush = (context && context.consumeCrush)
      ? Math.min(4, Math.max(1, context.consumedCrushStacks || enemy.crushStacks || 1))
      : ((enemy.consumeCrush && enemy.crushStacks > 0) ? Math.min(4, enemy.crushStacks) : 0);

    if (consumedCrush > 0 && dmgType === '物理') {
      const cType = (context && context.crushSkillType) ? context.crushSkillType : 'consume_smash';
      // 破砕は段階あたり+25%、猛撃は段階あたり+15%の追加効果
      const perStackBonus = (cType === 'consume_shatter') ? 0.25 : 0.15;
      bonusSum += perStackBonus * consumedCrush;

      // 旧鋒セット: 猛撃・破砕時のクラッシュ段階消費（1〜4段で6%×段数、脆弱/ブレイク時は1.5倍で最大+36%）
      if (stats.setId === 'set_kyuho') {
        let kyuhoBonus = consumedCrush * 0.06;
        if (enemy.vulnerability > 0 || enemy.isBroken) {
          kyuhoBonus *= 1.5;
        }
        bonusSum += kyuhoBonus;
      }
    } else if (stats.setId === 'set_kyuho' && dmgType === '物理' && enemy.crushStacks > 0 && !context) {
      // 単体計算テスト用の後方互換（context未指定時）
      let kyuhoBonus = Math.min(4, enemy.crushStacks) * 0.06;
      if (enemy.vulnerability > 0 || enemy.isBroken) {
        kyuhoBonus *= 1.5;
      }
      bonusSum += kyuhoBonus;
    }

    // (C) アーツ爆発ボーナス（同属性付着が4段階＝最大に達した時点）
    let reactionName = 'なし';
    if (context && context.isArtsBurst) {
      const intensityBonus = (stats.artsIntensity || 0) * 0.002;
      bonusSum += 0.40 + intensityBonus;
      reactionName = 'アーツ爆発(4段階)';
    }

    // (D) アーツ異常ボーナス（異なる属性を付着させた場合）
    // 効果量は「初めに付着していた属性が何であったか」には依存せず、「初めに付着していた属性の段階数(1〜4)」にのみ依存
    if ((context && context.consumeAttachment) || (enemy.consumeAttachment && enemy.artsAttachment && enemy.artsAttachment !== 'none')) {
      const targetElem = elemKeyMap[dmgType];
      if (targetElem && targetElem !== 'physical' && targetElem !== enemy.artsAttachment) {
        const prevStacks = Math.min(4, Math.max(1, (context && context.anomalyScale) || enemy.attachmentStacks || 1));
        const intensityBonus = (stats.artsIntensity || 0) * 0.002;
        bonusSum += (0.20 * prevStacks) + intensityBonus;
        const anomalyNameMap = {
          heat: '燃焼',
          cryo: '凍結',
          electric: '感電',
          nature: '腐食'
        };
        reactionName = `${anomalyNameMap[targetElem] || targetElem}異常 (${prevStacks}段スケール)`;
      }
    }

    // (E) 砕氷 (Shatter): 凍結中の敵に物理スキル攻撃 (凍結時の初期段階数に応じてスケール)
    if (enemy.artsAnomaly === 'freeze' && dmgType === '物理') {
      const aScale = Math.min(4, Math.max(1, enemy.anomalyScale || 1));
      bonusSum += 0.25 + (0.10 * aScale);
    }

    // 状況依存バフ
    if (context && context.extraDamageUp) {
      bonusSum += context.extraDamageUp;
    }
    const damageUpMult = 1.0 + bonusSum;

    // 2. 防御補正: 100 / (100 + 敵防御力)
    const enemyDef = Math.max(0, enemy.defense);
    const defMult = 100.0 / (100.0 + enemyDef);

    // 3. 耐性補正: 1 - (耐性% / 100)
    // 腐食 (Corrosion) 状態なら初期付着段階数(1〜4)に応じて敵の全属性耐性ダウン (基礎10% + 5%×段階数、デフォルト2段相当=20%)
    let extraResShred = 0;
    if (enemy.artsAnomaly === 'corrosion') {
      const aScale = enemy.anomalyScale !== undefined ? Math.min(4, Math.max(1, enemy.anomalyScale)) : 2;
      extraResShred = 10 + (5 * aScale);
    }
    const resKeyMap = {
      '物理': 'physicalRes',
      '灼熱': 'heatRes',
      '寒冷': 'cryoRes',
      '電磁': 'electricRes',
      '自然': 'natureRes'
    };
    const resKey = resKeyMap[dmgType] || 'physicalRes';
    const resVal = (enemy[resKey] || 0.0) - extraResShred;
    const resMult = 1.0 - (resVal / 100.0);

    // 4. 脆弱 / 被ダメージUP
    // 感電 (Shock) 状態なら初期付着段階数(1〜4)に応じてアーツ被ダメージ増加 (基礎10% + 5%×段階数、デフォルト2段相当=20%)
    let extraVuln = 0;
    if (enemy.artsAnomaly === 'shock' && dmgType !== '物理') {
      const aScale = enemy.anomalyScale !== undefined ? Math.min(4, Math.max(1, enemy.anomalyScale)) : 2;
      extraVuln = 10 + (5 * aScale);
    }
    const vulnVal = (enemy.vulnerability || 0.0) + extraVuln;
    const vulnMult = 1.0 + (vulnVal / 100.0);

    // 5. ブレイク補正
    const breakMult = enemy.isBroken ? (enemy.breakMultiplier || 1.5) : 1.0;

    // 6. 会心係数
    const critRate = Math.min(1.0, Math.max(0.0, stats.critRate || 0.05));
    const critDamage = stats.critDamage || 0.50;
    const critExpected = 1.0 + (critRate * critDamage);
    const critHit = 1.0 + critDamage;

    // 基礎ダメージ（非会心ベース）
    const baseDamage = stats.totalAtk * mult * damageUpMult * defMult * resMult * vulnMult * breakMult;

    return {
      expected: Math.round(baseDamage * critExpected),
      crit: Math.round(baseDamage * critHit),
      nonCrit: Math.round(baseDamage),
      hitCount: skill.hitCount || 1,
      skillName: skill.name || skill.shortName || 'スキル',
      damageType: dmgType,
      mult: mult,
      reactionName: reactionName,
      details: {
        totalAtk: stats.totalAtk,
        mult: mult,
        damageUpPercent: Math.round(bonusSum * 1000) / 10,
        damageUpMult: Math.round(damageUpMult * 1000) / 1000,
        defMult: Math.round(defMult * 1000) / 1000,
        resVal: resVal,
        resMult: Math.round(resMult * 1000) / 1000,
        vulnMult: Math.round(vulnMult * 1000) / 1000,
        breakMult: breakMult,
        critRatePercent: Math.round(critRate * 1000) / 10,
        critDamagePercent: Math.round(critDamage * 1000) / 10
      }
    };
  }

  /**
   * タイムラインのスキル回し順序（ローテーション）に沿って
   * アーツ付着・消費・爆発・クラッシュ蓄積/消費を時系列シミュレーション
   */
  function simulateTimelineRotation(timelineCycles, party, enemyConfig, masterData, cycleNames) {
    if (!party || party.length === 0) {
      return {
        totalExpected: 0,
        totalCrit: 0,
        totalNonCrit: 0,
        charTotals: {},
        stepResults: [],
        finalEnemyState: { ...DEFAULT_TARGET_ENEMY }
      };
    }

    const baseEnemy = Object.assign({}, DEFAULT_TARGET_ENEMY, enemyConfig || {});
    const currentEnemy = {
      level: baseEnemy.level || 90,
      defense: baseEnemy.defense !== undefined ? baseEnemy.defense : 100,
      physicalRes: baseEnemy.physicalRes || 0,
      heatRes: baseEnemy.heatRes || 0,
      electricRes: baseEnemy.electricRes || 0,
      cryoRes: baseEnemy.cryoRes || 0,
      natureRes: baseEnemy.natureRes || 0,
      vulnerability: baseEnemy.vulnerability || 0,
      isBroken: !!baseEnemy.isBroken,
      breakMultiplier: baseEnemy.breakMultiplier || 1.5,
      artsAttachment: 'none',
      attachmentStacks: 0,
      crushStacks: 0,
      artsAnomaly: 'none',
      anomalyScale: 0
    };

    // パーティ1枠目のキャラと属性（スーの特殊仕様）
    const slot1Member = party[0];
    const slot1Element = (slot1Member && slot1Member.element && slot1Member.element !== '物理')
      ? slot1Member.element
      : '寒冷';

    // 各メンバーのステータス計算キャッシュ
    const charStatsMap = {};
    const charTotals = {};

    party.forEach(member => {
      const stats = calculateCharacterStats(member, member.weapon, member.equipment, masterData);
      charStatsMap[member.id] = stats;
      charTotals[member.id] = {
        id: member.id,
        name: member.name,
        icon: member.icon,
        element: member.element,
        totalExpected: 0,
        totalCrit: 0,
        totalNonCrit: 0,
        skillCount: 0,
        percentage: 0
      };
    });

    const stepResults = [];
    let grandExpected = 0;
    let grandCrit = 0;
    let grandNonCrit = 0;

    const elemToKey = {
      '灼熱': 'heat',
      '寒冷': 'cryo',
      '電磁': 'electric',
      '自然': 'nature'
    };
    const keyToElem = {
      'heat': '灼熱',
      'cryo': '寒冷',
      'electric': '電磁',
      'nature': '自然'
    };

    (timelineCycles || []).forEach((cycle, cIdx) => {
      const cName = (cycleNames && cycleNames[cIdx]) ? cycleNames[cIdx] : `サイクル ${cIdx + 1}`;

      cycle.forEach((item, sIdx) => {
        // セパレーター、SP返還・回復ブロックはスキップ
        if (item.type === 'separator' || item.type === 'refund' || item.type === 'recover') {
          return;
        }

        const member = party.find(p => p.id === item.charId || p.name === item.charName);
        if (!member) return;

        const stats = charStatsMap[member.id];
        if (!stats) return;

        // スキルオブジェクト特定
        const skill = (member.skills || []).find(sk => sk.id === item.skillId || sk.type === item.type);
        if (!skill) return;

        // スキルの実効属性と付着判定（スーとオクギの特殊仕様を判定）
        let effectiveDamageType = skill.damageType || member.element || '物理';
        let skillInflictionType = skill.infliction ? skill.infliction.type : 'none';
        // Priority A 仕様: どのスキルを使用しても、1回の付与につき「1段階」までしか付着しない
        let skillInflictionStacks = 1;
        let skillCrushType = skill.crush ? skill.crush.type : 'none';

        // Priority A 仕様: チェンが扱う状態異常は「浮遊」のみであり「猛撃」や「破砕」は扱えない
        if (member.id === 'char_chen' || (member.name && member.name.indexOf('チェン') !== -1)) {
          if (skillCrushType === 'consume_smash' || skillCrushType === 'consume_shatter') {
            skillCrushType = (skill.type === 'ult') ? 'none' : 'inflict';
          }
        }

        // スーの特殊ギミック: パーティ1枠目の属性を模倣
        if (skillInflictionType === 'copy_slot1' || (member.specialMechanic && member.specialMechanic.type === 'copy_slot1' && skill.type !== 'ult')) {
          effectiveDamageType = slot1Element;
          skillInflictionType = elemToKey[slot1Element] || 'cryo';
        }

        // オクギの特殊ギミック: 知意双形態（いずれの形態でも1回の付与は1段階）
        let isOkugiIntellectMode = false;
        if (skillInflictionType === 'okugi_dual' || (member.specialMechanic && member.specialMechanic.type === 'okugi_dual')) {
          isOkugiIntellectMode = (stats.int > stats.wil);
          if (isOkugiIntellectMode) {
            skillInflictionType = 'nature';
            skillInflictionStacks = 1;
          } else {
            // 意形態: 既存付着属性があればその属性を+1段階、なければ自然付着+1段階
            skillInflictionType = currentEnemy.artsAttachment !== 'none' ? currentEnemy.artsAttachment : 'nature';
            skillInflictionStacks = 1;
          }
        }

        // 敵の実行前状態を記録
        const beforeEnemyState = {
          artsAttachment: currentEnemy.artsAttachment,
          attachmentStacks: currentEnemy.attachmentStacks,
          crushStacks: currentEnemy.crushStacks,
          artsAnomaly: currentEnemy.artsAnomaly,
          anomalyScale: currentEnemy.anomalyScale || 0
        };

        // シミュレーション文脈
        const context = {
          consumeAttachment: false,
          consumeCrush: false,
          consumedCrushStacks: 0,
          crushSkillType: skillCrushType,
          isArtsBurst: false,
          anomalyScale: 0,
          reactionType: null,
          actionNote: ''
        };

        // (1) クラッシュ判定（Priority A 仕様）
        // ・0段階の時は「付与」でも「消費」でも1段階になる（消費は発生しない）
        // ・1段階以上の時は「付与」で+1段階（最大4）、「消費」で全段階消費して段階数に応じた追加効果
        if (skillCrushType === 'inflict' || skillCrushType === 'consume_shatter' || skillCrushType === 'consume_smash') {
          if (currentEnemy.crushStacks === 0) {
            context.consumeCrush = false;
          } else if (skillCrushType === 'consume_shatter' || skillCrushType === 'consume_smash') {
            context.consumeCrush = true;
            context.consumedCrushStacks = currentEnemy.crushStacks;
          }
        }

        // (2) アーツ付着 / アーツ爆発 / アーツ異常 判定（Priority A 仕様）
        // ・1回の付与につき1段階のみ
        // ・同属性は最大4段階までスタック可能、4段階（最大）に達した時点で「アーツ爆発」発生
        // ・既に付着がある状態に「異なる属性」を付着させた場合、後から付着した属性に応じた「アーツ異常」が発生
        // ・異常の効果量は初めの属性種類には依存せず、初めに付着していた段階数(1〜4)にのみ依存
        if (skillInflictionType && skillInflictionType !== 'none') {
          if (currentEnemy.artsAttachment === 'none') {
            // 新規付着 (1段階)
            context.actionNote = `${keyToElem[skillInflictionType] || skillInflictionType}付着(1段)`;
          } else if (currentEnemy.artsAttachment === skillInflictionType) {
            // 同属性スタック (最大4段階)
            const nextStacks = Math.min(4, currentEnemy.attachmentStacks + 1);
            if (nextStacks >= 4) {
              context.isArtsBurst = true;
              context.actionNote = `${keyToElem[skillInflictionType] || skillInflictionType}爆発！(4段階到達)`;
            } else {
              context.actionNote = `${keyToElem[skillInflictionType] || skillInflictionType}付着(${nextStacks}段)`;
            }
          } else {
            // 異属性 -> 後から付着した属性に応じた「アーツ異常」発生！
            const prevStacks = Math.min(4, Math.max(1, currentEnemy.attachmentStacks || 1));
            context.consumeAttachment = true;
            context.anomalyScale = prevStacks;
            if (skillInflictionType === 'heat') {
              context.reactionType = 'combustion';
              context.actionNote = `【燃焼異常】発動！(初期${prevStacks}段スケール)`;
            } else if (skillInflictionType === 'cryo') {
              context.reactionType = 'freeze';
              context.actionNote = `【凍結異常】発動！(初期${prevStacks}段スケール)`;
            } else if (skillInflictionType === 'electric') {
              context.reactionType = 'shock';
              context.actionNote = `【感電異常】発動！(初期${prevStacks}段スケール)`;
            } else if (skillInflictionType === 'nature') {
              context.reactionType = 'corrosion';
              context.actionNote = `【腐食異常】発動！(初期${prevStacks}段スケール)`;
            }
          }
        }

        // オクギ知形態の脆弱ボーナス
        if (isOkugiIntellectMode) {
          context.extraDamageUp = (context.extraDamageUp || 0) + 0.15;
          context.actionNote = (context.actionNote ? context.actionNote + ' ' : '') + '知形態(自然脆弱)';
        }

        // Priority C: タイムライン上のバフ・デバフブロック重なりによるリアルタイム補正
        if (typeof item.timelineExtraDamageUp === 'number' && item.timelineExtraDamageUp !== 0) {
          context.extraDamageUp = (context.extraDamageUp || 0) + item.timelineExtraDamageUp;
        }
        if (item.timelineBuffNote) {
          context.actionNote = (context.actionNote ? context.actionNote + ' / ' : '') + item.timelineBuffNote;
        }

        // スキルレベル（メンバーの個別設定があれば参照、なければlv9）
        const skillLevel = (item.skillLevel) || (member.skillLevels && member.skillLevels[skill.type]) || 'lv9';

        // 一時的に enemy 設定を currentEnemy に合わせて計算
        const calcEnemy = Object.assign({}, currentEnemy, {
          vulnerability: (currentEnemy.vulnerability || 0) + (typeof item.timelineExtraVuln === 'number' ? item.timelineExtraVuln : 0),
          consumeAttachment: context.consumeAttachment,
          consumeCrush: context.consumeCrush
        });

        const dmgResult = calculateSkillDamage(
          stats,
          Object.assign({}, skill, { damageType: effectiveDamageType }),
          skillLevel,
          calcEnemy,
          context
        );

        // スキル発動後の敵状態遷移を適用
        // (A) クラッシュの遷移（Priority A 仕様）
        if (skillCrushType === 'inflict' || skillCrushType === 'consume_shatter' || skillCrushType === 'consume_smash') {
          if (currentEnemy.crushStacks === 0) {
            // 0段階の時はどちらのタイプを使用しても1段階になる
            currentEnemy.crushStacks = 1;
            const cLabel = (member.id === 'char_chen' || (member.name && member.name.indexOf('チェン') !== -1))
              ? '浮遊(クラッシュ1段)'
              : 'クラッシュ付与(0→1段)';
            context.actionNote = context.actionNote ? `${context.actionNote} / ${cLabel}` : cLabel;
          } else if (skillCrushType === 'inflict') {
            // 1段階以上の時に「付与」を使うと段階数が増加（最大4段階）
            currentEnemy.crushStacks = Math.min(4, currentEnemy.crushStacks + 1);
            const cLabel = (member.id === 'char_chen' || (member.name && member.name.indexOf('チェン') !== -1))
              ? `浮遊(クラッシュ${currentEnemy.crushStacks}段)`
              : `クラッシュ付与(${currentEnemy.crushStacks}段)`;
            context.actionNote = context.actionNote ? `${context.actionNote} / ${cLabel}` : cLabel;
          } else if (context.consumeCrush) {
            // 1段階以上の時に「消費」を使うと全段階消費し追加効果
            const cTypeName = skillCrushType === 'consume_shatter' ? '破砕' : '猛撃';
            const cLabel = `${cTypeName}(クラッシュ${context.consumedCrushStacks}段消費)`;
            currentEnemy.crushStacks = 0;
            context.actionNote = context.actionNote ? `${context.actionNote} / ${cLabel}` : cLabel;
          }
        }

        // (B) アーツ付着の遷移（Priority A 仕様）
        if (skillInflictionType && skillInflictionType !== 'none') {
          if (context.consumeAttachment) {
            // 異属性付着によりアーツ異常が発生：初期付着は消費され、後属性の異常状態＆初期段階数スケールを保持
            currentEnemy.artsAttachment = 'none';
            currentEnemy.attachmentStacks = 0;
            currentEnemy.artsAnomaly = context.reactionType || 'none';
            currentEnemy.anomalyScale = context.anomalyScale || 1;
          } else if (currentEnemy.artsAttachment === skillInflictionType) {
            // 同属性スタック増加（最大4段階、4段階到達時点でアーツ爆発発生）
            currentEnemy.attachmentStacks = Math.min(4, currentEnemy.attachmentStacks + 1);
          } else {
            // 新規付着（常に1段階）
            currentEnemy.artsAttachment = skillInflictionType;
            currentEnemy.attachmentStacks = 1;
          }
        }

        // ダメージ加算
        grandExpected += dmgResult.expected;
        grandCrit += dmgResult.crit;
        grandNonCrit += dmgResult.nonCrit;

        const charTotal = charTotals[member.id];
        charTotal.totalExpected += dmgResult.expected;
        charTotal.totalCrit += dmgResult.crit;
        charTotal.totalNonCrit += dmgResult.nonCrit;
        charTotal.skillCount += 1;

        stepResults.push({
          cycleIndex: cIdx + 1,
          cycleName: cName,
          stepIndex: stepResults.length + 1,
          charId: member.id,
          charName: member.name,
          charIcon: member.icon,
          skillName: skill.name || skill.shortName,
          skillShortName: skill.shortName || skill.name,
          skillType: skill.type,
          damageType: effectiveDamageType,
          damage: dmgResult.expected,
          critDamage: dmgResult.crit,
          nonCritDamage: dmgResult.nonCrit,
          reactionName: dmgResult.reactionName || '',
          actionNote: context.actionNote,
          enemyBefore: beforeEnemyState,
          enemyAfter: {
            artsAttachment: currentEnemy.artsAttachment,
            attachmentStacks: currentEnemy.attachmentStacks,
            crushStacks: currentEnemy.crushStacks,
            artsAnomaly: currentEnemy.artsAnomaly,
            anomalyScale: currentEnemy.anomalyScale || 0
          }
        });
      });
    });

    // 各キャラのダメージシェア（パーセンテージ）を計算
    Object.keys(charTotals).forEach(cId => {
      const c = charTotals[cId];
      c.percentage = grandExpected > 0 ? Math.round((c.totalExpected / grandExpected) * 1000) / 10 : 0;
    });

    return {
      totalExpected: grandExpected,
      totalCrit: grandCrit,
      totalNonCrit: grandNonCrit,
      charTotals: charTotals,
      stepResults: stepResults,
      finalEnemyState: currentEnemy
    };
  }

  function formatDamage(val) {
    if (val === undefined || val === null || isNaN(val)) return '0';
    return Number(val).toLocaleString();
  }

  const DamageCalculator = {
    DEFAULT_TARGET_ENEMY,
    calculateCharacterStats,
    getSkillMultiplier,
    calculateSkillDamage,
    simulateTimelineRotation,
    formatDamage
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DamageCalculator;
  } else {
    global.DamageCalculator = DamageCalculator;
  }
})(typeof window !== 'undefined' ? window : global);

