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

  async fillCredentials() {
    await this.username.fill("student");
    await this.password.fill("Password123");
  }

  async submitCredentials() {
    await this.submit.click();
  }
}
