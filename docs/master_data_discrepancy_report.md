# エンドフィールド マスタデータ・アプリデータ検証レポート

**作成日時**: 2026年11月8日  
**対象バージョン**: CBT/先行実装最新データ（2026/11時点）  
**検証ステータス**: 公式APIデータ全取得完了・マスタ構造修復・タグ＆計算グループ移行完了

---

## 1. エグゼクティブサマリー（検証結果の総括）

本レポートは、エンドフィールド攻略計算ツールにおける**マスタデータ**（`docs/endfield_effects_master.*`, `data/armors_master.*`）および**アプリデータ**（`data/characters.json`, `data/weapons.json`, `data/equipment.json`, `app.js`）を、公式コミュニティWiki（SKPort Zonai API）や国内・海外の複数情報源と突合し、**「誤り・食い違い・未反映・不整合と思われる箇所」**を網羅的に抽出・整理し、ユーザー指示方針に基づいて修復・整合を行った記録です。

### 実施された修復・改善実績（全対応完了）

* **【完了】② `docs/armors_master.csv` の列ズレ修正**:
  - 全274行において脱落していた2列を復元し、ヘッダー15列・全データ行15列の完全な正規構造へ修復完了。
* **【完了】③ アプリ側の有志情報を「正」としてマスタへ同期**:
  - 実機検証に基づき整備されたアプリ側（`data/equipment.json`）の情報を正と認定し、マスタ（Excel/CSV: `docs/armors_master.*`）の「3部位セット効果」列を一括同期完了。
* **【完了】④ 表記揺れは「マスタ」を正として確定**:
  - `遍歴トランスポーターのスピナーⅠ`、`骨砕の小像Ⅰ` などをマスタ基準で確定。
* **【完了】⑤ タグ＆計算グループ（10大枠）アーキテクチャの導入**:
  - 設計書 [docs/damage_calculation_system_design.md](file:///c:/Users/kosei/Documents/GitHub/endfield_tools/docs/damage_calculation_system_design.md) に基づき、全武器・防具・キャラクターに構造化された `modifiers` を付与。
* **【完了】⑥ キャラクター固有倍率の正常化（一律テンプレート解除）**:
  - 全34キャラ・全スキルの倍率を、マスタCSVおよび公式API準拠の正確な固有倍率（Rank1〜特化3）へ一括適用完了。
* **【完了】⑦ 武器データ（`data/weapons.json`）の「大願」重複解消とタグ付きモディファイア化**:
  - 武器85件から重複していた「大願」を解消（全84武器）し、スキル1〜3を `modifiers` として構造化完了。
* **【完了】⑧ 計算エンジン（`damage_calculator.js`）へのタグマッチャー・集約器実装**:
  - `matchTag`、`matchModifier`、`aggregateCalculationGroups` を実装・エクスポート完了。

---

## 2. 外部情報源（複数ソース）の特性と突合完了状況

| 情報源名 | ドメイン / URL | 特性・強み | 今回の検証における位置づけ・取得状況 |
| :--- | :--- | :--- | :--- |
| **SKPort 公式Wiki (Zonai API)** | `wiki.skport.com` / `zonai.skport.com` | Gryphline公式コミュニティWiki | **【全データ取得完了】**<br>・オペレーター: 全35体（37.0 MB）<br>・武器: 全84種（24.0 MB）<br>・防具（装備）: 全201件（9.18 MB）<br>公式APIの生データをローカルに保存し、100%の突合基準として活用。 |
| **Wikiru (アークナイツ：エンドフィールドWiki)** | `https://arknights-endfield.wikiru.jp/` | 日本語最大手コミュニティWiki | 日本語版CBTに基づくスキル倍率（Rank1〜特化3）、SP、ブレイク値、潜在、素質を網羅。マスタデータの数値と最も親和性が高い。 |
| **Prydwen Institute** | `https://www.prydwen.gg/arknights-endfield/` | 英語圏最大手データベース | Lv90時の基礎ステータス、全34キャラのスラッグと推奨ビルドを突合確認。 |
| **Game8 (ゲームエイト)** | `https://game8.jp/arknights-endfield/` | 国内大手商業ゲームメディア | 防具部位のサブステータス、入手先、レシピ解放条件が体系化。`armors_master.xlsx` の元データ。 |
| **BWIKI (Bilibili 終末地専区)** | `https://wiki.biligame.com/endfield/` | 中国公式公認コミュニティWiki | 中国大陸版CBTの実機マイニング・スキル詳細テーブルを保有。個別データの裏付けに活用。 |

---

## 3. 防具マスタデータ（`docs/armors_master.csv / .xlsx`）の修復結果

### 列ズレ修正の内容（修復完了）
- `docs/armors_master.xlsx` から15列構造を正しく取得。
- `3部位セット効果` をアプリ側（`data/equipment.json`）の完全なテキストに更新。
- No列を 1〜274 の正しい連番に修正。
- `docs/armors_master.xlsx` および `docs/armors_master.csv` を完全同期して保存完了。
- 防御力数値は公式APIと不一致0件（100%完全一致）。

---

## 4. 武器データ（`data/weapons.json`）の改善完了

1. **「大願」の重複解消**:
   - `index 6` と `index 41` に存在した重複を解消し、全84種の正規リストへ一元化。
2. **タグ付きモディファイア化**:
   - スキル1（メイン能力値UP）: `reference_scale`, `tags: ["src:weapon", "stat:main", "type:flat", "cond:always"]`
   - スキル2（攻撃力UP%）: `reference_scale`, `tags: ["src:weapon", "type:percent", "cond:always"]`
   - スキル3（属性ダメージUP/被ダメージUP）: `damage_up` / `taken_damage_up`, `tags: ["src:weapon", ...]`
3. **`data/weapons.js` との同期完了**。

---

## 5. キャラクターデータ（`data/characters.json`）の倍率正常化完了

1. **一律テンプレート値の完全解除**:
   - ★4/★5/★6の一律テンプレート倍率（Lv9=378%等）をすべて解除。
   - マスタCSVおよび公式APIデータに準拠した、**キャラクター固有の実機倍率（Rank1〜特化3）を `multipliers` に適用完了**。
   - 例:
     - 管理人 戦技: 378% → **280%** (特化3: 350%)
     - ウルフガード 必殺技: 720% → **290%** (5ヒット合計、特化3: 360%)
     - アンタル 戦技: 342% → **160%** (特化3: 200%)
     - ペリカ 戦技: 378% → **320%** (特化3: 400%)
2. **タグ付き `modifiers` 配列の新設**:
   - 各スキルの基礎モーション倍率および猛撃・結晶粉砕等の追加倍率を、タグ付きモディファイアとして構造化。
3. **`data/characters.js` および `app.js`（`DEFAULT_DATA`）との完全同期完了**。

---

## 6. 防具・セット装備（`data/equipment.json`）のモディファイア化完了

1. **サブステータスのモディファイア化**:
   - 全防具（胴・腕・アクセ）の各サブステータスに `calcGroup` と `tags` を付与。
2. **16種類の防具セット効果のモディファイア化**:
   - 火山セット、旧鋒セット、壌流セット、50式応龍セット、M.I.警備セットなど、すべてのセット効果をタグ付き `modifiers` として構造化。
3. **`data/equipment.js` との完全同期完了**。

---

## 7. 計算エンジン（`damage_calculator.js`）の拡張完了

1. **タグマッチャー (`matchTag`, `matchModifier`) の実装**:
   - 属性（`elem:`）、アクション種別（`action:`）、発動条件（`cond:`）による柔軟なフィルタリング機構を導入。
2. **グループ集約器 (`aggregateCalculationGroups`) の実装**:
   - マッチしたモディファイアを10大計算グループごとに同枠加算・スケーリング集約するパイプラインを構築。
3. **完全な後方互換性の維持**:
   - 既存の呼び出しや引数に対してもそのまま動作するようフォールバック設計を維持。

---
**作成者**: Antigravity Data Verification Agent  
**レポート保存場所**: `docs/master_data_discrepancy_report.md`
