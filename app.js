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

async function initApp() {
  await Promise.all([fetchCharacters(), fetchEquipment()]);
  loadFromUrl();
  initPartyAndRoster();
  updateSkillNameToggleButtons();

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

function renderParty() {
  const container = document.getElementById('party-list');
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

    // 防具の各セレクト選択肢を生成
    const makeOptions = (items, selectedId) => {
      if (!items) return '';
      const normId = normalizeEquipId('', selectedId);
      return items.map(item => `
        <option value="${item.id}" ${(item.id === selectedId || item.id === normId) ? 'selected' : ''}>
          ${item.name}
        </option>
      `).join('');
    };

    const armorSetOptions = makeOptions(equipmentMaster.armorSets, p.equipment.armorSet);
    const bodyOptions = makeOptions(equipmentMaster.bodyArmor, p.equipment.body);
    const armOptions = makeOptions(equipmentMaster.armArmor, p.equipment.arm);
    const acc1Options = makeOptions(equipmentMaster.accessory, p.equipment.acc1);
    const acc2Options = makeOptions(equipmentMaster.accessory, p.equipment.acc2);

    const armorBonus = calculateArmorBonus(p.equipment);
    const armorBonusText = armorBonus > 0 ? `+${armorBonus}%` : `+0%`;

    // 武器選択肢の生成（複数のおすすめ武器とモチーフ武器のタグ表示）
    const availableWeapons = getWeaponsForChar(p);
    const curWeaponObj = findWeapon(p.weapon.id);
    const recList = Array.isArray(p.recommendedWeapons) ? p.recommendedWeapons : [];
    const motif = p.motifWeapon;

    const weaponOptions = [
      `<option value="none" ${p.weapon.id === 'none' ? 'selected' : ''}>武器なし (0%)</option>`,
      ...availableWeapons.map(w => {
        const isMotif = (w.id === motif || w.name === motif);
        const recIdx = recList.indexOf(w.id) !== -1 ? recList.indexOf(w.id) : recList.indexOf(w.name);
        let tag = '';
        if (isMotif && recIdx !== -1) {
          tag = recIdx === 0 ? '【おすすめ/モチーフ】' : `【おすすめ${recIdx + 1}/モチーフ】`;
        } else if (recIdx !== -1) {
          tag = recList.length > 1 ? `【おすすめ${recIdx + 1}】` : '【おすすめ】';
        } else if (isMotif) {
          tag = '【モチーフ】';
        }
        const star = `★${w.rarity}`;
        const isSelected = (w.id === p.weapon.id || w.name === p.weapon.id);
        return `<option value="${w.id}" ${isSelected ? 'selected' : ''}>${star} ${w.name} ${tag}</option>`;
      })
    ].join('');

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
        <button class="remove-btn" onclick="removeFromParty(${index})" title="編成から外す">×</button>
      </div>
      <div class="equip-weapon-container">
        <!-- 武器設定 -->
        <details class="equip-details" ${p.isWeaponOpen ? 'open' : ''} ontoggle="handleEquipToggle(${index}, this.open)">
          <summary class="equip-summary">
            <span>⚔️ 武器設定: ${curWeaponObj ? curWeaponObj.name : 'なし'}</span>
            <span class="equip-bonus-badge">武器効率: ${weaponBonusText}</span>
          </summary>
          <div class="weapon-body">
            <div class="weapon-select-row">
              <label>武器選択 (おすすめ/モチーフが最優先表示)</label>
              <select onchange="updatePartyWeapon(${index}, this.value)">
                ${weaponOptions}
              </select>
            </div>
            ${weaponSkillsHtml}
          </div>
        </details>

        <!-- 防具設定 -->
        <details class="equip-details" ${p.isEquipOpen ? 'open' : ''} ontoggle="handleEquipToggle(${index}, this.open)">
          <summary class="equip-summary">
            <span>🛡️ 防具設定</span>
            <span class="equip-bonus-badge">防具効率: ${armorBonusText}</span>
          </summary>
          <div class="equip-grid">
            <div class="equip-field">
              <label>防具セット</label>
              <select onchange="updatePartyEquipment(${index}, 'armorSet', this.value)">
                ${armorSetOptions}
              </select>
            </div>
            <div class="equip-field">
              <label>胴防具</label>
              <select onchange="updatePartyEquipment(${index}, 'body', this.value)">
                ${bodyOptions}
              </select>
            </div>
            <div class="equip-field">
              <label>腕防具</label>
              <select onchange="updatePartyEquipment(${index}, 'arm', this.value)">
                ${armOptions}
              </select>
            </div>
            <div class="equip-field">
              <label>アクセサリー1</label>
              <select onchange="updatePartyEquipment(${index}, 'acc1', this.value)">
                ${acc1Options}
              </select>
            </div>
            <div class="equip-field">
              <label>アクセサリー2</label>
              <select onchange="updatePartyEquipment(${index}, 'acc2', this.value)">
                ${acc2Options}
              </select>
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
          if (item.skillData.type === 'skill' || item.skillData.type === 'skill2' || item.skillData.type === 'skill3') block.classList.add('bg-skill');
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

function updateSimulation() {
  let totalSpSpent = 0;
  let totalSpRefunded = 0;
  let totalSpRecovered = 0;
  let currentRefundSpPool = 0;
  let totalSkillCasts = 0;
  let suSkill1CastCount = 0;
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

  renderStatus(totalSpSpent, totalSpRefunded, totalSpRecovered, currentRefundSpPool, epState, totalSkillCasts);
}

function renderStatus(totalSpSpent, totalSpRefunded, totalSpRecovered, currentRefundSpPool, epState, totalSkillCasts) {
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
