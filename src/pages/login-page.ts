import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  page: Page;
  username: Locator;
  password: Locator;
  submit: Locator;
  error: Locator;
  private creds: CredentialSet;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.submit = page.getByRole("button", { name: "submit" });
    this.error = page.locator("div#error");
    this.creds = {
      validUser: {
        username: "student",
        password: "Password123",
      },
      incorrectUser: {
        username: "incorrectUser",
        password: "Password123",
      },
      incorrectPassword: {
        username: "student",
        password: "incorrectPassword",
      },
    };
  }

  async goto() {
    await this.page.goto(
      "https://practicetestautomation.com/practice-test-login/"
    );
    await expect(this.page).toHaveTitle(
      "Test Login | Practice Test Automation"
    );
  }

  async fillCredentials(userType: string) {
    const credentials = this.creds[userType];
    if (!credentials) {
      throw new Error(`Credentials not found for userType: "${userType}"`);
    }
    await this.username.fill(credentials.username);
    await this.password.fill(credentials.password);
  }

  async submitCredentials() {
    await this.submit.click();
  }

  async verifyErrorMessage(errorMessage: string) {
    await expect(this.error).toHaveText(errorMessage);
  }
}

export interface Creds {
  username: string;
  password: string;
}

export interface CredentialSet {
  [key: string]: Creds;
}
