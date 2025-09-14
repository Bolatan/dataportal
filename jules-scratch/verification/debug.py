from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Log in
    page.goto("http://localhost:3000/login.html")
    page.evaluate("sessionStorage.setItem('loggedIn', 'true')")

    # Go to index page
    page.goto("http://localhost:3000/index.html")

    print(page.content())

    page.screenshot(path="jules-scratch/verification/debug.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
