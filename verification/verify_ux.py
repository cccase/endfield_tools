from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # 1. Add Tangtang to party
    page.evaluate('''
        if (window.charactersData) {
            addToParty(charactersData.find(c => c.id === 'char_tangtang'));
        }
    ''')
    page.wait_for_timeout(1000)

    # 2. Add Gilberta to party
    page.evaluate('''
        if (window.charactersData) {
            addToParty(charactersData.find(c => c.id === 'char_gilberta'));
        }
    ''')
    page.wait_for_timeout(1000)

    # 3. Click to add 2 skills
    page.evaluate('''
        const skills = document.querySelectorAll('#skill-palette .skill-block');
        if (skills.length > 0) {
            skills[0].click(); // refund
            skills[1].click(); // Skill
        }
    ''')
    page.wait_for_timeout(1000)

    # 4. Check max charge
    page.locator('#start-max-charge').check()
    page.wait_for_timeout(1000)

    # 5. Click to add ultimate, should use charge and increment counter
    page.evaluate('''
        const skills = document.querySelectorAll('#skill-palette .skill-block');
        if (skills.length > 3) {
            skills[3].click(); // Ultimate of Tangtang
        }
    ''')
    page.wait_for_timeout(1000)

    page.screenshot(path="/app/verification/screenshots/verification_ux2.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/app/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
