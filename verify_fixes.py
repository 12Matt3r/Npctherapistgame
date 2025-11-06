from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8000")

    # Click start and go to habitat
    page.click('button:has-text("Begin Therapy Journey")')
    page.wait_for_selector("#habitatScreen", state="visible")
    page.screenshot(path="verification/final_bio_verify.png")

    # Proceed to therapy office
    page.click('button:has-text("Enter Therapy Office →")')
    page.wait_for_selector("#therapyOffice", state="visible")
    # Make sure the main game area with the two panels is visible
    page.evaluate("document.getElementById('mainGameArea').style.display = 'flex'")
    page.wait_for_selector("#leftPanel", state="visible")
    page.wait_for_selector("#rightPanel", state="visible")
    page.screenshot(path="verification/final_jitter_verify.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
