import re

with open('app.js', 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Fix removeFromParty ReferenceError
c = c.replace('''  // Re-filter timeline (remove skills of characters no longer in party)
  const currentPartyIds = party.map(p => p.id);
  timelineSequence = timelineSequence.filter(item => {
    if (item.type === 'refund') return currentPartyIds.includes(item.charId);
    return currentPartyIds.includes(item.charId);
  });''', '''  // Re-filter timeline (remove skills of characters no longer in party)
  const currentPartyIds = party.map(p => p.id);
  timelineCycles = timelineCycles.map(cycle => {
    return cycle.filter(item => {
      if (item.type === 'separator') return true;
      if (item.type === 'refund' && !item.charId) return true; // Keep generic refund
      return currentPartyIds.includes(item.charId);
    });
  });''')


# 2. Fix URL load not rendering
c = c.replace('''      if (data.party && data.timelineCycles) {
        party = data.party;
        timelineCycles = data.timelineCycles;
      }
    } catch (err) {''', '''      if (data.party && data.timelineCycles) {
        party = data.party;
        timelineCycles = data.timelineCycles;
        renderParty();
        renderPalette();
        renderTimeline();
      }
    } catch (err) {''')


# 3. Fix generic refund block missing charId by modifying updateSimulation
# In updateSimulation: `if (step.type === 'separator' || !stats) return; `
# We want to allow generic refunds to pass through even without a charId.
c = c.replace('''  const flatSequence = timelineCycles.flat();
  flatSequence.forEach((step, index) => {
    const stats = getCharacterStats(step.charId);
    if (step.type === 'separator' || !stats) return;

    if (step.type === 'refund') {
      const refundVal = step.customRefund !== undefined ? step.customRefund : stats.refundSP;
      currentRefundSpPool += refundVal;
    } else if (step.type === 'skill') {''', '''  const flatSequence = timelineCycles.flat();
  flatSequence.forEach((step, index) => {
    const stats = getCharacterStats(step.charId);
    if (step.type === 'separator') return;
    if (step.type !== 'refund' && !stats) return;

    if (step.type === 'refund') {
      const refundVal = step.customRefund !== undefined ? step.customRefund : (stats ? stats.refundSP : 0);
      currentRefundSpPool += refundVal;
    } else if (step.type === 'skill') {''')


with open('app.js', 'w', encoding='utf-8') as f:
    f.write(c)
