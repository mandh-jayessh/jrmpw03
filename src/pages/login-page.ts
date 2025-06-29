import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  page: Page;
  username: Locator;
  password: Locator;
  submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.submit = page.getByRole("button", { name: "submit" });
  }

  async goto() {
    await this.page.goto(
      "https://practicetestautomation.com/practice-test-login/"
    );
    await expect(this.page).toHaveTitle(
      "Test Login | Practice Test Automation"
    );
  }

  async fillCredentials() {
    await this.username.fill("student");
    await this.password.fill("Password123");
  }

  async submitCredentials() {
    await this.submit.click();
  }
}
