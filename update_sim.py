import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Update updateSimulation to handle flattened cycles
old_sim = r'  // Process sequence.*?renderStatus\(totalSpSpent, currentRefundSpPool, epState\);\n\}'

new_sim = '''  // Process sequence (flatten cycles for simulation)
  const flatSequence = timelineCycles.flat();
  flatSequence.forEach((step, index) => {
    const stats = getCharacterStats(step.charId);
    if (step.type === 'separator' || !stats) return;

    if (step.type === 'refund') {
      const refundVal = step.customRefund !== undefined ? step.customRefund : stats.refundSP;
      currentRefundSpPool += refundVal;
    }
    else if (step.type === 'skill') {
      const s = step.skillData;

      if (s.type === 'skill') {
        // Tangtang custom logic for refund on skill use
        if (step.charId === 'タンタン') {
           const p = party.find(x => x.id === 'タンタン');
           if (p) {
               let refundPerCombo = p.potential >= 1 ? 25 : 20;
               let activeCombos = Math.min(2, tangtangComboCount);
               currentRefundSpPool += activeCombos * refundPerCombo;
           }
           tangtangComboCount = 0;
        }

        totalSpSpent += s.spCost;
        let epBase = 6.5;
        let consumedRefund = 0;

        if (currentRefundSpPool > 0) {
          consumedRefund = Math.min(currentRefundSpPool, s.spCost);
          currentRefundSpPool -= consumedRefund;
          epBase = ((s.spCost - consumedRefund) / s.spCost) * 6.5;
        }

        party.forEach(p => {
          const pStats = getCharacterStats(p.id);
          epState[p.id].current += epBase * pStats.efficiency;
        });

      }
      else if (s.type === 'combo') {
        if (step.charId === 'タンタン') {
           tangtangComboCount++;
        }
        epState[step.charId].current += 10 * stats.efficiency;
      }
      else if (s.type === 'ult') {
        let cost = s.epCost;
        if (stats.ultCostReduction > 0) {
           cost = cost * (1 - stats.ultCostReduction / 100);
        }

        if (epState[step.charId].current < cost) {
           epState[step.charId].warnings.push(`発動時 EP不足 (必要: ${cost.toFixed(1)}, 現在: ${epState[step.charId].current.toFixed(1)})`);
        }
        epState[step.charId].current = 0;
        epState[step.charId].ultCount += 1;
      }
    }
  });

  renderStatus(totalSpSpent, currentRefundSpPool, epState);
}'''

content = re.sub(old_sim, new_sim, content, flags=re.DOTALL)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)
