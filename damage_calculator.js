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
    breakMultiplier: 1.5
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

    // 状況依存バフ（火山セットの燃焼時/腐食時ボーナス等）
    if (context && context.extraDamageUp) {
      bonusSum += context.extraDamageUp;
    }
    const damageUpMult = 1.0 + bonusSum;

    // 2. 防御補正: 100 / (100 + 敵防御力)
    const enemyDef = Math.max(0, enemy.defense);
    const defMult = 100.0 / (100.0 + enemyDef);

    // 3. 耐性補正: 1 - (耐性% / 100)
    const resKeyMap = {
      '物理': 'physicalRes',
      '灼熱': 'heatRes',
      '寒冷': 'cryoRes',
      '電磁': 'electricRes',
      '自然': 'natureRes'
    };
    const resKey = resKeyMap[dmgType] || 'physicalRes';
    const resVal = enemy[resKey] || 0.0;
    const resMult = 1.0 - (resVal / 100.0);

    // 4. 脆弱 / 被ダメージUP
    const vulnVal = enemy.vulnerability || 0.0;
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

  function formatDamage(val) {
    if (val === undefined || val === null || isNaN(val)) return '0';
    return Number(val).toLocaleString();
  }

  const DamageCalculator = {
    DEFAULT_TARGET_ENEMY,
    calculateCharacterStats,
    getSkillMultiplier,
    calculateSkillDamage,
    formatDamage
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DamageCalculator;
  } else {
    global.DamageCalculator = DamageCalculator;
  }
})(typeof window !== 'undefined' ? window : global);

