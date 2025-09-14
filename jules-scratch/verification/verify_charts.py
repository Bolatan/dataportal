from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Capture console logs
    page.on('console', lambda msg: print(f"Browser console: {msg.text()}"))

    # Log in
    page.goto("http://localhost:3000/login.html")
    page.evaluate("sessionStorage.setItem('loggedIn', 'true')")

    # Go to index page and check for "No data" message
    page.goto("http://localhost:3000/index.html")
    expect(page.get_by_text("No data to display").first).to_be_visible()
    page.screenshot(path="jules-scratch/verification/01_no_data.png")

    # Go to survey page and fill it out
    page.goto("http://localhost:3000/survey.html")
    page.get_by_label("Head Teacher/Manager Name *").fill("Test Teacher")
    page.get_by_label("Contact Number *").fill("1234567890")
    page.get_by_role("radio", name="Male", exact=True).check()
    page.get_by_role("radio", name="Married").check()
    page.get_by_label("Highest Qualification: *").select_option("B.Ed")
    page.get_by_label("Years of Leadership Experience *").fill("5")
    page.get_by_label("Institution Type *").select_option("Primary")
    page.get_by_label("Local Govt Educ Auth *").select_option("Ikeja")
    page.get_by_label("Name of School/Institution *").fill("Test School")
    page.get_by_label("Address of School/Institution *").fill("123 Test Street")
    page.get_by_label("Location *").select_option("Agege") # This is a guess, might need adjustment
    page.get_by_label("Latitude *").fill("6.6")
    page.get_by_label("Longitude *").fill("3.3")
    page.get_by_label("Assembly Devotion Start Time *").fill("08:00")
    page.get_by_label("Assembly Devotion End Time *").fill("08:30")
    page.locator("#teachersMale").fill("10")
    page.locator("#teachersFemale").fill("12")
    page.locator("#nonTeachingMale").fill("5")
    page.locator("#nonTeachingFemale").fill("6")
    page.locator("#eccdeMale").fill("100")
    page.locator("#eccdeFemale").fill("110")
    page.locator("#primaryMale").fill("0")
    page.locator("#primaryFemale").fill("0")
    page.locator("#specialMale").fill("1")
    page.locator("#specialFemale").fill("2")
    page.get_by_label("Number of Additional Teachers/Staff Required: *").fill("3")
    page.get_by_label("Number of Classes operated as Multigrade: *").fill("0")
    page.locator('input[name="signboard"][value="good"]').check()
    page.locator("#teachersFurnitureAvailable").fill("20")
    page.locator("#teachersFurnitureGood").fill("18")
    page.locator("#teachersFurnitureRequired").fill("2")
    page.locator("#eccdeFurnitureAvailable").fill("50")
    page.locator("#eccdeFurnitureGood").fill("45")
    page.locator("#eccdeFurnitureRequired").fill("5")
    page.locator("#primaryFurnitureAvailable").fill("200")
    page.locator("#primaryFurnitureGood").fill("190")
    page.locator("#primaryFurnitureRequired").fill("10")
    page.locator('input[name="sharedFacility"][value="no"]').check()
    page.locator('input[name="perimeterFence"][value="yes"]').check()
    page.locator("#classroomsAvailable").fill("10")
    page.locator("#classroomsGood").fill("8")
    page.locator("#classroomsMinorRepair").fill("2")
    page.locator("#classroomsMajorRepair").fill("0")
    page.locator("#classroomsRequired").fill("0")
    page.locator('input[name="toiletType"][value="wc"]').check()
    page.locator("#cubicleAvailable").fill("4")
    page.locator("#cubicleMinorRepair").fill("1")
    page.locator("#cubicleMajorRepair").fill("0")
    page.locator("#cubicleRenovation").fill("0")
    page.locator("#cubicleRequired").fill("0")
    page.locator('input[name="septicTank"][value="available"]').check()
    page.locator('input[name="waterSource"][value="borehole"]').check()
    page.locator('input[name="electricity"][value="phcn"]').check()
    page.locator('input[name="waterlogged"][value="no"]').check()
    page.locator("#photos").set_input_files([])

    page.get_by_role("button", name="Submit SILNAT Form 1.1").click()

    # Wait for navigation to index.html
    page.wait_for_url("**/index.html")

    # Verify that the charts are now visible
    expect(page.get_by_role("heading", name="Office Infrastructure")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/02_with_data.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
