const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// The user wants "最低必要チャージ効率" to be displayed even if the Ultimate hasn't been cast.
// If it hasn't been cast, we use the `baseEpGainedBeforeFirstUlt` which tracks all EP gained until the end of the timeline (since hasCastUlt is never true).
// So the logic should be:
// If baseEpGainedBeforeFirstUlt > 0: calculate `(firstUltCost / baseEpGainedBeforeFirstUlt) * 100` and display it.
// If baseEpGainedBeforeFirstUlt == 0: display "計算不可" (Cannot Calculate) or just nothing.

const oldLine = /\$\{state\.hasCastUlt \? \(state\.baseEpGainedBeforeFirstUlt > 0 \? `<span style="color: #a0a0a0; font-size: 12px;">最低必要チャージ効率: \$\{.*\}%<\/span>` : `<span style="color: #a0a0a0; font-size: 12px;">最低必要チャージ効率: 計算不可<\/span>`\) : `<span style="color: #a0a0a0; font-size: 12px;">最低必要チャージ効率: 必殺未発動<\/span>`\}/;

const newLine = "${state.baseEpGainedBeforeFirstUlt > 0 ? `<span style=\"color: #a0a0a0; font-size: 12px;\">最低必要チャージ効率: ${((state.firstUltCost / state.baseEpGainedBeforeFirstUlt) * 100).toFixed(1)}%</span>` : `<span style=\"color: #a0a0a0; font-size: 12px;\">最低必要チャージ効率: 計算不可</span>`}";

if(oldLine.test(code)){
    code = code.replace(oldLine, newLine);
    fs.writeFileSync('app.js', code);
    console.log("Patched successfully");
} else {
    console.log("Could not find the regex match");
}
