// characters.json の読み込み（fetch）がCORSやローカルファイル(file://)制限でブロックされた場合のフォールバックデータ
const DEFAULT_DATA = {
  "defaultParty": [
    "スー",
    "リーノ",
    "オクギ",
    "タンタン"
  ],
  "characters": [
    {
      "id": "ザイヒ",
      "name": "ザイヒ",
      "icon": "image/xaihi.png",
      "defaultEfficiency": 144.6,
      "defaultPotential": 4,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 10
        }
      ],
      "skills": [
        {
          "id": "skill_zaihi",
          "type": "skill",
          "name": "DDoS",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_zaihi",
          "type": "combo",
          "name": "ストレステスト",
          "shortName": "連携技"
        },
        {
          "id": "ult_zaihi",
          "type": "ult",
          "name": "スタックオーバーフロー",
          "shortName": "必殺技",
          "epCost": 80
        }
      ],
      "rarity": 5,
      "element": "寒冷",
      "class": "補助",
      "baseRecoverSP": 0,
      "weaponType": "アーツユニット",
      "motifWeapon": "布教の自由",
      "recommendedWeapons": [
        "布教の自由",
        "破壊ユニット"
      ]
    },
    {
      "id": "オクギ",
      "name": "オクギ",
      "icon": "image/okugi.png",
      "defaultEfficiency": 146.4,
      "defaultPotential": 1,
      "baseRefundSP": 30,
      "potentials": [
        {
          "level": 1,
          "type": "refund_sp_boost",
          "value": 10
        },
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_okugi",
          "type": "skill",
          "name": "砕玉領域",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_okugi",
          "type": "combo",
          "name": "応龍四式",
          "shortName": "連携技"
        },
        {
          "id": "ult_okugi",
          "type": "ult",
          "name": "破晦",
          "shortName": "必殺技",
          "epCost": 100
        },
        {
          "id": "ult2_okugi",
          "type": "ult2",
          "name": "破晦訣明",
          "shortName": "必殺技2",
          "epCost": 0
        }
      ],
      "rarity": 6,
      "element": "自然",
      "class": "術師",
      "baseRecoverSP": 0,
      "weaponType": "アーツユニット",
      "motifWeapon": "四二式・粛陣",
      "recommendedWeapons": [
        "四二式・粛陣",
        "苦難の果"
      ]
    },
    {
      "id": "ギルベルタ",
      "name": "ギルベルタ",
      "icon": "image/gilberta.png",
      "defaultEfficiency": 202.9,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 10
        }
      ],
      "skills": [
        {
          "id": "skill_gilberta",
          "type": "skill",
          "name": "秘杖・引力モード",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_gilberta",
          "type": "combo",
          "name": "秘杖・マトリックス転移",
          "shortName": "連携技"
        },
        {
          "id": "ult_gilberta",
          "type": "ult",
          "name": "秘杖・重力場",
          "shortName": "必殺技",
          "epCost": 90
        }
      ],
      "rarity": 6,
      "element": "自然",
      "class": "補助",
      "baseRecoverSP": 0,
      "weaponType": "アーツユニット",
      "motifWeapon": "使命必達",
      "recommendedWeapons": [
        "使命必達",
        "破壊ユニット"
      ]
    },
    {
      "id": "タンタン",
      "name": "タンタン",
      "icon": "image/tangtang.png",
      "defaultEfficiency": 100,
      "defaultPotential": 1,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 1,
          "type": "refund_sp_boost",
          "value": 5
        },
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_tangtang",
          "type": "skill",
          "name": "波が来るぜ！",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_tangtang",
          "type": "combo",
          "name": "川よ、俺様に従え！",
          "shortName": "連携技"
        },
        {
          "id": "ult_tangtang",
          "type": "ult",
          "name": "大親分が見てっぞ！",
          "shortName": "必殺技",
          "epCost": 90
        },
        {
          "id": "ult_cancel_tangtang",
          "type": "ult_cancel",
          "name": "大親分が見てっぞ！(キャンセル)",
          "shortName": "必殺キャンセル",
          "spCost": 0
        }
      ],
      "rarity": 6,
      "element": "寒冷",
      "class": "術師",
      "baseRecoverSP": 0,
      "weaponType": "拳銃",
      "motifWeapon": "落草",
      "recommendedWeapons": [
        "落草",
        "望郷"
      ]
    },
    {
      "id": "char_su",
      "name": "スー",
      "icon": "image/su.png",
      "defaultEfficiency": 133.4,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 10
        }
      ],
      "skills": [
        {
          "id": "skill1_su",
          "type": "skill",
          "name": "山河を映して",
          "shortName": "戦技1",
          "spCost": 100
        },
        {
          "id": "skill2_su",
          "type": "skill2",
          "name": "墨継",
          "shortName": "戦技2",
          "spCost": 15
        },
        {
          "id": "combo_su",
          "type": "combo",
          "name": "胸中に成竹在り",
          "shortName": "連携技"
        },
        {
          "id": "ult_su",
          "type": "ult",
          "name": "白けさせるでない！",
          "shortName": "必殺技",
          "epCost": 80
        }
      ],
      "rarity": 6,
      "element": "寒冷",
      "class": "補助",
      "baseRecoverSP": 0,
      "weaponType": "大剣",
      "motifWeapon": "玉中身",
      "recommendedWeapons": [
        "玉中身",
        "破砕君主"
      ]
    },
    {
      "id": "char_lino",
      "name": "リーノ",
      "icon": "image/lino.png",
      "defaultEfficiency": 142.7,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_lino",
          "type": "skill",
          "name": "キラキラフォーカス",
          "shortName": "戦技",
          "spCost": 25
        },
        {
          "id": "combo_lino",
          "type": "combo",
          "name": "ときめきメロディー",
          "shortName": "連携技",
          "epGain": 20
        },
        {
          "id": "ult_lino",
          "type": "ult",
          "name": "綺羅星コンチェルト",
          "shortName": "必殺技",
          "epCost": 160
        }
      ],
      "rarity": 6,
      "element": "電磁",
      "class": "補助",
      "baseRecoverSP": 0,
      "weaponType": "長柄武器",
      "motifWeapon": "プリズムナイトデビュー",
      "recommendedWeapons": [
        "プリズムナイトデビュー",
        "黄金時代"
      ]
    },
    {
      "id": "char_admin",
      "name": "管理人",
      "icon": "image/admin.png",
      "defaultEfficiency": 100,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 1,
          "type": "refund_sp_boost",
          "value": 50
        }
      ],
      "skills": [
        {
          "id": "skill_admin",
          "type": "skill",
          "name": "構成配列",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_admin",
          "type": "combo",
          "name": "封印配列",
          "shortName": "連携技"
        },
        {
          "id": "ult_admin",
          "type": "ult",
          "name": "攻撃配列",
          "epCost": 80,
          "shortName": "必殺技"
        }
      ],
      "rarity": 6,
      "element": "物理",
      "class": "前衛",
      "baseRecoverSP": 0,
      "weaponType": "片手剣",
      "motifWeapon": "大願",
      "recommendedWeapons": [
        "大願",
        "輝かしき名声"
      ]
    },
    {
      "id": "char_laevatain",
      "name": "レーヴァテイン",
      "icon": "image/laevatain.png",
      "defaultEfficiency": 100,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 1,
          "type": "refund_sp_boost",
          "value": 20
        },
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_laevatain",
          "type": "skill",
          "name": "焼滅",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_laevatain",
          "type": "combo",
          "name": "烈火",
          "epGain": 25,
          "shortName": "連携技"
        },
        {
          "id": "ult_laevatain",
          "type": "ult",
          "name": "ラグナロク",
          "epCost": 300,
          "shortName": "必殺技"
        }
      ],
      "rarity": 6,
      "element": "灼熱",
      "class": "突撃",
      "baseRecoverSP": 0,
      "weaponType": "片手剣",
      "motifWeapon": "フレイムフォージ",
      "recommendedWeapons": [
        "フレイムフォージ",
        "ダークトーチ"
      ]
    },
    {
      "id": "char_ember",
      "name": "エンバー",
      "icon": "image/ember.png",
      "defaultEfficiency": 100,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_ember",
          "type": "skill",
          "name": "出征",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_ember",
          "type": "combo",
          "name": "前線支援",
          "shortName": "連携技"
        },
        {
          "id": "ult_ember",
          "type": "ult",
          "name": "誓約の炎",
          "epCost": 100,
          "shortName": "必殺技"
        }
      ],
      "rarity": 6,
      "element": "灼熱",
      "class": "重装",
      "baseRecoverSP": 0,
      "weaponType": "大剣",
      "motifWeapon": "大雷斑",
      "recommendedWeapons": [
        "大雷斑",
        "破砕君主"
      ]
    },
    {
      "id": "char_camille",
      "name": "カミーユ",
      "icon": "image/camille.png",
      "defaultEfficiency": 100,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "baseRecoverSP": 20,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_camille",
          "type": "skill",
          "name": "影祓う",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_camille",
          "type": "combo",
          "name": "心抉る棘",
          "shortName": "連携技"
        },
        {
          "id": "ult_camille",
          "type": "ult",
          "name": "降り注ぐ深紅",
          "shortName": "必殺技",
          "epCost": 80
        }
      ],
      "rarity": 6,
      "element": "灼熱",
      "class": "先鋒",
      "weaponType": "長柄武器",
      "motifWeapon": "カーマインヴェール",
      "recommendedWeapons": [
        "カーマインヴェール",
        "負山"
      ]
    },
    {
      "id": "char_ardelia",
      "name": "アルデリア",
      "icon": "image/ardelia.png",
      "defaultEfficiency": 100,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_ardelia",
          "type": "skill",
          "name": "ドリーラッシュ",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_ardelia",
          "type": "combo",
          "name": "イラプション・コラム",
          "shortName": "連携技"
        },
        {
          "id": "ult_ardelia",
          "type": "ult",
          "name": "もふもふパーティー",
          "epCost": 90,
          "shortName": "必殺技"
        }
      ],
      "rarity": 6,
      "element": "自然",
      "class": "補助",
      "baseRecoverSP": 0,
      "weaponType": "アーツユニット",
      "motifWeapon": "蒼星の囁き",
      "recommendedWeapons": [
        "蒼星の囁き",
        "遺忘"
      ]
    },
    {
      "id": "char_perlica",
      "name": "ペリカ",
      "icon": "image/perlica.png",
      "defaultEfficiency": 100,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 2,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_perlica",
          "type": "skill",
          "name": "協約ω：雷撃",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_perlica",
          "type": "combo",
          "name": "即時協約：閃光鎖",
          "shortName": "連携技"
        },
        {
          "id": "ult_perlica",
          "type": "ult",
          "name": "協約ε：70.41κ",
          "epCost": 80,
          "shortName": "必殺技"
        }
      ],
      "rarity": 5,
      "element": "電磁",
      "class": "術師",
      "baseRecoverSP": 0,
      "weaponType": "アーツユニット",
      "motifWeapon": "荒野迷走",
      "recommendedWeapons": [
        "弔いの詩",
        "破壊ユニット"
      ]
    },
    {
      "id": "char_wulfgard",
      "name": "ウルフガード",
      "icon": "image/wulfgard.png",
      "defaultEfficiency": 100,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 2,
          "type": "refund_sp_boost",
          "value": 10
        },
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_wulfgard",
          "type": "skill",
          "name": "灼熱の弾痕",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_wulfgard",
          "type": "combo",
          "name": "フラググレネード・β",
          "shortName": "連携技"
        },
        {
          "id": "ult_wulfgard",
          "type": "ult",
          "name": "狼の怒り",
          "epCost": 90,
          "shortName": "必殺技"
        }
      ],
      "rarity": 5,
      "element": "灼熱",
      "class": "術師",
      "baseRecoverSP": 0,
      "weaponType": "拳銃",
      "motifWeapon": "合理的決別",
      "recommendedWeapons": [
        "合理的決別",
        "望郷"
      ]
    },
    {
      "id": "char_rossi",
      "name": "ロッシ",
      "icon": "image/rossi.png",
      "defaultEfficiency": 100,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 1,
          "type": "refund_sp_boost",
          "value": 10
        }
      ],
      "skills": [
        {
          "id": "skill_rossi",
          "type": "skill",
          "name": "真紅の影",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_rossi",
          "type": "combo",
          "name": "刹那の影",
          "shortName": "連携技"
        },
        {
          "id": "ult_rossi",
          "type": "ult",
          "name": "“鋭爪”奇襲",
          "epCost": 110,
          "shortName": "必殺技"
        }
      ],
      "rarity": 6,
      "element": "物理",
      "class": "前衛",
      "baseRecoverSP": 0,
      "weaponType": "片手剣",
      "motifWeapon": "狼緋",
      "recommendedWeapons": [
        "狼緋",
        "テルミット・カッター"
      ]
    },
    {
      "id": "char_lastrite",
      "name": "ラストライト",
      "icon": "image/lastrite.png",
      "defaultEfficiency": 100,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_lastrite",
          "type": "skill",
          "name": "セシュカの秘伝",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_lastrite",
          "type": "combo",
          "name": "冬喰",
          "shortName": "連携技"
        },
        {
          "id": "ult_lastrite",
          "type": "ult",
          "name": "終の別れ",
          "epCost": 240,
          "shortName": "必殺技"
        }
      ],
      "rarity": 6,
      "element": "寒冷",
      "class": "突撃",
      "baseRecoverSP": 0,
      "weaponType": "大剣",
      "motifWeapon": "クラヴェンガー",
      "recommendedWeapons": [
        "クラヴェンガー",
        "破砕君主"
      ]
    },
    {
      "id": "char_chen",
      "name": "チェン・センユー",
      "icon": "image/chen.png",
      "defaultEfficiency": 100,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_chen",
          "type": "skill",
          "name": "蒼穹返し",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_chen",
          "type": "combo",
          "name": "天河昇",
          "shortName": "連携技"
        },
        {
          "id": "ult_chen",
          "type": "ult",
          "name": "凍風斬り",
          "epCost": 70,
          "shortName": "必殺技"
        }
      ],
      "rarity": 5,
      "element": "物理",
      "class": "前衛",
      "baseRecoverSP": 0,
      "weaponType": "片手剣",
      "motifWeapon": "仰止",
      "recommendedWeapons": [
        "仰止",
        "フーヤオ"
      ]
    },
    {
      "id": "char_mifu",
      "name": "ミ・フ",
      "icon": "image/mifu.png",
      "defaultEfficiency": 100,
      "defaultPotential": 0,
      "baseRefundSP": 50,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill1_mifu",
          "type": "skill",
          "name": "断雲",
          "spCost": 100,
          "refundSp": 50,
          "shortName": "戦技1"
        },
        {
          "id": "skill2_mifu",
          "type": "skill2",
          "name": "追形",
          "spCost": 50,
          "shortName": "戦技2"
        },
        {
          "id": "skill3_mifu",
          "type": "skill3",
          "name": "開天",
          "spCost": 50,
          "shortName": "戦技3"
        },
        {
          "id": "combo_mifu",
          "type": "combo",
          "name": "拳に悔い無し",
          "shortName": "連携技"
        },
        {
          "id": "ult_mifu",
          "type": "ult",
          "name": "心絶やす",
          "epCost": 80,
          "shortName": "必殺技"
        }
      ],
      "rarity": 6,
      "element": "物理",
      "class": "前衛",
      "baseRecoverSP": 0,
      "weaponType": "大剣",
      "motifWeapon": "赤纓",
      "recommendedWeapons": [
        "赤纓",
        "鑑"
      ]
    },
    {
      "id": "char_lifeng",
      "name": "リーフォン",
      "icon": "image/lifeng.png",
      "rarity": 6,
      "element": "物理",
      "class": "前衛",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_lifeng",
          "type": "skill",
          "name": "千裂脚",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_lifeng",
          "type": "combo",
          "name": "憤怒形",
          "shortName": "連携技"
        },
        {
          "id": "ult_lifeng",
          "type": "ult",
          "name": "龍怒",
          "epCost": 90,
          "shortName": "必殺技"
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "長柄武器",
      "motifWeapon": "負山",
      "recommendedWeapons": [
        "負山",
        "勇猛"
      ]
    },
    {
      "id": "char_pogranichnik",
      "name": "ポグラニチニク",
      "icon": "image/pogranichnik.png",
      "rarity": 6,
      "element": "物理",
      "class": "先鋒",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "baseRecoverSP": 15,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_pogranichnik",
          "type": "skill",
          "name": "戦線粉砕",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_pogranichnik",
          "type": "combo",
          "name": "満月迎撃",
          "shortName": "連携技"
        },
        {
          "id": "ult_pogranichnik",
          "type": "ult",
          "name": "盾兵旗隊、進め",
          "shortName": "必殺技",
          "epCost": 90
        }
      ],
      "weaponType": "片手剣",
      "motifWeapon": "不知帰",
      "recommendedWeapons": [
        "不知帰",
        "テルミット・カッター"
      ]
    },
    {
      "id": "char_minho",
      "name": "ミンホ",
      "icon": "image/minho.png",
      "rarity": 6,
      "element": "電磁",
      "class": "前衛",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_minho",
          "type": "skill",
          "name": "電光一閃",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_minho",
          "type": "combo",
          "name": "銀流連斬",
          "shortName": "連携技"
        },
        {
          "id": "ult_minho",
          "type": "ult",
          "name": "破天",
          "epCost": 100,
          "shortName": "必殺技"
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "片手剣",
      "motifWeapon": "問月",
      "recommendedWeapons": [
        "問月",
        "複合工業"
      ]
    },
    {
      "id": "char_zhuang",
      "name": "ゾアン・ファンイ",
      "icon": "image/zhuang.png",
      "rarity": 6,
      "element": "電磁",
      "class": "突撃",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_zhuang",
          "type": "skill",
          "name": "雷霆陣",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_zhuang",
          "type": "combo",
          "name": "轟雷連環",
          "shortName": "連携技"
        },
        {
          "id": "ult_zhuang",
          "type": "ult",
          "name": "万雷帰一",
          "epCost": 90,
          "shortName": "必殺技"
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "アーツユニット",
      "motifWeapon": "孤舟",
      "recommendedWeapons": [
        "孤舟",
        "破壊ユニット"
      ]
    },
    {
      "id": "char_yvonne",
      "name": "イヴォンヌ",
      "icon": "image/yvonne.png",
      "rarity": 6,
      "element": "寒冷",
      "class": "突撃",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_yvonne",
          "type": "skill",
          "name": "霜雪の矢",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_yvonne",
          "type": "combo",
          "name": "氷針射出",
          "shortName": "連携技"
        },
        {
          "id": "ult_yvonne",
          "type": "ult",
          "name": "アイスシューター",
          "epCost": 80,
          "shortName": "必殺技"
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "拳銃",
      "motifWeapon": "芸術の独裁者",
      "recommendedWeapons": [
        "芸術の独裁者",
        "楔"
      ]
    },
    {
      "id": "char_typhoeus",
      "name": "ティフォロス",
      "icon": "image/typhoeus.png",
      "rarity": 6,
      "element": "自然",
      "class": "突撃",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_typhoeus",
          "type": "skill",
          "name": "大地の咆哮",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_typhoeus",
          "type": "combo",
          "name": "地裂震",
          "shortName": "連携技"
        },
        {
          "id": "ult_typhoeus",
          "type": "ult",
          "name": "氷山の呼び声",
          "epCost": 200,
          "shortName": "必殺技"
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "アーツユニット",
      "motifWeapon": "寒夜の影",
      "recommendedWeapons": [
        "寒夜の影",
        "破壊ユニット"
      ]
    },
    {
      "id": "char_purrchena",
      "name": "プチエナ",
      "icon": "image/purrchena.png",
      "rarity": 5,
      "element": "物理",
      "class": "重装",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_purrchena",
          "type": "skill",
          "name": "鉄壁ガード",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_purrchena",
          "type": "combo",
          "name": "重盾強襲",
          "shortName": "連携技"
        },
        {
          "id": "ult_purrchena",
          "type": "ult",
          "name": "守護の誓い",
          "epCost": 100,
          "shortName": "必殺技"
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "片手剣",
      "motifWeapon": "スイーツタイム",
      "recommendedWeapons": [
        "スイーツタイム",
        "ファーサイト"
      ]
    },
    {
      "id": "char_dapan",
      "name": "ダパン",
      "icon": "image/dapan.png",
      "rarity": 5,
      "element": "物理",
      "class": "突撃",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_dapan",
          "type": "skill",
          "name": "包丁捌き",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_dapan",
          "type": "combo",
          "name": "熱湯風呂",
          "shortName": "連携技"
        },
        {
          "id": "ult_dapan",
          "type": "ult",
          "name": "具材投入！",
          "epCost": 90,
          "shortName": "必殺技"
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "大剣",
      "motifWeapon": "千古恒常",
      "recommendedWeapons": [
        "千古恒常",
        "破砕君主"
      ]
    },
    {
      "id": "char_arclight",
      "name": "アークライト",
      "icon": "image/arclight.png",
      "rarity": 5,
      "element": "電磁",
      "class": "先鋒",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "baseRecoverSP": 40,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_arclight",
          "type": "skill",
          "name": "電光突進",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_arclight",
          "type": "combo",
          "name": "放電ステップ",
          "shortName": "連携技"
        },
        {
          "id": "ult_arclight",
          "type": "ult",
          "name": "アークチャージ",
          "shortName": "必殺技",
          "epCost": 90
        }
      ],
      "weaponType": "片手剣",
      "motifWeapon": "十二問",
      "recommendedWeapons": [
        "テルミット・カッター",
        "十二問"
      ]
    },
    {
      "id": "char_avywenna",
      "name": "アイビーエナ",
      "icon": "image/avywenna.png",
      "rarity": 5,
      "element": "電磁",
      "class": "突撃",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_avywenna",
          "type": "skill",
          "name": "雷槍一擲",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_avywenna",
          "type": "combo",
          "name": "雷槍・閃撃",
          "shortName": "連携技"
        },
        {
          "id": "ult_avywenna",
          "type": "ult",
          "name": "電磁雷光槍",
          "epCost": 80,
          "shortName": "必殺技"
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "長柄武器",
      "motifWeapon": "求心の槍",
      "recommendedWeapons": [
        "求心の槍",
        "J.E.T."
      ]
    },
    {
      "id": "char_alesh",
      "name": "アレッシュ",
      "icon": "image/alesh.png",
      "rarity": 5,
      "element": "寒冷",
      "class": "先鋒",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "baseRecoverSP": 15,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_alesh",
          "type": "skill",
          "name": "氷上キャスト",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_alesh",
          "type": "combo",
          "name": "穴釣り戦術",
          "shortName": "連携技"
        },
        {
          "id": "ult_alesh",
          "type": "ult",
          "name": "大物、ヒット！",
          "shortName": "必殺技",
          "epCost": 100
        }
      ],
      "weaponType": "片手剣",
      "motifWeapon": "フィンチェイサー3.0",
      "recommendedWeapons": [
        "フィンチェイサー3.0",
        "テルミット・カッター"
      ]
    },
    {
      "id": "char_snowshine",
      "name": "スノーシャイン",
      "icon": "image/snowshine.png",
      "rarity": 5,
      "element": "寒冷",
      "class": "重装",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 15
        }
      ],
      "skills": [
        {
          "id": "skill_snowshine",
          "type": "skill",
          "name": "フロストシールド",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_snowshine",
          "type": "combo",
          "name": "極地救援",
          "shortName": "連携技"
        },
        {
          "id": "ult_snowshine",
          "type": "ult",
          "name": "凍てつく寒霜",
          "epCost": 90,
          "shortName": "必殺技"
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "大剣",
      "motifWeapon": "最期の声",
      "recommendedWeapons": [
        "最期の声",
        "悠久の継承"
      ]
    },
    {
      "id": "char_catcher",
      "name": "キャッチャー",
      "icon": "image/catcher.png",
      "rarity": 4,
      "element": "物理",
      "class": "重装",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 5,
          "type": "refund_sp_boost",
          "value": 10
        }
      ],
      "skills": [
        {
          "id": "skill_catcher",
          "type": "skill",
          "name": "タックル",
          "spCost": 100,
          "shortName": "戦技"
        },
        {
          "id": "combo_catcher",
          "type": "combo",
          "name": "キャッチ＆ホールド",
          "shortName": "連携技"
        },
        {
          "id": "ult_catcher",
          "type": "ult",
          "name": "フルスイング",
          "epCost": 80,
          "shortName": "必殺技"
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "大剣",
      "motifWeapon": "O.B.J.重責",
      "recommendedWeapons": [
        "O.B.J.重責",
        "破砕君主"
      ]
    },
    {
      "id": "char_akekuri",
      "name": "アケクリ",
      "icon": "image/akekuri.png",
      "rarity": 4,
      "element": "灼熱",
      "class": "先鋒",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "baseRecoverSP": 15,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 10
        }
      ],
      "skills": [
        {
          "id": "skill_akekuri",
          "type": "skill",
          "name": "火炎斬り",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_akekuri",
          "type": "combo",
          "name": "突撃一閃",
          "shortName": "連携技"
        },
        {
          "id": "ult_akekuri",
          "type": "ult",
          "name": "烈火の刃",
          "shortName": "必殺技",
          "epCost": 120
        }
      ],
      "weaponType": "片手剣",
      "motifWeapon": "O.B.J.軽刃",
      "recommendedWeapons": [
        "O.B.J.軽刃",
        "テルミット・カッター"
      ]
    },
    {
      "id": "char_antal",
      "name": "アンタル",
      "icon": "image/antal.png",
      "rarity": 4,
      "element": "電磁",
      "class": "補助",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 10
        }
      ],
      "skills": [
        {
          "id": "skill_antal",
          "type": "skill",
          "name": "磁気トラップ",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_antal",
          "type": "combo",
          "name": "磁気嵐実験場",
          "shortName": "連携技"
        },
        {
          "id": "ult_antal",
          "type": "ult",
          "name": "リミッター、解除",
          "shortName": "必殺技",
          "epCost": 100
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "アーツユニット",
      "motifWeapon": "O.B.J.術識",
      "recommendedWeapons": [
        "O.B.J.術識",
        "破壊ユニット"
      ]
    },
    {
      "id": "char_estella",
      "name": "エステーラ",
      "icon": "image/estella.png",
      "rarity": 4,
      "element": "寒冷",
      "class": "前衛",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 2,
          "type": "ult_cost_reduction_percent",
          "value": 10
        }
      ],
      "skills": [
        {
          "id": "skill_estella",
          "type": "skill",
          "name": "氷刃連撃",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_estella",
          "type": "combo",
          "name": "ディストーション",
          "shortName": "連携技"
        },
        {
          "id": "ult_estella",
          "type": "ult",
          "name": "トレモロ",
          "shortName": "必殺技",
          "epCost": 70
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "長柄武器",
      "motifWeapon": "O.B.J.鋭矛",
      "recommendedWeapons": [
        "O.B.J.鋭矛",
        "灯火の使命"
      ]
    },
    {
      "id": "char_fluorite",
      "name": "フローライト",
      "icon": "image/fluorite.png",
      "rarity": 4,
      "element": "自然",
      "class": "術師",
      "defaultEfficiency": 100.0,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 10
        }
      ],
      "skills": [
        {
          "id": "skill_fluorite",
          "type": "skill",
          "name": "自然の調和",
          "shortName": "戦技",
          "spCost": 100
        },
        {
          "id": "combo_fluorite",
          "type": "combo",
          "name": "特別サービス",
          "shortName": "連携技"
        },
        {
          "id": "ult_fluorite",
          "type": "ult",
          "name": "つまらない茶番",
          "shortName": "必殺技",
          "epCost": 100
        }
      ],
      "baseRecoverSP": 0,
      "weaponType": "拳銃",
      "motifWeapon": "O.B.J.迅速",
      "recommendedWeapons": [
        "O.B.J.迅速",
        "ナビゲーター"
      ]
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

function calculateArmorBonus(equipment) {
  if (!equipment || !equipmentMaster) return 0;
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
      p.baseStats = fresh.baseStats;
      p.mainStat = fresh.mainStat;
      p.subStat = fresh.subStat;
      p.specialMechanic = fresh.specialMechanic;
    }
    if (!p.equipment) {
      p.equipment = { armorSet: 'none', body: 'none', arm: 'none', acc1: 'none', acc2: 'none' };
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
  // defaultEfficiency が100%を超えて個別設定されているキャラは、その値を初期武器込みの合計値とみなす
  const baseEfficiency = defaultEfficiency > 100
    ? Math.max(0, Math.round((defaultEfficiency - weaponBonus) * 10) / 10)
    : defaultEfficiency;

  party.push({
    ...charData,
    efficiency: Math.round((baseEfficiency + weaponBonus) * 10) / 10,
    baseEfficiency: baseEfficiency,
    potential: defaultPotential,
    weapon: weapon,
    equipment: {
      armorSet: 'none',
      body: 'none',
      arm: 'none',
      acc1: 'none',
      acc2: 'none'
    },
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
    hp: 'HP',
    atk: '攻撃力',
    def: '防御力',
    atkPercent: '攻撃力',
    hpPercent: 'HP',
    defPercent: '防御力',
    strength: '筋力',
    agility: '敏捷',
    intellect: '知性',
    will: '意志',
    critRate: '会心率',
    critDmg: '会心ダメ',
    artsIntensity: 'アーツ強度',
    physicalDamageUp: '物理ダメ',
    heatDamageUp: '灼熱ダメ',
    electricDamageUp: '電磁ダメ',
    cryoDamageUp: '寒冷ダメ',
    natureDamageUp: '自然ダメ',
    skillDamageUp: '戦技ダメ',
    comboDamageUp: '連携ダメ',
    ultDamageUp: '必殺ダメ',
    allDamageUp: '全ダメ'
  };
  const label = map[statObj.stat] || statObj.stat;
  const val = statObj.value;
  if (typeof val === 'number' && val > 0 && val < 1) {
    return `${label}+${Math.round(val * 1000) / 10}%`;
  }
  return `${label}+${val}`;
}

function getArmorItemSummaryText(item) {
  if (!item || item.id === 'none') return '未装着（クリックして防具を選択）';
  const d = item.detail;
  const parts = [];
  if (d) {
    if (d.mainStat) {
      const m = formatArmorStatLabel(d.mainStat);
      if (m) parts.push(m);
    }
    if (Array.isArray(d.subStats)) {
      d.subStats.forEach(s => {
        const st = formatArmorStatLabel(s);
        if (st) parts.push(st);
      });
    }
    if (d.ultEfficiency && d.ultEfficiency > 0) {
      parts.push(`必殺効率+${d.ultEfficiency}%`);
    }
  } else if (item.efficiency > 0) {
    parts.push(`必殺効率+${item.efficiency}%`);
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
      : (curSetItem && curSetItem.id !== 'none' ? `必殺技効率 +${curSetItem.efficiency || 0}%` : '防具3部位セット効果を選択できます（クリックで一覧表示）');

    const makeRichSlotCard = (slotKey, slotLabel, itemObj, iconUrl, placeholder, descText, badgeText) => {
      const hasItem = itemObj && itemObj.id !== 'none';
      const displayName = hasItem
        ? ((itemObj.detail && itemObj.detail.name) ? itemObj.detail.name : itemObj.name.replace(/\s*\(\+?\d+(\.\d+)?%\)/, ''))
        : 'なし (未装着)';
      const effVal = itemObj && itemObj.efficiency ? itemObj.efficiency : (itemObj && itemObj.detail && itemObj.detail.ultEfficiency ? itemObj.detail.ultEfficiency : 0);
      return `
        <button type="button" class="rich-equip-slot-btn ${hasItem ? 'is-equipped' : 'is-empty'}" onclick="openEquipPickerModal(${index}, '${slotKey}')">
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
          <span class="rich-slot-change-arrow" title="クリックして変更">変更 ▸</span>
        </button>
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
            const desc = rankData ? rankData[0] : '';
            const isEstimated = rankData && rankData[1] === 1;

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
              ${makeRichSlotCard(
                'armorSet',
                '🛡️ 3部位セット効果',
                curSetItem,
                curSetIcon,
                '🛡️',
                curSetEffectDesc,
                curSetItem && curSetItem.id !== 'none' ? '3部位発動' : ''
              )}
            </div>
            <div class="rich-armor-parts-grid">
              ${makeRichSlotCard(
                'body',
                '🦺 胴防具',
                curBodyItem,
                curBodyItem ? curBodyItem.icon : null,
                '🦺',
                getArmorItemSummaryText(curBodyItem),
                curBodyItem && curBodyItem.detail ? getArmorSetNameById(curBodyItem.detail.setId) : ''
              )}
              ${makeRichSlotCard(
                'arm',
                '🧤 腕防具',
                curArmItem,
                curArmItem ? curArmItem.icon : null,
                '🧤',
                getArmorItemSummaryText(curArmItem),
                curArmItem && curArmItem.detail ? getArmorSetNameById(curArmItem.detail.setId) : ''
              )}
              ${makeRichSlotCard(
                'acc1',
                '💍 アクセサリー1',
                curAcc1Item,
                curAcc1Item ? curAcc1Item.icon : null,
                '💍',
                getArmorItemSummaryText(curAcc1Item),
                curAcc1Item && curAcc1Item.detail ? getArmorSetNameById(curAcc1Item.detail.setId) : ''
              )}
              ${makeRichSlotCard(
                'acc2',
                '💍 アクセサリー2',
                curAcc2Item,
                curAcc2Item ? curAcc2Item.icon : null,
                '💍',
                getArmorItemSummaryText(curAcc2Item),
                curAcc2Item && curAcc2Item.detail ? getArmorSetNameById(curAcc2Item.detail.setId) : ''
              )}
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
        const r = sk.ranks && sk.ranks[defRankIdx] ? sk.ranks[defRankIdx][0] : '';
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
    const filtered = sets.filter(s => {
      if (tagFilter === 'eff' && !(s.efficiency > 0)) return false;
      if (tagFilter === 'dmg' && s.id === 'none') return false;
      if (q) {
        const desc = (s.detail && s.detail.effects && s.detail.effects.threePiece) ? s.detail.effects.threePiece.description : '';
        if (!s.name.toLowerCase().includes(q) && !desc.toLowerCase().includes(q)) return false;
      }
      return true;
    });

    grid.innerHTML = filtered.map(s => {
      const isSelected = s.id === curSetId;
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

  const filtered = items.filter(item => {
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

  grid.innerHTML = filtered.map(item => {
    const isSelected = (item.id === curId || item.id === normalizeEquipId('', curId));
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
    copy_slot1: '🎨 1枠目属性模倣付着 (+1段階)',
    okugi_dual: '☯️ 知意双形態付着 (+1段階)',
    none: '付着なし'
  };

  const crushLabelMap = {
    inflict: '💥 クラッシュ付与 (0段→1段 / 1段以上→+1段、最大4段)',
    consume_smash: '💥 猛撃・クラッシュ消費 (0段時→1段付与 / 1段以上時→全段階消費して追加効果)',
    consume_shatter: '💥 破砕・クラッシュ消費 (0段時→1段付与 / 1段以上時→全段階消費して極大効果)',
    none: 'なし'
  };

  let specialHtml = '';
  if (c.specialMechanic && c.specialMechanic.description) {
    specialHtml = `
      <div class="wiki-special-callout">
        <div class="wiki-special-title">✨ 固有メカニクス・特殊仕様</div>
        <div class="wiki-special-desc">${c.specialMechanic.description}</div>
      </div>
    `;
  } else if (c.id === 'char_chen') {
    specialHtml = `
      <div class="wiki-special-callout">
        <div class="wiki-special-title">✨ チェン・センユー 固有クラッシュ仕様</div>
        <div class="wiki-special-desc">チェンが扱う物理状態異常は<strong>「浮遊（クラッシュ付与タイプ +1段階）」のみ</strong>です。「猛撃」や「破砕」などのクラッシュ消費は行いません。</div>
      </div>
    `;
  }

  const potentialsHtml = (c.potentials && c.potentials.length > 0)
    ? c.potentials.map(pt => `<span class="wiki-pot-badge">${pt.level}凸: ${pt.type === 'ult_cost_reduction_percent' ? `必殺技消費EP -${pt.value}%` : `返還SP +${pt.value}`}</span>`).join('')
    : '<span style="color:#888; font-size:12px;">特記凸効果なし</span>';

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

    return `
      <div class="wiki-skill-card">
        <div class="wiki-skill-header">
          <div>
            <span class="wiki-skill-type-badge type-${sk.type}">${sk.shortName || sk.type}</span>
            <strong class="wiki-skill-name">${sk.name}</strong>
            <span class="char-tag tag-elem-${sk.damageType || c.element || '物理'}">${sk.damageType || c.element || '物理'}</span>
          </div>
          <div class="wiki-skill-costs">${costBadges.join('')}</div>
        </div>

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
              <td>${fmtM(mults.rank1)}</td>
              <td>${fmtM(mults.rank2)}</td>
              <td class="wiki-mult-max">${fmtM(mults.rank3)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }).join('');

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
        </div>
      </div>
      <button type="button" class="wiki-add-party-btn" onclick="addToParty(allCharacters.find(x=>x.id==='${c.id}')); switchPage('rotation');">+ パーティーに編成してスキル回しへ</button>
    </div>

    ${specialHtml}

    <div class="wiki-stats-section">
      <h4>📊 基礎ステータス (Lv.90) ＆ 能力値補正</h4>
      <div class="wiki-stats-grid">
        <div class="wiki-stat-cell"><span class="k">基礎攻撃力</span><span class="v">${bs.atk}</span></div>
        <div class="wiki-stat-cell"><span class="k">基礎HP</span><span class="v">${bs.hp}</span></div>
        <div class="wiki-stat-cell"><span class="k">基礎防御力</span><span class="v">${bs.def}</span></div>
        <div class="wiki-stat-cell"><span class="k">筋力 (STR)</span><span class="v">${bs.strength}</span></div>
        <div class="wiki-stat-cell"><span class="k">敏捷 (AGI)</span><span class="v">${bs.agility}</span></div>
        <div class="wiki-stat-cell"><span class="k">知性 (INT)</span><span class="v">${bs.intellect}</span></div>
        <div class="wiki-stat-cell"><span class="k">意志 (WIL)</span><span class="v">${bs.will}</span></div>
        <div class="wiki-stat-cell"><span class="k">メイン能力 (×0.5%)</span><span class="v highlight">${statNameMap[c.mainStat] || c.mainStat}</span></div>
        <div class="wiki-stat-cell"><span class="k">サブ能力 (×0.2%)</span><span class="v">${statNameMap[c.subStat] || c.subStat}</span></div>
      </div>
      <div class="wiki-potentials-row">
        <strong>潜在能力(凸効果) / SP特性:</strong>
        ${potentialsHtml}
        ${c.baseRefundSP > 0 ? `<span class="wiki-pot-badge">戦技返還SP: +${c.baseRefundSP}</span>` : ''}
        ${c.baseRecoverSP > 0 ? `<span class="wiki-pot-badge">戦技回復SP: +${c.baseRecoverSP}</span>` : ''}
      </div>
    </div>

    <div class="wiki-skills-section">
      <h4>⚔️ スキル仕様・倍率・付着/クラッシュ一覧</h4>
      <div class="wiki-skills-list">
        ${skillsHtml}
      </div>
    </div>
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
