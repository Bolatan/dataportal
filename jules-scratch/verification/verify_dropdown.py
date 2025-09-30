from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the ECCDE form
        page.goto("http://localhost:3000/eccde-form.html")

        # Open the Select2 dropdown
        page.locator('.select2-selection').click()

        # Search for a specific school
        search_input = page.locator('.select2-search__field')
        search_input.fill("Aanu Oluwapo Primary School Oyewole (24010005)")

        # Click the result
        page.get_by_role("option", name="Aanu Oluwapo Primary School Oyewole (24010005)").click()

        # Verify that the fields are populated
        expect(page.locator("#lga")).to_have_value("Agege Local Government Area")
        expect(page.locator("#ward")).to_have_value("Unknown Ward")
        expect(page.locator("#schoolCode")).to_have_value("24010005")

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

if __name__ == "__main__":
    run_verification()