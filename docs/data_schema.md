# データスキーマ設計書

本ドキュメントは、『アークナイツ：エンドフィールド ダメージ計算＆タイムラインツール』における各種データ（キャラクター、武器、防具、案山子）のJSONフォーマットおよびスキーマ定義を記載する。

---

## 1. ディレクトリ構成

データは機能および部位ごとに分割管理され、ビルド時にNode.jsスクリプトで結合して利用する。

```
data/
├── characters/             # キャラクター個別JSON（例: admin.json, su.json）
├── weapons/                # 武器個別JSON（例: thermo_cutter.json, taigan.json）
├── armors/                 # 防具ルート
│   ├── body/              # 胴防具個別JSON（例: set_body_01.json）
│   ├── arms/              # 腕防具個別JSON（例: set_arms_01.json）
│   ├── accessories/       # アクセサリ個別JSON（例: set_acc_01.json）
│   └── sets.json          # 防具セット効果定義
└── enemies/                # 敵・案山子設定JSON（例: dummy.json）
```

---

## 2. 各データ構造（スキーマ）

### 2.1 キャラクター (`data/characters/{id}.json`)

キャラクターレベルはMAX（Lv.90固定）、スキルレベルは「Lv.9〜特化3」を保持する。

```json
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
  "subStat": "知性",
  "baseStats": {
    "hp": 7450,
    "atk": 820,
    "strength": 120,
    "agility": 280,
    "intellect": 190,
    "willpower": 110,
    "artsIntensity": 50,
    "critRate": 0.05,
    "critDamage": 0.50
  },
  "defaultEfficiency": 100.0,
  "defaultPotential": 0,
  "baseRefundSP": 0,
  "potentials": [
    {
      "level": 1,
      "type": "refund_sp_boost",
      "value": 10,
      "description": "スキル発動時返還SP+10"
    },
    {
      "level": 4,
      "type": "ult_cost_reduction_percent",
      "value": 15,
      "description": "必殺技EP消費-15%"
    }
  ],
  "skills": [
    {
      "id": "skill_admin",
      "type": "skill",
      "name": "秩序の刃",
      "shortName": "戦技",
      "spCost": 100,
      "damageType": "物理",
      "multipliers": {
        "lv9": 3.80,
        "lv10_spec1": 4.10,
        "lv11_spec2": 4.45,
        "lv12_spec3": 4.85
      },
      "hitCount": 3,
      "buffs": [
        {
          "id": "admin_skill_atk_up",
          "name": "攻撃力強化",
          "stat": "atkPercent",
          "value": 0.15,
          "duration": 15.0,
          "maxStacks": 1,
          "isStackable": false
        }
      ]
    },
    {
      "id": "combo_admin",
      "type": "combo",
      "name": "裁定",
      "shortName": "連携技",
      "damageType": "物理",
      "multipliers": {
        "lv9": 2.90,
        "lv10_spec1": 3.15,
        "lv11_spec2": 3.40,
        "lv12_spec3": 3.70
      },
      "hitCount": 1,
      "buffs": []
    },
    {
      "id": "ult_admin",
      "type": "ult",
      "name": "開闢の時",
      "shortName": "必殺技",
      "epCost": 100,
      "damageType": "物理",
      "multipliers": {
        "lv9": 7.50,
        "lv10_spec1": 8.10,
        "lv11_spec2": 8.80,
        "lv12_spec3": 9.60
      },
      "hitCount": 5,
      "buffs": []
    }
  ],
  "motifWeapon": "大願",
  "recommendedWeapons": ["大願", "輝かしき名声"]
}
```

---

### 2.2 武器 (`data/weapons/{id}.json`)

武器レベルMAX（Lv.90）の基礎攻撃力、ステータス上昇、およびランク1〜9の武器スキルを保持する。

```json
{
  "$schema": "../../schemas/weapon.schema.json",
  "id": "weapon_taigan",
  "name": "大願",
  "rarity": 6,
  "type": "片手剣",
  "motif": "管理人",
  "baseAtk": 450,
  "mainStatBonus": {
    "stat": "agility",
    "value": 156
  },
  "skills": [
    {
      "name": "敏捷UP・大",
      "type": "stat",
      "ranks": [20, 36, 52, 68, 84, 100, 116, 132, 156]
    },
    {
      "name": "攻撃力UP・大",
      "type": "atkPercent",
      "ranks": [0.05, 0.09, 0.13, 0.17, 0.21, 0.25, 0.29, 0.33, 0.39]
    },
    {
      "name": "付術・長願",
      "type": "passive",
      "description": "アーツ強度+84。源石封印または凍結時、20秒間次の戦技/必殺技の物理ダメージ+100.8%",
      "artsIntensity": [30, 36, 42, 48, 54, 60, 66, 72, 84],
      "physicalDamageUp": [0.36, 0.432, 0.504, 0.576, 0.648, 0.72, 0.792, 0.864, 1.008],
      "duration": 20.0,
      "isStackable": false
    }
  ],
  "ultEfficiency": null
}
```

---

### 2.3 防具 (`data/armors/body/`, `arms/`, `accessories/`)

部位は `body`（胴）、`arms`（腕）、`accessories`（アクセサリ）の3種。

```json
{
  "$schema": "../../../schemas/armor.schema.json",
  "id": "armor_ruten_body",
  "name": "流転の胸当て",
  "part": "body",
  "rarity": 6,
  "setId": "set_ruten",
  "mainStat": {
    "stat": "hp",
    "value": 2400
  },
  "subStats": [
    {
      "stat": "atkPercent",
      "value": 0.16
    },
    {
      "stat": "critRate",
      "value": 0.08
    }
  ],
  "ultEfficiency": 16.0
}
```

---

### 2.4 防具セット定義 (`data/armors/sets.json`)

2セットおよび3セットで発動する効果を定義する。

```json
{
  "sets": [
    {
      "id": "set_ruten",
      "name": "流転セット",
      "effects": {
        "twoPiece": {
          "description": "攻撃力+10%",
          "atkPercent": 0.10
        },
        "threePiece": {
          "description": "戦技発動時、15秒間物理ダメージ+20%",
          "physicalDamageUp": 0.20,
          "duration": 15.0,
          "isStackable": false
        }
      }
    }
  ]
}
```

---

### 2.5 敵・案山子 (`data/enemies/dummy.json`)

```json
{
  "$schema": "../../schemas/enemy.schema.json",
  "id": "target_dummy",
  "name": "案山子（ダミー）",
  "level": 90,
  "defense": 100,
  "resistances": {
    "physical": 0.0,
    "heat": 0.0,
    "electric": 0.0,
    "cryo": 0.0,
    "nature": 0.0
  },
  "vulnerability": 0.0,
  "isBroken": false,
  "breakMultiplier": 1.5
}
```

---

## 3. スキル倍率キーの標準定義

スキルレベル（Lv.9〜特化3）の倍率は以下のキー名で統一する。

| キー名 | ゲーム内スキルランク |
| :--- | :--- |
| `lv9` | レベル9 |
| `lv10_spec1` | レベル10（特化1） |
| `lv11_spec2` | レベル11（特化2） |
| `lv12_spec3` | レベル12（特化3） |

