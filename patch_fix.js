const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

// Fix formatting
appJs = appJs.replace(
  `let cycleNames = ['サイクル 1'];document.addEventListener`,
  `let cycleNames = ['サイクル 1'];\n\ndocument.addEventListener`
);

// Fix suSkill1CastCount going below 0
appJs = appJs.replace(
  `        if (s.name === '戦技2' && step.charId === 'char_su') {
            if (suSkill1CastCount <= 0) {
                 epState[step.charId].warnings.push('戦技2は戦技1の後に発動可能');
            }
            suSkill1CastCount--;
        }`,
  `        if (s.name === '戦技2' && step.charId === 'char_su') {
            if (suSkill1CastCount <= 0) {
                 epState[step.charId].warnings.push('戦技2は戦技1の後に発動可能');
            } else {
                 suSkill1CastCount--;
            }
        }`
);

fs.writeFileSync('app.js', appJs);

let charJson = JSON.parse(fs.readFileSync('data/characters.json', 'utf8'));
let su = charJson.find(c => c.id === 'char_su');
if (su) {
    let skill1 = su.skills.find(s => s.id === 'skill1_su');
    if (skill1) {
        skill1.spCost = 0;
    }
}
fs.writeFileSync('data/characters.json', JSON.stringify(charJson, null, 2));
