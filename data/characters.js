const CHARACTERS_DATA = [
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_admin",
    "name": "管理人",
    "icon": "image/admin.png",
    "rarity": 6,
    "element": "物理",
    "weaponType": "片手剣",
    "class": "前衛",
    "mainStat": "敏捷",
    "subStat": "意志",
    "baseStats": {
      "hp": 7300,
      "atk": 820,
      "strength": 120,
      "agility": 285,
      "intellect": 120,
      "willpower": 185,
      "artsIntensity": 40,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_admin",
        "type": "skill",
        "name": "構成配列",
        "shortName": "戦技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 2.8,
          "lv10_spec1": 3.0333,
          "lv11_spec2": 3.2667,
          "lv12_spec3": 3.5
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_admin_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "基礎倍率: R1=156% → R9=280% → 特化III=350% (+猛撃異常ダメ: 150%×[1+消費クラッシュ段階])",
            "condition": "SP消費100",
            "effectType": "multiplier"
          },
          {
            "id": "buff_admin_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP消費100 / ブレイク値10",
            "condition": "SP消費100",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "consume_smash",
          "stacks": 1,
          "label": "💥 猛撃・クラッシュ消費",
          "description": "猛撃(クラッシュ全段階消費) / 源石結晶消費トリガー"
        },
        "description": "アーツを発動して前方の一定範囲内の敵を攻撃する。物理ダメージと猛撃を与える。",
        "damageTypeDetail": "物理",
        "rawText": "アーツを発動して前方の一定範囲内の敵を攻撃する。物理ダメージと猛撃を与える。",
        "attachText": "なし",
        "anomalyText": "猛撃(クラッシュ全段階消費) / 源石結晶消費トリガー",
        "modifiers": [
          {
            "id": "mod_管理人_skill_base",
            "name": "構成配列 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.8,
            "valuesByRank": {
              "r1": 1.56,
              "r9": 2.8,
              "spec1": 3.0333,
              "spec2": 3.2667,
              "spec3": 3.5
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_admin",
        "type": "combo",
        "name": "封印配列",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 0.8,
          "lv10_spec1": 0.8667,
          "lv11_spec2": 0.9333,
          "lv12_spec3": 1.0
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_admin_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 16.0,
            "description": "突進ダメ: R1=45%→R9=80%→特化III=100% / 結晶粉砕追加物理ダメ: R1=178%→R9=320%→特化III=400%",
            "condition": "他味方の連携技でダメージ時発動可 / CD: R1=16秒→特化III=15秒 / 封印時間: R1=4秒→特化III=5秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_admin_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 16.0,
            "description": "ブレイク値10 / 源石結晶付与(敵封印4秒→5秒)",
            "condition": "他味方の連携技でダメージ時発動可 / CD: R1=16秒→特化III=15秒 / 封印時間: R1=4秒→特化III=5秒",
            "effectType": "crush"
          },
          {
            "id": "buff_admin_combo_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 16.0,
            "description": "【源石結晶ギミック】敵を封印し、物理異常またはクラッシュ付与時に結晶を消費して追加物理ダメージ(178%→320%→400%)を発生させる（素質1・2・潜在1・3や武器『大願』の参照トリガー）",
            "condition": "他味方の連携技でダメージ時発動可 / CD: R1=16秒→特化III=15秒 / 封印時間: R1=4秒→特化III=5秒",
            "special": "【源石結晶ギミック】敵を封印し、物理異常またはクラッシュ付与時に結晶を消費して追加物理ダメージ(178%→320%→400%)を発生させる（素質1・2・潜在1・3や武器『大願』の参照トリガー）",
            "effectType": "special"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💥 クラッシュ付与 (+1段)",
          "description": "源石結晶付与(封印) → 物理異常またはクラッシュ付与時に源石結晶消費＆結晶粉砕追加物理ダメ"
        },
        "description": "チーム内の他のオペレーターの連携技でダメージを与えたときに発動可能。物理ダメージを与え、源石結晶を付与して一定時間封印する。物理異常を与えるかクラッシュを付与すると、源石結晶が消費され、追加の物理ダメージを与える。",
        "damageTypeDetail": "物理",
        "rawText": "チーム内の他のオペレーターの連携技でダメージを与えたときに発動可能。物理ダメージを与え、源石結晶を付与して一定時間封印する。物理異常を与えるかクラッシュを付与すると、源石結晶が消費され、追加の物理ダメージを与える。",
        "attachText": "なし",
        "anomalyText": "源石結晶付与(封印) → 物理異常またはクラッシュ付与時に源石結晶消費＆結晶粉砕追加物理ダメ",
        "special": "【源石結晶ギミック】敵を封印し、物理異常またはクラッシュ付与時に結晶を消費して追加物理ダメージ(178%→320%→400%)を発生させる（素質1・2・潜在1・3や武器『大願』の参照トリガー）",
        "modifiers": [
          {
            "id": "mod_管理人_combo_base",
            "name": "封印配列 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.8,
            "valuesByRank": {
              "r1": 0.45,
              "r9": 0.8,
              "spec1": 0.8667,
              "spec2": 0.9333,
              "spec3": 1.0
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          },
          {
            "id": "mod_管理人_combo_additional",
            "name": "封印配列 条件追加ダメージ",
            "calcGroup": "skill_multiplier",
            "value": 3.2,
            "valuesByRank": {
              "r9": 3.2,
              "spec3": 4.0
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:trigger"
            ]
          }
        ]
      },
      {
        "id": "ult_admin",
        "type": "ult",
        "name": "攻撃配列",
        "shortName": "必殺技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 6.4,
          "lv10_spec1": 6.9333,
          "lv11_spec2": 7.4667,
          "lv12_spec3": 8.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_admin_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "基礎ダメ: R1=356%→R9=640%→特化III=800% / 源石結晶消費時の追加ダメ: R1=267%→R9=480%→特化III=600%",
            "condition": "必殺チャージ消費80",
            "effectType": "multiplier"
          },
          {
            "id": "buff_admin_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "必殺チャージ消費80 / ブレイク値25",
            "condition": "必殺チャージ消費80",
            "effectType": "crush"
          }
        ],
        "epCost": 80,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "源石結晶消費(敵に源石結晶がある場合、消費して追加物理ダメ)",
          "description": "源石結晶消費(敵に源石結晶がある場合、消費して追加物理ダメ)"
        },
        "description": "アーツを発動して地面を攻撃し、前方の扇形範囲内の敵に高い物理ダメージを与える。敵に源石結晶がある場合、源石結晶が消費され、追加でもう1回物理ダメージを与える。",
        "damageTypeDetail": "物理",
        "rawText": "アーツを発動して地面を攻撃し、前方の扇形範囲内の敵に高い物理ダメージを与える。敵に源石結晶がある場合、源石結晶が消費され、追加でもう1回物理ダメージを与える。",
        "attachText": "なし",
        "anomalyText": "源石結晶消費(敵に源石結晶がある場合、消費して追加物理ダメ)",
        "modifiers": [
          {
            "id": "mod_管理人_ult_base",
            "name": "攻撃配列 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 6.4,
            "valuesByRank": {
              "r1": 3.56,
              "r9": 6.4,
              "spec1": 6.9333,
              "spec2": 7.4667,
              "spec3": 8.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:physical",
              "cond:always"
            ]
          },
          {
            "id": "mod_管理人_ult_additional",
            "name": "攻撃配列 条件追加ダメージ",
            "calcGroup": "skill_multiplier",
            "value": 4.8,
            "valuesByRank": {
              "r9": 4.8,
              "spec3": 6.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:physical",
              "cond:trigger"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "大願",
    "recommendedWeapons": [
      "大願",
      "輝かしき名声"
    ],
    "normalAttack": {
      "name": "破壊配列",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[23%/27%/30%/35%/40%]→R9[41%/49%/54%/62%/72%]→特化III[51%/61%/68%/78%/90%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク18 / 終撃時SP回復",
      "description": "最大5段の攻撃で敵に物理ダメージを与える。操作中のオペレーターの場合、重攻撃はブレイク値18を与える。終撃：高い物理ダメージを与えてSPを一定量回復する。",
      "raw": "最大5段の攻撃で敵に物理ダメージを与える。操作中のオペレーターの場合、重攻撃はブレイク値18を与える。終撃：高い物理ダメージを与えてSPを一定量回復する。"
    },
    "talents": [
      {
        "id": "talent_admin_1",
        "name": "根源瓦解",
        "description": "敵の源石結晶が消費されると、15秒間自身の攻撃力＋15%→＋30%（重ね掛け不可）",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_admin_talent1_atk_pct",
            "name": "根源瓦解",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "atk_pct",
            "calcGroupLabel": "【参照スケール】攻撃力%",
            "value": 0,
            "duration": 15.0,
            "description": "攻撃力+15%(昇進1) → +30%(昇進2)",
            "condition": "敵の源石結晶が消費された時 / 持続15秒 / 重ね掛け不可"
          }
        ]
      },
      {
        "id": "talent_admin_2",
        "name": "空間静止",
        "description": "源石結晶が付与されている敵の受ける物理ダメージ＋10%→＋20%",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_admin_talent2_taken_damage_up",
            "name": "空間静止",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "taken_damage_up",
            "calcGroupLabel": "【被ダメージ補正】敵被ダメUP",
            "value": 0,
            "duration": 0.0,
            "description": "敵の受ける物理ダメージ+10%(昇進2) → +20%(昇進3)",
            "condition": "敵に源石結晶が付与されている間"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "管理人 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【源石結晶ギミック】敵を封印し、物理異常またはクラッシュ付与時に結晶を消費して追加物理ダメージ(178%→320%→400%)を発生させる（素質1・2・潜在1・3や武器『大願』の参照トリガー） ／ 【Wiki未記載】現行バージョンで未解放のためWiki上も名称・効果が空欄"
    },
    "recommendedArmorSet": "set_oryu",
    "recommendedArmorSetName": "50式応龍セット",
    "recommendedArmor": {
      "armorSet": "set_oryu",
      "body": "gold_body_50e5bc8fe5bf9ce_21",
      "arm": "gold_arms_50e5bc8fe5bf9ce_19",
      "acc1": "gold_accessories_50e5bc8fe5bf9ce_28",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_akekuri",
    "name": "アケクリ",
    "icon": "image/akekuri.png",
    "rarity": 4,
    "element": "灼熱",
    "weaponType": "片手剣",
    "class": "先鋒",
    "mainStat": "敏捷",
    "subStat": "知性",
    "baseStats": {
      "hp": 5400,
      "atk": 630,
      "strength": 85,
      "agility": 210,
      "intellect": 135,
      "willpower": 80,
      "artsIntensity": 50,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 15,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_akekuri",
        "type": "skill",
        "name": "ほとばしる情熱",
        "shortName": "戦技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 2.56,
          "lv10_spec1": 2.7733,
          "lv11_spec2": 2.9867,
          "lv12_spec3": 3.2
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_akekuri_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "基礎倍率: R1=142% → R9=256% → 特化III=320%",
            "condition": "SP消費100",
            "effectType": "multiplier"
          },
          {
            "id": "buff_akekuri_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP消費100 / ブレイク値10",
            "condition": "SP消費100",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "heat",
          "stacks": 1,
          "label": "🔥 灼熱付着 (+1段階)",
          "description": "灼熱付着(1段階)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "前方に斬りかかり、灼熱ダメージを与え、灼熱付着を付与する",
        "damageTypeDetail": "灼熱",
        "rawText": "前方に斬りかかり、灼熱ダメージを与え、灼熱付着を付与する",
        "attachText": "灼熱付着(1段階)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_アケクリ_skill_base",
            "name": "ほとばしる情熱 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.56,
            "valuesByRank": {
              "r1": 1.42,
              "r9": 2.56,
              "spec1": 2.7733,
              "spec2": 2.9867,
              "spec3": 3.2
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_akekuri",
        "type": "combo",
        "name": "突撃一閃",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 1.44,
          "lv10_spec1": 1.56,
          "lv11_spec2": 1.68,
          "lv12_spec3": 1.8
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_akekuri_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 10.0,
            "description": "2回ヒット・1回毎倍率: R1=80% → R9=144% → 特化III=180%",
            "condition": "敵がブレイク状態になるかブレイク点到達時発動可 / CD: R1〜9=10秒→特化III=9秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_akekuri_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 10.0,
            "description": "1回毎ブレイク値5(計10) / 1回毎SP回復7.5(計15、素質1で増加)",
            "condition": "敵がブレイク状態になるかブレイク点到達時発動可 / CD: R1〜9=10秒→特化III=9秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "敵がブレイク状態になるかブレイク点に到達したときに発動可能。往復移動の突撃で物理ダメージを2回与え、SPを一定量回復する。",
        "damageTypeDetail": "物理",
        "rawText": "敵がブレイク状態になるかブレイク点に到達したときに発動可能。往復移動の突撃で物理ダメージを2回与え、SPを一定量回復する。",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_アケクリ_combo_base",
            "name": "突撃一閃 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.44,
            "valuesByRank": {
              "r1": 0.8,
              "r9": 1.44,
              "spec1": 1.56,
              "spec2": 1.68,
              "spec3": 1.8
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_akekuri",
        "type": "ult",
        "name": "全員、集合！",
        "shortName": "必殺技",
        "damageType": "なし",
        "multipliers": {
          "lv9": 6.84,
          "lv10_spec1": 7.46,
          "lv11_spec2": 8.17,
          "lv12_spec3": 9.02
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_akekuri_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP回復量(合計): R1=58 → R9=74 → 特化III=80",
            "condition": "必殺チャージ消費120 / 集結信号弾3回発射",
            "effectType": "crush"
          }
        ],
        "epCost": 120,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "持続的にアーツを放ち、集結信号弾を3回発射する。発射するたびにSPを一定量回復する。",
        "damageTypeDetail": "なし",
        "rawText": "持続的にアーツを放ち、集結信号弾を3回発射する。発射するたびにSPを一定量回復する。",
        "attachText": "なし",
        "anomalyText": "なし"
      }
    ],
    "motifWeapon": "O.B.J.軽刃",
    "recommendedWeapons": [
      "O.B.J.軽刃",
      "テルミット・カッター"
    ],
    "normalAttack": {
      "name": "切磋琢磨",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[20%/28%/33%/50%]→R9[36%/50%/59%/89%]→特化III[45%/62%/73%/111%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク17 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値17を与える。",
      "raw": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値17を与える。"
    },
    "talents": [
      {
        "id": "talent_akekuri_1",
        "name": "勝利の喝采",
        "description": "知性10につき連携技「突撃一閃」のSP回復量+1.0%（最大+50%）→ +1.5%（最大+75%）",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_akekuri_talent1_aux",
            "name": "勝利の喝采",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "知性10につき連携技SP回復量+1.0%(最大+50%,昇進1) → +1.5%(最大+75%,昇進2)",
            "condition": "連携技「突撃一閃」発動時(知性参照)"
          }
        ]
      },
      {
        "id": "talent_akekuri_2",
        "name": "集中タイム",
        "description": "必殺技「全員、集合！」の効果持続中、リンク状態を獲得する",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_akekuri_talent2_link",
            "name": "集中タイム",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "link",
            "calcGroupLabel": "【リンク補正】",
            "value": 0,
            "duration": 0.0,
            "description": "リンク状態獲得(チーム内の誰かが次に使う戦技×1.3または必殺技×1.2で消費、最大4段階重ね掛け可)",
            "condition": "必殺技「全員、集合！」効果持続中(チーム共有リンク)"
          }
        ]
      }
    ],
    "recommendedArmorSet": "set_pioneer",
    "recommendedArmorSetName": "パイオニアセット",
    "recommendedArmor": {
      "armorSet": "set_pioneer",
      "body": "gold_body_e38391e382a4e38_32",
      "arm": "gold_arms_e38391e382a4e38_30",
      "acc1": "gold_accessories_e38391e382a4e38_43",
      "acc2": "gold_accessories_e69591e59bbde58_73"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_alesh",
    "name": "アレッシュ",
    "icon": "image/alesh.png",
    "rarity": 5,
    "element": "寒冷",
    "weaponType": "片手剣",
    "class": "先鋒",
    "mainStat": "敏捷",
    "subStat": "知性",
    "baseStats": {
      "hp": 6300,
      "atk": 720,
      "strength": 100,
      "agility": 245,
      "intellect": 160,
      "willpower": 95,
      "artsIntensity": 65,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 15,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_alesh",
        "type": "skill",
        "name": "型破りのルアー",
        "shortName": "戦技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 3.6,
          "lv10_spec1": 3.9,
          "lv11_spec2": 4.2,
          "lv12_spec3": 4.5
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_alesh_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "物理ダメ倍率: R1=200% → R9=360% → 特化III=450%",
            "condition": "SP消費100 / 寒冷付着状態の敵命中時に付着全消費＆強制凍結",
            "effectType": "multiplier"
          },
          {
            "id": "buff_alesh_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値10 / 寒冷付着1〜4段階消費時SP回復: R1〜9[10/20/30/40] → 特化III[15/25/35/45](複数命中でも1回のみ)",
            "condition": "SP消費100 / 寒冷付着状態の敵命中時に付着全消費＆強制凍結",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "寒冷付着全段階消費 → 強制凍結付与",
          "description": "寒冷付着全段階消費 → 強制凍結付与"
        },
        "description": "引っ掛けた氷で前方の敵を叩き付け、物理ダメージを与える。寒冷付着状態の敵に命中すると、敵の寒冷付着をすべて消費して強制的に凍結状態にする。消費した段階数に応じてSPを回復する。",
        "damageTypeDetail": "物理",
        "rawText": "引っ掛けた氷で前方の敵を叩き付け、物理ダメージを与える。寒冷付着状態の敵に命中すると、敵の寒冷付着をすべて消費して強制的に凍結状態にする。消費した段階数に応じてSPを回復する。",
        "attachText": "なし",
        "anomalyText": "寒冷付着全段階消費 → 強制凍結付与",
        "modifiers": [
          {
            "id": "mod_アレッシュ_skill_base",
            "name": "型破りのルアー 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.6,
            "valuesByRank": {
              "r1": 2.0,
              "r9": 3.6,
              "spec1": 3.9,
              "spec2": 4.2,
              "spec3": 4.5
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_alesh",
        "type": "combo",
        "name": "穴釣り戦術",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 2.4,
          "lv10_spec1": 2.6,
          "lv11_spec2": 2.8,
          "lv12_spec3": 3.0
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_alesh_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 9.0,
            "description": "通常ダメ: R1=133%→R9=240%→特化III=300% / 珍鱗釣上時強化ダメ: R1=213%→R9=384%→特化III=480%",
            "condition": "近くのアーツ異常または源石結晶が消費された時発動可 / CD: R1〜9=9秒→特化III=8秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_alesh_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 9.0,
            "description": "ブレイク値10 / 基礎SP回復: R1=10→R9=12→特化III=15 / 珍鱗釣上時SP追加+10",
            "condition": "近くのアーツ異常または源石結晶が消費された時発動可 / CD: R1〜9=9秒→特化III=8秒",
            "effectType": "crush"
          },
          {
            "id": "buff_alesh_combo_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 9.0,
            "description": "【確率分岐(珍鱗)】基礎10%＋素質2(知性10につき+0.5%、上限+30%)の確率で珍鱗を釣り上げ、倍率強化＆SP追加+10（3凸で全体攻撃力+15%発動）",
            "condition": "近くのアーツ異常または源石結晶が消費された時発動可 / CD: R1〜9=9秒→特化III=8秒",
            "special": "【確率分岐(珍鱗)】基礎10%＋素質2(知性10につき+0.5%、上限+30%)の確率で珍鱗を釣り上げ、倍率強化＆SP追加+10（3凸で全体攻撃力+15%発動）",
            "effectType": "special"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "近くの目標のアーツ異常または源石結晶が消費されたときに発動可能。物理ダメージを与え、SPを一定量回復する。一定確率で珍鱗を釣り上げ、ダメージが大幅にアップし、SPをさらに回復する。",
        "damageTypeDetail": "物理",
        "rawText": "近くの目標のアーツ異常または源石結晶が消費されたときに発動可能。物理ダメージを与え、SPを一定量回復する。一定確率で珍鱗を釣り上げ、ダメージが大幅にアップし、SPをさらに回復する。",
        "attachText": "なし",
        "anomalyText": "なし",
        "special": "【確率分岐(珍鱗)】基礎10%＋素質2(知性10につき+0.5%、上限+30%)の確率で珍鱗を釣り上げ、倍率強化＆SP追加+10（3凸で全体攻撃力+15%発動）",
        "modifiers": [
          {
            "id": "mod_アレッシュ_combo_base",
            "name": "穴釣り戦術 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.4,
            "valuesByRank": {
              "r1": 1.33,
              "r9": 2.4,
              "spec1": 2.6,
              "spec2": 2.8,
              "spec3": 3.0
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_alesh",
        "type": "ult",
        "name": "大物、ヒット！",
        "shortName": "必殺技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 7.84,
          "lv10_spec1": 8.4933,
          "lv11_spec2": 9.1467,
          "lv12_spec3": 9.8
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_alesh_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "寒冷ダメ倍率: R1=436% → R9=784% → 特化III=980%",
            "condition": "必殺チャージ消費100 / CD20秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_alesh_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値20 / 基礎SP回復: R1〜9=20→特化III=25 / 敵1体撃破毎SP追加回復: R1〜9=12→特化III=15(合計上限100)",
            "condition": "必殺チャージ消費100 / CD20秒",
            "effectType": "crush"
          }
        ],
        "epCost": 100,
        "infliction": {
          "type": "cryo",
          "stacks": 1,
          "label": "❄️ 寒冷付着 (+1段階)",
          "description": "寒冷付着(1段階)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "超巨大鱗獣を釣り上げ、前方の敵に投げ付ける。広範囲の寒冷ダメージを与え、寒冷付着を付与し、SPを一定量回復する。倒した敵1体につき、SPを追加で回復する。",
        "damageTypeDetail": "寒冷",
        "rawText": "超巨大鱗獣を釣り上げ、前方の敵に投げ付ける。広範囲の寒冷ダメージを与え、寒冷付着を付与し、SPを一定量回復する。倒した敵1体につき、SPを追加で回復する。",
        "attachText": "寒冷付着(1段階)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_アレッシュ_ult_base",
            "name": "大物、ヒット！ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 7.84,
            "valuesByRank": {
              "r1": 4.36,
              "r9": 7.84,
              "spec1": 8.4933,
              "spec2": 9.1467,
              "spec3": 9.8
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "フィンチェイサー3.0",
    "recommendedWeapons": [
      "フィンチェイサー3.0",
      "テルミット・カッター"
    ],
    "normalAttack": {
      "name": "キャストの基本",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[18%/10%/28%/28%/55%]→R9[32%/18%/50%/50%/99%]→特化III[39%/23%/62%/62%/124%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク17 / 終撃時SP回復",
      "description": "最大5段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値17を与える。",
      "raw": "最大5段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値17を与える。"
    },
    "talents": [
      {
        "id": "talent_alesh_1",
        "name": "急速冷凍",
        "description": "近くの敵が凍結または源石結晶を付与されると、自身の必殺チャージを3→4回復する。自身の攻撃で凍結状態にしてこの効果を発動するとき、追加で必殺チャージを6→8回復する（3秒に1回）",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_alesh_talent1_aux",
            "name": "急速冷凍",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 3.0,
            "description": "必殺チャージ+3(昇進1)→+4(昇進2)回復 / 自身の攻撃で凍結にした場合は追加で+6(昇進1)→+8(昇進2)回復(計12)",
            "condition": "近くの敵が凍結または源石結晶付与時(3秒に1回まで)"
          }
        ]
      },
      {
        "id": "talent_alesh_2",
        "name": "釣りの達人",
        "description": "知性10につき、連携技「穴釣り術」で珍鱗を釣り上げる確率+0.2%→+0.5%（最大30%）",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "special",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_alesh_talent2_special",
            "name": "釣りの達人",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【確率補正】知性10につき連携技で珍鱗を釣り上げる確率+0.2%(昇進2)→+0.5%(昇進3)（最大+30%）",
            "condition": "連携技「穴釣り戦術」発動時(知性参照)",
            "special": "【確率補正】知性10につき連携技で珍鱗を釣り上げる確率+0.2%(昇進2)→+0.5%(昇進3)（最大+30%）"
          }
        ],
        "special": "【確率補正】知性10につき連携技で珍鱗を釣り上げる確率+0.2%(昇進2)→+0.5%(昇進3)（最大+30%）"
      }
    ],
    "specialMechanic": {
      "title": "アレッシュ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【確率分岐(珍鱗)】基礎10%＋素質2(知性10につき+0.5%、上限+30%)の確率で珍鱗を釣り上げ、倍率強化＆SP追加+10（3凸で全体攻撃力+15%発動） ／ 【確率補正】知性10につき連携技で珍鱗を釣り上げる確率+0.2%(昇進2)→+0.5%(昇進3)（最大+30%）"
    },
    "recommendedArmorSet": "set_pioneer",
    "recommendedArmorSetName": "パイオニアセット",
    "recommendedArmor": {
      "armorSet": "set_pioneer",
      "body": "gold_body_e38391e382a4e38_32",
      "arm": "gold_arms_e38391e382a4e38_30",
      "acc1": "gold_accessories_e38391e382a4e38_43",
      "acc2": "gold_accessories_e69591e59bbde58_73"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_antal",
    "name": "アンタル",
    "icon": "image/antal.png",
    "rarity": 4,
    "element": "電磁",
    "weaponType": "アーツユニット",
    "class": "補助",
    "mainStat": "知性",
    "subStat": "意志",
    "baseStats": {
      "hp": 5000,
      "atk": 710,
      "strength": 85,
      "agility": 80,
      "intellect": 210,
      "willpower": 135,
      "artsIntensity": 50,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_antal",
        "type": "skill",
        "name": "指定研究対象",
        "shortName": "戦技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 1.6,
          "lv10_spec1": 1.7333,
          "lv11_spec2": 1.8667,
          "lv12_spec3": 2.0
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_antal_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 60.0,
            "description": "電磁ダメ倍率: R1=89% → R9=160% → 特化III=200%",
            "condition": "SP消費100 / 持続60秒 / 最大1体までフォーカス(※電磁ダメだが電磁付着は付与しない！)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_antal_skill_vulnerability",
            "name": "電磁・灼熱脆弱",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 60.0,
            "description": "電磁脆弱 & 灼熱脆弱: R1=5% → R9=8% → 特化III=10%",
            "condition": "SP消費100 / 持続60秒 / 最大1体までフォーカス(※電磁ダメだが電磁付着は付与しない！)",
            "effectType": "debuff"
          },
          {
            "id": "buff_antal_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 60.0,
            "description": "SP消費100",
            "condition": "SP消費100 / 持続60秒 / 最大1体までフォーカス(※電磁ダメだが電磁付着は付与しない！)",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "敵を長時間フォーカスし、電磁ダメージを与える。フォーカス中の敵は電磁脆弱および灼熱脆弱状態になる。敵は最大1体までフォーカスできる。（※アーツ付着なし）",
        "damageTypeDetail": "電磁",
        "rawText": "敵を長時間フォーカスし、電磁ダメージを与える。フォーカス中の敵は電磁脆弱および灼熱脆弱状態になる。敵は最大1体までフォーカスできる。（※アーツ付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_アンタル_skill_base",
            "name": "指定研究対象 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.6,
            "valuesByRank": {
              "r1": 0.89,
              "r9": 1.6,
              "spec1": 1.7333,
              "spec2": 1.8667,
              "spec3": 2.0
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_antal",
        "type": "combo",
        "name": "磁気嵐実験場",
        "shortName": "連携技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 2.72,
          "lv10_spec1": 2.9467,
          "lv11_spec2": 3.1733,
          "lv12_spec3": 3.4
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_antal_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 25.0,
            "description": "電磁ダメ倍率: R1=151% → R9=272% → 特化III=340%",
            "condition": "フォーカス中の敵が物理異常またはアーツ付着状態になった時発動可 / CD: R1〜9=25秒→特化III=24秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_antal_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 25.0,
            "description": "ブレイク値10",
            "condition": "フォーカス中の敵が物理異常またはアーツ付着状態になった時発動可 / CD: R1〜9=25秒→特化III=24秒",
            "effectType": "crush"
          },
          {
            "id": "buff_antal_combo_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 25.0,
            "description": "【特殊付着/異常コピー】固有で電磁付着を持つのではなく、トリガーとなった直前の「物理異常」または「任意属性のアーツ付着」と同じものを再度付与する",
            "condition": "フォーカス中の敵が物理異常またはアーツ付着状態になった時発動可 / CD: R1〜9=25秒→特化III=24秒",
            "special": "【特殊付着/異常コピー】固有で電磁付着を持つのではなく、トリガーとなった直前の「物理異常」または「任意属性のアーツ付着」と同じものを再度付与する",
            "effectType": "special"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "条件付き再付与(トリガーとなったアーツ付着を再度1段階付与)",
          "description": "条件付き再付与(トリガーとなったアーツ付着を再度1段階付与)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "条件付き再付与(トリガーとなった物理異常を再度付与)",
          "description": "条件付き再付与(トリガーとなった物理異常を再度付与)"
        },
        "description": "フォーカス中の敵が物理異常またはアーツ付着状態になったときに発動可能。敵にエネルギー爆発を1回引き起こし、電磁ダメージを与える。さらに、物理異常またはアーツ付着を再度付与する。",
        "damageTypeDetail": "電磁",
        "rawText": "フォーカス中の敵が物理異常またはアーツ付着状態になったときに発動可能。敵にエネルギー爆発を1回引き起こし、電磁ダメージを与える。さらに、物理異常またはアーツ付着を再度付与する。",
        "attachText": "条件付き再付与(トリガーとなったアーツ付着を再度1段階付与)",
        "anomalyText": "条件付き再付与(トリガーとなった物理異常を再度付与)",
        "special": "【特殊付着/異常コピー】固有で電磁付着を持つのではなく、トリガーとなった直前の「物理異常」または「任意属性のアーツ付着」と同じものを再度付与する",
        "modifiers": [
          {
            "id": "mod_アンタル_combo_base",
            "name": "磁気嵐実験場 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.72,
            "valuesByRank": {
              "r1": 1.51,
              "r9": 2.72,
              "spec1": 2.9467,
              "spec2": 3.1733,
              "spec3": 3.4
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_antal",
        "type": "ult",
        "name": "リミッター、解除",
        "shortName": "必殺技",
        "damageType": "なし",
        "multipliers": {
          "lv9": 6.84,
          "lv10_spec1": 7.46,
          "lv11_spec2": 8.17,
          "lv12_spec3": 9.02
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_antal_ult_amp",
            "name": "チーム電磁・灼熱増幅",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "amp",
            "calcGroupLabel": "【増幅補正】増幅",
            "value": 20,
            "duration": 12.0,
            "description": "チーム全員に電磁増幅 & 灼熱増幅: R1=8% → R9=16% → 特化III=20%",
            "condition": "必殺チャージ消費100 / 持続12秒",
            "effectType": "buff"
          },
          {
            "id": "buff_antal_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 12.0,
            "description": "必殺チャージ消費100",
            "condition": "必殺チャージ消費100 / 持続12秒",
            "effectType": "crush"
          }
        ],
        "epCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "チーム全員に一定時間の電磁増幅と灼熱増幅を付与する。",
        "damageTypeDetail": "なし",
        "rawText": "チーム全員に一定時間の電磁増幅と灼熱増幅を付与する。",
        "attachText": "なし",
        "anomalyText": "なし"
      }
    ],
    "motifWeapon": "O.B.J.術識",
    "recommendedWeapons": [
      "O.B.J.術識",
      "破壊ユニット"
    ],
    "normalAttack": {
      "name": "交換電流",
      "damageType": "電磁",
      "damageTypeDetail": "電磁",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[23%/28%/34%/51%]→R9[41%/50%/61%/92%]→特化III[52%/63%/77%/115%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク15 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に電磁ダメージを与える（※電磁付着なし）。重攻撃はブレイク値15を与える。",
      "raw": "最大4段の攻撃で敵に電磁ダメージを与える（※電磁付着なし）。重攻撃はブレイク値15を与える。"
    },
    "talents": [
      {
        "id": "talent_antal_1",
        "name": "アドリブ",
        "description": "チーム内の増幅状態のオペレーターがスキルでダメージを与えると、アンタルがそのオペレーターのHPを[72+筋力×0.6]→[108+筋力×0.9]回復させる（1人につき30秒に1回）",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_antal_talent1_aux",
            "name": "アドリブ",
            "target": "single",
            "targetLabel": "単体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 30.0,
            "description": "該当オペレーターのHPを[72+筋力×0.6](昇進1) → [108+筋力×0.9](昇進2)回復",
            "condition": "増幅状態の味方がスキルでダメージを与えた時(各味方30秒に1回)"
          }
        ]
      },
      {
        "id": "talent_antal_2",
        "name": "無意識",
        "description": "30%の確率で物理ダメージが無効になり、自身のHPを[27+筋力×0.23]→[45+筋力×0.38]回復する",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_antal_talent2_aux",
            "name": "無意識",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "30%の確率で物理ダメージ無効＋自身のHP[27+筋力×0.23](昇進2)→[45+筋力×0.38](昇進3)回復",
            "condition": "物理被弾時30%確率"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "アンタル 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【特殊付着/異常コピー】固有で電磁付着を持つのではなく、トリガーとなった直前の「物理異常」または「任意属性のアーツ付着」と同じものを再度付与する"
    },
    "recommendedArmorSet": "set_ruten",
    "recommendedArmorSetName": "流転セット",
    "recommendedArmor": {
      "armorSet": "set_ruten",
      "body": "gold_body_e6b581e8bba2e8b_14",
      "arm": "gold_arms_e6b581e8bba2e38_13",
      "acc1": "gold_accessories_e6b581e8bba2e89_15",
      "acc2": "gold_accessories_e69591e59bbde58_73"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_arclight",
    "name": "アークライト",
    "icon": "image/arclight.png",
    "rarity": 5,
    "element": "電磁",
    "weaponType": "片手剣",
    "class": "先鋒",
    "mainStat": "敏捷",
    "subStat": "知性",
    "baseStats": {
      "hp": 6300,
      "atk": 720,
      "strength": 100,
      "agility": 245,
      "intellect": 160,
      "willpower": 95,
      "artsIntensity": 65,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 40,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_arclight",
        "type": "skill",
        "name": "疾風迅雷",
        "shortName": "戦技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 0.81,
          "lv10_spec1": 0.8767,
          "lv11_spec2": 0.9433,
          "lv12_spec3": 1.01
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_arclight_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "1・2段目(物理): R1[45%+45%]→R9[81%+81%]→特化III[101%+101%] / 感電消費追撃(電磁): R1=180%→R9=324%→特化III=405%",
            "condition": "SP消費100 / 感電状態の敵に命中時追撃発生",
            "effectType": "multiplier"
          },
          {
            "id": "buff_arclight_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値: 2段目5＋追撃5 / 感電消費時SP回復: R1=30→R9=35→特化III=40",
            "condition": "SP消費100 / 感電状態の敵に命中時追撃発生",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "感電状態の消費(敵が感電中の場合、感電を消費して追加電磁ダメ＆SP回復 ※電磁付着は付与しない)",
          "description": "感電状態の消費(敵が感電中の場合、感電を消費して追加電磁ダメ＆SP回復 ※電磁付着は付与しない)"
        },
        "description": "敵の近くに瞬間移動して2回斬撃を放ち、わずかな物理ダメージを与える。敵が感電状態の場合、感電状態を消費して追加でもう1回攻撃し、電磁ダメージを与え、SPを一定量回復する。（※電磁付着なし）",
        "damageTypeDetail": "物理(1・2段) / 電磁(感電消費追撃)",
        "rawText": "敵の近くに瞬間移動して2回斬撃を放ち、わずかな物理ダメージを与える。敵が感電状態の場合、感電状態を消費して追加でもう1回攻撃し、電磁ダメージを与え、SPを一定量回復する。（※電磁付着なし）",
        "attachText": "なし",
        "anomalyText": "感電状態の消費(敵が感電中の場合、感電を消費して追加電磁ダメ＆SP回復 ※電磁付着は付与しない)",
        "modifiers": [
          {
            "id": "mod_アークライト_skill_base",
            "name": "疾風迅雷 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.81,
            "valuesByRank": {
              "r1": 0.45,
              "r9": 0.81,
              "spec1": 0.8767,
              "spec2": 0.9433,
              "spec3": 1.01
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_arclight",
        "type": "combo",
        "name": "雷鳴",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 2.8,
          "lv10_spec1": 3.0333,
          "lv11_spec2": 3.2667,
          "lv12_spec3": 3.5
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_arclight_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 3.0,
            "description": "物理ダメ倍率: R1=155% → R9=280% → 特化III=350%",
            "condition": "敵が感電状態になるか感電が消費された時発動可 / CD3秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_arclight_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 3.0,
            "description": "ブレイク値5 / 必殺チャージ回復5 / SP回復: R1=8→R9=9→特化III=10",
            "condition": "敵が感電状態になるか感電が消費された時発動可 / CD3秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "敵が感電状態になるか感電状態が消費されると発動可能。複数回斬撃を放ち、物理ダメージを与え、SPを一定量回復する。",
        "damageTypeDetail": "物理",
        "rawText": "敵が感電状態になるか感電状態が消費されると発動可能。複数回斬撃を放ち、物理ダメージを与え、SPを一定量回復する。",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_アークライト_combo_base",
            "name": "雷鳴 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.8,
            "valuesByRank": {
              "r1": 1.55,
              "r9": 2.8,
              "spec1": 3.0333,
              "spec2": 3.2667,
              "spec3": 3.5
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_arclight",
        "type": "ult",
        "name": "轟雷裂電",
        "shortName": "必殺技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 2.8,
          "lv10_spec1": 3.0333,
          "lv11_spec2": 3.2667,
          "lv12_spec3": 3.5
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_arclight_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "1段目突進(電磁+電磁付着): R1=156%→R9=280%→特化III=350% / 2段目爆発(電磁+付着消費強制感電): R1=244%→R9=440%→特化III=550%",
            "condition": "必殺チャージ消費90",
            "effectType": "multiplier"
          },
          {
            "id": "buff_arclight_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値: R1〜9[7+7]→特化III[10+10]",
            "condition": "必殺チャージ消費90",
            "effectType": "crush"
          },
          {
            "id": "buff_arclight_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【自己付着→即消費感電】1段目で電磁付着を付与し、直後の2段目爆発でその電磁付着を消費して強制感電にする2段構造",
            "condition": "必殺チャージ消費90",
            "special": "【自己付着→即消費感電】1段目で電磁付着を付与し、直後の2段目爆発でその電磁付着を消費して強制感電にする2段構造",
            "effectType": "special"
          }
        ],
        "epCost": 90,
        "infliction": {
          "type": "electric",
          "stacks": 1,
          "label": "⚡ 電磁付着 (+1段階)",
          "description": "電磁付着(1段階・1段目突進時)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "2段目爆発時、敵が電磁付着状態なら電磁付着を消費して強制感電付与",
          "description": "2段目爆発時、敵が電磁付着状態なら電磁付着を消費して強制感電付与"
        },
        "description": "前方に向かって突進し、軌道上の敵に電磁ダメージを与え、電磁付着を付与する。一定時間後、残っている電光を爆発させ、再度電磁ダメージを与える。敵が電磁付着状態の場合、電磁付着状態を消費して、敵を強制的に感電状態にする。",
        "damageTypeDetail": "電磁",
        "rawText": "前方に向かって突進し、軌道上の敵に電磁ダメージを与え、電磁付着を付与する。一定時間後、残っている電光を爆発させ、再度電磁ダメージを与える。敵が電磁付着状態の場合、電磁付着状態を消費して、敵を強制的に感電状態にする。",
        "attachText": "電磁付着(1段階・1段目突進時)",
        "anomalyText": "2段目爆発時、敵が電磁付着状態なら電磁付着を消費して強制感電付与",
        "special": "【自己付着→即消費感電】1段目で電磁付着を付与し、直後の2段目爆発でその電磁付着を消費して強制感電にする2段構造",
        "modifiers": [
          {
            "id": "mod_アークライト_ult_base",
            "name": "轟雷裂電 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.8,
            "valuesByRank": {
              "r1": 1.56,
              "r9": 2.8,
              "spec1": 3.0333,
              "spec2": 3.2667,
              "spec3": 3.5
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "十二問",
    "recommendedWeapons": [
      "テルミット・カッター",
      "十二問"
    ],
    "normalAttack": {
      "name": "追跡捕獲",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[10%/13%/26%/36%/48%]→R9[18%/23%/47%/65%/86%]→特化III[23%/28%/59%/81%/107%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク16 / 終撃時SP回復",
      "description": "最大5段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値16を与える。",
      "raw": "最大5段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値16を与える。"
    },
    "talents": [
      {
        "id": "talent_arclight_1",
        "name": "荒野の吟遊者",
        "description": "戦技「疾風迅雷」で追加効果が3回発動すると、15秒間自身の知性1につきチーム全員の電磁ダメージ+0.05%→+0.08%（重ね掛け不可）",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_arclight_talent1_damage_up",
            "name": "荒野の吟遊者",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "damage_up",
            "calcGroupLabel": "【ダメージUP補正】与ダメUP",
            "value": 0,
            "duration": 15.0,
            "description": "自身の知性1につきチーム全員の電磁ダメージ+0.05%(昇進1) → +0.08%(昇進2)",
            "condition": "戦技「疾風迅雷」の感電消費追加効果が累計3回(5凸で2回)発動時 / 15秒間 / 重ね掛け不可"
          }
        ]
      },
      {
        "id": "talent_arclight_2",
        "name": "衆生智慧",
        "description": "アーツ付着を受けるとき、30%→50%の確率で無効になる",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_arclight_talent2_aux",
            "name": "衆生智慧",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "30%(昇進2) → 50%(昇進3)の確率で被アーツ付着無効",
            "condition": "自身が敵からアーツ付着を受ける時"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "アークライト 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【自己付着→即消費感電】1段目で電磁付着を付与し、直後の2段目爆発でその電磁付着を消費して強制感電にする2段構造 ／ 【発動回数緩和】素質1「荒野の吟遊者」の発動に必要な戦技追加効果回数が3回→2回に減少"
    },
    "recommendedArmorSet": "set_pioneer",
    "recommendedArmorSetName": "パイオニアセット",
    "recommendedArmor": {
      "armorSet": "set_pioneer",
      "body": "gold_body_e38391e382a4e38_32",
      "arm": "gold_arms_e38391e382a4e38_30",
      "acc1": "gold_accessories_e38391e382a4e38_43",
      "acc2": "gold_accessories_e69591e59bbde58_73"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_ardelia",
    "name": "アルデリア",
    "icon": "image/ardelia.png",
    "rarity": 6,
    "element": "自然",
    "weaponType": "アーツユニット",
    "class": "補助",
    "mainStat": "知性",
    "subStat": "意志",
    "baseStats": {
      "hp": 6800,
      "atk": 920,
      "strength": 120,
      "agility": 110,
      "intellect": 285,
      "willpower": 185,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_ardelia",
        "type": "skill",
        "name": "ドリーラッシュ",
        "shortName": "戦技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 2.56,
          "lv10_spec1": 2.7733,
          "lv11_spec2": 2.9867,
          "lv12_spec3": 3.2
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_ardelia_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 30.0,
            "description": "自然ダメ倍率: R1=142% → R9=256% → 特化III=320%",
            "condition": "SP消費100 / 腐食消費時の脆弱持続30秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_ardelia_skill_vulnerability",
            "name": "物理脆弱 & アーツ脆弱",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 30.0,
            "description": "腐食消費時、敵に物理脆弱 & アーツ脆弱(30秒): R1=12% → R9=16% → 特化III=20%",
            "condition": "SP消費100 / 腐食消費時の脆弱持続30秒",
            "effectType": "debuff"
          },
          {
            "id": "buff_ardelia_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 30.0,
            "description": "SP消費100 / ブレイク値10",
            "condition": "SP消費100 / 腐食消費時の脆弱持続30秒",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "腐食状態の消費(腐食中の敵に命中時、腐食を消費して物理脆弱＆アーツ脆弱を付与)",
          "description": "腐食状態の消費(腐食中の敵に命中時、腐食を消費して物理脆弱＆アーツ脆弱を付与)"
        },
        "description": "ドリーさんに乗って敵に突進し、自然ダメージを与える。腐食状態の敵に命中した場合、腐食状態を消費し、物理脆弱とアーツ脆弱を付与する。（※自然付着なし）",
        "damageTypeDetail": "自然",
        "rawText": "ドリーさんに乗って敵に突進し、自然ダメージを与える。腐食状態の敵に命中した場合、腐食状態を消費し、物理脆弱とアーツ脆弱を付与する。（※自然付着なし）",
        "attachText": "なし",
        "anomalyText": "腐食状態の消費(腐食中の敵に命中時、腐食を消費して物理脆弱＆アーツ脆弱を付与)",
        "modifiers": [
          {
            "id": "mod_アルデリア_skill_base",
            "name": "ドリーラッシュ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.56,
            "valuesByRank": {
              "r1": 1.42,
              "r9": 2.56,
              "spec1": 2.7733,
              "spec2": 2.9867,
              "spec3": 3.2
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_ardelia",
        "type": "combo",
        "name": "イラプション・コラム",
        "shortName": "連携技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 0.8,
          "lv10_spec1": 0.8667,
          "lv11_spec2": 0.9333,
          "lv12_spec3": 1.0
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_ardelia_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 18.0,
            "description": "接近ダメ: R1=45%→R9=80%→特化III=100% / 爆発ダメ: R1=111%→R9=200%→特化III=250%(周囲の他敵には半分)",
            "condition": "クラッシュ・アーツ付着いずれもない敵に操作キャラが重攻撃時発動可 / CD: R1〜9=18秒→特化III=17秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_ardelia_combo_res_down",
            "name": "強制腐食（全属性耐性低下）",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "res_down",
            "calcGroupLabel": "【耐性補正】",
            "value": 0,
            "duration": 18.0,
            "description": "強制腐食による全属性耐性ダウン(7秒間、段階1相当の強制腐食)",
            "condition": "クラッシュ・アーツ付着いずれもない敵に操作キャラが重攻撃時発動可 / CD: R1〜9=18秒→特化III=17秒",
            "effectType": "debuff"
          },
          {
            "id": "buff_ardelia_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 18.0,
            "description": "ブレイク値10",
            "condition": "クラッシュ・アーツ付着いずれもない敵に操作キャラが重攻撃時発動可 / CD: R1〜9=18秒→特化III=17秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "強制腐食付与(7秒間、5凸で11秒間 ※付着を介さず直接腐食にする)",
          "description": "強制腐食付与(7秒間、5凸で11秒間 ※付着を介さず直接腐食にする)"
        },
        "description": "操作中のオペレーターがクラッシュまたはアーツ付着状態でない敵に重攻撃を与えると発動可能。火山雲は敵を追尾し爆発し、強制的に短時間(7秒)腐食状態にする。（※自然付着なし）",
        "damageTypeDetail": "自然",
        "rawText": "操作中のオペレーターがクラッシュまたはアーツ付着状態でない敵に重攻撃を与えると発動可能。火山雲は敵を追尾し爆発し、強制的に短時間(7秒)腐食状態にする。（※自然付着なし）",
        "attachText": "なし",
        "anomalyText": "強制腐食付与(7秒間、5凸で11秒間 ※付着を介さず直接腐食にする)",
        "modifiers": [
          {
            "id": "mod_アルデリア_combo_base",
            "name": "イラプション・コラム 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.8,
            "valuesByRank": {
              "r1": 0.45,
              "r9": 0.8,
              "spec1": 0.8667,
              "spec2": 0.9333,
              "spec3": 1.0
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_ardelia",
        "type": "ult",
        "name": "もふもふパーティー",
        "shortName": "必殺技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 1.32,
          "lv10_spec1": 1.43,
          "lv11_spec2": 1.54,
          "lv12_spec3": 1.65
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_ardelia_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 3.0,
            "description": "分身1ヒット毎自然ダメ倍率: R1=73% → R9=132% → 特化III=165%",
            "condition": "必殺チャージ消費90 / 持続3秒(同一敵へ0.3秒に1回まで命中)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_ardelia_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 3.0,
            "description": "1ヒット毎ブレイク値2",
            "condition": "必殺チャージ消費90 / 持続3秒(同一敵へ0.3秒に1回まで命中)",
            "effectType": "crush"
          }
        ],
        "epCost": 90,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "移動できる状態で持続的にアーツを放ち、周囲にドリーさんの分身を放つ。同じ敵は0.3秒に1回まで自然ダメージを受ける。（※自然付着なし）",
        "damageTypeDetail": "自然",
        "rawText": "移動できる状態で持続的にアーツを放ち、周囲にドリーさんの分身を放つ。同じ敵は0.3秒に1回まで自然ダメージを受ける。（※自然付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_アルデリア_ult_base",
            "name": "もふもふパーティー 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.32,
            "valuesByRank": {
              "r1": 0.73,
              "r9": 1.32,
              "spec1": 1.43,
              "spec2": 1.54,
              "spec3": 1.65
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "蒼星の囁き",
    "recommendedWeapons": [
      "蒼星の囁き",
      "遺忘"
    ],
    "normalAttack": {
      "name": "岩の囁き",
      "damageType": "自然",
      "damageTypeDetail": "自然",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[30%/40%/53%/55%]→R9[54%/72%/95%/99%]→特化III[68%/90%/118%/124%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク18 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に自然ダメージを与える（※自然付着なし）。重攻撃はブレイク値18を与える。",
      "raw": "最大4段の攻撃で敵に自然ダメージを与える（※自然付着なし）。重攻撃はブレイク値18を与える。"
    },
    "talents": [
      {
        "id": "talent_ardelia_1",
        "name": "友の面影",
        "description": "戦技命中時ドリーさんの影を3個生成、必殺分身着地時10%で生成。触れるとHPを[90+意志×0.75]回復させる。",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_ardelia_talent1_aux",
            "name": "友の面影",
            "target": "single",
            "targetLabel": "単体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 10.0,
            "description": "操作キャラ(満タン時は最低HP割合の味方)のHPを[45+意志×0.38](初期)→[63+意志×0.53](昇進1)→[90+意志×0.75](昇進2)回復",
            "condition": "戦技命中時3個・必殺分身着地時10%確率で「ドリーさんの影」生成(持続10秒・最大10個) → 接触時回復"
          }
        ]
      },
      {
        "id": "talent_ardelia_2",
        "name": "山頂サーフィン",
        "description": "戦技「ドリーラッシュ」の追加効果が発動したとき、近くに他の腐食状態の敵がいる場合、その敵に戦技をもう1回発動する（1回のみ）",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "special",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_ardelia_talent2_special",
            "name": "山頂サーフィン",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【戦技連鎖再発動】近くの別の腐食状態の敵に対しても戦技「ドリーラッシュ」をもう1回自動発動する",
            "condition": "戦技の腐食消費追加効果発動時、近くに他の腐食状態の敵がいる場合(戦技1回につき1回)",
            "special": "【戦技連鎖再発動】近くの別の腐食状態の敵に対しても戦技「ドリーラッシュ」をもう1回自動発動する"
          }
        ],
        "special": "【戦技連鎖再発動】近くの別の腐食状態の敵に対しても戦技「ドリーラッシュ」をもう1回自動発動する"
      }
    ],
    "specialMechanic": {
      "title": "アルデリア 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【戦技連鎖再発動】近くの別の腐食状態の敵に対しても戦技「ドリーラッシュ」をもう1回自動発動する"
    },
    "recommendedArmorSet": "set_ruten",
    "recommendedArmorSetName": "流転セット",
    "recommendedArmor": {
      "armorSet": "set_ruten",
      "body": "gold_body_e6b581e8bba2e8b_14",
      "arm": "gold_arms_e6b581e8bba2e38_13",
      "acc1": "gold_accessories_e6b581e8bba2e38_16",
      "acc2": "gold_accessories_e6b581e8bba2e38_16"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_avywenna",
    "name": "アイビーエナ",
    "icon": "image/avywenna.png",
    "rarity": 5,
    "element": "電磁",
    "weaponType": "長柄武器",
    "class": "突撃",
    "mainStat": "敏捷",
    "subStat": "筋力",
    "baseStats": {
      "hp": 6300,
      "atk": 810,
      "strength": 160,
      "agility": 245,
      "intellect": 100,
      "willpower": 95,
      "artsIntensity": 65,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_avywenna",
        "type": "skill",
        "name": "雷槍・逆襲",
        "shortName": "戦技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 1.2,
          "lv10_spec1": 1.3,
          "lv11_spec2": 1.4,
          "lv12_spec3": 1.5
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_avywenna_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "旋風: R1=67%→R9=120%→特化III=150% / 雷槍1本毎: R1=75%→R9=134%→特化III=168% / 強雷槍: R1=192%→R9=346%→特化III=432%",
            "condition": "SP消費100 / 設置済みの雷槍(連携)・強雷槍(必殺)を全回収",
            "effectType": "multiplier"
          },
          {
            "id": "buff_avywenna_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値: 旋風5 / 雷槍5 / 強雷槍10",
            "condition": "SP消費100 / 設置済みの雷槍(連携)・強雷槍(必殺)を全回収",
            "effectType": "crush"
          },
          {
            "id": "buff_avywenna_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【槍回収ギミック】戦技単体や雷槍(連携技設置)回収時は電磁ダメのみで電磁付着なし。必殺技で設置した「強雷槍」を戦技で回収して敵を貫通した時のみ電磁付着を付与する",
            "condition": "SP消費100 / 設置済みの雷槍(連携)・強雷槍(必殺)を全回収",
            "special": "【槍回収ギミック】戦技単体や雷槍(連携技設置)回収時は電磁ダメのみで電磁付着なし。必殺技で設置した「強雷槍」を戦技で回収して敵を貫通した時のみ電磁付着を付与する",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "electric",
          "stacks": 1,
          "label": "【限定】必殺技期間中のみ条件付き電磁付着(1段階・必殺技で設置した「強雷槍」を回収貫通した時のみ付与。通常旋風・連携雷槍回収には付着なし！)",
          "description": "条件付き電磁付着(1段階・必殺技で設置した「強雷槍」を回収貫通した時のみ付与。通常旋風・連携雷槍回収には付着なし！)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "周囲の敵にわずかな電磁ダメージを与え、すべての雷槍、強雷槍を回収する。回収時に雷槍が敵を貫通すると電磁ダメージを与え、強雷槍はより高い電磁ダメージを与え、電磁付着を付与する。",
        "damageTypeDetail": "電磁",
        "rawText": "周囲の敵にわずかな電磁ダメージを与え、すべての雷槍、強雷槍を回収する。回収時に雷槍が敵を貫通すると電磁ダメージを与え、強雷槍はより高い電磁ダメージを与え、電磁付着を付与する。",
        "attachText": "条件付き電磁付着(1段階・必殺技で設置した「強雷槍」を回収貫通した時のみ付与。通常旋風・連携雷槍回収には付着なし！)",
        "anomalyText": "なし",
        "special": "【槍回収ギミック】戦技単体や雷槍(連携技設置)回収時は電磁ダメのみで電磁付着なし。必殺技で設置した「強雷槍」を戦技で回収して敵を貫通した時のみ電磁付着を付与する",
        "modifiers": [
          {
            "id": "mod_アイビーエナ_skill_base",
            "name": "雷槍・逆襲 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.2,
            "valuesByRank": {
              "r1": 0.67,
              "r9": 1.2,
              "spec1": 1.3,
              "spec2": 1.4,
              "spec3": 1.5
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_avywenna",
        "type": "combo",
        "name": "雷槍・閃撃",
        "shortName": "連携技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 3.04,
          "lv10_spec1": 3.2933,
          "lv11_spec2": 3.5467,
          "lv12_spec3": 3.8
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_avywenna_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 13.0,
            "description": "電磁ダメ倍率: R1=169% → R9=304% → 特化III=380%(雷槍3本設置・持続30秒)",
            "condition": "電磁付着または感電状態の敵に操作キャラが重攻撃時発動可 / CD: R1〜9=13秒→特化III=12秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_avywenna_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 13.0,
            "description": "ブレイク値10 / 必殺チャージ獲得0(※素質1で命中回収時に回復)",
            "condition": "電磁付着または感電状態の敵に操作キャラが重攻撃時発動可 / CD: R1〜9=13秒→特化III=12秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "電磁付着または感電状態の敵に重攻撃を与えると発動可能。敵に3本の雷槍を投げ、範囲内の敵に1回電磁ダメージを与える。（※電磁付着なし）",
        "damageTypeDetail": "電磁",
        "rawText": "電磁付着または感電状態の敵に重攻撃を与えると発動可能。敵に3本の雷槍を投げ、範囲内の敵に1回電磁ダメージを与える。（※電磁付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_アイビーエナ_combo_base",
            "name": "雷槍・閃撃 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.04,
            "valuesByRank": {
              "r1": 1.69,
              "r9": 3.04,
              "spec1": 3.2933,
              "spec2": 3.5467,
              "spec3": 3.8
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_avywenna",
        "type": "ult",
        "name": "雷槍・決震",
        "shortName": "必殺技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 7.6,
          "lv10_spec1": 8.2333,
          "lv11_spec2": 8.8667,
          "lv12_spec3": 9.5
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_avywenna_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 10.0,
            "description": "電磁ダメ倍率: R1=422% → R9=760% → 特化III=950%",
            "condition": "必殺チャージ消費100 / CD10秒(強雷槍1本設置・持続30秒 ※投擲命中自体は電磁付着なし！)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_avywenna_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 10.0,
            "description": "ブレイク値15",
            "condition": "必殺チャージ消費100 / CD10秒(強雷槍1本設置・持続30秒 ※投擲命中自体は電磁付着なし！)",
            "effectType": "crush"
          }
        ],
        "epCost": 80,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "目標エリアに強雷槍を投げ、周囲の敵に高い電磁ダメージを与える。（※設置時点では電磁付着なし、戦技回収時に付着）",
        "damageTypeDetail": "電磁",
        "rawText": "目標エリアに強雷槍を投げ、周囲の敵に高い電磁ダメージを与える。（※設置時点では電磁付着なし、戦技回収時に付着）",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_アイビーエナ_ult_base",
            "name": "雷槍・決震 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 7.6,
            "valuesByRank": {
              "r1": 4.22,
              "r9": 7.6,
              "spec1": 8.2333,
              "spec2": 8.8667,
              "spec3": 9.5
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "求心の槍",
    "recommendedWeapons": [
      "求心の槍",
      "J.E.T."
    ],
    "normalAttack": {
      "name": "雷槍・迅撃",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[17%/22%/21%/30%/50%]→R9[30%/39%/37%/54%/90%]→特化III[37%/48%/46%/68%/113%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク17 / 終撃時SP回復",
      "description": "最大5段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値17を与える。",
      "raw": "最大5段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値17を与える。"
    },
    "talents": [
      {
        "id": "talent_avywenna_1",
        "name": "配達の効率化",
        "description": "投げてから回収するまでの雷槍、強雷槍が敵に命中すると、必殺チャージを3→4回復する",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_avywenna_talent1_aux",
            "name": "配達の効率化",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "1命中につき必殺チャージ+3(昇進1) → +4(昇進2)回復",
            "condition": "投げてから回収するまでの雷槍・強雷槍が敵に命中した時"
          }
        ]
      },
      {
        "id": "talent_avywenna_2",
        "name": "婉曲手段",
        "description": "必殺技「雷槍・決震」が敵に命中するとき、10秒間持続する6%→10%の電磁脆弱を付与する",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_avywenna_talent2_vulnerability",
            "name": "婉曲手段",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 10.0,
            "description": "敵に電磁脆弱+6%(昇進2) → +10%(昇進3)",
            "condition": "必殺技「雷槍・決震」命中時 / 持続10秒"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "アイビーエナ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【槍回収ギミック】戦技単体や雷槍(連携技設置)回収時は電磁ダメのみで電磁付着なし。必殺技で設置した「強雷槍」を戦技で回収して敵を貫通した時のみ電磁付着を付与する"
    },
    "recommendedArmorSet": "set_kotsusai",
    "recommendedArmorSetName": "骨砕セット",
    "recommendedArmor": {
      "armorSet": "set_kotsusai",
      "body": "gold_body_e9aaa8e7a095e38_43",
      "arm": "gold_arms_e9aaa8e7a095e38_35",
      "acc1": "gold_accessories_e9aaa8e7a095e38_53",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_camille",
    "name": "カミーユ",
    "icon": "image/camille.png",
    "rarity": 6,
    "element": "灼熱",
    "weaponType": "長柄武器",
    "class": "先鋒",
    "mainStat": "筋力",
    "subStat": "知性",
    "baseStats": {
      "hp": 7300,
      "atk": 820,
      "strength": 285,
      "agility": 110,
      "intellect": 185,
      "willpower": 110,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 20,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_camille",
        "type": "skill",
        "name": "影祓う",
        "shortName": "戦技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 1.6,
          "lv10_spec1": 1.7333,
          "lv11_spec2": 1.8667,
          "lv12_spec3": 2.0
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_camille_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 45.0,
            "description": "初回ダメ: R1=89%→R9=160%→特化III=200% / カミーユ連携命中時の追撃爆発ダメ: R1=45%→R9=80%→特化III=100%",
            "condition": "SP消費100 / 「燃える血の翼」包囲持続45秒(敵撃破時に近くの敵へ転移し再度灼熱ダメ・灼熱付着・デバフ付与)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_camille_skill_vulnerability",
            "name": "包囲灼熱脆弱",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 45.0,
            "description": "包囲中の敵に灼熱脆弱: R1=5% → R9=6% → 特化III=7%",
            "condition": "SP消費100 / 「燃える血の翼」包囲持続45秒(敵撃破時に近くの敵へ転移し再度灼熱ダメ・灼熱付着・デバフ付与)",
            "effectType": "debuff"
          },
          {
            "id": "buff_camille_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 45.0,
            "description": "ブレイク値10 / 包囲中の敵に弱体化(敵与ダメ低下): R1=5%→R9=6%→特化III=7%",
            "condition": "SP消費100 / 「燃える血の翼」包囲持続45秒(敵撃破時に近くの敵へ転移し再度灼熱ダメ・灼熱付着・デバフ付与)",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "heat",
          "stacks": 1,
          "label": "🔥 灼熱付着 (+1段階)",
          "description": "灼熱付着(1段階・召喚時および包囲敵撃破転移時)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "燃える血の翼を召喚して敵へ飛ばし、灼熱ダメージを与え、灼熱付着を付与する。その後45秒間包囲し、弱体化と灼熱脆弱を付与する。連携技命中時に追加爆発ダメージ。",
        "damageTypeDetail": "灼熱",
        "rawText": "燃える血の翼を召喚して敵へ飛ばし、灼熱ダメージを与え、灼熱付着を付与する。その後45秒間包囲し、弱体化と灼熱脆弱を付与する。連携技命中時に追加爆発ダメージ。",
        "attachText": "灼熱付着(1段階・召喚時および包囲敵撃破転移時)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_カミーユ_skill_base",
            "name": "影祓う 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.6,
            "valuesByRank": {
              "r1": 0.89,
              "r9": 1.6,
              "spec1": 1.7333,
              "spec2": 1.8667,
              "spec3": 2.0
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_camille",
        "type": "combo",
        "name": "心抉る棘（および必殺派生「追及」）",
        "shortName": "連携技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 2.4,
          "lv10_spec1": 2.6,
          "lv11_spec2": 2.8,
          "lv12_spec3": 3.0
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_camille_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "通常連携ダメ: R1=133%→R9=240%→特化III=300% / 必殺後派生「追及」ダメ: R1=222%→R9=400%→特化III=500%",
            "condition": "敵の灼熱付着が消費または吸収された時発動可 / CD: R1=20秒→R9=19秒→特化III=18秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_camille_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値10(追及20) / 必殺チャージ回復10 / SP回復: 通常[R1=16→R9=18→特化III=20]、追及[R1=32→R9=36→特化III=40]",
            "condition": "敵の灼熱付着が消費または吸収された時発動可 / CD: R1=20秒→R9=19秒→特化III=18秒",
            "effectType": "crush"
          },
          {
            "id": "buff_camille_combo_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 20.0,
            "description": "【必殺派生「追及」】必殺技発動後15秒間、次の戦技がSP消費0の「追及」に変化し、戦技ではなく『連携技ダメージ』として扱われる（連携技ダメUPが乗り、戦技ダメUP・リンクは乗らない）",
            "condition": "敵の灼熱付着が消費または吸収された時発動可 / CD: R1=20秒→R9=19秒→特化III=18秒",
            "special": "【必殺派生「追及」】必殺技発動後15秒間、次の戦技がSP消費0の「追及」に変化し、戦技ではなく『連携技ダメージ』として扱われる（連携技ダメUPが乗り、戦技ダメUP・リンクは乗らない）",
            "effectType": "special"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "敵の灼熱付着が消費または吸収されると発動可能。高速で駆け抜けて灼熱ダメージを与え、SPを一定量回復する。（※連携技・追及ともに灼熱付着なし）",
        "damageTypeDetail": "灼熱",
        "rawText": "敵の灼熱付着が消費または吸収されると発動可能。高速で駆け抜けて灼熱ダメージを与え、SPを一定量回復する。（※連携技・追及ともに灼熱付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "special": "【必殺派生「追及」】必殺技発動後15秒間、次の戦技がSP消費0の「追及」に変化し、戦技ではなく『連携技ダメージ』として扱われる（連携技ダメUPが乗り、戦技ダメUP・リンクは乗らない）",
        "modifiers": [
          {
            "id": "mod_カミーユ_combo_base",
            "name": "心抉る棘（および必殺派生「追及」） 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.4,
            "valuesByRank": {
              "r1": 1.33,
              "r9": 2.4,
              "spec1": 2.6,
              "spec2": 2.8,
              "spec3": 3.0
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_camille",
        "type": "ult",
        "name": "降り注ぐ深紅",
        "shortName": "必殺技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 4.8,
          "lv10_spec1": 5.2,
          "lv11_spec2": 5.6,
          "lv12_spec3": 6.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_camille_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "灼熱ダメ倍率: R1=267% → R9=480% → 特化III=600%",
            "condition": "必殺チャージ消費130 / CD20秒 / 発動後15秒間、次の戦技が「追及」(SP消費0・連携技扱い)に変化",
            "effectType": "multiplier"
          },
          {
            "id": "buff_camille_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値15 / SP回復: R1=32 → R9=36 → 特化III=40",
            "condition": "必殺チャージ消費130 / CD20秒 / 発動後15秒間、次の戦技が「追及」(SP消費0・連携技扱い)に変化",
            "effectType": "crush"
          }
        ],
        "epCost": 80,
        "infliction": {
          "type": "heat",
          "stacks": 1,
          "label": "🔥 灼熱付着 (+1段階)",
          "description": "灼熱付着(1段階)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "命中した目標に灼熱ダメージを与え、灼熱付着を付与し、同時にSPを一定量回復する。発動後15秒間、次の戦技が追及(連携技扱い・SP消費なし)に替わる。",
        "damageTypeDetail": "灼熱",
        "rawText": "命中した目標に灼熱ダメージを与え、灼熱付着を付与し、同時にSPを一定量回復する。発動後15秒間、次の戦技が追及(連携技扱い・SP消費なし)に替わる。",
        "attachText": "灼熱付着(1段階)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_カミーユ_ult_base",
            "name": "降り注ぐ深紅 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 4.8,
            "valuesByRank": {
              "r1": 2.67,
              "r9": 4.8,
              "spec1": 5.2,
              "spec2": 5.6,
              "spec3": 6.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "カーマインヴェール",
    "recommendedWeapons": [
      "カーマインヴェール",
      "負山"
    ],
    "normalAttack": {
      "name": "血の償い",
      "damageType": "灼熱",
      "damageTypeDetail": "灼熱",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[25%/20%/30%/34%/50%]→R9[45%/36%/54%/61%/90%]→特化III[56%/45%/68%/77%/113%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク18 / 終撃時SP回復",
      "description": "最大5段の攻撃で、敵に灼熱ダメージを与える（※灼熱付着なし）。重攻撃はブレイク値18を与える。",
      "raw": "最大5段の攻撃で、敵に灼熱ダメージを与える（※灼熱付着なし）。重攻撃はブレイク値18を与える。"
    },
    "talents": [
      {
        "id": "talent_camille_1",
        "name": "罪追人",
        "description": "連携技「心抉る棘」強化：燃える血の翼で包囲している敵に命中するとき、自身の[60+知性×0.3]のHPを回復し、さらに15秒間持続するリンク状態を獲得する（追及は無条件発動）",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_camille_talent1_link",
            "name": "罪追人",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "link",
            "calcGroupLabel": "【リンク補正】",
            "value": 0,
            "duration": 15.0,
            "description": "リンク状態獲得(15秒間、チーム共有・次の戦技1.3倍/必殺1.2倍)",
            "condition": "連携技が包囲中の敵に命中時(「追及」は包囲なしでも発動) / リンク持続15秒"
          },
          {
            "id": "buff_camille_talent1_aux",
            "name": "罪追人",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 15.0,
            "description": "自身のHPを[30+知性×0.15](昇進1) → [60+知性×0.3](昇進3)回復(素質2のトリガー)",
            "condition": "連携技が包囲中の敵に命中時(「追及」は包囲なしでも発動) / リンク持続15秒"
          }
        ]
      },
      {
        "id": "talent_camille_2",
        "name": "血の蘇生",
        "description": "スキルで自身のHPを回復するたびに、40秒間灼熱ダメージ+2%→+4%（最大5段階）。チーム内の他のオペレーターはこの効果の25%を獲得する（HP満タン時は2段階獲得）",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_camille_talent2_damage_up",
            "name": "血の蘇生",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "damage_up",
            "calcGroupLabel": "【ダメージUP補正】与ダメUP",
            "value": 0,
            "duration": 40.0,
            "description": "自身: 灼熱ダメージ+2%→+4%×最大5段階(最大+20%) / 他の味方全員: その25%(+0.5%→+1%×最大5段階=最大+5%)",
            "condition": "スキルで自身のHPを回復するたび(HP満タン時は1回で2段階獲得) / 40秒間 / 最大5段階"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "カミーユ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【必殺派生「追及」】必殺技発動後15秒間、次の戦技がSP消費0の「追及」に変化し、戦技ではなく『連携技ダメージ』として扱われる（連携技ダメUPが乗り、戦技ダメUP・リンクは乗らない）"
    },
    "recommendedArmorSet": "set_volcano",
    "recommendedArmorSetName": "火山用セット",
    "recommendedArmor": {
      "armorSet": "set_volcano",
      "body": "gold_body_e781abe5b1b1e79_30",
      "arm": "gold_arms_e781abe5b1b1e79_26",
      "acc1": "gold_accessories_e781abe5b1b1e79_37",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_catcher",
    "name": "キャッチャー",
    "icon": "image/catcher.png",
    "rarity": 4,
    "element": "物理",
    "weaponType": "大剣",
    "class": "重装",
    "mainStat": "筋力",
    "subStat": "意志",
    "baseStats": {
      "hp": 5800,
      "atk": 550,
      "strength": 210,
      "agility": 80,
      "intellect": 85,
      "willpower": 135,
      "artsIntensity": 20,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_catcher",
        "type": "skill",
        "name": "強制ブロック",
        "shortName": "戦技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 3.2,
          "lv10_spec1": 3.4667,
          "lv11_spec2": 3.7333,
          "lv12_spec3": 4.0
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_catcher_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "反撃物理ダメ倍率: R1=178% → R9=320% → 特化III=400%",
            "condition": "SP消費100(即時SP30返還) / ブロック構え中に被弾すると反撃発動",
            "effectType": "multiplier"
          },
          {
            "id": "buff_catcher_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "即時SP30返還 / 構え中自身と周囲の味方に加護90% / 反撃時ブレイク値20",
            "condition": "SP消費100(即時SP30返還) / ブロック構え中に被弾すると反撃発動",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💥 クラッシュ付与 (+1段)",
          "description": "クラッシュ付与(+1段階・被攻撃反撃時)"
        },
        "description": "盾を構えて敵の攻撃をブロックし、自身と周囲のオペレーターに加護(90%)を与え、即座にSPが30返還される。攻撃を受けると反撃し、物理ダメージを与え、クラッシュ段階を1増加させる。",
        "damageTypeDetail": "物理",
        "rawText": "盾を構えて敵の攻撃をブロックし、自身と周囲のオペレーターに加護(90%)を与え、即座にSPが30返還される。攻撃を受けると反撃し、物理ダメージを与え、クラッシュ段階を1増加させる。",
        "attachText": "なし",
        "anomalyText": "クラッシュ付与(+1段階・被攻撃反撃時)",
        "modifiers": [
          {
            "id": "mod_キャッチャー_skill_base",
            "name": "強制ブロック 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.2,
            "valuesByRank": {
              "r1": 1.78,
              "r9": 3.2,
              "spec1": 3.4667,
              "spec2": 3.7333,
              "spec3": 4.0
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_catcher",
        "type": "combo",
        "name": "即時制圧",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 0.44,
          "lv10_spec1": 0.4767,
          "lv11_spec2": 0.5133,
          "lv12_spec3": 0.55
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_catcher_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 35.0,
            "description": "1回目: R1=25%→R9=44%→特化III=55% / 2回目: R1=100%→R9=180%→特化III=225%",
            "condition": "敵がチャージ開始または操作キャラ被弾でHP40%未満時発動可 / CD: R1〜9=35秒→特化III=33秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_catcher_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 35.0,
            "description": "ブレイク値10 / 自身＋味方1人(操作キャラ優先)に10秒間シールド付与: R1[360+防御×2.25]→R9[756+防御×4.73]→特化III[810+防御×5.06]",
            "condition": "敵がチャージ開始または操作キャラ被弾でHP40%未満時発動可 / CD: R1〜9=35秒→特化III=33秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "敵に物理ダメージを与える。同時に、自身と味方オペレーター1人（操作中のオペレーターを優先）にシールドを付与する。",
        "damageTypeDetail": "物理",
        "rawText": "敵に物理ダメージを与える。同時に、自身と味方オペレーター1人（操作中のオペレーターを優先）にシールドを付与する。",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_キャッチャー_combo_base",
            "name": "即時制圧 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.44,
            "valuesByRank": {
              "r1": 0.25,
              "r9": 0.44,
              "spec1": 0.4767,
              "spec2": 0.5133,
              "spec3": 0.55
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_catcher",
        "type": "ult",
        "name": "教科書通り",
        "shortName": "必殺技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 1.6,
          "lv10_spec1": 1.7333,
          "lv11_spec2": 1.8667,
          "lv12_spec3": 2.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_catcher_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "1〜3段目倍率: R1[89%/120%/178%] → R9[160%/216%/320%] → 特化III[200%/270%/400%]",
            "condition": "必殺チャージ消費80",
            "effectType": "multiplier"
          },
          {
            "id": "buff_catcher_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値[5+5+10=20] / 敵に弱体化(8秒間): R1=20%→R9=25%→特化III=30%",
            "condition": "必殺チャージ消費80",
            "effectType": "crush"
          }
        ],
        "epCost": 80,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💥 クラッシュ付与 (+1段)",
          "description": "転倒付与(クラッシュ+1段階・3段目叩き付け時)"
        },
        "description": "前方へ斬撃を2回放ち、敵に物理ダメージを与え、弱体化を付与する。さらに地面を叩き付け、高い物理ダメージと転倒効果を与える。",
        "damageTypeDetail": "物理",
        "rawText": "前方へ斬撃を2回放ち、敵に物理ダメージを与え、弱体化を付与する。さらに地面を叩き付け、高い物理ダメージと転倒効果を与える。",
        "attachText": "なし",
        "anomalyText": "転倒付与(クラッシュ+1段階・3段目叩き付け時)",
        "modifiers": [
          {
            "id": "mod_キャッチャー_ult_base",
            "name": "教科書通り 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.6,
            "valuesByRank": {
              "r1": 0.89,
              "r9": 1.6,
              "spec1": 1.7333,
              "spec2": 1.8667,
              "spec3": 2.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "O.B.J.重責",
    "recommendedWeapons": [
      "O.B.J.重責",
      "破砕君主"
    ],
    "normalAttack": {
      "name": "基礎戦術",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[35%/39%/54%/71%]→R9[63%/69%/97%/128%]→特化III[79%/87%/122%/160%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク22 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値22を与える。",
      "raw": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値22を与える。"
    },
    "talents": [
      {
        "id": "talent_catcher_1",
        "name": "不屈の防壁",
        "description": "意志10につき防御力+1.0→+1.2",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_catcher_talent1_aux",
            "name": "不屈の防壁",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "意志10につき防御力+1.0(昇進1) → +1.2(昇進2)",
            "condition": "常時(意志参照)"
          }
        ]
      },
      {
        "id": "talent_catcher_2",
        "name": "俯瞰思考",
        "description": "必殺技「教科書通り」の最後の一撃は衝撃波を2回(各30%) → 3回(各45%)発生させ、物理ダメージを与える",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_catcher_talent2_multiplier",
            "name": "俯瞰思考",
            "target": "none",
            "targetLabel": "なし",
            "category": "buff",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "衝撃波追加物理ダメ: 40%×2回(昇進1:30%×2回) → 45%×3回=計135%(昇進3)",
            "condition": "必殺技「教科書通り」の最終撃時"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "キャッチャー 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【防御力参照追加ダメ】追加で[300+防御力×5.0]の物理ダメージを1回与える(攻撃力倍率ではなく固定値+防御力スケーリング)"
    },
    "recommendedArmorSet": "set_pioneer",
    "recommendedArmorSetName": "パイオニアセット",
    "recommendedArmor": {
      "armorSet": "set_pioneer",
      "body": "gold_body_e38391e382a4e38_32",
      "arm": "gold_arms_e38391e382a4e38_31",
      "acc1": "gold_accessories_e38391e382a4e38_42",
      "acc2": "gold_accessories_e69591e59bbde58_73"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_chen",
    "name": "チェン・センユー",
    "icon": "image/chen.png",
    "rarity": 5,
    "element": "物理",
    "weaponType": "片手剣",
    "class": "前衛",
    "mainStat": "敏捷",
    "subStat": "意志",
    "baseStats": {
      "hp": 6300,
      "atk": 720,
      "strength": 100,
      "agility": 245,
      "intellect": 100,
      "willpower": 160,
      "artsIntensity": 30,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_chen",
        "type": "skill",
        "name": "蒼穹返し",
        "shortName": "戦技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 3.04,
          "lv10_spec1": 3.2933,
          "lv11_spec2": 3.5467,
          "lv12_spec3": 3.8
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_chen_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "物理ダメ倍率: R1=169% → R9=304% → 特化III=380%",
            "condition": "SP消費100",
            "effectType": "multiplier"
          },
          {
            "id": "buff_chen_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP消費100 / ブレイク値10",
            "condition": "SP消費100",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "浮遊付与(クラッシュ+1段階、浮遊時間: R1=1秒→R9=2秒→特化III=2.5秒)"
        },
        "description": "敵を下から突き上げて攻撃し、物理ダメージと浮遊効果を与える。",
        "damageTypeDetail": "物理",
        "rawText": "敵を下から突き上げて攻撃し、物理ダメージと浮遊効果を与える。",
        "attachText": "なし",
        "anomalyText": "浮遊付与(クラッシュ+1段階、浮遊時間: R1=1秒→R9=2秒→特化III=2.5秒)",
        "modifiers": [
          {
            "id": "mod_チェン・センユー_skill_base",
            "name": "蒼穹返し 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.04,
            "valuesByRank": {
              "r1": 1.69,
              "r9": 3.04,
              "spec1": 3.2933,
              "spec2": 3.5467,
              "spec3": 3.8
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_chen",
        "type": "combo",
        "name": "天河昇",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 2.16,
          "lv10_spec1": 2.34,
          "lv11_spec2": 2.52,
          "lv12_spec3": 2.7
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_chen_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 16.0,
            "description": "物理ダメ倍率: R1=120% → R9=216% → 特化III=270%",
            "condition": "敵がクラッシュ状態になった時発動可 / CD: R1〜9=16秒→特化III=15秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_chen_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 16.0,
            "description": "ブレイク値0",
            "condition": "敵がクラッシュ状態になった時発動可 / CD: R1〜9=16秒→特化III=15秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "浮遊付与(クラッシュ+1段階)"
        },
        "description": "敵がクラッシュ状態になったときに発動可能。進路上のすべての敵に物理ダメージと浮遊効果を与える。",
        "damageTypeDetail": "物理",
        "rawText": "敵がクラッシュ状態になったときに発動可能。進路上のすべての敵に物理ダメージと浮遊効果を与える。",
        "attachText": "なし",
        "anomalyText": "浮遊付与(クラッシュ+1段階)",
        "modifiers": [
          {
            "id": "mod_チェン・センユー_combo_base",
            "name": "天河昇 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.16,
            "valuesByRank": {
              "r1": 1.2,
              "r9": 2.16,
              "spec1": 2.34,
              "spec2": 2.52,
              "spec3": 2.7
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_chen",
        "type": "ult",
        "name": "凍風斬り",
        "shortName": "必殺技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 0.65,
          "lv10_spec1": 0.7033,
          "lv11_spec2": 0.7567,
          "lv12_spec3": 0.81
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_chen_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "1〜6撃目(各): R1=36%→R9=65%→特化III=81% / 最終7撃目: R1=455%→R9=818%→特化III=1023%",
            "condition": "必殺チャージ消費70 / 7段斬撃",
            "effectType": "multiplier"
          },
          {
            "id": "buff_chen_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値: 初撃15＋最終撃20",
            "condition": "必殺チャージ消費70 / 7段斬撃",
            "effectType": "crush"
          }
        ],
        "epCost": 70,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "7段の斬撃を繰り出し、毎回物理ダメージを与える。最後の斬撃はより高いダメージになる。",
        "damageTypeDetail": "物理",
        "rawText": "7段の斬撃を繰り出し、毎回物理ダメージを与える。最後の斬撃はより高いダメージになる。",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_チェン・センユー_ult_base",
            "name": "凍風斬り 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.65,
            "valuesByRank": {
              "r1": 0.36,
              "r9": 0.65,
              "spec1": 0.7033,
              "spec2": 0.7567,
              "spec3": 0.81
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "仰止",
    "recommendedWeapons": [
      "仰止",
      "フーヤオ"
    ],
    "normalAttack": {
      "name": "飛霞破り",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[20%/24%/27%/30%/40%]→R9[36%/43%/48%/54%/72%]→特化III[45%/54%/60%/68%/90%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク16 / 終撃時SP回復",
      "description": "最大5段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値16を与える。",
      "raw": "最大5段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値16を与える。"
    },
    "talents": [
      {
        "id": "talent_chen_1",
        "name": "斬鋒",
        "description": "スキルが敵に命中すると、10秒間攻撃力+4%→+8%（5回まで重ね掛け可能）",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_chen_talent1_atk_pct",
            "name": "斬鋒",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "atk_pct",
            "calcGroupLabel": "【参照スケール】攻撃力%",
            "value": 0,
            "duration": 10.0,
            "description": "攻撃力+4%(昇進1)→+8%(昇進2)×最大5回(最大+40%)",
            "condition": "スキルが敵に命中した時 / 10秒間 / 最大5回重ね掛け"
          }
        ]
      },
      {
        "id": "talent_chen_2",
        "name": "破勢",
        "description": "スキルで敵のチャージを中断するとき、追加でブレイク値を5→10与える",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_chen_talent2_aux",
            "name": "破勢",
            "target": "none",
            "targetLabel": "なし",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "追加ブレイク値+5(昇進2) → +10(昇進3)",
            "condition": "スキルで敵のチャージを中断した時"
          }
        ]
      }
    ],
    "recommendedArmorSet": "set_chouiki",
    "recommendedArmorSetName": "軽量超域セット",
    "recommendedArmor": {
      "armorSet": "set_chouiki",
      "body": "gold_body_e8bbbde9878fe8b_44",
      "arm": "gold_arms_e8bbbde9878fe8b_38",
      "acc1": "gold_accessories_e8bbbde9878fe8b_58",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_dapan",
    "name": "ダパン",
    "icon": "image/dapan.png",
    "rarity": 5,
    "element": "物理",
    "weaponType": "大剣",
    "class": "突撃",
    "mainStat": "敏捷",
    "subStat": "筋力",
    "baseStats": {
      "hp": 6300,
      "atk": 810,
      "strength": 160,
      "agility": 245,
      "intellect": 100,
      "willpower": 95,
      "artsIntensity": 30,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_dapan",
        "type": "skill",
        "name": "鍋振り！",
        "shortName": "戦技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 2.4,
          "lv10_spec1": 2.6,
          "lv11_spec2": 2.8,
          "lv12_spec3": 3.0
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_dapan_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "物理ダメ倍率: R1=133% → R9=240% → 特化III=300%",
            "condition": "SP消費100",
            "effectType": "multiplier"
          },
          {
            "id": "buff_dapan_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP消費100 / ブレイク値10",
            "condition": "SP消費100",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "浮遊付与(クラッシュ+1段階、浮遊1.8秒)"
        },
        "description": "鍋を振り上げて攻撃する。敵に物理ダメージと浮遊効果を与える。",
        "damageTypeDetail": "物理",
        "rawText": "鍋を振り上げて攻撃する。敵に物理ダメージと浮遊効果を与える。",
        "attachText": "なし",
        "anomalyText": "浮遊付与(クラッシュ+1段階、浮遊1.8秒)",
        "modifiers": [
          {
            "id": "mod_ダパン_skill_base",
            "name": "鍋振り！ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.4,
            "valuesByRank": {
              "r1": 1.33,
              "r9": 2.4,
              "spec1": 2.6,
              "spec2": 2.8,
              "spec3": 3.0
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_dapan",
        "type": "combo",
        "name": "調味料！",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 5.2,
          "lv10_spec1": 5.6333,
          "lv11_spec2": 6.0667,
          "lv12_spec3": 6.5
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_dapan_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "連携物理ダメ倍率: R1=289% → R9=520% → 特化III=650%",
            "condition": "敵のクラッシュ段階が4になった時発動可 / CD: R1〜9=20秒→特化III=19秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_dapan_combo_damage_up",
            "name": "猛撃ダメージ追加UP",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "damage_up",
            "calcGroupLabel": "【ダメージUP補正】与ダメUP",
            "value": 0,
            "duration": 20.0,
            "description": "この連携技で発生する猛撃ダメージ追加UP: R1=+10% → R9=+15% → 特化III=+20%",
            "condition": "敵のクラッシュ段階が4になった時発動可 / CD: R1〜9=20秒→特化III=19秒",
            "effectType": "buff"
          },
          {
            "id": "buff_dapan_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値15",
            "condition": "敵のクラッシュ段階が4になった時発動可 / CD: R1〜9=20秒→特化III=19秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "consume_smash",
          "stacks": 1,
          "label": "💥 猛撃・クラッシュ消費",
          "description": "猛撃付与(クラッシュ4段階消費)"
        },
        "description": "敵のクラッシュ段階が4になったときに発動可能。鍋を振り回して敵に高い物理ダメージと猛撃を与える。この猛撃のダメージは追加でアップする。",
        "damageTypeDetail": "物理",
        "rawText": "敵のクラッシュ段階が4になったときに発動可能。鍋を振り回して敵に高い物理ダメージと猛撃を与える。この猛撃のダメージは追加でアップする。",
        "attachText": "なし",
        "anomalyText": "猛撃付与(クラッシュ4段階消費)",
        "modifiers": [
          {
            "id": "mod_ダパン_combo_base",
            "name": "調味料！ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 5.2,
            "valuesByRank": {
              "r1": 2.89,
              "r9": 5.2,
              "spec1": 5.6333,
              "spec2": 6.0667,
              "spec3": 6.5
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_dapan",
        "type": "ult",
        "name": "具材投入！",
        "shortName": "必殺技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 0.4,
          "lv10_spec1": 0.4333,
          "lv11_spec2": 0.4667,
          "lv12_spec3": 0.5
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_dapan_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 15.0,
            "description": "空中斬撃6段(各): R1=22%→R9=40%→特化III=50% / 最終叩き落とし: R1=178%→R9=320%→特化III=400%",
            "condition": "必殺チャージ消費90 / CD15秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_dapan_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 15.0,
            "description": "必殺チャージ消費90",
            "condition": "必殺チャージ消費90 / CD15秒",
            "effectType": "crush"
          }
        ],
        "epCost": 90,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "強制浮遊 → 空中6段斬撃 → 強制転倒(計クラッシュ+2段階)"
        },
        "description": "前方範囲内の敵を強制的に浮遊させる。その後6段の連続斬撃を放ち、最後にすべての敵を叩き落とし、強制的に転倒させ、高い物理ダメージを与える。",
        "damageTypeDetail": "物理",
        "rawText": "前方範囲内の敵を強制的に浮遊させる。その後6段の連続斬撃を放ち、最後にすべての敵を叩き落とし、強制的に転倒させ、高い物理ダメージを与える。",
        "attachText": "なし",
        "anomalyText": "強制浮遊 → 空中6段斬撃 → 強制転倒(計クラッシュ+2段階)",
        "modifiers": [
          {
            "id": "mod_ダパン_ult_base",
            "name": "具材投入！ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.4,
            "valuesByRank": {
              "r1": 0.22,
              "r9": 0.4,
              "spec1": 0.4333,
              "spec2": 0.4667,
              "spec3": 0.5
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "千古恒常",
    "recommendedWeapons": [
      "千古恒常",
      "破砕君主"
    ],
    "normalAttack": {
      "name": "乱切り！",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[28%/34%/50%/60%]→R9[51%/60%/90%/109%]→特化III[63%/75%/113%/136%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク20 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値20を与える。",
      "raw": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値20を与える。"
    },
    "talents": [
      {
        "id": "talent_dapan_1",
        "name": "とろみづけ",
        "description": "消費するクラッシュ段階1につき、10秒間敵への物理ダメージ＋4％→＋6％ (4回まで重ね掛け可能)",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_dapan_talent1_damage_up",
            "name": "とろみづけ",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "damage_up",
            "calcGroupLabel": "【ダメージUP補正】与ダメUP",
            "value": 0,
            "duration": 10.0,
            "description": "消費クラッシュ1段階につき物理ダメージ+4%(昇進1)→+6%(昇進2)×最大4段階(最大+24%)",
            "condition": "自身がクラッシュ段階を消費した時 / 10秒間 / 最大4段階"
          }
        ]
      },
      {
        "id": "talent_dapan_2",
        "name": "味見",
        "description": "必殺技の最後の一撃が命中した敵1体につき下ごしらえ獲得(最大1→2段階)。連携技命中時CD時間が即座に40%回復。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_dapan_talent2_aux",
            "name": "味見",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "下ごしらえ1段階消費し、連携技CDを即座に40%回復",
            "condition": "必殺技最終撃命中の敵1体につき「下ごしらえ」1段階獲得(20秒、最大1→2段階) → 連携技命中時消費"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "ダパン 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【単体命中時クラッシュ追加】戦技が敵1体のみに命中した場合、浮遊分とは別にクラッシュを追加で1段階付与する(CD45秒)"
    },
    "recommendedArmorSet": "set_oryu",
    "recommendedArmorSetName": "50式応龍セット",
    "recommendedArmor": {
      "armorSet": "set_oryu",
      "body": "gold_body_50e5bc8fe5bf9ce_21",
      "arm": "gold_arms_50e5bc8fe5bf9ce_19",
      "acc1": "gold_accessories_50e5bc8fe5bf9ce_27",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_ember",
    "name": "エンバー",
    "icon": "image/ember.png",
    "rarity": 6,
    "element": "灼熱",
    "weaponType": "大剣",
    "class": "重装",
    "mainStat": "筋力",
    "subStat": "意志",
    "baseStats": {
      "hp": 7800,
      "atk": 720,
      "strength": 285,
      "agility": 110,
      "intellect": 120,
      "willpower": 185,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_ember",
        "type": "skill",
        "name": "出征",
        "shortName": "戦技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 3.12,
          "lv10_spec1": 3.38,
          "lv11_spec2": 3.64,
          "lv12_spec3": 3.9
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_ember_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "灼熱ダメ倍率: R1=173% → R9=312% → 特化III=390%",
            "condition": "SP消費100",
            "effectType": "multiplier"
          },
          {
            "id": "buff_ember_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値10(発動中被弾時は追加ブレイク+10)",
            "condition": "SP消費100",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💥 クラッシュ付与 (+1段)",
          "description": "転倒付与(クラッシュ+1段階 ※灼熱ダメだが灼熱付着は一切なし！)"
        },
        "description": "跳び上がって前方の地面に重い打撃を放ち、扇形範囲内の敵に灼熱ダメージと転倒効果を付与する。（※灼熱付着なし）",
        "damageTypeDetail": "灼熱",
        "rawText": "跳び上がって前方の地面に重い打撃を放ち、扇形範囲内の敵に灼熱ダメージと転倒効果を付与する。（※灼熱付着なし）",
        "attachText": "なし",
        "anomalyText": "転倒付与(クラッシュ+1段階 ※灼熱ダメだが灼熱付着は一切なし！)",
        "modifiers": [
          {
            "id": "mod_エンバー_skill_base",
            "name": "出征 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.12,
            "valuesByRank": {
              "r1": 1.73,
              "r9": 3.12,
              "spec1": 3.38,
              "spec2": 3.64,
              "spec3": 3.9
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_ember",
        "type": "combo",
        "name": "前線支援",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 1.84,
          "lv10_spec1": 1.9933,
          "lv11_spec2": 2.1467,
          "lv12_spec3": 2.3
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_ember_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 19.0,
            "description": "物理ダメ倍率: R1=102% → R9=184% → 特化III=230%",
            "condition": "操作中のオペレーターが攻撃を受けた時発動可 / CD: R1〜9=19秒→特化III=18秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_ember_combo_aux",
            "name": "操作キャラHP回復",
            "target": "single",
            "targetLabel": "単体回復",
            "category": "heal",
            "calcGroup": "heal",
            "calcGroupLabel": "【補助・耐久・リソース】(単体回復)",
            "value": 0,
            "duration": 19.0,
            "description": "ブレイク値10 / 操作キャラのHP回復: R1[300+意志×0.7]→R9[630+意志×1.47]→特化III[675+意志×1.58]",
            "condition": "操作中のオペレーターが攻撃を受けた時発動可 / CD: R1〜9=19秒→特化III=18秒",
            "effectType": "heal"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💥 クラッシュ付与 (+1段)",
          "description": "転倒付与(クラッシュ+1段階)"
        },
        "description": "操作中のオペレーターが攻撃を受けると発動可能。物理ダメージと転倒効果を与え、操作中のオペレーターのHPを回復する。",
        "damageTypeDetail": "物理",
        "rawText": "操作中のオペレーターが攻撃を受けると発動可能。物理ダメージと転倒効果を与え、操作中のオペレーターのHPを回復する。",
        "attachText": "なし",
        "anomalyText": "転倒付与(クラッシュ+1段階)",
        "modifiers": [
          {
            "id": "mod_エンバー_combo_base",
            "name": "前線支援 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.84,
            "valuesByRank": {
              "r1": 1.02,
              "r9": 1.84,
              "spec1": 1.9933,
              "spec2": 2.1467,
              "spec3": 2.3
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_ember",
        "type": "ult",
        "name": "誓約の炎",
        "shortName": "必殺技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 5.2,
          "lv10_spec1": 5.6333,
          "lv11_spec2": 6.0667,
          "lv12_spec3": 6.5
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_ember_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 10.0,
            "description": "灼熱ダメ倍率: R1=289% → R9=520% → 特化III=650%",
            "condition": "必殺チャージ消費100 / シールド持続10秒(※灼熱ダメだが灼熱付着なし！)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_ember_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 10.0,
            "description": "ブレイク値25 / チーム全員にエンバー最大HP参照シールド(10秒): R1=18% → R9=22% → 特化III=25%",
            "condition": "必殺チャージ消費100 / シールド持続10秒(※灼熱ダメだが灼熱付着なし！)",
            "effectType": "crush"
          }
        ],
        "epCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "地面を強く叩き付け、周囲の敵に灼熱ダメージを与える。同時に、チーム全員はエンバーの最大HPに基づくシールドを獲得する。（※灼熱付着なし）",
        "damageTypeDetail": "灼熱",
        "rawText": "地面を強く叩き付け、周囲の敵に灼熱ダメージを与える。同時に、チーム全員はエンバーの最大HPに基づくシールドを獲得する。（※灼熱付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_エンバー_ult_base",
            "name": "誓約の炎 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 5.2,
            "valuesByRank": {
              "r1": 2.89,
              "r9": 5.2,
              "spec1": 5.6333,
              "spec2": 6.0667,
              "spec3": 6.5
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "大雷斑",
    "recommendedWeapons": [
      "大雷斑",
      "破砕君主"
    ],
    "normalAttack": {
      "name": "突陣の剣技",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[38%/54%/66%/82%]→R9[69%/96%/119%/147%]→特化III[86%/120%/149%/184%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク25 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値25を与える。",
      "raw": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値25を与える。"
    },
    "talents": [
      {
        "id": "talent_ember_1",
        "name": "突陣の意志",
        "description": "戦技「出征」、連携技「前線支援」を発動中、30%→50%の加護を獲得し、スキルが中断されにくくなる",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_ember_talent1_aux",
            "name": "突陣の意志",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "自身に加護30%(昇進1)→50%(昇進2)＋中断耐性UP",
            "condition": "戦技・連携技発動中"
          }
        ]
      },
      {
        "id": "talent_ember_2",
        "name": "鉄で鉄を貫く",
        "description": "敵からのダメージを受けると、7秒間攻撃力+6%→+9%（3回まで重ね掛け可能）",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_ember_talent2_atk_pct",
            "name": "鉄で鉄を貫く",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "atk_pct",
            "calcGroupLabel": "【参照スケール】攻撃力%",
            "value": 0,
            "duration": 7.0,
            "description": "攻撃力+6%(昇進2)→+9%(昇進3)×最大3回(最大+27%)",
            "condition": "敵からダメージを受けた時 / 7秒間 / 最大3回重ね掛け"
          }
        ]
      }
    ],
    "recommendedArmorSet": "set_pioneer",
    "recommendedArmorSetName": "パイオニアセット",
    "recommendedArmor": {
      "armorSet": "set_pioneer",
      "body": "gold_body_e38391e382a4e38_32",
      "arm": "gold_arms_e38391e382a4e38_31",
      "acc1": "gold_accessories_e38391e382a4e38_42",
      "acc2": "gold_accessories_e69591e59bbde58_73"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_estella",
    "name": "エステーラ",
    "icon": "image/estella.png",
    "rarity": 4,
    "element": "寒冷",
    "weaponType": "長柄武器",
    "class": "前衛",
    "mainStat": "筋力",
    "subStat": "知性",
    "baseStats": {
      "hp": 5400,
      "atk": 630,
      "strength": 210,
      "agility": 80,
      "intellect": 135,
      "willpower": 80,
      "artsIntensity": 50,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_estella",
        "type": "skill",
        "name": "オノマトペ",
        "shortName": "戦技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 2.8,
          "lv10_spec1": 3.0333,
          "lv11_spec2": 3.2667,
          "lv12_spec3": 3.5
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_estella_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "寒冷ダメ倍率: R1=156% → R9=280% → 特化III=350%",
            "condition": "SP消費100",
            "effectType": "multiplier"
          },
          {
            "id": "buff_estella_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP消費100 / ブレイク値10",
            "condition": "SP消費100",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "cryo",
          "stacks": 1,
          "label": "❄️ 寒冷付着 (+1段階)",
          "description": "寒冷付着(1段階)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "前方に槍を突き出し、氷の音波を放つ。直線上の敵に寒冷ダメージを与え、寒冷付着を付与する。",
        "damageTypeDetail": "寒冷",
        "rawText": "前方に槍を突き出し、氷の音波を放つ。直線上の敵に寒冷ダメージを与え、寒冷付着を付与する。",
        "attachText": "寒冷付着(1段階)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_エステーラ_skill_base",
            "name": "オノマトペ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.8,
            "valuesByRank": {
              "r1": 1.56,
              "r9": 2.8,
              "spec1": 3.0333,
              "spec2": 3.2667,
              "spec3": 3.5
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_estella",
        "type": "combo",
        "name": "ディストーション",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 2.88,
          "lv10_spec1": 3.12,
          "lv11_spec2": 3.36,
          "lv12_spec3": 3.6
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_estella_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 18.0,
            "description": "非凍結時物理ダメ: R1=160%→R9=288%→特化III=360% / 凍結時物理ダメ: R1=280%→R9=504%→特化III=630%",
            "condition": "敵が凍結状態になった時発動可 / CD: R1〜9=18秒→特化III=17秒 / 脆弱持続6秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_estella_combo_vulnerability",
            "name": "凍結物理脆弱",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 18.0,
            "description": "凍結中の敵に物理脆弱(6秒): R1〜9=10% → 特化III=15%",
            "condition": "敵が凍結状態になった時発動可 / CD: R1〜9=18秒→特化III=17秒 / 脆弱持続6秒",
            "effectType": "debuff"
          },
          {
            "id": "buff_estella_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 18.0,
            "description": "ブレイク値10",
            "condition": "敵が凍結状態になった時発動可 / CD: R1〜9=18秒→特化III=17秒 / 脆弱持続6秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "強制浮遊(クラッシュ+1段階) → 凍結中の敵には粉砕(凍結消費)＆物理脆弱付与"
        },
        "description": "敵が凍結状態になったときに発動可能。一定範囲内の敵に物理ダメージを与え、強制的に浮遊させる。凍結状態の敵に命中した場合、追加でダメージを与え、物理脆弱を付与する。",
        "damageTypeDetail": "物理",
        "rawText": "敵が凍結状態になったときに発動可能。一定範囲内の敵に物理ダメージを与え、強制的に浮遊させる。凍結状態の敵に命中した場合、追加でダメージを与え、物理脆弱を付与する。",
        "attachText": "なし",
        "anomalyText": "強制浮遊(クラッシュ+1段階) → 凍結中の敵には粉砕(凍結消費)＆物理脆弱付与",
        "modifiers": [
          {
            "id": "mod_エステーラ_combo_base",
            "name": "ディストーション 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.88,
            "valuesByRank": {
              "r1": 1.6,
              "r9": 2.88,
              "spec1": 3.12,
              "spec2": 3.36,
              "spec3": 3.6
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_estella",
        "type": "ult",
        "name": "トレモロ",
        "shortName": "必殺技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 8.8,
          "lv10_spec1": 9.5333,
          "lv11_spec2": 10.2667,
          "lv12_spec3": 11.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_estella_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 10.0,
            "description": "物理ダメ倍率: R1=489% → R9=880% → 特化III=1100%",
            "condition": "必殺チャージ消費70 / CD10秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_estella_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 10.0,
            "description": "ブレイク値15",
            "condition": "必殺チャージ消費70 / CD10秒",
            "effectType": "crush"
          }
        ],
        "epCost": 70,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "物理脆弱状態の敵にのみ強制浮遊付与(クラッシュ+1段階)"
        },
        "description": "全力で槍の柄を地面に叩きつけ、周囲の敵に物理ダメージを与える。物理脆弱状態の敵を強制的に浮遊させる。",
        "damageTypeDetail": "物理",
        "rawText": "全力で槍の柄を地面に叩きつけ、周囲の敵に物理ダメージを与える。物理脆弱状態の敵を強制的に浮遊させる。",
        "attachText": "なし",
        "anomalyText": "物理脆弱状態の敵にのみ強制浮遊付与(クラッシュ+1段階)",
        "modifiers": [
          {
            "id": "mod_エステーラ_ult_base",
            "name": "トレモロ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 8.8,
            "valuesByRank": {
              "r1": 4.89,
              "r9": 8.8,
              "spec1": 9.5333,
              "spec2": 10.2667,
              "spec3": 11.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "O.B.J.鋭矛",
    "recommendedWeapons": [
      "O.B.J.鋭矛",
      "灯火の使命"
    ],
    "normalAttack": {
      "name": "ノイズ",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[25%/30%/35%/40%]→R9[45%/54%/63%/72%]→特化III[56%/68%/79%/90%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク17 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値17を与える。",
      "raw": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値17を与える。"
    },
    "talents": [
      {
        "id": "talent_estella_1",
        "name": "類は友を呼ぶ",
        "description": "粉砕効果を与えたあと、次に発動する戦技「オノマトペ」はSPが7.5→15返還される。（重ね掛け不可）",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_estella_talent1_aux",
            "name": "類は友を呼ぶ",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP7.5(昇進1) → SP15(昇進2)返還",
            "condition": "粉砕効果を与えた後の次の戦技発動時(重ね掛け不可)"
          }
        ]
      },
      {
        "id": "talent_estella_2",
        "name": "惰性",
        "description": "寒冷付着を受けなくなり、受ける寒冷ダメージ-10%→-20%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_estella_talent2_aux",
            "name": "惰性",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "自身が寒冷付着無効、受ける寒冷ダメージ-10%(昇進2)→-20%(昇進3)",
            "condition": "常時"
          }
        ]
      }
    ],
    "recommendedArmorSet": "set_ruten",
    "recommendedArmorSetName": "流転セット",
    "recommendedArmor": {
      "armorSet": "set_ruten",
      "body": "gold_body_e6b581e8bba2e69_15",
      "arm": "gold_arms_e6b581e8bba2e4b_16",
      "acc1": "gold_accessories_e6b581e8bba2e38_20",
      "acc2": "gold_accessories_e69591e59bbde58_73"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_fluorite",
    "name": "フローライト",
    "icon": "image/fluorite.png",
    "rarity": 4,
    "element": "自然",
    "weaponType": "拳銃",
    "class": "術師",
    "mainStat": "知性",
    "subStat": "敏捷",
    "baseStats": {
      "hp": 5000,
      "atk": 710,
      "strength": 85,
      "agility": 135,
      "intellect": 210,
      "willpower": 80,
      "artsIntensity": 50,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_fluorite",
        "type": "skill",
        "name": "ちょっとイタズラ",
        "shortName": "戦技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 3.36,
          "lv10_spec1": 3.64,
          "lv11_spec2": 3.92,
          "lv12_spec3": 4.2
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_fluorite_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "爆発自然ダメ倍率: R1=187% → R9=336% → 特化III=420%",
            "condition": "SP消費100 / お手製爆弾は同時1個まで",
            "effectType": "multiplier"
          },
          {
            "id": "buff_fluorite_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値10 / 貼り付け時スロー30%付与",
            "condition": "SP消費100 / お手製爆弾は同時1個まで",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "nature",
          "stacks": 1,
          "label": "🌿 自然付着 (+1段階)",
          "description": "自然付着(1段階・爆発時)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "お手製爆弾を蹴って敵に貼り付け、スロー(30%)を付与する。そのあと爆発し、範囲内の敵に自然ダメージを与え、自然付着を付与する。",
        "damageTypeDetail": "自然",
        "rawText": "お手製爆弾を蹴って敵に貼り付け、スロー(30%)を付与する。そのあと爆発し、範囲内の敵に自然ダメージを与え、自然付着を付与する。",
        "attachText": "自然付着(1段階・爆発時)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_フローライト_skill_base",
            "name": "ちょっとイタズラ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.36,
            "valuesByRank": {
              "r1": 1.87,
              "r9": 3.36,
              "spec1": 3.64,
              "spec2": 3.92,
              "spec3": 4.2
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_fluorite",
        "type": "combo",
        "name": "特別サービス",
        "shortName": "連携技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 3.04,
          "lv10_spec1": 3.2933,
          "lv11_spec2": 3.5467,
          "lv12_spec3": 3.8
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_fluorite_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 40.0,
            "description": "自然ダメ倍率: R1=169% → R9=304% → 特化III=380%",
            "condition": "敵の寒冷付着または自然付着が2段階以上になった時発動可 / CD: R1〜9=40秒→特化III=38秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_fluorite_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 40.0,
            "description": "ブレイク値10",
            "condition": "敵の寒冷付着または自然付着が2段階以上になった時発動可 / CD: R1〜9=40秒→特化III=38秒",
            "effectType": "crush"
          },
          {
            "id": "buff_fluorite_combo_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 40.0,
            "description": "【対応属性付着コピー】ダメージ自体は自然属性だが、付与するアーツ付着は敵の2段階以上の付着属性（寒冷付着なら寒冷付着、自然付着なら自然付着）になる（異属性アーツ異常は起こさず段階を+1進める）",
            "condition": "敵の寒冷付着または自然付着が2段階以上になった時発動可 / CD: R1〜9=40秒→特化III=38秒",
            "special": "【対応属性付着コピー】ダメージ自体は自然属性だが、付与するアーツ付着は敵の2段階以上の付着属性（寒冷付着なら寒冷付着、自然付着なら自然付着）になる（異属性アーツ異常は起こさず段階を+1進める）",
            "effectType": "special"
          }
        ],
        "infliction": {
          "type": "cryo",
          "stacks": 1,
          "label": "❄️ 寒冷付着 (+1段階)",
          "description": "条件付き付着(1段階・敵に付いている寒冷付着または自然付着と同じ属性を追加付与)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "敵の寒冷付着または自然付着の付着段階が2以上になったときに発動可能。敵に自然ダメージを与え、対応属性のアーツ付着を付与する。",
        "damageTypeDetail": "自然",
        "rawText": "敵の寒冷付着または自然付着の付着段階が2以上になったときに発動可能。敵に自然ダメージを与え、対応属性のアーツ付着を付与する。",
        "attachText": "条件付き付着(1段階・敵に付いている寒冷付着または自然付着と同じ属性を追加付与)",
        "anomalyText": "なし",
        "special": "【対応属性付着コピー】ダメージ自体は自然属性だが、付与するアーツ付着は敵の2段階以上の付着属性（寒冷付着なら寒冷付着、自然付着なら自然付着）になる（異属性アーツ異常は起こさず段階を+1進める）",
        "modifiers": [
          {
            "id": "mod_フローライト_combo_base",
            "name": "特別サービス 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.04,
            "valuesByRank": {
              "r1": 1.69,
              "r9": 3.04,
              "spec1": 3.2933,
              "spec2": 3.5467,
              "spec3": 3.8
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_fluorite",
        "type": "ult",
        "name": "つまんない茶番",
        "shortName": "必殺技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 2.0,
          "lv10_spec1": 2.1667,
          "lv11_spec2": 2.3333,
          "lv12_spec3": 2.5
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_fluorite_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "1〜4段目(各): R1=111% → R9=200% → 特化III=250%(計444%→800%→1000%)",
            "condition": "必殺チャージ消費100 / 4段射撃",
            "effectType": "multiplier"
          },
          {
            "id": "buff_fluorite_ult_damage_up",
            "name": "お手製爆弾即時起爆ダメージUP",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "damage_up",
            "calcGroupLabel": "【ダメージUP補正】与ダメUP",
            "value": 0,
            "duration": 0.0,
            "description": "お手製爆弾が付いている敵に命中時、即時起爆し爆弾の爆発ダメージ+30%",
            "condition": "必殺チャージ消費100 / 4段射撃",
            "effectType": "buff"
          },
          {
            "id": "buff_fluorite_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値20 / お手製爆弾の爆発範囲+30%",
            "condition": "必殺チャージ消費100 / 4段射撃",
            "effectType": "crush"
          },
          {
            "id": "buff_fluorite_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【対応属性付着コピー＆爆弾即時起爆】最終段命中時に敵が2段階以上の寒冷付着または自然付着なら、その属性の付着を+1段階付与。お手製爆弾があれば即時強化起爆",
            "condition": "必殺チャージ消費100 / 4段射撃",
            "special": "【対応属性付着コピー＆爆弾即時起爆】最終段命中時に敵が2段階以上の寒冷付着または自然付着なら、その属性の付着を+1段階付与。お手製爆弾があれば即時強化起爆",
            "effectType": "special"
          }
        ],
        "epCost": 100,
        "infliction": {
          "type": "nature",
          "stacks": 1,
          "label": "🌿 自然付着 (+1段階)",
          "description": "条件付き付着(1段階・最終4段目が2段階以上の寒冷/自然付着の敵に命中時、対応属性の付着を追加付与)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "自然ダメージを4段与える。お手製爆弾が付いている場合即座に起爆し爆発ダメージ+30%。最後の1段が2段階以上の寒冷付着または自然付着状態の敵に命中した場合、対応属性のアーツ付着をもう一度付与する。",
        "damageTypeDetail": "自然",
        "rawText": "自然ダメージを4段与える。お手製爆弾が付いている場合即座に起爆し爆発ダメージ+30%。最後の1段が2段階以上の寒冷付着または自然付着状態の敵に命中した場合、対応属性のアーツ付着をもう一度付与する。",
        "attachText": "条件付き付着(1段階・最終4段目が2段階以上の寒冷/自然付着の敵に命中時、対応属性の付着を追加付与)",
        "anomalyText": "なし",
        "special": "【対応属性付着コピー＆爆弾即時起爆】最終段命中時に敵が2段階以上の寒冷付着または自然付着なら、その属性の付着を+1段階付与。お手製爆弾があれば即時強化起爆",
        "modifiers": [
          {
            "id": "mod_フローライト_ult_base",
            "name": "つまんない茶番 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.0,
            "valuesByRank": {
              "r1": 1.11,
              "r9": 2.0,
              "spec1": 2.1667,
              "spec2": 2.3333,
              "spec3": 2.5
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "O.B.J.迅速",
    "recommendedWeapons": [
      "O.B.J.迅速",
      "ナビゲーター"
    ],
    "normalAttack": {
      "name": "自己流射撃法",
      "damageType": "自然",
      "damageTypeDetail": "自然",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[25%/33%/26%/60%]→R9[45%/59%/46%/108%]→特化III[56%/73%/57%/135%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク15 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に自然ダメージを与える（※自然付着なし）。重攻撃はブレイク値15を与える。",
      "raw": "最大4段の攻撃で敵に自然ダメージを与える（※自然付着なし）。重攻撃はブレイク値15を与える。"
    },
    "talents": [
      {
        "id": "talent_fluorite_1",
        "name": "泣きっ面に石",
        "description": "フローライトによるスロー状態の敵へのダメージ+10%→+20%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_fluorite_talent1_damage_up",
            "name": "泣きっ面に石",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "damage_up",
            "calcGroupLabel": "【ダメージUP補正】与ダメUP",
            "value": 0,
            "duration": 0.0,
            "description": "スロー状態の敵へのダメージ+10%(昇進1) → +20%(昇進2)",
            "condition": "攻撃対象がスロー状態の時"
          }
        ]
      },
      {
        "id": "talent_fluorite_2",
        "name": "予測不可能",
        "description": "20%の確率でアーツダメージが無効になり、その後10秒間自身の攻撃力+10%→+20%（重ね掛け不可）",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_fluorite_talent2_atk_pct",
            "name": "予測不可能",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "atk_pct",
            "calcGroupLabel": "【参照スケール】攻撃力%",
            "value": 0,
            "duration": 10.0,
            "description": "無効化成功時10秒間攻撃力+10%(昇進2) → +20%(昇進3)",
            "condition": "アーツ被弾時20%確率(2凸で30%) → 発動後10秒間(重ね掛け不可)"
          },
          {
            "id": "buff_fluorite_talent2_aux",
            "name": "予測不可能",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 10.0,
            "description": "20%の確率で被アーツダメージ無効",
            "condition": "アーツ被弾時20%確率(2凸で30%) → 発動後10秒間(重ね掛け不可)"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "フローライト 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【対応属性付着コピー】ダメージ自体は自然属性だが、付与するアーツ付着は敵の2段階以上の付着属性（寒冷付着なら寒冷付着、自然付着なら自然付着）になる（異属性アーツ異常は起こさず段階を+1進める） ／ 【対応属性付着コピー＆爆弾即時起爆】最終段命中時に敵が2段階以上の寒冷付着または自然付着なら、その属性の付着を+1段階付与。お手製爆弾があれば即時強化起爆"
    },
    "recommendedArmorSet": "set_pioneer",
    "recommendedArmorSetName": "パイオニアセット",
    "recommendedArmor": {
      "armorSet": "set_pioneer",
      "body": "gold_body_e38391e382a4e38_36",
      "arm": "gold_arms_e38391e382a4e38_32",
      "acc1": "gold_accessories_e38391e382a4e38_44",
      "acc2": "gold_accessories_e69591e59bbde58_73"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_gilberta",
    "name": "ギルベルタ",
    "icon": "image/gilberta.png",
    "rarity": 6,
    "element": "自然",
    "weaponType": "アーツユニット",
    "class": "補助",
    "mainStat": "知性",
    "subStat": "意志",
    "baseStats": {
      "hp": 6800,
      "atk": 920,
      "strength": 120,
      "agility": 110,
      "intellect": 285,
      "willpower": 185,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_gilberta",
        "type": "skill",
        "name": "秘杖・引力モード",
        "shortName": "戦技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 1.75,
          "lv10_spec1": 1.8967,
          "lv11_spec2": 2.0433,
          "lv12_spec3": 2.19
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_gilberta_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "引力ダメ: R1=97%→R9=175%→特化III=219% / 終了爆発ダメ: R1=58%→R9=104%→特化III=130%",
            "condition": "SP消費100 / 引力吸引後に爆発",
            "effectType": "multiplier"
          },
          {
            "id": "buff_gilberta_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP消費100 / 爆発ブレイク値10 / 周囲の敵を引き寄せ",
            "condition": "SP消費100 / 引力吸引後に爆発",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "nature",
          "stacks": 1,
          "label": "🌿 自然付着 (+1段階)",
          "description": "自然付着(1段階・終了爆発時)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "引力特異点は周囲の敵を引き寄せ、自然ダメージを与える。終了時に爆発し、範囲内の敵に自然ダメージを与えて自然付着を付与する。",
        "damageTypeDetail": "自然",
        "rawText": "引力特異点は周囲の敵を引き寄せ、自然ダメージを与える。終了時に爆発し、範囲内の敵に自然ダメージを与えて自然付着を付与する。",
        "attachText": "自然付着(1段階・終了爆発時)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_ギルベルタ_skill_base",
            "name": "秘杖・引力モード 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.75,
            "valuesByRank": {
              "r1": 0.97,
              "r9": 1.75,
              "spec1": 1.8967,
              "spec2": 2.0433,
              "spec3": 2.19
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_gilberta",
        "type": "combo",
        "name": "秘杖・マトリックス転移",
        "shortName": "連携技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 2.52,
          "lv10_spec1": 2.73,
          "lv11_spec2": 2.94,
          "lv12_spec3": 3.15
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_gilberta_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "自然ダメ倍率: R1=140% → R9=252% → 特化III=315%",
            "condition": "敵がアーツ異常状態になった時発動可 / CD: R1〜9=20秒→特化III=19秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_gilberta_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値5 / 周囲の敵を引き寄せ",
            "condition": "敵がアーツ異常状態になった時発動可 / CD: R1〜9=20秒→特化III=19秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "強制浮遊付与(クラッシュ+1段階 ※自然ダメだが自然付着なし！)"
        },
        "description": "敵がアーツ異常状態になったときに発動可能。重力で目標および周囲の敵を引き寄せ、自然ダメージを与え、強制的に浮遊させる。（※自然付着なし）",
        "damageTypeDetail": "自然",
        "rawText": "敵がアーツ異常状態になったときに発動可能。重力で目標および周囲の敵を引き寄せ、自然ダメージを与え、強制的に浮遊させる。（※自然付着なし）",
        "attachText": "なし",
        "anomalyText": "強制浮遊付与(クラッシュ+1段階 ※自然ダメだが自然付着なし！)",
        "modifiers": [
          {
            "id": "mod_ギルベルタ_combo_base",
            "name": "秘杖・マトリックス転移 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.52,
            "valuesByRank": {
              "r1": 1.4,
              "r9": 2.52,
              "spec1": 2.73,
              "spec2": 2.94,
              "spec3": 3.15
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_gilberta",
        "type": "ult",
        "name": "秘杖・重力場",
        "shortName": "必殺技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 6.0,
          "lv10_spec1": 6.5,
          "lv11_spec2": 7.0,
          "lv12_spec3": 7.5
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_gilberta_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 5.0,
            "description": "自然ダメ倍率: R1=333% → R9=600% → 特化III=750%",
            "condition": "必殺チャージ消費90 / 力場持続5秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_gilberta_ult_vulnerability",
            "name": "クラッシュ連動アーツ脆弱",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 5.0,
            "description": "基礎アーツ脆弱: R1=18%→R9=26%→特化III=30% ＋ 敵のクラッシュ1段階毎にアーツ脆弱追加: R1=+1.8%→R9=+2.6%→特化III=+3.0%(最大4段階で計42%、2凸で最大54%)",
            "condition": "必殺チャージ消費90 / 力場持続5秒",
            "effectType": "debuff"
          },
          {
            "id": "buff_gilberta_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 5.0,
            "description": "ブレイク値20 / スロー80%(5秒)",
            "condition": "必殺チャージ消費90 / 力場持続5秒",
            "effectType": "crush"
          },
          {
            "id": "buff_gilberta_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 5.0,
            "description": "【クラッシュ段階連動アーツ脆弱＆浮遊維持】敵の現在クラッシュ段階に応じてアーツ脆弱が強化され、浮遊中の敵は5秒間浮遊が強制維持される",
            "condition": "必殺チャージ消費90 / 力場持続5秒",
            "special": "【クラッシュ段階連動アーツ脆弱＆浮遊維持】敵の現在クラッシュ段階に応じてアーツ脆弱が強化され、浮遊中の敵は5秒間浮遊が強制維持される",
            "effectType": "special"
          }
        ],
        "epCost": 90,
        "infliction": {
          "type": "nature",
          "stacks": 1,
          "label": "🌿 自然付着 (+1段階)",
          "description": "自然付着(1段階)"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "範囲内の浮遊状態の敵は重力場終了まで浮遊状態維持"
        },
        "description": "範囲内の敵に自然ダメージを1回与えて自然付着を付与する。範囲内の敵はスロー(80%)とアーツ脆弱状態になり、クラッシュ段階に応じてアーツ脆弱が追加UP。浮遊状態は終了まで維持される。",
        "damageTypeDetail": "自然",
        "rawText": "範囲内の敵に自然ダメージを1回与えて自然付着を付与する。範囲内の敵はスロー(80%)とアーツ脆弱状態になり、クラッシュ段階に応じてアーツ脆弱が追加UP。浮遊状態は終了まで維持される。",
        "attachText": "自然付着(1段階)",
        "anomalyText": "範囲内の浮遊状態の敵は重力場終了まで浮遊状態維持",
        "special": "【クラッシュ段階連動アーツ脆弱＆浮遊維持】敵の現在クラッシュ段階に応じてアーツ脆弱が強化され、浮遊中の敵は5秒間浮遊が強制維持される",
        "modifiers": [
          {
            "id": "mod_ギルベルタ_ult_base",
            "name": "秘杖・重力場 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 6.0,
            "valuesByRank": {
              "r1": 3.33,
              "r9": 6.0,
              "spec1": 6.5,
              "spec2": 7.0,
              "spec3": 7.5
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "使命必達",
    "recommendedWeapons": [
      "使命必達",
      "破壊ユニット"
    ],
    "normalAttack": {
      "name": "秘杖・エネルギー束縛",
      "damageType": "自然",
      "damageTypeDetail": "自然",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[30%/36%/41%/50%]→R9[54%/65%/73%/90%]→特化III[68%/81%/91%/112%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク16 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に自然ダメージを与える（※自然付着なし）。重攻撃はブレイク値16を与える。",
      "raw": "最大4段の攻撃で敵に自然ダメージを与える（※自然付着なし）。重攻撃はブレイク値16を与える。"
    },
    "talents": [
      {
        "id": "talent_gilberta_1",
        "name": "トランスポーターの歌声",
        "description": "戦場に出ている間、編成されたすべての味方前衛、術師と補助オペレーターの必殺チャージ回復効率+4%→+7%",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_gilberta_talent1_aux",
            "name": "トランスポーターの歌声",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "前衛・術師・補助の必殺チャージ回復効率+4%(昇進1) → +7%(昇進2)",
            "condition": "戦場に出ている間、編成内の前衛・術師・補助オペレーター全員に適用"
          }
        ]
      },
      {
        "id": "talent_gilberta_2",
        "name": "遅れてきた返信",
        "description": "戦技の最後の一撃か連携技が2体以上の敵に命中すると、操作中のオペレーターのHPを[72+知性x0.60]→[108+知性x0.90]回復する",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_gilberta_talent2_aux",
            "name": "遅れてきた返信",
            "target": "single",
            "targetLabel": "単体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "操作キャラ(満タン時は最低HP割合の味方)のHPを[72+知性×0.60](昇進2) → [108+知性×0.90](昇進3)回復",
            "condition": "戦技最終撃または連携技が2体以上の敵に命中した時"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "ギルベルタ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【クラッシュ段階連動アーツ脆弱＆浮遊維持】敵の現在クラッシュ段階に応じてアーツ脆弱が強化され、浮遊中の敵は5秒間浮遊が強制維持される"
    },
    "recommendedArmorSet": "set_ruten",
    "recommendedArmorSetName": "流転セット",
    "recommendedArmor": {
      "armorSet": "set_ruten",
      "body": "gold_body_e6b581e8bba2e8b_14",
      "arm": "gold_arms_e6b581e8bba2e38_13",
      "acc1": "gold_accessories_e6b581e8bba2e38_16",
      "acc2": "gold_accessories_e6b581e8bba2e38_16"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_laevatain",
    "name": "レーヴァテイン",
    "icon": "image/laevatain.png",
    "rarity": 6,
    "element": "灼熱",
    "weaponType": "片手剣",
    "class": "突撃",
    "mainStat": "敏捷",
    "subStat": "筋力",
    "baseStats": {
      "hp": 7300,
      "atk": 920,
      "strength": 185,
      "agility": 285,
      "intellect": 120,
      "willpower": 110,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_laevatain",
        "type": "skill",
        "name": "焼滅",
        "shortName": "戦技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 1.12,
          "lv10_spec1": 1.2133,
          "lv11_spec2": 1.3067,
          "lv12_spec3": 1.4
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_laevatain_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 5.0,
            "description": "通常時: 初回R1=62%→R9=112%→特化III=140%、劫火4追撃R1=342%→R9=616%→特化III=770%(燃焼持続ダメ毎秒6%→14%) / 必殺中: 1段目147%→264%→330%、2段目164%→296%→370%、劫火4追撃400%→720%→900%",
            "condition": "SP消費100 / 命中時劫火+1 / 劫火4段階時は全消費して追撃＆強制燃焼(5秒) / 必殺技中は2段攻撃に強化",
            "effectType": "multiplier"
          },
          {
            "id": "buff_laevatain_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 5.0,
            "description": "ブレイク値: 初回10+追撃10(必殺中10+10+10) / 劫火4追撃命中時必殺チャージ+100回復",
            "condition": "SP消費100 / 命中時劫火+1 / 劫火4段階時は全消費して追撃＆強制燃焼(5秒) / 必殺技中は2段攻撃に強化",
            "effectType": "crush"
          },
          {
            "id": "buff_laevatain_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 5.0,
            "description": "【劫火4段階消費＆必殺中変化】戦技自体は灼熱付着を持たず、劫火4段階消費時に強制燃焼(5秒)を付与し必殺チャージを100回復する。必殺技持続中は倍率が専用テーブルに変化",
            "condition": "SP消費100 / 命中時劫火+1 / 劫火4段階時は全消費して追撃＆強制燃焼(5秒) / 必殺技中は2段攻撃に強化",
            "special": "【劫火4段階消費＆必殺中変化】戦技自体は灼熱付着を持たず、劫火4段階消費時に強制燃焼(5秒)を付与し必殺チャージを100回復する。必殺技持続中は倍率が専用テーブルに変化",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "劫火4段階消費時、強制燃焼付与(5秒間 ※灼熱付着は付与しない！)",
          "description": "劫火4段階消費時、強制燃焼付与(5秒間 ※灼熱付着は付与しない！)"
        },
        "description": "灼熱ダメージを与え、命中時劫火+1。劫火4段階時はすべて消費して追加攻撃を行い、灼熱ダメージを与え、強制的に短時間燃焼状態にし、必殺チャージを100回復する。（※灼熱付着なし）",
        "damageTypeDetail": "灼熱",
        "rawText": "灼熱ダメージを与え、命中時劫火+1。劫火4段階時はすべて消費して追加攻撃を行い、灼熱ダメージを与え、強制的に短時間燃焼状態にし、必殺チャージを100回復する。（※灼熱付着なし）",
        "attachText": "なし",
        "anomalyText": "劫火4段階消費時、強制燃焼付与(5秒間 ※灼熱付着は付与しない！)",
        "special": "【劫火4段階消費＆必殺中変化】戦技自体は灼熱付着を持たず、劫火4段階消費時に強制燃焼(5秒)を付与し必殺チャージを100回復する。必殺技持続中は倍率が専用テーブルに変化",
        "modifiers": [
          {
            "id": "mod_レーヴァテイン_skill_base",
            "name": "焼滅 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.12,
            "valuesByRank": {
              "r1": 0.62,
              "r9": 1.12,
              "spec1": 1.2133,
              "spec2": 1.3067,
              "spec3": 1.4
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_laevatain",
        "type": "combo",
        "name": "烈火",
        "shortName": "連携技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 4.32,
          "lv10_spec1": 4.68,
          "lv11_spec2": 5.04,
          "lv12_spec3": 5.4
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_laevatain_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 10.0,
            "description": "灼熱ダメ倍率: R1=240% → R9=432% → 特化III=540%",
            "condition": "敵が燃焼または腐食状態になった時発動可 / CD: R1〜9=10秒→特化III=9秒(※灼熱付着なし！)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_laevatain_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 10.0,
            "description": "ブレイク値10 / 命中時劫火+1獲得 / 必殺チャージ回復: 敵1体25・2体30・3体以上35",
            "condition": "敵が燃焼または腐食状態になった時発動可 / CD: R1〜9=10秒→特化III=9秒(※灼熱付着なし！)",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "敵が燃焼または腐食状態になったときに発動可能。灼熱ダメージを与え、劫火を1回獲得し、命中敵数に応じて必殺チャージ(25/30/35)を回復する。（※灼熱付着なし）",
        "damageTypeDetail": "灼熱",
        "rawText": "敵が燃焼または腐食状態になったときに発動可能。灼熱ダメージを与え、劫火を1回獲得し、命中敵数に応じて必殺チャージ(25/30/35)を回復する。（※灼熱付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_レーヴァテイン_combo_base",
            "name": "烈火 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 4.32,
            "valuesByRank": {
              "r1": 2.4,
              "r9": 4.32,
              "spec1": 4.68,
              "spec2": 5.04,
              "spec3": 5.4
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_laevatain",
        "type": "ult",
        "name": "ラグナロク",
        "shortName": "必殺技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 1.17,
          "lv10_spec1": 1.2667,
          "lv11_spec2": 1.3633,
          "lv12_spec3": 1.46
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_laevatain_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 15.0,
            "description": "強化通常攻撃1〜4段: R1[65%/81%/115%/203%] → R9[117%/146%/208%/365%] → 特化III[146%/182%/260%/456%]",
            "condition": "必殺チャージ消費300 / 持続15秒 / 強制的に自身が操作オペレーターへ切替 / 通常攻撃4段化＆戦技強化",
            "effectType": "multiplier"
          },
          {
            "id": "buff_laevatain_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 15.0,
            "description": "【強化通常攻撃モード】15秒間通常攻撃が4段の魔剣協同攻撃に置き換わり、その3段目のみ灼熱付着(1段階)を付与する",
            "condition": "必殺チャージ消費300 / 持続15秒 / 強制的に自身が操作オペレーターへ切替 / 通常攻撃4段化＆戦技強化",
            "special": "【強化通常攻撃モード】15秒間通常攻撃が4段の魔剣協同攻撃に置き換わり、その3段目のみ灼熱付着(1段階)を付与する",
            "effectType": "special"
          }
        ],
        "epCost": 300,
        "infliction": {
          "type": "heat",
          "stacks": 1,
          "label": "🔥 灼熱付着 (+1段階)",
          "description": "灼熱付着(1段階・強化通常攻撃の3段目のみ付与)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "烈火の魔剣を召喚し、自身が操作中のオペレーターへと切り替わる。15秒間通常攻撃が強化され灼熱ダメージを与える。さらに、通常攻撃の3段目は敵に灼熱付着を付与する。",
        "damageTypeDetail": "灼熱",
        "rawText": "烈火の魔剣を召喚し、自身が操作中のオペレーターへと切り替わる。15秒間通常攻撃が強化され灼熱ダメージを与える。さらに、通常攻撃の3段目は敵に灼熱付着を付与する。",
        "attachText": "灼熱付着(1段階・強化通常攻撃の3段目のみ付与)",
        "anomalyText": "なし",
        "special": "【強化通常攻撃モード】15秒間通常攻撃が4段の魔剣協同攻撃に置き換わり、その3段目のみ灼熱付着(1段階)を付与する",
        "modifiers": [
          {
            "id": "mod_レーヴァテイン_ult_base",
            "name": "ラグナロク 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.17,
            "valuesByRank": {
              "r1": 0.65,
              "r9": 1.17,
              "spec1": 1.2667,
              "spec2": 1.3633,
              "spec3": 1.46
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "フレイムフォージ",
    "recommendedWeapons": [
      "フレイムフォージ",
      "ダークトーチ"
    ],
    "normalAttack": {
      "name": "残り火",
      "damageType": "灼熱",
      "damageTypeDetail": "灼熱",
      "attach": "なし(※通常時は付着なし。必殺技強化中の通常攻撃3段目のみ灼熱付着あり)",
      "multipliers": "通常1〜5段: R1[16%/24%/25%/39%/53%]→R9[29%/43%/45%/70%/95%]→特化III[36%/54%/56%/88%/119%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク18 / 終撃時SP回復",
      "description": "最大5段の攻撃で、敵に灼熱ダメージを与える（※通常時灼熱付着なし）。重攻撃はブレイク値18を与える。",
      "raw": "最大5段の攻撃で、敵に灼熱ダメージを与える（※通常時灼熱付着なし）。重攻撃はブレイク値18を与える。"
    },
    "talents": [
      {
        "id": "talent_laevatain_1",
        "name": "灼熱の心",
        "description": "重攻撃または終撃命中時、周囲の敵から灼熱付着を吸収し、1段階につき劫火+1（最大4段階）。4段階到達時、20秒間敵の灼熱耐性を10→15→20無視してダメージを与える。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "special",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_laevatain_talent1_res_down",
            "name": "灼熱の心",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "res_down",
            "calcGroupLabel": "【耐性補正】",
            "value": 0,
            "duration": 20.0,
            "description": "劫火4段階到達時、20秒間自身の攻撃が敵の灼熱耐性を10(初期)→15(昇進1)→20(昇進3)無視",
            "condition": "操作キャラの重攻撃/終撃命中時または近くの敵撃破時に灼熱付着を吸収→劫火獲得(最大4段階) / 4段階到達時20秒間"
          },
          {
            "id": "buff_laevatain_talent1_special",
            "name": "灼熱の心",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 20.0,
            "description": "【灼熱付着吸収→劫火変換】操作中キャラの重攻撃/終撃で敵の灼熱付着を吸収(カミーユやスー連携の「吸収」トリガーを発動させる)",
            "condition": "操作キャラの重攻撃/終撃命中時または近くの敵撃破時に灼熱付着を吸収→劫火獲得(最大4段階) / 4段階到達時20秒間",
            "special": "【灼熱付着吸収→劫火変換】操作中キャラの重攻撃/終撃で敵の灼熱付着を吸収(カミーユやスー連携の「吸収」トリガーを発動させる)"
          }
        ],
        "special": "【灼熱付着吸収→劫火変換】操作中キャラの重攻撃/終撃で敵の灼熱付着を吸収(カミーユやスー連携の「吸収」トリガーを発動させる)"
      },
      {
        "id": "talent_laevatain_2",
        "name": "再燃",
        "description": "HPが40％未満の場合、90%の加護を獲得し、4秒→8秒間最大HPの5％分回復する（120秒に1回）",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_laevatain_talent2_aux",
            "name": "再燃",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 120.0,
            "description": "90%の加護を獲得し、4秒間(昇進2)→8秒間(昇進3)毎秒最大HP5%分回復",
            "condition": "HP40%未満時(CD120秒)"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "レーヴァテイン 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【劫火4段階消費＆必殺中変化】戦技自体は灼熱付着を持たず、劫火4段階消費時に強制燃焼(5秒)を付与し必殺チャージを100回復する。必殺技持続中は倍率が専用テーブルに変化 ／ 【強化通常攻撃モード】15秒間通常攻撃が4段の魔剣協同攻撃に置き換わり、その3段目のみ灼熱付着(1段階)を付与する ／ 【灼熱付着吸収→劫火変換】操作中キャラの重攻撃/終撃で敵の灼熱付着を吸収(カミーユやスー連携の「吸収」トリガーを発動させる)"
    },
    "recommendedArmorSet": "set_volcano",
    "recommendedArmorSetName": "火山用セット",
    "recommendedArmor": {
      "armorSet": "set_volcano",
      "body": "gold_body_e69591e59bbde99_57",
      "arm": "gold_arms_e781abe5b1b1e79_26",
      "acc1": "gold_accessories_e781abe5b1b1e79_36",
      "acc2": "gold_accessories_e781abe5b1b1e79_36"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_lastrite",
    "name": "ラストライト",
    "icon": "image/lastrite.png",
    "rarity": 6,
    "element": "寒冷",
    "weaponType": "大剣",
    "class": "突撃",
    "mainStat": "敏捷",
    "subStat": "筋力",
    "baseStats": {
      "hp": 7300,
      "atk": 920,
      "strength": 185,
      "agility": 285,
      "intellect": 120,
      "willpower": 110,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_lastrite",
        "type": "skill",
        "name": "セシュカの秘伝",
        "shortName": "戦技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 2.56,
          "lv10_spec1": 2.7733,
          "lv11_spec2": 2.9867,
          "lv12_spec3": 3.2
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_lastrite_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 15.0,
            "description": "幻影追撃寒冷ダメ倍率(ラストライト基準): R1=142% → R9=256% → 特化III=320%",
            "condition": "SP消費100(即時SP30返還) / 操作中の味方武器に15秒間「低温注入」付与 → 次の重攻撃時に幻影追撃発動",
            "effectType": "multiplier"
          },
          {
            "id": "buff_lastrite_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 15.0,
            "description": "即時SP30返還 / 幻影追撃発動時にラストライトの必殺チャージ+16回復",
            "condition": "SP消費100(即時SP30返還) / 操作中の味方武器に15秒間「低温注入」付与 → 次の重攻撃時に幻影追撃発動",
            "effectType": "crush"
          },
          {
            "id": "buff_lastrite_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 15.0,
            "description": "【低温注入(重攻撃連動追撃)】戦技ボタンを押した瞬間ではなく、バフを受けた操作中オペレーターが15秒以内に次の重攻撃を当てた瞬間にラストライトの幻影が追撃し、寒冷ダメ＋寒冷付着(1段階)を与える",
            "condition": "SP消費100(即時SP30返還) / 操作中の味方武器に15秒間「低温注入」付与 → 次の重攻撃時に幻影追撃発動",
            "special": "【低温注入(重攻撃連動追撃)】戦技ボタンを押した瞬間ではなく、バフを受けた操作中オペレーターが15秒以内に次の重攻撃を当てた瞬間にラストライトの幻影が追撃し、寒冷ダメ＋寒冷付着(1段階)を与える",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "cryo",
          "stacks": 1,
          "label": "❄️ 寒冷付着 (+1段階)",
          "description": "寒冷付着(1段階・低温注入を受けた操作キャラの次の重攻撃時の幻影追撃で付与)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "操作中のオペレーターの武器に低温注入を行い、SPが30返還される。15秒内、操作中のオペレーターの次の重攻撃はラストライトの幻影を生成し、寒冷ダメージを与え、寒冷付着を付与する。",
        "damageTypeDetail": "寒冷(重攻撃時の幻影追撃)",
        "rawText": "操作中のオペレーターの武器に低温注入を行い、SPが30返還される。15秒内、操作中のオペレーターの次の重攻撃はラストライトの幻影を生成し、寒冷ダメージを与え、寒冷付着を付与する。",
        "attachText": "寒冷付着(1段階・低温注入を受けた操作キャラの次の重攻撃時の幻影追撃で付与)",
        "anomalyText": "なし",
        "special": "【低温注入(重攻撃連動追撃)】戦技ボタンを押した瞬間ではなく、バフを受けた操作中オペレーターが15秒以内に次の重攻撃を当てた瞬間にラストライトの幻影が追撃し、寒冷ダメ＋寒冷付着(1段階)を与える",
        "modifiers": [
          {
            "id": "mod_ラストライト_skill_base",
            "name": "セシュカの秘伝 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.56,
            "valuesByRank": {
              "r1": 1.42,
              "r9": 2.56,
              "spec1": 2.7733,
              "spec2": 2.9867,
              "spec3": 3.2
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_lastrite",
        "type": "combo",
        "name": "冬喰",
        "shortName": "連携技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 1.28,
          "lv10_spec1": 1.3867,
          "lv11_spec2": 1.4933,
          "lv12_spec3": 1.6
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_lastrite_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 9.0,
            "description": "氷柱: R1=71%→R9=128%→特化III=160% ＋ 斬撃基礎: R1=71%→R9=128%→特化III=160% ＋ 寒冷付着消費1段階につき追加: R1=+107%→R9=+192%→特化III=+240%(3段階消費で計1040%、4段階で1280%)",
            "condition": "敵の寒冷付着が3段階以上になった時発動可 / CD: R1〜9=9秒→特化III=8秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_lastrite_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 9.0,
            "description": "斬撃ブレイク値15 / 必殺チャージ回復: 基礎40 ＋ 付着消費1段階につき+15(3段階で85、4段階で100)",
            "condition": "敵の寒冷付着が3段階以上になった時発動可 / CD: R1〜9=9秒→特化III=8秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "敵の寒冷付着を全段階消費(3段階または4段階消費)",
          "description": "敵の寒冷付着を全段階消費(3段階または4段階消費)"
        },
        "description": "敵の寒冷付着状態が3段階以上になったときに発動可能。敵の寒冷付着をすべて消費し、消費した寒冷付着段階に応じて寒冷ダメージを与え、必殺チャージを回復する。",
        "damageTypeDetail": "寒冷",
        "rawText": "敵の寒冷付着状態が3段階以上になったときに発動可能。敵の寒冷付着をすべて消費し、消費した寒冷付着段階に応じて寒冷ダメージを与え、必殺チャージを回復する。",
        "attachText": "なし",
        "anomalyText": "敵の寒冷付着を全段階消費(3段階または4段階消費)",
        "modifiers": [
          {
            "id": "mod_ラストライト_combo_base",
            "name": "冬喰 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.28,
            "valuesByRank": {
              "r1": 0.71,
              "r9": 1.28,
              "spec1": 1.3867,
              "spec2": 1.4933,
              "spec3": 1.6
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_lastrite",
        "type": "ult",
        "name": "終の別れ",
        "shortName": "必殺技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 3.2,
          "lv10_spec1": 3.4667,
          "lv11_spec2": 3.7333,
          "lv12_spec3": 4.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_lastrite_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "3段斬撃: R1[178%/178%/356%] → R9[320%/320%/640%] → 特化III[400%/400%/800%](合計1600%)",
            "condition": "必殺チャージ消費240(※自身の戦技・連携技でのみチャージ回復可能) / 発動中無敵",
            "effectType": "multiplier"
          },
          {
            "id": "buff_lastrite_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値[5+5+10=20] / 発動中被ダメ完全無効",
            "condition": "必殺チャージ消費240(※自身の戦技・連携技でのみチャージ回復可能) / 発動中無敵",
            "effectType": "crush"
          },
          {
            "id": "buff_lastrite_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【必殺チャージ獲得制限】ラストライトの必殺チャージはチーム共通のSP消費等では回復せず、自身の戦技(16)および連携技(40+15×段階)でのみ回復可能（チャージ回復効率UPは乗る）",
            "condition": "必殺チャージ消費240(※自身の戦技・連携技でのみチャージ回復可能) / 発動中無敵",
            "special": "【必殺チャージ獲得制限】ラストライトの必殺チャージはチーム共通のSP消費等では回復せず、自身の戦技(16)および連携技(40+15×段階)でのみ回復可能（チャージ回復効率UPは乗る）",
            "effectType": "special"
          }
        ],
        "epCost": 240,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "前方に斬撃を3回放ち、高い寒冷ダメージを与える（寒冷付着なし）。ラストライトの必殺チャージは、自身の戦技および連携技でのみ回復可能。",
        "damageTypeDetail": "寒冷",
        "rawText": "前方に斬撃を3回放ち、高い寒冷ダメージを与える（寒冷付着なし）。ラストライトの必殺チャージは、自身の戦技および連携技でのみ回復可能。",
        "attachText": "なし",
        "anomalyText": "なし",
        "special": "【必殺チャージ獲得制限】ラストライトの必殺チャージはチーム共通のSP消費等では回復せず、自身の戦技(16)および連携技(40+15×段階)でのみ回復可能（チャージ回復効率UPは乗る）",
        "modifiers": [
          {
            "id": "mod_ラストライト_ult_base",
            "name": "終の別れ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.2,
            "valuesByRank": {
              "r1": 1.78,
              "r9": 3.2,
              "spec1": 3.4667,
              "spec2": 3.7333,
              "spec3": 4.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "クラヴェンガー",
    "recommendedWeapons": [
      "クラヴェンガー",
      "破砕君主"
    ],
    "normalAttack": {
      "name": "氷霜の舞",
      "damageType": "寒冷",
      "damageTypeDetail": "寒冷",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[30%/55%/68%/90%]→R9[54%/99%/122%/162%]→特化III[68%/124%/153%/203%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク25 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に寒冷ダメージを与える（※寒冷付着なし）。重攻撃はブレイク値25を与える。",
      "raw": "最大4段の攻撃で敵に寒冷ダメージを与える（※寒冷付着なし）。重攻撃はブレイク値25を与える。"
    },
    "talents": [
      {
        "id": "talent_lastrite_1",
        "name": "低体温症",
        "description": "ラストライトが任意のアーツ付着を消費すると、15秒間その敵に消費したアーツ付着の段階数×2%→×4%の寒冷脆弱を付与する（重ね掛け不可）",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_lastrite_talent1_vulnerability",
            "name": "低体温症",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 15.0,
            "description": "消費した付着段階数×2%(昇進1) → ×4%(昇進2)の寒冷脆弱を付与(3段階消費12%、4段階消費16%)",
            "condition": "自身が任意のアーツ付着を消費した時 / 15秒間 / 重ね掛け不可"
          }
        ]
      },
      {
        "id": "talent_lastrite_2",
        "name": "低温脆性",
        "description": "必殺技「終の別れ」で寒冷脆弱状態の敵にダメージを与えるとき、寒冷脆弱の効果が1.2倍→1.5倍と見なされる",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "special",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_lastrite_talent2_vulnerability",
            "name": "低温脆性",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 0.0,
            "description": "敵の寒冷脆弱の効果を1.2倍(昇進2) → 1.5倍(昇進3)として計算(必殺技ヒット時のみ乗算強化)",
            "condition": "必殺技「終の別れ」で寒冷脆弱状態の敵にダメージを与える時"
          },
          {
            "id": "buff_lastrite_talent2_special",
            "name": "低温脆性",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【必殺技限定・寒冷脆弱倍率見なし】敵に付与されているすべての寒冷脆弱(素質1やオクギ等含む)が、必殺技ダメージ計算時のみ1.5倍として扱われる",
            "condition": "必殺技「終の別れ」で寒冷脆弱状態の敵にダメージを与える時",
            "special": "【必殺技限定・寒冷脆弱倍率見なし】敵に付与されているすべての寒冷脆弱(素質1やオクギ等含む)が、必殺技ダメージ計算時のみ1.5倍として扱われる"
          }
        ],
        "special": "【必殺技限定・寒冷脆弱倍率見なし】敵に付与されているすべての寒冷脆弱(素質1やオクギ等含む)が、必殺技ダメージ計算時のみ1.5倍として扱われる"
      }
    ],
    "specialMechanic": {
      "title": "ラストライト 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【低温注入(重攻撃連動追撃)】戦技ボタンを押した瞬間ではなく、バフを受けた操作中オペレーターが15秒以内に次の重攻撃を当てた瞬間にラストライトの幻影が追撃し、寒冷ダメ＋寒冷付着(1段階)を与える ／ 【必殺チャージ獲得制限】ラストライトの必殺チャージはチーム共通のSP消費等では回復せず、自身の戦技(16)および連携技(40+15×段階)でのみ回復可能（チャージ回復効率UPは乗る） ／ 【必殺技限定・寒冷脆弱倍率見なし】敵に付与されているすべての寒冷脆弱(素質1やオクギ等含む)が、必殺技ダメージ計算時のみ1.5倍として扱われる"
    },
    "recommendedArmorSet": "set_mancho",
    "recommendedArmorSetName": "満潮セット",
    "recommendedArmor": {
      "armorSet": "set_mancho",
      "body": "gold_body_e5a594e6b5aae38_19",
      "arm": "gold_arms_e6ba80e6bdaee38_17",
      "acc1": "gold_accessories_e687b8e6b2b3e38_21",
      "acc2": "gold_accessories_e687b8e6b2b3e38_21"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_lifeng",
    "name": "リーフォン",
    "icon": "image/lifeng.png",
    "rarity": 6,
    "element": "物理",
    "weaponType": "長柄武器",
    "class": "前衛",
    "mainStat": "筋力",
    "subStat": "意志",
    "baseStats": {
      "hp": 7300,
      "atk": 820,
      "strength": 285,
      "agility": 110,
      "intellect": 120,
      "willpower": 185,
      "artsIntensity": 40,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_lifeng",
        "type": "skill",
        "name": "浄化身",
        "shortName": "戦技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 0.69,
          "lv10_spec1": 0.7467,
          "lv11_spec2": 0.8033,
          "lv12_spec3": 0.86
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_lifeng_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 12.0,
            "description": "1〜3段目: R1[38%/38%/119%] → R9[69%/69%/214%] → 特化III[86%/86%/268%]",
            "condition": "SP消費100 / 最終撃命中時、敵がクラッシュ状態でない場合(1凸でクラッシュ2以下も可)に物理脆弱(12秒)付与",
            "effectType": "multiplier"
          },
          {
            "id": "buff_lifeng_skill_vulnerability",
            "name": "物理脆弱",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 12.0,
            "description": "クラッシュ0(1凸で2以下)の敵に物理脆弱(12秒): R1=5% → R9=9% → 特化III=12%",
            "condition": "SP消費100 / 最終撃命中時、敵がクラッシュ状態でない場合(1凸でクラッシュ2以下も可)に物理脆弱(12秒)付与",
            "effectType": "debuff"
          },
          {
            "id": "buff_lifeng_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 12.0,
            "description": "SP消費100 / 3段目ブレイク値10",
            "condition": "SP消費100 / 最終撃命中時、敵がクラッシュ状態でない場合(1凸でクラッシュ2以下も可)に物理脆弱(12秒)付与",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💥 クラッシュ付与 (+1段)",
          "description": "3段目で転倒付与(クラッシュ+1段階)"
        },
        "description": "物理ダメージを2回与え、その後重い打撃で物理ダメージと転倒効果を与える。最後の一撃を受けた敵がクラッシュ状態でない場合、追加で物理脆弱を付与する。",
        "damageTypeDetail": "物理",
        "rawText": "物理ダメージを2回与え、その後重い打撃で物理ダメージと転倒効果を与える。最後の一撃を受けた敵がクラッシュ状態でない場合、追加で物理脆弱を付与する。",
        "attachText": "なし",
        "anomalyText": "3段目で転倒付与(クラッシュ+1段階)",
        "modifiers": [
          {
            "id": "mod_リーフォン_skill_base",
            "name": "浄化身 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.69,
            "valuesByRank": {
              "r1": 0.38,
              "r9": 0.69,
              "spec1": 0.7467,
              "spec2": 0.8033,
              "spec3": 0.86
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_lifeng",
        "type": "combo",
        "name": "忿怒形",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 0.84,
          "lv10_spec1": 0.91,
          "lv11_spec2": 0.98,
          "lv12_spec3": 1.05
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_lifeng_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 16.0,
            "description": "1・2段目倍率: R1[47%+167%] → R9[84%+300%] → 特化III[105%+375%]",
            "condition": "物理脆弱または破砕状態の敵が操作キャラの重攻撃を受けた時発動可 / CD: R1〜9=16秒→特化III=15秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_lifeng_combo_link",
            "name": "リンク状態（スキル威力UP）",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "link",
            "calcGroupLabel": "【リンク補正】",
            "value": 0,
            "duration": 16.0,
            "description": "リンク状態獲得(20秒間、チーム共有・誰かの次の戦技1.3倍または必殺1.2倍で消費)",
            "condition": "物理脆弱または破砕状態の敵が操作キャラの重攻撃を受けた時発動可 / CD: R1〜9=16秒→特化III=15秒",
            "effectType": "buff"
          },
          {
            "id": "buff_lifeng_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 16.0,
            "description": "2段目ブレイク値10",
            "condition": "物理脆弱または破砕状態の敵が操作キャラの重攻撃を受けた時発動可 / CD: R1〜9=16秒→特化III=15秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "物理脆弱または破砕状態の敵が、操作中のオペレーターの重攻撃を受けると発動可能。物理ダメージを与え、リンク状態を獲得する。",
        "damageTypeDetail": "物理",
        "rawText": "物理脆弱または破砕状態の敵が、操作中のオペレーターの重攻撃を受けると発動可能。物理ダメージを与え、リンク状態を獲得する。",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_リーフォン_combo_base",
            "name": "忿怒形 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.84,
            "valuesByRank": {
              "r1": 0.47,
              "r9": 0.84,
              "spec1": 0.91,
              "spec2": 0.98,
              "spec3": 1.05
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_lifeng",
        "type": "ult",
        "name": "不動心",
        "shortName": "必殺技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 3.2,
          "lv10_spec1": 3.4667,
          "lv11_spec2": 3.7333,
          "lv12_spec3": 4.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_lifeng_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 15.0,
            "description": "1段目: R1=178%→R9=320%→特化III=400% / 2段目: R1=178%→R9=320%→特化III=400% / リンク消費時追加ダメ: R1=267%→R9=480%→特化III=600%",
            "condition": "必殺チャージ消費90 / CD15秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_lifeng_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 15.0,
            "description": "敵を中心に引き寄せ",
            "condition": "必殺チャージ消費90 / CD15秒",
            "effectType": "crush"
          }
        ],
        "epCost": 90,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💥 クラッシュ付与 (+1段)",
          "description": "1段目・2段目それぞれで転倒付与(計クラッシュ+2段階) / リンク消費時に追加物理ダメ"
        },
        "description": "広範囲の敵に物理ダメージと転倒効果を与え中心に引き寄せ、一定時間後再度高い物理ダメージと転倒効果を与える。必殺技発動時にリンク状態を消費した場合、追加で高い物理ダメージを与える。",
        "damageTypeDetail": "物理",
        "rawText": "広範囲の敵に物理ダメージと転倒効果を与え中心に引き寄せ、一定時間後再度高い物理ダメージと転倒効果を与える。必殺技発動時にリンク状態を消費した場合、追加で高い物理ダメージを与える。",
        "attachText": "なし",
        "anomalyText": "1段目・2段目それぞれで転倒付与(計クラッシュ+2段階) / リンク消費時に追加物理ダメ",
        "modifiers": [
          {
            "id": "mod_リーフォン_ult_base",
            "name": "不動心 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.2,
            "valuesByRank": {
              "r1": 1.78,
              "r9": 3.2,
              "spec1": 3.4667,
              "spec2": 3.7333,
              "spec3": 4.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:physical",
              "cond:always"
            ]
          },
          {
            "id": "mod_リーフォン_ult_additional",
            "name": "不動心 条件追加ダメージ",
            "calcGroup": "skill_multiplier",
            "value": 4.8,
            "valuesByRank": {
              "r9": 4.8,
              "spec3": 6.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:physical",
              "cond:trigger"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "負山",
    "recommendedWeapons": [
      "負山",
      "勇猛"
    ],
    "normalAttack": {
      "name": "摧破",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[24%/29%/35%/68%]→R9[44%/52%/63%/122%]→特化III[55%/65%/79%/152%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク19 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値19を与える。",
      "raw": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値19を与える。"
    },
    "talents": [
      {
        "id": "talent_lifeng_1",
        "name": "円頓",
        "description": "知性と意志1につき攻撃力+0.10％→+0.15％（※ダメージ計算式上「能力値付加」枠に加算）",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_lifeng_talent1_stat",
            "name": "円頓",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "stat",
            "calcGroupLabel": "【能力値補正】",
            "value": 0,
            "duration": 0.0,
            "description": "【能力値付加枠に加算】知性1および意志1につき能力値付加+0.10%(昇進1)→+0.15%(昇進2) ※攻撃力%枠ではなくメイン0.5%・サブ0.2%と同じ能力値付加枠に加算される重要仕様",
            "condition": "常時(自身の知性・意志参照)"
          }
        ]
      },
      {
        "id": "talent_lifeng_2",
        "name": "伏魔",
        "description": "自身が敵を転倒させるたびに、追加で攻撃力50％→100％分の物理ダメージを与える",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_lifeng_talent2_multiplier",
            "name": "伏魔",
            "target": "none",
            "targetLabel": "なし",
            "category": "buff",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "追加で攻撃力50%(昇進1) → 100%(昇進2)分の物理ダメージを別ヒット発生",
            "condition": "自身が敵を転倒させるたび(戦技1回・必殺2回発動)"
          }
        ]
      }
    ],
    "recommendedArmorSet": "set_chouiki",
    "recommendedArmorSetName": "軽量超域セット",
    "recommendedArmor": {
      "armorSet": "set_chouiki",
      "body": "gold_body_e8bbbde9878fe8b_44",
      "arm": "gold_arms_e8bbbde9878fe8b_39",
      "acc1": "gold_accessories_e8bbbde9878fe8b_59",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_lino",
    "name": "リーノ",
    "icon": "image/lino.png",
    "rarity": 6,
    "element": "電磁",
    "weaponType": "長柄武器",
    "class": "補助",
    "mainStat": "知性",
    "subStat": "意志",
    "baseStats": {
      "hp": 6800,
      "atk": 920,
      "strength": 120,
      "agility": 110,
      "intellect": 285,
      "willpower": 185,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_lino",
        "type": "skill",
        "name": "キラキラフォーカス",
        "shortName": "戦技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 1.92,
          "lv10_spec1": 2.08,
          "lv11_spec2": 2.24,
          "lv12_spec3": 2.4
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_lino_skill_atk_pct",
            "name": "ライブモード中チーム攻撃力UP",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "atk_pct",
            "calcGroupLabel": "【参照スケール】攻撃力%",
            "value": 10,
            "duration": 60.0,
            "description": "ライブモード中チーム全員の攻撃力UP: R1=+6% → R9=+8% → 特化III=+10%",
            "condition": "SP消費25 / 60秒間「ライブモード」に移行(期間中戦技はSP0の「モード停止」に変化) / 10秒毎追加攻撃・3秒毎範囲治療",
            "effectType": "buff"
          },
          {
            "id": "buff_lino_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 60.0,
            "description": "初回電磁ダメ: R1=107%→R9=192%→特化III=240% / 10秒毎追加電磁ダメ: R1=53%→R9=96%→特化III=120%",
            "condition": "SP消費25 / 60秒間「ライブモード」に移行(期間中戦技はSP0の「モード停止」に変化) / 10秒毎追加攻撃・3秒毎範囲治療",
            "effectType": "multiplier"
          },
          {
            "id": "buff_lino_skill_aux",
            "name": "3秒毎範囲HP回復",
            "target": "team",
            "targetLabel": "全体回復",
            "category": "heal",
            "calcGroup": "heal",
            "calcGroupLabel": "【補助・耐久・リソース】(全体回復)",
            "value": 0,
            "duration": 60.0,
            "description": "SP消費25 / ブレイク値3 / 3秒毎範囲HP回復: R1[18+敏捷×0.04]→R9[38+敏捷×0.09]→特化III[41+敏捷×0.09]",
            "condition": "SP消費25 / 60秒間「ライブモード」に移行(期間中戦技はSP0の「モード停止」に変化) / 10秒毎追加攻撃・3秒毎範囲治療",
            "effectType": "heal"
          },
          {
            "id": "buff_lino_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 60.0,
            "description": "【SP25モード切替戦技】通常のSP100ではなくSP25で60秒間のライブモードを展開し、再使用時はSP0でモード停止する（※電磁付着なし）",
            "condition": "SP消費25 / 60秒間「ライブモード」に移行(期間中戦技はSP0の「モード停止」に変化) / 10秒毎追加攻撃・3秒毎範囲治療",
            "special": "【SP25モード切替戦技】通常のSP100ではなくSP25で60秒間のライブモードを展開し、再使用時はSP0でモード停止する（※電磁付着なし）",
            "effectType": "special"
          }
        ],
        "spCost": 25,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "敵に電磁ダメージを与え、その後ライブモード(60秒)に入る。持続期間中、チーム全員の攻撃力をアップし、範囲内のオペレーターを治療し続ける。（※電磁付着なし）",
        "damageTypeDetail": "電磁",
        "rawText": "敵に電磁ダメージを与え、その後ライブモード(60秒)に入る。持続期間中、チーム全員の攻撃力をアップし、範囲内のオペレーターを治療し続ける。（※電磁付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "special": "【SP25モード切替戦技】通常のSP100ではなくSP25で60秒間のライブモードを展開し、再使用時はSP0でモード停止する（※電磁付着なし）",
        "modifiers": [
          {
            "id": "mod_リーノ_skill_base",
            "name": "キラキラフォーカス 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.92,
            "valuesByRank": {
              "r1": 1.07,
              "r9": 1.92,
              "spec1": 2.08,
              "spec2": 2.24,
              "spec3": 2.4
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:electric",
              "cond:always"
            ]
          },
          {
            "id": "mod_リーノ_skill_additional",
            "name": "キラキラフォーカス 条件追加ダメージ",
            "calcGroup": "skill_multiplier",
            "value": 0.96,
            "valuesByRank": {
              "r9": 0.96,
              "spec3": 1.2
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:electric",
              "cond:trigger"
            ]
          }
        ]
      },
      {
        "id": "combo_lino",
        "type": "combo",
        "name": "ときめきメロディー",
        "shortName": "連携技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 2.88,
          "lv10_spec1": 3.12,
          "lv11_spec2": 3.36,
          "lv12_spec3": 3.6
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_lino_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 10.0,
            "description": "電磁ダメ倍率: R1=160% → R9=288% → 特化III=360%",
            "condition": "ライブモード期間中、敵がアーツ異常を受けるか消費された時発動可 / CD: R1=10秒→R9=9秒→特化III=8秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_lino_combo_aux",
            "name": "操作キャラHP回復 & 必殺チャージ+20",
            "target": "single",
            "targetLabel": "単体回復",
            "category": "heal",
            "calcGroup": "heal",
            "calcGroupLabel": "【補助・耐久・リソース】(単体回復)",
            "value": 0,
            "duration": 10.0,
            "description": "ブレイク値5 / 必殺チャージ+20回復 / 操作キャラHP回復: R1[72+敏捷×0.17]→R9[151+敏捷×0.35]→特化III[162+敏捷×0.38]",
            "condition": "ライブモード期間中、敵がアーツ異常を受けるか消費された時発動可 / CD: R1=10秒→R9=9秒→特化III=8秒",
            "effectType": "heal"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "ライブモード期間中、敵がアーツ異常を受けるかアーツ異常が消費されたときに発動可能。敵に電磁ダメージを与え、操作オペレーターを治療し、必殺チャージを20回復する。（※電磁付着なし）",
        "damageTypeDetail": "電磁",
        "rawText": "ライブモード期間中、敵がアーツ異常を受けるかアーツ異常が消費されたときに発動可能。敵に電磁ダメージを与え、操作オペレーターを治療し、必殺チャージを20回復する。（※電磁付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_リーノ_combo_base",
            "name": "ときめきメロディー 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.88,
            "valuesByRank": {
              "r1": 1.6,
              "r9": 2.88,
              "spec1": 3.12,
              "spec2": 3.36,
              "spec3": 3.6
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_lino",
        "type": "ult",
        "name": "綺羅星コンチェルト",
        "shortName": "必殺技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 2.56,
          "lv10_spec1": 2.7733,
          "lv11_spec2": 2.9867,
          "lv12_spec3": 3.2
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_lino_ult_atk_pct",
            "name": "チーム攻撃力+10%",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "atk_pct",
            "calcGroupLabel": "【参照スケール】攻撃力%",
            "value": 10,
            "duration": 15.0,
            "description": "パフォーマンスモード中チーム全員の攻撃力+10%",
            "condition": "必殺チャージ消費160 / CD20秒 / 15秒間「パフォーマンスモード」(ライブモードを上書き・1.5秒毎歌唱・完走時3倍フィニッシュ)",
            "effectType": "buff"
          },
          {
            "id": "buff_lino_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "ステージ花火: R1=142%→R9=256%→特化III=320% / クライマックス最高潮: R1=284%→R9=512%→特化III=640% / 1.5秒毎歌唱: R1=27%→R9=48%→特化III=60%(完走時終了ダメは歌唱の3倍=180%)",
            "condition": "必殺チャージ消費160 / CD20秒 / 15秒間「パフォーマンスモード」(ライブモードを上書き・1.5秒毎歌唱・完走時3倍フィニッシュ)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_lino_ult_amp",
            "name": "意志連動 電磁・自然増幅",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "amp",
            "calcGroupLabel": "【増幅補正】増幅",
            "value": 60,
            "duration": 15.0,
            "description": "チーム全員に意志参照の電磁増幅 & 自然増幅: 意志1につきR1=+0.018%(上限40%) → R9=+0.032%(上限45%) → 特化III=+0.04%(上限60%)",
            "condition": "必殺チャージ消費160 / CD20秒 / 15秒間「パフォーマンスモード」(ライブモードを上書き・1.5秒毎歌唱・完走時3倍フィニッシュ)",
            "effectType": "buff"
          },
          {
            "id": "buff_lino_ult_aux",
            "name": "全体HP回復",
            "target": "team",
            "targetLabel": "全体回復",
            "category": "heal",
            "calcGroup": "heal",
            "calcGroupLabel": "【補助・耐久・リソース】(全体回復)",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値20 / 初回全体回復: R1[324+敏捷×0.76]→特化III[729+敏捷×1.7] / 1.5秒毎範囲回復: R1[36+敏捷×0.08]→特化III[81+敏捷×0.19](完走時3倍全体回復)",
            "condition": "必殺チャージ消費160 / CD20秒 / 15秒間「パフォーマンスモード」(ライブモードを上書き・1.5秒毎歌唱・完走時3倍フィニッシュ)",
            "effectType": "heal"
          }
        ],
        "epCost": 160,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "クライマックス最高潮で強制感電付与(※電磁付着は付与しない！)",
          "description": "クライマックス最高潮で強制感電付与(※電磁付着は付与しない！)"
        },
        "description": "チーム全員を治療しパフォーマンスモード(15秒)に入る。クライマックス最高潮で広範囲の敵に電磁ダメージを与え、強制的に感電状態にする。持続中、チーム全員の攻撃力+10%、意志に応じて電磁増幅と自然増幅を付与する。（※電磁付着なし）",
        "damageTypeDetail": "電磁",
        "rawText": "チーム全員を治療しパフォーマンスモード(15秒)に入る。クライマックス最高潮で広範囲の敵に電磁ダメージを与え、強制的に感電状態にする。持続中、チーム全員の攻撃力+10%、意志に応じて電磁増幅と自然増幅を付与する。（※電磁付着なし）",
        "attachText": "なし",
        "anomalyText": "クライマックス最高潮で強制感電付与(※電磁付着は付与しない！)",
        "modifiers": [
          {
            "id": "mod_リーノ_ult_base",
            "name": "綺羅星コンチェルト 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.56,
            "valuesByRank": {
              "r1": 1.42,
              "r9": 2.56,
              "spec1": 2.7733,
              "spec2": 2.9867,
              "spec3": 3.2
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "プリズムナイトデビュー",
    "recommendedWeapons": [
      "プリズムナイトデビュー",
      "黄金時代"
    ],
    "normalAttack": {
      "name": "キラめきハート",
      "damageType": "電磁",
      "damageTypeDetail": "電磁",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[19%/27%/27%/36%/45%]→R9[34%/48%/48%/65%/80%]→特化III[42%/60%/60%/81%/100%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク19 / 終撃時SP回復",
      "description": "最大5段の攻撃で、敵に電磁ダメージを与える（※電磁付着なし）。重攻撃はブレイク値19を与える。",
      "raw": "最大5段の攻撃で、敵に電磁ダメージを与える（※電磁付着なし）。重攻撃はブレイク値19を与える。"
    },
    "talents": [
      {
        "id": "talent_lino_1",
        "name": "アイドルゾーン",
        "description": "ライブモードとパフォーマンスモードの持続中、範囲内のオペレーターが受ける回復効率+10%→+20%、受けるダメージ-10%→-20%",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_lino_talent1_aux",
            "name": "アイドルゾーン",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 3.0,
            "description": "範囲内の味方の受ける回復効率+10%(昇進1)→+20%(昇進2)、受けるダメージ-10%(昇進1)→-20%(昇進2)",
            "condition": "ライブモード・パフォーマンスモード中(範囲離脱後も3秒持続)"
          }
        ]
      },
      {
        "id": "talent_lino_2",
        "name": "一等星の応援",
        "description": "連携技を発動すると、チーム内の電磁または自然属性のオペレーターが次の戦技を発動するとき、SPが5→10返還される（持続30秒・重ね掛け不可）",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_lino_talent2_aux",
            "name": "一等星の応援",
            "target": "single",
            "targetLabel": "単体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 30.0,
            "description": "SP5(昇進2) → SP10(昇進3)返還",
            "condition": "連携技発動後30秒間、チーム内の電磁または自然オペレーターが次の戦技を発動した時(1回で終了・重ね掛け不可)"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "リーノ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【SP25モード切替戦技】通常のSP100ではなくSP25で60秒間のライブモードを展開し、再使用時はSP0でモード停止する（※電磁付着なし）"
    },
    "recommendedArmorSet": "set_bio_support",
    "recommendedArmorSetName": "生物補助セット",
    "recommendedArmor": {
      "armorSet": "set_bio_support",
      "body": "gold_body_e6b581e8bba2e8b_13",
      "arm": "gold_arms_e7949fe789a9e8a_41",
      "acc1": "gold_accessories_e7949fe789a9e8a_63",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_mifu",
    "name": "ミ・フ",
    "icon": "image/mifu.png",
    "rarity": 6,
    "element": "物理",
    "weaponType": "大剣",
    "class": "前衛",
    "mainStat": "筋力",
    "subStat": "意志",
    "baseStats": {
      "hp": 7300,
      "atk": 820,
      "strength": 285,
      "agility": 110,
      "intellect": 120,
      "willpower": 185,
      "artsIntensity": 40,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 50,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill1_mifu",
        "type": "skill",
        "name": "清波三芸（断雲 → 追形 → 開天）",
        "shortName": "戦技1",
        "damageType": "物理",
        "multipliers": {
          "lv9": 1.2,
          "lv10_spec1": 1.3,
          "lv11_spec2": 1.4,
          "lv12_spec3": 1.5
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_mifu_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "断雲: R1=67%→R9=120%→特化III=150% / 追形: R1=89%→R9=160%→特化III=200%(+猛撃異常ダメ) / 開天(猛撃ダメ扱い): R1=400%→R9=528%→特化III=600%",
            "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_mifu_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値: 追形5 / 開天10 / 断雲で敵を引き寄せ",
            "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
            "effectType": "crush"
          },
          {
            "id": "buff_mifu_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
            "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
            "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "consume_smash",
          "stacks": 1,
          "label": "💥 猛撃・クラッシュ消費",
          "description": "2段目「追形」で猛撃付与(クラッシュ全消費) → 消費クラッシュ3段階以上で3段目「開天」(猛撃ダメ扱い)解放"
        },
        "description": "断雲(SP100→50返還)→追形(SP50・猛撃付与、最大クラッシュ消費3以上で開天へ)→開天(SP50・戦技ダメージではなく猛撃ダメージと見なされる)。",
        "damageTypeDetail": "物理",
        "rawText": "断雲(SP100→50返還)→追形(SP50・猛撃付与、最大クラッシュ消費3以上で開天へ)→開天(SP50・戦技ダメージではなく猛撃ダメージと見なされる)。",
        "attachText": "なし",
        "anomalyText": "2段目「追形」で猛撃付与(クラッシュ全消費) → 消費クラッシュ3段階以上で3段目「開天」(猛撃ダメ扱い)解放",
        "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
        "modifiers": [
          {
            "id": "mod_ミ・フ_skill_base",
            "name": "清波三芸（断雲 → 追形 → 開天） 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.2,
            "valuesByRank": {
              "r1": 0.67,
              "r9": 1.2,
              "spec1": 1.3,
              "spec2": 1.4,
              "spec3": 1.5
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "skill2_mifu",
        "type": "skill2",
        "name": "清波三芸（断雲 → 追形 → 開天）",
        "shortName": "戦技2",
        "damageType": "物理",
        "multipliers": {
          "lv9": 1.2,
          "lv10_spec1": 1.3,
          "lv11_spec2": 1.4,
          "lv12_spec3": 1.5
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_mifu_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "断雲: R1=67%→R9=120%→特化III=150% / 追形: R1=89%→R9=160%→特化III=200%(+猛撃異常ダメ) / 開天(猛撃ダメ扱い): R1=400%→R9=528%→特化III=600%",
            "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_mifu_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値: 追形5 / 開天10 / 断雲で敵を引き寄せ",
            "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
            "effectType": "crush"
          },
          {
            "id": "buff_mifu_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
            "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
            "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
            "effectType": "special"
          }
        ],
        "spCost": 50,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "consume_smash",
          "stacks": 1,
          "label": "💥 猛撃・クラッシュ消費",
          "description": "2段目「追形」で猛撃付与(クラッシュ全消費) → 消費クラッシュ3段階以上で3段目「開天」(猛撃ダメ扱い)解放"
        },
        "description": "断雲(SP100→50返還)→追形(SP50・猛撃付与、最大クラッシュ消費3以上で開天へ)→開天(SP50・戦技ダメージではなく猛撃ダメージと見なされる)。",
        "damageTypeDetail": "物理",
        "rawText": "断雲(SP100→50返還)→追形(SP50・猛撃付与、最大クラッシュ消費3以上で開天へ)→開天(SP50・戦技ダメージではなく猛撃ダメージと見なされる)。",
        "attachText": "なし",
        "anomalyText": "2段目「追形」で猛撃付与(クラッシュ全消費) → 消費クラッシュ3段階以上で3段目「開天」(猛撃ダメ扱い)解放",
        "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
        "modifiers": [
          {
            "id": "mod_ミ・フ_skill_base",
            "name": "清波三芸（断雲 → 追形 → 開天） 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.2,
            "valuesByRank": {
              "r1": 0.67,
              "r9": 1.2,
              "spec1": 1.3,
              "spec2": 1.4,
              "spec3": 1.5
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "skill3_mifu",
        "type": "skill3",
        "name": "清波三芸（断雲 → 追形 → 開天）",
        "shortName": "戦技3",
        "damageType": "物理",
        "multipliers": {
          "lv9": 1.2,
          "lv10_spec1": 1.3,
          "lv11_spec2": 1.4,
          "lv12_spec3": 1.5
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_mifu_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "断雲: R1=67%→R9=120%→特化III=150% / 追形: R1=89%→R9=160%→特化III=200%(+猛撃異常ダメ) / 開天(猛撃ダメ扱い): R1=400%→R9=528%→特化III=600%",
            "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_mifu_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値: 追形5 / 開天10 / 断雲で敵を引き寄せ",
            "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
            "effectType": "crush"
          },
          {
            "id": "buff_mifu_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
            "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
            "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
            "effectType": "special"
          }
        ],
        "spCost": 50,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "consume_smash",
          "stacks": 1,
          "label": "💥 猛撃・クラッシュ消費",
          "description": "2段目「追形」で猛撃付与(クラッシュ全消費) → 消費クラッシュ3段階以上で3段目「開天」(猛撃ダメ扱い)解放"
        },
        "description": "断雲(SP100→50返還)→追形(SP50・猛撃付与、最大クラッシュ消費3以上で開天へ)→開天(SP50・戦技ダメージではなく猛撃ダメージと見なされる)。",
        "damageTypeDetail": "物理",
        "rawText": "断雲(SP100→50返還)→追形(SP50・猛撃付与、最大クラッシュ消費3以上で開天へ)→開天(SP50・戦技ダメージではなく猛撃ダメージと見なされる)。",
        "attachText": "なし",
        "anomalyText": "2段目「追形」で猛撃付与(クラッシュ全消費) → 消費クラッシュ3段階以上で3段目「開天」(猛撃ダメ扱い)解放",
        "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
        "modifiers": [
          {
            "id": "mod_ミ・フ_skill_base",
            "name": "清波三芸（断雲 → 追形 → 開天） 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.2,
            "valuesByRank": {
              "r1": 0.67,
              "r9": 1.2,
              "spec1": 1.3,
              "spec2": 1.4,
              "spec3": 1.5
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_mifu",
        "type": "combo",
        "name": "拳に悔い無し",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 2.0,
          "lv10_spec1": 2.1667,
          "lv11_spec2": 2.3333,
          "lv12_spec3": 2.5
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_mifu_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "物理ダメ倍率: R1=111% → R9=200% → 特化III=250%",
            "condition": "敵のクラッシュ段階が3になった時発動可 / CD: R1〜9=20秒→特化III=19秒 / 発動後戦技が「追形」に変化",
            "effectType": "multiplier"
          },
          {
            "id": "buff_mifu_combo_vulnerability",
            "name": "敵物理脆弱5%",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 20.0,
            "description": "敵に物理脆弱5%(16秒間)",
            "condition": "敵のクラッシュ段階が3になった時発動可 / CD: R1〜9=20秒→特化III=19秒 / 発動後戦技が「追形」に変化",
            "effectType": "debuff"
          },
          {
            "id": "buff_mifu_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値10 / 必殺チャージ+10回復 / 戦技を2段目「追形」に切替",
            "condition": "敵のクラッシュ段階が3になった時発動可 / CD: R1〜9=20秒→特化III=19秒 / 発動後戦技が「追形」に変化",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "敵のクラッシュ段階が3になった時に発動可能。物理ダメージを与え、16秒間5%の物理脆弱を付与する。発動後、一定時間戦技が追形に替わる。",
        "damageTypeDetail": "物理",
        "rawText": "敵のクラッシュ段階が3になった時に発動可能。物理ダメージを与え、16秒間5%の物理脆弱を付与する。発動後、一定時間戦技が追形に替わる。",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_ミ・フ_combo_base",
            "name": "拳に悔い無し 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.0,
            "valuesByRank": {
              "r1": 1.11,
              "r9": 2.0,
              "spec1": 2.1667,
              "spec2": 2.3333,
              "spec3": 2.5
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_mifu",
        "type": "ult",
        "name": "心絶やす",
        "shortName": "必殺技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 5.6,
          "lv10_spec1": 6.0667,
          "lv11_spec2": 6.5333,
          "lv12_spec3": 7.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_mifu_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 15.0,
            "description": "物理ダメ倍率: R1=311% → R9=560% → 特化III=700%",
            "condition": "必殺チャージ消費80 / CD15秒 / 発動後戦技が「追形」に変化",
            "effectType": "multiplier"
          },
          {
            "id": "buff_mifu_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 15.0,
            "description": "ブレイク値20 / 戦技を2段目「追形」に切替",
            "condition": "必殺チャージ消費80 / CD15秒 / 発動後戦技が「追形」に変化",
            "effectType": "crush"
          }
        ],
        "epCost": 80,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "強制浮遊付与(クラッシュ+1段階)"
        },
        "description": "目の前の目標を強制的に浮遊させ、その後地面に叩きつけて物理ダメージを与える。発動後、一定時間戦技が追形に替わる。",
        "damageTypeDetail": "物理",
        "rawText": "目の前の目標を強制的に浮遊させ、その後地面に叩きつけて物理ダメージを与える。発動後、一定時間戦技が追形に替わる。",
        "attachText": "なし",
        "anomalyText": "強制浮遊付与(クラッシュ+1段階)",
        "modifiers": [
          {
            "id": "mod_ミ・フ_ult_base",
            "name": "心絶やす 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 5.6,
            "valuesByRank": {
              "r1": 3.11,
              "r9": 5.6,
              "spec1": 6.0667,
              "spec2": 6.5333,
              "spec3": 7.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "赤纓",
    "recommendedWeapons": [
      "赤纓",
      "鑑"
    ],
    "normalAttack": {
      "name": "剣に拳の意あり",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[34%/38%/61%/77%]→R9[61%/69%/109%/138%]→特化III[76%/86%/136%/172%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク25 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値25を与える。",
      "raw": "最大4段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値25を与える。"
    },
    "talents": [
      {
        "id": "talent_mifu_1",
        "name": "冷酷無比",
        "description": "戦技「開天」が命中するとき、目標が物理脆弱またはブレイク状態の場合、ダメージ倍率が1.1倍→1.2倍までアップする",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_mifu_talent1_multiplier",
            "name": "冷酷無比",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "「開天」のダメージ倍率が1.1倍(昇進1) → 1.2倍(昇進3)までアップ(倍率乗算)",
            "condition": "戦技3段目「開天」命中時、目標が物理脆弱またはブレイク状態の場合"
          }
        ]
      },
      {
        "id": "talent_mifu_2",
        "name": "怒りを封ず",
        "description": "連携技を発動すると、10秒間最大HP15%→30%分のシールドを獲得し、中断されにくくなる（60秒に1回）",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_mifu_talent2_aux",
            "name": "怒りを封ず",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 60.0,
            "description": "最大HP15%(昇進2)→30%(昇進4)分のシールド獲得＋中断耐性UP",
            "condition": "連携技発動時(CD60秒) / 持続10秒"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "ミ・フ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）"
    },
    "recommendedArmorSet": "set_kyuho",
    "recommendedArmorSetName": "旧鋒セット",
    "recommendedArmor": {
      "armorSet": "set_kyuho",
      "body": "gold_body_e697a7e98b92e99_7",
      "arm": "gold_arms_e697a7e98b92e38_7",
      "acc1": "gold_accessories_e697a7e98b92e38_7",
      "acc2": "gold_accessories_e697a7e98b92e38_7"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_minho",
    "name": "ミンホ",
    "icon": "image/minho.png",
    "rarity": 6,
    "element": "電磁",
    "weaponType": "片手剣",
    "class": "前衛",
    "mainStat": "敏捷",
    "subStat": "知性",
    "baseStats": {
      "hp": 7300,
      "atk": 820,
      "strength": 120,
      "agility": 285,
      "intellect": 185,
      "willpower": 110,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [],
    "skills": [
      {
        "id": "skill_minho",
        "type": "skill",
        "name": "鎮影 ／ 派生「奔雷」",
        "shortName": "戦技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 3.78,
          "lv10_spec1": 4.15,
          "lv11_spec2": 4.57,
          "lv12_spec3": 5.04
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_minho_skill_taken_damage_up",
            "name": "被ダメージUP",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "taken_damage_up",
            "calcGroupLabel": "【被ダメージ補正】敵被ダメUP",
            "value": 0,
            "duration": 0.0,
            "description": "奔雷の強制感電＋素質1により敵が受ける「全種類のダメージ」UP(数値Wiki未記載)",
            "condition": "連携技発動後に「鎮影」が「奔雷」へ変化(倍率・消費SP数値はWiki未記載)",
            "effectType": "debuff"
          },
          {
            "id": "buff_minho_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【戦技変化＆電磁付着消費→高段階感電＋クラッシュ付与】鎮影は物理ダメ＋浮遊(付着なし)。連携後の『奔雷』は電磁付着を付与するのではなく、既存の電磁付着を消費して高段階感電とクラッシュ1段階を同時付与する（※具体的倍率はWiki未記載）",
            "condition": "連携技発動後に「鎮影」が「奔雷」へ変化(倍率・消費SP数値はWiki未記載)",
            "special": "【戦技変化＆電磁付着消費→高段階感電＋クラッシュ付与】鎮影は物理ダメ＋浮遊(付着なし)。連携後の『奔雷』は電磁付着を付与するのではなく、既存の電磁付着を消費して高段階感電とクラッシュ1段階を同時付与する（※具体的倍率はWiki未記載）",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "鎮影: 浮遊付与(クラッシュ+1段階) / 奔雷: 電磁付着を消費し、高段階数の感電＋クラッシュ1段階を付与"
        },
        "description": "鎮影：周囲の敵に物理ダメージを与え、前方の目標に浮遊効果を与える。連携技を発動すると戦技が奔雷に替わる。奔雷：電磁付着を消費し、高い段階数の感電と1段階のクラッシュを付与する。",
        "damageTypeDetail": "物理(鎮影) / 電磁または状態付与(奔雷・Wiki数値未記載)",
        "rawText": "鎮影：周囲の敵に物理ダメージを与え、前方の目標に浮遊効果を与える。連携技を発動すると戦技が奔雷に替わる。奔雷：電磁付着を消費し、高い段階数の感電と1段階のクラッシュを付与する。",
        "attachText": "なし",
        "anomalyText": "鎮影: 浮遊付与(クラッシュ+1段階) / 奔雷: 電磁付着を消費し、高段階数の感電＋クラッシュ1段階を付与",
        "special": "【戦技変化＆電磁付着消費→高段階感電＋クラッシュ付与】鎮影は物理ダメ＋浮遊(付着なし)。連携後の『奔雷』は電磁付着を付与するのではなく、既存の電磁付着を消費して高段階感電とクラッシュ1段階を同時付与する（※具体的倍率はWiki未記載）"
      },
      {
        "id": "combo_minho",
        "type": "combo",
        "name": "星霜",
        "shortName": "連携技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 2.94,
          "lv10_spec1": 3.2,
          "lv11_spec2": 3.52,
          "lv12_spec3": 3.88
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_minho_combo_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【Wiki数値未記載】電磁ダメージ複数回＋電磁付着付与＋戦技を「奔雷」へ切替（CD・倍率はWiki未記載）",
            "condition": "敵がクラッシュ状態になった時発動可 / 発動後戦技が「奔雷」に変化(CD・倍率はWiki未記載)",
            "special": "【Wiki数値未記載】電磁ダメージ複数回＋電磁付着付与＋戦技を「奔雷」へ切替（CD・倍率はWiki未記載）",
            "effectType": "special"
          }
        ],
        "infliction": {
          "type": "electric",
          "stacks": 1,
          "label": "⚡ 電磁付着 (+1段階)",
          "description": "電磁付着(1段階)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "敵がクラッシュ状態になったときに発動可能。敵に電磁ダメージを複数回与え、電磁付着を付与する。戦技が奔雷に替わる。",
        "damageTypeDetail": "電磁",
        "rawText": "敵がクラッシュ状態になったときに発動可能。敵に電磁ダメージを複数回与え、電磁付着を付与する。戦技が奔雷に替わる。",
        "attachText": "電磁付着(1段階)",
        "anomalyText": "なし",
        "special": "【Wiki数値未記載】電磁ダメージ複数回＋電磁付着付与＋戦技を「奔雷」へ切替（CD・倍率はWiki未記載）"
      },
      {
        "id": "ult_minho",
        "type": "ult",
        "name": "破天",
        "shortName": "必殺技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 7.56,
          "lv10_spec1": 8.24,
          "lv11_spec2": 9.03,
          "lv12_spec3": 9.98
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_minho_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【電磁付着＋猛撃複合必殺・Wiki数値未記載】電磁付着(1段階)を付与した直後に広範囲へ猛撃(素質1の雷勢起爆トリガー)と電磁ダメージを与える",
            "condition": "突進運搬→鋭光(電磁付着1段階)→槍突き刺し(猛撃＋電磁ダメ) ※チャージ量・倍率はWiki未記載",
            "special": "【電磁付着＋猛撃複合必殺・Wiki数値未記載】電磁付着(1段階)を付与した直後に広範囲へ猛撃(素質1の雷勢起爆トリガー)と電磁ダメージを与える",
            "effectType": "special"
          }
        ],
        "epCost": 100,
        "infliction": {
          "type": "electric",
          "stacks": 1,
          "label": "⚡ 電磁付着 (+1段階)",
          "description": "電磁付着(1段階・突進終了後の鋭光時)"
        },
        "crush": {
          "type": "consume_smash",
          "stacks": 1,
          "label": "💥 猛撃・クラッシュ消費",
          "description": "最終段で猛撃付与(クラッシュ消費)"
        },
        "description": "前方の目標に持続的に電磁ダメージを与え運ぶ。突進終了後、目標に電磁ダメージを与え、電磁付着を1段階付与する。その後、広範囲の敵に猛撃と電磁ダメージを与える。",
        "damageTypeDetail": "電磁",
        "rawText": "前方の目標に持続的に電磁ダメージを与え運ぶ。突進終了後、目標に電磁ダメージを与え、電磁付着を1段階付与する。その後、広範囲の敵に猛撃と電磁ダメージを与える。",
        "attachText": "電磁付着(1段階・突進終了後の鋭光時)",
        "anomalyText": "最終段で猛撃付与(クラッシュ消費)",
        "special": "【電磁付着＋猛撃複合必殺・Wiki数値未記載】電磁付着(1段階)を付与した直後に広範囲へ猛撃(素質1の雷勢起爆トリガー)と電磁ダメージを与える"
      }
    ],
    "motifWeapon": "問月",
    "recommendedWeapons": [
      "問月",
      "複合工業"
    ],
    "normalAttack": {
      "name": "輝塵",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常倍率: Wiki未記載 / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "-",
      "description": "最大●段の攻撃で、敵に物理ダメージを与える。（※通常攻撃倍率はWiki未記載）",
      "raw": "最大●段の攻撃で、敵に物理ダメージを与える。（※通常攻撃倍率はWiki未記載）"
    },
    "talents": [
      {
        "id": "talent_minho_1",
        "name": "天奔る稲妻",
        "description": "ミンホが感電状態を付与したとき、この感電効果は目標が受ける全種類のダメージをアップし、さらに雷勢を付与する。雷勢状態の目標が猛撃ダメージを受けるとき、その猛撃ダメージがアップし、すべての雷勢を起爆し電磁ダメージを与える。",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "special",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_minho_talent1_taken_damage_up",
            "name": "天奔る稲妻",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "taken_damage_up",
            "calcGroupLabel": "【被ダメージ補正】敵被ダメUP",
            "value": 0,
            "duration": 0.0,
            "description": "自身が付与した感電はアーツだけでなく敵が受ける「全種類のダメージ」をアップさせる(物理にも乗る特殊仕様)",
            "condition": "自身が感電状態を付与した時 → 目標が猛撃ダメージを受けた時"
          },
          {
            "id": "buff_minho_talent1_special",
            "name": "天奔る稲妻",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【特殊感電拡張＆雷勢連鎖起爆】①ミンホが付与する感電は敵の受ける全種類ダメージUPになる。②感電異常段階と同数の『雷勢』を付与し、猛撃被弾時に猛撃ダメUP＋全雷勢を起爆して段階に応じた電磁ダメ＆周囲の雷勢も連鎖起爆する（※数値はWiki未記載）",
            "condition": "自身が感電状態を付与した時 → 目標が猛撃ダメージを受けた時",
            "special": "【特殊感電拡張＆雷勢連鎖起爆】①ミンホが付与する感電は敵の受ける全種類ダメージUPになる。②感電異常段階と同数の『雷勢』を付与し、猛撃被弾時に猛撃ダメUP＋全雷勢を起爆して段階に応じた電磁ダメ＆周囲の雷勢も連鎖起爆する（※数値はWiki未記載）"
          }
        ],
        "special": "【特殊感電拡張＆雷勢連鎖起爆】①ミンホが付与する感電は敵の受ける全種類ダメージUPになる。②感電異常段階と同数の『雷勢』を付与し、猛撃被弾時に猛撃ダメUP＋全雷勢を起爆して段階に応じた電磁ダメ＆周囲の雷勢も連鎖起爆する（※数値はWiki未記載）"
      },
      {
        "id": "talent_minho_2",
        "name": "（Wiki未記載）",
        "description": "●素質2 / 潜在1〜5：説明文（Wiki未記載）",
        "target": "none",
        "targetLabel": "なし",
        "calcGroup": "special",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_minho_talent2_special",
            "name": "（Wiki未記載）",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【Wiki未記載】素質2および潜在1〜5の名称・効果文はWiki未記入",
            "condition": "Wiki未記載",
            "special": "【Wiki未記載】素質2および潜在1〜5の名称・効果文はWiki未記入"
          }
        ],
        "special": "【Wiki未記載】素質2および潜在1〜5の名称・効果文はWiki未記入"
      }
    ],
    "specialMechanic": {
      "title": "ミンホ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【Wiki数値未記載】先行ページのため通常倍率・基礎ステータスはWiki未記入 ／ 【戦技変化＆電磁付着消費→高段階感電＋クラッシュ付与】鎮影は物理ダメ＋浮遊(付着なし)。連携後の『奔雷』は電磁付着を付与するのではなく、既存の電磁付着を消費して高段階感電とクラッシュ1段階を同時付与する（※具体的倍率はWiki未記載） ／ 【Wiki数値未記載】電磁ダメージ複数回＋電磁付着付与＋戦技を「奔雷」へ切替（CD・倍率はWiki未記載） ／ 【電磁付着＋猛撃複合必殺・Wiki数値未記載】電磁付着(1段階)を付与した直後に広範囲へ猛撃(素質1の雷勢起爆トリガー)と電磁ダメージを与える ／ 【特殊感電拡張＆雷勢連鎖起爆】①ミンホが付与する感電は敵の受ける全種類ダメージUPになる。②感電異常段階と同数の『雷勢』を付与し、猛撃被弾時に猛撃ダメUP＋全雷勢を起爆して段階に応じた電磁ダメ＆周囲の雷勢も連鎖起爆する（※数値はWiki未記載） ／ 【Wiki未記載】素質2および潜在1〜5の名称・効果文はWiki未記入"
    },
    "recommendedArmorSet": "set_pulse",
    "recommendedArmorSetName": "パルス式セット",
    "recommendedArmor": {
      "armorSet": "set_pulse",
      "body": "gold_body_e38391e383abe38_37",
      "arm": "gold_arms_e38391e383abe38_33",
      "acc1": "gold_accessories_e38391e383abe38_47",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_okugi",
    "name": "オクギ",
    "icon": "image/okugi.png",
    "rarity": 6,
    "element": "自然",
    "weaponType": "アーツユニット",
    "class": "術師",
    "mainStat": "知性",
    "subStat": "敏捷",
    "baseStats": {
      "hp": 6800,
      "atk": 920,
      "strength": 120,
      "agility": 185,
      "intellect": 285,
      "willpower": 110,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 1,
    "baseRefundSP": 30,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "specialMechanic": {
      "title": "オクギ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【陣訣・知/意のスキル形態分岐】ステータス画面の知性≧意志で高倍率の陣訣・知になる ／ 【陣訣・知/意のスキル形態分岐】ステータス画面の意志＞知性で牽引付きの陣訣・意になる ／ 【陣訣・知の連携挙動】陣訣・知では連携技にアーツ付着効果はなく、自身の戦技命中による牢獄早期起爆＋SP返還(28〜30)＋高倍率追撃(222%〜500%)に特化する ／ 【陣訣・意の付着コピー＆意志連動脆弱】陣訣・意では任意のアーツ付着トリガーで発動し、そのアーツ付着を再度+1段階付与し、意志最大640で計12%(1凸で18%)の自然・寒冷脆弱を付与する ／ 【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される ／ 【陣訣・意の同属性付着再付与】陣訣・意では範囲内のアーツ付着状態の敵に同じアーツ付着を+1段階付与し、素質1により1段目・2段目命中時に自然・寒冷脆弱(最大12.8%)を付与する ／ 【ステータス画面参照の完全形態分岐】戦闘中のバフを除いたステータス画面上の知性と意志の大小関係で全スキルの挙動が陣訣・知／陣訣・意に切り替わる"
    },
    "skills": [
      {
        "id": "skill_okugi",
        "type": "skill",
        "name": "砕玉領域【陣訣・知(知性≧意志)】",
        "shortName": "戦技",
        "damageType": "自然",
        "infliction": {
          "type": "okugi_dual",
          "stacks": 1,
          "label": "【特殊】知意双形態付着 (+1段階)",
          "description": "知性優位時は毎秒付着(最大6回)、意志優位時は付着を吸収消費"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "牢獄中の敵命中時、連携(知)の早期起爆・SP返還・追加ダメを誘発",
          "description": "牢獄中の敵命中時、連携(知)の早期起爆・SP返還・追加ダメを誘発"
        },
        "multipliers": {
          "lv9": 2.4,
          "lv10_spec1": 2.6,
          "lv11_spec2": 2.8,
          "lv12_spec3": 3.0
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_okugi_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "自然ダメ倍率(知): R1=222% → R9=400% → 特化III=500%",
            "condition": "SP消費100 / ステータス画面で知性≧意志の時",
            "effectType": "multiplier"
          },
          {
            "id": "buff_okugi_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP消費100 / ブレイク値10",
            "condition": "SP消費100 / ステータス画面で知性≧意志の時",
            "effectType": "crush"
          },
          {
            "id": "buff_okugi_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【陣訣・知/意のスキル形態分岐】ステータス画面の知性≧意志で高倍率の陣訣・知になる",
            "condition": "SP消費100 / ステータス画面で知性≧意志の時",
            "special": "【陣訣・知/意のスキル形態分岐】ステータス画面の知性≧意志で高倍率の陣訣・知になる",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "description": "砕玉領域を展開し、範囲内の敵に自然ダメージを与え、さらに自然付着を付与する。陣訣・知：与えるダメージがさらに高くなる(222%→400%→500%)。",
        "damageTypeDetail": "自然",
        "rawText": "砕玉領域を展開し、範囲内の敵に自然ダメージを与え、さらに自然付着を付与する。陣訣・知：与えるダメージがさらに高くなる(222%→400%→500%)。",
        "attachText": "自然付着(1段階)",
        "anomalyText": "牢獄中の敵命中時、連携(知)の早期起爆・SP返還・追加ダメを誘発",
        "special": "【陣訣・知/意のスキル形態分岐】ステータス画面の知性≧意志で高倍率の陣訣・知になる",
        "modifiers": [
          {
            "id": "mod_オクギ_skill_base",
            "name": "砕玉領域【陣訣・知(知性≧意志)】 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.4,
            "valuesByRank": {
              "r1": 1.33,
              "r9": 2.4,
              "spec1": 2.6,
              "spec2": 2.8,
              "spec3": 3.0
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_okugi",
        "type": "combo",
        "name": "応龍四式【陣訣・知(知性≧意志)】",
        "shortName": "連携技",
        "damageType": "自然",
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "multipliers": {
          "lv9": 0.64,
          "lv10_spec1": 0.6933,
          "lv11_spec2": 0.7467,
          "lv12_spec3": 0.8
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_okugi_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 14.0,
            "description": "基礎ダメ: R1=35%→R9=64%→特化III=80% / 牢獄終了爆発: R1=53%→R9=96%→特化III=120% / 自身戦技命中時の追加ダメ: R1=222%→R9=400%→特化III=500%",
            "condition": "自然付着付与または2段階以上の他属性付着時に発動可 / CD: R1=14秒→R9=13秒→特化III=12秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_okugi_combo_vulnerability",
            "name": "自然脆弱 & 寒冷脆弱",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 14.0,
            "description": "自然脆弱 & 寒冷脆弱4%(4秒間、自身戦技命中時に再度2秒間4%付与)",
            "condition": "自然付着付与または2段階以上の他属性付着時に発動可 / CD: R1=14秒→R9=13秒→特化III=12秒",
            "effectType": "debuff"
          },
          {
            "id": "buff_okugi_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 14.0,
            "description": "必殺チャージ+10 / ブレイク値5+5 / 牢獄状態(行動遅延4秒) / 自身戦技が牢獄中の敵に命中時SP返還: R1〜9=28→特化III=30",
            "condition": "自然付着付与または2段階以上の他属性付着時に発動可 / CD: R1=14秒→R9=13秒→特化III=12秒",
            "effectType": "crush"
          },
          {
            "id": "buff_okugi_combo_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 14.0,
            "description": "【陣訣・知の連携挙動】陣訣・知では連携技にアーツ付着効果はなく、自身の戦技命中による牢獄早期起爆＋SP返還(28〜30)＋高倍率追撃(222%〜500%)に特化する",
            "condition": "自然付着付与または2段階以上の他属性付着時に発動可 / CD: R1=14秒→R9=13秒→特化III=12秒",
            "special": "【陣訣・知の連携挙動】陣訣・知では連携技にアーツ付着効果はなく、自身の戦技命中による牢獄早期起爆＋SP返還(28〜30)＋高倍率追撃(222%〜500%)に特化する",
            "effectType": "special"
          }
        ],
        "description": "陣訣・知：自然脆弱と寒冷脆弱(4%)を付与し牢獄状態(4秒)にする。自身の戦技が牢獄状態の敵に命中したときSP返還(28→30)、爆発ダメージを与え再度脆弱付与し追加ダメージ(222%→500%)を与える。（※陣訣・知は連携での付着なし）",
        "damageTypeDetail": "自然",
        "rawText": "陣訣・知：自然脆弱と寒冷脆弱(4%)を付与し牢獄状態(4秒)にする。自身の戦技が牢獄状態の敵に命中したときSP返還(28→30)、爆発ダメージを与え再度脆弱付与し追加ダメージ(222%→500%)を与える。（※陣訣・知は連携での付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "special": "【陣訣・知の連携挙動】陣訣・知では連携技にアーツ付着効果はなく、自身の戦技命中による牢獄早期起爆＋SP返還(28〜30)＋高倍率追撃(222%〜500%)に特化する",
        "modifiers": [
          {
            "id": "mod_オクギ_combo_base",
            "name": "応龍四式【陣訣・知(知性≧意志)】 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.64,
            "valuesByRank": {
              "r1": 0.35,
              "r9": 0.64,
              "spec1": 0.6933,
              "spec2": 0.7467,
              "spec3": 0.8
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_okugi",
        "type": "ult",
        "name": "破晦【陣訣・知(知性≧意志)】",
        "shortName": "必殺技",
        "damageType": "自然",
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "生成時に強制腐食付与(15秒間 ※アーツ付着は付与しない)",
          "description": "生成時に強制腐食付与(15秒間 ※アーツ付着は付与しない)"
        },
        "multipliers": {
          "lv9": 1.44,
          "lv10_spec1": 1.56,
          "lv11_spec2": 1.68,
          "lv12_spec3": 1.8
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_okugi_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "陣生成: R1=80%→R9=144%→特化III=180% / 集中攻撃(最大2回・各): R1=160%→R9=288%→特化III=360% / 2段目「破晦訣明」: R1=640%→R9=1152%→特化III=1440%",
            "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放",
            "effectType": "multiplier"
          },
          {
            "id": "buff_okugi_ult_res_down",
            "name": "強制腐食（全属性耐性ダウン）",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "res_down",
            "calcGroupLabel": "【耐性補正】",
            "value": 0,
            "duration": 20.0,
            "description": "強制腐食(15秒、素質2で25秒・最大耐性低下1.1倍)による全属性耐性ダウン",
            "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放",
            "effectType": "debuff"
          },
          {
            "id": "buff_okugi_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値: 生成10＋破晦訣明10",
            "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放",
            "effectType": "crush"
          },
          {
            "id": "buff_okugi_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 20.0,
            "description": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される",
            "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放",
            "special": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される",
            "effectType": "special"
          },
          {
            "id": "buff_okugi_ult_amp",
            "name": "自身アーツ増幅+24%（陣訣・知）",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "amp",
            "calcGroupLabel": "【増幅補正】アーツ増幅",
            "value": 24,
            "duration": 20.0,
            "description": "必殺技期間中、自身にアーツ増幅+24%(陣訣・知・素質1連動)",
            "condition": "知性≧意志の時（陣訣・知）",
            "effectType": "buff"
          },
          {
            "id": "buff_okugi_ult_vulnerability",
            "name": "自然・寒冷脆弱付与（陣訣・意）",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "duration": 10.0,
            "description": "必殺技1段目・2段目命中時、敵に10秒間[意志×0.02%]の自然脆弱 & 寒冷脆弱(最大12.8%)付与（陣訣・意・素質1連動）",
            "condition": "意志＞知性の時（陣訣・意）",
            "effectType": "debuff"
          }
        ],
        "epCost": 100,
        "description": "陣訣・知：破晦陣を生成する際、範囲内の敵を強制的に腐食状態(15秒)にする。集中攻撃2回後に破晦訣明(640%→1152%→1440%)を発動可能。",
        "damageTypeDetail": "自然",
        "rawText": "陣訣・知：破晦陣を生成する際、範囲内の敵を強制的に腐食状態(15秒)にする。集中攻撃2回後に破晦訣明(640%→1152%→1440%)を発動可能。",
        "attachText": "なし",
        "anomalyText": "生成時に強制腐食付与(15秒間 ※アーツ付着は付与しない)",
        "special": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される",
        "modifiers": [
          {
            "id": "mod_オクギ_ult_base",
            "name": "破晦【陣訣・知(知性≧意志)】 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.44,
            "valuesByRank": {
              "r1": 0.8,
              "r9": 1.44,
              "spec1": 1.56,
              "spec2": 1.68,
              "spec3": 1.8
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult2_okugi",
        "type": "ult2",
        "name": "破晦【陣訣・知(知性≧意志)】",
        "shortName": "必殺技2",
        "damageType": "自然",
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "生成時に強制腐食付与(15秒間 ※アーツ付着は付与しない)",
          "description": "生成時に強制腐食付与(15秒間 ※アーツ付着は付与しない)"
        },
        "multipliers": {
          "lv9": 1.44,
          "lv10_spec1": 1.56,
          "lv11_spec2": 1.68,
          "lv12_spec3": 1.8
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_okugi_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "陣生成: R1=80%→R9=144%→特化III=180% / 集中攻撃(最大2回・各): R1=160%→R9=288%→特化III=360% / 2段目「破晦訣明」: R1=640%→R9=1152%→特化III=1440%",
            "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放",
            "effectType": "multiplier"
          },
          {
            "id": "buff_okugi_ult_res_down",
            "name": "強制腐食（全属性耐性ダウン）",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "res_down",
            "calcGroupLabel": "【耐性補正】",
            "value": 0,
            "duration": 20.0,
            "description": "強制腐食(15秒、素質2で25秒・最大耐性低下1.1倍)による全属性耐性ダウン",
            "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放",
            "effectType": "debuff"
          },
          {
            "id": "buff_okugi_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値: 生成10＋破晦訣明10",
            "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放",
            "effectType": "crush"
          },
          {
            "id": "buff_okugi_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 20.0,
            "description": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される",
            "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放",
            "special": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される",
            "effectType": "special"
          },
          {
            "id": "buff_okugi_ult_amp",
            "name": "自身アーツ増幅+24%（陣訣・知）",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "amp",
            "calcGroupLabel": "【増幅補正】アーツ増幅",
            "value": 24,
            "duration": 20.0,
            "description": "必殺技期間中、自身にアーツ増幅+24%(陣訣・知・素質1連動)",
            "condition": "知性≧意志の時（陣訣・知）",
            "effectType": "buff"
          },
          {
            "id": "buff_okugi_ult_vulnerability",
            "name": "自然・寒冷脆弱付与（陣訣・意）",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "duration": 10.0,
            "description": "必殺技1段目・2段目命中時、敵に10秒間[意志×0.02%]の自然脆弱 & 寒冷脆弱(最大12.8%)付与（陣訣・意・素質1連動）",
            "condition": "意志＞知性の時（陣訣・意）",
            "effectType": "debuff"
          }
        ],
        "epCost": 0,
        "description": "陣訣・知：破晦陣を生成する際、範囲内の敵を強制的に腐食状態(15秒)にする。集中攻撃2回後に破晦訣明(640%→1152%→1440%)を発動可能。",
        "damageTypeDetail": "自然",
        "rawText": "陣訣・知：破晦陣を生成する際、範囲内の敵を強制的に腐食状態(15秒)にする。集中攻撃2回後に破晦訣明(640%→1152%→1440%)を発動可能。",
        "attachText": "なし",
        "anomalyText": "生成時に強制腐食付与(15秒間 ※アーツ付着は付与しない)",
        "special": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される",
        "modifiers": [
          {
            "id": "mod_オクギ_ult_base",
            "name": "破晦【陣訣・知(知性≧意志)】 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.44,
            "valuesByRank": {
              "r1": 0.8,
              "r9": 1.44,
              "spec1": 1.56,
              "spec2": 1.68,
              "spec3": 1.8
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "四二式・粛陣",
    "recommendedWeapons": [
      "四二式・粛陣",
      "苦難の果"
    ],
    "normalAttack": {
      "name": "重火力迎撃",
      "damageType": "自然",
      "damageTypeDetail": "自然",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[19%/21%/33%/36%/47%]→R9[34%/38%/60%/64%/85%]→特化III[42%/48%/75%/80%/106%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク17 / 終撃時SP回復",
      "description": "最大5段の攻撃で、敵に自然ダメージを与える（※自然付着なし）。重攻撃はブレイク値17を与える。",
      "raw": "最大5段の攻撃で、敵に自然ダメージを与える（※自然付着なし）。重攻撃はブレイク値17を与える。"
    },
    "talents": [
      {
        "id": "talent_okugi_1",
        "name": "画策",
        "description": "知性≥意志のとき陣訣・知、逆の場合は陣訣・意に切り替わる。昇進2：陣訣・知は必殺期間中自身アーツ増幅24%、陣訣・意は必殺1・2段目で10秒間[意志×0.02%]の自然・寒冷脆弱(最大12.8%)を付与。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "special",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_okugi_talent1_amp",
            "name": "画策",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "amp",
            "calcGroupLabel": "【増幅補正】増幅",
            "value": 0,
            "duration": 0.0,
            "description": "【陣訣・知】必殺技期間中、自身にアーツ増幅+24%(自己バフ)",
            "condition": "ステータス画面(Lv・素質・潜在・武器・防具のみ反映、戦闘中バフ非反映)の知性≧意志で陣訣・知、意志＞知性で陣訣・意 / 昇進2で必殺技強化"
          },
          {
            "id": "buff_okugi_talent1_vulnerability",
            "name": "自然・寒冷脆弱付与",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 0.0,
            "description": "【陣訣・意】必殺技1段目・2段目命中時、敵に10秒間[意志×0.02%]の自然脆弱 & 寒冷脆弱(最大12.8%、重ね掛け不可)付与(敵デバフ)",
            "condition": "ステータス画面(Lv・素質・潜在・武器・防具のみ反映、戦闘中バフ非反映)の知性≧意志で陣訣・知、意志＞知性で陣訣・意 / 昇進2で必殺技強化"
          },
          {
            "id": "buff_okugi_talent1_special",
            "name": "画策",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【ステータス画面参照の完全形態分岐】戦闘中のバフを除いたステータス画面上の知性と意志の大小関係で全スキルの挙動が陣訣・知／陣訣・意に切り替わる",
            "condition": "ステータス画面(Lv・素質・潜在・武器・防具のみ反映、戦闘中バフ非反映)の知性≧意志で陣訣・知、意志＞知性で陣訣・意 / 昇進2で必殺技強化",
            "special": "【ステータス画面参照の完全形態分岐】戦闘中のバフを除いたステータス画面上の知性と意志の大小関係で全スキルの挙動が陣訣・知／陣訣・意に切り替わる"
          }
        ],
        "special": "【ステータス画面参照の完全形態分岐】戦闘中のバフを除いたステータス画面上の知性と意志の大小関係で全スキルの挙動が陣訣・知／陣訣・意に切り替わる"
      },
      {
        "id": "talent_okugi_2",
        "name": "研ぎ澄ます",
        "description": "自身が付与する腐食効果の持続時間+5秒→+10秒、ダウンさせる最大耐性値が1.05倍→1.1倍までアップする",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_okugi_talent2_res_down",
            "name": "研ぎ澄ます",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "res_down",
            "calcGroupLabel": "【耐性補正】",
            "value": 0,
            "duration": 0.0,
            "description": "自身が付与する腐食のダウンさせる最大耐性値が1.05倍(昇進1) → 1.1倍(昇進3)までアップ",
            "condition": "自身が腐食を付与する時"
          },
          {
            "id": "buff_okugi_talent2_aux",
            "name": "研ぎ澄ます",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "自身が付与する腐食の持続時間+5秒(昇進1) → +10秒(昇進3)",
            "condition": "自身が腐食を付与する時"
          }
        ]
      }
    ],
    "recommendedArmorSet": "set_volcano",
    "recommendedArmorSetName": "火山用セット",
    "recommendedArmor": {
      "armorSet": "set_volcano",
      "body": "gold_body_e781abe5b1b1e79_30",
      "arm": "gold_arms_e781abe5b1b1e79_28",
      "acc1": "gold_accessories_e781abe5b1b1e79_39",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_perlica",
    "name": "ペリカ",
    "icon": "image/perlica.png",
    "rarity": 5,
    "element": "電磁",
    "weaponType": "アーツユニット",
    "class": "術師",
    "mainStat": "知性",
    "subStat": "敏捷",
    "baseStats": {
      "hp": 5900,
      "atk": 810,
      "strength": 100,
      "agility": 160,
      "intellect": 245,
      "willpower": 95,
      "artsIntensity": 65,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_perlica",
        "type": "skill",
        "name": "協約ω：雷撃",
        "shortName": "戦技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 3.2,
          "lv10_spec1": 3.4667,
          "lv11_spec2": 3.7333,
          "lv12_spec3": 4.0
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_perlica_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "電磁ダメ倍率: R1=178% → R9=320% → 特化III=400%",
            "condition": "SP消費100",
            "effectType": "multiplier"
          },
          {
            "id": "buff_perlica_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP消費100 / ブレイク値10",
            "condition": "SP消費100",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "electric",
          "stacks": 1,
          "label": "⚡ 電磁付着 (+1段階)",
          "description": "電磁付着(1段階)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "放出した電磁エネルギーを空中から落とし、一定範囲内の敵に電磁ダメージを与え、電磁付着を付与する。",
        "damageTypeDetail": "電磁",
        "rawText": "放出した電磁エネルギーを空中から落とし、一定範囲内の敵に電磁ダメージを与え、電磁付着を付与する。",
        "attachText": "電磁付着(1段階)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_ペリカ_skill_base",
            "name": "協約ω：雷撃 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.2,
            "valuesByRank": {
              "r1": 1.78,
              "r9": 3.2,
              "spec1": 3.4667,
              "spec2": 3.7333,
              "spec3": 4.0
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_perlica",
        "type": "combo",
        "name": "即時協約：閃光鎖",
        "shortName": "連携技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 1.44,
          "lv10_spec1": 1.56,
          "lv11_spec2": 1.68,
          "lv12_spec3": 1.8
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_perlica_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "電磁ダメ倍率: R1=80% → R9=144% → 特化III=180%",
            "condition": "操作キャラが敵に重攻撃を与えた時発動可 / CD: R1〜9=20秒→特化III=19秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_perlica_combo_taken_damage_up",
            "name": "強制感電（被アーツダメUP）",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "taken_damage_up",
            "calcGroupLabel": "【被ダメージ補正】敵被ダメUP",
            "value": 0,
            "duration": 20.0,
            "description": "強制感電(5秒、段階1相当の被アーツダメ+12%×強度補正)",
            "condition": "操作キャラが敵に重攻撃を与えた時発動可 / CD: R1〜9=20秒→特化III=19秒",
            "effectType": "debuff"
          },
          {
            "id": "buff_perlica_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値10",
            "condition": "操作キャラが敵に重攻撃を与えた時発動可 / CD: R1〜9=20秒→特化III=19秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "強制感電付与(5秒間 ※電磁付着ではなく直接感電状態にする)",
          "description": "強制感電付与(5秒間 ※電磁付着ではなく直接感電状態にする)"
        },
        "description": "操作中のオペレーターが敵に重攻撃を与えると発動可能。電磁ダメージを与え、強制的に短時間(5秒)感電状態にする。（※電磁付着なし）",
        "damageTypeDetail": "電磁",
        "rawText": "操作中のオペレーターが敵に重攻撃を与えると発動可能。電磁ダメージを与え、強制的に短時間(5秒)感電状態にする。（※電磁付着なし）",
        "attachText": "なし",
        "anomalyText": "強制感電付与(5秒間 ※電磁付着ではなく直接感電状態にする)",
        "modifiers": [
          {
            "id": "mod_ペリカ_combo_base",
            "name": "即時協約：閃光鎖 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.44,
            "valuesByRank": {
              "r1": 0.8,
              "r9": 1.44,
              "spec1": 1.56,
              "spec2": 1.68,
              "spec3": 1.8
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_perlica",
        "type": "ult",
        "name": "協約ε：70.41κ",
        "shortName": "必殺技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 8.0,
          "lv10_spec1": 8.6667,
          "lv11_spec2": 9.3333,
          "lv12_spec3": 10.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_perlica_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "電磁ダメ倍率: R1=445% → R9=800% → 特化III=1000%",
            "condition": "必殺チャージ消費80(※電磁ダメのみ、電磁付着・感電ともになし！)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_perlica_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値20",
            "condition": "必殺チャージ消費80(※電磁ダメのみ、電磁付着・感電ともになし！)",
            "effectType": "crush"
          }
        ],
        "epCost": 80,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "巨大な軌道浮遊物を転送し、範囲内の敵に高い電磁ダメージを与える。（※電磁付着なし）",
        "damageTypeDetail": "電磁",
        "rawText": "巨大な軌道浮遊物を転送し、範囲内の敵に高い電磁ダメージを与える。（※電磁付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_ペリカ_ult_base",
            "name": "協約ε：70.41κ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 8.0,
            "valuesByRank": {
              "r1": 4.45,
              "r9": 8.0,
              "spec1": 8.6667,
              "spec2": 9.3333,
              "spec3": 10.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "荒野迷走",
    "recommendedWeapons": [
      "弔いの詩",
      "破壊ユニット"
    ],
    "normalAttack": {
      "name": "協約α：突破",
      "damageType": "電磁",
      "damageTypeDetail": "電磁",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[25%/30%/37%/57%]→R9[46%/54%/67%/102%]→特化III[57%/68%/84%/127%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク15 / 終撃時SP回復",
      "description": "最大4段の攻撃で敵に電磁ダメージを与える（※電磁付着なし）。重攻撃はブレイク値15を与える。",
      "raw": "最大4段の攻撃で敵に電磁ダメージを与える（※電磁付着なし）。重攻撃はブレイク値15を与える。"
    },
    "talents": [
      {
        "id": "talent_perlica_1",
        "name": "殲滅協約",
        "description": "ブレイク状態の敵へのダメージ+20%→+30%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_perlica_talent1_damage_up",
            "name": "殲滅協約",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "damage_up",
            "calcGroupLabel": "【ダメージUP補正】与ダメUP",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク状態の敵へのダメージ+20%(昇進1) → +30%(昇進2)",
            "condition": "敵がブレイク状態の時"
          }
        ]
      },
      {
        "id": "talent_perlica_2",
        "name": "循環協約",
        "description": "連携技「即時協約：閃光鎖」がクラッシュ状態の敵に命中するとき、1回連鎖して攻撃する",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "special",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_perlica_talent2_special",
            "name": "循環協約",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【クラッシュ参照連鎖】連携技がクラッシュ状態の敵に命中すると周囲の敵へ1回連鎖攻撃する",
            "condition": "連携技がクラッシュ状態の敵に命中した時",
            "special": "【クラッシュ参照連鎖】連携技がクラッシュ状態の敵に命中すると周囲の敵へ1回連鎖攻撃する"
          }
        ],
        "special": "【クラッシュ参照連鎖】連携技がクラッシュ状態の敵に命中すると周囲の敵へ1回連鎖攻撃する"
      }
    ],
    "specialMechanic": {
      "title": "ペリカ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【クラッシュ参照連鎖】連携技がクラッシュ状態の敵に命中すると周囲の敵へ1回連鎖攻撃する"
    },
    "recommendedArmorSet": "set_pulse",
    "recommendedArmorSetName": "パルス式セット",
    "recommendedArmor": {
      "armorSet": "set_pulse",
      "body": "gold_body_e38391e383abe38_37",
      "arm": "gold_arms_e38391e383abe38_33",
      "acc1": "gold_accessories_e38391e383abe38_46",
      "acc2": "gold_accessories_e38391e383abe38_46"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_pogranichnik",
    "name": "ポグラニチニク",
    "icon": "image/pogranichnik.png",
    "rarity": 6,
    "element": "物理",
    "weaponType": "片手剣",
    "class": "先鋒",
    "mainStat": "敏捷",
    "subStat": "意志",
    "baseStats": {
      "hp": 7300,
      "atk": 820,
      "strength": 120,
      "agility": 285,
      "intellect": 120,
      "willpower": 185,
      "artsIntensity": 40,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 15,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_pogranichnik",
        "type": "skill",
        "name": "戦線粉砕",
        "shortName": "戦技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 1.54,
          "lv10_spec1": 1.6667,
          "lv11_spec2": 1.7933,
          "lv12_spec3": 1.92
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_pogranichnik_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "2段物理ダメ: R1[86%+106%] → R9[154%+190%] → 特化III[192%+238%](+破砕異常ダメ: 80%×[1+消費数])",
            "condition": "SP消費100",
            "effectType": "multiplier"
          },
          {
            "id": "buff_pogranichnik_skill_taken_damage_up",
            "name": "破砕・敵物理被ダメージUP",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "taken_damage_up",
            "calcGroupLabel": "【被ダメージ補正】敵被ダメUP",
            "value": 0,
            "duration": 0.0,
            "description": "破砕による敵の受ける物理ダメージUP: 4%×(消費段階+2)×(1+2×強度/[強度+300])",
            "condition": "SP消費100",
            "effectType": "debuff"
          },
          {
            "id": "buff_pogranichnik_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値5+5 / クラッシュ1〜4段階消費時SP回復: R1〜9[5/10/20/30] → 特化III[5/15/25/35](複数命中でも1回のみ)",
            "condition": "SP消費100",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "consume_shatter",
          "stacks": 1,
          "label": "💥 破砕・クラッシュ消費",
          "description": "破砕付与(クラッシュ全段階消費＆物理被ダメUPデバフ)"
        },
        "description": "前方範囲の敵に斬撃を2段放ち、物理ダメージと破砕を与える。同時に、消費したクラッシュ段階に応じてSPを回復する。",
        "damageTypeDetail": "物理",
        "rawText": "前方範囲の敵に斬撃を2段放ち、物理ダメージと破砕を与える。同時に、消費したクラッシュ段階に応じてSPを回復する。",
        "attachText": "なし",
        "anomalyText": "破砕付与(クラッシュ全段階消費＆物理被ダメUPデバフ)",
        "modifiers": [
          {
            "id": "mod_ポグラニチニク_skill_base",
            "name": "戦線粉砕 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.54,
            "valuesByRank": {
              "r1": 0.86,
              "r9": 1.54,
              "spec1": 1.6667,
              "spec2": 1.7933,
              "spec3": 1.92
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_pogranichnik",
        "type": "combo",
        "name": "満月迎撃",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 0.76,
          "lv10_spec1": 0.8233,
          "lv11_spec2": 0.8867,
          "lv12_spec3": 0.95
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_pogranichnik_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 18.0,
            "description": "1〜3段目(強化3段目): R1[42%/54%/66%(132%)] → R9[76%/97%/119%(238%)] → 特化III[95%/122%/149%(297%)]",
            "condition": "敵が猛撃または破砕でクラッシュを消費された時発動可 / 消費段階と同回数(最大3段・4消費時は3段目強化) / CD: R1〜9=18秒→特化III=17秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_pogranichnik_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 18.0,
            "description": "ブレイク値: 3+3+4(強化時9) / SP回復: 1段目5＋2段目7＋3段目13(4段階消費時は強化3段目23＝合計35回復)",
            "condition": "敵が猛撃または破砕でクラッシュを消費された時発動可 / 消費段階と同回数(最大3段・4消費時は3段目強化) / CD: R1〜9=18秒→特化III=17秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "猛撃または破砕によってクラッシュ段階が消費されると発動可能。消費した最大クラッシュ段階と同じ回数斬撃を放ち(最大3段、4消費時は3段目強化)、SPを回復する。",
        "damageTypeDetail": "物理",
        "rawText": "猛撃または破砕によってクラッシュ段階が消費されると発動可能。消費した最大クラッシュ段階と同じ回数斬撃を放ち(最大3段、4消費時は3段目強化)、SPを回復する。",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_ポグラニチニク_combo_base",
            "name": "満月迎撃 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.76,
            "valuesByRank": {
              "r1": 0.42,
              "r9": 0.76,
              "spec1": 0.8233,
              "spec2": 0.8867,
              "spec3": 0.95
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_pogranichnik",
        "type": "ult",
        "name": "盾兵旗隊、進め",
        "shortName": "必殺技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 2.4,
          "lv10_spec1": 2.6,
          "lv11_spec2": 2.8,
          "lv12_spec3": 3.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_pogranichnik_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 10.0,
            "description": "初回進軍: R1=133%→R9=240%→特化III=300% / 鉄誓1〜4回目「撹乱」: R1=45%→R9=80%→特化III=100% / 鉄誓5回目「勝決」: R1=200%→R9=360%→特化III=450%",
            "condition": "必殺チャージ消費90 / CD10秒 / 「鉄誓」5回分獲得(30秒) → 物理異常または自身の連携ダメ毎に1回消費し追撃＆SP回復",
            "effectType": "multiplier"
          },
          {
            "id": "buff_pogranichnik_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 10.0,
            "description": "ブレイク値: 進軍10＋勝決15 / SP回復: 撹乱1回につきR1〜9=7.5→特化III=10(×4回)、最終5回目勝決R1〜9=30→特化III=40(合計最大80回復)",
            "condition": "必殺チャージ消費90 / CD10秒 / 「鉄誓」5回分獲得(30秒) → 物理異常または自身の連携ダメ毎に1回消費し追撃＆SP回復",
            "effectType": "crush"
          },
          {
            "id": "buff_pogranichnik_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 10.0,
            "description": "【鉄誓5スタック連動追撃】物理異常または自身の連携技1ヒットごとに鉄誓を消費して盾兵追撃＆SP回復が発生し、任意のオペレーターによる誘発時に素質2の単体バフが付与される",
            "condition": "必殺チャージ消費90 / CD10秒 / 「鉄誓」5回分獲得(30秒) → 物理異常または自身の連携ダメ毎に1回消費し追撃＆SP回復",
            "special": "【鉄誓5スタック連動追撃】物理異常または自身の連携技1ヒットごとに鉄誓を消費して盾兵追撃＆SP回復が発生し、任意のオペレーターによる誘発時に素質2の単体バフが付与される",
            "effectType": "special"
          }
        ],
        "epCost": 90,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "進軍で物理ダメージを与え鉄誓を5回分獲得する。敵が物理異常またはポグラニチニクの連携技ダメージを受けると鉄誓を1回消費して撹乱(最後の一回は勝決)を発動し物理ダメージとSP回復を行う。",
        "damageTypeDetail": "物理",
        "rawText": "進軍で物理ダメージを与え鉄誓を5回分獲得する。敵が物理異常またはポグラニチニクの連携技ダメージを受けると鉄誓を1回消費して撹乱(最後の一回は勝決)を発動し物理ダメージとSP回復を行う。",
        "attachText": "なし",
        "anomalyText": "なし",
        "special": "【鉄誓5スタック連動追撃】物理異常または自身の連携技1ヒットごとに鉄誓を消費して盾兵追撃＆SP回復が発生し、任意のオペレーターによる誘発時に素質2の単体バフが付与される",
        "modifiers": [
          {
            "id": "mod_ポグラニチニク_ult_base",
            "name": "盾兵旗隊、進め 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.4,
            "valuesByRank": {
              "r1": 1.33,
              "r9": 2.4,
              "spec1": 2.6,
              "spec2": 2.8,
              "spec3": 3.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "不知帰",
    "recommendedWeapons": [
      "不知帰",
      "テルミット・カッター"
    ],
    "normalAttack": {
      "name": "全面攻勢",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[23%/28%/33%/38%/43%]→R9[41%/50%/59%/69%/77%]→特化III[52%/63%/74%/86%/97%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク18 / 終撃時SP回復",
      "description": "最大5段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値18を与える。",
      "raw": "最大5段の攻撃で敵に物理ダメージを与える。重攻撃はブレイク値18を与える。"
    },
    "talents": [
      {
        "id": "talent_pogranichnik_1",
        "name": "生ける旗印",
        "description": "自身のスキルでSPを80回復するごとに、20秒間持続する士気高揚(攻撃力+8%、アーツ強度+8、最大3回、個別カウント)を獲得する",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_pogranichnik_talent1_atk_pct",
            "name": "生ける旗印",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "atk_pct",
            "calcGroupLabel": "【参照スケール】攻撃力%",
            "value": 0,
            "duration": 20.0,
            "description": "士気高揚(自己): 攻撃力+4%(昇進1)→+8%(昇進2)×最大3回(最大+24%、3凸最大+40%)",
            "condition": "自身のスキルでSPを累計80(3凸で60)回復するごと / 20秒間(個別カウント) / 最大3回重ね掛け(3凸で5回)"
          },
          {
            "id": "buff_pogranichnik_talent1_arts_intensity",
            "name": "生ける旗印",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "arts_intensity",
            "calcGroupLabel": "【アーツ強度】",
            "value": 0,
            "duration": 20.0,
            "description": "士気高揚(自己): アーツ強度+4(昇進1)→+8(昇進2)×最大3回(最大+24、3凸最大+40)",
            "condition": "自身のスキルでSPを累計80(3凸で60)回復するごと / 20秒間(個別カウント) / 最大3回重ね掛け(3凸で5回)"
          }
        ]
      },
      {
        "id": "talent_pogranichnik_2",
        "name": "戦術指導",
        "description": "任意のオペレーターが必殺技「盾兵旗隊、進め」の後続効果を発動させると、5秒→10秒間持続する士気高揚を獲得する",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_pogranichnik_talent2_atk_pct",
            "name": "戦術指導",
            "target": "single",
            "targetLabel": "単体バフ",
            "category": "buff",
            "calcGroup": "atk_pct",
            "calcGroupLabel": "【参照スケール】攻撃力%",
            "value": 0,
            "duration": 5.0,
            "description": "発動させた該当オペレーターに士気高揚付与: 攻撃力+8%×最大3回(最大+24%)",
            "condition": "任意のオペレーターが必殺技の後続効果(鉄誓消費)を発動させた時 / 5秒(昇進2)→10秒(昇進3) / 最大3回"
          },
          {
            "id": "buff_pogranichnik_talent2_arts_intensity",
            "name": "戦術指導",
            "target": "single",
            "targetLabel": "単体バフ",
            "category": "buff",
            "calcGroup": "arts_intensity",
            "calcGroupLabel": "【アーツ強度】",
            "value": 0,
            "duration": 5.0,
            "description": "発動させた該当オペレーターに士気高揚付与: アーツ強度+8×最大3回(最大+24)",
            "condition": "任意のオペレーターが必殺技の後続効果(鉄誓消費)を発動させた時 / 5秒(昇進2)→10秒(昇進3) / 最大3回"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "ポグラニチニク 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【鉄誓5スタック連動追撃】物理異常または自身の連携技1ヒットごとに鉄誓を消費して盾兵追撃＆SP回復が発生し、任意のオペレーターによる誘発時に素質2の単体バフが付与される"
    },
    "recommendedArmorSet": "set_oryu",
    "recommendedArmorSetName": "50式応龍セット",
    "recommendedArmor": {
      "armorSet": "set_oryu",
      "body": "gold_body_50e5bc8fe5bf9ce_21",
      "arm": "gold_arms_50e5bc8fe5bf9ce_20",
      "acc1": "gold_accessories_50e5bc8fe5bf9ce_24",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_purrchena",
    "name": "プチエナ",
    "icon": "image/purrchena.png",
    "rarity": 5,
    "element": "物理",
    "weaponType": "片手剣",
    "class": "重装",
    "mainStat": "筋力",
    "subStat": "意志",
    "baseStats": {
      "hp": 6800,
      "atk": 630,
      "strength": 245,
      "agility": 95,
      "intellect": 100,
      "willpower": 160,
      "artsIntensity": 30,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_purrchena",
        "type": "skill",
        "name": "寝てませんよ！ → 派生「お友だちから離れろ～！」",
        "shortName": "戦技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 3.2,
          "lv10_spec1": 3.4667,
          "lv11_spec2": 3.7333,
          "lv12_spec3": 4.0
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_purrchena_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 3.0,
            "description": "派生頭突き自然ダメ倍率: R1=178% → R9=320% → 特化III=400%",
            "condition": "初段:SP消費100(即時SP20返還、初ブロック成功時さらに+3秒延長＆SP20返還) → 派生戦技「お友だちから離れろ～！」に変化",
            "effectType": "multiplier"
          },
          {
            "id": "buff_purrchena_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 3.0,
            "description": "自身と周囲の味方に加護90%(3秒、ブロック毎に減衰) / 頭突きブレイク値20 / SP返還20(+初ブロック時20)",
            "condition": "初段:SP消費100(即時SP20返還、初ブロック成功時さらに+3秒延長＆SP20返還) → 派生戦技「お友だちから離れろ～！」に変化",
            "effectType": "crush"
          },
          {
            "id": "buff_purrchena_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 3.0,
            "description": "【物理キャラによる派生自然付着】物理属性オペレーターだが、戦技発動後に変化する派生戦技『お友だちから離れろ～！』で自然ダメージと自然付着(1段階)を与える",
            "condition": "初段:SP消費100(即時SP20返還、初ブロック成功時さらに+3秒延長＆SP20返還) → 派生戦技「お友だちから離れろ～！」に変化",
            "special": "【物理キャラによる派生自然付着】物理属性オペレーターだが、戦技発動後に変化する派生戦技『お友だちから離れろ～！』で自然ダメージと自然付着(1段階)を与える",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "nature",
          "stacks": 1,
          "label": "🌿 自然付着 (+1段階)",
          "description": "自然付着(1段階・派生戦技「お友だちから離れろ～！」発動時)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "盾を構えている間加護(90%)を与えSP20返還(初ブロック成功時さらにSP20返還)。発動後、戦技が「お友だちから離れろ～！」に替わり、頭突きして自然ダメージを与え、自然付着を付与する。",
        "damageTypeDetail": "なし(初段構え) → 自然(派生頭突き)",
        "rawText": "盾を構えている間加護(90%)を与えSP20返還(初ブロック成功時さらにSP20返還)。発動後、戦技が「お友だちから離れろ～！」に替わり、頭突きして自然ダメージを与え、自然付着を付与する。",
        "attachText": "自然付着(1段階・派生戦技「お友だちから離れろ～！」発動時)",
        "anomalyText": "なし",
        "special": "【物理キャラによる派生自然付着】物理属性オペレーターだが、戦技発動後に変化する派生戦技『お友だちから離れろ～！』で自然ダメージと自然付着(1段階)を与える",
        "modifiers": [
          {
            "id": "mod_プチエナ_skill_base",
            "name": "寝てませんよ！ → 派生「お友だちから離れろ～！」 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.2,
            "valuesByRank": {
              "r1": 1.78,
              "r9": 3.2,
              "spec1": 3.4667,
              "spec2": 3.7333,
              "spec3": 4.0
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_purrchena",
        "type": "combo",
        "name": "お菓子or“プレゼント”",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 2.4,
          "lv10_spec1": 2.6,
          "lv11_spec2": 2.8,
          "lv12_spec3": 3.0
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_purrchena_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 24.0,
            "description": "ランダム分岐: ①爆弾(物理): R1=133%→R9=240%→特化III=300% / ②手作りアイテム(吸引+物理): R1=66%→R9=120%→特化III=150% / ③お菓子: ダメなし(追加回復)",
            "condition": "操作キャラ被弾時発動可 / CD: R1=24秒→R9=23秒→特化III=22秒 / 範囲治療＋3種アイテムからランダム1つ出現",
            "effectType": "multiplier"
          },
          {
            "id": "buff_purrchena_combo_aux",
            "name": "範囲HP回復（お菓子追加回復）",
            "target": "team",
            "targetLabel": "全体回復",
            "category": "heal",
            "calcGroup": "heal",
            "calcGroupLabel": "【補助・耐久・リソース】(全体回復)",
            "value": 0,
            "duration": 24.0,
            "description": "必殺チャージ+10 / 基礎範囲HP回復: R1[216+意志×0.5]→特化III[486+意志×1.13] / お菓子当選時操作キャラ追加回復: R1[144+意志×0.34]→特化III[324+意志×0.76] / 爆弾時ブレイク10",
            "condition": "操作キャラ被弾時発動可 / CD: R1=24秒→R9=23秒→特化III=22秒 / 範囲治療＋3種アイテムからランダム1つ出現",
            "effectType": "heal"
          },
          {
            "id": "buff_purrchena_combo_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 24.0,
            "description": "【ランダム3分岐連携】爆弾・手作りアイテム・お菓子のいずれか1つがランダムで出現する",
            "condition": "操作キャラ被弾時発動可 / CD: R1=24秒→R9=23秒→特化III=22秒 / 範囲治療＋3種アイテムからランダム1つ出現",
            "special": "【ランダム3分岐連携】爆弾・手作りアイテム・お菓子のいずれか1つがランダムで出現する",
            "effectType": "special"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "範囲内のオペレーターを治療し、爆弾・手作りアイテム・おいし～お菓子のいずれか1つがランダムで出現する。",
        "damageTypeDetail": "物理(ランダム抽選時)",
        "rawText": "範囲内のオペレーターを治療し、爆弾・手作りアイテム・おいし～お菓子のいずれか1つがランダムで出現する。",
        "attachText": "なし",
        "anomalyText": "なし",
        "special": "【ランダム3分岐連携】爆弾・手作りアイテム・お菓子のいずれか1つがランダムで出現する",
        "modifiers": [
          {
            "id": "mod_プチエナ_combo_base",
            "name": "お菓子or“プレゼント” 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.4,
            "valuesByRank": {
              "r1": 1.33,
              "r9": 2.4,
              "spec1": 2.6,
              "spec2": 2.8,
              "spec3": 3.0
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_purrchena",
        "type": "ult",
        "name": "悪いことは許しませ～ん！",
        "shortName": "必殺技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 7.2,
          "lv10_spec1": 7.85,
          "lv11_spec2": 8.6,
          "lv12_spec3": 9.5
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_purrchena_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "3個それぞれ爆弾(133%→240%→300%)または手作りアイテム(66%→120%→150%) / スペシャルギフト当選時(基礎確率15%→18%→20%): 物理ダメ267%→480%→600%",
            "condition": "必殺チャージ消費100 / CD20秒 / ギフト3個開封(爆弾or手作りアイテム抽選＋確率でスペシャルギフト出現)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_purrchena_ult_vulnerability",
            "name": "スペシャルギフト・アーツ脆弱",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 0,
            "duration": 20.0,
            "description": "スペシャルギフト当選時、敵にアーツ脆弱(5秒): R1=1.5% → R9=2.0% → 特化III=2.5%",
            "condition": "必殺チャージ消費100 / CD20秒 / ギフト3個開封(爆弾or手作りアイテム抽選＋確率でスペシャルギフト出現)",
            "effectType": "debuff"
          },
          {
            "id": "buff_purrchena_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値: 爆弾10 / スペシャルギフト15",
            "condition": "必殺チャージ消費100 / CD20秒 / ギフト3個開封(爆弾or手作りアイテム抽選＋確率でスペシャルギフト出現)",
            "effectType": "crush"
          },
          {
            "id": "buff_purrchena_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 20.0,
            "description": "【ランダム抽選必殺】3つのギフトの中身とスペシャルギフト出現(基礎15〜20%＋素質1で最大+30%)が確率抽選となる",
            "condition": "必殺チャージ消費100 / CD20秒 / ギフト3個開封(爆弾or手作りアイテム抽選＋確率でスペシャルギフト出現)",
            "special": "【ランダム抽選必殺】3つのギフトの中身とスペシャルギフト出現(基礎15〜20%＋素質1で最大+30%)が確率抽選となる",
            "effectType": "special"
          }
        ],
        "epCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "ギフトを3つ開け爆弾か手作りアイテムがランダム出現。一定確率でスペシャルギフトが出現し物理ダメージとブレイク値15、アーツ脆弱(1.5%→2.5%, 5秒)を付与する。",
        "damageTypeDetail": "物理",
        "rawText": "ギフトを3つ開け爆弾か手作りアイテムがランダム出現。一定確率でスペシャルギフトが出現し物理ダメージとブレイク値15、アーツ脆弱(1.5%→2.5%, 5秒)を付与する。",
        "attachText": "なし",
        "anomalyText": "なし",
        "special": "【ランダム抽選必殺】3つのギフトの中身とスペシャルギフト出現(基礎15〜20%＋素質1で最大+30%)が確率抽選となる"
      }
    ],
    "motifWeapon": "スイーツタイム",
    "recommendedWeapons": [
      "スイーツタイム",
      "ファーサイト"
    ],
    "normalAttack": {
      "name": "お菓子、どうぞ～！",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜3段: R1[48%/52%/102%]→R9[86%/93%/184%]→特化III[108%/116%/230%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク21 / 終撃時SP回復",
      "description": "最大3段の攻撃で、敵に物理ダメージを与える。重攻撃はブレイク値21を与える。",
      "raw": "最大3段の攻撃で、敵に物理ダメージを与える。重攻撃はブレイク値21を与える。"
    },
    "talents": [
      {
        "id": "talent_purrchena_1",
        "name": "謝っても遅いのですっ！",
        "description": "戦技で初めてブロック成功時、必殺チャージ6→10回復、次の必殺技でスペシャルギフト出現確率+10%(最大3回)",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "special",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_purrchena_talent1_aux",
            "name": "謝っても遅いのですっ！",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "必殺チャージ+6(昇進1)→+10(昇進2)回復",
            "condition": "戦技で初めて敵攻撃のブロックに成功した時(最大3回重ね掛け)"
          },
          {
            "id": "buff_purrchena_talent1_special",
            "name": "謝っても遅いのですっ！",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【確率加算】次の必殺技のスペシャルギフト出現確率+10%×最大3回(最大+30%)",
            "condition": "戦技で初めて敵攻撃のブロックに成功した時(最大3回重ね掛け)",
            "special": "【確率加算】次の必殺技のスペシャルギフト出現確率+10%×最大3回(最大+30%)"
          }
        ],
        "special": "【確率加算】次の必殺技のスペシャルギフト出現確率+10%×最大3回(最大+30%)"
      },
      {
        "id": "talent_purrchena_2",
        "name": "アンバサダーの務め",
        "description": "チーム内のHPが満タンのオペレーター全員は次に受けるダメージが50%ダウンする（各90秒に1回）",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_purrchena_talent2_aux",
            "name": "アンバサダーの務め",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 180.0,
            "description": "HP満タン時の次回被ダメージ-50%",
            "condition": "戦場に出ている間、HP満タンの味方全員(各オペレーター180秒→90秒毎に1回)"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "プチエナ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【物理キャラによる派生自然付着】物理属性オペレーターだが、戦技発動後に変化する派生戦技『お友だちから離れろ～！』で自然ダメージと自然付着(1段階)を与える ／ 【ランダム3分岐連携】爆弾・手作りアイテム・お菓子のいずれか1つがランダムで出現する ／ 【ランダム抽選必殺】3つのギフトの中身とスペシャルギフト出現(基礎15〜20%＋素質1で最大+30%)が確率抽選となる ／ 【確率加算】次の必殺技のスペシャルギフト出現確率+10%×最大3回(最大+30%) ／ 【確率乗算】スペシャルギフトの基礎出現率が1.5倍(特化IIIで20%→30%)"
    },
    "recommendedArmorSet": "set_pioneer",
    "recommendedArmorSetName": "パイオニアセット",
    "recommendedArmor": {
      "armorSet": "set_pioneer",
      "body": "gold_body_e38391e382a4e38_32",
      "arm": "gold_arms_e38391e382a4e38_31",
      "acc1": "gold_accessories_e38391e382a4e38_42",
      "acc2": "gold_accessories_e69591e59bbde58_73"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_rossi",
    "name": "ロッシ",
    "icon": "image/rossi.png",
    "rarity": 6,
    "element": "物理",
    "weaponType": "片手剣",
    "class": "前衛",
    "mainStat": "敏捷",
    "subStat": "意志",
    "baseStats": {
      "hp": 7300,
      "atk": 820,
      "strength": 120,
      "agility": 285,
      "intellect": 120,
      "willpower": 185,
      "artsIntensity": 40,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "1凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "2凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "3凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "4凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "5凸強化効果",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_rossi",
        "type": "skill",
        "name": "真紅の影",
        "shortName": "戦技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 1.54,
          "lv10_spec1": 1.6667,
          "lv11_spec2": 1.7933,
          "lv12_spec3": 1.92
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_rossi_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "1段目(物理): R1=85%→R9=154%→特化III=192% / 2段目「狼の至宝」(灼熱): R1=128%→R9=230%→特化III=288%",
            "condition": "SP消費(Wiki表に数値列なし・標準100) / 1段目の浮遊付与により単発でもクラッシュ状態となり2段目が追撃発動(※灼熱付着はなし！)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_rossi_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値: 1段目5 ＋ 2段目[R1=10→R9=12→特化III=15]",
            "condition": "SP消費(Wiki表に数値列なし・標準100) / 1段目の浮遊付与により単発でもクラッシュ状態となり2段目が追撃発動(※灼熱付着はなし！)",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "1段目で浮遊付与(クラッシュ+1段階) → クラッシュ状態の目標には2段目「狼の至宝」(灼熱ダメ・素質1トリガー)追撃"
        },
        "description": "目標に突進し、物理ダメージと浮遊効果を与える。クラッシュ状態の目標に命中した場合、追加で狼の至宝を放ち、灼熱ダメージを与える。（※灼熱付着なし）",
        "damageTypeDetail": "物理(1段目) / 灼熱(2段目・狼の至宝)",
        "rawText": "目標に突進し、物理ダメージと浮遊効果を与える。クラッシュ状態の目標に命中した場合、追加で狼の至宝を放ち、灼熱ダメージを与える。（※灼熱付着なし）",
        "attachText": "なし",
        "anomalyText": "1段目で浮遊付与(クラッシュ+1段階) → クラッシュ状態の目標には2段目「狼の至宝」(灼熱ダメ・素質1トリガー)追撃",
        "modifiers": [
          {
            "id": "mod_ロッシ_skill_base",
            "name": "真紅の影 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.54,
            "valuesByRank": {
              "r1": 0.85,
              "r9": 1.54,
              "spec1": 1.6667,
              "spec2": 1.7933,
              "spec3": 1.92
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_rossi",
        "type": "combo",
        "name": "刹那の影",
        "shortName": "連携技",
        "damageType": "物理",
        "multipliers": {
          "lv9": 1.2,
          "lv10_spec1": 1.3,
          "lv11_spec2": 1.4,
          "lv12_spec3": 1.5
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_rossi_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 15.0,
            "description": "1回目(物理): R1=67%→R9=120%→特化III=150% / 2回目基礎(物理): R1=133%→R9=240%→特化III=300% ＋ アーツ付着消費1段階毎追加: R1=+80%→R9=+144%→特化III=+180%",
            "condition": "敵がクラッシュかつアーツ付着状態の時発動可(連続2回発動可能) / CD: R1〜9=15秒→特化III=14秒 / 会心バフ持続15秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_rossi_combo_crit",
            "name": "2回目発動時 会心率・会心ダメUP",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "crit",
            "calcGroupLabel": "【会心補正】会心率/ダメ",
            "value": 0,
            "duration": 15.0,
            "description": "2回目発動時、15秒間自身の会心率UP: R1=+15%→R9=+21%→特化III=+25% ＆ 会心ダメージUP: R1=+30%→R9=+42%→特化III=+50%",
            "condition": "敵がクラッシュかつアーツ付着状態の時発動可(連続2回発動可能) / CD: R1〜9=15秒→特化III=14秒 / 会心バフ持続15秒",
            "effectType": "buff"
          },
          {
            "id": "buff_rossi_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 15.0,
            "description": "2段目ブレイク値5",
            "condition": "敵がクラッシュかつアーツ付着状態の時発動可(連続2回発動可能) / CD: R1〜9=15秒→特化III=14秒 / 会心バフ持続15秒",
            "effectType": "crush"
          },
          {
            "id": "buff_rossi_combo_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 15.0,
            "description": "【2連続発動連携＆完璧連携ボーナス】1回のトリガーで連携技を連続2回発動でき、2回目で全アーツ付着を消費して浮遊と自己会心バフを獲得。2回目を『完璧連携(ジャスト入力)』で発動すると追加でクラッシュ+1段階を付与する",
            "condition": "敵がクラッシュかつアーツ付着状態の時発動可(連続2回発動可能) / CD: R1〜9=15秒→特化III=14秒 / 会心バフ持続15秒",
            "special": "【2連続発動連携＆完璧連携ボーナス】1回のトリガーで連携技を連続2回発動でき、2回目で全アーツ付着を消費して浮遊と自己会心バフを獲得。2回目を『完璧連携(ジャスト入力)』で発動すると追加でクラッシュ+1段階を付与する",
            "effectType": "special"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "inflict",
          "stacks": 1,
          "label": "💨 浮遊 (クラッシュ付与 +1段)",
          "description": "2回目で敵のすべてのアーツ付着を全消費 ＋ 浮遊付与(クラッシュ+1) ＋ 完璧連携時はクラッシュさらに+1段階"
        },
        "description": "敵がクラッシュかつアーツ付着状態の時に発動可能、連続で2回発動できる。2回目は全てのアーツ付着を消費し物理ダメージと浮遊を与え、15秒間自身の会心率と会心ダメージがアップ。完璧連携時は追加でクラッシュ1段階付与。",
        "damageTypeDetail": "物理",
        "rawText": "敵がクラッシュかつアーツ付着状態の時に発動可能、連続で2回発動できる。2回目は全てのアーツ付着を消費し物理ダメージと浮遊を与え、15秒間自身の会心率と会心ダメージがアップ。完璧連携時は追加でクラッシュ1段階付与。",
        "attachText": "なし",
        "anomalyText": "2回目で敵のすべてのアーツ付着を全消費 ＋ 浮遊付与(クラッシュ+1) ＋ 完璧連携時はクラッシュさらに+1段階",
        "special": "【2連続発動連携＆完璧連携ボーナス】1回のトリガーで連携技を連続2回発動でき、2回目で全アーツ付着を消費して浮遊と自己会心バフを獲得。2回目を『完璧連携(ジャスト入力)』で発動すると追加でクラッシュ+1段階を付与する",
        "modifiers": [
          {
            "id": "mod_ロッシ_combo_base",
            "name": "刹那の影 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.2,
            "valuesByRank": {
              "r1": 0.67,
              "r9": 1.2,
              "spec1": 1.3,
              "spec2": 1.4,
              "spec3": 1.5
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:physical",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_rossi",
        "type": "ult",
        "name": "\"鋭爪\"奇襲",
        "shortName": "必殺技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 4.75,
          "lv10_spec1": 5.1667,
          "lv11_spec2": 5.5833,
          "lv12_spec3": 6.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_rossi_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "突き刺し総倍率(灼熱): R1=275%→R9=475%→特化III=600% / 斬撃1段目(灼熱): R1=111%→R9=200%→特化III=250% / 斬撃2段目(灼熱): R1=333%→R9=600%→特化III=750%(合計1600%)",
            "condition": "必殺チャージ消費110",
            "effectType": "multiplier"
          },
          {
            "id": "buff_rossi_ult_crit",
            "name": "必殺会心ダメージ+60%",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "crit",
            "calcGroupLabel": "【会心補正】会心率/ダメ",
            "value": 0,
            "duration": 0.0,
            "description": "この必殺技自身の会心ダメージ+60%(固有ボーナス)",
            "condition": "必殺チャージ消費110",
            "effectType": "buff"
          },
          {
            "id": "buff_rossi_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値25",
            "condition": "必殺チャージ消費110",
            "effectType": "crush"
          }
        ],
        "epCost": 110,
        "infliction": {
          "type": "heat",
          "stacks": 1,
          "label": "🔥 灼熱付着 (+1段階)",
          "description": "灼熱付着(1段階・最終斬撃時)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "短時間で目標に灼熱ダメージを複数回与えたあと、ナイフによる斬撃を2段繰り出し、高い灼熱ダメージを与え、灼熱付着を付与する（必殺技固有会心ダメージ+60%）。",
        "damageTypeDetail": "灼熱",
        "rawText": "短時間で目標に灼熱ダメージを複数回与えたあと、ナイフによる斬撃を2段繰り出し、高い灼熱ダメージを与え、灼熱付着を付与する（必殺技固有会心ダメージ+60%）。",
        "attachText": "灼熱付着(1段階・最終斬撃時)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_ロッシ_ult_base",
            "name": "\"鋭爪\"奇襲 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 4.75,
            "valuesByRank": {
              "r1": 2.75,
              "r9": 4.75,
              "spec1": 5.1667,
              "spec2": 5.5833,
              "spec3": 6.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "狼緋",
    "recommendedWeapons": [
      "狼緋",
      "テルミット・カッター"
    ],
    "normalAttack": {
      "name": "滾る狼血",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[27%/32%/34%/41%/50%]→R9[49%/57%/61%/73%/90%]→特化III[61%/71%/77%/91%/113%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク18 / 終撃時SP回復",
      "description": "最大5段の攻撃で、敵に物理ダメージを与える。重攻撃はブレイク値18を与える。",
      "raw": "最大5段の攻撃で、敵に物理ダメージを与える。重攻撃はブレイク値18を与える。"
    },
    "talents": [
      {
        "id": "talent_rossi_1",
        "name": "爪痕",
        "description": "狼の至宝でダメージを与えると、15秒→25秒間染まる爪痕を付与(重ね掛け不可)。毎秒攻撃力25%→30%の物理ダメージを受け、さらに受ける物理ダメージと灼熱ダメージ+6%→+12%",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_rossi_talent1_multiplier",
            "name": "爪痕",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 15.0,
            "description": "「染まる爪痕」中、1秒ごとにロッシの攻撃力25%(昇進1)→30%(昇進2)分の物理ダメージ",
            "condition": "戦技2段目「狼の至宝」でダメージを与えた時 / 持続15秒(昇進1)→25秒(昇進2) / 重ね掛け不可"
          },
          {
            "id": "buff_rossi_talent1_taken_damage_up",
            "name": "爪痕",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "taken_damage_up",
            "calcGroupLabel": "【被ダメージ補正】敵被ダメUP",
            "value": 0,
            "duration": 15.0,
            "description": "「染まる爪痕」中、目標の受ける物理ダメージ & 受ける灼熱ダメージ+6%(昇進1) → +12%(昇進2)",
            "condition": "戦技2段目「狼の至宝」でダメージを与えた時 / 持続15秒(昇進1)→25秒(昇進2) / 重ね掛け不可"
          }
        ]
      },
      {
        "id": "talent_rossi_2",
        "name": "ざわめく血",
        "description": "染まる爪痕状態の敵にスキルで会心ダメージを与えるとき、攻撃力12%→24%分の灼熱ダメージを追加発動しHP回復。目標が燃焼状態の場合1.5倍。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_rossi_talent2_multiplier",
            "name": "ざわめく血",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "追加で攻撃力12%(昇進2)→24%(昇進3)分の灼熱ダメージを1回発生(燃焼中の敵には1.5倍＝36%)",
            "condition": "染まる爪痕状態の敵にスキルで会心ダメージを与えた時(目標が燃焼中なら効果1.5倍)"
          },
          {
            "id": "buff_rossi_talent2_aux",
            "name": "ざわめく血",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "自身のHPを[知性×0.04](昇進2)→[知性×0.08](昇進3)回復(燃焼中は1.5倍)",
            "condition": "染まる爪痕状態の敵にスキルで会心ダメージを与えた時(目標が燃焼中なら効果1.5倍)"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "ロッシ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【2連続発動連携＆完璧連携ボーナス】1回のトリガーで連携技を連続2回発動でき、2回目で全アーツ付着を消費して浮遊と自己会心バフを獲得。2回目を『完璧連携(ジャスト入力)』で発動すると追加でクラッシュ+1段階を付与する"
    },
    "recommendedArmorSet": "set_chouiki",
    "recommendedArmorSetName": "軽量超域セット",
    "recommendedArmor": {
      "armorSet": "set_chouiki",
      "body": "gold_body_e8bbbde9878fe8b_44",
      "arm": "gold_arms_e8bbbde9878fe8b_39",
      "acc1": "gold_accessories_mie8ada6e58299e_31",
      "acc2": "gold_accessories_mie8ada6e58299e_31"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_snowshine",
    "name": "スノーシャイン",
    "icon": "image/snowshine.png",
    "rarity": 5,
    "element": "寒冷",
    "weaponType": "大剣",
    "class": "重装",
    "mainStat": "筋力",
    "subStat": "意志",
    "baseStats": {
      "hp": 6800,
      "atk": 630,
      "strength": 245,
      "agility": 95,
      "intellect": 100,
      "willpower": 160,
      "artsIntensity": 65,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "加護味方のアーツ付着無効",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "必殺範囲+20%",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "必殺凍結持続+2秒",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "防御力+20・意志+20",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "戦技反撃成功時SP+10返還",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_snowshine",
        "type": "skill",
        "name": "限界防御",
        "shortName": "戦技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 3.6,
          "lv10_spec1": 3.9,
          "lv11_spec2": 4.2,
          "lv12_spec3": 4.5
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_snowshine_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "被弾反撃寒冷ダメ倍率: R1=200% → R9=360% → 特化III=450%",
            "condition": "SP消費100(発動時に即時SP30返還) / 防御構え中に被弾すると反撃1回発動",
            "effectType": "multiplier"
          },
          {
            "id": "buff_snowshine_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP30返還(実質SP70) / 自身と周囲の味方に加護90%付与 / 反撃ブレイク値20",
            "condition": "SP消費100(発動時に即時SP30返還) / 防御構え中に被弾すると反撃1回発動",
            "effectType": "crush"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "cryo",
          "stacks": 1,
          "label": "❄️ 寒冷付着 (+1段階)",
          "description": "寒冷付着(1段階 / 被弾反撃成功時のみ)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "防御の構えをとり即時SP30を返還し、自身と周囲の味方に90%の加護を付与する。構え中に攻撃を受けると反撃を行い、寒冷ダメージを与え寒冷付着(1段階)を付与する。",
        "damageTypeDetail": "寒冷(反撃発動時のみ)",
        "rawText": "防御の構えをとり即時SP30を返還し、自身と周囲の味方に90%の加護を付与する。構え中に攻撃を受けると反撃を行い、寒冷ダメージを与え寒冷付着(1段階)を付与する。",
        "attachText": "寒冷付着(1段階 / 被弾反撃成功時のみ)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_スノーシャイン_skill_base",
            "name": "限界防御 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.6,
            "valuesByRank": {
              "r1": 2.0,
              "r9": 3.6,
              "spec1": 3.9,
              "spec2": 4.2,
              "spec3": 4.5
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_snowshine",
        "type": "combo",
        "name": "極地救援",
        "shortName": "連携技",
        "damageType": "なし",
        "multipliers": {
          "lv9": 2.8,
          "lv10_spec1": 3.05,
          "lv11_spec2": 3.35,
          "lv12_spec3": 3.7
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_snowshine_combo_aux",
            "name": "周囲味方即時＆持続HP回復",
            "target": "team",
            "targetLabel": "全体回復",
            "category": "heal",
            "calcGroup": "heal",
            "calcGroupLabel": "【補助・耐久・リソース】(全体回復)",
            "value": 0,
            "duration": 25.0,
            "description": "周囲の味方即時HP回復: R1[96+意志×0.22]→R9[202+意志×0.47]→特化III[216+意志×0.5] / 3秒間(0.5秒毎計6回)範囲持続回復: R1[24+意志×0.06]→R9[50+意志×0.12]→特化III[54+意志×0.13]",
            "condition": "操作中のオペレーターが攻撃を受けHPが60%未満になった時発動可 / CD: R1=25秒→R9=24秒→特化III=23秒",
            "effectType": "heal"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "操作中のオペレーターが攻撃を受けHPが60%未満になったときに発動可能。周囲の味方のHPを回復し、さらに3秒間範囲内の味方を持続的に治療する。（※ダメージ・アーツ付着なし）",
        "damageTypeDetail": "なし",
        "rawText": "操作中のオペレーターが攻撃を受けHPが60%未満になったときに発動可能。周囲の味方のHPを回復し、さらに3秒間範囲内の味方を持続的に治療する。（※ダメージ・アーツ付着なし）",
        "attachText": "なし",
        "anomalyText": "なし"
      },
      {
        "id": "ult_snowshine",
        "type": "ult",
        "name": "凍てつく寒霜",
        "shortName": "必殺技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 3.6,
          "lv10_spec1": 3.9,
          "lv11_spec2": 4.2,
          "lv12_spec3": 4.5
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_snowshine_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 5.0,
            "description": "爆発寒冷ダメ: R1=200%→R9=360%→特化III=450% / 氷雪地帯0.5秒毎持続寒冷ダメ: R1=29%→R9=52%→特化III=65%(5秒合計650%)",
            "condition": "必殺チャージ消費80 / 氷雪地帯持続5秒(0.5秒毎計10ヒット)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_snowshine_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 5.0,
            "description": "ブレイク値15 / 氷雪地帯滞在で強制凍結付与",
            "condition": "必殺チャージ消費80 / 氷雪地帯持続5秒(0.5秒毎計10ヒット)",
            "effectType": "crush"
          }
        ],
        "epCost": 90,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "氷雪地帯内に一定時間滞在した敵に強制凍結付与(※寒冷付着は付与しない！)",
          "description": "氷雪地帯内に一定時間滞在した敵に強制凍結付与(※寒冷付着は付与しない！)"
        },
        "description": "前方に盾を投げつけ寒冷ダメージを与え、5秒間持続する氷雪地帯を生成して0.5秒ごとに寒冷ダメージを与える。氷雪地帯に一定時間滞在した敵を強制的に凍結状態にする。（※寒冷付着は付与しない）",
        "damageTypeDetail": "寒冷",
        "rawText": "前方に盾を投げつけ寒冷ダメージを与え、5秒間持続する氷雪地帯を生成して0.5秒ごとに寒冷ダメージを与える。氷雪地帯に一定時間滞在した敵を強制的に凍結状態にする。（※寒冷付着は付与しない）",
        "attachText": "なし",
        "anomalyText": "氷雪地帯内に一定時間滞在した敵に強制凍結付与(※寒冷付着は付与しない！)",
        "modifiers": [
          {
            "id": "mod_スノーシャイン_ult_base",
            "name": "凍てつく寒霜 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.6,
            "valuesByRank": {
              "r1": 2.0,
              "r9": 3.6,
              "spec1": 3.9,
              "spec2": 4.2,
              "spec3": 4.5
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "最期の声",
    "recommendedWeapons": [
      "最期の声",
      "悠久の継承"
    ],
    "normalAttack": {
      "name": "極低温猛撃",
      "damageType": "物理",
      "damageTypeDetail": "物理",
      "attach": "なし",
      "multipliers": "通常1〜3段: R1[55%/59%/100%]→R9[99%/105%/180%]→特化III[124%/132%/225%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク23 / 終撃時SP回復",
      "description": "最大3段の攻撃で、敵に物理ダメージを与える。重攻撃はブレイク値23を与える。（※アーツ付着なし）",
      "raw": "最大3段の攻撃で、敵に物理ダメージを与える。重攻撃はブレイク値23を与える。（※アーツ付着なし）"
    },
    "talents": [
      {
        "id": "talent_snowshine_1",
        "name": "極地生存",
        "description": "HPが45%以下の味方を治療するとき、回復効果+15%→+25%",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_snowshine_talent1_aux",
            "name": "極地生存",
            "target": "single",
            "targetLabel": "単体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "与える回復効果+15%(昇進1) → +25%(昇進2)",
            "condition": "HP45%以下の味方を治療する時"
          }
        ]
      },
      {
        "id": "talent_snowshine_2",
        "name": "救援専門家",
        "description": "戦技でブロックに成功したとき、追加で必殺チャージを+6→+10回復する。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_snowshine_talent2_aux",
            "name": "救援専門家",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "自身の必殺チャージ追加回復: +6(昇進1) → +10(昇進2)",
            "condition": "戦技「限界防御」で攻撃ブロックに成功した時"
          }
        ]
      }
    ],
    "recommendedArmorSet": "set_bio_support",
    "recommendedArmorSetName": "生物補助セット",
    "recommendedArmor": {
      "armorSet": "set_bio_support",
      "body": "gold_body_e7949fe789a9e8a_45",
      "arm": "gold_arms_e7949fe789a9e8a_40",
      "acc1": "gold_accessories_e7949fe789a9e8a_60",
      "acc2": "gold_accessories_e69591e59bbde58_73"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_su",
    "name": "スー",
    "icon": "image/su.png",
    "rarity": 6,
    "element": "寒冷",
    "weaponType": "大剣",
    "class": "補助",
    "mainStat": "知性",
    "subStat": "意志",
    "baseStats": {
      "hp": 6800,
      "atk": 920,
      "strength": 120,
      "agility": 110,
      "intellect": 285,
      "willpower": 185,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "行動停止+50%・筆意記録率+7%・爆発半径+40%",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力",
        "special": "1凸: 戦技「筆意」のダメージ記録率+7%加算(特化IIIで13%→20%) / 5凸: 連携技の付着消費段階数+1見なし"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "連携時10秒攻撃力+[8%+3%×段階]",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "必殺ダメ1.2倍・増幅1.2倍",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "必殺消費-15%",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "連携CD-2秒・連携ダメ1.15倍・段階+1見なし",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力",
        "special": "1凸: 戦技「筆意」のダメージ記録率+7%加算(特化IIIで13%→20%) / 5凸: 連携技の付着消費段階数+1見なし"
      }
    ],
    "specialMechanic": {
      "title": "スー 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。 ／ 【編成位置参照CD短縮】編成01位置(一番左)のオペレーターの連携技残りクールタイムを直接-10秒→-20秒短縮する ／ 1凸: 戦技「筆意」のダメージ記録率+7%加算(特化IIIで13%→20%) / 5凸: 連携技の付着消費段階数+1見なし"
    },
    "skills": [
      {
        "id": "skill1_su",
        "type": "skill",
        "name": "山河を映して → 派生「墨継」 → 派生「収筆」",
        "shortName": "戦技1",
        "damageType": "寒冷",
        "infliction": {
          "type": "copy_slot1",
          "stacks": 1,
          "label": "🎨 01位置属性模倣付着 (+1段階)",
          "description": "編成一番左(01位置)のオペレーターの属性が灼熱なら灼熱付着、それ以外なら寒冷付着を付与"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "行動停止1秒(1凸で1.5秒)付与",
          "description": "行動停止1秒(1凸で1.5秒)付与"
        },
        "multipliers": {
          "lv9": 0.8,
          "lv10_spec1": 0.8667,
          "lv11_spec2": 0.9333,
          "lv12_spec3": 1.0
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_su_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "戦技寒冷ダメ倍率: R1=44% → R9=80% → 特化III=100%",
            "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化",
            "effectType": "multiplier"
          },
          {
            "id": "buff_su_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値5＋筆意爆発ブレイク値5 / 行動停止1秒(1凸+50%=1.5秒)",
            "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化",
            "effectType": "crush"
          },
          {
            "id": "buff_su_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 20.0,
            "description": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。",
            "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化",
            "special": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "description": "敵に寒冷ダメージと1秒の行動停止を与え、編成01位置オペレーターが灼熱なら灼熱付着、それ以外なら寒冷付着を付与し、20秒間「筆意」で被ダメージの8%→13%を記録して終了時範囲固定ダメージを与える。発動後戦技が「墨継」(墨魂抽出・ダメージ効果伝達)→「収筆」(SP0早期爆発)に変化。",
        "damageTypeDetail": "寒冷＋固定ダメージ(筆意爆発)",
        "rawText": "敵に寒冷ダメージと1秒の行動停止を与え、編成01位置オペレーターが灼熱なら灼熱付着、それ以外なら寒冷付着を付与し、20秒間「筆意」で被ダメージの8%→13%を記録して終了時範囲固定ダメージを与える。発動後戦技が「墨継」(墨魂抽出・ダメージ効果伝達)→「収筆」(SP0早期爆発)に変化。",
        "attachText": "01位置キャラが灼熱属性なら灼熱付着(1段階)、それ以外の全属性なら寒冷付着(1段階)",
        "anomalyText": "行動停止1秒(1凸で1.5秒)付与",
        "special": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。",
        "modifiers": [
          {
            "id": "mod_スー_skill_base",
            "name": "山河を映して → 派生「墨継」 → 派生「収筆」 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.8,
            "valuesByRank": {
              "r1": 0.44,
              "r9": 0.8,
              "spec1": 0.8667,
              "spec2": 0.9333,
              "spec3": 1.0
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "skill2_su",
        "type": "skill2",
        "name": "山河を映して → 派生「墨継」 → 派生「収筆」",
        "shortName": "戦技2",
        "damageType": "寒冷",
        "infliction": {
          "type": "copy_slot1",
          "stacks": 1,
          "label": "🎨 01位置属性模倣付着 (+1段階)",
          "description": "編成一番左(01位置)のオペレーターの属性が灼熱なら灼熱付着、それ以外なら寒冷付着を付与"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "行動停止1秒(1凸で1.5秒)付与",
          "description": "行動停止1秒(1凸で1.5秒)付与"
        },
        "multipliers": {
          "lv9": 0.8,
          "lv10_spec1": 0.8667,
          "lv11_spec2": 0.9333,
          "lv12_spec3": 1.0
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_su_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "戦技寒冷ダメ倍率: R1=44% → R9=80% → 特化III=100%",
            "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化",
            "effectType": "multiplier"
          },
          {
            "id": "buff_su_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値5＋筆意爆発ブレイク値5 / 行動停止1秒(1凸+50%=1.5秒)",
            "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化",
            "effectType": "crush"
          },
          {
            "id": "buff_su_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 20.0,
            "description": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。",
            "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化",
            "special": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。",
            "effectType": "special"
          }
        ],
        "spCost": 15,
        "description": "敵に寒冷ダメージと1秒の行動停止を与え、編成01位置オペレーターが灼熱なら灼熱付着、それ以外なら寒冷付着を付与し、20秒間「筆意」で被ダメージの8%→13%を記録して終了時範囲固定ダメージを与える。発動後戦技が「墨継」(墨魂抽出・ダメージ効果伝達)→「収筆」(SP0早期爆発)に変化。",
        "damageTypeDetail": "寒冷＋固定ダメージ(筆意爆発)",
        "rawText": "敵に寒冷ダメージと1秒の行動停止を与え、編成01位置オペレーターが灼熱なら灼熱付着、それ以外なら寒冷付着を付与し、20秒間「筆意」で被ダメージの8%→13%を記録して終了時範囲固定ダメージを与える。発動後戦技が「墨継」(墨魂抽出・ダメージ効果伝達)→「収筆」(SP0早期爆発)に変化。",
        "attachText": "01位置キャラが灼熱属性なら灼熱付着(1段階)、それ以外の全属性なら寒冷付着(1段階)",
        "anomalyText": "行動停止1秒(1凸で1.5秒)付与",
        "special": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。",
        "modifiers": [
          {
            "id": "mod_スー_skill_base",
            "name": "山河を映して → 派生「墨継」 → 派生「収筆」 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.8,
            "valuesByRank": {
              "r1": 0.44,
              "r9": 0.8,
              "spec1": 0.8667,
              "spec2": 0.9333,
              "spec3": 1.0
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_su",
        "type": "combo",
        "name": "胸中に成竹在り",
        "shortName": "連携技",
        "damageType": "寒冷",
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし(寒冷/灼熱付着が消費または吸収された時トリガー)",
          "description": "なし(寒冷/灼熱付着が消費または吸収された時トリガー)"
        },
        "multipliers": {
          "lv9": 6.0,
          "lv10_spec1": 6.5,
          "lv11_spec2": 7.0,
          "lv12_spec3": 7.5
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_su_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 16.0,
            "description": "基礎寒冷ダメ: R1=333%→R9=600%→特化III=750% ＋ 消費/吸収された付着1段階毎に追加倍率: R1=+44%→R9=+80%→特化III=+100%(5凸で全体1.15倍＆段階+1見なし)",
            "condition": "敵の寒冷付着または灼熱付着が消費または吸収された時発動可 / CD: R1=16秒→R9=16秒→特化III=15秒(5凸-2秒)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_su_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 16.0,
            "description": "ブレイク値10 / 必殺チャージ+10回復",
            "condition": "敵の寒冷付着または灼熱付着が消費または吸収された時発動可 / CD: R1=16秒→R9=16秒→特化III=15秒(5凸-2秒)",
            "effectType": "crush"
          }
        ],
        "description": "敵の寒冷付着または灼熱付着が消費または吸収されたときに発動可能。敵に寒冷ダメージを与え、消費・吸収された段階数に応じて追加ダメージを与える。（※寒冷付着なし）",
        "damageTypeDetail": "寒冷",
        "rawText": "敵の寒冷付着または灼熱付着が消費または吸収されたときに発動可能。敵に寒冷ダメージを与え、消費・吸収された段階数に応じて追加ダメージを与える。（※寒冷付着なし）",
        "attachText": "なし",
        "anomalyText": "なし(寒冷/灼熱付着が消費または吸収された時トリガー)",
        "modifiers": [
          {
            "id": "mod_スー_combo_base",
            "name": "胸中に成竹在り 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 6.0,
            "valuesByRank": {
              "r1": 3.33,
              "r9": 6.0,
              "spec1": 6.5,
              "spec2": 7.0,
              "spec3": 7.5
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_su",
        "type": "ult",
        "name": "白けさせるでない！",
        "shortName": "必殺技",
        "damageType": "寒冷",
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "multipliers": {
          "lv9": 4.0,
          "lv10_spec1": 4.3333,
          "lv11_spec2": 4.6667,
          "lv12_spec3": 5.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_su_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 30.0,
            "description": "寒冷ダメ倍率: R1=222% → R9=400% → 特化III=500%(3凸で1.2倍=600%)",
            "condition": "必殺チャージ消費80(4凸68) / CD30秒 / 増幅持続12秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_su_ult_amp",
            "name": "チーム寒冷・灼熱増幅",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "amp",
            "calcGroupLabel": "【増幅補正】増幅",
            "value": 36,
            "duration": 12.0,
            "description": "チーム全員に12秒間 寒冷増幅 & 灼熱増幅: R1=+20% → R9=+30% → 特化III=+36%(3凸で1.2倍=+43.2%)",
            "condition": "必殺チャージ消費80(4凸68) / CD30秒 / 増幅持続12秒",
            "effectType": "buff"
          },
          {
            "id": "buff_su_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 30.0,
            "description": "ブレイク値20 / 素質1連動で編成01位置オペレーターの連携技残りCD短縮",
            "condition": "必殺チャージ消費80(4凸68) / CD30秒 / 増幅持続12秒",
            "effectType": "crush"
          }
        ],
        "epCost": 80,
        "description": "敵に寒冷ダメージを与え、12秒間チーム全員に寒冷増幅と灼熱増幅(20%→36%)を付与する。（※寒冷付着なし）",
        "damageTypeDetail": "寒冷",
        "rawText": "敵に寒冷ダメージを与え、12秒間チーム全員に寒冷増幅と灼熱増幅(20%→36%)を付与する。（※寒冷付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_スー_ult_base",
            "name": "白けさせるでない！ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 4.0,
            "valuesByRank": {
              "r1": 2.22,
              "r9": 4.0,
              "spec1": 4.3333,
              "spec2": 4.6667,
              "spec3": 5.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "玉中身",
    "recommendedWeapons": [
      "玉中身",
      "破砕君主"
    ],
    "normalAttack": {
      "name": "卒意",
      "damageType": "寒冷",
      "damageTypeDetail": "寒冷",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[20%/32%/29%/24%/64%]→R9[36%/58%/53%/43%/115%]→特化III[45%/72%/66%/54%/144%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク18 / 終撃時SP回復",
      "description": "最大5段の攻撃で、敵に寒冷ダメージを与える。（※寒冷付着なし）",
      "raw": "最大5段の攻撃で、敵に寒冷ダメージを与える。（※寒冷付着なし）"
    },
    "talents": [
      {
        "id": "talent_su_1",
        "name": "代理人の気遣い",
        "description": "必殺技発動時、チームの一番左(01位置)にいるオペレーターの連携技の残りクールタイム-10秒→-20秒",
        "target": "single",
        "targetLabel": "単体バフ",
        "calcGroup": "special",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_su_talent1_aux",
            "name": "代理人の気遣い",
            "target": "single",
            "targetLabel": "単体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "編成01位置オペレーターの連携技残りCD短縮: -10秒(昇進1) → -20秒(昇進2)",
            "condition": "必殺技「白けさせるでない！」発動時(対象：編成一番左＝01位置のオペレーター)"
          },
          {
            "id": "buff_su_talent1_special",
            "name": "代理人の気遣い",
            "target": "single",
            "targetLabel": "単体バフ",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【編成位置参照CD短縮】編成01位置(一番左)のオペレーターの連携技残りクールタイムを直接-10秒→-20秒短縮する",
            "condition": "必殺技「白けさせるでない！」発動時(対象：編成一番左＝01位置のオペレーター)",
            "special": "【編成位置参照CD短縮】編成01位置(一番左)のオペレーターの連携技残りクールタイムを直接-10秒→-20秒短縮する"
          }
        ],
        "special": "【編成位置参照CD短縮】編成01位置(一番左)のオペレーターの連携技残りクールタイムを直接-10秒→-20秒短縮する"
      },
      {
        "id": "talent_su_2",
        "name": "丹青褪せず",
        "description": "墨魂が消失したとき、5秒間味方に+15%→+30%の移動加速を付与する。",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_su_talent2_aux",
            "name": "丹青褪せず",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 5.0,
            "description": "味方に移動速度アップ(加速)付与: +15%(昇進1) → +30%(昇進2)",
            "condition": "墨魂が消失した時 / 持続5秒"
          }
        ]
      }
    ],
    "recommendedArmorSet": "set_oryu",
    "recommendedArmorSetName": "50式応龍セット",
    "recommendedArmor": {
      "armorSet": "set_oryu",
      "body": "gold_body_50e5bc8fe5bf9ce_24",
      "arm": "gold_arms_50e5bc8fe5bf9ce_21",
      "acc1": "gold_accessories_50e5bc8fe5bf9ce_29",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_tangtang",
    "name": "タンタン",
    "icon": "image/tangtang.png",
    "rarity": 6,
    "element": "寒冷",
    "weaponType": "拳銃",
    "class": "術師",
    "mainStat": "知性",
    "subStat": "敏捷",
    "baseStats": {
      "hp": 6800,
      "atk": 920,
      "strength": 120,
      "agility": 185,
      "intellect": 285,
      "willpower": 110,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 1,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "連携1.2倍・連携CD-2秒・湍水SP返還+5",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "敏捷+20・寒冷ダメ+10%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "戦技1.1倍・水竜巻アーツ脆弱+5%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "必殺消費-15%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "必殺1.15倍・素質2水竜巻ダメ+80%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_tangtang",
        "type": "skill",
        "name": "波が来るぜ！",
        "shortName": "戦技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 1.44,
          "lv10_spec1": 1.56,
          "lv11_spec2": 1.68,
          "lv12_spec3": 1.8
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_tangtang_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 3.0,
            "description": "射撃寒冷ダメ: R1=80%→R9=144%→特化III=180% / 水竜巻1つにつき寒冷ダメ(戦技ダメージ見なし): R1=133%→R9=240%→特化III=300%(3凸で戦技倍率1.1倍)",
            "condition": "SP消費100 / 水竜巻1つ＋周囲の「湍水」(最大2カ所)を全消費して同数の水竜巻追加発生(最大計3つ・持続3秒) / 複数発生時15秒間アーツ脆弱付与",
            "effectType": "multiplier"
          },
          {
            "id": "buff_tangtang_skill_vulnerability",
            "name": "水竜巻アーツ脆弱",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "vulnerability",
            "calcGroupLabel": "【脆弱補正】敵脆弱",
            "value": 10,
            "duration": 15.0,
            "description": "水竜巻複数発生時15秒間アーツ脆弱付与: 2つ発生時R1=3%→R9=4%→特化III=5%(3凸10%) / 3つ発生時R1=6%→R9=8%→特化III=10%(3凸15%)",
            "condition": "SP消費100 / 水竜巻1つ＋周囲の「湍水」(最大2カ所)を全消費して同数の水竜巻追加発生(最大計3つ・持続3秒) / 複数発生時15秒間アーツ脆弱付与",
            "effectType": "debuff"
          },
          {
            "id": "buff_tangtang_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 3.0,
            "description": "射撃ブレイク値10 / 湍水1つ消費毎にSP20返還(1凸でSP25返還、最大2つ消費でSP40〜50返還)",
            "condition": "SP消費100 / 水竜巻1つ＋周囲の「湍水」(最大2カ所)を全消費して同数の水竜巻追加発生(最大計3つ・持続3秒) / 複数発生時15秒間アーツ脆弱付与",
            "effectType": "crush"
          },
          {
            "id": "buff_tangtang_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 3.0,
            "description": "【水竜巻の付着非重複ルール】湍水を消費して水竜巻を2〜3個同時に発生させても、寒冷付着は重複せず合計「1段階」のみ付与される（ダメージとアーツ脆弱段階は水竜巻数に応じて増加）",
            "condition": "SP消費100 / 水竜巻1つ＋周囲の「湍水」(最大2カ所)を全消費して同数の水竜巻追加発生(最大計3つ・持続3秒) / 複数発生時15秒間アーツ脆弱付与",
            "special": "【水竜巻の付着非重複ルール】湍水を消費して水竜巻を2〜3個同時に発生させても、寒冷付着は重複せず合計「1段階」のみ付与される（ダメージとアーツ脆弱段階は水竜巻数に応じて増加）",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "cryo",
          "stacks": 1,
          "label": "❄️ 寒冷付着 (+1段階)",
          "description": "寒冷付着(1段階 / 水竜巻が複数発生しても付着は重複せず1段階のみ)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "寒冷ダメージを与え水竜巻を1つ発生させ、さらに周囲の湍水(最大2)を消費して同数の水竜巻を発生(1つにつきSP20返還)。水竜巻は寒冷付着(1段階のみ・重複不可)と寒冷ダメージを与え、2つ以上でアーツ脆弱(5%/10%)を付与する。",
        "damageTypeDetail": "寒冷",
        "rawText": "寒冷ダメージを与え水竜巻を1つ発生させ、さらに周囲の湍水(最大2)を消費して同数の水竜巻を発生(1つにつきSP20返還)。水竜巻は寒冷付着(1段階のみ・重複不可)と寒冷ダメージを与え、2つ以上でアーツ脆弱(5%/10%)を付与する。",
        "attachText": "寒冷付着(1段階 / 水竜巻が複数発生しても付着は重複せず1段階のみ)",
        "anomalyText": "なし",
        "special": "【水竜巻の付着非重複ルール】湍水を消費して水竜巻を2〜3個同時に発生させても、寒冷付着は重複せず合計「1段階」のみ付与される（ダメージとアーツ脆弱段階は水竜巻数に応じて増加）",
        "modifiers": [
          {
            "id": "mod_タンタン_skill_base",
            "name": "波が来るぜ！ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.44,
            "valuesByRank": {
              "r1": 0.8,
              "r9": 1.44,
              "spec1": 1.56,
              "spec2": 1.68,
              "spec3": 1.8
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_tangtang",
        "type": "combo",
        "name": "川よ、俺様に従え！",
        "shortName": "連携技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 1.92,
          "lv10_spec1": 2.08,
          "lv11_spec2": 2.24,
          "lv12_spec3": 2.4
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_tangtang_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 14.0,
            "description": "寒冷ダメ倍率: R1=107% → R9=192% → 特化III=240%(1凸で1.2倍=288%)",
            "condition": "敵が寒冷付着またはアーツ爆発のダメージを受けた時発動可 / CD: R1=14秒→R9=13秒→特化III=12秒(1凸-2秒=10秒)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_tangtang_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 14.0,
            "description": "ブレイク値10 / フィールドに「湍水」を1カ所生成(持続30秒・最大2カ所まで存在可能)",
            "condition": "敵が寒冷付着またはアーツ爆発のダメージを受けた時発動可 / CD: R1=14秒→R9=13秒→特化III=12秒(1凸-2秒=10秒)",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし(フィールドに「湍水」1カ所生成)",
          "description": "なし(フィールドに「湍水」1カ所生成)"
        },
        "description": "敵が寒冷付着またはアーツ爆発のダメージを受けたときに発動可能。敵に寒冷ダメージを与え、戦場に「湍水」を1つ生成する。（※連携技自体は寒冷付着を付与しない！）",
        "damageTypeDetail": "寒冷",
        "rawText": "敵が寒冷付着またはアーツ爆発のダメージを受けたときに発動可能。敵に寒冷ダメージを与え、戦場に「湍水」を1つ生成する。（※連携技自体は寒冷付着を付与しない！）",
        "attachText": "なし",
        "anomalyText": "なし(フィールドに「湍水」1カ所生成)",
        "modifiers": [
          {
            "id": "mod_タンタン_combo_base",
            "name": "川よ、俺様に従え！ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.92,
            "valuesByRank": {
              "r1": 1.07,
              "r9": 1.92,
              "spec1": 2.08,
              "spec2": 2.24,
              "spec3": 2.4
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_tangtang",
        "type": "ult",
        "name": "大親分が見てっぞ！",
        "shortName": "必殺技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 2.56,
          "lv10_spec1": 2.7733,
          "lv11_spec2": 2.9867,
          "lv12_spec3": 3.2
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_tangtang_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 4.0,
            "description": "4秒持続寒冷ダメ合計: R1=142%→R9=256%→特化III=320% / 通常終了大波: R1=178%→R9=320%→特化III=400% / 落下攻撃早期終了強化大波: R1=311%→R9=560%→特化III=700%(5凸で必殺全体1.15倍)",
            "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発",
            "effectType": "multiplier"
          },
          {
            "id": "buff_tangtang_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 4.0,
            "description": "通常終了ブレイク15 / 落下早期終了ブレイク20 / 範囲内行動停止付与",
            "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発",
            "effectType": "crush"
          },
          {
            "id": "buff_tangtang_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 4.0,
            "description": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する",
            "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発",
            "special": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する",
            "effectType": "special"
          }
        ],
        "epCost": 90,
        "infliction": {
          "type": "cryo",
          "stacks": 1,
          "label": "❄️ 寒冷付着 (+1段階)",
          "description": "なし(※必殺自体は付着なし。落下攻撃早期終了時に素質2で発生する水竜巻が寒冷付着1段階を付与)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "範囲内の敵に行動停止付与",
          "description": "範囲内の敵に行動停止付与"
        },
        "description": "4秒間古の紋様を展開し敵に行動停止と持続寒冷ダメージを与え、終了時に大波で寒冷ダメージを与える。範囲内で操作オペレーターが落下攻撃を行うと早期終了して大波の威力とブレイク値が大幅強化される。（※必殺技自体には寒冷付着なし）",
        "damageTypeDetail": "寒冷",
        "rawText": "4秒間古の紋様を展開し敵に行動停止と持続寒冷ダメージを与え、終了時に大波で寒冷ダメージを与える。範囲内で操作オペレーターが落下攻撃を行うと早期終了して大波の威力とブレイク値が大幅強化される。（※必殺技自体には寒冷付着なし）",
        "attachText": "なし(※必殺自体は付着なし。落下攻撃早期終了時に素質2で発生する水竜巻が寒冷付着1段階を付与)",
        "anomalyText": "範囲内の敵に行動停止付与",
        "special": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する",
        "modifiers": [
          {
            "id": "mod_タンタン_ult_base",
            "name": "大親分が見てっぞ！ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.56,
            "valuesByRank": {
              "r1": 1.42,
              "r9": 2.56,
              "spec1": 2.7733,
              "spec2": 2.9867,
              "spec3": 3.2
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_cancel_tangtang",
        "type": "ult_cancel",
        "name": "大親分が見てっぞ！",
        "shortName": "必殺キャンセル",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 2.56,
          "lv10_spec1": 2.7733,
          "lv11_spec2": 2.9867,
          "lv12_spec3": 3.2
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_tangtang_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 4.0,
            "description": "4秒持続寒冷ダメ合計: R1=142%→R9=256%→特化III=320% / 通常終了大波: R1=178%→R9=320%→特化III=400% / 落下攻撃早期終了強化大波: R1=311%→R9=560%→特化III=700%(5凸で必殺全体1.15倍)",
            "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発",
            "effectType": "multiplier"
          },
          {
            "id": "buff_tangtang_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 4.0,
            "description": "通常終了ブレイク15 / 落下早期終了ブレイク20 / 範囲内行動停止付与",
            "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発",
            "effectType": "crush"
          },
          {
            "id": "buff_tangtang_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 4.0,
            "description": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する",
            "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発",
            "special": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する",
            "effectType": "special"
          }
        ],
        "spCost": 0,
        "infliction": {
          "type": "cryo",
          "stacks": 1,
          "label": "❄️ 寒冷付着 (+1段階)",
          "description": "なし(※必殺自体は付着なし。落下攻撃早期終了時に素質2で発生する水竜巻が寒冷付着1段階を付与)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "範囲内の敵に行動停止付与",
          "description": "範囲内の敵に行動停止付与"
        },
        "description": "4秒間古の紋様を展開し敵に行動停止と持続寒冷ダメージを与え、終了時に大波で寒冷ダメージを与える。範囲内で操作オペレーターが落下攻撃を行うと早期終了して大波の威力とブレイク値が大幅強化される。（※必殺技自体には寒冷付着なし）",
        "damageTypeDetail": "寒冷",
        "rawText": "4秒間古の紋様を展開し敵に行動停止と持続寒冷ダメージを与え、終了時に大波で寒冷ダメージを与える。範囲内で操作オペレーターが落下攻撃を行うと早期終了して大波の威力とブレイク値が大幅強化される。（※必殺技自体には寒冷付着なし）",
        "attachText": "なし(※必殺自体は付着なし。落下攻撃早期終了時に素質2で発生する水竜巻が寒冷付着1段階を付与)",
        "anomalyText": "範囲内の敵に行動停止付与",
        "special": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する",
        "modifiers": [
          {
            "id": "mod_タンタン_ult_base",
            "name": "大親分が見てっぞ！ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.56,
            "valuesByRank": {
              "r1": 1.42,
              "r9": 2.56,
              "spec1": 2.7733,
              "spec2": 2.9867,
              "spec3": 3.2
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "落草",
    "recommendedWeapons": [
      "落草",
      "望郷"
    ],
    "normalAttack": {
      "name": "脳天ぶち抜く！",
      "damageType": "寒冷",
      "damageTypeDetail": "寒冷",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[23%/25%/35%/37%/50%]→R9[41%/45%/63%/66%/90%]→特化III[51%/56%/79%/82%/113%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク18 / 終撃時SP回復",
      "description": "最大5段の射撃で、敵に寒冷ダメージを与える。重攻撃はブレイク値18を与える。（※寒冷付着なし）",
      "raw": "最大5段の射撃で、敵に寒冷ダメージを与える。重攻撃はブレイク値18を与える。（※寒冷付着なし）"
    },
    "talents": [
      {
        "id": "talent_tangtang_1",
        "name": "肝胆相照らす",
        "description": "湍水の周囲5m以内の味方に10%→20%の加速、敵に20%→40%のスローを付与する(範囲を離れた後も3秒持続)。",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_tangtang_talent1_aux",
            "name": "肝胆相照らす",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 3.0,
            "description": "味方に移動速度+10%(昇進1)→+20%(昇進2)の加速付与 / 敵に20%(昇進1)→40%(昇進2)のスロー付与",
            "condition": "湍水の半径5m以内(離脱後3秒持続)"
          }
        ]
      },
      {
        "id": "talent_tangtang_2",
        "name": "嵐を呼ぶ娘",
        "description": "古の紋様が落下攻撃によって早期終了したとき、戦技と同じ水竜巻を1つ＋周囲の湍水消費数分発生させ、その水竜巻の与えるダメージ+40%→+60%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "special",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_tangtang_talent2_damage_up",
            "name": "嵐を呼ぶ娘",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "damage_up",
            "calcGroupLabel": "【ダメージUP補正】与ダメUP",
            "value": 0,
            "duration": 0.0,
            "description": "この素質で発生した水竜巻の与えるダメージ+40%(昇進1) → +60%(昇進2)(5凸でさらに+80%加算＝+140%)",
            "condition": "必殺技「古の紋様」を落下攻撃で早期終了させた時(周囲の湍水も消費して水竜巻追加発生・SP返還あり)"
          },
          {
            "id": "buff_tangtang_talent2_special",
            "name": "嵐を呼ぶ娘",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "必殺技の落下早期終了時に戦技と同じ水竜巻(戦技ダメージ見なし・寒冷付着1段階・複数時アーツ脆弱・湍水消費SP返還)を自動発動する",
            "condition": "必殺技「古の紋様」を落下攻撃で早期終了させた時(周囲の湍水も消費して水竜巻追加発生・SP返還あり)",
            "special": "必殺技の落下早期終了時に戦技と同じ水竜巻(戦技ダメージ見なし・寒冷付着1段階・複数時アーツ脆弱・湍水消費SP返還)を自動発動する"
          }
        ],
        "special": "必殺技の落下早期終了時に戦技と同じ水竜巻(戦技ダメージ見なし・寒冷付着1段階・複数時アーツ脆弱・湍水消費SP返還)を自動発動する"
      }
    ],
    "specialMechanic": {
      "title": "タンタン 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【水竜巻の付着非重複ルール】湍水を消費して水竜巻を2〜3個同時に発生させても、寒冷付着は重複せず合計「1段階」のみ付与される（ダメージとアーツ脆弱段階は水竜巻数に応じて増加） ／ 【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する ／ 必殺技の落下早期終了時に戦技と同じ水竜巻(戦技ダメージ見なし・寒冷付着1段階・複数時アーツ脆弱・湍水消費SP返還)を自動発動する"
    },
    "recommendedArmorSet": "set_kotsusai",
    "recommendedArmorSetName": "骨砕セット",
    "recommendedArmor": {
      "armorSet": "set_kotsusai",
      "body": "gold_body_e9aaa8e7a095e38_41",
      "arm": "gold_arms_e9aaa8e7a095e38_36",
      "acc1": "gold_accessories_e9aaa8e7a095e38_52",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_typhoeus",
    "name": "ティフォロス",
    "icon": "image/typhoeus.png",
    "rarity": 6,
    "element": "自然",
    "weaponType": "アーツユニット",
    "class": "突撃",
    "mainStat": "敏捷",
    "subStat": "筋力",
    "baseStats": {
      "hp": 7300,
      "atk": 920,
      "strength": 185,
      "agility": 285,
      "intellect": 120,
      "willpower": 110,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "浮遊中攻撃力+18%・空中ダメ1.2倍・素質2CD-3秒",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "敏捷+20・アーツ強度+16",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "連携CD-2秒・矢陣被自然爆発ダメ+6%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "必殺消費-15%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "必殺猟矢+1・必殺ダメ1.2倍・強化自然爆発1.1倍",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_typhoeus",
        "type": "skill",
        "name": "風裂く一矢",
        "shortName": "戦技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 0.4,
          "lv10_spec1": 0.4333,
          "lv11_spec2": 0.4667,
          "lv12_spec3": 0.5
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_typhoeus_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "ジャンプ射撃: R1=22%→R9=40%→特化III=50% / 空中通常1〜4段(各段): R1=29%→R9=52%→特化III=65% / 空中5段目重攻撃: R1=44%→R9=80%→特化III=100% / 自然付着消費時の強化射撃による自然爆発ダメージ倍率乗算: R1=1.1倍→R9=1.2倍→特化III=1.3倍(5凸でさらに1.1倍)",
            "condition": "SP消費100 / ジャンプ射撃後「浮遊状態」に入り空中通常攻撃5回(毎回最大2体・操作キャラ時は5段目が猟矢消費なしで重攻撃＆強化射撃化)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_typhoeus_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "空中5段目ブレイク値20 / 自然付着1段階消費毎に「啓示」+1獲得＆必殺チャージ+12回復",
            "condition": "SP消費100 / ジャンプ射撃後「浮遊状態」に入り空中通常攻撃5回(毎回最大2体・操作キャラ時は5段目が猟矢消費なしで重攻撃＆強化射撃化)",
            "effectType": "crush"
          },
          {
            "id": "buff_typhoeus_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【自然付着消費＆強制自然爆発】自身は自然付着を付与せず、味方が付与した自然付着を空中射撃毎に1段階消費して啓示+1＆必殺チャージ+12を得る。猟矢消費(または操作中5段目)の「強化射撃」は4段階蓄積を待たずに強制的に自然爆発を発生させ、付着消費時はその自然爆発ダメージを1.3倍(5凸で×1.1倍)に乗算強化する。",
            "condition": "SP消費100 / ジャンプ射撃後「浮遊状態」に入り空中通常攻撃5回(毎回最大2体・操作キャラ時は5段目が猟矢消費なしで重攻撃＆強化射撃化)",
            "special": "【自然付着消費＆強制自然爆発】自身は自然付着を付与せず、味方が付与した自然付着を空中射撃毎に1段階消費して啓示+1＆必殺チャージ+12を得る。猟矢消費(または操作中5段目)の「強化射撃」は4段階蓄積を待たずに強制的に自然爆発を発生させ、付着消費時はその自然爆発ダメージを1.3倍(5凸で×1.1倍)に乗算強化する。",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "命中毎に自然付着を1段階消費 / 「強化射撃」命中時に強制的に自然爆発を1回発動！",
          "description": "命中毎に自然付着を1段階消費 / 「強化射撃」命中時に強制的に自然爆発を1回発動！"
        },
        "description": "ジャンプ射撃後、浮遊状態に入り最大5回の空中通常攻撃を行う。自然付着状態の敵に命中すると自然付着を1段階消費し啓示+1と必殺チャージ+12を獲得。猟矢を1本消費した強化射撃は命中時に強制的に自然爆発を1回与え、自然付着を消費していた場合は自然爆発ダメージが1.1倍→1.3倍にアップ。（※自然付着は付与しない）",
        "damageTypeDetail": "自然",
        "rawText": "ジャンプ射撃後、浮遊状態に入り最大5回の空中通常攻撃を行う。自然付着状態の敵に命中すると自然付着を1段階消費し啓示+1と必殺チャージ+12を獲得。猟矢を1本消費した強化射撃は命中時に強制的に自然爆発を1回与え、自然付着を消費していた場合は自然爆発ダメージが1.1倍→1.3倍にアップ。（※自然付着は付与しない）",
        "attachText": "なし",
        "anomalyText": "命中毎に自然付着を1段階消費 / 「強化射撃」命中時に強制的に自然爆発を1回発動！",
        "special": "【自然付着消費＆強制自然爆発】自身は自然付着を付与せず、味方が付与した自然付着を空中射撃毎に1段階消費して啓示+1＆必殺チャージ+12を得る。猟矢消費(または操作中5段目)の「強化射撃」は4段階蓄積を待たずに強制的に自然爆発を発生させ、付着消費時はその自然爆発ダメージを1.3倍(5凸で×1.1倍)に乗算強化する。",
        "modifiers": [
          {
            "id": "mod_ティフォロス_skill_base",
            "name": "風裂く一矢 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.4,
            "valuesByRank": {
              "r1": 0.22,
              "r9": 0.4,
              "spec1": 0.4333,
              "spec2": 0.4667,
              "spec3": 0.5
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_typhoeus",
        "type": "combo",
        "name": "荒れ狂うトゲ",
        "shortName": "連携技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 1.6,
          "lv10_spec1": 1.7333,
          "lv11_spec2": 1.8667,
          "lv12_spec3": 2.0
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_typhoeus_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 21.0,
            "description": "狩人の眼差し命中自然ダメ: R1=89%→R9=160%→特化III=200% / 矢陣エリア持続自然ダメ: R1=45%→R9=80%→特化III=100%",
            "condition": "「啓示」が上限(8)に達した時発動可 / CD: R1=21秒→R9=21秒→特化III=19秒(3凸-2秒=17秒) / 啓示8をすべて猟矢4本に変換＆空中通常回数リセット",
            "effectType": "multiplier"
          },
          {
            "id": "buff_typhoeus_combo_taken_damage_up",
            "name": "矢陣エリア 敵自然爆発被ダメUP",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "taken_damage_up",
            "calcGroupLabel": "【被ダメージ補正】敵被ダメUP",
            "value": 0,
            "duration": 21.0,
            "description": "矢陣エリア内の敵が受ける自然爆発ダメージUP: R1=+6% → R9=+8% → 特化III=+10%(3凸で+6%加算＝+16%)",
            "condition": "「啓示」が上限(8)に達した時発動可 / CD: R1=21秒→R9=21秒→特化III=19秒(3凸-2秒=17秒) / 啓示8をすべて猟矢4本に変換＆空中通常回数リセット",
            "effectType": "debuff"
          },
          {
            "id": "buff_typhoeus_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 21.0,
            "description": "ブレイク値10 / 必殺チャージ+10回復 / 啓示8→猟矢4本変換 / 空中通常回数リセット / 矢陣内60%スロー",
            "condition": "「啓示」が上限(8)に達した時発動可 / CD: R1=21秒→R9=21秒→特化III=19秒(3凸-2秒=17秒) / 啓示8をすべて猟矢4本に変換＆空中通常回数リセット",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "スロー60%付与",
          "description": "スロー60%付与"
        },
        "description": "啓示が最大(8)のときに発動可能。すべての啓示を猟矢に変換(2につき1本)し空中攻撃回数をリセット。自然ダメージを与え矢陣を展開し、範囲内の敵にスロー60%と受ける自然爆発ダメージ+6%→+10%を付与する。（※自然付着なし）",
        "damageTypeDetail": "自然",
        "rawText": "啓示が最大(8)のときに発動可能。すべての啓示を猟矢に変換(2につき1本)し空中攻撃回数をリセット。自然ダメージを与え矢陣を展開し、範囲内の敵にスロー60%と受ける自然爆発ダメージ+6%→+10%を付与する。（※自然付着なし）",
        "attachText": "なし",
        "anomalyText": "スロー60%付与",
        "modifiers": [
          {
            "id": "mod_ティフォロス_combo_base",
            "name": "荒れ狂うトゲ 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.6,
            "valuesByRank": {
              "r1": 0.89,
              "r9": 1.6,
              "spec1": 1.7333,
              "spec2": 1.8667,
              "spec3": 2.0
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_typhoeus",
        "type": "ult",
        "name": "氷山の呼び声",
        "shortName": "必殺技",
        "damageType": "自然",
        "multipliers": {
          "lv9": 2.4,
          "lv10_spec1": 2.6,
          "lv11_spec2": 2.8,
          "lv12_spec3": 3.0
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_typhoeus_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "爆発自然ダメ: R1=133%→R9=240%→特化III=300% / 1〜4段目矢の雨追撃: R1=33%→R9=60%→特化III=75% / 5段目強化矢の雨追撃: R1=89%→R9=160%→特化III=200%(5凸で必殺全体1.2倍)",
            "condition": "必殺チャージ消費200(4凸170) / CD20秒 / 猟矢2本(5凸3本)即獲得＋浮遊状態移行＆空中回数リセット＋後続5回の空中通常に矢の雨追撃",
            "effectType": "multiplier"
          },
          {
            "id": "buff_typhoeus_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値20 / 猟矢2本(5凸3本)獲得 / 浮遊状態移行＆回数リセット",
            "condition": "必殺チャージ消費200(4凸170) / CD20秒 / 猟矢2本(5凸3本)即獲得＋浮遊状態移行＆空中回数リセット＋後続5回の空中通常に矢の雨追撃",
            "effectType": "crush"
          }
        ],
        "epCost": 200,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "自然ダメージを与え、猟矢を2本獲得して浮遊状態に入り空中攻撃回数をリセットする。その後5回の空中通常攻撃命中時に矢の雨による追撃が発生する。（※自然付着なし）",
        "damageTypeDetail": "自然",
        "rawText": "自然ダメージを与え、猟矢を2本獲得して浮遊状態に入り空中攻撃回数をリセットする。その後5回の空中通常攻撃命中時に矢の雨による追撃が発生する。（※自然付着なし）",
        "attachText": "なし",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_ティフォロス_ult_base",
            "name": "氷山の呼び声 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.4,
            "valuesByRank": {
              "r1": 1.33,
              "r9": 2.4,
              "spec1": 2.6,
              "spec2": 2.8,
              "spec3": 3.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:nature",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "寒夜の影",
    "recommendedWeapons": [
      "寒夜の影",
      "破壊ユニット"
    ],
    "normalAttack": {
      "name": "荒原の狩猟",
      "damageType": "自然",
      "damageTypeDetail": "自然",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[21%/25%/38%/42%/56%]→R9[37%/45%/68%/76%/100%]→特化III[46%/56%/86%/95%/125%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク17 / 終撃時SP回復",
      "description": "最大5段の攻撃で、敵に自然ダメージを与える。重攻撃はブレイク値17を与える。（※自然付着なし）",
      "raw": "最大5段の攻撃で、敵に自然ダメージを与える。重攻撃はブレイク値17を与える。（※自然付着なし）"
    },
    "talents": [
      {
        "id": "talent_typhoeus_1",
        "name": "獲物のチェック",
        "description": "敵が自然爆発を受けるたび啓示+1(上限8)。猟矢を消費して強化された攻撃はダメージが1.2倍→1.4倍→1.6倍までアップ。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_typhoeus_talent1_multiplier",
            "name": "獲物のチェック",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "猟矢を消費して強化された攻撃のダメージ倍率乗算: 1.2倍(初期) → 1.4倍(昇進1) → 1.6倍(昇進2)までアップ",
            "condition": "自然爆発発生毎に啓示+1(上限8・戦闘開始時1→2→4獲得) / 猟矢(上限4本)を消費して強化された攻撃時"
          },
          {
            "id": "buff_typhoeus_talent1_aux",
            "name": "獲物のチェック",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "戦闘開始時啓示獲得(1→2→4) / 自然爆発毎に啓示+1",
            "condition": "自然爆発発生毎に啓示+1(上限8・戦闘開始時1→2→4獲得) / 猟矢(上限4本)を消費して強化された攻撃時"
          }
        ]
      },
      {
        "id": "talent_typhoeus_2",
        "name": "狩人の集中力",
        "description": "浮遊状態中、中断耐性と被ダメージ-15%→-30%の防御シールドを獲得する。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_typhoeus_talent2_aux",
            "name": "狩人の集中力",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 30.0,
            "description": "中断耐性アップ＆受けるダメージ-15%(昇進1) → -30%(昇進2)の防御シールド獲得",
            "condition": "浮遊状態中(被弾破壊後の再発動CD: 30秒→18秒、1凸で-3秒)"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "ティフォロス 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【自然付着消費＆強制自然爆発】自身は自然付着を付与せず、味方が付与した自然付着を空中射撃毎に1段階消費して啓示+1＆必殺チャージ+12を得る。猟矢消費(または操作中5段目)の「強化射撃」は4段階蓄積を待たずに強制的に自然爆発を発生させ、付着消費時はその自然爆発ダメージを1.3倍(5凸で×1.1倍)に乗算強化する。"
    },
    "recommendedArmorSet": "set_volcano",
    "recommendedArmorSetName": "火山用セット",
    "recommendedArmor": {
      "armorSet": "set_volcano",
      "body": "gold_body_e781abe5b1b1e79_30",
      "arm": "gold_arms_e781abe5b1b1e79_28",
      "acc1": "gold_accessories_e781abe5b1b1e79_37",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_wulfgard",
    "name": "ウルフガード",
    "icon": "image/wulfgard.png",
    "rarity": 5,
    "element": "灼熱",
    "weaponType": "拳銃",
    "class": "術師",
    "mainStat": "知性",
    "subStat": "敏捷",
    "baseStats": {
      "hp": 5900,
      "atk": 810,
      "strength": 100,
      "agility": 160,
      "intellect": 245,
      "willpower": 95,
      "artsIntensity": 65,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "筋力+15・敏捷+15",
        "target": "others",
        "targetLabel": "自分以外の味方バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "素質2SP返還+10",
        "target": "others",
        "targetLabel": "自分以外の味方バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "灼熱の牙延長＆他味方に50%分灼熱ダメUP付与",
        "target": "others",
        "targetLabel": "自分以外の味方バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "必殺消費-15%",
        "target": "others",
        "targetLabel": "自分以外の味方バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "必殺時連携CDリセット",
        "target": "others",
        "targetLabel": "自分以外の味方バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_wulfgard",
        "type": "skill",
        "name": "灼熱の弾痕",
        "shortName": "戦技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 1.84,
          "lv10_spec1": 1.9933,
          "lv11_spec2": 2.1467,
          "lv12_spec3": 2.3
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_wulfgard_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "基本連射灼熱ダメ: R1=102%→R9=184%→特化III=230% / 燃焼・感電消費時の追加射撃灼熱ダメ: R1=378%→R9=680%→特化III=850%",
            "condition": "SP消費100 / 通常時は最終撃で灼熱付着1段階 / 燃焼・感電中の敵には異常消費＋追加射撃に分岐",
            "effectType": "multiplier"
          },
          {
            "id": "buff_wulfgard_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "基本ブレイク値5＋追加射撃ブレイク値5(素質2で異常消費時SP返還)",
            "condition": "SP消費100 / 通常時は最終撃で灼熱付着1段階 / 燃焼・感電中の敵には異常消費＋追加射撃に分岐",
            "effectType": "crush"
          },
          {
            "id": "buff_wulfgard_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【状態条件による付着/異常消費排他分岐】目標が燃焼・感電でない時は「灼熱付着(1段階)」を付与するが、燃焼または感電状態の時は「灼熱付着を付与せず」そのアーツ異常を消費して850%(特化III)の追加射撃を行う。",
            "condition": "SP消費100 / 通常時は最終撃で灼熱付着1段階 / 燃焼・感電中の敵には異常消費＋追加射撃に分岐",
            "special": "【状態条件による付着/異常消費排他分岐】目標が燃焼・感電でない時は「灼熱付着(1段階)」を付与するが、燃焼または感電状態の時は「灼熱付着を付与せず」そのアーツ異常を消費して850%(特化III)の追加射撃を行う。",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "heat",
          "stacks": 1,
          "label": "🔥 灼熱付着 (+1段階)",
          "description": "灼熱付着(1段階 / ※敵が燃焼または感電状態でない場合のみ付与！)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "敵が燃焼または感電状態の場合、灼熱付着を付与せずその異常状態を消費して高倍率追加射撃を発動",
          "description": "敵が燃焼または感電状態の場合、灼熱付着を付与せずその異常状態を消費して高倍率追加射撃を発動"
        },
        "description": "連射で灼熱ダメージを与え最終撃で灼熱付着(1段階)を付与する。目標が燃焼または感電状態の場合、灼熱付着を付与する代わりにその異常状態を消費して強力な追加射撃(378%→850%)を行う。",
        "damageTypeDetail": "灼熱",
        "rawText": "連射で灼熱ダメージを与え最終撃で灼熱付着(1段階)を付与する。目標が燃焼または感電状態の場合、灼熱付着を付与する代わりにその異常状態を消費して強力な追加射撃(378%→850%)を行う。",
        "attachText": "灼熱付着(1段階 / ※敵が燃焼または感電状態でない場合のみ付与！)",
        "anomalyText": "敵が燃焼または感電状態の場合、灼熱付着を付与せずその異常状態を消費して高倍率追加射撃を発動",
        "special": "【状態条件による付着/異常消費排他分岐】目標が燃焼・感電でない時は「灼熱付着(1段階)」を付与するが、燃焼または感電状態の時は「灼熱付着を付与せず」そのアーツ異常を消費して850%(特化III)の追加射撃を行う。",
        "modifiers": [
          {
            "id": "mod_ウルフガード_skill_base",
            "name": "灼熱の弾痕 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.84,
            "valuesByRank": {
              "r1": 1.02,
              "r9": 1.84,
              "spec1": 1.9933,
              "spec2": 2.1467,
              "spec3": 2.3
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_wulfgard",
        "type": "combo",
        "name": "フラググレネード・β",
        "shortName": "連携技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 1.08,
          "lv10_spec1": 1.17,
          "lv11_spec2": 1.26,
          "lv12_spec3": 1.35
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_wulfgard_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "灼熱ダメ倍率: R1=60% → R9=108% → 特化III=135%",
            "condition": "敵がアーツ付着状態になった時発動可 / CD: R1=20秒→R9=20秒→特化III=19秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_wulfgard_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "ブレイク値10",
            "condition": "敵がアーツ付着状態になった時発動可 / CD: R1=20秒→R9=20秒→特化III=19秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "heat",
          "stacks": 1,
          "label": "🔥 灼熱付着 (+1段階)",
          "description": "灼熱付着(1段階)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "敵がアーツ付着状態になったときに発動可能。手榴弾を投擲して灼熱ダメージを与え、灼熱付着(1段階)を付与する。",
        "damageTypeDetail": "灼熱",
        "rawText": "敵がアーツ付着状態になったときに発動可能。手榴弾を投擲して灼熱ダメージを与え、灼熱付着(1段階)を付与する。",
        "attachText": "灼熱付着(1段階)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_ウルフガード_combo_base",
            "name": "フラググレネード・β 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.08,
            "valuesByRank": {
              "r1": 0.6,
              "r9": 1.08,
              "spec1": 1.17,
              "spec2": 1.26,
              "spec3": 1.35
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_wulfgard",
        "type": "ult",
        "name": "狼の怒り",
        "shortName": "必殺技",
        "damageType": "灼熱",
        "multipliers": {
          "lv9": 2.9,
          "lv10_spec1": 3.1333,
          "lv11_spec2": 3.3667,
          "lv12_spec3": 3.6
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_wulfgard_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "5回攻撃(1回毎): R1=32%→R9=58%→特化III=72%(5ヒット合計: R1=160%→R9=290%→特化III=360%)",
            "condition": "必殺チャージ消費90(4凸76.5) / 5ヒット連続攻撃",
            "effectType": "multiplier"
          },
          {
            "id": "buff_wulfgard_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値15 / 強制燃焼付与(素質1「灼熱の牙」を即座にトリガー)",
            "condition": "必殺チャージ消費90(4凸76.5) / 5ヒット連続攻撃",
            "effectType": "crush"
          }
        ],
        "epCost": 90,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "強制的に燃焼状態を付与(※灼熱付着は付与しない！)",
          "description": "強制的に燃焼状態を付与(※灼熱付着は付与しない！)"
        },
        "description": "周囲に弾幕を放ち5回の灼熱ダメージを与え、目標を強制的に燃焼状態にする。（※灼熱付着は付与しない）",
        "damageTypeDetail": "灼熱",
        "rawText": "周囲に弾幕を放ち5回の灼熱ダメージを与え、目標を強制的に燃焼状態にする。（※灼熱付着は付与しない）",
        "attachText": "なし",
        "anomalyText": "強制的に燃焼状態を付与(※灼熱付着は付与しない！)",
        "modifiers": [
          {
            "id": "mod_ウルフガード_ult_base",
            "name": "狼の怒り 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.9,
            "valuesByRank": {
              "r1": 1.6,
              "r9": 2.9,
              "spec1": 3.1333,
              "spec2": 3.3667,
              "spec3": 3.6
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:heat",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "合理的決別",
    "recommendedWeapons": [
      "合理的決別",
      "望郷"
    ],
    "normalAttack": {
      "name": "多重連射",
      "damageType": "灼熱",
      "damageTypeDetail": "灼熱",
      "attach": "なし",
      "multipliers": "通常1〜4段: R1[30%/35%/56%/68%]→R9[54%/63%/100%/122%]→特化III[68%/79%/125%/152%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク18 / 終撃時SP回復",
      "description": "最大4段の射撃で、敵に灼熱ダメージを与える。重攻撃はブレイク値18を与える。（※灼熱付着なし）",
      "raw": "最大4段の射撃で、敵に灼熱ダメージを与える。重攻撃はブレイク値18を与える。（※灼熱付着なし）"
    },
    "talents": [
      {
        "id": "talent_wulfgard_1",
        "name": "灼熱の牙",
        "description": "敵に燃焼状態を付与したとき、10秒間自身の灼熱ダメージ+20%→+30%(重ね掛け不可)。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_wulfgard_talent1_damage_up",
            "name": "灼熱の牙",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "damage_up",
            "calcGroupLabel": "【ダメージUP補正】与ダメUP",
            "value": 0,
            "duration": 10.0,
            "description": "自身の灼熱ダメージ+20%(昇進1) → +30%(昇進2)(3凸で戦技追加射撃発動時に他味方全員にも半分の+10%→+15%付与)",
            "condition": "自身が敵に燃焼状態を付与した時 / 持続10秒 / 重ね掛け不可(3凸で他味方にも波及)"
          }
        ]
      },
      {
        "id": "talent_wulfgard_2",
        "name": "節制規則",
        "description": "戦技でアーツ異常を消費したとき、SPを5→10返還する。",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_wulfgard_talent2_aux",
            "name": "節制規則",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "SP返還: +5(昇進1) → +10(昇進2)(2凸でさらに+10＝計SP20返還)",
            "condition": "戦技「灼熱の弾痕」でアーツ異常(燃焼・感電)を消費した時"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "ウルフガード 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【状態条件による付着/異常消費排他分岐】目標が燃焼・感電でない時は「灼熱付着(1段階)」を付与するが、燃焼または感電状態の時は「灼熱付着を付与せず」そのアーツ異常を消費して850%(特化III)の追加射撃を行う。"
    },
    "recommendedArmorSet": "set_volcano",
    "recommendedArmorSetName": "火山用セット",
    "recommendedArmor": {
      "armorSet": "set_volcano",
      "body": "gold_body_e781abe5b1b1e79_31",
      "arm": "gold_arms_e781abe5b1b1e79_29",
      "acc1": "gold_accessories_e781abe5b1b1e79_36",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_xaihi",
    "name": "ザイヒ",
    "icon": "image/xaihi.png",
    "rarity": 5,
    "element": "寒冷",
    "weaponType": "アーツユニット",
    "class": "補助",
    "mainStat": "知性",
    "subStat": "意志",
    "baseStats": {
      "hp": 5900,
      "atk": 810,
      "strength": 100,
      "agility": 95,
      "intellect": 245,
      "willpower": 160,
      "artsIntensity": 65,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 4,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "戦技アーツ増幅+5%",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "必殺消費-10%",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "連携1体連鎖",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "知性+15・回復効率+10%",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "必殺増幅効果1.1倍",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_xaihi",
        "type": "skill",
        "name": "DDoS",
        "shortName": "戦技",
        "damageType": "なし",
        "multipliers": {
          "lv9": 3.6,
          "lv10_spec1": 3.95,
          "lv11_spec2": 4.35,
          "lv12_spec3": 4.8
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_xaihi_skill_amp",
            "name": "HP満タン単体アーツ増幅",
            "target": "single",
            "targetLabel": "単体バフ",
            "category": "buff",
            "calcGroup": "amp",
            "calcGroupLabel": "【増幅補正】増幅",
            "value": 15,
            "duration": 25.0,
            "description": "HP満タン時の操作キャラ単体に25秒間アーツ増幅: R1=+9% → R9=+13% → 特化III=+15%(1凸で+5%加算＝+20%)",
            "condition": "SP消費100 / 操作キャラ周囲にサポートクリスタル展開(20秒・重攻撃時HP回復最大2回) / 回復時に操作キャラのHPが満タンなら25秒間アーツ増幅付与(重ね掛け不可)",
            "effectType": "buff"
          },
          {
            "id": "buff_xaihi_skill_aux",
            "name": "重攻撃時HP回復",
            "target": "single",
            "targetLabel": "単体回復",
            "category": "heal",
            "calcGroup": "heal",
            "calcGroupLabel": "【補助・耐久・リソース】(単体回復)",
            "value": 0,
            "duration": 20.0,
            "description": "操作キャラ重攻撃時にHP回復(最大2回): R1[144+意志×0.34]→R9[302+意志×0.71]→特化III[324+意志×0.76]",
            "condition": "SP消費100 / 操作キャラ周囲にサポートクリスタル展開(20秒・重攻撃時HP回復最大2回) / 回復時に操作キャラのHPが満タンなら25秒間アーツ増幅付与(重ね掛け不可)",
            "effectType": "heal"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "操作オペレーターの周囲にサポートクリスタルを生成(20秒)。操作オペレーターが重攻撃を行うとHPを回復する(最大2回)。回復発動時にそのオペレーターのHPが満タンの場合、25秒間アーツ増幅(9%→15%)を付与する。（※ダメージ・付着なし）",
        "damageTypeDetail": "なし",
        "rawText": "操作オペレーターの周囲にサポートクリスタルを生成(20秒)。操作オペレーターが重攻撃を行うとHPを回復する(最大2回)。回復発動時にそのオペレーターのHPが満タンの場合、25秒間アーツ増幅(9%→15%)を付与する。（※ダメージ・付着なし）",
        "attachText": "なし",
        "anomalyText": "なし"
      },
      {
        "id": "combo_xaihi",
        "type": "combo",
        "name": "ストレステスト",
        "shortName": "連携技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 3.6,
          "lv10_spec1": 3.9,
          "lv11_spec2": 4.2,
          "lv12_spec3": 4.5
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_xaihi_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 8.0,
            "description": "寒冷ダメ倍率: R1=200% → R9=360% → 特化III=450%(3凸で周囲別敵1体にも連鎖)",
            "condition": "サポートクリスタルの回復回数がすべて消費された(0になった)時発動可 / CD: R1=8秒→R9=8秒→特化III=7秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_xaihi_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 8.0,
            "description": "ブレイク値10",
            "condition": "サポートクリスタルの回復回数がすべて消費された(0になった)時発動可 / CD: R1=8秒→R9=8秒→特化III=7秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "cryo",
          "stacks": 1,
          "label": "❄️ 寒冷付着 (+1段階)",
          "description": "寒冷付着(1段階)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "サポートクリスタルの回復回数が0になったときに発動可能。敵にクリスタルを投げつけ寒冷ダメージを与え、寒冷付着(1段階)を付与する。",
        "damageTypeDetail": "寒冷",
        "rawText": "サポートクリスタルの回復回数が0になったときに発動可能。敵にクリスタルを投げつけ寒冷ダメージを与え、寒冷付着(1段階)を付与する。",
        "attachText": "寒冷付着(1段階)",
        "anomalyText": "なし",
        "modifiers": [
          {
            "id": "mod_ザイヒ_combo_base",
            "name": "ストレステスト 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 3.6,
            "valuesByRank": {
              "r1": 2.0,
              "r9": 3.6,
              "spec1": 3.9,
              "spec2": 4.2,
              "spec3": 4.5
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_xaihi",
        "type": "ult",
        "name": "スタックオーバーフロー",
        "shortName": "必殺技",
        "damageType": "なし",
        "multipliers": {
          "lv9": 7.2,
          "lv10_spec1": 7.85,
          "lv11_spec2": 8.6,
          "lv12_spec3": 9.5
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_xaihi_ult_amp",
            "name": "知性連動 チーム寒冷・自然増幅",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "amp",
            "calcGroupLabel": "【増幅補正】増幅",
            "value": 36,
            "duration": 12.0,
            "description": "チーム全員に12秒間 寒冷増幅 & 自然増幅: 基礎[R1=11%→R9=19%→特化III=24%] ＋ 知性1につき[R1=+0.014%→R9=+0.024%→特化III=+0.03%](知性上限込み最大: 昇進1上限30% → 特化III上限36%、5凸で1.1倍＝最大39.6%)",
            "condition": "必殺チャージ消費80(2凸72) / CD20秒 / 持続12秒(知性スケーリング上限あり)",
            "effectType": "buff"
          },
          {
            "id": "buff_xaihi_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "素質2連動でチーム全員の寒冷付着・凍結状態を浄化",
            "condition": "必殺チャージ消費80(2凸72) / CD20秒 / 持続12秒(知性スケーリング上限あり)",
            "effectType": "crush"
          }
        ],
        "epCost": 80,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "12秒間チーム全員に寒冷増幅と自然増幅を付与する(基礎11%→24%＋知性に応じた追加増幅、特化IIIで最大36%)。（※ダメージ・付着なし）",
        "damageTypeDetail": "なし",
        "rawText": "12秒間チーム全員に寒冷増幅と自然増幅を付与する(基礎11%→24%＋知性に応じた追加増幅、特化IIIで最大36%)。（※ダメージ・付着なし）",
        "attachText": "なし",
        "anomalyText": "なし"
      }
    ],
    "motifWeapon": "布教の自由",
    "recommendedWeapons": [
      "布教の自由",
      "破壊ユニット"
    ],
    "normalAttack": {
      "name": "クールダウン",
      "damageType": "寒冷",
      "damageTypeDetail": "寒冷",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[15%/16%/21%/33%/55%]→R9[27%/29%/38%/59%/99%]→特化III[34%/36%/47%/74%/124%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク15 / 終撃時SP回復",
      "description": "最大5段の攻撃で、敵に寒冷ダメージを与える。重攻撃はブレイク値15を与える。（※寒冷付着なし）",
      "raw": "最大5段の攻撃で、敵に寒冷ダメージを与える。重攻撃はブレイク値15を与える。（※寒冷付着なし）"
    },
    "talents": [
      {
        "id": "talent_xaihi_1",
        "name": "エグゼキュートプロセス",
        "description": "連携技が命中したとき、対象がすでに寒冷付着または凍結状態であれば、5秒間その敵が受ける寒冷ダメージ+7%→+10%(重ね掛け不可)。",
        "target": "enemy",
        "targetLabel": "敵デバフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_xaihi_talent1_taken_damage_up",
            "name": "エグゼキュートプロセス",
            "target": "enemy",
            "targetLabel": "敵デバフ",
            "category": "debuff",
            "calcGroup": "taken_damage_up",
            "calcGroupLabel": "【被ダメージ補正】敵被ダメUP",
            "value": 0,
            "duration": 5.0,
            "description": "その敵が受ける寒冷ダメージ+7%(昇進1) → +10%(昇進2)",
            "condition": "連携技「ストレステスト」命中時、対象がすでに寒冷付着または凍結状態の場合 / 持続5秒 / 重ね掛け不可"
          }
        ]
      },
      {
        "id": "talent_xaihi_2",
        "name": "フリーズプロトコル",
        "description": "必殺技発動時、追加でチーム全員の寒冷付着と凍結状態を浄化する。",
        "target": "team",
        "targetLabel": "全体バフ",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_xaihi_talent2_aux",
            "name": "フリーズプロトコル",
            "target": "team",
            "targetLabel": "全体バフ",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "チーム全員の寒冷付着および凍結状態を浄化(解除)する",
            "condition": "必殺技発動時"
          }
        ]
      }
    ],
    "recommendedArmorSet": "none",
    "recommendedArmorSetName": "セットなし（知性特化）",
    "recommendedArmor": {
      "armorSet": "none",
      "body": "gold_body_e69591e59bbde99_57",
      "arm": "gold_arms_e6b581e8bba2e38_13",
      "acc1": "gold_accessories_e69591e59bbde58_73",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_yvonne",
    "name": "イヴォンヌ",
    "icon": "image/yvonne.png",
    "rarity": 6,
    "element": "寒冷",
    "weaponType": "拳銃",
    "class": "突撃",
    "mainStat": "敏捷",
    "subStat": "筋力",
    "baseStats": {
      "hp": 7300,
      "atk": 920,
      "strength": 185,
      "agility": 285,
      "intellect": 120,
      "willpower": 110,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "連携範囲+20%・放出+2回・必殺チャージ+15",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "知性+20・会心率+7%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "素質2会心ダメ+10%(凍結時+20%)",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "戦技単体命中SP10返還",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "必殺中攻撃力+10%・会心ダメ+30%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_yvonne",
        "type": "skill",
        "name": "ひえひえビーム・β型",
        "shortName": "戦技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 2.0,
          "lv10_spec1": 2.1667,
          "lv11_spec2": 2.3333,
          "lv12_spec3": 2.5
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_yvonne_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 0.0,
            "description": "爆発寒冷ダメ: R1=111%→R9=200%→特化III=250% / 強制凍結発動時追加ダメ: R1=67%→R9=120%→特化III=150% ＋ 消費した付着1段階毎追加ダメ: R1=+89%→R9=+160%→特化III=+200%",
            "condition": "SP消費100(4凸で1体のみ命中時SP10返還) / 寒冷・自然付着全消費時に追加ダメ＆大量必殺チャージ回復",
            "effectType": "multiplier"
          },
          {
            "id": "buff_yvonne_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 0.0,
            "description": "ブレイク値10 / 強制凍結成功時に必殺チャージ回復: [基礎10 ＋ 消費した付着1段階につき+30](1回の戦技につき1回のみ発動、4段階消費なら130回復！)",
            "condition": "SP消費100(4凸で1体のみ命中時SP10返還) / 寒冷・自然付着全消費時に追加ダメ＆大量必殺チャージ回復",
            "effectType": "crush"
          },
          {
            "id": "buff_yvonne_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 0.0,
            "description": "【寒冷/自然付着全消費→強制凍結＆超高速必殺チャージ】自身は寒冷付着を持たず、味方が付与した寒冷付着または自然付着を全段階消費して強制凍結に変換し、消費段階×30＋10の必殺チャージを獲得する。",
            "condition": "SP消費100(4凸で1体のみ命中時SP10返還) / 寒冷・自然付着全消費時に追加ダメ＆大量必殺チャージ回復",
            "special": "【寒冷/自然付着全消費→強制凍結＆超高速必殺チャージ】自身は寒冷付着を持たず、味方が付与した寒冷付着または自然付着を全段階消費して強制凍結に変換し、消費段階×30＋10の必殺チャージを獲得する。",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "寒冷付着または自然付着状態の敵に命中時、アーツ付着を全消費して強制的に凍結状態にする！",
          "description": "寒冷付着または自然付着状態の敵に命中時、アーツ付着を全消費して強制的に凍結状態にする！"
        },
        "description": "冷気爆弾を放ち寒冷ダメージを与える。命中した敵が寒冷付着または自然付着状態の場合、その付着をすべて消費して強制的に凍結状態にし、消費段階数に応じた追加寒冷ダメージを与え必殺チャージ(10+30×消費段階)を回復する。（※寒冷付着は付与しない）",
        "damageTypeDetail": "寒冷",
        "rawText": "冷気爆弾を放ち寒冷ダメージを与える。命中した敵が寒冷付着または自然付着状態の場合、その付着をすべて消費して強制的に凍結状態にし、消費段階数に応じた追加寒冷ダメージを与え必殺チャージ(10+30×消費段階)を回復する。（※寒冷付着は付与しない）",
        "attachText": "なし",
        "anomalyText": "寒冷付着または自然付着状態の敵に命中時、アーツ付着を全消費して強制的に凍結状態にする！",
        "special": "【寒冷/自然付着全消費→強制凍結＆超高速必殺チャージ】自身は寒冷付着を持たず、味方が付与した寒冷付着または自然付着を全段階消費して強制凍結に変換し、消費段階×30＋10の必殺チャージを獲得する。",
        "modifiers": [
          {
            "id": "mod_イヴォンヌ_skill_base",
            "name": "ひえひえビーム・β型 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.0,
            "valuesByRank": {
              "r1": 1.11,
              "r9": 2.0,
              "spec1": 2.1667,
              "spec2": 2.3333,
              "spec3": 2.5
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:cryo",
              "cond:always"
            ]
          },
          {
            "id": "mod_イヴォンヌ_skill_additional",
            "name": "ひえひえビーム・β型 条件追加ダメージ",
            "calcGroup": "skill_multiplier",
            "value": 1.2,
            "valuesByRank": {
              "r9": 1.2,
              "spec3": 1.5
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:cryo",
              "cond:trigger"
            ]
          }
        ]
      },
      {
        "id": "combo_yvonne",
        "type": "combo",
        "name": "アイスちゃん・υ37",
        "shortName": "連携技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 0.8,
          "lv10_spec1": 0.8667,
          "lv11_spec2": 0.9333,
          "lv12_spec3": 1.0
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_yvonne_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 20.0,
            "description": "エネルギー放出4回(1凸6回)各回: R1=45%→R9=80%→特化III=100% / 3秒後自爆寒冷ダメ: R1=89%→R9=160%→特化III=200%",
            "condition": "凍結状態の敵に対して操作キャラが重攻撃を行った時発動可 / CD: R1=20秒→R9=19秒→特化III=18秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_yvonne_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 20.0,
            "description": "自爆ブレイク値10 / 必殺チャージ+10回復(1凸で+15追加＝計25回復) / 周囲牽引＋強制凍結付与",
            "condition": "凍結状態の敵に対して操作キャラが重攻撃を行った時発動可 / CD: R1=20秒→R9=19秒→特化III=18秒",
            "effectType": "crush"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "牽引＋3秒後の自爆で強制的に凍結状態を付与(※寒冷付着は付与しない！)",
          "description": "牽引＋3秒後の自爆で強制的に凍結状態を付与(※寒冷付着は付与しない！)"
        },
        "description": "凍結状態の敵に操作オペレーターが重攻撃を行ったときに発動可能。アイスちゃんを設置して敵を牽引しつつ4回寒冷ダメージを与え、3秒後に自爆して寒冷ダメージを与え強制的に凍結状態にする。（※寒冷付着は付与しない）",
        "damageTypeDetail": "寒冷",
        "rawText": "凍結状態の敵に操作オペレーターが重攻撃を行ったときに発動可能。アイスちゃんを設置して敵を牽引しつつ4回寒冷ダメージを与え、3秒後に自爆して寒冷ダメージを与え強制的に凍結状態にする。（※寒冷付着は付与しない）",
        "attachText": "なし",
        "anomalyText": "牽引＋3秒後の自爆で強制的に凍結状態を付与(※寒冷付着は付与しない！)",
        "modifiers": [
          {
            "id": "mod_イヴォンヌ_combo_base",
            "name": "アイスちゃん・υ37 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.8,
            "valuesByRank": {
              "r1": 0.45,
              "r9": 0.8,
              "spec1": 0.8667,
              "spec2": 0.9333,
              "spec3": 1.0
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:cryo",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_yvonne",
        "type": "ult",
        "name": "アイスシューター",
        "shortName": "必殺技",
        "damageType": "寒冷",
        "multipliers": {
          "lv9": 0.16,
          "lv10_spec1": 0.1733,
          "lv11_spec2": 0.1867,
          "lv12_spec3": 0.2
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_yvonne_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 7.0,
            "description": "強化通常連射1発毎: R1=8.9%→R9=16%→特化III=20% / 最終強攻撃(重攻撃): R1=133%→R9=240%→特化III=300% / 凍結消費時の追加寒冷ダメ: R1=267%→R9=480%→特化III=600%",
            "condition": "必殺チャージ消費220 / 持続7秒 / 自身が操作キャラへ切替・通常攻撃高速連射化＆スタック会心バフ",
            "effectType": "multiplier"
          },
          {
            "id": "buff_yvonne_ult_crit",
            "name": "スタック式会心率＆会心ダメUP",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "crit",
            "calcGroupLabel": "【会心補正】会心率/ダメ",
            "value": 0,
            "duration": 7.0,
            "description": "通常攻撃毎に自身の会心率+3%(最大10段階＝会心率+30%)、最大(10段階)到達時にさらに会心ダメージ+60%(5凸で期間中さらに会心ダメ+30%)",
            "condition": "必殺チャージ消費220 / 持続7秒 / 自身が操作キャラへ切替・通常攻撃高速連射化＆スタック会心バフ",
            "effectType": "buff"
          },
          {
            "id": "buff_yvonne_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 7.0,
            "description": "最終強攻撃ブレイク値20 / 発動時イヴォンヌが操作オペレーターに切り替わる",
            "condition": "必殺チャージ消費220 / 持続7秒 / 自身が操作キャラへ切替・通常攻撃高速連射化＆スタック会心バフ",
            "effectType": "crush"
          }
        ],
        "epCost": 80,
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "終了前の最終強攻撃命中時、敵が凍結状態なら凍結を消費して高倍率追加寒冷ダメージ！",
          "description": "終了前の最終強攻撃命中時、敵が凍結状態なら凍結を消費して高倍率追加寒冷ダメージ！"
        },
        "description": "7秒間イヴォンヌが操作オペレーターとなり通常攻撃が高速連射に変化する。攻撃するたび会心率+3%(最大10層=+30%)、最大層で会心ダメージ+60%。終了前に重攻撃(300%)を放ち、敵が凍結状態なら凍結を消費して追加寒冷ダメージ(600%)を与える。（※寒冷付着なし）",
        "damageTypeDetail": "寒冷",
        "rawText": "7秒間イヴォンヌが操作オペレーターとなり通常攻撃が高速連射に変化する。攻撃するたび会心率+3%(最大10層=+30%)、最大層で会心ダメージ+60%。終了前に重攻撃(300%)を放ち、敵が凍結状態なら凍結を消費して追加寒冷ダメージ(600%)を与える。（※寒冷付着なし）",
        "attachText": "なし",
        "anomalyText": "終了前の最終強攻撃命中時、敵が凍結状態なら凍結を消費して高倍率追加寒冷ダメージ！",
        "modifiers": [
          {
            "id": "mod_イヴォンヌ_ult_base",
            "name": "アイスシューター 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.16,
            "valuesByRank": {
              "r1": 0.08900000000000001,
              "r9": 0.16,
              "spec1": 0.1733,
              "spec2": 0.1867,
              "spec3": 0.2
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:cryo",
              "cond:always"
            ]
          },
          {
            "id": "mod_イヴォンヌ_ult_additional",
            "name": "アイスシューター 条件追加ダメージ",
            "calcGroup": "skill_multiplier",
            "value": 4.8,
            "valuesByRank": {
              "r9": 4.8,
              "spec3": 6.0
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:cryo",
              "cond:trigger"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "芸術の独裁者",
    "recommendedWeapons": [
      "芸術の独裁者",
      "楔"
    ],
    "normalAttack": {
      "name": "超絶トリガー",
      "damageType": "寒冷",
      "damageTypeDetail": "寒冷",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[24%/25%/32%/41%/56%]→R9[42%/45%/57%/74%/101%]→特化III[53%/56%/71%/92%/126%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク17 / 終撃時SP回復",
      "description": "最大5段の射撃で、敵に寒冷ダメージを与える。重攻撃はブレイク値17を与える。（※寒冷付着なし）",
      "raw": "最大5段の射撃で、敵に寒冷ダメージを与える。重攻撃はブレイク値17を与える。（※寒冷付着なし）"
    },
    "talents": [
      {
        "id": "talent_yvonne_1",
        "name": "ハイテクバースト",
        "description": "戦技で敵に凍結を付与したとき、次の通常攻撃が重攻撃になり与えるダメージ+50%。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_yvonne_talent1_damage_up",
            "name": "ハイテクバースト",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "damage_up",
            "calcGroupLabel": "【ダメージUP補正】与ダメUP",
            "value": 0,
            "duration": 0.0,
            "description": "次の通常攻撃が即座に重攻撃(最終段)に変化し、そのダメージ+50%(昇進2)",
            "condition": "戦技で敵を凍結状態にした時(次の通常攻撃1回のみ)"
          }
        ]
      },
      {
        "id": "talent_yvonne_2",
        "name": "氷点",
        "description": "寒冷付着状態の敵に対する会心ダメージ+10%→+20%、凍結状態の敵に対しては効果が2倍(+20%→+40%)になる。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_yvonne_talent2_crit",
            "name": "氷点",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "crit",
            "calcGroupLabel": "【会心補正】会心率/ダメ",
            "value": 0,
            "duration": 0.0,
            "description": "寒冷付着状態の敵に対する会心ダメージ+10%(昇進1)→+20%(昇進2)(3凸+30%) / 凍結状態の敵に対しては効果2倍＝会心ダメージ+20%(昇進1)→+40%(昇進2)(3凸+60%)",
            "condition": "寒冷付着状態または凍結状態の敵に対する攻撃時"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "イヴォンヌ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【寒冷/自然付着全消費→強制凍結＆超高速必殺チャージ】自身は寒冷付着を持たず、味方が付与した寒冷付着または自然付着を全段階消費して強制凍結に変換し、消費段階×30＋10の必殺チャージを獲得する。"
    },
    "recommendedArmorSet": "set_mi_security",
    "recommendedArmorSetName": "M.I.警備セット",
    "recommendedArmor": {
      "armorSet": "set_mi_security",
      "body": "gold_body_mie8ada6e58299e_25",
      "arm": "gold_arms_mie8ada6e58299e_22",
      "acc1": "gold_accessories_mie8ada6e58299e_31",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  },
  {
    "$schema": "../../schemas/character.schema.json",
    "id": "char_zhuang",
    "name": "ゾアン・ファンイ",
    "icon": "image/zhuang.png",
    "rarity": 6,
    "element": "電磁",
    "weaponType": "アーツユニット",
    "class": "突撃",
    "mainStat": "敏捷",
    "subStat": "筋力",
    "baseStats": {
      "hp": 7300,
      "atk": 920,
      "strength": 185,
      "agility": 285,
      "intellect": 120,
      "willpower": 110,
      "artsIntensity": 80,
      "critRate": 0.05,
      "critDamage": 0.5
    },
    "defaultEfficiency": 100.0,
    "defaultPotential": 0,
    "baseRefundSP": 0,
    "baseRecoverSP": 0,
    "potentials": [
      {
        "level": 1,
        "type": "potential_1",
        "name": "潜在1段階",
        "description": "戦技倍率1.15倍・初回戦技蒼雷剣+1",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 2,
        "type": "potential_2",
        "name": "潜在2段階",
        "description": "意志+20・戦技ダメ+15%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 3,
        "type": "potential_3",
        "name": "潜在3段階",
        "description": "感電消費時SP10返還・蒼雷剣持続+10秒",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 4,
        "type": "potential_4",
        "name": "潜在4段階",
        "description": "必殺消費-15%",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      },
      {
        "level": 5,
        "type": "potential_5",
        "name": "潜在5段階",
        "description": "理の境中電磁耐性15無視",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "potential",
        "calcGroupLabel": "潜在能力"
      }
    ],
    "skills": [
      {
        "id": "skill_zhuang",
        "type": "skill",
        "name": "驚雷訣",
        "shortName": "戦技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 0.36,
          "lv10_spec1": 0.39,
          "lv11_spec2": 0.42,
          "lv12_spec3": 0.45
        },
        "hitCount": 3,
        "buffs": [
          {
            "id": "buff_zhuang_skill_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 36.0,
            "description": "雷撃1本毎倍率(最後の1本はダメージ6倍！・1凸で戦技全体1.15倍): 通常時[R1=20%→R9=36%→特化III=45%]＋感電消費1段階毎[R1=+3%→R9=+6%→特化III=+9%] / 理の境(必殺)中[R1=36%→R9=65%→特化III=81%]＋感電消費1段階毎[R1=+8%→R9=+15%→特化III=+18%]",
            "condition": "SP消費100(3凸で感電消費時SP10返還) / 蒼雷剣を[消費感電段階+1]本生成(1回最大3本、既存3本未満なら非消費でも1本生成、上限9本・持続36秒)し全剣で雷撃(最終弾6倍！)",
            "effectType": "multiplier"
          },
          {
            "id": "buff_zhuang_skill_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 36.0,
            "description": "総ブレイク値15 / 雷撃を放った蒼雷剣1本につき必殺チャージ+6回復",
            "condition": "SP消費100(3凸で感電消費時SP10返還) / 蒼雷剣を[消費感電段階+1]本生成(1回最大3本、既存3本未満なら非消費でも1本生成、上限9本・持続36秒)し全剣で雷撃(最終弾6倍！)",
            "effectType": "crush"
          },
          {
            "id": "buff_zhuang_skill_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 36.0,
            "description": "【蒼雷剣ストック＆必殺中限定付着】①通常時は感電を消費するだけで電磁付着は付与しないが、必殺技「理の境」中のみ最後の雷撃で「電磁付着(1段階)」を付与する。②戦場の蒼雷剣(上限9本)すべてが順次雷撃を放ち、最後の1本の雷撃倍率が6倍になる。",
            "condition": "SP消費100(3凸で感電消費時SP10返還) / 蒼雷剣を[消費感電段階+1]本生成(1回最大3本、既存3本未満なら非消費でも1本生成、上限9本・持続36秒)し全剣で雷撃(最終弾6倍！)",
            "special": "【蒼雷剣ストック＆必殺中限定付着】①通常時は感電を消費するだけで電磁付着は付与しないが、必殺技「理の境」中のみ最後の雷撃で「電磁付着(1段階)」を付与する。②戦場の蒼雷剣(上限9本)すべてが順次雷撃を放ち、最後の1本の雷撃倍率が6倍になる。",
            "effectType": "special"
          }
        ],
        "spCost": 100,
        "infliction": {
          "type": "electric",
          "stacks": 1,
          "label": "【限定】必殺技期間中のみ通常時はなし / ※必殺技「理の境」持続中のみ最後の雷撃命中時に電磁付着(1段階)を付与！",
          "description": "通常時はなし / ※必殺技「理の境」持続中のみ最後の雷撃命中時に電磁付着(1段階)を付与！"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "目標の感電状態を消費(※理の境中の初回戦技は感電・SPを消費せず蒼雷剣3本生成)",
          "description": "目標の感電状態を消費(※理の境中の初回戦技は感電・SPを消費せず蒼雷剣3本生成)"
        },
        "description": "目標の感電状態を消費し[消費段階+1]本の蒼雷剣を生成(1回最大3本・上限9本・持続36秒)。付近の全蒼雷剣が順に雷撃を放ち(1本毎必殺チャージ+6)、最後の雷撃は6倍のダメージを与える。必殺技「理の境」期間中のみ最後の雷撃命中時に電磁付着(1段階)を付与する。",
        "damageTypeDetail": "電磁",
        "rawText": "目標の感電状態を消費し[消費段階+1]本の蒼雷剣を生成(1回最大3本・上限9本・持続36秒)。付近の全蒼雷剣が順に雷撃を放ち(1本毎必殺チャージ+6)、最後の雷撃は6倍のダメージを与える。必殺技「理の境」期間中のみ最後の雷撃命中時に電磁付着(1段階)を付与する。",
        "attachText": "通常時はなし / ※必殺技「理の境」持続中のみ最後の雷撃命中時に電磁付着(1段階)を付与！",
        "anomalyText": "目標の感電状態を消費(※理の境中の初回戦技は感電・SPを消費せず蒼雷剣3本生成)",
        "special": "【蒼雷剣ストック＆必殺中限定付着】①通常時は感電を消費するだけで電磁付着は付与しないが、必殺技「理の境」中のみ最後の雷撃で「電磁付着(1段階)」を付与する。②戦場の蒼雷剣(上限9本)すべてが順次雷撃を放ち、最後の1本の雷撃倍率が6倍になる。",
        "modifiers": [
          {
            "id": "mod_ゾアン・ファンイ_skill_base",
            "name": "驚雷訣 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 0.36,
            "valuesByRank": {
              "r1": 0.2,
              "r9": 0.36,
              "spec1": 0.39,
              "spec2": 0.42,
              "spec3": 0.45
            },
            "tags": [
              "src:character",
              "action:skill",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "combo_zhuang",
        "type": "combo",
        "name": "一息万変",
        "shortName": "連携技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 2.88,
          "lv10_spec1": 3.12,
          "lv11_spec2": 3.36,
          "lv12_spec3": 3.6
        },
        "hitCount": 1,
        "buffs": [
          {
            "id": "buff_zhuang_combo_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 18.0,
            "description": "通常時電磁ダメ: R1=160%→R9=288%→特化III=360% / 理の境(必殺)中電磁ダメ: R1=240%→R9=432%→特化III=540%",
            "condition": "電磁付着状態の敵に重攻撃または終撃を行った時発動可(理の境中は範囲内発動可＆CD回復速度4倍) / CD: R1=18秒→R9=18秒→特化III=17秒",
            "effectType": "multiplier"
          },
          {
            "id": "buff_zhuang_combo_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 18.0,
            "description": "ブレイク値10 / 基礎必殺チャージ+10回復 ＋ 消費した電磁付着1段階につき必殺チャージ+10追加回復",
            "condition": "電磁付着状態の敵に重攻撃または終撃を行った時発動可(理の境中は範囲内発動可＆CD回復速度4倍) / CD: R1=18秒→R9=18秒→特化III=17秒",
            "effectType": "crush"
          },
          {
            "id": "buff_zhuang_combo_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 18.0,
            "description": "【電磁付着消費→強制感電＆感電段階加算】電磁付着を消費して強制感電にし、対象がすでに感電状態だった場合は感電の異常段階を+1引き上げる。",
            "condition": "電磁付着状態の敵に重攻撃または終撃を行った時発動可(理の境中は範囲内発動可＆CD回復速度4倍) / CD: R1=18秒→R9=18秒→特化III=17秒",
            "special": "【電磁付着消費→強制感電＆感電段階加算】電磁付着を消費して強制感電にし、対象がすでに感電状態だった場合は感電の異常段階を+1引き上げる。",
            "effectType": "special"
          }
        ],
        "infliction": {
          "type": "none",
          "stacks": 0,
          "label": "付着なし",
          "description": "アーツ付着効果はありません（※属性ダメージのみ）"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "電磁付着を全消費して強制的に感電状態にする(すでに感電中なら感電異常段階+1)！",
          "description": "電磁付着を全消費して強制的に感電状態にする(すでに感電中なら感電異常段階+1)！"
        },
        "description": "電磁付着状態の敵に重攻撃または終撃を行ったときに発動可能。敵に電磁ダメージを与え、電磁付着を消費して強制的に感電状態にする(すでに感電状態なら異常段階+1)。消費1段階ごとに必殺チャージを追加で10回復。（※電磁付着は付与しない）",
        "damageTypeDetail": "電磁",
        "rawText": "電磁付着状態の敵に重攻撃または終撃を行ったときに発動可能。敵に電磁ダメージを与え、電磁付着を消費して強制的に感電状態にする(すでに感電状態なら異常段階+1)。消費1段階ごとに必殺チャージを追加で10回復。（※電磁付着は付与しない）",
        "attachText": "なし",
        "anomalyText": "電磁付着を全消費して強制的に感電状態にする(すでに感電中なら感電異常段階+1)！",
        "special": "【電磁付着消費→強制感電＆感電段階加算】電磁付着を消費して強制感電にし、対象がすでに感電状態だった場合は感電の異常段階を+1引き上げる。",
        "modifiers": [
          {
            "id": "mod_ゾアン・ファンイ_combo_base",
            "name": "一息万変 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 2.88,
            "valuesByRank": {
              "r1": 1.6,
              "r9": 2.88,
              "spec1": 3.12,
              "spec2": 3.36,
              "spec3": 3.6
            },
            "tags": [
              "src:character",
              "action:combo",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      },
      {
        "id": "ult_zhuang",
        "type": "ult",
        "name": "風来轟轟",
        "shortName": "必殺技",
        "damageType": "電磁",
        "multipliers": {
          "lv9": 1.2,
          "lv10_spec1": 1.3,
          "lv11_spec2": 1.4,
          "lv12_spec3": 1.5
        },
        "hitCount": 5,
        "buffs": [
          {
            "id": "buff_zhuang_ult_multiplier",
            "name": "スキル基礎ダメージ倍率",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "multiplier",
            "calcGroupLabel": "【ダメージ倍率補正】",
            "value": 0,
            "duration": 15.0,
            "description": "理の境中の強化通常攻撃3段: R1[67%/94%/134%] → R9[120%/168%/240%] → 特化III[150%/210%/300%](戦技・連携倍率も上記各スキル欄の通り強化)",
            "condition": "必殺チャージ消費240(4凸204) / CD15秒 / 25秒間「理の境」状態に移行",
            "effectType": "multiplier"
          },
          {
            "id": "buff_zhuang_ult_aux",
            "name": "ブレイク・リソース仕様",
            "target": "none",
            "targetLabel": "なし",
            "category": "none",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 15.0,
            "description": "連携技CD回復速度4倍(実質CD約4.25秒) / 期間中初回の戦技はSPと感電を消費せず必ず蒼雷剣を3本生成",
            "condition": "必殺チャージ消費240(4凸204) / CD15秒 / 25秒間「理の境」状態に移行",
            "effectType": "crush"
          },
          {
            "id": "buff_zhuang_ult_special",
            "name": "特殊仕様・挙動",
            "target": "none",
            "targetLabel": "なし",
            "category": "special",
            "calcGroup": "special",
            "calcGroupLabel": "【特殊処理（保留）】",
            "value": 0,
            "duration": 15.0,
            "description": "【理の境モード(25秒)】①通常攻撃3段強化、②戦技倍率強化＆最終雷撃に電磁付着追加、③連携倍率強化＆CD4倍速回復、④期間中初回戦技がSP0・感電非消費・蒼雷剣3本確定生成になる複合強化状態。",
            "condition": "必殺チャージ消費240(4凸204) / CD15秒 / 25秒間「理の境」状態に移行",
            "special": "【理の境モード(25秒)】①通常攻撃3段強化、②戦技倍率強化＆最終雷撃に電磁付着追加、③連携倍率強化＆CD4倍速回復、④期間中初回戦技がSP0・感電非消費・蒼雷剣3本確定生成になる複合強化状態。",
            "effectType": "special"
          }
        ],
        "epCost": 90,
        "infliction": {
          "type": "electric",
          "stacks": 1,
          "label": "⚡ 電磁付着 (+1段階)",
          "description": "期間中の戦技「驚雷訣」最終雷撃に電磁付着(1段階)効果を付与(必殺発動自体には付着なし)"
        },
        "crush": {
          "type": "none",
          "stacks": 0,
          "label": "なし",
          "description": "クラッシュ効果はありません"
        },
        "description": "25秒間「理の境」に入る。通常攻撃・戦技・連携技が強化され、戦技の最後の雷撃が電磁付着を付与するようになり、連携技のCD回復速度が4倍になる。さらに期間中最初の戦技はSPと感電を消費せず蒼雷剣を3本生成する。",
        "damageTypeDetail": "電磁",
        "rawText": "25秒間「理の境」に入る。通常攻撃・戦技・連携技が強化され、戦技の最後の雷撃が電磁付着を付与するようになり、連携技のCD回復速度が4倍になる。さらに期間中最初の戦技はSPと感電を消費せず蒼雷剣を3本生成する。",
        "attachText": "期間中の戦技「驚雷訣」最終雷撃に電磁付着(1段階)効果を付与(必殺発動自体には付着なし)",
        "anomalyText": "なし",
        "special": "【理の境モード(25秒)】①通常攻撃3段強化、②戦技倍率強化＆最終雷撃に電磁付着追加、③連携倍率強化＆CD4倍速回復、④期間中初回戦技がSP0・感電非消費・蒼雷剣3本確定生成になる複合強化状態。",
        "modifiers": [
          {
            "id": "mod_ゾアン・ファンイ_ult_base",
            "name": "風来轟轟 基礎倍率",
            "calcGroup": "skill_multiplier",
            "value": 1.2,
            "valuesByRank": {
              "r1": 0.67,
              "r9": 1.2,
              "spec1": 1.3,
              "spec2": 1.4,
              "spec3": 1.5
            },
            "tags": [
              "src:character",
              "action:ult",
              "elem:electric",
              "cond:always"
            ]
          }
        ]
      }
    ],
    "motifWeapon": "孤舟",
    "recommendedWeapons": [
      "孤舟",
      "破壊ユニット"
    ],
    "normalAttack": {
      "name": "迅雷法",
      "damageType": "電磁",
      "damageTypeDetail": "電磁",
      "attach": "なし",
      "multipliers": "通常1〜5段: R1[16%/24%/32%/45%/48%]→R9[29%/43%/58%/81%/86%]→特化III[36%/54%/72%/101%/108%] / 終撃: 400%→720%→900% / 落下: 80%→144%→180%",
      "breakValue": "重攻撃ブレイク18 / 終撃時SP回復",
      "description": "最大5段の攻撃で、敵に電磁ダメージを与える。重攻撃はブレイク値18を与える。（※電磁付着なし）",
      "raw": "最大5段の攻撃で、敵に電磁ダメージを与える。重攻撃はブレイク値18を与える。（※電磁付着なし）"
    },
    "talents": [
      {
        "id": "talent_zhuang_1",
        "name": "天地造化",
        "description": "戦技を発動したとき5秒間電磁増幅+9%→+18%、蒼雷剣の雷撃が命中するたびさらに+1%→+2%(次の戦技発動時にリセット)。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_zhuang_talent1_amp",
            "name": "天地造化",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "amp",
            "calcGroupLabel": "【増幅補正】増幅",
            "value": 0,
            "duration": 5.0,
            "description": "戦技発動時に自身の電磁増幅+9%(昇進1)→+18%(昇進2)、さらに雷撃命中毎に電磁増幅+1%(昇進1)→+2%(昇進2)加算(9本命中なら+18%+18%=+36%！)",
            "condition": "戦技発動時5秒間持続、さらに蒼雷剣の雷撃命中毎にスタック加算(次回戦技発動でリセット)"
          }
        ]
      },
      {
        "id": "talent_zhuang_2",
        "name": "承天之佑",
        "description": "9%+蒼雷剣の数×1%の確率でダメージを無効化し、自身の最大HPの9%→18%を回復する(回復効果は99秒に1回まで)。",
        "target": "self",
        "targetLabel": "自分へのバフ（自己バフ）",
        "calcGroup": "talent",
        "calcGroupLabel": "素質効果",
        "buffs": [
          {
            "id": "buff_zhuang_talent2_aux",
            "name": "承天之佑",
            "target": "self",
            "targetLabel": "自分へのバフ（自己バフ）",
            "category": "buff",
            "calcGroup": "aux",
            "calcGroupLabel": "【補助・耐久・リソース】",
            "value": 0,
            "duration": 99.0,
            "description": "[9% + 戦場の蒼雷剣数×1%]の確率で受けるダメージを無効化し、最大HPの9%(昇進1)→18%(昇進2)を回復(回復CD99秒)",
            "condition": "被ダメージ時確率発動 / HP回復効果はCD99秒"
          }
        ]
      }
    ],
    "specialMechanic": {
      "title": "ゾアン・ファンイ 固有メカニクス・特殊仕様",
      "type": "custom",
      "description": "【蒼雷剣ストック＆必殺中限定付着】①通常時は感電を消費するだけで電磁付着は付与しないが、必殺技「理の境」中のみ最後の雷撃で「電磁付着(1段階)」を付与する。②戦場の蒼雷剣(上限9本)すべてが順次雷撃を放ち、最後の1本の雷撃倍率が6倍になる。 ／ 【電磁付着消費→強制感電＆感電段階加算】電磁付着を消費して強制感電にし、対象がすでに感電状態だった場合は感電の異常段階を+1引き上げる。 ／ 【理の境モード(25秒)】①通常攻撃3段強化、②戦技倍率強化＆最終雷撃に電磁付着追加、③連携倍率強化＆CD4倍速回復、④期間中初回戦技がSP0・感電非消費・蒼雷剣3本確定生成になる複合強化状態。"
    },
    "recommendedArmorSet": "set_pulse",
    "recommendedArmorSetName": "パルス式セット",
    "recommendedArmor": {
      "armorSet": "set_pulse",
      "body": "gold_body_e38391e383abe38_38",
      "arm": "gold_arms_e38391e383abe38_34",
      "acc1": "gold_accessories_e38391e383abe38_49",
      "acc2": "gold_accessories_e7949fe789a9e8a_63"
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = CHARACTERS_DATA;
}
