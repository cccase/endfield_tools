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

    // (B) 旧鋒セット: 猛撃・破砕時のクラッシュ段階消費（1〜4段で6%×段数、脆弱/ブレイク時は1.5倍で最大+36%）
    if (stats.setId === 'set_kyuho' && dmgType === '物理') {
      const consumedCrush = Math.min(4, Math.max(0, enemy.crushStacks || 0));
      if (consumedCrush > 0) {
        let crushBonus = consumedCrush * 0.06;
        if (enemy.vulnerability > 0 || enemy.isBroken) {
          crushBonus *= 1.5;
        }
        bonusSum += crushBonus;
      }
    }

    // (C) アーツ反応ボーナス（付着消費時）: 異なる属性のアーツ攻撃による反応追加ダメージ
    let reactionName = 'なし';
    if (enemy.consumeAttachment && enemy.artsAttachment && enemy.artsAttachment !== 'none') {
      const targetElem = elemKeyMap[dmgType];
      if (targetElem && targetElem !== 'physical' && targetElem !== enemy.artsAttachment) {
        const stacks = Math.max(1, enemy.attachmentStacks || 1);
        const intensityBonus = (stats.artsIntensity || 0) * 0.002;
        bonusSum += (0.15 * stacks) + intensityBonus;
        reactionName = `${enemy.artsAttachment} ＋ ${targetElem}`;
      }
    }

    // (D) 砕氷 (Shatter): 凍結中の敵に物理スキル攻撃 (+40%ダメージ)
    if (enemy.artsAnomaly === 'freeze' && dmgType === '物理') {
      bonusSum += 0.40;
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
    // 腐食 (Corrosion) 状態なら敵の全属性耐性 -20%
    let extraResShred = (enemy.artsAnomaly === 'corrosion') ? 20 : 0;
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
    // 感電 (Shock) 状態ならアーツ被ダメージ増加（アーツ脆弱 +20%）
    let extraVuln = (enemy.artsAnomaly === 'shock' && dmgType !== '物理') ? 20 : 0;
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
      artsAnomaly: 'none'
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
        let skillInflictionStacks = skill.infliction ? (skill.infliction.stacks || 1) : 1;
        let skillCrushType = skill.crush ? skill.crush.type : 'none';

        // スーの特殊ギミック: パーティ1枠目の属性を模倣
        if (skillInflictionType === 'copy_slot1' || (member.specialMechanic && member.specialMechanic.type === 'copy_slot1' && skill.type !== 'ult')) {
          effectiveDamageType = slot1Element;
          skillInflictionType = elemToKey[slot1Element] || 'cryo';
        }

        // オクギの特殊ギミック: 知意双形態
        let isOkugiIntellectMode = false;
        if (skillInflictionType === 'okugi_dual' || (member.specialMechanic && member.specialMechanic.type === 'okugi_dual')) {
          isOkugiIntellectMode = (stats.intellect > stats.willpower);
          if (isOkugiIntellectMode) {
            skillInflictionType = 'nature';
            skillInflictionStacks = 1;
          } else {
            // 意形態: アーツ付着+2段サポート
            skillInflictionType = currentEnemy.artsAttachment !== 'none' ? currentEnemy.artsAttachment : 'nature';
            skillInflictionStacks = 2;
          }
        }

        // 敵の実行前状態を記録
        const beforeEnemyState = {
          artsAttachment: currentEnemy.artsAttachment,
          attachmentStacks: currentEnemy.attachmentStacks,
          crushStacks: currentEnemy.crushStacks,
          artsAnomaly: currentEnemy.artsAnomaly
        };

        // シミュレーション文脈
        const context = {
          consumeAttachment: false,
          consumeCrush: false,
          reactionType: null,
          actionNote: ''
        };

        // (1) 物理クラッシュ消費判定（猛撃・破砕）
        if (skillCrushType === 'consume_shatter' || skillCrushType === 'consume_smash') {
          if (currentEnemy.crushStacks > 0) {
            context.consumeCrush = true;
          }
        }

        // (2) アーツ反応 / 付着 / 爆発 判定
        if (skillInflictionType && skillInflictionType !== 'none') {
          if (currentEnemy.artsAttachment === 'none') {
            // 新規付着
            context.actionNote = `${keyToElem[skillInflictionType] || skillInflictionType}付着(+${skillInflictionStacks})`;
          } else if (currentEnemy.artsAttachment === skillInflictionType) {
            // 同属性 -> アーツ爆発！
            context.actionNote = `${keyToElem[skillInflictionType] || skillInflictionType}爆発！`;
          } else {
            // 異属性 -> アーツ反応（消費）！
            context.consumeAttachment = true;
            if (currentEnemy.artsAttachment === 'heat' || skillInflictionType === 'heat') {
              context.reactionType = 'combustion';
              context.actionNote = '【燃焼反応】発動！';
            } else if (currentEnemy.artsAttachment === 'nature' || skillInflictionType === 'nature') {
              context.reactionType = 'corrosion';
              context.actionNote = '【腐食反応】発動！(耐性-20%)';
            } else if (currentEnemy.artsAttachment === 'cryo' || skillInflictionType === 'cryo') {
              context.reactionType = 'freeze';
              context.actionNote = '【凍結反応】発動！(行動停止)';
            } else if (currentEnemy.artsAttachment === 'electric' || skillInflictionType === 'electric') {
              context.reactionType = 'shock';
              context.actionNote = '【感電反応】発動！(被アーツ+20%)';
            }
          }
        }

        // オクギ知形態の脆弱ボーナス
        if (isOkugiIntellectMode) {
          context.extraDamageUp = (context.extraDamageUp || 0) + 0.15;
          context.actionNote = (context.actionNote ? context.actionNote + ' ' : '') + '知形態(自然脆弱)';
        }

        // スキルレベル
        const skillLevel = 'lv9';
        const memberLevel = 90;

        // 一時的に enemy 設定を currentEnemy に合わせて計算
        const calcEnemy = Object.assign({}, currentEnemy, {
          consumeAttachment: context.consumeAttachment,
          consumeCrush: context.consumeCrush
        });

        const dmgResult = calculateSkillDamage(
          member,
          Object.assign({}, skill, { damageType: effectiveDamageType }),
          memberLevel,
          skillLevel,
          calcEnemy,
          stats,
          context
        );

        // スキル発動後の敵状態遷移を適用
        // (A) クラッシュの遷移
        if (context.consumeCrush) {
          currentEnemy.crushStacks = 0;
        } else if (skillCrushType === 'inflict') {
          currentEnemy.crushStacks = Math.min(4, currentEnemy.crushStacks + (skill.crush?.stacks || 1));
          context.actionNote = `クラッシュ付与(${currentEnemy.crushStacks}段)`;
        }

        // (B) アーツ付着の遷移
        if (skillInflictionType && skillInflictionType !== 'none') {
          if (context.consumeAttachment) {
            // 反応により付着全消費、異常状態へ移行
            currentEnemy.artsAttachment = 'none';
            currentEnemy.attachmentStacks = 0;
            currentEnemy.artsAnomaly = context.reactionType || 'none';
          } else if (currentEnemy.artsAttachment === skillInflictionType) {
            // 爆発：スタック増加
            currentEnemy.attachmentStacks = Math.min(4, currentEnemy.attachmentStacks + skillInflictionStacks);
          } else {
            // 新規付着
            currentEnemy.artsAttachment = skillInflictionType;
            currentEnemy.attachmentStacks = Math.min(4, skillInflictionStacks);
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
            artsAnomaly: currentEnemy.artsAnomaly
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

