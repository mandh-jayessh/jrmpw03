import { Page, Locator, expect } from "@playwright/test";

export class LoggedInPage {
  page: Page;
  success_message: Locator;
  congrats_message: Locator;
  log_out: Locator;

  constructor(page: Page) {
    this.page = page;
    this.success_message = page.getByRole("heading");
    this.congrats_message = page.locator("strong");
    this.log_out = page.locator("//a[text()='Log out']");
  }

  async assertLoggedInPage() {
    await expect(this.page).toHaveTitle(
      "Logged In Successfully | Practice Test Automation"
    );
    await expect(this.page).toHaveURL(new RegExp("/logged-in-successfully/"));
  }

  async assertLogInSuccess() {
    await expect(this.success_message).toHaveText("Logged In Successfully");
    await expect(this.congrats_message).toHaveText(
      "Congratulations student. You successfully logged in!"
    );
  }

  async logOut() {
    await expect(this.log_out).toBeAttached();
    await this.log_out.click();
  }
}
