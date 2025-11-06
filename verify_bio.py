from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8000")
    # Corrected selector to target the button by its class and text content
    page.click('button:has-text("Begin Therapy Journey")')
    page.wait_for_selector("#habitatScreen", state="visible")
    page.screenshot(path="verification/bio_verify.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
