from playwright.sync_api import sync_playwright
import time
import json

def test():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('http://127.0.0.1:8000')
        page.wait_for_selector('.char-icon')

        # Click Zahi and Okugi to add to party
        page.click('text=ザイヒ')
        page.click('text=オクギ')

        time.sleep(1)

        # Inject timeline sequence manually
        page.evaluate("""() => {
            const zahi = allCharacters.find(c => c.name === 'ザイヒ');
            const okugi = allCharacters.find(c => c.name === 'オクギ');
            timelineSequence = [
                { type: 'refund', charId: zahi.id, charName: zahi.name, icon: zahi.icon },
                { type: 'skill', charId: zahi.id, skillId: zahi.skills[0].id, charName: zahi.name, icon: zahi.icon, skillData: zahi.skills[0] },
                { type: 'refund', charId: okugi.id, charName: okugi.name, icon: okugi.icon },
                { type: 'skill', charId: okugi.id, skillId: okugi.skills[0].id, charName: okugi.name, icon: okugi.icon, skillData: okugi.skills[0] },
                { type: 'skill', charId: zahi.id, skillId: zahi.skills[2].id, charName: zahi.name, icon: zahi.icon, skillData: zahi.skills[2] },
            ];
            renderTimeline();
        }""")

        time.sleep(1)

        # Change custom refund on Zahi's refund block (index 0)
        page.evaluate("""() => {
            const inputs = document.querySelectorAll('.refund-input');
            if(inputs.length > 0) {
                inputs[0].value = 20;
                inputs[0].dispatchEvent(new Event('change'));
            }
        }""")

        time.sleep(1)

        # Take a screenshot
        page.screenshot(path='verification/screenshots/verification_status4.png', full_page=True)
        print("Done. Screenshot saved.")
        browser.close()

if __name__ == '__main__':
    test()
