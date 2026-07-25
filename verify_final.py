from playwright.sync_api import sync_playwright
import time

def test():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('http://127.0.0.1:8000')
        page.wait_for_load_state('networkidle')

        # Take a screenshot
        page.screenshot(path='verification/screenshots/verification_final.png', full_page=True)
        print("Done. Screenshot saved.")
        browser.close()

if __name__ == '__main__':
    test()
