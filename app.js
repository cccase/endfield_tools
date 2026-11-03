const DEFAULT_DATA = {
  "defaultParty": [
    "スー",
    "リーノ",
    "オクギ",
    "タンタン"
  ],
  "characters": [
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
      "defaultEfficiency": 100,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_admin_skill_multiplier",
              "name": "構成配列 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "基礎倍率: R1=156% → R9=280% → 特化III=350% (+猛撃異常ダメ: 150%×[1+消費クラッシュ段階])",
              "condition": "SP消費100"
            },
            {
              "id": "buff_admin_skill_aux",
              "name": "構成配列 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "SP消費100 / ブレイク値10",
              "condition": "SP消費100"
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
          "anomalyText": "猛撃(クラッシュ全段階消費) / 源石結晶消費トリガー"
        },
        {
          "id": "combo_admin",
          "type": "combo",
          "name": "封印配列",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_admin_combo_multiplier",
              "name": "封印配列 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 16.0,
              "description": "突進ダメ: R1=45%→R9=80%→特化III=100% / 結晶粉砕追加物理ダメ: R1=178%→R9=320%→特化III=400%",
              "condition": "他味方の連携技でダメージ時発動可 / CD: R1=16秒→特化III=15秒 / 封印時間: R1=4秒→特化III=5秒"
            },
            {
              "id": "buff_admin_combo_aux",
              "name": "封印配列 [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 16.0,
              "description": "ブレイク値10 / 源石結晶付与(敵封印4秒→5秒)",
              "condition": "他味方の連携技でダメージ時発動可 / CD: R1=16秒→特化III=15秒 / 封印時間: R1=4秒→特化III=5秒"
            },
            {
              "id": "buff_admin_combo_special",
              "name": "封印配列 [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 16.0,
              "description": "【源石結晶ギミック】敵を封印し、物理異常またはクラッシュ付与時に結晶を消費して追加物理ダメージ(178%→320%→400%)を発生させる（素質1・2・潜在1・3や武器『大願』の参照トリガー）",
              "condition": "他味方の連携技でダメージ時発動可 / CD: R1=16秒→特化III=15秒 / 封印時間: R1=4秒→特化III=5秒",
              "special": "【源石結晶ギミック】敵を封印し、物理異常またはクラッシュ付与時に結晶を消費して追加物理ダメージ(178%→320%→400%)を発生させる（素質1・2・潜在1・3や武器『大願』の参照トリガー）"
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
          "special": "【源石結晶ギミック】敵を封印し、物理異常またはクラッシュ付与時に結晶を消費して追加物理ダメージ(178%→320%→400%)を発生させる（素質1・2・潜在1・3や武器『大願』の参照トリガー）"
        },
        {
          "id": "ult_admin",
          "type": "ult",
          "name": "攻撃配列",
          "shortName": "必殺技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_admin_ult_multiplier",
              "name": "攻撃配列 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "基礎ダメ: R1=356%→R9=640%→特化III=800% / 源石結晶消費時の追加ダメ: R1=267%→R9=480%→特化III=600%",
              "condition": "必殺チャージ消費80"
            },
            {
              "id": "buff_admin_ult_aux",
              "name": "攻撃配列 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "必殺チャージ消費80 / ブレイク値25",
              "condition": "必殺チャージ消費80"
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
          "anomalyText": "源石結晶消費(敵に源石結晶がある場合、消費して追加物理ダメ)"
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
              "name": "根源瓦解 [【枠1】攻撃力%枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "atk_pct",
              "calcGroupLabel": "【枠1】攻撃力%枠",
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
              "name": "空間静止 [【枠10】敵被ダメージUP枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "taken_damage_up",
              "calcGroupLabel": "【枠10】敵被ダメージUP枠",
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
            "lv9": 3.42,
            "lv10_spec1": 3.75,
            "lv11_spec2": 4.13,
            "lv12_spec3": 4.56
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_akekuri_skill_multiplier",
              "name": "ほとばしる情熱 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "基礎倍率: R1=142% → R9=256% → 特化III=320%",
              "condition": "SP消費100"
            },
            {
              "id": "buff_akekuri_skill_aux",
              "name": "ほとばしる情熱 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "SP消費100 / ブレイク値10",
              "condition": "SP消費100"
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
          "anomalyText": "なし"
        },
        {
          "id": "combo_akekuri",
          "type": "combo",
          "name": "突撃一閃",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.66,
            "lv10_spec1": 2.9,
            "lv11_spec2": 3.18,
            "lv12_spec3": 3.52
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_akekuri_combo_multiplier",
              "name": "突撃一閃 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 10.0,
              "description": "2回ヒット・1回毎倍率: R1=80% → R9=144% → 特化III=180%",
              "condition": "敵がブレイク状態になるかブレイク点到達時発動可 / CD: R1〜9=10秒→特化III=9秒"
            },
            {
              "id": "buff_akekuri_combo_aux",
              "name": "突撃一閃 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 10.0,
              "description": "1回毎ブレイク値5(計10) / 1回毎SP回復7.5(計15、素質1で増加)",
              "condition": "敵がブレイク状態になるかブレイク点到達時発動可 / CD: R1〜9=10秒→特化III=9秒"
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
          "anomalyText": "なし"
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
              "name": "全員、集合！ [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "SP回復量(合計): R1=58 → R9=74 → 特化III=80",
              "condition": "必殺チャージ消費120 / 集結信号弾3回発射"
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
              "name": "勝利の喝采 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "集中タイム [【枠8】リンク補正枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "link",
              "calcGroupLabel": "【枠8】リンク補正枠",
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
        "body": "gold_body_e38391e382a4e38_34",
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
            "lv10_spec1": 3.95,
            "lv11_spec2": 4.35,
            "lv12_spec3": 4.8
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_alesh_skill_multiplier",
              "name": "型破りのルアー [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "物理ダメ倍率: R1=200% → R9=360% → 特化III=450%",
              "condition": "SP消費100 / 寒冷付着状態の敵命中時に付着全消費＆強制凍結"
            },
            {
              "id": "buff_alesh_skill_aux",
              "name": "型破りのルアー [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値10 / 寒冷付着1〜4段階消費時SP回復: R1〜9[10/20/30/40] → 特化III[15/25/35/45](複数命中でも1回のみ)",
              "condition": "SP消費100 / 寒冷付着状態の敵命中時に付着全消費＆強制凍結"
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
          "anomalyText": "寒冷付着全段階消費 → 強制凍結付与"
        },
        {
          "id": "combo_alesh",
          "type": "combo",
          "name": "穴釣り戦術",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.8,
            "lv10_spec1": 3.05,
            "lv11_spec2": 3.35,
            "lv12_spec3": 3.7
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_alesh_combo_multiplier",
              "name": "穴釣り戦術 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 9.0,
              "description": "通常ダメ: R1=133%→R9=240%→特化III=300% / 珍鱗釣上時強化ダメ: R1=213%→R9=384%→特化III=480%",
              "condition": "近くのアーツ異常または源石結晶が消費された時発動可 / CD: R1〜9=9秒→特化III=8秒"
            },
            {
              "id": "buff_alesh_combo_aux",
              "name": "穴釣り戦術 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 9.0,
              "description": "ブレイク値10 / 基礎SP回復: R1=10→R9=12→特化III=15 / 珍鱗釣上時SP追加+10",
              "condition": "近くのアーツ異常または源石結晶が消費された時発動可 / CD: R1〜9=9秒→特化III=8秒"
            },
            {
              "id": "buff_alesh_combo_special",
              "name": "穴釣り戦術 [【特殊枠（例外処理）】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 9.0,
              "description": "【確率分岐(珍鱗)】基礎10%＋素質2(知性10につき+0.5%、上限+30%)の確率で珍鱗を釣り上げ、倍率強化＆SP追加+10（3凸で全体攻撃力+15%発動）",
              "condition": "近くのアーツ異常または源石結晶が消費された時発動可 / CD: R1〜9=9秒→特化III=8秒",
              "special": "【確率分岐(珍鱗)】基礎10%＋素質2(知性10につき+0.5%、上限+30%)の確率で珍鱗を釣り上げ、倍率強化＆SP追加+10（3凸で全体攻撃力+15%発動）"
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
          "special": "【確率分岐(珍鱗)】基礎10%＋素質2(知性10につき+0.5%、上限+30%)の確率で珍鱗を釣り上げ、倍率強化＆SP追加+10（3凸で全体攻撃力+15%発動）"
        },
        {
          "id": "ult_alesh",
          "type": "ult",
          "name": "大物、ヒット！",
          "shortName": "必殺技",
          "damageType": "寒冷",
          "multipliers": {
            "lv9": 7.2,
            "lv10_spec1": 7.85,
            "lv11_spec2": 8.6,
            "lv12_spec3": 9.5
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_alesh_ult_multiplier",
              "name": "大物、ヒット！ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "寒冷ダメ倍率: R1=436% → R9=784% → 特化III=980%",
              "condition": "必殺チャージ消費100 / CD20秒"
            },
            {
              "id": "buff_alesh_ult_aux",
              "name": "大物、ヒット！ [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値20 / 基礎SP回復: R1〜9=20→特化III=25 / 敵1体撃破毎SP追加回復: R1〜9=12→特化III=15(合計上限100)",
              "condition": "必殺チャージ消費100 / CD20秒"
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
          "anomalyText": "なし"
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
              "name": "急速冷凍 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "釣りの達人 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
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
        "body": "gold_body_e38391e382a4e38_34",
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
            "lv9": 3.42,
            "lv10_spec1": 3.75,
            "lv11_spec2": 4.13,
            "lv12_spec3": 4.56
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_antal_skill_multiplier",
              "name": "指定研究対象 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 60.0,
              "description": "電磁ダメ倍率: R1=89% → R9=160% → 特化III=200%",
              "condition": "SP消費100 / 持続60秒 / 最大1体までフォーカス(※電磁ダメだが電磁付着は付与しない！)"
            },
            {
              "id": "buff_antal_skill_vulnerability",
              "name": "指定研究対象 [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 0,
              "duration": 60.0,
              "description": "電磁脆弱 & 灼熱脆弱: R1=5% → R9=8% → 特化III=10%",
              "condition": "SP消費100 / 持続60秒 / 最大1体までフォーカス(※電磁ダメだが電磁付着は付与しない！)"
            },
            {
              "id": "buff_antal_skill_aux",
              "name": "指定研究対象 [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 60.0,
              "description": "SP消費100",
              "condition": "SP消費100 / 持続60秒 / 最大1体までフォーカス(※電磁ダメだが電磁付着は付与しない！)"
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
          "anomalyText": "なし"
        },
        {
          "id": "combo_antal",
          "type": "combo",
          "name": "磁気嵐実験場",
          "shortName": "連携技",
          "damageType": "電磁",
          "multipliers": {
            "lv9": 2.66,
            "lv10_spec1": 2.9,
            "lv11_spec2": 3.18,
            "lv12_spec3": 3.52
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_antal_combo_multiplier",
              "name": "磁気嵐実験場 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 25.0,
              "description": "電磁ダメ倍率: R1=151% → R9=272% → 特化III=340%",
              "condition": "フォーカス中の敵が物理異常またはアーツ付着状態になった時発動可 / CD: R1〜9=25秒→特化III=24秒"
            },
            {
              "id": "buff_antal_combo_aux",
              "name": "磁気嵐実験場 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 25.0,
              "description": "ブレイク値10",
              "condition": "フォーカス中の敵が物理異常またはアーツ付着状態になった時発動可 / CD: R1〜9=25秒→特化III=24秒"
            },
            {
              "id": "buff_antal_combo_special",
              "name": "磁気嵐実験場 [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 25.0,
              "description": "【特殊付着/異常コピー】固有で電磁付着を持つのではなく、トリガーとなった直前の「物理異常」または「任意属性のアーツ付着」と同じものを再度付与する",
              "condition": "フォーカス中の敵が物理異常またはアーツ付着状態になった時発動可 / CD: R1〜9=25秒→特化III=24秒",
              "special": "【特殊付着/異常コピー】固有で電磁付着を持つのではなく、トリガーとなった直前の「物理異常」または「任意属性のアーツ付着」と同じものを再度付与する"
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
          "special": "【特殊付着/異常コピー】固有で電磁付着を持つのではなく、トリガーとなった直前の「物理異常」または「任意属性のアーツ付着」と同じものを再度付与する"
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
              "name": "リミッター、解除 [【枠5】増幅枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "amp",
              "calcGroupLabel": "【枠5】増幅枠",
              "value": 20,
              "duration": 12.0,
              "description": "チーム全員に電磁増幅 & 灼熱増幅: R1=8% → R9=16% → 特化III=20%",
              "condition": "必殺チャージ消費100 / 持続12秒"
            },
            {
              "id": "buff_antal_ult_aux",
              "name": "リミッター、解除 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 12.0,
              "description": "必殺チャージ消費100",
              "condition": "必殺チャージ消費100 / 持続12秒"
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
              "name": "アドリブ [【補助・耐久・リソース枠】]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "無意識 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
        "acc1": "gold_accessories_e6b581e8bba2e38_16",
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
            "lv9": 3.6,
            "lv10_spec1": 3.95,
            "lv11_spec2": 4.35,
            "lv12_spec3": 4.8
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_arclight_skill_multiplier",
              "name": "疾風迅雷 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "1・2段目(物理): R1[45%+45%]→R9[81%+81%]→特化III[101%+101%] / 感電消費追撃(電磁): R1=180%→R9=324%→特化III=405%",
              "condition": "SP消費100 / 感電状態の敵に命中時追撃発生"
            },
            {
              "id": "buff_arclight_skill_aux",
              "name": "疾風迅雷 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値: 2段目5＋追撃5 / 感電消費時SP回復: R1=30→R9=35→特化III=40",
              "condition": "SP消費100 / 感電状態の敵に命中時追撃発生"
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
          "anomalyText": "感電状態の消費(敵が感電中の場合、感電を消費して追加電磁ダメ＆SP回復 ※電磁付着は付与しない)"
        },
        {
          "id": "combo_arclight",
          "type": "combo",
          "name": "雷鳴",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.8,
            "lv10_spec1": 3.05,
            "lv11_spec2": 3.35,
            "lv12_spec3": 3.7
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_arclight_combo_multiplier",
              "name": "雷鳴 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 3.0,
              "description": "物理ダメ倍率: R1=155% → R9=280% → 特化III=350%",
              "condition": "敵が感電状態になるか感電が消費された時発動可 / CD3秒"
            },
            {
              "id": "buff_arclight_combo_aux",
              "name": "雷鳴 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 3.0,
              "description": "ブレイク値5 / 必殺チャージ回復5 / SP回復: R1=8→R9=9→特化III=10",
              "condition": "敵が感電状態になるか感電が消費された時発動可 / CD3秒"
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
          "anomalyText": "なし"
        },
        {
          "id": "ult_arclight",
          "type": "ult",
          "name": "轟雷裂電",
          "shortName": "必殺技",
          "damageType": "電磁",
          "multipliers": {
            "lv9": 7.2,
            "lv10_spec1": 7.85,
            "lv11_spec2": 8.6,
            "lv12_spec3": 9.5
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_arclight_ult_multiplier",
              "name": "轟雷裂電 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "1段目突進(電磁+電磁付着): R1=156%→R9=280%→特化III=350% / 2段目爆発(電磁+付着消費強制感電): R1=244%→R9=440%→特化III=550%",
              "condition": "必殺チャージ消費90"
            },
            {
              "id": "buff_arclight_ult_aux",
              "name": "轟雷裂電 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値: R1〜9[7+7]→特化III[10+10]",
              "condition": "必殺チャージ消費90"
            },
            {
              "id": "buff_arclight_ult_special",
              "name": "轟雷裂電 [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【自己付着→即消費感電】1段目で電磁付着を付与し、直後の2段目爆発でその電磁付着を消費して強制感電にする2段構造",
              "condition": "必殺チャージ消費90",
              "special": "【自己付着→即消費感電】1段目で電磁付着を付与し、直後の2段目爆発でその電磁付着を消費して強制感電にする2段構造"
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
          "special": "【自己付着→即消費感電】1段目で電磁付着を付与し、直後の2段目爆発でその電磁付着を消費して強制感電にする2段構造"
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
              "name": "荒野の吟遊者 [【枠4】ダメージUP枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "damage_up",
              "calcGroupLabel": "【枠4】ダメージUP枠",
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
              "name": "衆生智慧 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
        "body": "gold_body_e38391e382a4e38_34",
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
      "defaultEfficiency": 100,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_ardelia_skill_multiplier",
              "name": "ドリーラッシュ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 30.0,
              "description": "自然ダメ倍率: R1=142% → R9=256% → 特化III=320%",
              "condition": "SP消費100 / 腐食消費時の脆弱持続30秒"
            },
            {
              "id": "buff_ardelia_skill_vulnerability",
              "name": "ドリーラッシュ [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 0,
              "duration": 30.0,
              "description": "腐食消費時、敵に物理脆弱 & アーツ脆弱(30秒): R1=12% → R9=16% → 特化III=20%",
              "condition": "SP消費100 / 腐食消費時の脆弱持続30秒"
            },
            {
              "id": "buff_ardelia_skill_aux",
              "name": "ドリーラッシュ [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 30.0,
              "description": "SP消費100 / ブレイク値10",
              "condition": "SP消費100 / 腐食消費時の脆弱持続30秒"
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
          "anomalyText": "腐食状態の消費(腐食中の敵に命中時、腐食を消費して物理脆弱＆アーツ脆弱を付与)"
        },
        {
          "id": "combo_ardelia",
          "type": "combo",
          "name": "イラプション・コラム",
          "shortName": "連携技",
          "damageType": "自然",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_ardelia_combo_multiplier",
              "name": "イラプション・コラム [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 18.0,
              "description": "接近ダメ: R1=45%→R9=80%→特化III=100% / 爆発ダメ: R1=111%→R9=200%→特化III=250%(周囲の他敵には半分)",
              "condition": "クラッシュ・アーツ付着いずれもない敵に操作キャラが重攻撃時発動可 / CD: R1〜9=18秒→特化III=17秒"
            },
            {
              "id": "buff_ardelia_combo_res_down",
              "name": "イラプション・コラム [【枠9】敵耐性ダウン・耐性無視枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "res_down",
              "calcGroupLabel": "【枠9】敵耐性ダウン・耐性無視枠",
              "value": 0,
              "duration": 18.0,
              "description": "強制腐食による全属性耐性ダウン(7秒間、段階1相当の強制腐食)",
              "condition": "クラッシュ・アーツ付着いずれもない敵に操作キャラが重攻撃時発動可 / CD: R1〜9=18秒→特化III=17秒"
            },
            {
              "id": "buff_ardelia_combo_aux",
              "name": "イラプション・コラム [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 18.0,
              "description": "ブレイク値10",
              "condition": "クラッシュ・アーツ付着いずれもない敵に操作キャラが重攻撃時発動可 / CD: R1〜9=18秒→特化III=17秒"
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
          "anomalyText": "強制腐食付与(7秒間、5凸で11秒間 ※付着を介さず直接腐食にする)"
        },
        {
          "id": "ult_ardelia",
          "type": "ult",
          "name": "もふもふパーティー",
          "shortName": "必殺技",
          "damageType": "自然",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_ardelia_ult_multiplier",
              "name": "もふもふパーティー [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 3.0,
              "description": "分身1ヒット毎自然ダメ倍率: R1=73% → R9=132% → 特化III=165%",
              "condition": "必殺チャージ消費90 / 持続3秒(同一敵へ0.3秒に1回まで命中)"
            },
            {
              "id": "buff_ardelia_ult_aux",
              "name": "もふもふパーティー [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 3.0,
              "description": "1ヒット毎ブレイク値2",
              "condition": "必殺チャージ消費90 / 持続3秒(同一敵へ0.3秒に1回まで命中)"
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
          "anomalyText": "なし"
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
              "name": "友の面影 [【補助・耐久・リソース枠】]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "山頂サーフィン [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
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
        "acc2": "gold_accessories_e69591e59bbde58_73"
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
            "lv9": 3.6,
            "lv10_spec1": 3.95,
            "lv11_spec2": 4.35,
            "lv12_spec3": 4.8
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_avywenna_skill_multiplier",
              "name": "雷槍・逆襲 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "旋風: R1=67%→R9=120%→特化III=150% / 雷槍1本毎: R1=75%→R9=134%→特化III=168% / 強雷槍: R1=192%→R9=346%→特化III=432%",
              "condition": "SP消費100 / 設置済みの雷槍(連携)・強雷槍(必殺)を全回収"
            },
            {
              "id": "buff_avywenna_skill_aux",
              "name": "雷槍・逆襲 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値: 旋風5 / 雷槍5 / 強雷槍10",
              "condition": "SP消費100 / 設置済みの雷槍(連携)・強雷槍(必殺)を全回収"
            },
            {
              "id": "buff_avywenna_skill_special",
              "name": "雷槍・逆襲 [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【槍回収ギミック】戦技単体や雷槍(連携技設置)回収時は電磁ダメのみで電磁付着なし。必殺技で設置した「強雷槍」を戦技で回収して敵を貫通した時のみ電磁付着を付与する",
              "condition": "SP消費100 / 設置済みの雷槍(連携)・強雷槍(必殺)を全回収",
              "special": "【槍回収ギミック】戦技単体や雷槍(連携技設置)回収時は電磁ダメのみで電磁付着なし。必殺技で設置した「強雷槍」を戦技で回収して敵を貫通した時のみ電磁付着を付与する"
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
          "special": "【槍回収ギミック】戦技単体や雷槍(連携技設置)回収時は電磁ダメのみで電磁付着なし。必殺技で設置した「強雷槍」を戦技で回収して敵を貫通した時のみ電磁付着を付与する"
        },
        {
          "id": "combo_avywenna",
          "type": "combo",
          "name": "雷槍・閃撃",
          "shortName": "連携技",
          "damageType": "電磁",
          "multipliers": {
            "lv9": 2.8,
            "lv10_spec1": 3.05,
            "lv11_spec2": 3.35,
            "lv12_spec3": 3.7
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_avywenna_combo_multiplier",
              "name": "雷槍・閃撃 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 13.0,
              "description": "電磁ダメ倍率: R1=169% → R9=304% → 特化III=380%(雷槍3本設置・持続30秒)",
              "condition": "電磁付着または感電状態の敵に操作キャラが重攻撃時発動可 / CD: R1〜9=13秒→特化III=12秒"
            },
            {
              "id": "buff_avywenna_combo_aux",
              "name": "雷槍・閃撃 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 13.0,
              "description": "ブレイク値10 / 必殺チャージ獲得0(※素質1で命中回収時に回復)",
              "condition": "電磁付着または感電状態の敵に操作キャラが重攻撃時発動可 / CD: R1〜9=13秒→特化III=12秒"
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
          "anomalyText": "なし"
        },
        {
          "id": "ult_avywenna",
          "type": "ult",
          "name": "雷槍・決震",
          "shortName": "必殺技",
          "damageType": "電磁",
          "multipliers": {
            "lv9": 7.2,
            "lv10_spec1": 7.85,
            "lv11_spec2": 8.6,
            "lv12_spec3": 9.5
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_avywenna_ult_multiplier",
              "name": "雷槍・決震 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 10.0,
              "description": "電磁ダメ倍率: R1=422% → R9=760% → 特化III=950%",
              "condition": "必殺チャージ消費100 / CD10秒(強雷槍1本設置・持続30秒 ※投擲命中自体は電磁付着なし！)"
            },
            {
              "id": "buff_avywenna_ult_aux",
              "name": "雷槍・決震 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 10.0,
              "description": "ブレイク値15",
              "condition": "必殺チャージ消費100 / CD10秒(強雷槍1本設置・持続30秒 ※投擲命中自体は電磁付着なし！)"
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
          "anomalyText": "なし"
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
              "name": "配達の効率化 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "婉曲手段 [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
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
        "body": "gold_body_e9aaa8e7a095e38_40",
        "arm": "gold_arms_e9aaa8e7a095e38_36",
        "acc1": "gold_accessories_e9aaa8e7a095e38_52",
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
      "defaultEfficiency": 100,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_camille_skill_multiplier",
              "name": "影祓う [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 45.0,
              "description": "初回ダメ: R1=89%→R9=160%→特化III=200% / カミーユ連携命中時の追撃爆発ダメ: R1=45%→R9=80%→特化III=100%",
              "condition": "SP消費100 / 「燃える血の翼」包囲持続45秒(敵撃破時に近くの敵へ転移し再度灼熱ダメ・灼熱付着・デバフ付与)"
            },
            {
              "id": "buff_camille_skill_vulnerability",
              "name": "影祓う [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 0,
              "duration": 45.0,
              "description": "包囲中の敵に灼熱脆弱: R1=5% → R9=6% → 特化III=7%",
              "condition": "SP消費100 / 「燃える血の翼」包囲持続45秒(敵撃破時に近くの敵へ転移し再度灼熱ダメ・灼熱付着・デバフ付与)"
            },
            {
              "id": "buff_camille_skill_aux",
              "name": "影祓う [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 45.0,
              "description": "ブレイク値10 / 包囲中の敵に弱体化(敵与ダメ低下): R1=5%→R9=6%→特化III=7%",
              "condition": "SP消費100 / 「燃える血の翼」包囲持続45秒(敵撃破時に近くの敵へ転移し再度灼熱ダメ・灼熱付着・デバフ付与)"
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
          "anomalyText": "なし"
        },
        {
          "id": "combo_camille",
          "type": "combo",
          "name": "心抉る棘（および必殺派生「追及」）",
          "shortName": "連携技",
          "damageType": "灼熱",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_camille_combo_multiplier",
              "name": "心抉る棘（および必殺派生「追及」） [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "通常連携ダメ: R1=133%→R9=240%→特化III=300% / 必殺後派生「追及」ダメ: R1=222%→R9=400%→特化III=500%",
              "condition": "敵の灼熱付着が消費または吸収された時発動可 / CD: R1=20秒→R9=19秒→特化III=18秒"
            },
            {
              "id": "buff_camille_combo_aux",
              "name": "心抉る棘（および必殺派生「追及」） [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値10(追及20) / 必殺チャージ回復10 / SP回復: 通常[R1=16→R9=18→特化III=20]、追及[R1=32→R9=36→特化III=40]",
              "condition": "敵の灼熱付着が消費または吸収された時発動可 / CD: R1=20秒→R9=19秒→特化III=18秒"
            },
            {
              "id": "buff_camille_combo_special",
              "name": "心抉る棘（および必殺派生「追及」） [【特殊枠（例外処理）】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 20.0,
              "description": "【必殺派生「追及」】必殺技発動後15秒間、次の戦技がSP消費0の「追及」に変化し、戦技ではなく『連携技ダメージ』として扱われる（連携技ダメUPが乗り、戦技ダメUP・リンクは乗らない）",
              "condition": "敵の灼熱付着が消費または吸収された時発動可 / CD: R1=20秒→R9=19秒→特化III=18秒",
              "special": "【必殺派生「追及」】必殺技発動後15秒間、次の戦技がSP消費0の「追及」に変化し、戦技ではなく『連携技ダメージ』として扱われる（連携技ダメUPが乗り、戦技ダメUP・リンクは乗らない）"
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
          "special": "【必殺派生「追及」】必殺技発動後15秒間、次の戦技がSP消費0の「追及」に変化し、戦技ではなく『連携技ダメージ』として扱われる（連携技ダメUPが乗り、戦技ダメUP・リンクは乗らない）"
        },
        {
          "id": "ult_camille",
          "type": "ult",
          "name": "降り注ぐ深紅",
          "shortName": "必殺技",
          "damageType": "灼熱",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_camille_ult_multiplier",
              "name": "降り注ぐ深紅 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "灼熱ダメ倍率: R1=267% → R9=480% → 特化III=600%",
              "condition": "必殺チャージ消費130 / CD20秒 / 発動後15秒間、次の戦技が「追及」(SP消費0・連携技扱い)に変化"
            },
            {
              "id": "buff_camille_ult_aux",
              "name": "降り注ぐ深紅 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値15 / SP回復: R1=32 → R9=36 → 特化III=40",
              "condition": "必殺チャージ消費130 / CD20秒 / 発動後15秒間、次の戦技が「追及」(SP消費0・連携技扱い)に変化"
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
          "anomalyText": "なし"
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
              "name": "罪追人 [【枠8】リンク補正枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "link",
              "calcGroupLabel": "【枠8】リンク補正枠",
              "value": 0,
              "duration": 15.0,
              "description": "リンク状態獲得(15秒間、チーム共有・次の戦技1.3倍/必殺1.2倍)",
              "condition": "連携技が包囲中の敵に命中時(「追及」は包囲なしでも発動) / リンク持続15秒"
            },
            {
              "id": "buff_camille_talent1_aux",
              "name": "罪追人 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "血の蘇生 [【枠4】ダメージUP枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "damage_up",
              "calcGroupLabel": "【枠4】ダメージUP枠",
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
            "lv9": 3.42,
            "lv10_spec1": 3.75,
            "lv11_spec2": 4.13,
            "lv12_spec3": 4.56
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_catcher_skill_multiplier",
              "name": "強制ブロック [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "反撃物理ダメ倍率: R1=178% → R9=320% → 特化III=400%",
              "condition": "SP消費100(即時SP30返還) / ブロック構え中に被弾すると反撃発動"
            },
            {
              "id": "buff_catcher_skill_aux",
              "name": "強制ブロック [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "即時SP30返還 / 構え中自身と周囲の味方に加護90% / 反撃時ブレイク値20",
              "condition": "SP消費100(即時SP30返還) / ブロック構え中に被弾すると反撃発動"
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
          "anomalyText": "クラッシュ付与(+1段階・被攻撃反撃時)"
        },
        {
          "id": "combo_catcher",
          "type": "combo",
          "name": "即時制圧",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.66,
            "lv10_spec1": 2.9,
            "lv11_spec2": 3.18,
            "lv12_spec3": 3.52
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_catcher_combo_multiplier",
              "name": "即時制圧 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 35.0,
              "description": "1回目: R1=25%→R9=44%→特化III=55% / 2回目: R1=100%→R9=180%→特化III=225%",
              "condition": "敵がチャージ開始または操作キャラ被弾でHP40%未満時発動可 / CD: R1〜9=35秒→特化III=33秒"
            },
            {
              "id": "buff_catcher_combo_aux",
              "name": "即時制圧 [【補助・耐久・リソース枠】]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 35.0,
              "description": "ブレイク値10 / 自身＋味方1人(操作キャラ優先)に10秒間シールド付与: R1[360+防御×2.25]→R9[756+防御×4.73]→特化III[810+防御×5.06]",
              "condition": "敵がチャージ開始または操作キャラ被弾でHP40%未満時発動可 / CD: R1〜9=35秒→特化III=33秒"
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
          "anomalyText": "なし"
        },
        {
          "id": "ult_catcher",
          "type": "ult",
          "name": "教科書通り",
          "shortName": "必殺技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 6.84,
            "lv10_spec1": 7.46,
            "lv11_spec2": 8.17,
            "lv12_spec3": 9.02
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_catcher_ult_multiplier",
              "name": "教科書通り [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "1〜3段目倍率: R1[89%/120%/178%] → R9[160%/216%/320%] → 特化III[200%/270%/400%]",
              "condition": "必殺チャージ消費80"
            },
            {
              "id": "buff_catcher_ult_aux",
              "name": "教科書通り [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値[5+5+10=20] / 敵に弱体化(8秒間): R1=20%→R9=25%→特化III=30%",
              "condition": "必殺チャージ消費80"
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
          "anomalyText": "転倒付与(クラッシュ+1段階・3段目叩き付け時)"
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
              "name": "不屈の防壁 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "俯瞰思考 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
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
      "defaultEfficiency": 100,
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
            "lv9": 3.6,
            "lv10_spec1": 3.95,
            "lv11_spec2": 4.35,
            "lv12_spec3": 4.8
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_chen_skill_multiplier",
              "name": "蒼穹返し [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "物理ダメ倍率: R1=169% → R9=304% → 特化III=380%",
              "condition": "SP消費100"
            },
            {
              "id": "buff_chen_skill_aux",
              "name": "蒼穹返し [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "SP消費100 / ブレイク値10",
              "condition": "SP消費100"
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
          "anomalyText": "浮遊付与(クラッシュ+1段階、浮遊時間: R1=1秒→R9=2秒→特化III=2.5秒)"
        },
        {
          "id": "combo_chen",
          "type": "combo",
          "name": "天河昇",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.8,
            "lv10_spec1": 3.05,
            "lv11_spec2": 3.35,
            "lv12_spec3": 3.7
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_chen_combo_multiplier",
              "name": "天河昇 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 16.0,
              "description": "物理ダメ倍率: R1=120% → R9=216% → 特化III=270%",
              "condition": "敵がクラッシュ状態になった時発動可 / CD: R1〜9=16秒→特化III=15秒"
            },
            {
              "id": "buff_chen_combo_aux",
              "name": "天河昇 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 16.0,
              "description": "ブレイク値0",
              "condition": "敵がクラッシュ状態になった時発動可 / CD: R1〜9=16秒→特化III=15秒"
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
          "anomalyText": "浮遊付与(クラッシュ+1段階)"
        },
        {
          "id": "ult_chen",
          "type": "ult",
          "name": "凍風斬り",
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
              "id": "buff_chen_ult_multiplier",
              "name": "凍風斬り [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "1〜6撃目(各): R1=36%→R9=65%→特化III=81% / 最終7撃目: R1=455%→R9=818%→特化III=1023%",
              "condition": "必殺チャージ消費70 / 7段斬撃"
            },
            {
              "id": "buff_chen_ult_aux",
              "name": "凍風斬り [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値: 初撃15＋最終撃20",
              "condition": "必殺チャージ消費70 / 7段斬撃"
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
          "anomalyText": "なし"
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
              "name": "斬鋒 [【枠1】攻撃力%枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "atk_pct",
              "calcGroupLabel": "【枠1】攻撃力%枠",
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
              "name": "破勢 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
        "arm": "gold_arms_e8bbbde9878fe8b_39",
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
            "lv9": 3.6,
            "lv10_spec1": 3.95,
            "lv11_spec2": 4.35,
            "lv12_spec3": 4.8
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_dapan_skill_multiplier",
              "name": "鍋振り！ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "物理ダメ倍率: R1=133% → R9=240% → 特化III=300%",
              "condition": "SP消費100"
            },
            {
              "id": "buff_dapan_skill_aux",
              "name": "鍋振り！ [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "SP消費100 / ブレイク値10",
              "condition": "SP消費100"
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
          "anomalyText": "浮遊付与(クラッシュ+1段階、浮遊1.8秒)"
        },
        {
          "id": "combo_dapan",
          "type": "combo",
          "name": "調味料！",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.8,
            "lv10_spec1": 3.05,
            "lv11_spec2": 3.35,
            "lv12_spec3": 3.7
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_dapan_combo_multiplier",
              "name": "調味料！ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "連携物理ダメ倍率: R1=289% → R9=520% → 特化III=650%",
              "condition": "敵のクラッシュ段階が4になった時発動可 / CD: R1〜9=20秒→特化III=19秒"
            },
            {
              "id": "buff_dapan_combo_damage_up",
              "name": "調味料！ [【枠4】ダメージUP枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "damage_up",
              "calcGroupLabel": "【枠4】ダメージUP枠",
              "value": 0,
              "duration": 20.0,
              "description": "この連携技で発生する猛撃ダメージ追加UP: R1=+10% → R9=+15% → 特化III=+20%",
              "condition": "敵のクラッシュ段階が4になった時発動可 / CD: R1〜9=20秒→特化III=19秒"
            },
            {
              "id": "buff_dapan_combo_aux",
              "name": "調味料！ [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値15",
              "condition": "敵のクラッシュ段階が4になった時発動可 / CD: R1〜9=20秒→特化III=19秒"
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
          "anomalyText": "猛撃付与(クラッシュ4段階消費)"
        },
        {
          "id": "ult_dapan",
          "type": "ult",
          "name": "具材投入！",
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
              "id": "buff_dapan_ult_multiplier",
              "name": "具材投入！ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 15.0,
              "description": "空中斬撃6段(各): R1=22%→R9=40%→特化III=50% / 最終叩き落とし: R1=178%→R9=320%→特化III=400%",
              "condition": "必殺チャージ消費90 / CD15秒"
            },
            {
              "id": "buff_dapan_ult_aux",
              "name": "具材投入！ [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 15.0,
              "description": "必殺チャージ消費90",
              "condition": "必殺チャージ消費90 / CD15秒"
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
          "anomalyText": "強制浮遊 → 空中6段斬撃 → 強制転倒(計クラッシュ+2段階)"
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
              "name": "とろみづけ [【枠4】ダメージUP枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "damage_up",
              "calcGroupLabel": "【枠4】ダメージUP枠",
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
              "name": "味見 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
      "defaultEfficiency": 100,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_ember_skill_multiplier",
              "name": "出征 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "灼熱ダメ倍率: R1=173% → R9=312% → 特化III=390%",
              "condition": "SP消費100"
            },
            {
              "id": "buff_ember_skill_aux",
              "name": "出征 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値10(発動中被弾時は追加ブレイク+10)",
              "condition": "SP消費100"
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
          "anomalyText": "転倒付与(クラッシュ+1段階 ※灼熱ダメだが灼熱付着は一切なし！)"
        },
        {
          "id": "combo_ember",
          "type": "combo",
          "name": "前線支援",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_ember_combo_multiplier",
              "name": "前線支援 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 19.0,
              "description": "物理ダメ倍率: R1=102% → R9=184% → 特化III=230%",
              "condition": "操作中のオペレーターが攻撃を受けた時発動可 / CD: R1〜9=19秒→特化III=18秒"
            },
            {
              "id": "buff_ember_combo_aux",
              "name": "前線支援 [【補助・耐久・リソース枠】]",
              "target": "single",
              "targetLabel": "単体回復",
              "category": "buff",
              "calcGroup": "heal",
              "calcGroupLabel": "【回復・耐久枠】(単体回復)",
              "value": 0,
              "duration": 19.0,
              "description": "ブレイク値10 / 操作キャラのHP回復: R1[300+意志×0.7]→R9[630+意志×1.47]→特化III[675+意志×1.58]",
              "condition": "操作中のオペレーターが攻撃を受けた時発動可 / CD: R1〜9=19秒→特化III=18秒"
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
          "anomalyText": "転倒付与(クラッシュ+1段階)"
        },
        {
          "id": "ult_ember",
          "type": "ult",
          "name": "誓約の炎",
          "shortName": "必殺技",
          "damageType": "灼熱",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_ember_ult_multiplier",
              "name": "誓約の炎 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 10.0,
              "description": "灼熱ダメ倍率: R1=289% → R9=520% → 特化III=650%",
              "condition": "必殺チャージ消費100 / シールド持続10秒(※灼熱ダメだが灼熱付着なし！)"
            },
            {
              "id": "buff_ember_ult_aux",
              "name": "誓約の炎 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 10.0,
              "description": "ブレイク値25 / チーム全員にエンバー最大HP参照シールド(10秒): R1=18% → R9=22% → 特化III=25%",
              "condition": "必殺チャージ消費100 / シールド持続10秒(※灼熱ダメだが灼熱付着なし！)"
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
          "anomalyText": "なし"
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
              "name": "突陣の意志 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "鉄で鉄を貫く [【枠1】攻撃力%枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "atk_pct",
              "calcGroupLabel": "【枠1】攻撃力%枠",
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
            "lv9": 3.42,
            "lv10_spec1": 3.75,
            "lv11_spec2": 4.13,
            "lv12_spec3": 4.56
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_estella_skill_multiplier",
              "name": "オノマトペ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "寒冷ダメ倍率: R1=156% → R9=280% → 特化III=350%",
              "condition": "SP消費100"
            },
            {
              "id": "buff_estella_skill_aux",
              "name": "オノマトペ [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "SP消費100 / ブレイク値10",
              "condition": "SP消費100"
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
          "anomalyText": "なし"
        },
        {
          "id": "combo_estella",
          "type": "combo",
          "name": "ディストーション",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.66,
            "lv10_spec1": 2.9,
            "lv11_spec2": 3.18,
            "lv12_spec3": 3.52
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_estella_combo_multiplier",
              "name": "ディストーション [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 18.0,
              "description": "非凍結時物理ダメ: R1=160%→R9=288%→特化III=360% / 凍結時物理ダメ: R1=280%→R9=504%→特化III=630%",
              "condition": "敵が凍結状態になった時発動可 / CD: R1〜9=18秒→特化III=17秒 / 脆弱持続6秒"
            },
            {
              "id": "buff_estella_combo_vulnerability",
              "name": "ディストーション [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 0,
              "duration": 18.0,
              "description": "凍結中の敵に物理脆弱(6秒): R1〜9=10% → 特化III=15%",
              "condition": "敵が凍結状態になった時発動可 / CD: R1〜9=18秒→特化III=17秒 / 脆弱持続6秒"
            },
            {
              "id": "buff_estella_combo_aux",
              "name": "ディストーション [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 18.0,
              "description": "ブレイク値10",
              "condition": "敵が凍結状態になった時発動可 / CD: R1〜9=18秒→特化III=17秒 / 脆弱持続6秒"
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
          "anomalyText": "強制浮遊(クラッシュ+1段階) → 凍結中の敵には粉砕(凍結消費)＆物理脆弱付与"
        },
        {
          "id": "ult_estella",
          "type": "ult",
          "name": "トレモロ",
          "shortName": "必殺技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 6.84,
            "lv10_spec1": 7.46,
            "lv11_spec2": 8.17,
            "lv12_spec3": 9.02
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_estella_ult_multiplier",
              "name": "トレモロ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 10.0,
              "description": "物理ダメ倍率: R1=489% → R9=880% → 特化III=1100%",
              "condition": "必殺チャージ消費70 / CD10秒"
            },
            {
              "id": "buff_estella_ult_aux",
              "name": "トレモロ [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 10.0,
              "description": "ブレイク値15",
              "condition": "必殺チャージ消費70 / CD10秒"
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
          "anomalyText": "物理脆弱状態の敵にのみ強制浮遊付与(クラッシュ+1段階)"
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
              "name": "類は友を呼ぶ [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "惰性 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
            "lv9": 3.42,
            "lv10_spec1": 3.75,
            "lv11_spec2": 4.13,
            "lv12_spec3": 4.56
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_fluorite_skill_multiplier",
              "name": "ちょっとイタズラ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "爆発自然ダメ倍率: R1=187% → R9=336% → 特化III=420%",
              "condition": "SP消費100 / お手製爆弾は同時1個まで"
            },
            {
              "id": "buff_fluorite_skill_aux",
              "name": "ちょっとイタズラ [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値10 / 貼り付け時スロー30%付与",
              "condition": "SP消費100 / お手製爆弾は同時1個まで"
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
          "anomalyText": "なし"
        },
        {
          "id": "combo_fluorite",
          "type": "combo",
          "name": "特別サービス",
          "shortName": "連携技",
          "damageType": "自然",
          "multipliers": {
            "lv9": 2.66,
            "lv10_spec1": 2.9,
            "lv11_spec2": 3.18,
            "lv12_spec3": 3.52
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_fluorite_combo_multiplier",
              "name": "特別サービス [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 40.0,
              "description": "自然ダメ倍率: R1=169% → R9=304% → 特化III=380%",
              "condition": "敵の寒冷付着または自然付着が2段階以上になった時発動可 / CD: R1〜9=40秒→特化III=38秒"
            },
            {
              "id": "buff_fluorite_combo_aux",
              "name": "特別サービス [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 40.0,
              "description": "ブレイク値10",
              "condition": "敵の寒冷付着または自然付着が2段階以上になった時発動可 / CD: R1〜9=40秒→特化III=38秒"
            },
            {
              "id": "buff_fluorite_combo_special",
              "name": "特別サービス [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 40.0,
              "description": "【対応属性付着コピー】ダメージ自体は自然属性だが、付与するアーツ付着は敵の2段階以上の付着属性（寒冷付着なら寒冷付着、自然付着なら自然付着）になる（異属性アーツ異常は起こさず段階を+1進める）",
              "condition": "敵の寒冷付着または自然付着が2段階以上になった時発動可 / CD: R1〜9=40秒→特化III=38秒",
              "special": "【対応属性付着コピー】ダメージ自体は自然属性だが、付与するアーツ付着は敵の2段階以上の付着属性（寒冷付着なら寒冷付着、自然付着なら自然付着）になる（異属性アーツ異常は起こさず段階を+1進める）"
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
          "special": "【対応属性付着コピー】ダメージ自体は自然属性だが、付与するアーツ付着は敵の2段階以上の付着属性（寒冷付着なら寒冷付着、自然付着なら自然付着）になる（異属性アーツ異常は起こさず段階を+1進める）"
        },
        {
          "id": "ult_fluorite",
          "type": "ult",
          "name": "つまんない茶番",
          "shortName": "必殺技",
          "damageType": "自然",
          "multipliers": {
            "lv9": 6.84,
            "lv10_spec1": 7.46,
            "lv11_spec2": 8.17,
            "lv12_spec3": 9.02
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_fluorite_ult_multiplier",
              "name": "つまんない茶番 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "1〜4段目(各): R1=111% → R9=200% → 特化III=250%(計444%→800%→1000%)",
              "condition": "必殺チャージ消費100 / 4段射撃"
            },
            {
              "id": "buff_fluorite_ult_damage_up",
              "name": "つまんない茶番 [【枠4】ダメージUP枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "damage_up",
              "calcGroupLabel": "【枠4】ダメージUP枠",
              "value": 0,
              "duration": 0.0,
              "description": "お手製爆弾が付いている敵に命中時、即時起爆し爆弾の爆発ダメージ+30%",
              "condition": "必殺チャージ消費100 / 4段射撃"
            },
            {
              "id": "buff_fluorite_ult_aux",
              "name": "つまんない茶番 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値20 / お手製爆弾の爆発範囲+30%",
              "condition": "必殺チャージ消費100 / 4段射撃"
            },
            {
              "id": "buff_fluorite_ult_special",
              "name": "つまんない茶番 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【対応属性付着コピー＆爆弾即時起爆】最終段命中時に敵が2段階以上の寒冷付着または自然付着なら、その属性の付着を+1段階付与。お手製爆弾があれば即時強化起爆",
              "condition": "必殺チャージ消費100 / 4段射撃",
              "special": "【対応属性付着コピー＆爆弾即時起爆】最終段命中時に敵が2段階以上の寒冷付着または自然付着なら、その属性の付着を+1段階付与。お手製爆弾があれば即時強化起爆"
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
          "special": "【対応属性付着コピー＆爆弾即時起爆】最終段命中時に敵が2段階以上の寒冷付着または自然付着なら、その属性の付着を+1段階付与。お手製爆弾があれば即時強化起爆"
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
              "name": "泣きっ面に石 [【枠4】ダメージUP枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "damage_up",
              "calcGroupLabel": "【枠4】ダメージUP枠",
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
              "name": "予測不可能 [【枠1】攻撃力%枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "atk_pct",
              "calcGroupLabel": "【枠1】攻撃力%枠",
              "value": 0,
              "duration": 10.0,
              "description": "無効化成功時10秒間攻撃力+10%(昇進2) → +20%(昇進3)",
              "condition": "アーツ被弾時20%確率(2凸で30%) → 発動後10秒間(重ね掛け不可)"
            },
            {
              "id": "buff_fluorite_talent2_aux",
              "name": "予測不可能 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
      "defaultEfficiency": 202.9,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_gilberta_skill_multiplier",
              "name": "秘杖・引力モード [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "引力ダメ: R1=97%→R9=175%→特化III=219% / 終了爆発ダメ: R1=58%→R9=104%→特化III=130%",
              "condition": "SP消費100 / 引力吸引後に爆発"
            },
            {
              "id": "buff_gilberta_skill_aux",
              "name": "秘杖・引力モード [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "SP消費100 / 爆発ブレイク値10 / 周囲の敵を引き寄せ",
              "condition": "SP消費100 / 引力吸引後に爆発"
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
          "anomalyText": "なし"
        },
        {
          "id": "combo_gilberta",
          "type": "combo",
          "name": "秘杖・マトリックス転移",
          "shortName": "連携技",
          "damageType": "自然",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_gilberta_combo_multiplier",
              "name": "秘杖・マトリックス転移 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "自然ダメ倍率: R1=140% → R9=252% → 特化III=315%",
              "condition": "敵がアーツ異常状態になった時発動可 / CD: R1〜9=20秒→特化III=19秒"
            },
            {
              "id": "buff_gilberta_combo_aux",
              "name": "秘杖・マトリックス転移 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値5 / 周囲の敵を引き寄せ",
              "condition": "敵がアーツ異常状態になった時発動可 / CD: R1〜9=20秒→特化III=19秒"
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
          "anomalyText": "強制浮遊付与(クラッシュ+1段階 ※自然ダメだが自然付着なし！)"
        },
        {
          "id": "ult_gilberta",
          "type": "ult",
          "name": "秘杖・重力場",
          "shortName": "必殺技",
          "damageType": "自然",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_gilberta_ult_multiplier",
              "name": "秘杖・重力場 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 5.0,
              "description": "自然ダメ倍率: R1=333% → R9=600% → 特化III=750%",
              "condition": "必殺チャージ消費90 / 力場持続5秒"
            },
            {
              "id": "buff_gilberta_ult_vulnerability",
              "name": "秘杖・重力場 [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 0,
              "duration": 5.0,
              "description": "基礎アーツ脆弱: R1=18%→R9=26%→特化III=30% ＋ 敵のクラッシュ1段階毎にアーツ脆弱追加: R1=+1.8%→R9=+2.6%→特化III=+3.0%(最大4段階で計42%、2凸で最大54%)",
              "condition": "必殺チャージ消費90 / 力場持続5秒"
            },
            {
              "id": "buff_gilberta_ult_aux",
              "name": "秘杖・重力場 [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 5.0,
              "description": "ブレイク値20 / スロー80%(5秒)",
              "condition": "必殺チャージ消費90 / 力場持続5秒"
            },
            {
              "id": "buff_gilberta_ult_special",
              "name": "秘杖・重力場 [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 5.0,
              "description": "【クラッシュ段階連動アーツ脆弱＆浮遊維持】敵の現在クラッシュ段階に応じてアーツ脆弱が強化され、浮遊中の敵は5秒間浮遊が強制維持される",
              "condition": "必殺チャージ消費90 / 力場持続5秒",
              "special": "【クラッシュ段階連動アーツ脆弱＆浮遊維持】敵の現在クラッシュ段階に応じてアーツ脆弱が強化され、浮遊中の敵は5秒間浮遊が強制維持される"
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
          "special": "【クラッシュ段階連動アーツ脆弱＆浮遊維持】敵の現在クラッシュ段階に応じてアーツ脆弱が強化され、浮遊中の敵は5秒間浮遊が強制維持される"
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
              "name": "トランスポーターの歌声 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "遅れてきた返信 [【補助・耐久・リソース枠】]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
        "acc2": "gold_accessories_e69591e59bbde58_73"
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
      "defaultEfficiency": 100,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_laevatain_skill_multiplier",
              "name": "焼滅 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 5.0,
              "description": "通常時: 初回R1=62%→R9=112%→特化III=140%、劫火4追撃R1=342%→R9=616%→特化III=770%(燃焼持続ダメ毎秒6%→14%) / 必殺中: 1段目147%→264%→330%、2段目164%→296%→370%、劫火4追撃400%→720%→900%",
              "condition": "SP消費100 / 命中時劫火+1 / 劫火4段階時は全消費して追撃＆強制燃焼(5秒) / 必殺技中は2段攻撃に強化"
            },
            {
              "id": "buff_laevatain_skill_aux",
              "name": "焼滅 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 5.0,
              "description": "ブレイク値: 初回10+追撃10(必殺中10+10+10) / 劫火4追撃命中時必殺チャージ+100回復",
              "condition": "SP消費100 / 命中時劫火+1 / 劫火4段階時は全消費して追撃＆強制燃焼(5秒) / 必殺技中は2段攻撃に強化"
            },
            {
              "id": "buff_laevatain_skill_special",
              "name": "焼滅 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 5.0,
              "description": "【劫火4段階消費＆必殺中変化】戦技自体は灼熱付着を持たず、劫火4段階消費時に強制燃焼(5秒)を付与し必殺チャージを100回復する。必殺技持続中は倍率が専用テーブルに変化",
              "condition": "SP消費100 / 命中時劫火+1 / 劫火4段階時は全消費して追撃＆強制燃焼(5秒) / 必殺技中は2段攻撃に強化",
              "special": "【劫火4段階消費＆必殺中変化】戦技自体は灼熱付着を持たず、劫火4段階消費時に強制燃焼(5秒)を付与し必殺チャージを100回復する。必殺技持続中は倍率が専用テーブルに変化"
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
          "special": "【劫火4段階消費＆必殺中変化】戦技自体は灼熱付着を持たず、劫火4段階消費時に強制燃焼(5秒)を付与し必殺チャージを100回復する。必殺技持続中は倍率が専用テーブルに変化"
        },
        {
          "id": "combo_laevatain",
          "type": "combo",
          "name": "烈火",
          "shortName": "連携技",
          "damageType": "灼熱",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_laevatain_combo_multiplier",
              "name": "烈火 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 10.0,
              "description": "灼熱ダメ倍率: R1=240% → R9=432% → 特化III=540%",
              "condition": "敵が燃焼または腐食状態になった時発動可 / CD: R1〜9=10秒→特化III=9秒(※灼熱付着なし！)"
            },
            {
              "id": "buff_laevatain_combo_aux",
              "name": "烈火 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 10.0,
              "description": "ブレイク値10 / 命中時劫火+1獲得 / 必殺チャージ回復: 敵1体25・2体30・3体以上35",
              "condition": "敵が燃焼または腐食状態になった時発動可 / CD: R1〜9=10秒→特化III=9秒(※灼熱付着なし！)"
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
          "anomalyText": "なし"
        },
        {
          "id": "ult_laevatain",
          "type": "ult",
          "name": "ラグナロク",
          "shortName": "必殺技",
          "damageType": "灼熱",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_laevatain_ult_multiplier",
              "name": "ラグナロク [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 15.0,
              "description": "強化通常攻撃1〜4段: R1[65%/81%/115%/203%] → R9[117%/146%/208%/365%] → 特化III[146%/182%/260%/456%]",
              "condition": "必殺チャージ消費300 / 持続15秒 / 強制的に自身が操作オペレーターへ切替 / 通常攻撃4段化＆戦技強化"
            },
            {
              "id": "buff_laevatain_ult_special",
              "name": "ラグナロク [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 15.0,
              "description": "【強化通常攻撃モード】15秒間通常攻撃が4段の魔剣協同攻撃に置き換わり、その3段目のみ灼熱付着(1段階)を付与する",
              "condition": "必殺チャージ消費300 / 持続15秒 / 強制的に自身が操作オペレーターへ切替 / 通常攻撃4段化＆戦技強化",
              "special": "【強化通常攻撃モード】15秒間通常攻撃が4段の魔剣協同攻撃に置き換わり、その3段目のみ灼熱付着(1段階)を付与する"
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
          "special": "【強化通常攻撃モード】15秒間通常攻撃が4段の魔剣協同攻撃に置き換わり、その3段目のみ灼熱付着(1段階)を付与する"
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
              "name": "灼熱の心 [【枠9】敵耐性ダウン・耐性無視枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "res_down",
              "calcGroupLabel": "【枠9】敵耐性ダウン・耐性無視枠",
              "value": 0,
              "duration": 20.0,
              "description": "劫火4段階到達時、20秒間自身の攻撃が敵の灼熱耐性を10(初期)→15(昇進1)→20(昇進3)無視",
              "condition": "操作キャラの重攻撃/終撃命中時または近くの敵撃破時に灼熱付着を吸収→劫火獲得(最大4段階) / 4段階到達時20秒間"
            },
            {
              "id": "buff_laevatain_talent1_special",
              "name": "灼熱の心 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
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
              "name": "再燃 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
        "body": "gold_body_e781abe5b1b1e79_30",
        "arm": "gold_arms_e781abe5b1b1e79_28",
        "acc1": "gold_accessories_e781abe5b1b1e79_37",
        "acc2": "gold_accessories_e7949fe789a9e8a_63"
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
      "defaultEfficiency": 100,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_lastrite_skill_multiplier",
              "name": "セシュカの秘伝 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 15.0,
              "description": "幻影追撃寒冷ダメ倍率(ラストライト基準): R1=142% → R9=256% → 特化III=320%",
              "condition": "SP消費100(即時SP30返還) / 操作中の味方武器に15秒間「低温注入」付与 → 次の重攻撃時に幻影追撃発動"
            },
            {
              "id": "buff_lastrite_skill_aux",
              "name": "セシュカの秘伝 [【補助・耐久・リソース枠】]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 15.0,
              "description": "即時SP30返還 / 幻影追撃発動時にラストライトの必殺チャージ+16回復",
              "condition": "SP消費100(即時SP30返還) / 操作中の味方武器に15秒間「低温注入」付与 → 次の重攻撃時に幻影追撃発動"
            },
            {
              "id": "buff_lastrite_skill_special",
              "name": "セシュカの秘伝 [【特殊枠（例外処理）】]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 15.0,
              "description": "【低温注入(重攻撃連動追撃)】戦技ボタンを押した瞬間ではなく、バフを受けた操作中オペレーターが15秒以内に次の重攻撃を当てた瞬間にラストライトの幻影が追撃し、寒冷ダメ＋寒冷付着(1段階)を与える",
              "condition": "SP消費100(即時SP30返還) / 操作中の味方武器に15秒間「低温注入」付与 → 次の重攻撃時に幻影追撃発動",
              "special": "【低温注入(重攻撃連動追撃)】戦技ボタンを押した瞬間ではなく、バフを受けた操作中オペレーターが15秒以内に次の重攻撃を当てた瞬間にラストライトの幻影が追撃し、寒冷ダメ＋寒冷付着(1段階)を与える"
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
          "special": "【低温注入(重攻撃連動追撃)】戦技ボタンを押した瞬間ではなく、バフを受けた操作中オペレーターが15秒以内に次の重攻撃を当てた瞬間にラストライトの幻影が追撃し、寒冷ダメ＋寒冷付着(1段階)を与える"
        },
        {
          "id": "combo_lastrite",
          "type": "combo",
          "name": "冬喰",
          "shortName": "連携技",
          "damageType": "寒冷",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_lastrite_combo_multiplier",
              "name": "冬喰 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 9.0,
              "description": "氷柱: R1=71%→R9=128%→特化III=160% ＋ 斬撃基礎: R1=71%→R9=128%→特化III=160% ＋ 寒冷付着消費1段階につき追加: R1=+107%→R9=+192%→特化III=+240%(3段階消費で計1040%、4段階で1280%)",
              "condition": "敵の寒冷付着が3段階以上になった時発動可 / CD: R1〜9=9秒→特化III=8秒"
            },
            {
              "id": "buff_lastrite_combo_aux",
              "name": "冬喰 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 9.0,
              "description": "斬撃ブレイク値15 / 必殺チャージ回復: 基礎40 ＋ 付着消費1段階につき+15(3段階で85、4段階で100)",
              "condition": "敵の寒冷付着が3段階以上になった時発動可 / CD: R1〜9=9秒→特化III=8秒"
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
          "anomalyText": "敵の寒冷付着を全段階消費(3段階または4段階消費)"
        },
        {
          "id": "ult_lastrite",
          "type": "ult",
          "name": "終の別れ",
          "shortName": "必殺技",
          "damageType": "寒冷",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_lastrite_ult_multiplier",
              "name": "終の別れ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "3段斬撃: R1[178%/178%/356%] → R9[320%/320%/640%] → 特化III[400%/400%/800%](合計1600%)",
              "condition": "必殺チャージ消費240(※自身の戦技・連携技でのみチャージ回復可能) / 発動中無敵"
            },
            {
              "id": "buff_lastrite_ult_aux",
              "name": "終の別れ [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値[5+5+10=20] / 発動中被ダメ完全無効",
              "condition": "必殺チャージ消費240(※自身の戦技・連携技でのみチャージ回復可能) / 発動中無敵"
            },
            {
              "id": "buff_lastrite_ult_special",
              "name": "終の別れ [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【必殺チャージ獲得制限】ラストライトの必殺チャージはチーム共通のSP消費等では回復せず、自身の戦技(16)および連携技(40+15×段階)でのみ回復可能（チャージ回復効率UPは乗る）",
              "condition": "必殺チャージ消費240(※自身の戦技・連携技でのみチャージ回復可能) / 発動中無敵",
              "special": "【必殺チャージ獲得制限】ラストライトの必殺チャージはチーム共通のSP消費等では回復せず、自身の戦技(16)および連携技(40+15×段階)でのみ回復可能（チャージ回復効率UPは乗る）"
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
          "special": "【必殺チャージ獲得制限】ラストライトの必殺チャージはチーム共通のSP消費等では回復せず、自身の戦技(16)および連携技(40+15×段階)でのみ回復可能（チャージ回復効率UPは乗る）"
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
              "name": "低体温症 [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
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
              "name": "低温脆性 [【枠11】敵脆弱枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 0,
              "duration": 0.0,
              "description": "敵の寒冷脆弱の効果を1.2倍(昇進2) → 1.5倍(昇進3)として計算(必殺技ヒット時のみ乗算強化)",
              "condition": "必殺技「終の別れ」で寒冷脆弱状態の敵にダメージを与える時"
            },
            {
              "id": "buff_lastrite_talent2_special",
              "name": "低温脆性 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
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
        "acc2": "gold_accessories_e7949fe789a9e8a_63"
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_lifeng_skill_multiplier",
              "name": "浄化身 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 12.0,
              "description": "1〜3段目: R1[38%/38%/119%] → R9[69%/69%/214%] → 特化III[86%/86%/268%]",
              "condition": "SP消費100 / 最終撃命中時、敵がクラッシュ状態でない場合(1凸でクラッシュ2以下も可)に物理脆弱(12秒)付与"
            },
            {
              "id": "buff_lifeng_skill_vulnerability",
              "name": "浄化身 [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 0,
              "duration": 12.0,
              "description": "クラッシュ0(1凸で2以下)の敵に物理脆弱(12秒): R1=5% → R9=9% → 特化III=12%",
              "condition": "SP消費100 / 最終撃命中時、敵がクラッシュ状態でない場合(1凸でクラッシュ2以下も可)に物理脆弱(12秒)付与"
            },
            {
              "id": "buff_lifeng_skill_aux",
              "name": "浄化身 [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 12.0,
              "description": "SP消費100 / 3段目ブレイク値10",
              "condition": "SP消費100 / 最終撃命中時、敵がクラッシュ状態でない場合(1凸でクラッシュ2以下も可)に物理脆弱(12秒)付与"
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
          "anomalyText": "3段目で転倒付与(クラッシュ+1段階)"
        },
        {
          "id": "combo_lifeng",
          "type": "combo",
          "name": "忿怒形",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_lifeng_combo_multiplier",
              "name": "忿怒形 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 16.0,
              "description": "1・2段目倍率: R1[47%+167%] → R9[84%+300%] → 特化III[105%+375%]",
              "condition": "物理脆弱または破砕状態の敵が操作キャラの重攻撃を受けた時発動可 / CD: R1〜9=16秒→特化III=15秒"
            },
            {
              "id": "buff_lifeng_combo_link",
              "name": "忿怒形 [【枠8】リンク補正枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "link",
              "calcGroupLabel": "【枠8】リンク補正枠",
              "value": 0,
              "duration": 16.0,
              "description": "リンク状態獲得(20秒間、チーム共有・誰かの次の戦技1.3倍または必殺1.2倍で消費)",
              "condition": "物理脆弱または破砕状態の敵が操作キャラの重攻撃を受けた時発動可 / CD: R1〜9=16秒→特化III=15秒"
            },
            {
              "id": "buff_lifeng_combo_aux",
              "name": "忿怒形 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 16.0,
              "description": "2段目ブレイク値10",
              "condition": "物理脆弱または破砕状態の敵が操作キャラの重攻撃を受けた時発動可 / CD: R1〜9=16秒→特化III=15秒"
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
          "anomalyText": "なし"
        },
        {
          "id": "ult_lifeng",
          "type": "ult",
          "name": "不動心",
          "shortName": "必殺技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_lifeng_ult_multiplier",
              "name": "不動心 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 15.0,
              "description": "1段目: R1=178%→R9=320%→特化III=400% / 2段目: R1=178%→R9=320%→特化III=400% / リンク消費時追加ダメ: R1=267%→R9=480%→特化III=600%",
              "condition": "必殺チャージ消費90 / CD15秒"
            },
            {
              "id": "buff_lifeng_ult_aux",
              "name": "不動心 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 15.0,
              "description": "敵を中心に引き寄せ",
              "condition": "必殺チャージ消費90 / CD15秒"
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
          "anomalyText": "1段目・2段目それぞれで転倒付与(計クラッシュ+2段階) / リンク消費時に追加物理ダメ"
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
              "name": "円頓 [【枠2】能力値枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "stat",
              "calcGroupLabel": "【枠2】能力値枠",
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
              "name": "伏魔 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
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
      "defaultEfficiency": 142.7,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_lino_skill_atk_pct",
              "name": "キラキラフォーカス [【枠1】攻撃力%枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "atk_pct",
              "calcGroupLabel": "【枠1】攻撃力%枠",
              "value": 10,
              "duration": 60.0,
              "description": "ライブモード中チーム全員の攻撃力UP: R1=+6% → R9=+8% → 特化III=+10%",
              "condition": "SP消費25 / 60秒間「ライブモード」に移行(期間中戦技はSP0の「モード停止」に変化) / 10秒毎追加攻撃・3秒毎範囲治療"
            },
            {
              "id": "buff_lino_skill_multiplier",
              "name": "キラキラフォーカス [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 60.0,
              "description": "初回電磁ダメ: R1=107%→R9=192%→特化III=240% / 10秒毎追加電磁ダメ: R1=53%→R9=96%→特化III=120%",
              "condition": "SP消費25 / 60秒間「ライブモード」に移行(期間中戦技はSP0の「モード停止」に変化) / 10秒毎追加攻撃・3秒毎範囲治療"
            },
            {
              "id": "buff_lino_skill_aux",
              "name": "キラキラフォーカス [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体回復",
              "category": "buff",
              "calcGroup": "heal",
              "calcGroupLabel": "【回復・耐久枠】(全体回復)",
              "value": 0,
              "duration": 60.0,
              "description": "SP消費25 / ブレイク値3 / 3秒毎範囲HP回復: R1[18+敏捷×0.04]→R9[38+敏捷×0.09]→特化III[41+敏捷×0.09]",
              "condition": "SP消費25 / 60秒間「ライブモード」に移行(期間中戦技はSP0の「モード停止」に変化) / 10秒毎追加攻撃・3秒毎範囲治療"
            },
            {
              "id": "buff_lino_skill_special",
              "name": "キラキラフォーカス [【特殊枠（例外処理）】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 60.0,
              "description": "【SP25モード切替戦技】通常のSP100ではなくSP25で60秒間のライブモードを展開し、再使用時はSP0でモード停止する（※電磁付着なし）",
              "condition": "SP消費25 / 60秒間「ライブモード」に移行(期間中戦技はSP0の「モード停止」に変化) / 10秒毎追加攻撃・3秒毎範囲治療",
              "special": "【SP25モード切替戦技】通常のSP100ではなくSP25で60秒間のライブモードを展開し、再使用時はSP0でモード停止する（※電磁付着なし）"
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
          "special": "【SP25モード切替戦技】通常のSP100ではなくSP25で60秒間のライブモードを展開し、再使用時はSP0でモード停止する（※電磁付着なし）"
        },
        {
          "id": "combo_lino",
          "type": "combo",
          "name": "ときめきメロディー",
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
              "id": "buff_lino_combo_multiplier",
              "name": "ときめきメロディー [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 10.0,
              "description": "電磁ダメ倍率: R1=160% → R9=288% → 特化III=360%",
              "condition": "ライブモード期間中、敵がアーツ異常を受けるか消費された時発動可 / CD: R1=10秒→R9=9秒→特化III=8秒"
            },
            {
              "id": "buff_lino_combo_aux",
              "name": "ときめきメロディー [【補助・耐久・リソース枠】]",
              "target": "single",
              "targetLabel": "単体回復",
              "category": "buff",
              "calcGroup": "heal",
              "calcGroupLabel": "【回復・耐久枠】(単体回復)",
              "value": 0,
              "duration": 10.0,
              "description": "ブレイク値5 / 必殺チャージ+20回復 / 操作キャラHP回復: R1[72+敏捷×0.17]→R9[151+敏捷×0.35]→特化III[162+敏捷×0.38]",
              "condition": "ライブモード期間中、敵がアーツ異常を受けるか消費された時発動可 / CD: R1=10秒→R9=9秒→特化III=8秒"
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
          "anomalyText": "なし"
        },
        {
          "id": "ult_lino",
          "type": "ult",
          "name": "綺羅星コンチェルト",
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
              "id": "buff_lino_ult_atk_pct",
              "name": "綺羅星コンチェルト [【枠1】攻撃力%枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "atk_pct",
              "calcGroupLabel": "【枠1】攻撃力%枠",
              "value": 10,
              "duration": 15.0,
              "description": "パフォーマンスモード中チーム全員の攻撃力+10%",
              "condition": "必殺チャージ消費160 / CD20秒 / 15秒間「パフォーマンスモード」(ライブモードを上書き・1.5秒毎歌唱・完走時3倍フィニッシュ)"
            },
            {
              "id": "buff_lino_ult_multiplier",
              "name": "綺羅星コンチェルト [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "ステージ花火: R1=142%→R9=256%→特化III=320% / クライマックス最高潮: R1=284%→R9=512%→特化III=640% / 1.5秒毎歌唱: R1=27%→R9=48%→特化III=60%(完走時終了ダメは歌唱の3倍=180%)",
              "condition": "必殺チャージ消費160 / CD20秒 / 15秒間「パフォーマンスモード」(ライブモードを上書き・1.5秒毎歌唱・完走時3倍フィニッシュ)"
            },
            {
              "id": "buff_lino_ult_amp",
              "name": "綺羅星コンチェルト [【枠5】増幅枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "amp",
              "calcGroupLabel": "【枠5】増幅枠",
              "value": 60,
              "duration": 15.0,
              "description": "チーム全員に意志参照の電磁増幅 & 自然増幅: 意志1につきR1=+0.018%(上限40%) → R9=+0.032%(上限45%) → 特化III=+0.04%(上限60%)",
              "condition": "必殺チャージ消費160 / CD20秒 / 15秒間「パフォーマンスモード」(ライブモードを上書き・1.5秒毎歌唱・完走時3倍フィニッシュ)"
            },
            {
              "id": "buff_lino_ult_aux",
              "name": "綺羅星コンチェルト [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体回復",
              "category": "buff",
              "calcGroup": "heal",
              "calcGroupLabel": "【回復・耐久枠】(全体回復)",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値20 / 初回全体回復: R1[324+敏捷×0.76]→特化III[729+敏捷×1.7] / 1.5秒毎範囲回復: R1[36+敏捷×0.08]→特化III[81+敏捷×0.19](完走時3倍全体回復)",
              "condition": "必殺チャージ消費160 / CD20秒 / 15秒間「パフォーマンスモード」(ライブモードを上書き・1.5秒毎歌唱・完走時3倍フィニッシュ)"
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
          "anomalyText": "クライマックス最高潮で強制感電付与(※電磁付着は付与しない！)"
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
              "name": "アイドルゾーン [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "一等星の応援 [【補助・耐久・リソース枠】]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
        "body": "gold_body_e7949fe789a9e8a_46",
        "arm": "gold_arms_e7949fe789a9e8a_41",
        "acc1": "gold_accessories_e7949fe789a9e8a_64",
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
      "defaultEfficiency": 100,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_mifu_skill_multiplier",
              "name": "清波三芸（断雲 → 追形 → 開天） [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "断雲: R1=67%→R9=120%→特化III=150% / 追形: R1=89%→R9=160%→特化III=200%(+猛撃異常ダメ) / 開天(猛撃ダメ扱い): R1=400%→R9=528%→特化III=600%",
              "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)"
            },
            {
              "id": "buff_mifu_skill_aux",
              "name": "清波三芸（断雲 → 追形 → 開天） [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値: 追形5 / 開天10 / 断雲で敵を引き寄せ",
              "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)"
            },
            {
              "id": "buff_mifu_skill_special",
              "name": "清波三芸（断雲 → 追形 → 開天） [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
              "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
              "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）"
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
          "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）"
        },
        {
          "id": "skill2_mifu",
          "type": "skill2",
          "name": "清波三芸（断雲 → 追形 → 開天）",
          "shortName": "戦技2",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.1,
            "lv10_spec1": 2.31,
            "lv11_spec2": 2.57,
            "lv12_spec3": 2.89
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_mifu_skill_multiplier",
              "name": "清波三芸（断雲 → 追形 → 開天） [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "断雲: R1=67%→R9=120%→特化III=150% / 追形: R1=89%→R9=160%→特化III=200%(+猛撃異常ダメ) / 開天(猛撃ダメ扱い): R1=400%→R9=528%→特化III=600%",
              "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)"
            },
            {
              "id": "buff_mifu_skill_aux",
              "name": "清波三芸（断雲 → 追形 → 開天） [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値: 追形5 / 開天10 / 断雲で敵を引き寄せ",
              "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)"
            },
            {
              "id": "buff_mifu_skill_special",
              "name": "清波三芸（断雲 → 追形 → 開天） [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
              "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
              "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）"
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
          "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）"
        },
        {
          "id": "skill3_mifu",
          "type": "skill3",
          "name": "清波三芸（断雲 → 追形 → 開天）",
          "shortName": "戦技3",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.1,
            "lv10_spec1": 2.31,
            "lv11_spec2": 2.57,
            "lv12_spec3": 2.89
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_mifu_skill_multiplier",
              "name": "清波三芸（断雲 → 追形 → 開天） [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "断雲: R1=67%→R9=120%→特化III=150% / 追形: R1=89%→R9=160%→特化III=200%(+猛撃異常ダメ) / 開天(猛撃ダメ扱い): R1=400%→R9=528%→特化III=600%",
              "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)"
            },
            {
              "id": "buff_mifu_skill_aux",
              "name": "清波三芸（断雲 → 追形 → 開天） [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値: 追形5 / 開天10 / 断雲で敵を引き寄せ",
              "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)"
            },
            {
              "id": "buff_mifu_skill_special",
              "name": "清波三芸（断雲 → 追形 → 開天） [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）",
              "condition": "断雲:SP100消費→50返還(実質50) / 追形:SP50消費 / 開天:SP50消費(追形でクラッシュ3段階以上消費時のみ)",
              "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）"
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
          "special": "【3段変化戦技＆猛撃ダメージ見なし】1段目『断雲』(実質SP50)、2段目『追形』(SP50・連携/必殺後も直接移行可・猛撃付与)、3段目『開天』(SP50・クラッシュ3以上消費時)。『開天』は戦技ダメージではなく『猛撃ダメージ』と見なされる（戦技ダメUP・リンク非適用、猛撃参照効果が乗る）"
        },
        {
          "id": "combo_mifu",
          "type": "combo",
          "name": "拳に悔い無し",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_mifu_combo_multiplier",
              "name": "拳に悔い無し [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "物理ダメ倍率: R1=111% → R9=200% → 特化III=250%",
              "condition": "敵のクラッシュ段階が3になった時発動可 / CD: R1〜9=20秒→特化III=19秒 / 発動後戦技が「追形」に変化"
            },
            {
              "id": "buff_mifu_combo_vulnerability",
              "name": "拳に悔い無し [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 0,
              "duration": 20.0,
              "description": "敵に物理脆弱5%(16秒間)",
              "condition": "敵のクラッシュ段階が3になった時発動可 / CD: R1〜9=20秒→特化III=19秒 / 発動後戦技が「追形」に変化"
            },
            {
              "id": "buff_mifu_combo_aux",
              "name": "拳に悔い無し [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値10 / 必殺チャージ+10回復 / 戦技を2段目「追形」に切替",
              "condition": "敵のクラッシュ段階が3になった時発動可 / CD: R1〜9=20秒→特化III=19秒 / 発動後戦技が「追形」に変化"
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
          "anomalyText": "なし"
        },
        {
          "id": "ult_mifu",
          "type": "ult",
          "name": "心絶やす",
          "shortName": "必殺技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_mifu_ult_multiplier",
              "name": "心絶やす [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 15.0,
              "description": "物理ダメ倍率: R1=311% → R9=560% → 特化III=700%",
              "condition": "必殺チャージ消費80 / CD15秒 / 発動後戦技が「追形」に変化"
            },
            {
              "id": "buff_mifu_ult_aux",
              "name": "心絶やす [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 15.0,
              "description": "ブレイク値20 / 戦技を2段目「追形」に切替",
              "condition": "必殺チャージ消費80 / CD15秒 / 発動後戦技が「追形」に変化"
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
          "anomalyText": "強制浮遊付与(クラッシュ+1段階)"
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
              "name": "冷酷無比 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
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
              "name": "怒りを封ず [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
        "acc2": "gold_accessories_e7949fe789a9e8a_63"
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
              "name": "鎮影 ／ 派生「奔雷」 [【枠10】敵被ダメージUP枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "taken_damage_up",
              "calcGroupLabel": "【枠10】敵被ダメージUP枠",
              "value": 0,
              "duration": 0.0,
              "description": "奔雷の強制感電＋素質1により敵が受ける「全種類のダメージ」UP(数値Wiki未記載)",
              "condition": "連携技発動後に「鎮影」が「奔雷」へ変化(倍率・消費SP数値はWiki未記載)"
            },
            {
              "id": "buff_minho_skill_special",
              "name": "鎮影 ／ 派生「奔雷」 [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【戦技変化＆電磁付着消費→高段階感電＋クラッシュ付与】鎮影は物理ダメ＋浮遊(付着なし)。連携後の『奔雷』は電磁付着を付与するのではなく、既存の電磁付着を消費して高段階感電とクラッシュ1段階を同時付与する（※具体的倍率はWiki未記載）",
              "condition": "連携技発動後に「鎮影」が「奔雷」へ変化(倍率・消費SP数値はWiki未記載)",
              "special": "【戦技変化＆電磁付着消費→高段階感電＋クラッシュ付与】鎮影は物理ダメ＋浮遊(付着なし)。連携後の『奔雷』は電磁付着を付与するのではなく、既存の電磁付着を消費して高段階感電とクラッシュ1段階を同時付与する（※具体的倍率はWiki未記載）"
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
              "name": "星霜 [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【Wiki数値未記載】電磁ダメージ複数回＋電磁付着付与＋戦技を「奔雷」へ切替（CD・倍率はWiki未記載）",
              "condition": "敵がクラッシュ状態になった時発動可 / 発動後戦技が「奔雷」に変化(CD・倍率はWiki未記載)",
              "special": "【Wiki数値未記載】電磁ダメージ複数回＋電磁付着付与＋戦技を「奔雷」へ切替（CD・倍率はWiki未記載）"
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
              "name": "破天 [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【電磁付着＋猛撃複合必殺・Wiki数値未記載】電磁付着(1段階)を付与した直後に広範囲へ猛撃(素質1の雷勢起爆トリガー)と電磁ダメージを与える",
              "condition": "突進運搬→鋭光(電磁付着1段階)→槍突き刺し(猛撃＋電磁ダメ) ※チャージ量・倍率はWiki未記載",
              "special": "【電磁付着＋猛撃複合必殺・Wiki数値未記載】電磁付着(1段階)を付与した直後に広範囲へ猛撃(素質1の雷勢起爆トリガー)と電磁ダメージを与える"
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
              "name": "天奔る稲妻 [【枠10】敵被ダメージUP枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "taken_damage_up",
              "calcGroupLabel": "【枠10】敵被ダメージUP枠",
              "value": 0,
              "duration": 0.0,
              "description": "自身が付与した感電はアーツだけでなく敵が受ける「全種類のダメージ」をアップさせる(物理にも乗る特殊仕様)",
              "condition": "自身が感電状態を付与した時 → 目標が猛撃ダメージを受けた時"
            },
            {
              "id": "buff_minho_talent1_special",
              "name": "天奔る稲妻 [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
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
              "name": "（Wiki未記載） [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
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
      "defaultEfficiency": 146.4,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_okugi_skill_multiplier",
              "name": "砕玉領域【陣訣・知(知性≧意志)】 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "自然ダメ倍率(知): R1=222% → R9=400% → 特化III=500%",
              "condition": "SP消費100 / ステータス画面で知性≧意志の時"
            },
            {
              "id": "buff_okugi_skill_aux",
              "name": "砕玉領域【陣訣・知(知性≧意志)】 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "SP消費100 / ブレイク値10",
              "condition": "SP消費100 / ステータス画面で知性≧意志の時"
            },
            {
              "id": "buff_okugi_skill_special",
              "name": "砕玉領域【陣訣・知(知性≧意志)】 [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【陣訣・知/意のスキル形態分岐】ステータス画面の知性≧意志で高倍率の陣訣・知になる",
              "condition": "SP消費100 / ステータス画面で知性≧意志の時",
              "special": "【陣訣・知/意のスキル形態分岐】ステータス画面の知性≧意志で高倍率の陣訣・知になる"
            }
          ],
          "spCost": 100,
          "description": "砕玉領域を展開し、範囲内の敵に自然ダメージを与え、さらに自然付着を付与する。陣訣・知：与えるダメージがさらに高くなる(222%→400%→500%)。",
          "damageTypeDetail": "自然",
          "rawText": "砕玉領域を展開し、範囲内の敵に自然ダメージを与え、さらに自然付着を付与する。陣訣・知：与えるダメージがさらに高くなる(222%→400%→500%)。",
          "attachText": "自然付着(1段階)",
          "anomalyText": "牢獄中の敵命中時、連携(知)の早期起爆・SP返還・追加ダメを誘発",
          "special": "【陣訣・知/意のスキル形態分岐】ステータス画面の知性≧意志で高倍率の陣訣・知になる"
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
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_okugi_combo_multiplier",
              "name": "応龍四式【陣訣・知(知性≧意志)】 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 14.0,
              "description": "基礎ダメ: R1=35%→R9=64%→特化III=80% / 牢獄終了爆発: R1=53%→R9=96%→特化III=120% / 自身戦技命中時の追加ダメ: R1=222%→R9=400%→特化III=500%",
              "condition": "自然付着付与または2段階以上の他属性付着時に発動可 / CD: R1=14秒→R9=13秒→特化III=12秒"
            },
            {
              "id": "buff_okugi_combo_vulnerability",
              "name": "応龍四式【陣訣・知(知性≧意志)】 [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 0,
              "duration": 14.0,
              "description": "自然脆弱 & 寒冷脆弱4%(4秒間、自身戦技命中時に再度2秒間4%付与)",
              "condition": "自然付着付与または2段階以上の他属性付着時に発動可 / CD: R1=14秒→R9=13秒→特化III=12秒"
            },
            {
              "id": "buff_okugi_combo_aux",
              "name": "応龍四式【陣訣・知(知性≧意志)】 [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 14.0,
              "description": "必殺チャージ+10 / ブレイク値5+5 / 牢獄状態(行動遅延4秒) / 自身戦技が牢獄中の敵に命中時SP返還: R1〜9=28→特化III=30",
              "condition": "自然付着付与または2段階以上の他属性付着時に発動可 / CD: R1=14秒→R9=13秒→特化III=12秒"
            },
            {
              "id": "buff_okugi_combo_special",
              "name": "応龍四式【陣訣・知(知性≧意志)】 [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 14.0,
              "description": "【陣訣・知の連携挙動】陣訣・知では連携技にアーツ付着効果はなく、自身の戦技命中による牢獄早期起爆＋SP返還(28〜30)＋高倍率追撃(222%〜500%)に特化する",
              "condition": "自然付着付与または2段階以上の他属性付着時に発動可 / CD: R1=14秒→R9=13秒→特化III=12秒",
              "special": "【陣訣・知の連携挙動】陣訣・知では連携技にアーツ付着効果はなく、自身の戦技命中による牢獄早期起爆＋SP返還(28〜30)＋高倍率追撃(222%〜500%)に特化する"
            }
          ],
          "description": "陣訣・知：自然脆弱と寒冷脆弱(4%)を付与し牢獄状態(4秒)にする。自身の戦技が牢獄状態の敵に命中したときSP返還(28→30)、爆発ダメージを与え再度脆弱付与し追加ダメージ(222%→500%)を与える。（※陣訣・知は連携での付着なし）",
          "damageTypeDetail": "自然",
          "rawText": "陣訣・知：自然脆弱と寒冷脆弱(4%)を付与し牢獄状態(4秒)にする。自身の戦技が牢獄状態の敵に命中したときSP返還(28→30)、爆発ダメージを与え再度脆弱付与し追加ダメージ(222%→500%)を与える。（※陣訣・知は連携での付着なし）",
          "attachText": "なし",
          "anomalyText": "なし",
          "special": "【陣訣・知の連携挙動】陣訣・知では連携技にアーツ付着効果はなく、自身の戦技命中による牢獄早期起爆＋SP返還(28〜30)＋高倍率追撃(222%〜500%)に特化する"
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
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_okugi_ult_multiplier",
              "name": "破晦【陣訣・知(知性≧意志)】 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "陣生成: R1=80%→R9=144%→特化III=180% / 集中攻撃(最大2回・各): R1=160%→R9=288%→特化III=360% / 2段目「破晦訣明」: R1=640%→R9=1152%→特化III=1440%",
              "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放"
            },
            {
              "id": "buff_okugi_ult_res_down",
              "name": "破晦【陣訣・知(知性≧意志)】 [【枠9】敵耐性ダウン・耐性無視枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "res_down",
              "calcGroupLabel": "【枠9】敵耐性ダウン・耐性無視枠",
              "value": 0,
              "duration": 20.0,
              "description": "強制腐食(15秒、素質2で25秒・最大耐性低下1.1倍)による全属性耐性ダウン",
              "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放"
            },
            {
              "id": "buff_okugi_ult_aux",
              "name": "破晦【陣訣・知(知性≧意志)】 [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値: 生成10＋破晦訣明10",
              "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放"
            },
            {
              "id": "buff_okugi_ult_special",
              "name": "破晦【陣訣・知(知性≧意志)】 [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 20.0,
              "description": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される",
              "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放",
              "special": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される"
            }
          ],
          "epCost": 100,
          "description": "陣訣・知：破晦陣を生成する際、範囲内の敵を強制的に腐食状態(15秒)にする。集中攻撃2回後に破晦訣明(640%→1152%→1440%)を発動可能。",
          "damageTypeDetail": "自然",
          "rawText": "陣訣・知：破晦陣を生成する際、範囲内の敵を強制的に腐食状態(15秒)にする。集中攻撃2回後に破晦訣明(640%→1152%→1440%)を発動可能。",
          "attachText": "なし",
          "anomalyText": "生成時に強制腐食付与(15秒間 ※アーツ付着は付与しない)",
          "special": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される"
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
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_okugi_ult_multiplier",
              "name": "破晦【陣訣・知(知性≧意志)】 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "陣生成: R1=80%→R9=144%→特化III=180% / 集中攻撃(最大2回・各): R1=160%→R9=288%→特化III=360% / 2段目「破晦訣明」: R1=640%→R9=1152%→特化III=1440%",
              "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放"
            },
            {
              "id": "buff_okugi_ult_res_down",
              "name": "破晦【陣訣・知(知性≧意志)】 [【枠9】敵耐性ダウン・耐性無視枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "res_down",
              "calcGroupLabel": "【枠9】敵耐性ダウン・耐性無視枠",
              "value": 0,
              "duration": 20.0,
              "description": "強制腐食(15秒、素質2で25秒・最大耐性低下1.1倍)による全属性耐性ダウン",
              "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放"
            },
            {
              "id": "buff_okugi_ult_aux",
              "name": "破晦【陣訣・知(知性≧意志)】 [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値: 生成10＋破晦訣明10",
              "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放"
            },
            {
              "id": "buff_okugi_ult_special",
              "name": "破晦【陣訣・知(知性≧意志)】 [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 20.0,
              "description": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される",
              "condition": "必殺チャージ消費100 / CD20秒 / 破晦陣持続20秒 / 重攻撃・終撃に連動して集中攻撃2回後、2段目「破晦訣明」解放",
              "special": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される"
            }
          ],
          "epCost": 0,
          "description": "陣訣・知：破晦陣を生成する際、範囲内の敵を強制的に腐食状態(15秒)にする。集中攻撃2回後に破晦訣明(640%→1152%→1440%)を発動可能。",
          "damageTypeDetail": "自然",
          "rawText": "陣訣・知：破晦陣を生成する際、範囲内の敵を強制的に腐食状態(15秒)にする。集中攻撃2回後に破晦訣明(640%→1152%→1440%)を発動可能。",
          "attachText": "なし",
          "anomalyText": "生成時に強制腐食付与(15秒間 ※アーツ付着は付与しない)",
          "special": "【陣訣・知の強制腐食＆超高倍率フィニッシュ】陣訣・知では強制腐食(15秒)を付与し、2段目『破晦訣明』が特化IIIで1440%の超高倍率となり、素質1で自身にアーツ増幅24%が付与される"
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
              "name": "画策 [【枠5】増幅枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "amp",
              "calcGroupLabel": "【枠5】増幅枠",
              "value": 0,
              "duration": 0.0,
              "description": "【陣訣・知】必殺技期間中、自身にアーツ増幅+24%(自己バフ)",
              "condition": "ステータス画面(Lv・素質・潜在・武器・防具のみ反映、戦闘中バフ非反映)の知性≧意志で陣訣・知、意志＞知性で陣訣・意 / 昇進2で必殺技強化"
            },
            {
              "id": "buff_okugi_talent1_vulnerability",
              "name": "画策 [【枠11】敵脆弱枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 0,
              "duration": 0.0,
              "description": "【陣訣・意】必殺技1段目・2段目命中時、敵に10秒間[意志×0.02%]の自然脆弱 & 寒冷脆弱(最大12.8%、重ね掛け不可)付与(敵デバフ)",
              "condition": "ステータス画面(Lv・素質・潜在・武器・防具のみ反映、戦闘中バフ非反映)の知性≧意志で陣訣・知、意志＞知性で陣訣・意 / 昇進2で必殺技強化"
            },
            {
              "id": "buff_okugi_talent1_special",
              "name": "画策 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
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
              "name": "研ぎ澄ます [【枠9】敵耐性ダウン・耐性無視枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "res_down",
              "calcGroupLabel": "【枠9】敵耐性ダウン・耐性無視枠",
              "value": 0,
              "duration": 0.0,
              "description": "自身が付与する腐食のダウンさせる最大耐性値が1.05倍(昇進1) → 1.1倍(昇進3)までアップ",
              "condition": "自身が腐食を付与する時"
            },
            {
              "id": "buff_okugi_talent2_aux",
              "name": "研ぎ澄ます [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
        "body": "gold_body_e781abe5b1b1e79_31",
        "arm": "gold_arms_e781abe5b1b1e79_29",
        "acc1": "gold_accessories_e781abe5b1b1e79_36",
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
      "defaultEfficiency": 100,
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
            "lv9": 3.6,
            "lv10_spec1": 3.95,
            "lv11_spec2": 4.35,
            "lv12_spec3": 4.8
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_perlica_skill_multiplier",
              "name": "協約ω：雷撃 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "電磁ダメ倍率: R1=178% → R9=320% → 特化III=400%",
              "condition": "SP消費100"
            },
            {
              "id": "buff_perlica_skill_aux",
              "name": "協約ω：雷撃 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "SP消費100 / ブレイク値10",
              "condition": "SP消費100"
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
          "anomalyText": "なし"
        },
        {
          "id": "combo_perlica",
          "type": "combo",
          "name": "即時協約：閃光鎖",
          "shortName": "連携技",
          "damageType": "電磁",
          "multipliers": {
            "lv9": 2.8,
            "lv10_spec1": 3.05,
            "lv11_spec2": 3.35,
            "lv12_spec3": 3.7
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_perlica_combo_multiplier",
              "name": "即時協約：閃光鎖 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "電磁ダメ倍率: R1=80% → R9=144% → 特化III=180%",
              "condition": "操作キャラが敵に重攻撃を与えた時発動可 / CD: R1〜9=20秒→特化III=19秒"
            },
            {
              "id": "buff_perlica_combo_taken_damage_up",
              "name": "即時協約：閃光鎖 [【枠10】敵被ダメージUP枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "taken_damage_up",
              "calcGroupLabel": "【枠10】敵被ダメージUP枠",
              "value": 0,
              "duration": 20.0,
              "description": "強制感電(5秒、段階1相当の被アーツダメ+12%×強度補正)",
              "condition": "操作キャラが敵に重攻撃を与えた時発動可 / CD: R1〜9=20秒→特化III=19秒"
            },
            {
              "id": "buff_perlica_combo_aux",
              "name": "即時協約：閃光鎖 [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値10",
              "condition": "操作キャラが敵に重攻撃を与えた時発動可 / CD: R1〜9=20秒→特化III=19秒"
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
          "anomalyText": "強制感電付与(5秒間 ※電磁付着ではなく直接感電状態にする)"
        },
        {
          "id": "ult_perlica",
          "type": "ult",
          "name": "協約ε：70.41κ",
          "shortName": "必殺技",
          "damageType": "電磁",
          "multipliers": {
            "lv9": 7.2,
            "lv10_spec1": 7.85,
            "lv11_spec2": 8.6,
            "lv12_spec3": 9.5
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_perlica_ult_multiplier",
              "name": "協約ε：70.41κ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "電磁ダメ倍率: R1=445% → R9=800% → 特化III=1000%",
              "condition": "必殺チャージ消費80(※電磁ダメのみ、電磁付着・感電ともになし！)"
            },
            {
              "id": "buff_perlica_ult_aux",
              "name": "協約ε：70.41κ [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値20",
              "condition": "必殺チャージ消費80(※電磁ダメのみ、電磁付着・感電ともになし！)"
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
          "anomalyText": "なし"
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
              "name": "殲滅協約 [【枠4】ダメージUP枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "damage_up",
              "calcGroupLabel": "【枠4】ダメージUP枠",
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
              "name": "循環協約 [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
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
        "acc1": "gold_accessories_e38391e383abe38_47",
        "acc2": "gold_accessories_e7949fe789a9e8a_63"
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_pogranichnik_skill_multiplier",
              "name": "戦線粉砕 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "2段物理ダメ: R1[86%+106%] → R9[154%+190%] → 特化III[192%+238%](+破砕異常ダメ: 80%×[1+消費数])",
              "condition": "SP消費100"
            },
            {
              "id": "buff_pogranichnik_skill_taken_damage_up",
              "name": "戦線粉砕 [【枠10】敵被ダメージUP枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "taken_damage_up",
              "calcGroupLabel": "【枠10】敵被ダメージUP枠",
              "value": 0,
              "duration": 0.0,
              "description": "破砕による敵の受ける物理ダメージUP: 4%×(消費段階+2)×(1+2×強度/[強度+300])",
              "condition": "SP消費100"
            },
            {
              "id": "buff_pogranichnik_skill_aux",
              "name": "戦線粉砕 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値5+5 / クラッシュ1〜4段階消費時SP回復: R1〜9[5/10/20/30] → 特化III[5/15/25/35](複数命中でも1回のみ)",
              "condition": "SP消費100"
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
          "anomalyText": "破砕付与(クラッシュ全段階消費＆物理被ダメUPデバフ)"
        },
        {
          "id": "combo_pogranichnik",
          "type": "combo",
          "name": "満月迎撃",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_pogranichnik_combo_multiplier",
              "name": "満月迎撃 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 18.0,
              "description": "1〜3段目(強化3段目): R1[42%/54%/66%(132%)] → R9[76%/97%/119%(238%)] → 特化III[95%/122%/149%(297%)]",
              "condition": "敵が猛撃または破砕でクラッシュを消費された時発動可 / 消費段階と同回数(最大3段・4消費時は3段目強化) / CD: R1〜9=18秒→特化III=17秒"
            },
            {
              "id": "buff_pogranichnik_combo_aux",
              "name": "満月迎撃 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 18.0,
              "description": "ブレイク値: 3+3+4(強化時9) / SP回復: 1段目5＋2段目7＋3段目13(4段階消費時は強化3段目23＝合計35回復)",
              "condition": "敵が猛撃または破砕でクラッシュを消費された時発動可 / 消費段階と同回数(最大3段・4消費時は3段目強化) / CD: R1〜9=18秒→特化III=17秒"
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
          "anomalyText": "なし"
        },
        {
          "id": "ult_pogranichnik",
          "type": "ult",
          "name": "盾兵旗隊、進め",
          "shortName": "必殺技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_pogranichnik_ult_multiplier",
              "name": "盾兵旗隊、進め [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 10.0,
              "description": "初回進軍: R1=133%→R9=240%→特化III=300% / 鉄誓1〜4回目「撹乱」: R1=45%→R9=80%→特化III=100% / 鉄誓5回目「勝決」: R1=200%→R9=360%→特化III=450%",
              "condition": "必殺チャージ消費90 / CD10秒 / 「鉄誓」5回分獲得(30秒) → 物理異常または自身の連携ダメ毎に1回消費し追撃＆SP回復"
            },
            {
              "id": "buff_pogranichnik_ult_aux",
              "name": "盾兵旗隊、進め [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 10.0,
              "description": "ブレイク値: 進軍10＋勝決15 / SP回復: 撹乱1回につきR1〜9=7.5→特化III=10(×4回)、最終5回目勝決R1〜9=30→特化III=40(合計最大80回復)",
              "condition": "必殺チャージ消費90 / CD10秒 / 「鉄誓」5回分獲得(30秒) → 物理異常または自身の連携ダメ毎に1回消費し追撃＆SP回復"
            },
            {
              "id": "buff_pogranichnik_ult_special",
              "name": "盾兵旗隊、進め [【特殊枠（例外処理）】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 10.0,
              "description": "【鉄誓5スタック連動追撃】物理異常または自身の連携技1ヒットごとに鉄誓を消費して盾兵追撃＆SP回復が発生し、任意のオペレーターによる誘発時に素質2の単体バフが付与される",
              "condition": "必殺チャージ消費90 / CD10秒 / 「鉄誓」5回分獲得(30秒) → 物理異常または自身の連携ダメ毎に1回消費し追撃＆SP回復",
              "special": "【鉄誓5スタック連動追撃】物理異常または自身の連携技1ヒットごとに鉄誓を消費して盾兵追撃＆SP回復が発生し、任意のオペレーターによる誘発時に素質2の単体バフが付与される"
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
          "special": "【鉄誓5スタック連動追撃】物理異常または自身の連携技1ヒットごとに鉄誓を消費して盾兵追撃＆SP回復が発生し、任意のオペレーターによる誘発時に素質2の単体バフが付与される"
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
              "name": "生ける旗印 [【枠1】攻撃力%枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "atk_pct",
              "calcGroupLabel": "【枠1】攻撃力%枠",
              "value": 0,
              "duration": 20.0,
              "description": "士気高揚(自己): 攻撃力+4%(昇進1)→+8%(昇進2)×最大3回(最大+24%、3凸最大+40%)",
              "condition": "自身のスキルでSPを累計80(3凸で60)回復するごと / 20秒間(個別カウント) / 最大3回重ね掛け(3凸で5回)"
            },
            {
              "id": "buff_pogranichnik_talent1_arts_intensity",
              "name": "生ける旗印 [【枠7】アーツ強度枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "arts_intensity",
              "calcGroupLabel": "【枠7】アーツ強度枠",
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
              "name": "戦術指導 [【枠1】攻撃力%枠]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "atk_pct",
              "calcGroupLabel": "【枠1】攻撃力%枠",
              "value": 0,
              "duration": 5.0,
              "description": "発動させた該当オペレーターに士気高揚付与: 攻撃力+8%×最大3回(最大+24%)",
              "condition": "任意のオペレーターが必殺技の後続効果(鉄誓消費)を発動させた時 / 5秒(昇進2)→10秒(昇進3) / 最大3回"
            },
            {
              "id": "buff_pogranichnik_talent2_arts_intensity",
              "name": "戦術指導 [【枠7】アーツ強度枠]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "arts_intensity",
              "calcGroupLabel": "【枠7】アーツ強度枠",
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
            "lv9": 3.6,
            "lv10_spec1": 3.95,
            "lv11_spec2": 4.35,
            "lv12_spec3": 4.8
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_purrchena_skill_multiplier",
              "name": "寝てませんよ！ → 派生「お友だちから離れろ～！」 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 3.0,
              "description": "派生頭突き自然ダメ倍率: R1=178% → R9=320% → 特化III=400%",
              "condition": "初段:SP消費100(即時SP20返還、初ブロック成功時さらに+3秒延長＆SP20返還) → 派生戦技「お友だちから離れろ～！」に変化"
            },
            {
              "id": "buff_purrchena_skill_aux",
              "name": "寝てませんよ！ → 派生「お友だちから離れろ～！」 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 3.0,
              "description": "自身と周囲の味方に加護90%(3秒、ブロック毎に減衰) / 頭突きブレイク値20 / SP返還20(+初ブロック時20)",
              "condition": "初段:SP消費100(即時SP20返還、初ブロック成功時さらに+3秒延長＆SP20返還) → 派生戦技「お友だちから離れろ～！」に変化"
            },
            {
              "id": "buff_purrchena_skill_special",
              "name": "寝てませんよ！ → 派生「お友だちから離れろ～！」 [【特殊枠（例外処理）】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 3.0,
              "description": "【物理キャラによる派生自然付着】物理属性オペレーターだが、戦技発動後に変化する派生戦技『お友だちから離れろ～！』で自然ダメージと自然付着(1段階)を与える",
              "condition": "初段:SP消費100(即時SP20返還、初ブロック成功時さらに+3秒延長＆SP20返還) → 派生戦技「お友だちから離れろ～！」に変化",
              "special": "【物理キャラによる派生自然付着】物理属性オペレーターだが、戦技発動後に変化する派生戦技『お友だちから離れろ～！』で自然ダメージと自然付着(1段階)を与える"
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
          "special": "【物理キャラによる派生自然付着】物理属性オペレーターだが、戦技発動後に変化する派生戦技『お友だちから離れろ～！』で自然ダメージと自然付着(1段階)を与える"
        },
        {
          "id": "combo_purrchena",
          "type": "combo",
          "name": "お菓子or“プレゼント”",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.8,
            "lv10_spec1": 3.05,
            "lv11_spec2": 3.35,
            "lv12_spec3": 3.7
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_purrchena_combo_multiplier",
              "name": "お菓子or“プレゼント” [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 24.0,
              "description": "ランダム分岐: ①爆弾(物理): R1=133%→R9=240%→特化III=300% / ②手作りアイテム(吸引+物理): R1=66%→R9=120%→特化III=150% / ③お菓子: ダメなし(追加回復)",
              "condition": "操作キャラ被弾時発動可 / CD: R1=24秒→R9=23秒→特化III=22秒 / 範囲治療＋3種アイテムからランダム1つ出現"
            },
            {
              "id": "buff_purrchena_combo_aux",
              "name": "お菓子or“プレゼント” [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体回復",
              "category": "buff",
              "calcGroup": "heal",
              "calcGroupLabel": "【回復・耐久枠】(全体回復)",
              "value": 0,
              "duration": 24.0,
              "description": "必殺チャージ+10 / 基礎範囲HP回復: R1[216+意志×0.5]→特化III[486+意志×1.13] / お菓子当選時操作キャラ追加回復: R1[144+意志×0.34]→特化III[324+意志×0.76] / 爆弾時ブレイク10",
              "condition": "操作キャラ被弾時発動可 / CD: R1=24秒→R9=23秒→特化III=22秒 / 範囲治療＋3種アイテムからランダム1つ出現"
            },
            {
              "id": "buff_purrchena_combo_special",
              "name": "お菓子or“プレゼント” [【特殊枠（例外処理）】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 24.0,
              "description": "【ランダム3分岐連携】爆弾・手作りアイテム・お菓子のいずれか1つがランダムで出現する",
              "condition": "操作キャラ被弾時発動可 / CD: R1=24秒→R9=23秒→特化III=22秒 / 範囲治療＋3種アイテムからランダム1つ出現",
              "special": "【ランダム3分岐連携】爆弾・手作りアイテム・お菓子のいずれか1つがランダムで出現する"
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
          "special": "【ランダム3分岐連携】爆弾・手作りアイテム・お菓子のいずれか1つがランダムで出現する"
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
              "name": "悪いことは許しませ～ん！ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "3個それぞれ爆弾(133%→240%→300%)または手作りアイテム(66%→120%→150%) / スペシャルギフト当選時(基礎確率15%→18%→20%): 物理ダメ267%→480%→600%",
              "condition": "必殺チャージ消費100 / CD20秒 / ギフト3個開封(爆弾or手作りアイテム抽選＋確率でスペシャルギフト出現)"
            },
            {
              "id": "buff_purrchena_ult_vulnerability",
              "name": "悪いことは許しませ～ん！ [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 0,
              "duration": 20.0,
              "description": "スペシャルギフト当選時、敵にアーツ脆弱(5秒): R1=1.5% → R9=2.0% → 特化III=2.5%",
              "condition": "必殺チャージ消費100 / CD20秒 / ギフト3個開封(爆弾or手作りアイテム抽選＋確率でスペシャルギフト出現)"
            },
            {
              "id": "buff_purrchena_ult_aux",
              "name": "悪いことは許しませ～ん！ [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値: 爆弾10 / スペシャルギフト15",
              "condition": "必殺チャージ消費100 / CD20秒 / ギフト3個開封(爆弾or手作りアイテム抽選＋確率でスペシャルギフト出現)"
            },
            {
              "id": "buff_purrchena_ult_special",
              "name": "悪いことは許しませ～ん！ [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 20.0,
              "description": "【ランダム抽選必殺】3つのギフトの中身とスペシャルギフト出現(基礎15〜20%＋素質1で最大+30%)が確率抽選となる",
              "condition": "必殺チャージ消費100 / CD20秒 / ギフト3個開封(爆弾or手作りアイテム抽選＋確率でスペシャルギフト出現)",
              "special": "【ランダム抽選必殺】3つのギフトの中身とスペシャルギフト出現(基礎15〜20%＋素質1で最大+30%)が確率抽選となる"
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
              "name": "謝っても遅いのですっ！ [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "必殺チャージ+6(昇進1)→+10(昇進2)回復",
              "condition": "戦技で初めて敵攻撃のブロックに成功した時(最大3回重ね掛け)"
            },
            {
              "id": "buff_purrchena_talent1_special",
              "name": "謝っても遅いのですっ！ [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
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
              "name": "アンバサダーの務め [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
      "defaultEfficiency": 100,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_rossi_skill_multiplier",
              "name": "真紅の影 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "1段目(物理): R1=85%→R9=154%→特化III=192% / 2段目「狼の至宝」(灼熱): R1=128%→R9=230%→特化III=288%",
              "condition": "SP消費(Wiki表に数値列なし・標準100) / 1段目の浮遊付与により単発でもクラッシュ状態となり2段目が追撃発動(※灼熱付着はなし！)"
            },
            {
              "id": "buff_rossi_skill_aux",
              "name": "真紅の影 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値: 1段目5 ＋ 2段目[R1=10→R9=12→特化III=15]",
              "condition": "SP消費(Wiki表に数値列なし・標準100) / 1段目の浮遊付与により単発でもクラッシュ状態となり2段目が追撃発動(※灼熱付着はなし！)"
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
          "anomalyText": "1段目で浮遊付与(クラッシュ+1段階) → クラッシュ状態の目標には2段目「狼の至宝」(灼熱ダメ・素質1トリガー)追撃"
        },
        {
          "id": "combo_rossi",
          "type": "combo",
          "name": "刹那の影",
          "shortName": "連携技",
          "damageType": "物理",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_rossi_combo_multiplier",
              "name": "刹那の影 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 15.0,
              "description": "1回目(物理): R1=67%→R9=120%→特化III=150% / 2回目基礎(物理): R1=133%→R9=240%→特化III=300% ＋ アーツ付着消費1段階毎追加: R1=+80%→R9=+144%→特化III=+180%",
              "condition": "敵がクラッシュかつアーツ付着状態の時発動可(連続2回発動可能) / CD: R1〜9=15秒→特化III=14秒 / 会心バフ持続15秒"
            },
            {
              "id": "buff_rossi_combo_crit",
              "name": "刹那の影 [【枠6】会心枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "crit",
              "calcGroupLabel": "【枠6】会心枠",
              "value": 0,
              "duration": 15.0,
              "description": "2回目発動時、15秒間自身の会心率UP: R1=+15%→R9=+21%→特化III=+25% ＆ 会心ダメージUP: R1=+30%→R9=+42%→特化III=+50%",
              "condition": "敵がクラッシュかつアーツ付着状態の時発動可(連続2回発動可能) / CD: R1〜9=15秒→特化III=14秒 / 会心バフ持続15秒"
            },
            {
              "id": "buff_rossi_combo_aux",
              "name": "刹那の影 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 15.0,
              "description": "2段目ブレイク値5",
              "condition": "敵がクラッシュかつアーツ付着状態の時発動可(連続2回発動可能) / CD: R1〜9=15秒→特化III=14秒 / 会心バフ持続15秒"
            },
            {
              "id": "buff_rossi_combo_special",
              "name": "刹那の影 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 15.0,
              "description": "【2連続発動連携＆完璧連携ボーナス】1回のトリガーで連携技を連続2回発動でき、2回目で全アーツ付着を消費して浮遊と自己会心バフを獲得。2回目を『完璧連携(ジャスト入力)』で発動すると追加でクラッシュ+1段階を付与する",
              "condition": "敵がクラッシュかつアーツ付着状態の時発動可(連続2回発動可能) / CD: R1〜9=15秒→特化III=14秒 / 会心バフ持続15秒",
              "special": "【2連続発動連携＆完璧連携ボーナス】1回のトリガーで連携技を連続2回発動でき、2回目で全アーツ付着を消費して浮遊と自己会心バフを獲得。2回目を『完璧連携(ジャスト入力)』で発動すると追加でクラッシュ+1段階を付与する"
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
          "special": "【2連続発動連携＆完璧連携ボーナス】1回のトリガーで連携技を連続2回発動でき、2回目で全アーツ付着を消費して浮遊と自己会心バフを獲得。2回目を『完璧連携(ジャスト入力)』で発動すると追加でクラッシュ+1段階を付与する"
        },
        {
          "id": "ult_rossi",
          "type": "ult",
          "name": "\"鋭爪\"奇襲",
          "shortName": "必殺技",
          "damageType": "灼熱",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_rossi_ult_multiplier",
              "name": "\"鋭爪\"奇襲 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "突き刺し総倍率(灼熱): R1=275%→R9=475%→特化III=600% / 斬撃1段目(灼熱): R1=111%→R9=200%→特化III=250% / 斬撃2段目(灼熱): R1=333%→R9=600%→特化III=750%(合計1600%)",
              "condition": "必殺チャージ消費110"
            },
            {
              "id": "buff_rossi_ult_crit",
              "name": "\"鋭爪\"奇襲 [【枠6】会心枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "crit",
              "calcGroupLabel": "【枠6】会心枠",
              "value": 0,
              "duration": 0.0,
              "description": "この必殺技自身の会心ダメージ+60%(固有ボーナス)",
              "condition": "必殺チャージ消費110"
            },
            {
              "id": "buff_rossi_ult_aux",
              "name": "\"鋭爪\"奇襲 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値25",
              "condition": "必殺チャージ消費110"
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
          "anomalyText": "なし"
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
              "name": "爪痕 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 15.0,
              "description": "「染まる爪痕」中、1秒ごとにロッシの攻撃力25%(昇進1)→30%(昇進2)分の物理ダメージ",
              "condition": "戦技2段目「狼の至宝」でダメージを与えた時 / 持続15秒(昇進1)→25秒(昇進2) / 重ね掛け不可"
            },
            {
              "id": "buff_rossi_talent1_taken_damage_up",
              "name": "爪痕 [【枠10】敵被ダメージUP枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "taken_damage_up",
              "calcGroupLabel": "【枠10】敵被ダメージUP枠",
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
              "name": "ざわめく血 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "追加で攻撃力12%(昇進2)→24%(昇進3)分の灼熱ダメージを1回発生(燃焼中の敵には1.5倍＝36%)",
              "condition": "染まる爪痕状態の敵にスキルで会心ダメージを与えた時(目標が燃焼中なら効果1.5倍)"
            },
            {
              "id": "buff_rossi_talent2_aux",
              "name": "ざわめく血 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
        "acc1": "gold_accessories_e8bbbde9878fe8b_58",
        "acc2": "gold_accessories_e7949fe789a9e8a_63"
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
            "lv10_spec1": 3.95,
            "lv11_spec2": 4.35,
            "lv12_spec3": 4.8
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_snowshine_skill_multiplier",
              "name": "限界防御 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "被弾反撃寒冷ダメ倍率: R1=200% → R9=360% → 特化III=450%",
              "condition": "SP消費100(発動時に即時SP30返還) / 防御構え中に被弾すると反撃1回発動"
            },
            {
              "id": "buff_snowshine_skill_aux",
              "name": "限界防御 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "SP30返還(実質SP70) / 自身と周囲の味方に加護90%付与 / 反撃ブレイク値20",
              "condition": "SP消費100(発動時に即時SP30返還) / 防御構え中に被弾すると反撃1回発動"
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
          "anomalyText": "なし"
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
              "name": "極地救援 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体回復",
              "category": "buff",
              "calcGroup": "heal",
              "calcGroupLabel": "【回復・耐久枠】(全体回復)",
              "value": 0,
              "duration": 25.0,
              "description": "周囲の味方即時HP回復: R1[96+意志×0.22]→R9[202+意志×0.47]→特化III[216+意志×0.5] / 3秒間(0.5秒毎計6回)範囲持続回復: R1[24+意志×0.06]→R9[50+意志×0.12]→特化III[54+意志×0.13]",
              "condition": "操作中のオペレーターが攻撃を受けHPが60%未満になった時発動可 / CD: R1=25秒→R9=24秒→特化III=23秒"
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
            "lv9": 7.2,
            "lv10_spec1": 7.85,
            "lv11_spec2": 8.6,
            "lv12_spec3": 9.5
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_snowshine_ult_multiplier",
              "name": "凍てつく寒霜 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 5.0,
              "description": "爆発寒冷ダメ: R1=200%→R9=360%→特化III=450% / 氷雪地帯0.5秒毎持続寒冷ダメ: R1=29%→R9=52%→特化III=65%(5秒合計650%)",
              "condition": "必殺チャージ消費80 / 氷雪地帯持続5秒(0.5秒毎計10ヒット)"
            },
            {
              "id": "buff_snowshine_ult_aux",
              "name": "凍てつく寒霜 [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 5.0,
              "description": "ブレイク値15 / 氷雪地帯滞在で強制凍結付与",
              "condition": "必殺チャージ消費80 / 氷雪地帯持続5秒(0.5秒毎計10ヒット)"
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
          "anomalyText": "氷雪地帯内に一定時間滞在した敵に強制凍結付与(※寒冷付着は付与しない！)"
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
              "name": "極地生存 [【補助・耐久・リソース枠】]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "救援専門家 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
      "defaultEfficiency": 133.4,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_su_skill_multiplier",
              "name": "山河を映して → 派生「墨継」 → 派生「収筆」 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "戦技寒冷ダメ倍率: R1=44% → R9=80% → 特化III=100%",
              "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化"
            },
            {
              "id": "buff_su_skill_aux",
              "name": "山河を映して → 派生「墨継」 → 派生「収筆」 [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値5＋筆意爆発ブレイク値5 / 行動停止1秒(1凸+50%=1.5秒)",
              "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化"
            },
            {
              "id": "buff_su_skill_special",
              "name": "山河を映して → 派生「墨継」 → 派生「収筆」 [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 20.0,
              "description": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。",
              "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化",
              "special": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。"
            }
          ],
          "spCost": 100,
          "description": "敵に寒冷ダメージと1秒の行動停止を与え、編成01位置オペレーターが灼熱なら灼熱付着、それ以外なら寒冷付着を付与し、20秒間「筆意」で被ダメージの8%→13%を記録して終了時範囲固定ダメージを与える。発動後戦技が「墨継」(墨魂抽出・ダメージ効果伝達)→「収筆」(SP0早期爆発)に変化。",
          "damageTypeDetail": "寒冷＋固定ダメージ(筆意爆発)",
          "rawText": "敵に寒冷ダメージと1秒の行動停止を与え、編成01位置オペレーターが灼熱なら灼熱付着、それ以外なら寒冷付着を付与し、20秒間「筆意」で被ダメージの8%→13%を記録して終了時範囲固定ダメージを与える。発動後戦技が「墨継」(墨魂抽出・ダメージ効果伝達)→「収筆」(SP0早期爆発)に変化。",
          "attachText": "01位置キャラが灼熱属性なら灼熱付着(1段階)、それ以外の全属性なら寒冷付着(1段階)",
          "anomalyText": "行動停止1秒(1凸で1.5秒)付与",
          "special": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。"
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
            "lv9": 2.1,
            "lv10_spec1": 2.31,
            "lv11_spec2": 2.57,
            "lv12_spec3": 2.89
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_su_skill_multiplier",
              "name": "山河を映して → 派生「墨継」 → 派生「収筆」 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "戦技寒冷ダメ倍率: R1=44% → R9=80% → 特化III=100%",
              "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化"
            },
            {
              "id": "buff_su_skill_aux",
              "name": "山河を映して → 派生「墨継」 → 派生「収筆」 [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値5＋筆意爆発ブレイク値5 / 行動停止1秒(1凸+50%=1.5秒)",
              "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化"
            },
            {
              "id": "buff_su_skill_special",
              "name": "山河を映して → 派生「墨継」 → 派生「収筆」 [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 20.0,
              "description": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。",
              "condition": "SP消費100 / 「筆意」持続20秒 / 発動後戦技が「墨継」(SP消費)→「収筆」(SP0早期起爆)へ段階変化",
              "special": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。"
            }
          ],
          "spCost": 15,
          "description": "敵に寒冷ダメージと1秒の行動停止を与え、編成01位置オペレーターが灼熱なら灼熱付着、それ以外なら寒冷付着を付与し、20秒間「筆意」で被ダメージの8%→13%を記録して終了時範囲固定ダメージを与える。発動後戦技が「墨継」(墨魂抽出・ダメージ効果伝達)→「収筆」(SP0早期爆発)に変化。",
          "damageTypeDetail": "寒冷＋固定ダメージ(筆意爆発)",
          "rawText": "敵に寒冷ダメージと1秒の行動停止を与え、編成01位置オペレーターが灼熱なら灼熱付着、それ以外なら寒冷付着を付与し、20秒間「筆意」で被ダメージの8%→13%を記録して終了時範囲固定ダメージを与える。発動後戦技が「墨継」(墨魂抽出・ダメージ効果伝達)→「収筆」(SP0早期爆発)に変化。",
          "attachText": "01位置キャラが灼熱属性なら灼熱付着(1段階)、それ以外の全属性なら寒冷付着(1段階)",
          "anomalyText": "行動停止1秒(1凸で1.5秒)付与",
          "special": "【超重要例外枠：スー戦技3大特殊挙動】①編成一番左(01位置)のオペレーターの属性を参照し、灼熱属性なら「灼熱付着(1段階)」、それ以外の属性(物理・電磁・寒冷・自然)なら「寒冷付着(1段階)」を付与する動的付着変化。②目標に「筆意」(20秒)を付与し、期間中に受けたダメージのR1=8%→R9=10%→特化III=13%(1凸で+7%加算=最大20%)を記録、終了時に記録値相当の広範囲「固定ダメージ」を与える(通常の計算枠に乗らない)。③派生戦技「墨継」で墨魂を抽出し墨魂が受けた全ダメージ・効果を本体へ伝達(撃破時別敵転移)、「収筆」(SP0)で墨魂を早期消失させ筆意爆発を即時発動。"
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
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_su_combo_multiplier",
              "name": "胸中に成竹在り [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 16.0,
              "description": "基礎寒冷ダメ: R1=333%→R9=600%→特化III=750% ＋ 消費/吸収された付着1段階毎に追加倍率: R1=+44%→R9=+80%→特化III=+100%(5凸で全体1.15倍＆段階+1見なし)",
              "condition": "敵の寒冷付着または灼熱付着が消費または吸収された時発動可 / CD: R1=16秒→R9=16秒→特化III=15秒(5凸-2秒)"
            },
            {
              "id": "buff_su_combo_aux",
              "name": "胸中に成竹在り [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 16.0,
              "description": "ブレイク値10 / 必殺チャージ+10回復",
              "condition": "敵の寒冷付着または灼熱付着が消費または吸収された時発動可 / CD: R1=16秒→R9=16秒→特化III=15秒(5凸-2秒)"
            }
          ],
          "description": "敵の寒冷付着または灼熱付着が消費または吸収されたときに発動可能。敵に寒冷ダメージを与え、消費・吸収された段階数に応じて追加ダメージを与える。（※寒冷付着なし）",
          "damageTypeDetail": "寒冷",
          "rawText": "敵の寒冷付着または灼熱付着が消費または吸収されたときに発動可能。敵に寒冷ダメージを与え、消費・吸収された段階数に応じて追加ダメージを与える。（※寒冷付着なし）",
          "attachText": "なし",
          "anomalyText": "なし(寒冷/灼熱付着が消費または吸収された時トリガー)"
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
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_su_ult_multiplier",
              "name": "白けさせるでない！ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 30.0,
              "description": "寒冷ダメ倍率: R1=222% → R9=400% → 特化III=500%(3凸で1.2倍=600%)",
              "condition": "必殺チャージ消費80(4凸68) / CD30秒 / 増幅持続12秒"
            },
            {
              "id": "buff_su_ult_amp",
              "name": "白けさせるでない！ [【枠5】増幅枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "amp",
              "calcGroupLabel": "【枠5】増幅枠",
              "value": 36,
              "duration": 12.0,
              "description": "チーム全員に12秒間 寒冷増幅 & 灼熱増幅: R1=+20% → R9=+30% → 特化III=+36%(3凸で1.2倍=+43.2%)",
              "condition": "必殺チャージ消費80(4凸68) / CD30秒 / 増幅持続12秒"
            },
            {
              "id": "buff_su_ult_aux",
              "name": "白けさせるでない！ [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 30.0,
              "description": "ブレイク値20 / 素質1連動で編成01位置オペレーターの連携技残りCD短縮",
              "condition": "必殺チャージ消費80(4凸68) / CD30秒 / 増幅持続12秒"
            }
          ],
          "epCost": 80,
          "description": "敵に寒冷ダメージを与え、12秒間チーム全員に寒冷増幅と灼熱増幅(20%→36%)を付与する。（※寒冷付着なし）",
          "damageTypeDetail": "寒冷",
          "rawText": "敵に寒冷ダメージを与え、12秒間チーム全員に寒冷増幅と灼熱増幅(20%→36%)を付与する。（※寒冷付着なし）",
          "attachText": "なし",
          "anomalyText": "なし"
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
              "name": "代理人の気遣い [【補助・耐久・リソース枠】]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "編成01位置オペレーターの連携技残りCD短縮: -10秒(昇進1) → -20秒(昇進2)",
              "condition": "必殺技「白けさせるでない！」発動時(対象：編成一番左＝01位置のオペレーター)"
            },
            {
              "id": "buff_su_talent1_special",
              "name": "代理人の気遣い [【特殊枠（例外処理）】]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
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
              "name": "丹青褪せず [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
      "defaultEfficiency": 100,
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_tangtang_skill_multiplier",
              "name": "波が来るぜ！ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 3.0,
              "description": "射撃寒冷ダメ: R1=80%→R9=144%→特化III=180% / 水竜巻1つにつき寒冷ダメ(戦技ダメージ見なし): R1=133%→R9=240%→特化III=300%(3凸で戦技倍率1.1倍)",
              "condition": "SP消費100 / 水竜巻1つ＋周囲の「湍水」(最大2カ所)を全消費して同数の水竜巻追加発生(最大計3つ・持続3秒) / 複数発生時15秒間アーツ脆弱付与"
            },
            {
              "id": "buff_tangtang_skill_vulnerability",
              "name": "波が来るぜ！ [【枠11】敵脆弱枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "vulnerability",
              "calcGroupLabel": "【枠11】敵脆弱枠",
              "value": 10,
              "duration": 15.0,
              "description": "水竜巻複数発生時15秒間アーツ脆弱付与: 2つ発生時R1=3%→R9=4%→特化III=5%(3凸10%) / 3つ発生時R1=6%→R9=8%→特化III=10%(3凸15%)",
              "condition": "SP消費100 / 水竜巻1つ＋周囲の「湍水」(最大2カ所)を全消費して同数の水竜巻追加発生(最大計3つ・持続3秒) / 複数発生時15秒間アーツ脆弱付与"
            },
            {
              "id": "buff_tangtang_skill_aux",
              "name": "波が来るぜ！ [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 3.0,
              "description": "射撃ブレイク値10 / 湍水1つ消費毎にSP20返還(1凸でSP25返還、最大2つ消費でSP40〜50返還)",
              "condition": "SP消費100 / 水竜巻1つ＋周囲の「湍水」(最大2カ所)を全消費して同数の水竜巻追加発生(最大計3つ・持続3秒) / 複数発生時15秒間アーツ脆弱付与"
            },
            {
              "id": "buff_tangtang_skill_special",
              "name": "波が来るぜ！ [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 3.0,
              "description": "【水竜巻の付着非重複ルール】湍水を消費して水竜巻を2〜3個同時に発生させても、寒冷付着は重複せず合計「1段階」のみ付与される（ダメージとアーツ脆弱段階は水竜巻数に応じて増加）",
              "condition": "SP消費100 / 水竜巻1つ＋周囲の「湍水」(最大2カ所)を全消費して同数の水竜巻追加発生(最大計3つ・持続3秒) / 複数発生時15秒間アーツ脆弱付与",
              "special": "【水竜巻の付着非重複ルール】湍水を消費して水竜巻を2〜3個同時に発生させても、寒冷付着は重複せず合計「1段階」のみ付与される（ダメージとアーツ脆弱段階は水竜巻数に応じて増加）"
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
          "special": "【水竜巻の付着非重複ルール】湍水を消費して水竜巻を2〜3個同時に発生させても、寒冷付着は重複せず合計「1段階」のみ付与される（ダメージとアーツ脆弱段階は水竜巻数に応じて増加）"
        },
        {
          "id": "combo_tangtang",
          "type": "combo",
          "name": "川よ、俺様に従え！",
          "shortName": "連携技",
          "damageType": "寒冷",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_tangtang_combo_multiplier",
              "name": "川よ、俺様に従え！ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 14.0,
              "description": "寒冷ダメ倍率: R1=107% → R9=192% → 特化III=240%(1凸で1.2倍=288%)",
              "condition": "敵が寒冷付着またはアーツ爆発のダメージを受けた時発動可 / CD: R1=14秒→R9=13秒→特化III=12秒(1凸-2秒=10秒)"
            },
            {
              "id": "buff_tangtang_combo_aux",
              "name": "川よ、俺様に従え！ [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 14.0,
              "description": "ブレイク値10 / フィールドに「湍水」を1カ所生成(持続30秒・最大2カ所まで存在可能)",
              "condition": "敵が寒冷付着またはアーツ爆発のダメージを受けた時発動可 / CD: R1=14秒→R9=13秒→特化III=12秒(1凸-2秒=10秒)"
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
          "anomalyText": "なし(フィールドに「湍水」1カ所生成)"
        },
        {
          "id": "ult_tangtang",
          "type": "ult",
          "name": "大親分が見てっぞ！",
          "shortName": "必殺技",
          "damageType": "寒冷",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_tangtang_ult_multiplier",
              "name": "大親分が見てっぞ！ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 4.0,
              "description": "4秒持続寒冷ダメ合計: R1=142%→R9=256%→特化III=320% / 通常終了大波: R1=178%→R9=320%→特化III=400% / 落下攻撃早期終了強化大波: R1=311%→R9=560%→特化III=700%(5凸で必殺全体1.15倍)",
              "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発"
            },
            {
              "id": "buff_tangtang_ult_aux",
              "name": "大親分が見てっぞ！ [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 4.0,
              "description": "通常終了ブレイク15 / 落下早期終了ブレイク20 / 範囲内行動停止付与",
              "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発"
            },
            {
              "id": "buff_tangtang_ult_special",
              "name": "大親分が見てっぞ！ [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 4.0,
              "description": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する",
              "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発",
              "special": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する"
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
          "special": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する"
        },
        {
          "id": "ult_cancel_tangtang",
          "type": "ult_cancel",
          "name": "大親分が見てっぞ！",
          "shortName": "必殺キャンセル",
          "damageType": "寒冷",
          "multipliers": {
            "lv9": 0,
            "lv10_spec1": 0,
            "lv11_spec2": 0,
            "lv12_spec3": 0
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_tangtang_ult_multiplier",
              "name": "大親分が見てっぞ！ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 4.0,
              "description": "4秒持続寒冷ダメ合計: R1=142%→R9=256%→特化III=320% / 通常終了大波: R1=178%→R9=320%→特化III=400% / 落下攻撃早期終了強化大波: R1=311%→R9=560%→特化III=700%(5凸で必殺全体1.15倍)",
              "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発"
            },
            {
              "id": "buff_tangtang_ult_aux",
              "name": "大親分が見てっぞ！ [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 4.0,
              "description": "通常終了ブレイク15 / 落下早期終了ブレイク20 / 範囲内行動停止付与",
              "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発"
            },
            {
              "id": "buff_tangtang_ult_special",
              "name": "大親分が見てっぞ！ [【特殊枠（例外処理）】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 4.0,
              "description": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する",
              "condition": "必殺チャージ消費90(4凸76.5) / 古の紋様4秒間展開 / 操作キャラが範囲内で落下攻撃を行うと早期終了して大波強化＆素質2誘発",
              "special": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する"
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
          "special": "【落下攻撃連動早期起爆】古の紋様(4秒)展開中に操作キャラが落下攻撃を行うと早期終了し、終結大波が400%→700%に強化され、さらに素質2により戦技と同仕様の水竜巻が発生する"
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
              "name": "肝胆相照らす [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "嵐を呼ぶ娘 [【枠4】ダメージUP枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "damage_up",
              "calcGroupLabel": "【枠4】ダメージUP枠",
              "value": 0,
              "duration": 0.0,
              "description": "この素質で発生した水竜巻の与えるダメージ+40%(昇進1) → +60%(昇進2)(5凸でさらに+80%加算＝+140%)",
              "condition": "必殺技「古の紋様」を落下攻撃で早期終了させた時(周囲の湍水も消費して水竜巻追加発生・SP返還あり)"
            },
            {
              "id": "buff_tangtang_talent2_special",
              "name": "嵐を呼ぶ娘 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
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
        "body": "gold_body_e9aaa8e7a095e38_39",
        "arm": "gold_arms_e9aaa8e7a095e38_36",
        "acc1": "gold_accessories_e9aaa8e7a095e38_55",
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_typhoeus_skill_multiplier",
              "name": "風裂く一矢 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "ジャンプ射撃: R1=22%→R9=40%→特化III=50% / 空中通常1〜4段(各段): R1=29%→R9=52%→特化III=65% / 空中5段目重攻撃: R1=44%→R9=80%→特化III=100% / 自然付着消費時の強化射撃による自然爆発ダメージ倍率乗算: R1=1.1倍→R9=1.2倍→特化III=1.3倍(5凸でさらに1.1倍)",
              "condition": "SP消費100 / ジャンプ射撃後「浮遊状態」に入り空中通常攻撃5回(毎回最大2体・操作キャラ時は5段目が猟矢消費なしで重攻撃＆強化射撃化)"
            },
            {
              "id": "buff_typhoeus_skill_aux",
              "name": "風裂く一矢 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "空中5段目ブレイク値20 / 自然付着1段階消費毎に「啓示」+1獲得＆必殺チャージ+12回復",
              "condition": "SP消費100 / ジャンプ射撃後「浮遊状態」に入り空中通常攻撃5回(毎回最大2体・操作キャラ時は5段目が猟矢消費なしで重攻撃＆強化射撃化)"
            },
            {
              "id": "buff_typhoeus_skill_special",
              "name": "風裂く一矢 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【自然付着消費＆強制自然爆発】自身は自然付着を付与せず、味方が付与した自然付着を空中射撃毎に1段階消費して啓示+1＆必殺チャージ+12を得る。猟矢消費(または操作中5段目)の「強化射撃」は4段階蓄積を待たずに強制的に自然爆発を発生させ、付着消費時はその自然爆発ダメージを1.3倍(5凸で×1.1倍)に乗算強化する。",
              "condition": "SP消費100 / ジャンプ射撃後「浮遊状態」に入り空中通常攻撃5回(毎回最大2体・操作キャラ時は5段目が猟矢消費なしで重攻撃＆強化射撃化)",
              "special": "【自然付着消費＆強制自然爆発】自身は自然付着を付与せず、味方が付与した自然付着を空中射撃毎に1段階消費して啓示+1＆必殺チャージ+12を得る。猟矢消費(または操作中5段目)の「強化射撃」は4段階蓄積を待たずに強制的に自然爆発を発生させ、付着消費時はその自然爆発ダメージを1.3倍(5凸で×1.1倍)に乗算強化する。"
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
          "special": "【自然付着消費＆強制自然爆発】自身は自然付着を付与せず、味方が付与した自然付着を空中射撃毎に1段階消費して啓示+1＆必殺チャージ+12を得る。猟矢消費(または操作中5段目)の「強化射撃」は4段階蓄積を待たずに強制的に自然爆発を発生させ、付着消費時はその自然爆発ダメージを1.3倍(5凸で×1.1倍)に乗算強化する。"
        },
        {
          "id": "combo_typhoeus",
          "type": "combo",
          "name": "荒れ狂うトゲ",
          "shortName": "連携技",
          "damageType": "自然",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_typhoeus_combo_multiplier",
              "name": "荒れ狂うトゲ [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 21.0,
              "description": "狩人の眼差し命中自然ダメ: R1=89%→R9=160%→特化III=200% / 矢陣エリア持続自然ダメ: R1=45%→R9=80%→特化III=100%",
              "condition": "「啓示」が上限(8)に達した時発動可 / CD: R1=21秒→R9=21秒→特化III=19秒(3凸-2秒=17秒) / 啓示8をすべて猟矢4本に変換＆空中通常回数リセット"
            },
            {
              "id": "buff_typhoeus_combo_taken_damage_up",
              "name": "荒れ狂うトゲ [【枠10】敵被ダメージUP枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "taken_damage_up",
              "calcGroupLabel": "【枠10】敵被ダメージUP枠",
              "value": 0,
              "duration": 21.0,
              "description": "矢陣エリア内の敵が受ける自然爆発ダメージUP: R1=+6% → R9=+8% → 特化III=+10%(3凸で+6%加算＝+16%)",
              "condition": "「啓示」が上限(8)に達した時発動可 / CD: R1=21秒→R9=21秒→特化III=19秒(3凸-2秒=17秒) / 啓示8をすべて猟矢4本に変換＆空中通常回数リセット"
            },
            {
              "id": "buff_typhoeus_combo_aux",
              "name": "荒れ狂うトゲ [【補助・耐久・リソース枠】]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 21.0,
              "description": "ブレイク値10 / 必殺チャージ+10回復 / 啓示8→猟矢4本変換 / 空中通常回数リセット / 矢陣内60%スロー",
              "condition": "「啓示」が上限(8)に達した時発動可 / CD: R1=21秒→R9=21秒→特化III=19秒(3凸-2秒=17秒) / 啓示8をすべて猟矢4本に変換＆空中通常回数リセット"
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
          "anomalyText": "スロー60%付与"
        },
        {
          "id": "ult_typhoeus",
          "type": "ult",
          "name": "氷山の呼び声",
          "shortName": "必殺技",
          "damageType": "自然",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_typhoeus_ult_multiplier",
              "name": "氷山の呼び声 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "爆発自然ダメ: R1=133%→R9=240%→特化III=300% / 1〜4段目矢の雨追撃: R1=33%→R9=60%→特化III=75% / 5段目強化矢の雨追撃: R1=89%→R9=160%→特化III=200%(5凸で必殺全体1.2倍)",
              "condition": "必殺チャージ消費200(4凸170) / CD20秒 / 猟矢2本(5凸3本)即獲得＋浮遊状態移行＆空中回数リセット＋後続5回の空中通常に矢の雨追撃"
            },
            {
              "id": "buff_typhoeus_ult_aux",
              "name": "氷山の呼び声 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値20 / 猟矢2本(5凸3本)獲得 / 浮遊状態移行＆回数リセット",
              "condition": "必殺チャージ消費200(4凸170) / CD20秒 / 猟矢2本(5凸3本)即獲得＋浮遊状態移行＆空中回数リセット＋後続5回の空中通常に矢の雨追撃"
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
          "anomalyText": "なし"
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
              "name": "獲物のチェック [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "猟矢を消費して強化された攻撃のダメージ倍率乗算: 1.2倍(初期) → 1.4倍(昇進1) → 1.6倍(昇進2)までアップ",
              "condition": "自然爆発発生毎に啓示+1(上限8・戦闘開始時1→2→4獲得) / 猟矢(上限4本)を消費して強化された攻撃時"
            },
            {
              "id": "buff_typhoeus_talent1_aux",
              "name": "獲物のチェック [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
              "name": "狩人の集中力 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
      "defaultEfficiency": 100,
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
            "lv9": 3.6,
            "lv10_spec1": 3.95,
            "lv11_spec2": 4.35,
            "lv12_spec3": 4.8
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_wulfgard_skill_multiplier",
              "name": "灼熱の弾痕 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "基本連射灼熱ダメ: R1=102%→R9=184%→特化III=230% / 燃焼・感電消費時の追加射撃灼熱ダメ: R1=378%→R9=680%→特化III=850%",
              "condition": "SP消費100 / 通常時は最終撃で灼熱付着1段階 / 燃焼・感電中の敵には異常消費＋追加射撃に分岐"
            },
            {
              "id": "buff_wulfgard_skill_aux",
              "name": "灼熱の弾痕 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "基本ブレイク値5＋追加射撃ブレイク値5(素質2で異常消費時SP返還)",
              "condition": "SP消費100 / 通常時は最終撃で灼熱付着1段階 / 燃焼・感電中の敵には異常消費＋追加射撃に分岐"
            },
            {
              "id": "buff_wulfgard_skill_special",
              "name": "灼熱の弾痕 [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【状態条件による付着/異常消費排他分岐】目標が燃焼・感電でない時は「灼熱付着(1段階)」を付与するが、燃焼または感電状態の時は「灼熱付着を付与せず」そのアーツ異常を消費して850%(特化III)の追加射撃を行う。",
              "condition": "SP消費100 / 通常時は最終撃で灼熱付着1段階 / 燃焼・感電中の敵には異常消費＋追加射撃に分岐",
              "special": "【状態条件による付着/異常消費排他分岐】目標が燃焼・感電でない時は「灼熱付着(1段階)」を付与するが、燃焼または感電状態の時は「灼熱付着を付与せず」そのアーツ異常を消費して850%(特化III)の追加射撃を行う。"
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
          "special": "【状態条件による付着/異常消費排他分岐】目標が燃焼・感電でない時は「灼熱付着(1段階)」を付与するが、燃焼または感電状態の時は「灼熱付着を付与せず」そのアーツ異常を消費して850%(特化III)の追加射撃を行う。"
        },
        {
          "id": "combo_wulfgard",
          "type": "combo",
          "name": "フラググレネード・β",
          "shortName": "連携技",
          "damageType": "灼熱",
          "multipliers": {
            "lv9": 2.8,
            "lv10_spec1": 3.05,
            "lv11_spec2": 3.35,
            "lv12_spec3": 3.7
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_wulfgard_combo_multiplier",
              "name": "フラググレネード・β [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "灼熱ダメ倍率: R1=60% → R9=108% → 特化III=135%",
              "condition": "敵がアーツ付着状態になった時発動可 / CD: R1=20秒→R9=20秒→特化III=19秒"
            },
            {
              "id": "buff_wulfgard_combo_aux",
              "name": "フラググレネード・β [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "ブレイク値10",
              "condition": "敵がアーツ付着状態になった時発動可 / CD: R1=20秒→R9=20秒→特化III=19秒"
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
          "anomalyText": "なし"
        },
        {
          "id": "ult_wulfgard",
          "type": "ult",
          "name": "狼の怒り",
          "shortName": "必殺技",
          "damageType": "灼熱",
          "multipliers": {
            "lv9": 7.2,
            "lv10_spec1": 7.85,
            "lv11_spec2": 8.6,
            "lv12_spec3": 9.5
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_wulfgard_ult_multiplier",
              "name": "狼の怒り [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "5回攻撃(1回毎): R1=32%→R9=58%→特化III=72%(5ヒット合計: R1=160%→R9=290%→特化III=360%)",
              "condition": "必殺チャージ消費90(4凸76.5) / 5ヒット連続攻撃"
            },
            {
              "id": "buff_wulfgard_ult_aux",
              "name": "狼の怒り [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値15 / 強制燃焼付与(素質1「灼熱の牙」を即座にトリガー)",
              "condition": "必殺チャージ消費90(4凸76.5) / 5ヒット連続攻撃"
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
          "anomalyText": "強制的に燃焼状態を付与(※灼熱付着は付与しない！)"
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
              "name": "灼熱の牙 [【枠4】ダメージUP枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "damage_up",
              "calcGroupLabel": "【枠4】ダメージUP枠",
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
              "name": "節制規則 [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
      "defaultEfficiency": 144.6,
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
              "name": "DDoS [【枠5】増幅枠]",
              "target": "single",
              "targetLabel": "単体バフ",
              "category": "buff",
              "calcGroup": "amp",
              "calcGroupLabel": "【枠5】増幅枠",
              "value": 15,
              "duration": 25.0,
              "description": "HP満タン時の操作キャラ単体に25秒間アーツ増幅: R1=+9% → R9=+13% → 特化III=+15%(1凸で+5%加算＝+20%)",
              "condition": "SP消費100 / 操作キャラ周囲にサポートクリスタル展開(20秒・重攻撃時HP回復最大2回) / 回復時に操作キャラのHPが満タンなら25秒間アーツ増幅付与(重ね掛け不可)"
            },
            {
              "id": "buff_xaihi_skill_aux",
              "name": "DDoS [【補助・耐久・リソース枠】]",
              "target": "single",
              "targetLabel": "単体回復",
              "category": "buff",
              "calcGroup": "heal",
              "calcGroupLabel": "【回復・耐久枠】(単体回復)",
              "value": 0,
              "duration": 20.0,
              "description": "操作キャラ重攻撃時にHP回復(最大2回): R1[144+意志×0.34]→R9[302+意志×0.71]→特化III[324+意志×0.76]",
              "condition": "SP消費100 / 操作キャラ周囲にサポートクリスタル展開(20秒・重攻撃時HP回復最大2回) / 回復時に操作キャラのHPが満タンなら25秒間アーツ増幅付与(重ね掛け不可)"
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
            "lv9": 2.8,
            "lv10_spec1": 3.05,
            "lv11_spec2": 3.35,
            "lv12_spec3": 3.7
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_xaihi_combo_multiplier",
              "name": "ストレステスト [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 8.0,
              "description": "寒冷ダメ倍率: R1=200% → R9=360% → 特化III=450%(3凸で周囲別敵1体にも連鎖)",
              "condition": "サポートクリスタルの回復回数がすべて消費された(0になった)時発動可 / CD: R1=8秒→R9=8秒→特化III=7秒"
            },
            {
              "id": "buff_xaihi_combo_aux",
              "name": "ストレステスト [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 8.0,
              "description": "ブレイク値10",
              "condition": "サポートクリスタルの回復回数がすべて消費された(0になった)時発動可 / CD: R1=8秒→R9=8秒→特化III=7秒"
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
          "anomalyText": "なし"
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
              "name": "スタックオーバーフロー [【枠5】増幅枠]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "amp",
              "calcGroupLabel": "【枠5】増幅枠",
              "value": 36,
              "duration": 12.0,
              "description": "チーム全員に12秒間 寒冷増幅 & 自然増幅: 基礎[R1=11%→R9=19%→特化III=24%] ＋ 知性1につき[R1=+0.014%→R9=+0.024%→特化III=+0.03%](知性上限込み最大: 昇進1上限30% → 特化III上限36%、5凸で1.1倍＝最大39.6%)",
              "condition": "必殺チャージ消費80(2凸72) / CD20秒 / 持続12秒(知性スケーリング上限あり)"
            },
            {
              "id": "buff_xaihi_ult_aux",
              "name": "スタックオーバーフロー [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "素質2連動でチーム全員の寒冷付着・凍結状態を浄化",
              "condition": "必殺チャージ消費80(2凸72) / CD20秒 / 持続12秒(知性スケーリング上限あり)"
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
              "name": "エグゼキュートプロセス [【枠10】敵被ダメージUP枠]",
              "target": "enemy",
              "targetLabel": "敵デバフ",
              "category": "debuff",
              "calcGroup": "taken_damage_up",
              "calcGroupLabel": "【枠10】敵被ダメージUP枠",
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
              "name": "フリーズプロトコル [【補助・耐久・リソース枠】]",
              "target": "team",
              "targetLabel": "全体バフ",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
        "arm": "gold_arms_e6b8a1e6b7b5e38_46",
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_yvonne_skill_multiplier",
              "name": "ひえひえビーム・β型 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 0.0,
              "description": "爆発寒冷ダメ: R1=111%→R9=200%→特化III=250% / 強制凍結発動時追加ダメ: R1=67%→R9=120%→特化III=150% ＋ 消費した付着1段階毎追加ダメ: R1=+89%→R9=+160%→特化III=+200%",
              "condition": "SP消費100(4凸で1体のみ命中時SP10返還) / 寒冷・自然付着全消費時に追加ダメ＆大量必殺チャージ回復"
            },
            {
              "id": "buff_yvonne_skill_aux",
              "name": "ひえひえビーム・β型 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 0.0,
              "description": "ブレイク値10 / 強制凍結成功時に必殺チャージ回復: [基礎10 ＋ 消費した付着1段階につき+30](1回の戦技につき1回のみ発動、4段階消費なら130回復！)",
              "condition": "SP消費100(4凸で1体のみ命中時SP10返還) / 寒冷・自然付着全消費時に追加ダメ＆大量必殺チャージ回復"
            },
            {
              "id": "buff_yvonne_skill_special",
              "name": "ひえひえビーム・β型 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 0.0,
              "description": "【寒冷/自然付着全消費→強制凍結＆超高速必殺チャージ】自身は寒冷付着を持たず、味方が付与した寒冷付着または自然付着を全段階消費して強制凍結に変換し、消費段階×30＋10の必殺チャージを獲得する。",
              "condition": "SP消費100(4凸で1体のみ命中時SP10返還) / 寒冷・自然付着全消費時に追加ダメ＆大量必殺チャージ回復",
              "special": "【寒冷/自然付着全消費→強制凍結＆超高速必殺チャージ】自身は寒冷付着を持たず、味方が付与した寒冷付着または自然付着を全段階消費して強制凍結に変換し、消費段階×30＋10の必殺チャージを獲得する。"
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
          "special": "【寒冷/自然付着全消費→強制凍結＆超高速必殺チャージ】自身は寒冷付着を持たず、味方が付与した寒冷付着または自然付着を全段階消費して強制凍結に変換し、消費段階×30＋10の必殺チャージを獲得する。"
        },
        {
          "id": "combo_yvonne",
          "type": "combo",
          "name": "アイスちゃん・υ37",
          "shortName": "連携技",
          "damageType": "寒冷",
          "multipliers": {
            "lv9": 2.94,
            "lv10_spec1": 3.2,
            "lv11_spec2": 3.52,
            "lv12_spec3": 3.88
          },
          "hitCount": 1,
          "buffs": [
            {
              "id": "buff_yvonne_combo_multiplier",
              "name": "アイスちゃん・υ37 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 20.0,
              "description": "エネルギー放出4回(1凸6回)各回: R1=45%→R9=80%→特化III=100% / 3秒後自爆寒冷ダメ: R1=89%→R9=160%→特化III=200%",
              "condition": "凍結状態の敵に対して操作キャラが重攻撃を行った時発動可 / CD: R1=20秒→R9=19秒→特化III=18秒"
            },
            {
              "id": "buff_yvonne_combo_aux",
              "name": "アイスちゃん・υ37 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 20.0,
              "description": "自爆ブレイク値10 / 必殺チャージ+10回復(1凸で+15追加＝計25回復) / 周囲牽引＋強制凍結付与",
              "condition": "凍結状態の敵に対して操作キャラが重攻撃を行った時発動可 / CD: R1=20秒→R9=19秒→特化III=18秒"
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
          "anomalyText": "牽引＋3秒後の自爆で強制的に凍結状態を付与(※寒冷付着は付与しない！)"
        },
        {
          "id": "ult_yvonne",
          "type": "ult",
          "name": "アイスシューター",
          "shortName": "必殺技",
          "damageType": "寒冷",
          "multipliers": {
            "lv9": 7.56,
            "lv10_spec1": 8.24,
            "lv11_spec2": 9.03,
            "lv12_spec3": 9.98
          },
          "hitCount": 5,
          "buffs": [
            {
              "id": "buff_yvonne_ult_multiplier",
              "name": "アイスシューター [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 7.0,
              "description": "強化通常連射1発毎: R1=8.9%→R9=16%→特化III=20% / 最終強攻撃(重攻撃): R1=133%→R9=240%→特化III=300% / 凍結消費時の追加寒冷ダメ: R1=267%→R9=480%→特化III=600%",
              "condition": "必殺チャージ消費220 / 持続7秒 / 自身が操作キャラへ切替・通常攻撃高速連射化＆スタック会心バフ"
            },
            {
              "id": "buff_yvonne_ult_crit",
              "name": "アイスシューター [【枠6】会心枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "crit",
              "calcGroupLabel": "【枠6】会心枠",
              "value": 0,
              "duration": 7.0,
              "description": "通常攻撃毎に自身の会心率+3%(最大10段階＝会心率+30%)、最大(10段階)到達時にさらに会心ダメージ+60%(5凸で期間中さらに会心ダメ+30%)",
              "condition": "必殺チャージ消費220 / 持続7秒 / 自身が操作キャラへ切替・通常攻撃高速連射化＆スタック会心バフ"
            },
            {
              "id": "buff_yvonne_ult_aux",
              "name": "アイスシューター [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 7.0,
              "description": "最終強攻撃ブレイク値20 / 発動時イヴォンヌが操作オペレーターに切り替わる",
              "condition": "必殺チャージ消費220 / 持続7秒 / 自身が操作キャラへ切替・通常攻撃高速連射化＆スタック会心バフ"
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
          "anomalyText": "終了前の最終強攻撃命中時、敵が凍結状態なら凍結を消費して高倍率追加寒冷ダメージ！"
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
              "name": "ハイテクバースト [【枠4】ダメージUP枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "damage_up",
              "calcGroupLabel": "【枠4】ダメージUP枠",
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
              "name": "氷点 [【枠6】会心枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "crit",
              "calcGroupLabel": "【枠6】会心枠",
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
            "lv9": 3.78,
            "lv10_spec1": 4.15,
            "lv11_spec2": 4.57,
            "lv12_spec3": 5.04
          },
          "hitCount": 3,
          "buffs": [
            {
              "id": "buff_zhuang_skill_multiplier",
              "name": "驚雷訣 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 36.0,
              "description": "雷撃1本毎倍率(最後の1本はダメージ6倍！・1凸で戦技全体1.15倍): 通常時[R1=20%→R9=36%→特化III=45%]＋感電消費1段階毎[R1=+3%→R9=+6%→特化III=+9%] / 理の境(必殺)中[R1=36%→R9=65%→特化III=81%]＋感電消費1段階毎[R1=+8%→R9=+15%→特化III=+18%]",
              "condition": "SP消費100(3凸で感電消費時SP10返還) / 蒼雷剣を[消費感電段階+1]本生成(1回最大3本、既存3本未満なら非消費でも1本生成、上限9本・持続36秒)し全剣で雷撃(最終弾6倍！)"
            },
            {
              "id": "buff_zhuang_skill_aux",
              "name": "驚雷訣 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 36.0,
              "description": "総ブレイク値15 / 雷撃を放った蒼雷剣1本につき必殺チャージ+6回復",
              "condition": "SP消費100(3凸で感電消費時SP10返還) / 蒼雷剣を[消費感電段階+1]本生成(1回最大3本、既存3本未満なら非消費でも1本生成、上限9本・持続36秒)し全剣で雷撃(最終弾6倍！)"
            },
            {
              "id": "buff_zhuang_skill_special",
              "name": "驚雷訣 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 36.0,
              "description": "【蒼雷剣ストック＆必殺中限定付着】①通常時は感電を消費するだけで電磁付着は付与しないが、必殺技「理の境」中のみ最後の雷撃で「電磁付着(1段階)」を付与する。②戦場の蒼雷剣(上限9本)すべてが順次雷撃を放ち、最後の1本の雷撃倍率が6倍になる。",
              "condition": "SP消費100(3凸で感電消費時SP10返還) / 蒼雷剣を[消費感電段階+1]本生成(1回最大3本、既存3本未満なら非消費でも1本生成、上限9本・持続36秒)し全剣で雷撃(最終弾6倍！)",
              "special": "【蒼雷剣ストック＆必殺中限定付着】①通常時は感電を消費するだけで電磁付着は付与しないが、必殺技「理の境」中のみ最後の雷撃で「電磁付着(1段階)」を付与する。②戦場の蒼雷剣(上限9本)すべてが順次雷撃を放ち、最後の1本の雷撃倍率が6倍になる。"
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
          "special": "【蒼雷剣ストック＆必殺中限定付着】①通常時は感電を消費するだけで電磁付着は付与しないが、必殺技「理の境」中のみ最後の雷撃で「電磁付着(1段階)」を付与する。②戦場の蒼雷剣(上限9本)すべてが順次雷撃を放ち、最後の1本の雷撃倍率が6倍になる。"
        },
        {
          "id": "combo_zhuang",
          "type": "combo",
          "name": "一息万変",
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
              "id": "buff_zhuang_combo_multiplier",
              "name": "一息万変 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 18.0,
              "description": "通常時電磁ダメ: R1=160%→R9=288%→特化III=360% / 理の境(必殺)中電磁ダメ: R1=240%→R9=432%→特化III=540%",
              "condition": "電磁付着状態の敵に重攻撃または終撃を行った時発動可(理の境中は範囲内発動可＆CD回復速度4倍) / CD: R1=18秒→R9=18秒→特化III=17秒"
            },
            {
              "id": "buff_zhuang_combo_aux",
              "name": "一息万変 [【補助・耐久・リソース枠】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 18.0,
              "description": "ブレイク値10 / 基礎必殺チャージ+10回復 ＋ 消費した電磁付着1段階につき必殺チャージ+10追加回復",
              "condition": "電磁付着状態の敵に重攻撃または終撃を行った時発動可(理の境中は範囲内発動可＆CD回復速度4倍) / CD: R1=18秒→R9=18秒→特化III=17秒"
            },
            {
              "id": "buff_zhuang_combo_special",
              "name": "一息万変 [【特殊枠（例外処理）】]",
              "target": "none",
              "targetLabel": "なし",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 18.0,
              "description": "【電磁付着消費→強制感電＆感電段階加算】電磁付着を消費して強制感電にし、対象がすでに感電状態だった場合は感電の異常段階を+1引き上げる。",
              "condition": "電磁付着状態の敵に重攻撃または終撃を行った時発動可(理の境中は範囲内発動可＆CD回復速度4倍) / CD: R1=18秒→R9=18秒→特化III=17秒",
              "special": "【電磁付着消費→強制感電＆感電段階加算】電磁付着を消費して強制感電にし、対象がすでに感電状態だった場合は感電の異常段階を+1引き上げる。"
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
          "special": "【電磁付着消費→強制感電＆感電段階加算】電磁付着を消費して強制感電にし、対象がすでに感電状態だった場合は感電の異常段階を+1引き上げる。"
        },
        {
          "id": "ult_zhuang",
          "type": "ult",
          "name": "風来轟轟",
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
              "id": "buff_zhuang_ult_multiplier",
              "name": "風来轟轟 [【枠3】基礎倍率・乗算・追加倍率枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "multiplier",
              "calcGroupLabel": "【枠3】基礎倍率・乗算・追加倍率枠",
              "value": 0,
              "duration": 15.0,
              "description": "理の境中の強化通常攻撃3段: R1[67%/94%/134%] → R9[120%/168%/240%] → 特化III[150%/210%/300%](戦技・連携倍率も上記各スキル欄の通り強化)",
              "condition": "必殺チャージ消費240(4凸204) / CD15秒 / 25秒間「理の境」状態に移行"
            },
            {
              "id": "buff_zhuang_ult_aux",
              "name": "風来轟轟 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
              "value": 0,
              "duration": 15.0,
              "description": "連携技CD回復速度4倍(実質CD約4.25秒) / 期間中初回の戦技はSPと感電を消費せず必ず蒼雷剣を3本生成",
              "condition": "必殺チャージ消費240(4凸204) / CD15秒 / 25秒間「理の境」状態に移行"
            },
            {
              "id": "buff_zhuang_ult_special",
              "name": "風来轟轟 [【特殊枠（例外処理）】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "special",
              "calcGroup": "special",
              "calcGroupLabel": "【特殊枠（例外処理）】",
              "value": 0,
              "duration": 15.0,
              "description": "【理の境モード(25秒)】①通常攻撃3段強化、②戦技倍率強化＆最終雷撃に電磁付着追加、③連携倍率強化＆CD4倍速回復、④期間中初回戦技がSP0・感電非消費・蒼雷剣3本確定生成になる複合強化状態。",
              "condition": "必殺チャージ消費240(4凸204) / CD15秒 / 25秒間「理の境」状態に移行",
              "special": "【理の境モード(25秒)】①通常攻撃3段強化、②戦技倍率強化＆最終雷撃に電磁付着追加、③連携倍率強化＆CD4倍速回復、④期間中初回戦技がSP0・感電非消費・蒼雷剣3本確定生成になる複合強化状態。"
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
          "special": "【理の境モード(25秒)】①通常攻撃3段強化、②戦技倍率強化＆最終雷撃に電磁付着追加、③連携倍率強化＆CD4倍速回復、④期間中初回戦技がSP0・感電非消費・蒼雷剣3本確定生成になる複合強化状態。"
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
              "name": "天地造化 [【枠5】増幅枠]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "amp",
              "calcGroupLabel": "【枠5】増幅枠",
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
              "name": "承天之佑 [【補助・耐久・リソース枠】]",
              "target": "self",
              "targetLabel": "自分へのバフ（自己バフ）",
              "category": "buff",
              "calcGroup": "aux",
              "calcGroupLabel": "【補助・耐久・リソース枠】",
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
  ]
};

const DEFAULT_EQUIPMENT = {
  "armorSets": [
    { "id": "none", "name": "なし (0%)", "efficiency": 0 },
    { "id": "syusei", "name": "集成訓練 [3セット] (+10%)", "efficiency": 10.0 },
    { "id": "tensai", "name": "天災防護 [3セット] (+20%)", "efficiency": 20.0 },
    { "id": "other", "name": "その他セット (0%)", "efficiency": 0 }
  ],
  "bodyArmor": [
    { "id": "none", "name": "なし (0%)", "efficiency": 0 },
    { "id": "body_set_max", "name": "セット付き防具（流転など） [MAX] (+16.0%)", "efficiency": 16.0 },
    { "id": "body_single_max", "name": "セットなし防具（救国など） [MAX] (+16.7%)", "efficiency": 16.7 }
  ],
  "armArmor": [
    { "id": "none", "name": "なし (0%)", "efficiency": 0 },
    { "id": "arm_set_max", "name": "セット付き防具（流転など） [MAX] (+26.7%)", "efficiency": 26.7 },
    { "id": "arm_single_max", "name": "セットなし防具（救国など） [MAX] (0%)", "efficiency": 0 }
  ],
  "accessory": [
    { "id": "none", "name": "なし (0%)", "efficiency": 0 },
    { "id": "acc_set_max", "name": "セット付きアクセ（流転など） [MAX] (+32.0%)", "efficiency": 32.0 },
    { "id": "acc_single_max", "name": "セットなしアクセ（救国印章など） [MAX] (+33.4%)", "efficiency": 33.4 }
  ]
};

const EQUIP_ID_COMPAT = {
  'body_set': 'body_set_max',
  'body_single': 'body_single_max',
  'arm_set': 'arm_set_max',
  'arm_single': 'arm_single_max',
  'acc_set': 'acc_set_max',
  'acc_single': 'acc_single_max'
};

function normalizeEquipId(slot, id) {
  if (!id) return 'none';
  return EQUIP_ID_COMPAT[id] || id;
}

// ===== 武器（data/weapons.js の window.WEAPON_DATA を使用） =====
const WEAPON_DEFAULT_RANKS = { s1: 9, s2: 9, s3: 4 };

function getWeaponData() {
  return (typeof window !== 'undefined' && window.WEAPON_DATA) ? window.WEAPON_DATA : { typeOperators: {}, weapons: [] };
}

function findWeapon(id) {
  if (!id || id === 'none') return null;
  return getWeaponData().weapons.find(w => w.id === id || w.name === id) || null;
}

function getWeaponsForChar(p) {
  const data = getWeaponData();
  const all = data.weapons || [];
  let type = p.weaponType;
  if (!type && data.typeOperators) {
    for (const [wType, ops] of Object.entries(data.typeOperators)) {
      if (ops.includes(p.name)) {
        type = wType;
        break;
      }
    }
  }
  const list = type ? all.filter(w => w.type === type) : all.slice();
  const recList = Array.isArray(p.recommendedWeapons) ? p.recommendedWeapons : [];
  const motif = p.motifWeapon;

  // おすすめ武器（上位順） -> モチーフ武器 -> レア度降順
  return list.slice().sort((a, b) => {
    const getPriority = (w) => {
      const recIdx = recList.indexOf(w.id) !== -1 ? recList.indexOf(w.id) : recList.indexOf(w.name);
      if (recIdx !== -1) return recIdx;
      if (w.id === motif || w.name === motif) return 10;
      return 100 - (w.rarity || 0);
    };
    const pa = getPriority(a);
    const pb = getPriority(b);
    if (pa !== pb) return pa - pb;
    return (b.rarity || 0) - (a.rarity || 0);
  });
}

// デフォルト武器の決定優先度：
// 1. 「おすすめ（第1位）」かつ「モチーフ」の武器が設定されていれば、それをデフォルトとする。
// 2. 「おすすめ」と「モチーフ」が異なる場合は、「おすすめ（第1位）」をデフォルトとする。
// 3. おすすめ未設定の場合はモチーフ武器をフォールバックとする。
function getDefaultWeaponForChar(p) {
  const recList = Array.isArray(p.recommendedWeapons) ? p.recommendedWeapons : [];
  const motif = p.motifWeapon;
  const topRec = recList.length > 0 ? recList[0] : null;

  if (topRec && motif && topRec === motif && findWeapon(motif)) {
    return motif;
  }
  if (topRec && findWeapon(topRec)) {
    return topRec;
  }
  if (motif && findWeapon(motif)) {
    return motif;
  }
  const available = getWeaponsForChar(p);
  return available.length > 0 ? available[0].id : 'none';
}

function makeDefaultWeapon(p) {
  const defId = getDefaultWeaponForChar(p);
  return { id: defId, ...WEAPON_DEFAULT_RANKS };
}

// ===== 各防具セットのデフォルトスロット（胴・腕・アクセ1・アクセ2） =====
const SET_DEFAULT_SLOTS = {
  "set_tenken": {
    "name": "天険セット",
    "body": "gold_body_e5a4a9e999bae99_0",
    "arm": "gold_arms_e5a4a9e999bae38_0",
    "acc1": "gold_accessories_e5a4a9e999bae98_0",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_syusei": {
    "name": "集成訓練セット",
    "body": "gold_body_e99b86e68890e8a_1",
    "arm": "gold_arms_e99b86e68890e8a_1",
    "acc1": "gold_accessories_e99b86e68890e8a_1",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_kyuho": {
    "name": "旧鋒セット",
    "body": "gold_body_e697a7e98b92e99_7",
    "arm": "gold_arms_e697a7e98b92e38_7",
    "acc1": "gold_accessories_e697a7e98b92e38_7",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_joryu": {
    "name": "壌流セット",
    "body": "gold_body_e5a38ce6b581e8b_9",
    "arm": "gold_arms_e5a38ce6b581e38_9",
    "acc1": "gold_accessories_e5a38ce6b581e6a_9",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_seiba": {
    "name": "清波セット",
    "body": "gold_body_e6b885e6b3a2e8b_11",
    "arm": "gold_arms_e6b885e6b3a2e38_10",
    "acc1": "gold_accessories_e6b885e6b3a2e68_11",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_ruten": {
    "name": "流転セット",
    "body": "gold_body_e6b581e8bba2e8b_13",
    "arm": "gold_arms_e6b581e8bba2e38_12",
    "acc1": "gold_accessories_e6b581e8bba2e38_16",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_mancho": {
    "name": "満潮セット",
    "body": "gold_body_e5a594e6b5aae38_19",
    "arm": "gold_arms_e6b288e6b0b4e38_18",
    "acc1": "gold_accessories_e687b8e6b2b3e38_21",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_oryu": {
    "name": "50式応龍セット",
    "body": "gold_body_50e5bc8fe5bf9ce_20",
    "arm": "gold_arms_50e5bc8fe5bf9ce_19",
    "acc1": "gold_accessories_50e5bc8fe5bf9ce_24",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_mi_security": {
    "name": "M.I.警備セット",
    "body": "gold_body_mie8ada6e58299e_25",
    "arm": "gold_arms_mie8ada6e58299e_22",
    "acc1": "gold_accessories_mie8ada6e58299e_30",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_volcano": {
    "name": "火山用セット",
    "body": "gold_body_e781abe5b1b1e79_30",
    "arm": "gold_arms_e781abe5b1b1e79_26",
    "acc1": "gold_accessories_e781abe5b1b1e79_36",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_pioneer": {
    "name": "パイオニアセット",
    "body": "gold_body_e38391e382a4e38_32",
    "arm": "gold_arms_e38391e382a4e38_30",
    "acc1": "gold_accessories_e38391e382a4e38_40",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_pulse": {
    "name": "パルス式セット",
    "body": "gold_body_e38391e383abe38_37",
    "arm": "gold_arms_e38391e383abe38_33",
    "acc1": "gold_accessories_e38391e383abe38_46",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_kotsusai": {
    "name": "骨砕セット",
    "body": "gold_body_e9aaa8e7a095e38_39",
    "arm": "gold_arms_e9aaa8e7a095e38_35",
    "acc1": "gold_accessories_e9aaa8e7a095e38_50",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_chouiki": {
    "name": "軽量超域セット",
    "body": "gold_body_e8bbbde9878fe8b_44",
    "arm": "gold_arms_e8bbbde9878fe8b_38",
    "acc1": "gold_accessories_e8bbbde9878fe8b_56",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  },
  "set_bio_support": {
    "name": "生物補助セット",
    "body": "gold_body_e7949fe789a9e8a_45",
    "arm": "gold_arms_e7949fe789a9e8a_40",
    "acc1": "gold_accessories_e7949fe789a9e8a_60",
    "acc2": "gold_accessories_e69591e59bbde58_73"
  },
  "set_kozantenken": {
    "name": "宏山点剣セット",
    "body": "gold_body_e5ae8fe5b1b1e78_48",
    "arm": "gold_arms_e5ae8fe5b1b1e78_43",
    "acc1": "gold_accessories_e5ae8fe5b1b1e78_65",
    "acc2": "gold_accessories_e7949fe789a9e8a_63"
  }
};

/**
 * キャラクターの推奨防具（Wiki・ゲーム内仕様準拠）を取得して初期装備オブジェクトを生成
 */
function getDefaultArmorForChar(p) {
  if (p && p.recommendedArmor && (p.recommendedArmor.body || p.recommendedArmor.armorSet)) {
    return {
      armorSet: p.recommendedArmor.armorSet || 'none',
      body: p.recommendedArmor.body || 'none',
      arm: p.recommendedArmor.arm || 'none',
      acc1: p.recommendedArmor.acc1 || 'none',
      acc2: p.recommendedArmor.acc2 || 'none'
    };
  }
  const setId = (p && p.recommendedArmorSet) ? p.recommendedArmorSet : null;
  if (setId && setId !== 'none' && SET_DEFAULT_SLOTS[setId]) {
    return {
      armorSet: setId,
      body: SET_DEFAULT_SLOTS[setId].body || 'none',
      arm: SET_DEFAULT_SLOTS[setId].arm || 'none',
      acc1: SET_DEFAULT_SLOTS[setId].acc1 || 'none',
      acc2: SET_DEFAULT_SLOTS[setId].acc2 || 'none'
    };
  }
  return { armorSet: 'none', body: 'none', arm: 'none', acc1: 'none', acc2: 'none' };
}

// 旧形式（equipment.weapon）や未設定の武器データを正規化する
// 旧URLデータ（新武器体系導入前）は武器なしとし、合計効率が変わらないよう基礎効率を再計算する
function normalizePartyWeapon(p) {
  if (!p.weapon || typeof p.weapon !== 'object') {
    const isLegacy = p.efficiency !== undefined;
    p.weapon = isLegacy ? { id: 'none', ...WEAPON_DEFAULT_RANKS } : makeDefaultWeapon(p);
    if (p.equipment) delete p.equipment.weapon;
    if (isLegacy) {
      p.baseEfficiency = Math.max(0, Math.round((p.efficiency - calculateArmorBonus(p.equipment)) * 10) / 10);
    }
  }
  if (p.equipment) delete p.equipment.weapon;
  ['s1', 's2', 's3'].forEach(k => {
    const v = parseInt(p.weapon[k], 10);
    p.weapon[k] = (v >= 1 && v <= 9) ? v : WEAPON_DEFAULT_RANKS[k];
  });
  return p.weapon;
}

function calculateWeaponBonus(weapon) {
  if (!weapon) return 0;
  const w = findWeapon(weapon.id);
  if (!w) return 0;
  const s2 = w.skills[1];
  if (!s2 || !s2.ultEfficiency) return 0;
  return s2.ultEfficiency[(weapon.s2 || 9) - 1] || 0;
}

// 装備中の防具部位（胴・腕・アクセ1・アクセ2）から発動セット効果（3部位一致）を自動計算
function calculateActiveArmorSet(equipment) {
  if (!equipment || !equipmentMaster) return 'none';
  const setCounts = {};
  const slots = [
    { list: equipmentMaster.bodyArmor || [], id: normalizeEquipId('body', equipment.body) },
    { list: equipmentMaster.armArmor || [], id: normalizeEquipId('arm', equipment.arm) },
    { list: equipmentMaster.accessory || [], id: normalizeEquipId('acc', equipment.acc1) },
    { list: equipmentMaster.accessory || [], id: normalizeEquipId('acc', equipment.acc2) }
  ];

  slots.forEach(slot => {
    if (!slot.id || slot.id === 'none') return;
    const item = slot.list.find(x => x.id === slot.id);
    const setId = item && item.detail ? item.detail.setId : null;
    if (setId && setId !== 'none' && setId !== 'other') {
      setCounts[setId] = (setCounts[setId] || 0) + 1;
    }
  });

  for (const [setId, count] of Object.entries(setCounts)) {
    if (count >= 3) {
      return setId;
    }
  }
  return 'none';
}

function calculateArmorBonus(equipment) {
  if (!equipment || !equipmentMaster) return 0;
  // 4部位から自動でセット効果（3部位一致）を判定・設定
  equipment.armorSet = calculateActiveArmorSet(equipment);
  let sum = 0;
  if (equipmentMaster.armorSets) {
    const s = equipmentMaster.armorSets.find(x => x.id === equipment.armorSet);
    if (s) sum += s.efficiency || 0;
  }
  if (equipmentMaster.bodyArmor) {
    const id = normalizeEquipId('body', equipment.body);
    const b = equipmentMaster.bodyArmor.find(x => x.id === id);
    if (b) sum += b.efficiency || 0;
  }
  if (equipmentMaster.armArmor) {
    const id = normalizeEquipId('arm', equipment.arm);
    const a = equipmentMaster.armArmor.find(x => x.id === id);
    if (a) sum += a.efficiency || 0;
  }
  if (equipmentMaster.accessory) {
    const id1 = normalizeEquipId('acc', equipment.acc1);
    const a1 = equipmentMaster.accessory.find(x => x.id === id1);
    if (a1) sum += a1.efficiency || 0;
    const id2 = normalizeEquipId('acc', equipment.acc2);
    const a2 = equipmentMaster.accessory.find(x => x.id === id2);
    if (a2) sum += a2.efficiency || 0;
  }
  return Math.round(sum * 10) / 10;
}

// パーティーメンバー（武器＋防具）の効率ボーナス合計
function calculateEquipBonus(equipment, weapon) {
  return Math.round((calculateArmorBonus(equipment) + calculateWeaponBonus(weapon)) * 10) / 10;
}

function calcMemberBonus(p) {
  return calculateEquipBonus(p.equipment, p.weapon);
}

let equipmentMaster = JSON.parse(JSON.stringify(DEFAULT_EQUIPMENT));
let allCharacters = [];
let defaultPartyNames = [];
let party = [];
let timelineCycles = [
  []
]; // タイムライン上に配置されたスキルオブジェクトの配列（サイクルごと）
let cycleNames = ['サイクル 1'];

// ===== ページ切り替え（スキル回し / ダメージ計算 / キャラ・スキルWiki） =====
window.switchPage = function(page) {
  const pages = {
    rotation: document.getElementById('page-rotation'),
    damage: document.getElementById('page-damage'),
    wiki: document.getElementById('page-wiki')
  };
  const btns = {
    rotation: document.getElementById('tab-btn-rotation'),
    damage: document.getElementById('tab-btn-damage'),
    wiki: document.getElementById('tab-btn-wiki')
  };
  Object.keys(pages).forEach(k => {
    if (pages[k]) pages[k].classList.toggle('active', k === page);
    if (btns[k]) btns[k].classList.toggle('active', k === page);
  });

  if (page === 'wiki' && typeof renderWikiPage === 'function') {
    renderWikiPage();
  }
  updateSimulation();
};

// ===== 案山子（ターゲット敵）ステータス & ダメージ計算設定 =====
let targetEnemy = Object.assign({}, (typeof DamageCalculator !== 'undefined' ? DamageCalculator.DEFAULT_TARGET_ENEMY : {
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
  artsAttachment: 'none',
  attachmentStacks: 0,
  artsAnomaly: 'none',
  crushStacks: 0,
  consumeAttachment: false,
  consumeCrush: false
}));
let damageDisplayMode = 'expected'; // 'expected' | 'crit' | 'nonCrit'

window.updateEnemySetting = function(key, value) {
  if (key === 'isBroken') {
    targetEnemy[key] = !!value;
  } else {
    targetEnemy[key] = parseFloat(value) || 0;
  }
  updateSimulation();
};

window.resetEnemySettings = function() {
  if (typeof DamageCalculator !== 'undefined') {
    targetEnemy = Object.assign({}, DamageCalculator.DEFAULT_TARGET_ENEMY);
  }
  const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  setVal('enemy-defense', targetEnemy.defense);
  setVal('enemy-vuln', targetEnemy.vulnerability);
  const brk = document.getElementById('enemy-is-broken');
  if (brk) brk.checked = targetEnemy.isBroken;
  setVal('enemy-break-mult', targetEnemy.breakMultiplier);
  setVal('enemy-res-phys', targetEnemy.physicalRes);
  setVal('enemy-res-heat', targetEnemy.heatRes);
  setVal('enemy-res-elec', targetEnemy.electricRes);
  setVal('enemy-res-cryo', targetEnemy.cryoRes);
  setVal('enemy-res-nature', targetEnemy.natureRes);

  updateSimulation();
};

window.setDamageMode = function(mode) {
  damageDisplayMode = mode;
  ['expected', 'crit', 'noncrit'].forEach(m => {
    const btn = document.getElementById(`btn-dmg-${m}`);
    if (btn) btn.classList.toggle('active', m.toLowerCase() === mode.toLowerCase());
  });
  updateSimulation();
};

function getMemberComputedStats(member) {
  if (!member || typeof DamageCalculator === 'undefined') return null;
  const charData = allCharacters.find(c => c.name === member.name);
  if (!charData) return null;
  return DamageCalculator.calculateCharacterStats(charData, member.weapon, member.equipment, equipmentMaster);
}

function getMemberSkillDamage(member, skill, skillLevelKey) {
  const stats = getMemberComputedStats(member);
  if (!stats || !skill || typeof DamageCalculator === 'undefined') return null;
  return DamageCalculator.calculateSkillDamage(stats, skill, skillLevelKey, targetEnemy, null);
}

// ===== キャラ別ダメージ円グラフ & 詳細内訳テーブル描画 =====
const CHAR_PALETTE_COLORS = [
  '#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#34495e'
];

function renderDamageDonutChart(charSummaryList, totalTimelineDamage) {
  const svg = document.getElementById('damage-donut-chart');
  const legend = document.getElementById('char-damage-legend');
  const totalValEl = document.getElementById('donut-center-total');
  if (!svg || !legend) return;

  if (totalValEl && typeof DamageCalculator !== 'undefined') {
    totalValEl.textContent = DamageCalculator.formatDamage(totalTimelineDamage);
  }

  svg.innerHTML = '';
  legend.innerHTML = '';

  if (!charSummaryList || charSummaryList.length === 0 || totalTimelineDamage <= 0) {
    svg.innerHTML = `<circle cx="100" cy="100" r="70" fill="none" stroke="#2a2a2a" stroke-width="24" />`;
    legend.innerHTML = `<div style="color:#777; font-size:12px; padding:10px;">タイムラインにスキルを配置すると、キャラクター別のダメージ割合が集計されます。</div>`;
    return;
  }

  const cx = 100, cy = 100, r = 70;
  const circumference = 2 * Math.PI * r;
  let currentOffset = 0;

  charSummaryList.forEach((c, idx) => {
    const color = CHAR_PALETTE_COLORS[idx % CHAR_PALETTE_COLORS.length];
    const pct = c.totalDamage / totalTimelineDamage;
    const strokeDash = pct * circumference;
    const strokeGap = circumference - strokeDash;

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', color);
    circle.setAttribute('stroke-width', '24');
    circle.setAttribute('stroke-dasharray', `${strokeDash} ${strokeGap}`);
    circle.setAttribute('stroke-dashoffset', -currentOffset);
    circle.innerHTML = `<title>${c.charName}: ${DamageCalculator.formatDamage(c.totalDamage)} (${(pct * 100).toFixed(1)}%)</title>`;
    svg.appendChild(circle);

    currentOffset += strokeDash;

    const item = document.createElement('div');
    item.className = 'char-legend-item';
    const pctStr = (pct * 100).toFixed(1) + '%';
    item.innerHTML = `
      <div class="char-legend-header">
        <div class="char-legend-left">
          <div class="char-legend-color" style="background-color: ${color};"></div>
          ${c.icon ? `<img src="${c.icon}" style="width:22px; height:22px; border-radius:50%; object-fit:cover;">` : ''}
          <span class="char-legend-name">${c.charName}</span>
        </div>
        <div class="char-legend-val">${DamageCalculator.formatDamage(c.totalDamage)} <span style="font-size:11px; color:#85a990;">(${pctStr})</span></div>
      </div>
      <div class="char-legend-bar-wrap">
        <div class="char-legend-bar" style="width: ${pctStr}; background-color: ${color};"></div>
      </div>
    `;
    legend.appendChild(item);
  });
}

function renderDamageDetailsTable(stepList) {
  const tbody = document.getElementById('damage-details-tbody');
  const modeLabel = document.getElementById('table-mode-label');
  if (!tbody) return;

  if (modeLabel) {
    modeLabel.textContent = damageDisplayMode === 'crit' ? '会心時' : (damageDisplayMode === 'nonCrit' ? '非会心' : '期待値');
  }

  tbody.innerHTML = '';
  if (!stepList || stepList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="12" style="text-align:center; color:#777; padding:16px;">タイムラインに攻撃スキルが配置されていません</td></tr>`;
    return;
  }

  const elemIcons = {
    'heat': '🔥',
    'cryo': '❄️',
    'electric': '⚡',
    'nature': '🌿',
    'none': '-'
  };
  const elemNames = {
    'heat': '灼熱',
    'cryo': '寒冷',
    'electric': '電磁',
    'nature': '自然',
    'none': 'なし'
  };

  stepList.forEach((item, idx) => {
    const tr = document.createElement('tr');
    const val = damageDisplayMode === 'crit' ? item.critDamage : (damageDisplayMode === 'nonCrit' ? item.nonCritDamage : item.damage);
    const critVal = DamageCalculator.formatDamage(item.critDamage);
    const nonCritVal = DamageCalculator.formatDamage(item.nonCritDamage);
    const curVal = DamageCalculator.formatDamage(val);

    // 敵の状態の可視化
    const eb = item.enemyBefore || {};
    const ea = item.enemyAfter || {};

    let beforeArtsText = eb.artsAttachment && eb.artsAttachment !== 'none'
      ? `${elemIcons[eb.artsAttachment] || ''}${elemNames[eb.artsAttachment]}(${eb.attachmentStacks}段)`
      : '付着なし';
    let beforeCrushText = eb.crushStacks > 0 ? `💥クラッシュ(${eb.crushStacks}段)` : '';

    let afterArtsText = ea.artsAttachment && ea.artsAttachment !== 'none'
      ? `${elemIcons[ea.artsAttachment] || ''}${elemNames[ea.artsAttachment]}(${ea.attachmentStacks}段)`
      : (ea.artsAnomaly && ea.artsAnomaly !== 'none' ? `⚠️異常:${ea.artsAnomaly}` : '付着なし');
    let afterCrushText = ea.crushStacks > 0 ? `💥クラッシュ(${ea.crushStacks}段)` : '';

    let transitionHtml = `
      <div style="font-size:11px; line-height:1.4;">
        <span style="color:#aaa;">前:</span> ${beforeArtsText} ${beforeCrushText}
        <br>
        <span style="color:#2ecc71;">後:</span> ${afterArtsText} ${afterCrushText}
      </div>
    `;

    let actionBadgeHtml = '-';
    if (item.actionNote) {
      const isReaction = item.actionNote.includes('反応');
      const isBurst = item.actionNote.includes('爆発');
      const isShatter = item.actionNote.includes('破砕') || item.actionNote.includes('猛撃');
      const badgeClass = isReaction ? 'badge-reaction' : (isBurst ? 'badge-burst' : (isShatter ? 'badge-crush' : 'badge-inflict'));
      actionBadgeHtml = `<span class="action-tag ${badgeClass}">${item.actionNote}</span>`;
    }

    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td style="font-size:11px; color:#85a990;">${item.cycleName}</td>
      <td>
        <span style="display:inline-flex; align-items:center; gap:5px;">
          ${item.charIcon ? `<img src="${item.charIcon}" style="width:18px; height:18px; border-radius:50%;">` : ''}
          ${item.charName}
        </span>
      </td>
      <td><strong>${item.skillName}</strong></td>
      <td><span class="tag-elem-${item.damageType}">${item.damageType}</span></td>
      <td class="td-dmg-val">💥 ${curVal}</td>
      <td class="td-dmg-sub">${critVal}</td>
      <td class="td-dmg-sub">${nonCritVal}</td>
      <td>${actionBadgeHtml}</td>
      <td>${transitionHtml}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ===== スキル名表示モード（正式名称 / 略称） =====
let skillNameDisplayMode = localStorage.getItem('skillNameDisplayMode') || 'formal';

function getSkillDisplayName(skill) {
  if (!skill) return '';
  if (skillNameDisplayMode === 'short') {
    return skill.shortName || skill.name || '';
  }
  return skill.name || skill.shortName || '';
}

window.setSkillNameMode = function(mode) {
  skillNameDisplayMode = (mode === 'short') ? 'short' : 'formal';
  localStorage.setItem('skillNameDisplayMode', skillNameDisplayMode);
  updateSkillNameToggleButtons();
  renderPalette();
  renderTimeline();
};

function updateSkillNameToggleButtons() {
  const formalBtn = document.getElementById('btn-name-formal');
  const shortBtn = document.getElementById('btn-name-short');
  if (formalBtn && shortBtn) {
    formalBtn.classList.toggle('active', skillNameDisplayMode === 'formal');
    shortBtn.classList.toggle('active', skillNameDisplayMode === 'short');
  }
}

// ===== モバイル用スキルパレット表示/非表示トグル & iOS Safari VisualViewport 対応 =====
let isMobilePaletteCollapsed = false;

window.toggleMobilePalette = function(forceState) {
  if (typeof forceState === 'boolean') {
    isMobilePaletteCollapsed = forceState;
  } else {
    isMobilePaletteCollapsed = !isMobilePaletteCollapsed;
  }
  const panel = document.getElementById('palette-panel') || document.querySelector('.palette-panel');
  const btn = document.getElementById('btn-toggle-palette');
  if (panel) {
    panel.classList.toggle('is-collapsed', isMobilePaletteCollapsed);
  }
  document.body.classList.toggle('palette-collapsed', isMobilePaletteCollapsed);
  if (btn) {
    btn.setAttribute('aria-expanded', String(!isMobilePaletteCollapsed));
    btn.textContent = isMobilePaletteCollapsed ? 'パレットを表示 ▲' : 'パレットを隠す ▼';
  }
};

function updateMobileViewportMetrics() {
  const root = document.documentElement;
  if (window.visualViewport) {
    const vv = window.visualViewport;
    const layoutH = root.clientHeight || window.innerHeight;
    const offsetBottom = Math.max(0, Math.round(layoutH - (vv.height + vv.offsetTop)));
    root.style.setProperty('--vv-offset-bottom', `${offsetBottom}px`);
    root.style.setProperty('--vvh', `${Math.round(vv.height)}px`);
  } else {
    root.style.setProperty('--vv-offset-bottom', '0px');
    root.style.setProperty('--vvh', `${window.innerHeight}px`);
  }
}

function initMobileViewportListeners() {
  updateMobileViewportMetrics();
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', updateMobileViewportMetrics, { passive: true });
    window.visualViewport.addEventListener('scroll', updateMobileViewportMetrics, { passive: true });
  }
  window.addEventListener('resize', updateMobileViewportMetrics, { passive: true });
  window.addEventListener('orientationchange', updateMobileViewportMetrics, { passive: true });
}

let timeTrackTimeline = null;

function initTimeTrackTimeline() {
  const container = document.getElementById('time-track-container');
  if (container && typeof TimeTrackTimeline !== 'undefined') {
    timeTrackTimeline = new TimeTrackTimeline('time-track-container', { pxPerSec: 30 });
    autoSyncTimeTracks(true);
  }
}

window.autoSyncTimeTracks = function(forceReset = false) {
  if (timeTrackTimeline) {
    timeTrackTimeline.syncFromSequence(timelineCycles, party, cycleNames, forceReset);
    updateSimulation({ fromTimeTrack: true });
  }
};

window.appendSkillFromTimeTrack = function(member, skill) {
  if (!member || !skill) return;
  if (!timelineCycles || timelineCycles.length === 0) {
    timelineCycles = [[]];
    cycleNames = ['サイクル 1'];
  }
  const lastCycle = timelineCycles[timelineCycles.length - 1];
  lastCycle.push({
    type: skill.type,
    charId: member.id,
    charName: member.name,
    charIcon: member.icon,
    skillId: skill.id,
    skillData: skill
  });
  renderTimeline();
};

window.onTimeTrackEdited = function() {
  updateSimulation({ fromTimeTrack: true });
};

async function initApp() {
  initMobileViewportListeners();
  await Promise.all([fetchCharacters(), fetchEquipment()]);
  loadFromUrl();
  initPartyAndRoster();
  if (typeof renderWikiPage === 'function') {
    renderWikiPage();
  }
  updateSkillNameToggleButtons();
  if (typeof resetEnemySettings === 'function') {
    resetEnemySettings();
  }
  initTimeTrackTimeline();

  // ソートボタンのイベントリスナー
  document.querySelectorAll('.roster-sort-controls .sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setRosterSort(btn.dataset.sort);
    });
  });

  const btnClear = document.getElementById('btn-clear-timeline');
  if (btnClear) btnClear.addEventListener('click', clearTimeline);
  const btnSave = document.getElementById('btn-save-timeline');
  if (btnSave) btnSave.addEventListener('click', saveTimeline);
  const btnExportUrl = document.getElementById('btn-export-url');
  if (btnExportUrl) btnExportUrl.addEventListener('click', exportUrl);
  const btnExportImg = document.getElementById('btn-export-image');
  if (btnExportImg) btnExportImg.addEventListener('click', exportImage);
  window.addEventListener('hashchange', loadFromUrl);

  // 初回描画を保証する
  if (!window.location.hash) {
    renderTimeline();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function getExportUrl() {
  const data = {
    party: party,
    timelineCycles: timelineCycles,
    cycleNames: cycleNames
  };
  const jsonStr = JSON.stringify(data);
  const base64 = btoa(encodeURIComponent(jsonStr));
  const baseUrl = (window.location.origin && window.location.origin !== "null")
    ? (window.location.origin + window.location.pathname)
    : window.location.href.split('#')[0];
  return baseUrl + "#" + base64;
}

function exportUrl() {
  const newUrl = getExportUrl();

  navigator.clipboard.writeText(newUrl).then(() => {
    alert("URLをクリップボードにコピーしました！");
  }).catch(err => {
    console.error(err);
    alert("URLのコピーに失敗しました。");
  });
}

// 保存：現在の状態をURL化してクリップボードにコピーし、そのURLへ遷移する
async function saveTimeline() {
  const newUrl = getExportUrl();

  try {
    await navigator.clipboard.writeText(newUrl);
  } catch (err) {
    console.error(err);
  }

  // 保存したURL（URLをコピーと同じURL）へ遷移
  window.location.href = newUrl;
  alert("URLをクリップボードにコピーし、保存先URLへ遷移しました！");
}

function loadFromUrl() {
  if (window.location.hash) {
    try {
      const base64 = window.location.hash.substring(1);
      const jsonStr = decodeURIComponent(atob(base64));
      const data = JSON.parse(jsonStr);
      if (data.party && data.timelineCycles) {
        party = data.party;
        party.forEach(p => {
          if (!p.equipment) {
            p.equipment = { armorSet: 'none', body: 'none', arm: 'none', acc1: 'none', acc2: 'none' };
          }
          if (p.baseEfficiency === undefined) {
            const legacyWeapon = (p.weapon && typeof p.weapon === 'object') ? p.weapon : null;
            const bonus = calculateEquipBonus(p.equipment, legacyWeapon);
            p.baseEfficiency = Math.max(0, Math.round(((p.efficiency !== undefined ? p.efficiency : 100) - bonus) * 10) / 10);
          }
          const isOpen = Boolean(p.isWeaponOpen || p.isEquipOpen);
          p.isWeaponOpen = isOpen;
          p.isEquipOpen = isOpen;
        });
        // 最新の characters.json の baseRefundSP, baseRecoverSP, skills, 武器情報等を反映する
        if (allCharacters.length > 0) {
          syncPartyWithAllCharacters();
        }
        timelineCycles = data.timelineCycles;
        cycleNames = data.cycleNames || Array.from({length: timelineCycles.length}, (_, i) => 'サイクル ' + (i + 1));
        renderParty();
        renderPalette();
        renderTimeline();
      }
    } catch (err) {
      console.error("URLからの状態復元に失敗しました", err);
    }
  }
}

function syncPartyWithAllCharacters() {
  party.forEach(p => {
    const fresh = allCharacters.find(x => x.id === p.id || x.name === p.name);
    if (fresh) {
      p.id = fresh.id;
      p.baseRefundSP = fresh.baseRefundSP || 0;
      p.baseRecoverSP = fresh.baseRecoverSP || 0;
      p.potentials = fresh.potentials;
      p.skills = fresh.skills;
      p.class = fresh.class;
      p.element = fresh.element;
      p.rarity = fresh.rarity;
      p.weaponType = fresh.weaponType;
      p.motifWeapon = fresh.motifWeapon;
      p.recommendedWeapons = fresh.recommendedWeapons;
      p.recommendedArmorSet = fresh.recommendedArmorSet;
      p.recommendedArmorSetName = fresh.recommendedArmorSetName;
      p.recommendedArmor = fresh.recommendedArmor;
      p.baseStats = fresh.baseStats;
      p.mainStat = fresh.mainStat;
      p.subStat = fresh.subStat;
      p.specialMechanic = fresh.specialMechanic;
    }
    const isEquipEmpty = !p.equipment || (p.equipment.armorSet === 'none' && p.equipment.body === 'none' && p.equipment.arm === 'none' && p.equipment.acc1 === 'none' && p.equipment.acc2 === 'none');
    if (isEquipEmpty) {
      p.equipment = getDefaultArmorForChar(p);
    }
    if (p.baseEfficiency === undefined) {
      const bonus = calculateArmorBonus(p.equipment);
      p.baseEfficiency = Math.max(0, Math.round(((p.efficiency !== undefined ? p.efficiency : 100) - bonus) * 10) / 10);
    }
    normalizePartyWeapon(p);
    p.efficiency = Math.round((p.baseEfficiency + calcMemberBonus(p)) * 10) / 10;
  });
}

function exportImage() {
  const elementToCapture = document.getElementById('timeline-wrapper');
  if (!elementToCapture) return;

  html2canvas(elementToCapture, {
    backgroundColor: null, // 背景透過のPNG
    scale: 2,
    useCORS: true,
    onclone: (clonedDoc) => {
      const clonedWrapper = clonedDoc.getElementById('timeline-wrapper');
      if (clonedWrapper) {
        clonedWrapper.style.overflow = 'visible';
        clonedWrapper.style.width = 'max-content';
        clonedWrapper.style.maxWidth = 'none';
        clonedWrapper.style.padding = '10px';
      }

      // 不要なボタン・UI要素を非表示
      // 1. 各サイクルの複製・削除ボタン
      clonedDoc.querySelectorAll('.cycle-controls').forEach(el => el.style.display = 'none');
      // 2. 「＋ サイクルを追加」ボタン
      clonedDoc.querySelectorAll('.add-cycle-btn').forEach(el => el.style.display = 'none');
      // 3. 各スキルの削除オーバーレイ（×ボタン）
      clonedDoc.querySelectorAll('.delete-overlay').forEach(el => el.style.display = 'none');
      // 4. ドロップゾーン（空のドロップ領域）
      clonedDoc.querySelectorAll('.drop-zone').forEach(el => el.style.display = 'none');
      // 5. タイムライン上の返還SP・回復SPブロックを非表示
      clonedDoc.querySelectorAll('.timeline-item').forEach(el => {
        if (el.querySelector('.bg-refund') || el.querySelector('.bg-recover')) {
          el.style.display = 'none';
        }
      });
      // 6. サイクル情報内の返還SP・回復SP表示を非表示
      clonedDoc.querySelectorAll('.cycle-stats div').forEach(el => {
        if (el.textContent.includes('返還SP') || el.textContent.includes('回復SP')) {
          el.style.display = 'none';
        }
      });

      // タイムライン枠の背景・枠線を透過にしてスキルブロックのみを引き立てる
      clonedDoc.querySelectorAll('.sequence-timeline').forEach(el => {
        el.style.backgroundColor = 'transparent';
        el.style.border = 'none';
        el.style.padding = '4px 0';
        el.style.minHeight = 'auto';
        el.style.overflow = 'visible';
        el.style.width = 'max-content';
      });

      // サイクル情報表示の調整
      clonedDoc.querySelectorAll('.cycle-stats').forEach(el => {
        el.style.backgroundColor = 'transparent';
        el.style.border = 'none';
        el.style.color = '#fff';
      });

      // input要素のテキストずれ防止と見た目調整
      const inputs = clonedDoc.querySelectorAll('input[type="number"], input[type="text"]');
      inputs.forEach(input => {
        const span = clonedDoc.createElement('span');
        span.textContent = input.value;
        span.style.cssText = window.getComputedStyle(input).cssText;
        span.style.display = 'inline-block';
        span.style.boxSizing = 'border-box';
        span.style.lineHeight = 'normal';

        if (input.classList.contains('cycle-name-input')) {
          span.style.background = 'transparent';
          span.style.border = 'none';
          span.style.fontSize = '15px';
          span.style.fontWeight = 'bold';
          span.style.color = '#f39c12';
          span.style.padding = '0';
          span.style.width = 'auto';
        } else if (input.classList.contains('refund-input')) {
          span.style.background = '#2c2c2c';
          span.style.border = '1px solid #444';
          span.style.borderRadius = '4px';
          span.style.padding = '2px 4px';
          span.style.minWidth = '24px';
          span.style.textAlign = 'center';
        }
        input.parentNode.replaceChild(span, input);
      });
    }
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'endfield_timeline.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(err => {
    console.error("画像の生成に失敗しました", err);
    alert("画像の生成に失敗しました。");
  });
}

async function fetchCharacters() {
  if (typeof window !== 'undefined' && window.CHARACTER_DATA) {
    const data = window.CHARACTER_DATA;
    allCharacters = JSON.parse(JSON.stringify(data.characters || []));
    defaultPartyNames = JSON.parse(JSON.stringify(data.defaultParty || ['スー', 'リーノ', 'オクギ', 'タンタン']));
    return;
  }
  try {
    const res = await fetch('data/characters.json');
    if (!res.ok) throw new Error(`HTTPエラー! ステータス: ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data)) {
      allCharacters = data;
      defaultPartyNames = ['スー', 'リーノ', 'オクギ', 'タンタン'];
    } else {
      allCharacters = data.characters || [];
      defaultPartyNames = data.defaultParty || [];
    }
  } catch (e) {
    console.warn("characters.json の fetch に失敗したため、組み込みデータを使用します:", e);
    allCharacters = JSON.parse(JSON.stringify(DEFAULT_DATA.characters));
    defaultPartyNames = JSON.parse(JSON.stringify(DEFAULT_DATA.defaultParty));
  }
}

async function fetchEquipment() {
  if (typeof window !== 'undefined' && window.EQUIPMENT_DATA) {
    equipmentMaster = JSON.parse(JSON.stringify(window.EQUIPMENT_DATA));
    return;
  }
  try {
    const res = await fetch('data/equipment.json');
    if (!res.ok) throw new Error(`HTTPエラー! ステータス: ${res.status}`);
    equipmentMaster = await res.json();
  } catch (e) {
    console.warn("equipment.json の fetch に失敗したため、組み込みデータを使用します:", e);
    equipmentMaster = JSON.parse(JSON.stringify(DEFAULT_EQUIPMENT));
  }
}

function initPartyAndRoster() {
  try {
    renderRoster();

    // URLから編成が復元されていない場合は、characters.jsonで指定されたデフォルト編成を追加する
    if (party.length === 0) {
      defaultPartyNames.forEach(name => {
        const c = allCharacters.find(x => x.name === name);
        if (c) addToParty(c);
      });
    } else {
      // 復元済みパーティーに最新のbaseRefundSPやスキルデータを同期する
      syncPartyWithAllCharacters();
      renderTimeline();
    }
  } catch (err) {
    console.error("キャラクターリストの描画中にエラーが発生しました:", err);
  }
}

let currentRosterSort = 'rarity'; // デフォルトはレア度（属性順）

const ELEMENT_ORDER = {
  '物理': 1,
  '灼熱': 2,
  '電磁': 3,
  '寒冷': 4,
  '自然': 5
};

const CLASS_ORDER = {
  '前衛': 1,
  '先鋒': 2,
  '重装': 3,
  '術師': 4,
  '突撃': 5,
  '補助': 6
};

// ソート種別に応じたグループ分けと順序を生成
function getGroupedCharacters() {
  const chars = [...allCharacters];
  const groups = [];

  if (currentRosterSort === 'rarity') {
    // ★6 -> ★5 -> ★4
    const rarities = [6, 5, 4];
    rarities.forEach(r => {
      const list = chars
        .filter(c => (c.rarity || 5) === r)
        .sort((a, b) => {
          const ea = ELEMENT_ORDER[a.element] || 99;
          const eb = ELEMENT_ORDER[b.element] || 99;
          if (ea !== eb) return ea - eb;
          const ca = CLASS_ORDER[a.class] || 99;
          const cb = CLASS_ORDER[b.class] || 99;
          if (ca !== cb) return ca - cb;
          return a.name.localeCompare(b.name, 'ja');
        });
      if (list.length > 0) {
        groups.push({
          key: `rarity-${r}`,
          title: `★${r} オペレーター`,
          headerClass: `group-rarity-${r}`,
          chars: list
        });
      }
    });
  } else if (currentRosterSort === 'element') {
    // 物理 -> 灼熱 -> 電磁 -> 寒冷 -> 自然
    const elements = ['物理', '灼熱', '電磁', '寒冷', '自然'];
    elements.forEach(elem => {
      const list = chars
        .filter(c => (c.element || '物理') === elem)
        .sort((a, b) => {
          const rDiff = (b.rarity || 0) - (a.rarity || 0);
          if (rDiff !== 0) return rDiff;
          const ca = CLASS_ORDER[a.class] || 99;
          const cb = CLASS_ORDER[b.class] || 99;
          if (ca !== cb) return ca - cb;
          return a.name.localeCompare(b.name, 'ja');
        });
      if (list.length > 0) {
        groups.push({
          key: `elem-${elem}`,
          title: `${elem}属性`,
          headerClass: `group-elem-${elem}`,
          chars: list
        });
      }
    });
  } else if (currentRosterSort === 'class') {
    // 前衛 -> 先鋒 -> 重装 -> 術師 -> 突撃 -> 補助
    const classes = ['前衛', '先鋒', '重装', '術師', '突撃', '補助'];
    classes.forEach(cls => {
      const list = chars
        .filter(c => (c.class || '前衛') === cls)
        .sort((a, b) => {
          const rDiff = (b.rarity || 0) - (a.rarity || 0);
          if (rDiff !== 0) return rDiff;
          const ea = ELEMENT_ORDER[a.element] || 99;
          const eb = ELEMENT_ORDER[b.element] || 99;
          if (ea !== eb) return ea - eb;
          return a.name.localeCompare(b.name, 'ja');
        });
      if (list.length > 0) {
        groups.push({
          key: `class-${cls}`,
          title: `${cls}`,
          headerClass: `group-class-${cls}`,
          chars: list
        });
      }
    });
  }

  return groups;
}

function setRosterSort(sortType) {
  currentRosterSort = sortType;
  document.querySelectorAll('.roster-sort-controls .sort-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sort === sortType);
  });
  renderRoster();
}

function renderRoster() {
  const container = document.getElementById('roster-list');
  if (!container) return;
  container.innerHTML = '';

  const groups = getGroupedCharacters();
  groups.forEach(group => {
    const groupEl = document.createElement('div');
    groupEl.className = 'roster-group';

    const headerEl = document.createElement('div');
    headerEl.className = `roster-group-header ${group.headerClass}`;
    headerEl.innerHTML = `
      <span>${group.title}</span>
      <span class="group-count">(${group.chars.length}名)</span>
    `;
    groupEl.appendChild(headerEl);

    const gridEl = document.createElement('div');
    gridEl.className = 'roster-group-grid';

    group.chars.forEach(char => {
      const el = document.createElement('div');
      const rarity = char.rarity || 5;
      const element = char.element || '物理';
      const charClass = char.class || '前衛';
      el.className = `roster-char rarity-${rarity}`;
      el.innerHTML = `
        <div class="char-icon-wrap">
          <img src="${char.icon}" class="char-icon" alt="${char.name}">
          <span class="char-rarity-badge">★${rarity}</span>
        </div>
        <span class="char-name" title="${char.name}">${char.name}</span>
        <div class="char-meta-tags">
          <span class="char-tag tag-elem-${element}">${element}</span>
          <span class="char-tag tag-class">${charClass}</span>
        </div>
      `;
      el.addEventListener('click', () => addToParty(char));
      gridEl.appendChild(el);
    });

    groupEl.appendChild(gridEl);
    container.appendChild(groupEl);
  });
}

function addToParty(charData) {
  if (party.length >= 4) {
    alert("パーティーは最大4人までです。");
    return;
  }
  if (party.find(p => p.id === charData.id)) {
    return; // 既にパーティーに編成済み
  }

  // characters.json で指定された初期効率・初期凸数を設定
  const defaultEfficiency = charData.defaultEfficiency !== undefined ? charData.defaultEfficiency : 100;
  const defaultPotential = charData.defaultPotential !== undefined ? charData.defaultPotential : 0;

  // 初期武器は優先度仕様に基づくデフォルト武器（スキル1・2: Lv9 / スキル3: Lv4）
  const weapon = makeDefaultWeapon(charData);
  const weaponBonus = calculateWeaponBonus(weapon);

  // 初期防具はWiki・仕様準拠のおすすめ防具セット・部位
  const defaultArmor = getDefaultArmorForChar(charData);
  const armorBonus = calculateArmorBonus(defaultArmor);
  const totalEquipBonus = Math.round((weaponBonus + armorBonus) * 10) / 10;

  // defaultEfficiency が100%を超えて個別設定されているキャラは、その値を初期装備込みの合計値とみなす
  const baseEfficiency = defaultEfficiency > 100
    ? Math.max(0, Math.round((defaultEfficiency - totalEquipBonus) * 10) / 10)
    : defaultEfficiency;

  party.push({
    ...charData,
    efficiency: Math.round((baseEfficiency + totalEquipBonus) * 10) / 10,
    baseEfficiency: baseEfficiency,
    potential: defaultPotential,
    weapon: weapon,
    equipment: defaultArmor,
    isEquipOpen: false,
    isWeaponOpen: false
  });

  renderParty();
  renderPalette();
  updateSimulation();
}

function removeFromParty(index) {
  party.splice(index, 1);
  renderParty();
  renderPalette();

  // パーティーから外れたキャラクターのスキルをタイムラインから除外する
  const currentPartyIds = party.map(p => p.id);
  timelineCycles = timelineCycles.map(cycle => {
    return cycle.filter(item => {
      if (item.type === 'separator') return true;
      if (item.type === 'refund' && !item.charId) return true; // 共通の返還SPブロックは残す
      if (item.type === 'recover' && !item.charId) return true; // 共通の回復SPブロックは残す
      return currentPartyIds.includes(item.charId);
    });
  });
  renderTimeline();
}

// 装備詳細の連動展開：武器または防具の詳細を開閉した際、もう片方も連動して展開・格納する
window.handleEquipToggle = function(index, isOpen) {
  if (!party[index]) return;
  party[index].isWeaponOpen = isOpen;
  party[index].isEquipOpen = isOpen;
  const container = document.getElementById('party-list');
  if (!container) return;
  const memberEl = container.children[index];
  if (!memberEl) return;
  const detailsList = memberEl.querySelectorAll('.equip-weapon-container > details');
  detailsList.forEach(d => {
    if (d.open !== isOpen) {
      d.open = isOpen;
    }
  });
};

window.handlePartySkillToggle = function(index, isOpen) {
  if (!party[index]) return;
  party[index].isSkillsOpen = isOpen;
};

function formatArmorStatLabel(statObj) {
  if (!statObj || !statObj.stat) return '';
  const map = {
    defense: '防御力',
    def: '防御力',
    defPercent: '防御力',
    hp: 'HP',
    hpPercent: 'HP',
    atk: '攻撃力',
    atkFlat: '攻撃力',
    atkPercent: '攻撃力',
    strength: '筋力',
    agility: '敏捷',
    intellect: '知性',
    will: '意志',
    willpower: '意志',
    critRate: '会心率',
    critDmg: '会心ダメ',
    critDamage: '会心ダメ',
    artsIntensity: 'アーツ強度',
    physicalDamageUp: '物理ダメ',
    heatDamageUp: '灼熱ダメ',
    electricDamageUp: '電磁ダメ',
    cryoDamageUp: '寒冷ダメ',
    natureDamageUp: '自然ダメ',
    heatAndNatureDamageUp: '灼熱・自然ダメ',
    cryoAndElectricDamageUp: '寒冷・電磁ダメ',
    skillDamageUp: '戦技ダメ',
    comboDamageUp: '連携ダメ',
    ultDamageUp: '必殺ダメ',
    allDamageUp: '全ダメ',
    allSkillDamageUp: '全スキルダメ',
    normalAttackDamageUp: '通常ダメ',
    damageReduction: '全ダメ軽減',
    mainStatPercent: 'メイン能力',
    subStatPercent: 'サブ能力',
    healingEfficiency: '回復効率',
    ultEfficiency: '必殺効率'
  };
  const label = map[statObj.stat] || statObj.stat;
  const val = statObj.value;
  const isPercent = (typeof val === 'number' && val > 0 && val < 1) ||
                    String(statObj.stat).toLowerCase().includes('efficiency') ||
                    String(statObj.stat).toLowerCase().includes('percent') ||
                    String(statObj.stat).toLowerCase().includes('rate');
  if (isPercent) {
    const pctVal = (typeof val === 'number' && val <= 1) ? Math.round(val * 1000) / 10 : val;
    return `${label}+${pctVal}%`;
  }
  return `${label}+${val}`;
}

function getArmorItemSummaryText(item) {
  if (!item || item.id === 'none') return '未装着（クリックして防具を選択）';
  const d = item.detail;
  if (!d) {
    if (item.efficiency > 0) return `必殺効率+${item.efficiency}%`;
    return 'ステータス補正あり';
  }

  // 防御力は非表示、基礎ステータス(筋力/敏捷/知性/意志)とそれ以外(特殊効果等)を分離
  const BASE_STAT_KEYS = new Set(['strength', 'agility', 'intellect', 'will', 'willpower']);
  const DEFENSE_KEYS = new Set(['defense', 'def', 'defPercent']);

  const baseStats = [];
  const otherStats = [];

  // mainStat と subStats を集約
  const allStatObjs = [];
  if (d.mainStat) allStatObjs.push(d.mainStat);
  if (Array.isArray(d.subStats)) {
    d.subStats.forEach(s => allStatObjs.push(s));
  }

  allStatObjs.forEach(s => {
    if (!s || !s.stat || DEFENSE_KEYS.has(s.stat)) return;
    if (BASE_STAT_KEYS.has(s.stat)) {
      baseStats.push(s);
    } else {
      otherStats.push(s);
    }
  });

  // ultEfficiency が detail にプロパティとして存在する場合
  if (d.ultEfficiency && d.ultEfficiency > 0) {
    const alreadyHas = otherStats.some(x => x.stat === 'ultEfficiency');
    if (!alreadyHas) {
      otherStats.push({ stat: 'ultEfficiency', value: d.ultEfficiency });
    }
  }

  // 1. 基礎ステータスを値の高い順(降順)にソートし、上位2つを取得
  baseStats.sort((a, b) => (Number(b.value) || 0) - (Number(a.value) || 0));
  const topBase = baseStats.slice(0, 2);

  const parts = [];
  topBase.forEach(s => {
    const lbl = formatArmorStatLabel(s);
    if (lbl) parts.push(lbl);
  });

  // 2. 3つ目に「残りのやつ」を1つ配置
  if (otherStats.length > 0) {
    const lbl = formatArmorStatLabel(otherStats[0]);
    if (lbl) parts.push(lbl);
  } else if (baseStats.length > 2) {
    const lbl = formatArmorStatLabel(baseStats[2]);
    if (lbl) parts.push(lbl);
  }

  return parts.length > 0 ? parts.join(' / ') : 'ステータス補正あり';
}

function getArmorSetNameById(setId) {
  if (!setId) return '単体防具(セットなし)';
  const s = (equipmentMaster.armorSets || []).find(x => x.id === setId);
  if (s && s.detail && s.detail.name) return `${s.detail.name}セット`;
  if (s) return s.name.replace(/\s*\(.*\)/, '');
  return setId;
}

function renderParty() {
  const container = document.getElementById('party-list');
  if (!container) return;
  container.innerHTML = '';

  party.forEach((p, index) => {
    p.equipment = p.equipment || {
      armorSet: 'none',
      body: 'none',
      arm: 'none',
      acc1: 'none',
      acc2: 'none'
    };
    // 4部位から自動でセット効果（3部位一致）を判定・設定
    p.equipment.armorSet = calculateActiveArmorSet(p.equipment);
    normalizePartyWeapon(p);

    const el = document.createElement('div');
    el.className = 'party-member';

    // 凸数（潜在能力）の選択肢を生成
    let potOptions = `<option value="0">0凸</option>`;
    if (p.potentials) {
      p.potentials.forEach(pot => {
        potOptions += `<option value="${pot.level}">${pot.level}凸</option>`;
      });
    }

    const armorBonus = calculateArmorBonus(p.equipment);
    const armorBonusText = armorBonus > 0 ? `+${armorBonus}%` : `+0%`;

    // 選択中防具アイテムおよびアイコンの取得
    const curBodyItem = (equipmentMaster.bodyArmor || []).find(i => i.id === p.equipment.body || i.id === normalizeEquipId('', p.equipment.body));
    const curArmItem = (equipmentMaster.armArmor || []).find(i => i.id === p.equipment.arm || i.id === normalizeEquipId('', p.equipment.arm));
    const curAcc1Item = (equipmentMaster.accessory || []).find(i => i.id === p.equipment.acc1 || i.id === normalizeEquipId('', p.equipment.acc1));
    const curAcc2Item = (equipmentMaster.accessory || []).find(i => i.id === p.equipment.acc2 || i.id === normalizeEquipId('', p.equipment.acc2));
    const curSetItem = (equipmentMaster.armorSets || []).find(i => i.id === p.equipment.armorSet);

    let curSetIcon = null;
    if (curSetItem && curSetItem.id !== 'none' && curSetItem.id !== 'other') {
      const matchArmor = (equipmentMaster.bodyArmor || []).find(b => b.detail && b.detail.setId === curSetItem.id);
      if (matchArmor && matchArmor.icon) curSetIcon = matchArmor.icon;
    }

    const curSetEffectDesc = (curSetItem && curSetItem.detail && curSetItem.detail.effects && curSetItem.detail.effects.threePiece)
      ? curSetItem.detail.effects.threePiece.description
      : (curSetItem && curSetItem.id !== 'none' ? `必殺技効率 +${curSetItem.efficiency || 0}%` : '防具4部位のうち同一セットを3部位以上装備すると自動で発動します');

    const makeRichSlotCard = (slotKey, slotLabel, itemObj, iconUrl, placeholder, descText, badgeText) => {
      const isSetSlot = (slotKey === 'armorSet');
      const hasItem = itemObj && itemObj.id !== 'none';
      const displayName = hasItem
        ? ((itemObj.detail && itemObj.detail.name) ? itemObj.detail.name : itemObj.name.replace(/\s*\(\+?\d+(\.\d+)?%\)/, ''))
        : (isSetSlot ? 'セット効果未発動' : 'なし (未装着)');
      const effVal = itemObj && itemObj.efficiency ? itemObj.efficiency : (itemObj && itemObj.detail && itemObj.detail.ultEfficiency ? itemObj.detail.ultEfficiency : 0);
      
      const tag = isSetSlot ? 'div' : 'button type="button"';
      const closeTag = isSetSlot ? 'div' : 'button';
      const clickAttr = isSetSlot ? '' : `onclick="openEquipPickerModal(${index}, '${slotKey}')"`;
      const arrowHtml = isSetSlot
        ? (hasItem ? `<span class="rich-slot-change-arrow auto-tag" style="color:var(--accent); font-weight:bold; cursor:default;" title="防具4部位から自動で3部位一致セットが発動します">自動発動中 ✓</span>` : `<span class="rich-slot-change-arrow auto-tag" style="color:#888; font-size:11px; cursor:default;">未発動</span>`)
        : `<span class="rich-slot-change-arrow" title="クリックして変更">変更 ▸</span>`;

      return `
        <${tag} class="rich-equip-slot-btn ${hasItem ? 'is-equipped' : 'is-empty'} ${isSetSlot ? 'is-set-slot' : ''}" ${clickAttr}>
          <div class="rich-slot-icon-wrap">
            ${iconUrl
              ? `<img src="${iconUrl}" class="rich-slot-img" alt="${displayName}" onerror="this.onerror=null;this.parentElement.innerHTML='<span class=\\'equip-icon-placeholder\\'>${placeholder}</span>';">`
              : `<span class="equip-icon-placeholder">${placeholder}</span>`}
          </div>
          <div class="rich-slot-info">
            <div class="rich-slot-top-row">
              <span class="rich-slot-category">${slotLabel}</span>
              ${badgeText ? `<span class="rich-slot-set-badge">${badgeText}</span>` : ''}
              ${effVal > 0 ? `<span class="rich-slot-eff-badge">効率+${effVal}%</span>` : ''}
            </div>
            <div class="rich-slot-name">${displayName}</div>
            <div class="rich-slot-desc">${descText || ''}</div>
          </div>
          ${arrowHtml}
        </${closeTag}>
      `;
    };

    // 選択中武器の情報
    const curWeaponObj = findWeapon(p.weapon.id);
    const recList = Array.isArray(p.recommendedWeapons) ? p.recommendedWeapons : [];
    const motif = p.motifWeapon;
    let weaponTagBadge = '';
    if (curWeaponObj) {
      const isMotif = (curWeaponObj.id === motif || curWeaponObj.name === motif);
      const recIdx = recList.indexOf(curWeaponObj.id) !== -1 ? recList.indexOf(curWeaponObj.id) : recList.indexOf(curWeaponObj.name);
      if (isMotif && recIdx !== -1) {
        weaponTagBadge = 'おすすめ / モチーフ';
      } else if (recIdx !== -1) {
        weaponTagBadge = 'おすすめ武器';
      } else if (isMotif) {
        weaponTagBadge = 'モチーフ武器';
      }
    }

    const weaponBonus = calculateWeaponBonus(p.weapon);
    const weaponBonusText = weaponBonus > 0 ? `+${weaponBonus}%` : `+0%`;

    // 武器スキルUIの生成
    let weaponSkillsHtml = '';
    if (curWeaponObj && curWeaponObj.skills) {
      const skills = curWeaponObj.skills; // 3 skills
      const skillKeys = ['s1', 's2', 's3'];
      const skillLabels = ['スキル1', 'スキル2', 'スキル3'];

      weaponSkillsHtml = `
        <div class="weapon-skills-list">
          ${skills.map((sk, sIdx) => {
            const key = skillKeys[sIdx];
            const curLvl = p.weapon[key] || (sIdx === 2 ? 4 : 9);
            const rankData = sk.ranks ? sk.ranks[curLvl - 1] : null;
            let desc = '';
            let isEstimated = false;
            if (Array.isArray(rankData)) {
              desc = rankData[0] || '';
              isEstimated = rankData[1] === 1;
            } else if (typeof rankData === 'string' || typeof rankData === 'number') {
              desc = String(rankData);
            }

            let lvlOptions = '';
            for (let lvl = 1; lvl <= 9; lvl++) {
              lvlOptions += `<option value="${lvl}" ${lvl === curLvl ? 'selected' : ''}>Lv ${lvl}</option>`;
            }

            // スキル2が必殺技効率の場合のハイライト
            const isUltEff = sIdx === 1 && sk.ultEfficiency;
            const ultVal = isUltEff ? ` (+${sk.ultEfficiency[curLvl - 1]}% 必殺技効率)` : '';

            return `
              <div class="weapon-skill-row">
                <div class="weapon-skill-header">
                  <span class="weapon-skill-name">${skillLabels[sIdx]}: ${sk.name || ''}</span>
                  <div class="weapon-skill-level-wrap">
                    <label>Lv:</label>
                    <select onchange="updatePartyWeaponSkill(${index}, '${key}', this.value)">
                      ${lvlOptions}
                    </select>
                  </div>
                </div>
                <div class="weapon-skill-desc">
                  ${desc}
                  ${isUltEff ? `<span class="highlight-eff">${ultVal}</span>` : ''}
                  ${isEstimated ? '<span style="color:#f39c12; font-size:10px;"> (※補間値)</span>' : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    const weaponDescSummary = curWeaponObj
      ? `★${curWeaponObj.rarity} ${curWeaponObj.type || p.weaponType || ''} / 基礎攻撃力: ${curWeaponObj.baseAtk || 500}`
      : 'クリックして武器を視覚的に選択';

    el.innerHTML = `
      <div class="party-member-header">
        <img src="${p.icon}" class="char-icon" style="margin:0; width:30px; height:30px;">
        <span class="party-char-name">${p.name}</span>
        <div class="settings-group">
          <label>効率:</label>
          <input type="number" value="${p.efficiency}" min="0" max="500" step="0.1" style="width:65px;" onchange="updatePartySetting(${index}, 'efficiency', this.value)"> %
        </div>
        <div class="settings-group">
          <label>凸数:</label>
          <select onchange="updatePartySetting(${index}, 'potential', this.value)">
            ${potOptions}
          </select>
        </div>
        <button type="button" class="wiki-jump-btn" onclick="openCharInWiki('${p.id}')" title="キャラ・スキルWikiでこのオペレーターの倍率・付着仕様を確認">📖 Wiki</button>
        <button class="remove-btn" onclick="removeFromParty(${index})" title="編成から外す">×</button>
      </div>
      <div class="equip-weapon-container">
        <!-- 武器設定 -->
        <details class="equip-details" ${p.isWeaponOpen ? 'open' : ''} ontoggle="handleEquipToggle(${index}, this.open)">
          <summary class="equip-summary">
            <span style="display:inline-flex; align-items:center; gap:6px;">
              ${curWeaponObj && curWeaponObj.icon ? `<img src="${curWeaponObj.icon}" style="width:20px; height:20px; object-fit:contain; border-radius:3px; vertical-align:middle;">` : '⚔️'}
              武器: ${curWeaponObj ? curWeaponObj.name : 'なし'}
            </span>
            <span class="equip-bonus-badge">武器効率: ${weaponBonusText}</span>
          </summary>
          <div class="weapon-body">
            ${makeRichSlotCard(
              'weapon',
              `⚔️ 装着武器 (${p.weaponType || '武器'})`,
              curWeaponObj ? { id: curWeaponObj.id, name: `★${curWeaponObj.rarity} ${curWeaponObj.name}`, efficiency: weaponBonus } : { id: 'none', name: '武器なし' },
              curWeaponObj ? curWeaponObj.icon : null,
              '⚔️',
              weaponDescSummary,
              weaponTagBadge
            )}
            ${weaponSkillsHtml}
          </div>
        </details>

        <!-- 防具設定 -->
        <details class="equip-details" ${p.isEquipOpen ? 'open' : ''} ontoggle="handleEquipToggle(${index}, this.open)">
          <summary class="equip-summary">
            <span style="display:inline-flex; align-items:center; gap:6px;">
              ${curSetIcon ? `<img src="${curSetIcon}" style="width:20px; height:20px; object-fit:contain; border-radius:3px; vertical-align:middle;">` : '🛡️'}
              防具: ${curSetItem && curSetItem.id !== 'none' ? (curSetItem.detail?.name ? curSetItem.detail.name + 'セット' : curSetItem.name) : 'セットなし'}
            </span>
            <span class="equip-bonus-badge">防具効率: ${armorBonusText}</span>
          </summary>
          <div class="rich-armor-panel">
            <div class="rich-armor-set-row">
              ${(() => {
                const isSetRec = Boolean(p.recommendedArmorSet && p.recommendedArmorSet !== 'none' && curSetItem && curSetItem.id === p.recommendedArmorSet);
                let badge = '';
                if (curSetItem && curSetItem.id !== 'none') {
                  badge = isSetRec ? '★ おすすめセット' : '3部位発動';
                }
                return makeRichSlotCard(
                  'armorSet',
                  '🛡️ 3部位セット効果',
                  curSetItem,
                  curSetIcon,
                  '🛡️',
                  curSetEffectDesc,
                  badge
                );
              })()}
            </div>
            <div class="rich-armor-parts-grid">
              ${(() => {
                const isRec = p.recommendedArmor && curBodyItem && curBodyItem.id === p.recommendedArmor.body;
                const setName = curBodyItem && curBodyItem.detail ? getArmorSetNameById(curBodyItem.detail.setId) : '';
                return makeRichSlotCard(
                  'body',
                  '🦺 胴防具',
                  curBodyItem,
                  curBodyItem ? curBodyItem.icon : null,
                  '🦺',
                  getArmorItemSummaryText(curBodyItem),
                  isRec ? '★ おすすめ' : setName
                );
              })()}
              ${(() => {
                const isRec = p.recommendedArmor && curArmItem && curArmItem.id === p.recommendedArmor.arm;
                const setName = curArmItem && curArmItem.detail ? getArmorSetNameById(curArmItem.detail.setId) : '';
                return makeRichSlotCard(
                  'arm',
                  '🧤 腕防具',
                  curArmItem,
                  curArmItem ? curArmItem.icon : null,
                  '🧤',
                  getArmorItemSummaryText(curArmItem),
                  isRec ? '★ おすすめ' : setName
                );
              })()}
              ${(() => {
                const isRec = p.recommendedArmor && curAcc1Item && curAcc1Item.id === p.recommendedArmor.acc1;
                const setName = curAcc1Item && curAcc1Item.detail ? getArmorSetNameById(curAcc1Item.detail.setId) : '';
                return makeRichSlotCard(
                  'acc1',
                  '💍 アクセサリー1',
                  curAcc1Item,
                  curAcc1Item ? curAcc1Item.icon : null,
                  '💍',
                  getArmorItemSummaryText(curAcc1Item),
                  isRec ? '★ おすすめ' : setName
                );
              })()}
              ${(() => {
                const isRec = p.recommendedArmor && curAcc2Item && curAcc2Item.id === p.recommendedArmor.acc2;
                const setName = curAcc2Item && curAcc2Item.detail ? getArmorSetNameById(curAcc2Item.detail.setId) : '';
                return makeRichSlotCard(
                  'acc2',
                  '💍 アクセサリー2',
                  curAcc2Item,
                  curAcc2Item ? curAcc2Item.icon : null,
                  '💍',
                  getArmorItemSummaryText(curAcc2Item),
                  isRec ? '★ おすすめ' : setName
                );
              })()}
            </div>
          </div>
        </details>
      </div>
    `;

    // 選択中の凸数を反映
    const potSelect = el.querySelector('.party-member-header select');
    if (potSelect) potSelect.value = p.potential;

    container.appendChild(el);
  });
}

window.updatePartySetting = function(index, key, value) {
  if (!party[index]) return;
  if (key === 'efficiency') {
    const val = parseFloat(value) || 0;
    party[index].efficiency = val;
    const bonus = calcMemberBonus(party[index]);
    party[index].baseEfficiency = Math.max(0, Math.round((val - bonus) * 10) / 10);
  } else if (key === 'potential') {
    party[index].potential = parseInt(value, 10);
  } else {
    party[index][key] = parseFloat(value);
  }
  updateSimulation();
};

window.updatePartyEquipment = function(index, slot, value) {
  if (!party[index]) return;
  if (!party[index].equipment) {
    party[index].equipment = { armorSet: 'none', body: 'none', arm: 'none', acc1: 'none', acc2: 'none' };
  }
  party[index].equipment[slot] = value;

  // 4部位から自動でセット効果（3部位一致）を判定・設定
  party[index].equipment.armorSet = calculateActiveArmorSet(party[index].equipment);

  const base = party[index].baseEfficiency !== undefined ? party[index].baseEfficiency : 100;
  const bonus = calcMemberBonus(party[index]);
  party[index].efficiency = Math.round((base + bonus) * 10) / 10;

  renderParty();
  updateSimulation();
};

window.updatePartyWeapon = function(index, weaponId) {
  if (!party[index]) return;
  normalizePartyWeapon(party[index]);
  party[index].weapon.id = weaponId;
  // レベルはデフォルト（s1=9, s2=9, s3=4）を維持または再設定
  party[index].weapon.s1 = party[index].weapon.s1 || 9;
  party[index].weapon.s2 = party[index].weapon.s2 || 9;
  party[index].weapon.s3 = party[index].weapon.s3 || 4;

  const base = party[index].baseEfficiency !== undefined ? party[index].baseEfficiency : 100;
  const bonus = calcMemberBonus(party[index]);
  party[index].efficiency = Math.round((base + bonus) * 10) / 10;

  renderParty();
  updateSimulation();
};

window.updatePartyWeaponSkill = function(index, skillKey, levelValue) {
  if (!party[index]) return;
  normalizePartyWeapon(party[index]);
  party[index].weapon[skillKey] = parseInt(levelValue, 10) || 1;

  const base = party[index].baseEfficiency !== undefined ? party[index].baseEfficiency : 100;
  const bonus = calcMemberBonus(party[index]);
  party[index].efficiency = Math.round((base + bonus) * 10) / 10;

  renderParty();
  updateSimulation();
};

// ===== Priority B: リッチな装備選択モーダル（アイコン＋効果テキスト視覚選択） =====
let currentEquipModalState = {
  memberIndex: 0,
  slotType: 'weapon', // 'weapon' | 'armorSet' | 'body' | 'arm' | 'acc1' | 'acc2'
  tagFilter: 'all'
};

window.openEquipPickerModal = function(memberIndex, slotType) {
  if (!party[memberIndex]) return;
  currentEquipModalState = {
    memberIndex: memberIndex,
    slotType: slotType,
    tagFilter: 'all'
  };

  const modal = document.getElementById('equip-picker-modal');
  const titleEl = document.getElementById('equip-modal-title');
  const subEl = document.getElementById('equip-modal-subtitle');
  const iconEl = document.getElementById('equip-modal-icon');
  const searchEl = document.getElementById('equip-modal-search');
  if (searchEl) searchEl.value = '';

  const p = party[memberIndex];
  const slotLabels = {
    weapon: `${p.name} の武器選択 (${p.weaponType || '全武器'})`,
    armorSet: `${p.name} の防具3部位セット選択`,
    body: `${p.name} の胴防具選択`,
    arm: `${p.name} の腕防具選択`,
    acc1: `${p.name} のアクセサリー1選択`,
    acc2: `${p.name} のアクセサリー2選択`
  };
  const slotIcons = {
    weapon: '⚔️',
    armorSet: '🛡️',
    body: '🦺',
    arm: '🧤',
    acc1: '💍',
    acc2: '💍'
  };

  if (titleEl) titleEl.textContent = slotLabels[slotType] || '装備を選択';
  if (subEl) subEl.textContent = 'アイコン画像とスキル・セット効果・ステータスを確認してクリックで装着します';
  if (iconEl) iconEl.textContent = slotIcons[slotType] || '⚔️';

  renderEquipPickerFilterTags();
  renderEquipPickerList();
  if (modal) modal.style.display = 'flex';
};

window.closeEquipPickerModal = function() {
  const modal = document.getElementById('equip-picker-modal');
  if (modal) modal.style.display = 'none';
};

window.setEquipModalTagFilter = function(tag) {
  currentEquipModalState.tagFilter = tag;
  renderEquipPickerFilterTags();
  renderEquipPickerList();
};

function renderEquipPickerFilterTags() {
  const wrap = document.getElementById('equip-modal-filter-tags');
  if (!wrap) return;
  const { slotType, tagFilter } = currentEquipModalState;
  let tags = [];
  if (slotType === 'weapon') {
    tags = [
      { key: 'all', label: 'すべて' },
      { key: 'rec', label: '★ おすすめ・モチーフ' },
      { key: 'r6', label: '★6' },
      { key: 'r5', label: '★5' },
      { key: 'r4', label: '★4' }
    ];
  } else if (slotType === 'armorSet') {
    tags = [
      { key: 'all', label: 'すべて' },
      { key: 'eff', label: '必殺効率UPあり' },
      { key: 'dmg', label: 'ダメージ・会心・アーツ強化' }
    ];
  } else {
    tags = [
      { key: 'all', label: 'すべて' },
      { key: 'curset', label: '現在のセット一致' },
      { key: 'eff', label: '必殺効率UPあり' },
      { key: 'noset', label: '単体防具(セットなし)' }
    ];
  }
  wrap.innerHTML = tags.map(t => `
    <button type="button" class="equip-filter-chip ${tagFilter === t.key ? 'active' : ''}" onclick="setEquipModalTagFilter('${t.key}')">
      ${t.label}
    </button>
  `).join('');
}

window.renderEquipPickerList = function() {
  const grid = document.getElementById('equip-modal-grid');
  if (!grid) return;
  const { memberIndex, slotType, tagFilter } = currentEquipModalState;
  const p = party[memberIndex];
  if (!p) return;

  const q = ((document.getElementById('equip-modal-search') || {}).value || '').trim().toLowerCase();
  grid.innerHTML = '';

  if (slotType === 'weapon') {
    const availableWeapons = getWeaponsForChar(p);
    const recList = Array.isArray(p.recommendedWeapons) ? p.recommendedWeapons : [];
    const motif = p.motifWeapon;
    const curId = p.weapon ? p.weapon.id : 'none';

    const items = [
      { id: 'none', name: '武器なし', rarity: 0, type: p.weaponType || '', baseAtk: 0, skills: [] },
      ...availableWeapons
    ].filter(w => {
      if (w.id === 'none') return tagFilter === 'all' && !q;
      const isMotif = (w.id === motif || w.name === motif);
      const isRec = recList.includes(w.id) || recList.includes(w.name);
      if (tagFilter === 'rec' && !isMotif && !isRec) return false;
      if (tagFilter === 'r6' && w.rarity !== 6) return false;
      if (tagFilter === 'r5' && w.rarity !== 5) return false;
      if (tagFilter === 'r4' && w.rarity !== 4) return false;
      if (q) {
        const skText = (w.skills || []).map(s => `${s.name} ${(s.ranks && s.ranks[8] ? s.ranks[8][0] : '')}`).join(' ').toLowerCase();
        if (!w.name.toLowerCase().includes(q) && !skText.includes(q)) return false;
      }
      return true;
    });

    grid.innerHTML = items.map(w => {
      const isSelected = (w.id === curId || w.name === curId);
      if (w.id === 'none') {
        return `
          <div class="equip-picker-card ${isSelected ? 'selected' : ''}" onclick="selectEquipFromModal('none')">
            <div class="equip-picker-card-top">
              <div class="equip-picker-icon-box"><span class="equip-icon-placeholder">⚔️</span></div>
              <div class="equip-picker-meta">
                <div class="equip-picker-name">武器なし (未装着)</div>
                <div class="equip-picker-sub">基礎攻撃力 +0 / 武器効率 +0%</div>
              </div>
              ${isSelected ? '<span class="equip-selected-pill">装着中</span>' : ''}
            </div>
          </div>
        `;
      }

      const isMotif = (w.id === motif || w.name === motif);
      const recIdx = recList.indexOf(w.id) !== -1 ? recList.indexOf(w.id) : recList.indexOf(w.name);
      let badgeHtml = '';
      if (isMotif && recIdx !== -1) {
        badgeHtml = `<span class="equip-rec-badge motif">★ おすすめ / モチーフ</span>`;
      } else if (recIdx !== -1) {
        badgeHtml = `<span class="equip-rec-badge">★ おすすめ</span>`;
      } else if (isMotif) {
        badgeHtml = `<span class="equip-rec-badge motif">★ モチーフ</span>`;
      }

      const s2 = w.skills && w.skills[1];
      const eff9 = (s2 && s2.ultEfficiency) ? (s2.ultEfficiency[8] || 0) : 0;
      const skillsPreview = (w.skills || []).map((sk, idx) => {
        const defRankIdx = idx === 2 ? 3 : 8; // Lv9 / Lv9 / Lv4
        const rawR = sk.ranks ? sk.ranks[defRankIdx] : '';
        const r = Array.isArray(rawR) ? rawR[0] : (typeof rawR === 'string' || typeof rawR === 'number' ? String(rawR) : '');
        return `<div class="equip-picker-skill-line"><strong>S${idx + 1} (${sk.name || ''}):</strong> ${r}</div>`;
      }).join('');

      const safeId = w.id.replace(/'/g, "\\'");
      return `
        <div class="equip-picker-card rarity-${w.rarity || 5} ${isSelected ? 'selected' : ''}" onclick="selectEquipFromModal('${safeId}')">
          <div class="equip-picker-card-top">
            <div class="equip-picker-icon-box">
              ${w.icon ? `<img src="${w.icon}" alt="${w.name}" onerror="this.onerror=null;this.parentElement.innerHTML='<span class=\\'equip-icon-placeholder\\'>⚔️</span>';">` : '<span class="equip-icon-placeholder">⚔️</span>'}
            </div>
            <div class="equip-picker-meta">
              <div class="equip-picker-badges">
                <span class="equip-rarity-stars">★${w.rarity}</span>
                <span class="equip-type-pill">${w.type || ''}</span>
                ${badgeHtml}
                ${eff9 > 0 ? `<span class="equip-eff-pill">必殺効率+${eff9}%</span>` : ''}
              </div>
              <div class="equip-picker-name">${w.name}</div>
              <div class="equip-picker-sub">基礎攻撃力: <strong>${w.baseAtk || 500}</strong> (Lv.90)</div>
            </div>
            ${isSelected ? '<span class="equip-selected-pill">装着中</span>' : ''}
          </div>
          <div class="equip-picker-effect-box">
            ${skillsPreview}
          </div>
        </div>
      `;
    }).join('');
    return;
  }

  if (slotType === 'armorSet') {
    const sets = equipmentMaster.armorSets || [];
    const curSetId = p.equipment ? p.equipment.armorSet : 'none';
    const recSetId = p.recommendedArmorSet || null;

    let filtered = sets.filter(s => {
      if (tagFilter === 'eff' && !(s.efficiency > 0)) return false;
      if (tagFilter === 'dmg' && s.id === 'none') return false;
      if (q) {
        const desc = (s.detail && s.detail.effects && s.detail.effects.threePiece) ? s.detail.effects.threePiece.description : '';
        if (!s.name.toLowerCase().includes(q) && !desc.toLowerCase().includes(q)) return false;
      }
      return true;
    });

    // おすすめセットを最上位にソート
    filtered.sort((a, b) => {
      const aRec = a.id === recSetId ? 1 : 0;
      const bRec = b.id === recSetId ? 1 : 0;
      if (aRec !== bRec) return bRec - aRec;
      return 0;
    });

    grid.innerHTML = filtered.map(s => {
      const isSelected = s.id === curSetId;
      const isRec = s.id === recSetId;
      let iconUrl = null;
      if (s.id !== 'none' && s.id !== 'other') {
        const matchBody = (equipmentMaster.bodyArmor || []).find(b => b.detail && b.detail.setId === s.id);
        if (matchBody && matchBody.icon) iconUrl = matchBody.icon;
      }
      const desc3 = (s.detail && s.detail.effects && s.detail.effects.threePiece)
        ? s.detail.effects.threePiece.description
        : (s.id === 'none' ? '3部位セット効果を発動しません（単体防具編成など）' : `必殺技効率 +${s.efficiency || 0}%`);
      const displayName = (s.detail && s.detail.name) ? `${s.detail.name} セット` : s.name;
      const safeId = s.id.replace(/'/g, "\\'");

      return `
        <div class="equip-picker-card ${isSelected ? 'selected' : ''}" onclick="selectEquipFromModal('${safeId}')">
          <div class="equip-picker-card-top">
            <div class="equip-picker-icon-box">
              ${iconUrl ? `<img src="${iconUrl}" alt="${displayName}" onerror="this.onerror=null;this.parentElement.innerHTML='<span class=\\'equip-icon-placeholder\\'>🛡️</span>';">` : '<span class="equip-icon-placeholder">🛡️</span>'}
            </div>
            <div class="equip-picker-meta">
              <div class="equip-picker-badges">
                <span class="equip-type-pill">3部位セット</span>
                ${isRec ? '<span class="equip-motif-pill" style="background:#e67e22; color:#fff; font-weight:bold;">★ おすすめセット</span>' : ''}
                ${s.efficiency > 0 ? `<span class="equip-eff-pill">必殺効率+${s.efficiency}%</span>` : ''}
              </div>
              <div class="equip-picker-name">${displayName}</div>
            </div>
            <div style="display:flex; flex-direction:column; gap:4px; align-items:flex-end;">
              ${isSelected ? '<span class="equip-selected-pill">選択中</span>' : ''}
              ${s.id !== 'none' && s.id !== 'other' ? `<button type="button" class="equip-quick-set-btn" onclick="event.stopPropagation(); equipFullSetFromModal('${safeId}')">部位も一括装着</button>` : ''}
            </div>
          </div>
          <div class="equip-picker-effect-box">
            <strong>【3部位セット効果】</strong> ${desc3}
          </div>
        </div>
      `;
    }).join('');
    return;
  }

  // 部位防具 (body / arm / acc1 / acc2)
  const listMap = {
    body: equipmentMaster.bodyArmor || [],
    arm: equipmentMaster.armArmor || [],
    acc1: equipmentMaster.accessory || [],
    acc2: equipmentMaster.accessory || []
  };
  const items = listMap[slotType] || [];
  const curId = p.equipment ? p.equipment[slotType] : 'none';
  const curSetId = p.equipment ? p.equipment.armorSet : 'none';
  const recItemId = p.recommendedArmor ? p.recommendedArmor[slotType] : null;

  let filtered = items.filter(item => {
    const d = item.detail;
    const setId = d ? d.setId : null;
    if (tagFilter === 'curset') {
      if (curSetId && curSetId !== 'none' && setId !== curSetId) return false;
    } else if (tagFilter === 'eff') {
      if (!((item.efficiency || 0) > 0 || (d && d.ultEfficiency > 0))) return false;
    } else if (tagFilter === 'noset') {
      if (setId) return false;
    }
    if (q) {
      const setName = getArmorSetNameById(setId).toLowerCase();
      const statsStr = getArmorItemSummaryText(item).toLowerCase();
      if (!item.name.toLowerCase().includes(q) && !setName.includes(q) && !statsStr.includes(q)) return false;
    }
    return true;
  });

  // おすすめ部位装備を最上位にソート
  filtered.sort((a, b) => {
    const aRec = a.id === recItemId ? 1 : 0;
    const bRec = b.id === recItemId ? 1 : 0;
    if (aRec !== bRec) return bRec - aRec;
    return 0;
  });

  grid.innerHTML = filtered.map(item => {
    const isSelected = (item.id === curId || item.id === normalizeEquipId('', curId));
    const isRec = item.id === recItemId;
    const d = item.detail;
    const displayName = d && d.name ? d.name : item.name;
    const setId = d ? d.setId : null;
    const setName = setId ? getArmorSetNameById(setId) : 'セットなし(単体)';
    const setObj = setId ? (equipmentMaster.armorSets || []).find(s => s.id === setId) : null;
    const setDesc = (setObj && setObj.detail && setObj.detail.effects && setObj.detail.effects.threePiece)
      ? setObj.detail.effects.threePiece.description
      : '';
    const statsText = getArmorItemSummaryText(item);
    const effVal = item.efficiency || (d && d.ultEfficiency) || 0;
    const safeId = item.id.replace(/'/g, "\\'");

    return `
      <div class="equip-picker-card ${isSelected ? 'selected' : ''}" onclick="selectEquipFromModal('${safeId}')">
        <div class="equip-picker-card-top">
          <div class="equip-picker-icon-box">
            ${item.icon ? `<img src="${item.icon}" alt="${displayName}" onerror="this.onerror=null;this.parentElement.innerHTML='<span class=\\'equip-icon-placeholder\\'>🦺</span>';">` : '<span class="equip-icon-placeholder">🦺</span>'}
          </div>
          <div class="equip-picker-meta">
            <div class="equip-picker-badges">
              <span class="equip-type-pill">${setName}</span>
              ${isRec ? '<span class="equip-motif-pill" style="background:#e67e22; color:#fff; font-weight:bold;">★ おすすめ</span>' : ''}
              ${effVal > 0 ? `<span class="equip-eff-pill">必殺効率+${effVal}%</span>` : ''}
            </div>
            <div class="equip-picker-name">${displayName}</div>
            <div class="equip-picker-sub">${statsText}</div>
          </div>
          ${isSelected ? '<span class="equip-selected-pill">装着中</span>' : ''}
        </div>
        ${setDesc ? `<div class="equip-picker-effect-box"><strong>[${setName} 3部位効果]</strong> ${setDesc}</div>` : ''}
      </div>
    `;
  }).join('');
};

window.selectEquipFromModal = function(selectedId) {
  const { memberIndex, slotType } = currentEquipModalState;
  if (slotType === 'weapon') {
    updatePartyWeapon(memberIndex, selectedId);
  } else {
    updatePartyEquipment(memberIndex, slotType, selectedId);
  }
  closeEquipPickerModal();
};

window.equipFullSetFromModal = function(setId) {
  const { memberIndex } = currentEquipModalState;
  const p = party[memberIndex];
  if (!p) return;
  p.equipment = p.equipment || { armorSet: 'none', body: 'none', arm: 'none', acc1: 'none', acc2: 'none' };
  p.equipment.armorSet = setId;

  const matchBody = (equipmentMaster.bodyArmor || []).find(b => b.detail && b.detail.setId === setId);
  const matchArm = (equipmentMaster.armArmor || []).find(a => a.detail && a.detail.setId === setId);
  const matchAccs = (equipmentMaster.accessory || []).filter(a => a.detail && a.detail.setId === setId);

  if (matchBody) p.equipment.body = matchBody.id;
  if (matchArm) p.equipment.arm = matchArm.id;
  if (matchAccs.length > 0) {
    p.equipment.acc1 = matchAccs[0].id;
    p.equipment.acc2 = (matchAccs[1] || matchAccs[0]).id;
  }

  const base = p.baseEfficiency !== undefined ? p.baseEfficiency : 100;
  const bonus = calcMemberBonus(p);
  p.efficiency = Math.round((base + bonus) * 10) / 10;

  renderParty();
  updateSimulation();
  closeEquipPickerModal();
};

// ===== Priority B: キャラ・スキルWiki（別タブ詳細画面） =====
let selectedWikiCharId = null;

window.openCharInWiki = function(charId) {
  selectedWikiCharId = charId;
  switchPage('wiki');
};

window.filterWikiRoster = function() {
  renderWikiRosterList();
};

window.selectWikiCharacter = function(charId) {
  selectedWikiCharId = charId;
  renderWikiRosterList();
  renderWikiCharacterDetail(charId);
};

function renderWikiPage() {
  if (!selectedWikiCharId && allCharacters.length > 0) {
    selectedWikiCharId = (party[0] && party[0].id) ? party[0].id : allCharacters[0].id;
  }
  renderWikiRosterList();
  if (selectedWikiCharId) {
    renderWikiCharacterDetail(selectedWikiCharId);
  }
}

function renderWikiRosterList() {
  const listEl = document.getElementById('wiki-char-list');
  if (!listEl) return;

  const q = ((document.getElementById('wiki-search-input') || {}).value || '').trim().toLowerCase();
  const elemFilter = ((document.getElementById('wiki-elem-filter') || {}).value || 'all');
  const classFilter = ((document.getElementById('wiki-class-filter') || {}).value || 'all');

  const filtered = allCharacters.filter(c => {
    if (elemFilter !== 'all' && c.element !== elemFilter) return false;
    if (classFilter !== 'all' && c.class !== classFilter) return false;
    if (q) {
      const hay = `${c.name} ${c.element} ${c.class} ${c.weaponType || ''}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  listEl.innerHTML = filtered.map(c => {
    const isActive = c.id === selectedWikiCharId;
    return `
      <button type="button" class="wiki-char-item ${isActive ? 'active' : ''}" onclick="selectWikiCharacter('${c.id}')">
        <img src="${c.icon}" class="wiki-char-item-icon" alt="${c.name}">
        <div class="wiki-char-item-info">
          <div class="wiki-char-item-name">★${c.rarity || 5} ${c.name}</div>
          <div class="wiki-char-item-tags">
            <span class="char-tag tag-elem-${c.element || '物理'}">${c.element || '物理'}</span>
            <span class="char-tag tag-class">${c.class || ''}</span>
          </div>
        </div>
      </button>
    `;
  }).join('');
}

function renderWikiCharacterDetail(charId) {
  const pane = document.getElementById('wiki-char-detail');
  if (!pane) return;
  const c = allCharacters.find(x => x.id === charId || x.name === charId);
  if (!c) {
    pane.innerHTML = '<div style="padding:20px; color:#888;">オペレーターを選択してください</div>';
    return;
  }

  const statNameMap = {
    strength: '筋力 (STR)',
    agility: '敏捷 (AGI)',
    intellect: '知性 (INT)',
    will: '意志 (WIL)'
  };
  const bs = c.baseStats || { atk: 300, hp: 2000, def: 100, strength: 100, agility: 100, intellect: 100, will: 100 };

  const inflictLabelMap = {
    heat: '🔥 灼熱付着 (+1段階)',
    cryo: '❄️ 寒冷付着 (+1段階)',
    electric: '⚡ 電磁付着 (+1段階)',
    nature: '🌿 自然付着 (+1段階)',
    copy_slot1: '🎨 01位置属性模倣付着 (+1段階)',
    okugi_dual: '☯️ 知意双形態付着 (+1段階)',
    none: '付着なし（※属性ダメージのみ）'
  };

  const crushLabelMap = {
    inflict: '💥 クラッシュ付与 (0段→1段 / 1段以上→+1段、最大4段)',
    consume_smash: '💥 猛撃・クラッシュ消費 (0段時→1段付与 / 1段以上時→全段階消費して追加効果)',
    consume_shatter: '💥 破砕・クラッシュ消費 (0段時→1段付与 / 1段以上時→全段階消費して極大効果)',
    none: 'なし'
  };

  const targetLabelMap = {
    self: { label: '👤 自己バフ', class: 'target-self' },
    single: { label: '🎯 単体バフ', class: 'target-single' },
    party: { label: '👥 全体バフ', class: 'target-team' },
    team: { label: '👥 全体バフ', class: 'target-team' },
    others: { label: '🤝 他の味方バフ', class: 'target-others' },
    enemy: { label: '👾 敵デバフ', class: 'target-enemy' },
    team_heal: { label: '💚 全体回復', class: 'target-heal-team' },
    single_heal: { label: '💚 単体回復', class: 'target-heal-single' },
    self_heal: { label: '💚 自己回復', class: 'target-heal-self' },
    none: { label: '効果', class: 'target-self' }
  };

  let specialHtml = '';
  if (c.specialMechanic && c.specialMechanic.description) {
    specialHtml = `
      <div class="wiki-special-callout">
        <div class="wiki-special-title">✨ 固有メカニクス・特殊仕様（一次情報Wiki準拠）</div>
        <div class="wiki-special-desc">${c.specialMechanic.description}</div>
      </div>
    `;
  }

  // 1. 通常攻撃カード
  let normalHtml = '';
  if (c.normalAttack) {
    const na = c.normalAttack;
    normalHtml = `
      <div class="wiki-skill-card">
        <div class="wiki-skill-header">
          <div>
            <span class="wiki-skill-type-badge" style="background:#555;">通常</span>
            <strong class="wiki-skill-name">${na.name || '通常攻撃'}</strong>
            <span class="char-tag tag-elem-${na.damageType || c.element || '物理'}">${na.damageType || c.element || '物理'}</span>
          </div>
          <div class="wiki-skill-costs">
            <span class="wiki-cost-pill" style="background:#2c3e50; color:#bdc3c7;">SP消費なし</span>
          </div>
        </div>
        <div class="wiki-skill-desc-text">📝 <strong>攻撃仕様:</strong> ${na.description || na.raw || ''}</div>
        <div class="wiki-skill-mechanics-grid">
          <div class="wiki-mech-box">
            <span class="wiki-mech-label">アーツ付着仕様</span>
            <span class="wiki-mech-val">${na.attach || '付着なし（※全キャラ通常攻撃は付着なし）'}</span>
          </div>
          <div class="wiki-mech-box">
            <span class="wiki-mech-label">ブレイク / 派生</span>
            <span class="wiki-mech-val is-active">${na.breakValue || '重攻撃ブレイクあり'}</span>
          </div>
        </div>
        ${na.multipliers ? `
          <div style="background:#171a20; padding:6px 10px; border-radius:4px; font-size:12px; color:#d1d8e0;">
            📊 <strong>倍率詳細:</strong> ${na.multipliers}
          </div>
        ` : ''}
      </div>
    `;
  }

  // 2. スキル一覧（戦技・連携・必殺）
  const skillsHtml = (c.skills || []).map(sk => {
    const mults = sk.multipliers || {};
    const fmtM = (v) => v !== undefined ? `${Math.round(v * 1000) / 10}%` : '-';
    const infType = sk.infliction ? sk.infliction.type : 'none';
    const infBadge = sk.infliction && sk.infliction.label
      ? `${inflictLabelMap[infType] || sk.infliction.label}`
      : (inflictLabelMap[infType] || '付着なし');

    const crType = sk.crush ? sk.crush.type : 'none';
    const crBadge = sk.crush && sk.crush.label
      ? `${sk.crush.label} — ${crushLabelMap[crType] || ''}`
      : (crushLabelMap[crType] || 'なし');

    const costBadges = [];
    if (sk.spCost !== undefined) costBadges.push(`<span class="wiki-cost-pill sp">消費SP: ${sk.spCost}</span>`);
    if (sk.epCost !== undefined) costBadges.push(`<span class="wiki-cost-pill ep">消費EP: ${sk.epCost}</span>`);
    if (sk.epGain !== undefined) costBadges.push(`<span class="wiki-cost-pill epgain">獲得EP: +${sk.epGain}</span>`);

    let buffsHtml = '';
    if (sk.buffs && sk.buffs.length > 0) {
      buffsHtml = `
        <div class="wiki-buffs-list">
          <div class="wiki-buffs-header">✨ 紐づくバフ・デバフ効果（計算グループ分類）:</div>
          <div class="wiki-buffs-grid">
            ${sk.buffs.map(b => {
              let tgtInfo = targetLabelMap[b.target];
              if (!tgtInfo) {
                if (b.targetLabel && b.targetLabel.includes('全体回復')) {
                  tgtInfo = { label: '💚 全体回復', class: 'target-heal-team' };
                } else if (b.targetLabel && b.targetLabel.includes('単体回復')) {
                  tgtInfo = { label: '💚 単体回復', class: 'target-heal-single' };
                } else if (b.targetLabel && b.targetLabel.includes('自己回復')) {
                  tgtInfo = { label: '💚 自己回復', class: 'target-heal-self' };
                } else {
                  tgtInfo = { label: b.targetLabel || b.target || '効果', class: 'target-self' };
                }
              }
              const durText = b.duration ? `(${b.duration}秒)` : '';
              const groupBadge = b.calcGroupLabel ? `<span class="wiki-buff-calc-badge">${b.calcGroupLabel}</span>` : '';
              return `
                <div class="wiki-buff-item ${tgtInfo.class}">
                  <div class="wiki-buff-top">
                    <span class="wiki-buff-target-badge ${tgtInfo.class}">${tgtInfo.label}</span>
                    ${groupBadge}
                    <strong class="wiki-buff-name">${b.name}</strong>
                    <span class="wiki-buff-dur">${durText}</span>
                  </div>
                  <div class="wiki-buff-desc">${b.description || ''}</div>
                  ${b.condition ? `<div style="font-size:11px; color:#888; margin-top:2px;">条件: ${b.condition}</div>` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="wiki-skill-card">
        <div class="wiki-skill-header">
          <div>
            <span class="wiki-skill-type-badge type-${sk.type}">${sk.shortName || sk.type}</span>
            <strong class="wiki-skill-name">${sk.name}</strong>
            <span class="char-tag tag-elem-${sk.damageType || c.element || '物理'}">${sk.damageTypeDetail || sk.damageType || c.element || '物理'}</span>
          </div>
          <div class="wiki-skill-costs">${costBadges.join('')}</div>
        </div>

        ${sk.description ? `<div class="wiki-skill-desc-text">📝 <strong>スキル効果:</strong> ${sk.description}</div>` : ''}
        ${sk.special ? `<div class="wiki-special-banner">⚡ <strong>【特殊挙動・例外処理】:</strong> ${sk.special}</div>` : ''}

        <div class="wiki-skill-mechanics-grid">
          <div class="wiki-mech-box">
            <span class="wiki-mech-label">アーツ付着仕様</span>
            <span class="wiki-mech-val ${infType !== 'none' ? 'is-active' : ''}">${infBadge}</span>
          </div>
          <div class="wiki-mech-box">
            <span class="wiki-mech-label">クラッシュ仕様</span>
            <span class="wiki-mech-val ${crType !== 'none' ? 'is-active' : ''}">${crBadge}</span>
          </div>
        </div>

        ${buffsHtml}

        <table class="wiki-mult-table">
          <thead>
            <tr>
              <th>Lv.9 (基準)</th>
              <th>特化1 (Rank 1)</th>
              <th>特化2 (Rank 2)</th>
              <th>特化3 (Rank 3)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${fmtM(mults.lv9)}</td>
              <td>${fmtM(mults.lv10_spec1 || mults.rank1)}</td>
              <td>${fmtM(mults.lv11_spec2 || mults.rank2)}</td>
              <td class="wiki-mult-max">${fmtM(mults.lv12_spec3 || mults.rank3)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }).join('');

  // 3. 素質一覧 (talents)
  let talentsHtml = '';
  if (c.talents && c.talents.length > 0) {
    talentsHtml = `
      <div class="wiki-talents-section">
        <h4 class="wiki-section-header">🧬 素質仕様</h4>
        <div class="wiki-talents-grid">
          ${c.talents.map(t => {
            const tgtInfo = targetLabelMap[t.target] || { label: t.targetLabel || '自己バフ', class: (t.targetLabel && t.targetLabel.includes('回復') ? 'target-heal-team' : 'target-self') };
            return `
              <div class="wiki-talent-card">
                <div class="wiki-talent-top">
                  <strong class="wiki-talent-title">⭐ ${t.name}</strong>
                  <span class="wiki-buff-target-badge ${tgtInfo.class}">${tgtInfo.label}</span>
                </div>
                <div class="wiki-talent-desc">${t.description}</div>
                ${t.special ? `<div class="wiki-special-banner">⚡ <strong>【特殊枠】:</strong> ${t.special}</div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // 4. 潜在能力一覧 (potentials)
  let potentialsSectionHtml = '';
  if (c.potentials && c.potentials.length > 0) {
    potentialsSectionHtml = `
      <div class="wiki-potentials-section">
        <h4 class="wiki-section-header">💎 潜在能力 (凸効果 1〜5凸)</h4>
        <div class="wiki-potentials-grid">
          ${c.potentials.map(pt => {
            const tgtInfo = targetLabelMap[pt.target] || { label: pt.targetLabel || '自己バフ', class: (pt.targetLabel && pt.targetLabel.includes('回復') ? 'target-heal-team' : 'target-self') };
            return `
              <div class="wiki-potential-card">
                <div class="wiki-potential-top">
                  <strong class="wiki-potential-title">◆ ${pt.level}凸 (${pt.name || `${pt.level}段階`})</strong>
                  <span class="wiki-buff-target-badge ${tgtInfo.class}">${tgtInfo.label}</span>
                </div>
                <div class="wiki-potential-desc">${pt.description}</div>
                ${pt.special ? `<div class="wiki-special-banner">⚡ <strong>【特殊枠】:</strong> ${pt.special}</div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  pane.innerHTML = `
    <div class="wiki-profile-card">
      <div class="wiki-profile-left">
        <img src="${c.icon}" class="wiki-profile-avatar" alt="${c.name}">
        <div>
          <div class="wiki-profile-badges">
            <span class="equip-rarity-stars">★${c.rarity || 5}</span>
            <span class="char-tag tag-elem-${c.element || '物理'}">${c.element || '物理'}</span>
            <span class="char-tag tag-class">${c.class || ''}</span>
            <span class="equip-type-pill">武器種: ${c.weaponType || '-'}</span>
          </div>
          <h3 class="wiki-profile-name">${c.name}</h3>
          <div class="wiki-profile-weapons">
            <span>モチーフ武器: <strong>${c.motifWeapon || 'なし'}</strong></span>
            <span> / おすすめ武器: <strong>${(c.recommendedWeapons || []).join('、') || '-'}</strong></span>
          </div>
          <div class="wiki-profile-weapons" style="margin-top: 4px;">
            <span>🛡️ おすすめ防具セット: <strong style="color:#e67e22;">${c.recommendedArmorSetName || 'なし'}</strong></span>
          </div>
        </div>
      </div>
      <button type="button" class="wiki-add-party-btn" onclick="addToParty(allCharacters.find(x=>x.id==='${c.id}')); switchPage('rotation');">+ パーティーに編成してスキル回しへ</button>
    </div>

    ${specialHtml}

    <div class="wiki-stats-section">
      <h4 class="wiki-section-header">📊 基礎ステータス (Lv.90) ＆ 能力値補正</h4>
      <div class="wiki-stats-grid">
        <div class="wiki-stat-cell"><span class="k">基礎攻撃力</span><span class="v">${bs.atk}</span></div>
        <div class="wiki-stat-cell"><span class="k">基礎HP</span><span class="v">${bs.hp}</span></div>
        <div class="wiki-stat-cell"><span class="k">基礎防御力</span><span class="v">${bs.def || 100}</span></div>
        <div class="wiki-stat-cell"><span class="k">筋力 (STR)</span><span class="v">${bs.strength}</span></div>
        <div class="wiki-stat-cell"><span class="k">敏捷 (AGI)</span><span class="v">${bs.agility}</span></div>
        <div class="wiki-stat-cell"><span class="k">知性 (INT)</span><span class="v">${bs.intellect}</span></div>
        <div class="wiki-stat-cell"><span class="k">意志 (WIL)</span><span class="v">${bs.willpower || bs.will || 100}</span></div>
        <div class="wiki-stat-cell"><span class="k">メイン能力 (×0.5%)</span><span class="v highlight">${statNameMap[c.mainStat] || c.mainStat}</span></div>
        <div class="wiki-stat-cell"><span class="k">サブ能力 (×0.2%)</span><span class="v">${statNameMap[c.subStat] || c.subStat}</span></div>
      </div>
    </div>

    <div class="wiki-skills-section">
      <h4 class="wiki-section-header">⚔️ スキル仕様・倍率・付着/クラッシュ一覧</h4>
      <div class="wiki-skills-list">
        ${normalHtml}
        ${skillsHtml}
      </div>
    </div>

    ${talentsHtml}
    ${potentialsSectionHtml}
  `;
}

function renderPalette() {
  const container = document.getElementById('skill-palette');
  container.innerHTML = '';

  const tableWrap = document.createElement('div');
  tableWrap.className = 'palette-table';

  // 列ヘッダー行（種類ごとの配置を明示）
  const headerRow = document.createElement('div');
  headerRow.className = 'palette-header-row';
  headerRow.innerHTML = `
    <div class="palette-header-cell"></div>
    <div class="palette-header-cell">戦技1</div>
    <div class="palette-header-cell">戦技2</div>
    <div class="palette-header-cell">戦技3</div>
    <div class="palette-header-cell">連携技</div>
    <div class="palette-header-cell">必殺技</div>
    <div class="palette-header-cell">必殺追加</div>
    <div class="palette-header-cell">返還SP</div>
    <div class="palette-header-cell">回復SP</div>
  `;
  tableWrap.appendChild(headerRow);

  party.forEach(p => {
    const row = document.createElement('div');
    row.className = 'palette-row';

    // 0. アイコン列
    const iconCell = document.createElement('div');
    iconCell.className = 'palette-cell palette-cell-char';
    iconCell.innerHTML = `<img src="${p.icon}" class="char-icon" style="margin:0; width:34px; height:34px;" title="${p.name}">`;
    row.appendChild(iconCell);

    // 1. 戦技1列
    const skill1Cell = document.createElement('div');
    skill1Cell.className = 'palette-cell';
    const s1 = p.skills.find(s => s.id === 'skill1_su' || s.id === 'skill1_mifu' || (s.type === 'skill' && s.id !== 'skill2_su' && s.id !== 'skill2_mifu' && s.id !== 'skill3_mifu'));
    if (s1) {
      const el = createDraggableBlock({
        type: 'skill',
        skillType: s1.type || 'skill',
        charId: p.id,
        skillId: s1.id,
        charName: p.name,
        icon: p.icon,
        skillData: s1
      }, getSkillDisplayName(s1));
      el.classList.add('bg-skill');
      skill1Cell.appendChild(el);
    }
    row.appendChild(skill1Cell);

    // 2. 戦技2列
    const skill2Cell = document.createElement('div');
    skill2Cell.className = 'palette-cell';
    const s2 = p.skills.find(s => s.type === 'skill2' || s.id === 'skill2_su' || s.id === 'skill2_mifu');
    if (s2) {
      const el = createDraggableBlock({
        type: 'skill',
        skillType: s2.type || 'skill2',
        charId: p.id,
        skillId: s2.id,
        charName: p.name,
        icon: p.icon,
        skillData: s2
      }, getSkillDisplayName(s2));
      el.classList.add('bg-skill');
      skill2Cell.appendChild(el);
    }
    row.appendChild(skill2Cell);

    // 2.5 戦技3列（ミ・フの開天など）
    const skill3Cell = document.createElement('div');
    skill3Cell.className = 'palette-cell';
    const s3 = p.skills.find(s => s.type === 'skill3' || s.id === 'skill3_mifu');
    if (s3) {
      const el = createDraggableBlock({
        type: 'skill',
        skillType: s3.type || 'skill3',
        charId: p.id,
        skillId: s3.id,
        charName: p.name,
        icon: p.icon,
        skillData: s3
      }, getSkillDisplayName(s3));
      el.classList.add('bg-skill');
      skill3Cell.appendChild(el);
    }
    row.appendChild(skill3Cell);

    // 3. 連携技列（全キャラ共通）
    const comboCell = document.createElement('div');
    comboCell.className = 'palette-cell';
    const combo = p.skills.find(s => s.type === 'combo');
    if (combo) {
      const el = createDraggableBlock({
        type: 'skill',
        skillType: combo.type || 'combo',
        charId: p.id,
        skillId: combo.id,
        charName: p.name,
        icon: p.icon,
        skillData: combo
      }, getSkillDisplayName(combo));
      el.classList.add('bg-combo');
      comboCell.appendChild(el);
    }
    row.appendChild(comboCell);

    // 4. 必殺技列（全キャラ共通）
    const ultCell = document.createElement('div');
    ultCell.className = 'palette-cell';
    const ult = p.skills.find(s => s.type === 'ult');
    if (ult) {
      const el = createDraggableBlock({
        type: 'skill',
        skillType: ult.type || 'ult',
        charId: p.id,
        skillId: ult.id,
        charName: p.name,
        icon: p.icon,
        skillData: ult
      }, getSkillDisplayName(ult));
      el.classList.add('bg-ult');
      ultCell.appendChild(el);
    }
    row.appendChild(ultCell);

    // 5. 必殺追加列（必殺技2、必殺キャンセル等。持たないキャラは空セル）
    const ultExtraCell = document.createElement('div');
    ultExtraCell.className = 'palette-cell';
    const ultExtra = p.skills.find(s => s.type === 'ult2' || s.type === 'ult_cancel');
    if (ultExtra) {
      const el = createDraggableBlock({
        type: 'skill',
        skillType: ultExtra.type,
        charId: p.id,
        skillId: ultExtra.id,
        charName: p.name,
        icon: p.icon,
        skillData: ultExtra
      }, getSkillDisplayName(ultExtra));
      if (ultExtra.type === 'ult2') el.classList.add('bg-ult2');
      if (ultExtra.type === 'ult_cancel') el.classList.add('bg-ult-cancel');
      ultExtraCell.appendChild(el);
    }
    row.appendChild(ultExtraCell);

    // 6. 返還SP列（対象キャラのみ。持たないキャラは空セル）
    const refundCell = document.createElement('div');
    refundCell.className = 'palette-cell';
    if (p.baseRefundSP > 0 || (p.potentials && p.potentials.some(pot => pot.type === 'refund_sp_boost')) || p.name === 'タンタン' || p.name === 'リーノ') {
      const refundEl = createDraggableBlock({
        type: 'refund',
        charId: p.id,
        charName: p.name,
        icon: p.icon
      }, `返還SP`);
      refundEl.classList.add('bg-refund');
      refundCell.appendChild(refundEl);
    }
    row.appendChild(refundCell);

    // 7. 回復SP列（先鋒キャラ等の固有回復SPを持つ対象キャラのみ。UI/UXは返還SPと同様）
    const recoverCell = document.createElement('div');
    recoverCell.className = 'palette-cell';
    if (p.baseRecoverSP > 0 || (p.potentials && p.potentials.some(pot => pot.type === 'recover_sp_boost')) || p.class === '先鋒') {
      const recoverEl = createDraggableBlock({
        type: 'recover',
        charId: p.id,
        charName: p.name,
        icon: p.icon
      }, `回復SP`);
      recoverEl.classList.add('bg-recover');
      recoverCell.appendChild(recoverEl);
    }
    row.appendChild(recoverCell);

    tableWrap.appendChild(row);
  });

  container.appendChild(tableWrap);

  // 共通ブロック（任意返還SP・任意回復SP・待機仕切り）
  const commonRow = document.createElement('div');
  commonRow.className = 'palette-common-row';

  const commonLabel = document.createElement('span');
  commonLabel.style.cssText = 'color: var(--text-muted); font-size: 13px; font-weight: bold; margin-right: 5px;';
  commonLabel.textContent = '共通:';
  commonRow.appendChild(commonLabel);

  const refundData = {
    type: 'refund'
  };
  const refundBlock = document.createElement('div');
  refundBlock.className = 'skill-block bg-refund';
  refundBlock.draggable = true;
  refundBlock.title = '戦技消費時に戻ってくるSP。返還されたSPを消費しても必殺チャージは回復しません';
  refundBlock.innerHTML = `<span>返還SP (任意)</span>`;
  refundBlock.addEventListener('dragstart', e => e.dataTransfer.setData('application/json', JSON.stringify(refundData)));
  refundBlock.addEventListener('click', () => {
    timelineCycles[timelineCycles.length - 1].push(JSON.parse(JSON.stringify(refundData)));
    renderTimeline();
  });
  commonRow.appendChild(refundBlock);

  const recoverData = {
    type: 'recover'
  };
  const recoverBlock = document.createElement('div');
  recoverBlock.className = 'skill-block bg-recover';
  recoverBlock.draggable = true;
  recoverBlock.title = '重攻撃や先鋒スキル等による通常SP回復。このSPを消費した戦技は必殺チャージが通常通り回復します';
  recoverBlock.innerHTML = `<span>回復SP (任意)</span>`;
  recoverBlock.addEventListener('dragstart', e => e.dataTransfer.setData('application/json', JSON.stringify(recoverData)));
  recoverBlock.addEventListener('click', () => {
    timelineCycles[timelineCycles.length - 1].push(JSON.parse(JSON.stringify(recoverData)));
    renderTimeline();
  });
  commonRow.appendChild(recoverBlock);

  const sepData = {
    type: 'separator'
  };
  const separatorBlock = document.createElement('div');
  separatorBlock.className = 'skill-block bg-separator-palette';
  separatorBlock.draggable = true;
  separatorBlock.innerHTML = `<span>待機 (仕切り)</span>`;
  separatorBlock.addEventListener('dragstart', e => e.dataTransfer.setData('application/json', JSON.stringify(sepData)));
  separatorBlock.addEventListener('click', () => {
    timelineCycles[timelineCycles.length - 1].push(JSON.parse(JSON.stringify(sepData)));
    renderTimeline();
  });
  commonRow.appendChild(separatorBlock);

  container.appendChild(commonRow);
}


function createDraggableBlock(data, text) {
  const el = document.createElement('div');
  el.className = 'skill-block';
  el.draggable = true;
  el.innerHTML = `<img src="${data.icon}"> <span>${text}</span>`;

  el.addEventListener('dragstart', e => {
    e.dataTransfer.setData('application/json', JSON.stringify(data));
  });

  // クリックでもタイムライン末尾に追加可能にする
  el.addEventListener('click', () => {
    // パレット上のブロック（インデックス未設定）のみ追加する
    if (data.index === undefined) {
      timelineCycles[timelineCycles.length - 1].push(JSON.parse(JSON.stringify(data)));
      renderTimeline();
    }
  });

  return el;
}


window.updateCycleName = function(cycleIndex, value) {
  cycleNames[cycleIndex] = value;
};

window.updateTimelineRefund = function(cycleIndex, index, value) {
  timelineCycles[cycleIndex][index].customRefund = parseFloat(value) || 0;
  updateSimulation();
};

window.updateTimelineRecover = function(cycleIndex, index, value) {
  timelineCycles[cycleIndex][index].customRecover = parseFloat(value) || 0;
  updateSimulation();
};

// タンタン・リーノ共通：直前の返還SP以降に発動した連携技回数から返還SPの初期値を計算する関数
function calculateComboBasedRefund(charId, cycleIndex, index) {
  const p = party.find(x => x.id === charId);
  if (!p) return 0;

  const flat = timelineCycles.flat();
  let absIndex = 0;
  for (let i = 0; i < cycleIndex; i++) absIndex += timelineCycles[i].length;
  absIndex += index;

  let recentCombos = 0;
  for (let i = absIndex - 1; i >= 0; i--) {
    const pastItem = flat[i];
    if ((pastItem.type === 'skill' || pastItem.type === 'combo') && pastItem.charId === charId && pastItem.skillData && pastItem.skillData.type === 'combo') {
      recentCombos++;
    } else if (pastItem.type === 'refund' && pastItem.charId === charId) {
      break; // 直前の同キャラの返還SPブロックでカウントを打ち切る
    } else if (pastItem.charId === charId && pastItem.skillData && pastItem.skillData.type === 'ult_cancel') {
      break; // 同キャラの必殺キャンセル以前の連携技はカウントしない（カウントを0に戻す）
    }
  }

  // 連携技のカウント上限（リーノは最大1回、タンタンは最大2回）
  const maxCombos = (charId === 'char_lino') ? 1 : 2;
  recentCombos = Math.min(maxCombos, recentCombos);

  // 連携技1回あたりの返還SP（リーノは10、タンタンは20＋凸効果）
  let refundPerCombo = (charId === 'char_lino') ? 10 : 20;
  if (p.potentials) {
    p.potentials.forEach(pot => {
      if (p.potential >= pot.level && pot.type === 'refund_sp_boost') {
        refundPerCombo += pot.value;
      }
    });
  }

  return (recentCombos * refundPerCombo) + (p.baseRefundSP || 0);
}

function renderTimeline() {
  const wrapper = document.getElementById('timeline-wrapper');
  wrapper.innerHTML = '';

  timelineCycles.forEach((cycle, cycleIndex) => {
    const cycleWrap = document.createElement('div');
    cycleWrap.className = 'cycle-wrapper';

    // サイクル操作ボタン（複製・削除）
    const controls = document.createElement('div');
    controls.className = 'cycle-controls';

    const cloneBtn = document.createElement('button');
    cloneBtn.textContent = '複製';
    cloneBtn.onclick = () => {
      const cloned = JSON.parse(JSON.stringify(timelineCycles[cycleIndex]));
      // 並び替え用の一時フラグを除去
      cloned.forEach(i => delete i.isReorder);
      timelineCycles.splice(cycleIndex + 1, 0, cloned);
      cycleNames.splice(cycleIndex + 1, 0, cycleNames[cycleIndex] + ' (コピー)');
      renderTimeline();
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = '削除';
    delBtn.onclick = () => {
      timelineCycles.splice(cycleIndex, 1);
      cycleNames.splice(cycleIndex, 1);
      if (timelineCycles.length === 0) {
        timelineCycles = [
          []
        ];
        cycleNames = ['サイクル 1'];
      }
      renderTimeline();
    };

    controls.appendChild(cloneBtn);
    controls.appendChild(delBtn);

    const timeline = document.createElement('div');
    timeline.className = 'sequence-timeline';
    timeline.setAttribute('data-cycle-index', cycleIndex);

    // タイムラインへのドラッグ＆ドロップ設定
    timeline.addEventListener('dragover', e => {
      e.preventDefault();
      const draggingElement = document.querySelector('.timeline-item.dragging');
      if (draggingElement) {
        removeDropIndicator();
        const afterElement = getDragAfterElement(timeline, e.clientX, e.clientY);
        if (afterElement == null) {
          timeline.appendChild(draggingElement);
        } else {
          timeline.insertBefore(draggingElement, afterElement);
        }
      } else {
        // パレットからのドラッグ時：ドロップ先インジケーター（隙間ガイド）を表示
        showDropIndicator(timeline, e.clientX, e.clientY);
      }
    });

    timeline.addEventListener('dragleave', e => {
      if (!timeline.contains(e.relatedTarget)) {
        removeDropIndicator();
      }
    });

    timeline.addEventListener('drop', e => {
      e.preventDefault();
      removeDropIndicator();
      const dataStr = e.dataTransfer.getData('application/json');
      if (!dataStr) return;
      try {
        const data = JSON.parse(dataStr);
        if (data.isReorder) {
          // 並び替えはdragendイベントで処理する
          return;
        }

        const afterElement = getDragAfterElement(timeline, e.clientX, e.clientY);
        let insertIndex = cycle.length;
        if (afterElement) {
          insertIndex = parseInt(afterElement.getAttribute('data-index'));
        }

        timelineCycles[cycleIndex].splice(insertIndex, 0, data);
        renderTimeline();
      } catch (err) {
        console.error(err);
      }
    });

    if (cycle.length === 0) {
      timeline.innerHTML = `<div class="drop-zone">ここにスキルをドロップ</div>`;
    } else {
      cycle.forEach((item, index) => {
        const wrap = document.createElement('div');
        wrap.className = 'timeline-item';
        wrap.setAttribute('data-cycle', cycleIndex);
        wrap.setAttribute('data-index', index);
        wrap.draggable = true;

        wrap.addEventListener('dragstart', e => {
          wrap.classList.add('dragging');
          const data = JSON.parse(JSON.stringify(item));
          data.isReorder = true;
          data.sourceCycle = cycleIndex;
          data.sourceIndex = index;
          e.dataTransfer.setData('application/json', JSON.stringify(data));
          e.dataTransfer.effectAllowed = 'move';
        });

        wrap.addEventListener('dragend', () => {
          wrap.classList.remove('dragging');

          // DOMの並び順から全サイクルの配列を再構築する
          const newCycles = [];
          const cycleNodes = document.querySelectorAll('.sequence-timeline');
          cycleNodes.forEach(node => {
            const items = [];
            const itemNodes = node.querySelectorAll('.timeline-item');
            itemNodes.forEach(itemNode => {
              const oldCycle = parseInt(itemNode.getAttribute('data-cycle'));
              const oldIndex = parseInt(itemNode.getAttribute('data-index'));
              items.push(timelineCycles[oldCycle][oldIndex]);
            });
            newCycles.push(items);
          });
          timelineCycles = newCycles;
          if (timelineCycles.length === 0) timelineCycles = [
            []
          ];
          renderTimeline();
        });

        const block = document.createElement('div');
        block.className = 'skill-block';
        let text = "";

        if (item.type === 'refund') {
          block.classList.add('bg-refund');
          const stats = getCharacterStats(item.charId);
          let defaultRefund = stats ? stats.refundSP : 0;

          // タンタン・リーノは直前の連携技発動回数に応じた返還SPを同じロジックで計算する
          if (item.charId === 'タンタン' || item.charId === 'char_lino') {
            defaultRefund = calculateComboBasedRefund(item.charId, cycleIndex, index);
          }

          const currentVal = item.customRefund !== undefined ? item.customRefund : defaultRefund;
          const pObj = party.find(x => x.id === item.charId);
          const iconHtml = pObj ? `<img src="${pObj.icon}">` : '';
          text = `${iconHtml}返還SP <input type="number" value="${currentVal}" min="0" step="1" class="refund-input" onchange="updateTimelineRefund(${cycleIndex}, ${index}, this.value)" onclick="event.stopPropagation();">`;
          block.innerHTML = text;
        } else if (item.type === 'recover') {
          block.classList.add('bg-recover');
          const stats = getCharacterStats(item.charId);
          const defaultRecover = stats ? stats.recoverSP : 0;

          const currentVal = item.customRecover !== undefined ? item.customRecover : defaultRecover;
          const pObj = party.find(x => x.id === item.charId);
          const iconHtml = pObj ? `<img src="${pObj.icon}">` : '';
          text = `${iconHtml}回復SP <input type="number" value="${currentVal}" min="0" step="1" class="refund-input" onchange="updateTimelineRecover(${cycleIndex}, ${index}, this.value)" onclick="event.stopPropagation();">`;
          block.innerHTML = text;
        } else if (item.type === 'separator') {
          block.classList.add('bg-separator');

        } else {
          const sType = item.skillData ? item.skillData.type : '';
          const sId = item.skillData ? item.skillData.id : '';
          if (sType === 'skill' || sType === 'skill2' || sType === 'skill3' || sId.startsWith('skill')) block.classList.add('bg-skill');
          if (item.skillData.type === 'combo') block.classList.add('bg-combo');
          if (item.skillData.type === 'ult') block.classList.add('bg-ult');
          if (item.skillData.type === 'ult2') block.classList.add('bg-ult2');
          if (item.skillData.type === 'ult_cancel') block.classList.add('bg-ult-cancel');
          text = getSkillDisplayName(item.skillData);
          block.innerHTML = `<img src="${item.icon}"> <span>${text}</span>`;
        }

        const delBtn = document.createElement('div');
        delBtn.className = 'delete-overlay';
        delBtn.textContent = '×';
        delBtn.onclick = () => {
          timelineCycles[cycleIndex].splice(index, 1);
          renderTimeline();
        };

        // 中クリックでスキルを削除できるようにする
        wrap.addEventListener('auxclick', e => {
          if (e.button === 1) {
            e.preventDefault();
            e.stopPropagation();
            timelineCycles[cycleIndex].splice(index, 1);
            renderTimeline();
          }
        });
        wrap.addEventListener('mousedown', e => {
          if (e.button === 1) {
            e.preventDefault(); // 自動スクロールの発動を抑止
          }
        });

        wrap.appendChild(block);
        wrap.appendChild(delBtn);
        timeline.appendChild(wrap);
      });

      const dropEnd = document.createElement('div');
      dropEnd.className = 'drop-zone';
      dropEnd.style.minWidth = '50px';
      timeline.appendChild(dropEnd);
    }

    const statsDiv = document.createElement('div');
    statsDiv.className = 'cycle-stats';
    statsDiv.id = `cycle-stats-${cycleIndex}`;

    // サイクル統計ヘッダー（編集可能なサイクル名を含む）
    statsDiv.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; margin-right:auto;">
         <input type="text" class="cycle-name-input" value="${(cycleNames[cycleIndex] || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}" onchange="updateCycleName(${cycleIndex}, this.value)" placeholder="サイクル名" style="background:#2c2c2c; color:#fff; border:1px solid #444; border-radius:4px; padding:4px 8px; font-weight:bold; width:150px;">
      </div>
      <div>消費SP: <span class="sp-spent">0</span></div>
      <div>返還SP: <span class="sp-refund">0</span></div>
      <div>回復SP: <span class="sp-recover">0</span></div>
    `;

    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline-cycle-container';
    timelineContainer.style.display = 'flex';
    timelineContainer.style.flexDirection = 'column';
    timelineContainer.style.gap = '5px';
    timelineContainer.style.flexGrow = '1';
    timelineContainer.style.minWidth = '0';

    timelineContainer.appendChild(statsDiv);
    timelineContainer.appendChild(timeline);

    cycleWrap.appendChild(controls);
    cycleWrap.appendChild(timelineContainer);
    wrapper.appendChild(cycleWrap);
  });

  const addBtn = document.createElement('button');
  addBtn.className = 'add-cycle-btn';
  addBtn.textContent = '＋ サイクルを追加';
  addBtn.onclick = () => {
    timelineCycles.push([]);
    cycleNames.push('サイクル ' + timelineCycles.length);
    renderTimeline();
  };
  wrapper.appendChild(addBtn);

  updateSimulation();
}



function clearTimeline() {
  timelineCycles = [
    []
  ];
  cycleNames = ['サイクル 1'];
  renderTimeline();
}

// --- シミュレーション計算ロジック ---

function getCharacterStats(charId) {
  const p = party.find(x => x.id === charId);
  if (!p) return null;

  // 凸効果（潜在能力）の集計
  let refundSpBoost = 0;
  let recoverSpBoost = 0;
  let ultCostReduction = 0; // 必殺技コスト軽減率（%）

  if (p.potentials) {
    p.potentials.forEach(pot => {
      if (p.potential >= pot.level) {
        if (pot.type === 'refund_sp_boost') refundSpBoost += pot.value;
        if (pot.type === 'recover_sp_boost') recoverSpBoost += pot.value;
        if (pot.type === 'ult_cost_reduction_percent') ultCostReduction += pot.value;
      }
    });
  }

  return {
    efficiency: p.efficiency / 100, // 倍率（1.0 = 100%）
    refundSP: (p.baseRefundSP || 0) + refundSpBoost,
    recoverSP: (p.baseRecoverSP || 0) + recoverSpBoost,
    ultCostReduction: ultCostReduction
  };
}

function updateSimulation(opts = {}) {
  let totalSpSpent = 0;
  let totalSpRefunded = 0;
  let totalSpRecovered = 0;
  let currentRefundSpPool = 0;
  let totalSkillCasts = 0;
  let suSkill1CastCount = 0;

  let totalTimelineDamage = 0;
  let maxSingleDamage = 0;
  let maxDamageSkillName = '-';
  let totalDamageCasts = 0;
  const charDamageMap = {};
  const detailedSkillList = [];

  party.forEach(p => {
    charDamageMap[p.name] = {
      charName: p.name,
      icon: p.icon,
      totalDamage: 0
    };
  });

  // キャラクターごとの連携技カウント（返還SP計算用：タンタン・リーノ共通ロジック）
  const comboCountsForRefund = {};

  // 「開始時チャージマックス」チェックボックスの状態を取得
  const startMaxChargeCheckbox = document.getElementById('start-max-charge');
  const startMaxCharge = startMaxChargeCheckbox ? startMaxChargeCheckbox.checked : false;

  // パーティー全員のEP状態を初期化
  const epState = {};
  party.forEach(p => {
    const stats = getCharacterStats(p.id);
    const ultSkill = p.skills.find(s => s.type === 'ult');
    let maxEp = ultSkill ? ultSkill.epCost : 100;
    if (ultSkill && stats.ultCostReduction > 0) {
      maxEp = maxEp * (1 - stats.ultCostReduction / 100);
    }

    comboCountsForRefund[p.id] = 0;

    epState[p.id] = {
      current: startMaxCharge ? maxEp : 0,
      warnings: [],
      ultCount: 0,
      firstUltCost: maxEp,
      epGainedBeforeFirstUlt: 0,
      baseEpGainedBeforeFirstUlt: 0,
      hasCastUlt: false,
      epLock: false,
      comboCount: 0
    };
  });

  // サイクルごとにタイムラインを順番に処理する
  timelineCycles.forEach((cycle, cycleIndex) => {
    let cycleSpSpent = 0;
    let cycleRefundSp = 0;
    let cycleRecoverSp = 0;

    cycle.forEach((step, index) => {
      const stats = getCharacterStats(step.charId);
      if (step.type === 'separator') return;
      if (step.type !== 'refund' && step.type !== 'recover' && !stats) return;

      if (step.type === 'refund') {
        let baseVal = stats ? stats.refundSP : 0;
        // タンタンとリーノは連携技回数から返還SPを算出する
        if (step.charId === 'タンタン' || step.charId === 'char_lino') {
          const p = party.find(x => x.id === step.charId);
          if (p) {
            const maxCombos = (step.charId === 'char_lino') ? 1 : 2;
            const recentCombos = Math.min(maxCombos, comboCountsForRefund[step.charId] || 0);
            let refundPerCombo = (step.charId === 'char_lino') ? 10 : 20;
            if (p.potentials) {
              p.potentials.forEach(pot => {
                if (p.potential >= pot.level && pot.type === 'refund_sp_boost') {
                  refundPerCombo += pot.value;
                }
              });
            }
            baseVal = (recentCombos * refundPerCombo) + (p.baseRefundSP || 0);
            comboCountsForRefund[step.charId] = 0;
          }
        }
        const refundVal = step.customRefund !== undefined ? step.customRefund : baseVal;
        totalSpRefunded += refundVal;
        currentRefundSpPool += refundVal;
        cycleRefundSp += refundVal;
      } else if (step.type === 'recover') {
        // 通常SP回復（重攻撃、終撃、先鋒スキル等。必殺チャージは減衰せず通常通り溜まる）
        const baseVal = stats ? stats.recoverSP : 0;
        const recoverVal = step.customRecover !== undefined ? step.customRecover : baseVal;
        totalSpRecovered += recoverVal;
        cycleRecoverSp += recoverVal;
      } else if (step.type === 'skill' || step.type === 'skill2' || step.type === 'skill3' || step.type === 'skill_2') {
        const s = step.skillData || {};

        // スーの戦技1・戦技2の発動順序チェック
        if ((s.id === 'skill1_su' || s.shortName === '戦技1' || s.name === '戦技1') && step.charId === 'char_su') {
          suSkill1CastCount++;
        }
        if ((s.id === 'skill2_su' || s.shortName === '戦技2' || s.name === '戦技2') && step.charId === 'char_su') {
          if (suSkill1CastCount <= 0) {
            epState[step.charId].warnings.push('戦技2は戦技1の後に発動可能');
          } else {
            suSkill1CastCount--;
          }
        }

        if (s.type === 'skill' || s.type === 'skill2' || s.type === 'skill3' || s.type === 'skill_2') {
          const spCost = s.spCost || 0;
          totalSpSpent += spCost;
          cycleSpSpent += spCost;

          // 返還SPプールから優先的に消費する
          let consumedRefund = 0;
          if (currentRefundSpPool > 0 && spCost > 0) {
            consumedRefund = Math.min(currentRefundSpPool, spCost);
            currentRefundSpPool -= consumedRefund;
          }

          // 実質消費した通常SP（返還SPを除いた消費SP）
          const actualNormalSpSpent = spCost - consumedRefund;

          // 必殺チャージ（EP回復）仕様：
          // 通常のSP100消費につき基礎6.5回復（返還SP消費分はEPを回復しない）
          // 例：100SP消費 -> 6.5回復、50SP消費 -> 3.25回復、通常SP75+返還SP25消費 -> 6.5 * (3/4)回復
          const epBase = (actualNormalSpSpent / 100) * 6.5;
          const skillCastValue = actualNormalSpSpent / 100;
          totalSkillCasts += skillCastValue;

          // スキル自体に返還SPがある場合（ミ・フの「断雲」など）、消費直後に返還プールに加算
          if (s.refundSp) {
            totalSpRefunded += s.refundSp;
            currentRefundSpPool += s.refundSp;
            cycleRefundSp += s.refundSp;
          }

          party.forEach(p => {
            const pStats = getCharacterStats(p.id);
            const gain = epBase * pStats.efficiency;
            if (!epState[p.id].epLock) {
              epState[p.id].current += gain;
              if (!epState[p.id].hasCastUlt) {
                epState[p.id].epGainedBeforeFirstUlt += gain;
                epState[p.id].baseEpGainedBeforeFirstUlt += epBase;
              }
            }
          });

        } else if (s.type === 'combo' || (step.skillData && step.skillData.type === 'combo')) {
          if (step.charId === 'タンタン' || step.charId === 'char_lino') {
            comboCountsForRefund[step.charId] = (comboCountsForRefund[step.charId] || 0) + 1;
          }
          // 連携技による必殺チャージ回復（リーノは20、通常キャラは10）
          const baseGain = (s.epGain !== undefined) ? s.epGain : ((step.charId === 'char_lino') ? 20 : 10);
          const gain = baseGain * stats.efficiency;
          epState[step.charId].comboCount += 1;
          if (!epState[step.charId].epLock) {
            epState[step.charId].current += gain;
            if (!epState[step.charId].hasCastUlt) {
              epState[step.charId].epGainedBeforeFirstUlt += gain;
              epState[step.charId].baseEpGainedBeforeFirstUlt += baseGain;
            }
          }
        } else if (step.type === 'ult' || (step.skillData && step.skillData.type === 'ult')) {
          const s = step.skillData || {};
          let cost = s.epCost || 0;
          if (stats.ultCostReduction > 0) {
            cost = cost * (1 - stats.ultCostReduction / 100);
          }

          if (epState[step.charId].current < cost) {
            epState[step.charId].warnings.push(`発動時 EP不足 (必要: ${cost.toFixed(1)}, 現在: ${epState[step.charId].current.toFixed(1)})`);
          }
          epState[step.charId].current = 0;
          epState[step.charId].ultCount += 1;
          epState[step.charId].hasCastUlt = true;

          // オクギは必殺技1発動後に必殺技2を発動するまでEP獲得がロックされる
          if (step.charId === 'オクギ') {
            epState[step.charId].epLock = true;
          }
        } else if (step.type === 'ult2' || (step.skillData && step.skillData.type === 'ult2')) {
          // オクギの必殺技2発動でEPロックを解除する
          if (step.charId === 'オクギ') {
            epState[step.charId].epLock = false;
          }
        } else if (step.type === 'ult_cancel' || (step.skillData && step.skillData.type === 'ult_cancel')) {
          // 必殺キャンセル発動時、そのキャラの返還SP用連携技カウントを0に戻す
          comboCountsForRefund[step.charId] = 0;
        }

        // ダメージ集計
        if (step.skillData && (s.type === 'skill' || s.type === 'skill2' || s.type === 'skill3' || s.type === 'combo' || s.type === 'ult' || s.type === 'ult2')) {
          const p = party.find(x => x.id === step.charId || x.name === step.charName);
          if (p) {
            const dmgRes = getMemberSkillDamage(p, step.skillData, 'lv9');
            if (dmgRes && dmgRes[damageDisplayMode] !== undefined) {
              const val = dmgRes[damageDisplayMode];
              totalTimelineDamage += val;
              totalDamageCasts++;
              if (charDamageMap[p.name]) {
                charDamageMap[p.name].totalDamage += val;
              }
              if (val > maxSingleDamage) {
                maxSingleDamage = val;
                maxDamageSkillName = `${p.name} [${step.skillData.name || step.skillData.shortName || 'スキル'}]`;
              }
              detailedSkillList.push({
                charName: p.name,
                icon: p.icon,
                skillName: step.skillData.name || step.skillData.shortName || 'スキル',
                damageType: dmgRes.damageType,
                mult: dmgRes.mult,
                dmgRes: dmgRes
              });
            }
          }
        }
      }
    });

    // サイクルごとの消費SP・返還SP・回復SP表示を更新
    const cycleStatsDiv = document.getElementById(`cycle-stats-${cycleIndex}`);
    if (cycleStatsDiv) {
      cycleStatsDiv.querySelector('.sp-spent').textContent = cycleSpSpent;
      cycleStatsDiv.querySelector('.sp-refund').textContent = cycleRefundSp;
      const recSpan = cycleStatsDiv.querySelector('.sp-recover');
      if (recSpan) recSpan.textContent = cycleRecoverSp;
    }
  });

  // ===== タイムライン（動画編集型マルチトラック）同期 ＆ 動的ダメージシミュレーション =====
  if (timeTrackTimeline && !timeTrackTimeline.activeDrag && (!opts || !opts.fromTimeTrack)) {
    timeTrackTimeline.syncFromSequence(timelineCycles, party, cycleNames);
  }

  let simResult = null;
  try {
    if (typeof DamageCalculator !== 'undefined' && DamageCalculator.simulateTimelineRotation) {
      const masterDataForSim = Object.assign({}, equipmentMaster, { weapons: getWeaponData().weapons });
      const effectiveCycles = (timeTrackTimeline && typeof timeTrackTimeline.getEffectiveTimelineForDamage === 'function')
        ? timeTrackTimeline.getEffectiveTimelineForDamage(timelineCycles, party)
        : timelineCycles;
      simResult = DamageCalculator.simulateTimelineRotation(
        effectiveCycles,
        party,
        targetEnemy,
        masterDataForSim,
        cycleNames
      );
    }
  } catch (err) {
    console.error("ダメージ計算シミュレーション中にエラーが発生しました:", err);
  }

  let finalTimelineDamage = 0;
  let finalMaxSingleDamage = 0;
  let finalMaxDamageSkillName = '-';
  let finalDamageCasts = 0;
  let charSummaryList = [];

  if (simResult) {
    finalTimelineDamage = damageDisplayMode === 'crit'
      ? simResult.totalCrit
      : (damageDisplayMode === 'nonCrit' ? simResult.totalNonCrit : simResult.totalExpected);

    finalDamageCasts = simResult.stepResults.length;

    simResult.stepResults.forEach(st => {
      const stVal = damageDisplayMode === 'crit' ? st.critDamage : (damageDisplayMode === 'nonCrit' ? st.nonCritDamage : st.damage);
      if (stVal > finalMaxSingleDamage) {
        finalMaxSingleDamage = stVal;
        finalMaxDamageSkillName = `${st.charName} [${st.skillName}]`;
      }
    });

    charSummaryList = Object.values(simResult.charTotals).map(ct => {
      const cVal = damageDisplayMode === 'crit' ? ct.totalCrit : (damageDisplayMode === 'nonCrit' ? ct.totalNonCrit : ct.totalExpected);
      return {
        charName: ct.name,
        icon: ct.icon,
        totalDamage: cVal
      };
    });

    renderDamageDonutChart(charSummaryList, finalTimelineDamage);
    renderDamageDetailsTable(simResult.stepResults);
  } else {
    charSummaryList = Object.values(charDamageMap);
    renderDamageDonutChart(charSummaryList, totalTimelineDamage);
    renderDamageDetailsTable([]);
  }

  renderStatus(totalSpSpent, totalSpRefunded, totalSpRecovered, currentRefundSpPool, epState, totalSkillCasts, {
    totalTimelineDamage: finalTimelineDamage,
    maxSingleDamage: finalMaxSingleDamage,
    maxDamageSkillName: finalMaxDamageSkillName,
    totalDamageCasts: finalDamageCasts
  });
}

function renderStatus(totalSpSpent, totalSpRefunded, totalSpRecovered, currentRefundSpPool, epState, totalSkillCasts, dmgSummary) {
  const totalSpSpentEl = document.getElementById('total-sp-spent');
  if (totalSpSpentEl) totalSpSpentEl.textContent = totalSpSpent;

  const totalSpRefundedEl = document.getElementById('total-sp-refunded');
  if (totalSpRefundedEl) totalSpRefundedEl.textContent = totalSpRefunded;

  const totalSpRecoveredEl = document.getElementById('total-sp-recovered');
  if (totalSpRecoveredEl) totalSpRecoveredEl.textContent = totalSpRecovered;

  const netSpSpentEl = document.getElementById('net-sp-spent');
  if (netSpSpentEl) netSpSpentEl.textContent = Math.max(0, totalSpSpent - totalSpRefunded - totalSpRecovered);

  const currentRefundSpEl = document.getElementById('current-refund-sp');
  if (currentRefundSpEl) currentRefundSpEl.textContent = currentRefundSpPool;

  const totalSkillCastsEl = document.getElementById('total-skill-casts');
  if (totalSkillCastsEl) totalSkillCastsEl.textContent = totalSkillCasts.toFixed(2);

  if (dmgSummary && typeof DamageCalculator !== 'undefined') {
    const totalDmgEl = document.getElementById('total-timeline-damage');
    if (totalDmgEl) totalDmgEl.textContent = DamageCalculator.formatDamage(dmgSummary.totalTimelineDamage);

    const maxDmgEl = document.getElementById('max-single-damage');
    if (maxDmgEl) maxDmgEl.textContent = DamageCalculator.formatDamage(dmgSummary.maxSingleDamage);

    const maxDmgSkillEl = document.getElementById('max-damage-skill');
    if (maxDmgSkillEl) maxDmgSkillEl.textContent = dmgSummary.maxDamageSkillName;

    const totalCastsEl = document.getElementById('total-damage-casts');
    if (totalCastsEl) totalCastsEl.textContent = `${dmgSummary.totalDamageCasts} 回`;
  }

  const container = document.getElementById('ep-status-list');
  container.innerHTML = '';

  party.forEach(p => {
    const stats = getCharacterStats(p.id);
    const state = epState[p.id];

    // ゲージ最大値表示用の必殺技コストを計算
    const ultSkill = p.skills.find(s => s.type === 'ult');
    let maxEp = ultSkill ? ultSkill.epCost : 100;
    if (ultSkill && stats.ultCostReduction > 0) {
      maxEp = maxEp * (1 - stats.ultCostReduction / 100);
    }

    const percentage = Math.min(100, (state.current / maxEp) * 100);

    let warningHtml = '';
    if (state.warnings.length > 0) {
      warningHtml = `<div class="ep-warning">${state.warnings.join('<br>')}</div>`;
    }

    const row = document.createElement('div');
    row.className = 'ep-row';
    row.innerHTML = `
      <div class="ep-info">
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${p.icon}" class="char-icon" style="margin:0; width:30px; height:30px;">
          <span>${p.name}</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end;">
            <span style="color: #f39c12; font-size: 14px;">必殺発動回数: ${state.ultCount}回 / 連携技: ${state.comboCount}回</span>
            ${state.baseEpGainedBeforeFirstUlt > 0 ? `<span style="color: #a0a0a0; font-size: 12px;">最低必要チャージ効率: ${((state.firstUltCost / state.baseEpGainedBeforeFirstUlt) * 100).toFixed(1)}%</span>` : `<span style="color: #a0a0a0; font-size: 12px;">最低必要チャージ効率: 計算不可</span>`}
        </div>
      </div>
      <div class="ep-bar-container">
        <div class="ep-bar" style="width: ${percentage}%;"></div>
        <div class="ep-text">${state.current.toFixed(1)} / ${maxEp.toFixed(1)} (${percentage.toFixed(1)}%)</div>
      </div>
      ${warningHtml}
    `;
    container.appendChild(row);
  });
}
window.renderTimeline = renderTimeline;

let dropIndicator = null;
function getDropIndicator() {
  if (!dropIndicator) {
    dropIndicator = document.createElement('div');
    dropIndicator.className = 'timeline-drop-indicator';
  }
  return dropIndicator;
}

function showDropIndicator(container, x, y) {
  const indicator = getDropIndicator();
  const afterElement = getDragAfterElement(container, x, y);
  if (afterElement == null) {
    container.appendChild(indicator);
  } else {
    container.insertBefore(indicator, afterElement);
  }
}

function removeDropIndicator() {
  if (dropIndicator && dropIndicator.parentNode) {
    dropIndicator.parentNode.removeChild(dropIndicator);
  }
}

document.addEventListener('dragend', () => {
  removeDropIndicator();
});

function getDragAfterElement(container, x, y) {
  const draggableElements = [...container.querySelectorAll('.timeline-item:not(.dragging)')];
  if (draggableElements.length === 0) return null;

  // コンテナの並び方向（縦並び flex-direction: column または横並び）を判定
  const style = window.getComputedStyle(container);
  const isVertical = style.flexDirection === 'column';

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = isVertical
      ? (y - box.top - box.height / 2)
      : (x - box.left - box.width / 2);

    if (offset < 0 && offset > closest.offset) {
      return {
        offset: offset,
        element: child
      };
    } else {
      return closest;
    }
  }, {
    offset: Number.NEGATIVE_INFINITY
  }).element;
}



window.timelineCycles = timelineCycles;
