import asyncio
from playwright.async_api import async_playwright
import tkinter as tk
import tkinter.simpledialog as simpledialog

async def run_test():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()

        try:
            await page.goto("http://localhost:8000")

            # Click the "Create New NPC" button
            await page.click("button:has-text('Create New NPC')")

            # Show a dialog for the user to enter a prompt
            root = tk.Tk()
            root.withdraw()  # Hide the main window
            prompt = simpledialog.askstring("Input", "Enter the NPC image prompt:", parent=root)

            if prompt:
                # Fill in the prompt and generate the image
                await page.fill("#npcImagePrompt", prompt)
                await page.click("#generateBtn")

                # Wait for the image to be generated and displayed
                await page.wait_for_selector("#npcImagePreview[src]", state="visible", timeout=60000)

                # Show a dialog for the user to accept or retry
                user_choice = simpledialog.askstring("Action", "Type 'accept' or 'retry':", parent=root)

                if user_choice and user_choice.lower() == 'accept':
                    await page.click("button:has-text('Accept')")

                    # Fill in the rest of the form
                    await page.fill("#npcName", "Test NPC")
                    await page.fill("#npcMonologue", "This is a test monologue.")
                    await page.fill("#habitatDesc", "A test habitat.")

                    # Create the NPC
                    await page.click("button:has-text('Create NPC')")

                    # Wait for the success alert
                    await page.wait_for_event("dialog")

                    print("Test Passed: NPC created successfully!")
                else:
                    print("Test Aborted: User chose to retry or provided no input.")
            else:
                print("Test Aborted: No prompt provided.")

        except Exception as e:
            print(f"Test Failed: {e}")

        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run_test())