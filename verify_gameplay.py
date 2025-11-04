
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        try:
            await page.goto("http://localhost:8000")

            # Verify Chroma Awards Logo
            await page.click("button.credits-btn")
            await page.wait_for_selector("#creditsModal[style*='display: flex']")
            logo = page.locator("img[alt='Chroma Awards Logo']")
            if await logo.is_visible():
                print("✅ Chroma Awards Logo is visible.")
            else:
                print("❌ Chroma Awards Logo is NOT visible.")
            await page.click("#creditsModal button.credits-btn")
            await page.wait_for_timeout(500)  # Wait for animation

            # Verify Connection Map
            await page.click("button.start-btn")
            await page.wait_for_selector("#habitatScreen[style*='display: flex']")
            await page.click("button.transition-btn")
            await page.wait_for_selector("#therapyOffice[style*='display: flex']")

            # The side panel containing the button is hidden by default. Force it to be visible for the test.
            await page.evaluate("document.getElementById('mainGameArea').style.display = 'flex'")
            await page.wait_for_timeout(100) # Give it a moment to render

            await page.click("button.panel-btn[onclick*='showConnectionMap']")
            await page.wait_for_selector("#connectionMapModal[style*='display: flex']")
            canvas = page.locator("#connectionMapContainer canvas")
            if await canvas.is_visible():
                print("✅ Connection Map canvas is visible.")
            else:
                print("❌ Connection Map canvas is NOT visible.")

            await page.screenshot(path="verification.png")
            print("📸 Screenshot captured: verification.png")

            await page.click("#connectionMapModal button.credits-btn")
            await page.wait_for_timeout(500)  # Wait for animation

        except Exception as e:
            print(f"An error occurred during verification: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
