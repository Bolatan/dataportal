from playwright.sync_api import Page, expect
import re

def test_enrollment_tables(page: Page):
    """
    This test verifies that the new enrollment tables are present in Section B.
    """
    # 1. Arrange: Go to the survey page.
    page.goto("http://localhost:3000/survey.html")

    # 2. Assert: Check that the new Section B heading is present.
    section_b_heading = page.get_by_role("heading", name="Section B: ENROLMENT")
    expect(section_b_heading).to_be_visible()

    # 3. Screenshot: Capture the initial state of the tables.
    page.screenshot(path="jules-scratch/verification/verification.png")
