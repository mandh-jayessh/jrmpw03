import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://practicetestautomation.com/");
    await expect(this.page).toHaveTitle(
      "Practice Test Automation | Learn Selenium WebDriver"
    );
  }

  async clickLink(linkText: string) {
    await this.page.getByRole("link", { name: linkText, exact: true }).click();
  }

  async assertURLandTitle(page: string) {
    if (page === "Contact") {
      await expect(this.page).toHaveTitle(
        `${page} | Practice Test Automation | Selenium WebDriver`
      );
    } else {
      await expect(this.page).toHaveTitle(`${page} | Practice Test Automation`);
    }
    await expect(this.page).toHaveURL(new RegExp(`/${page.toLowerCase()}/`));
  }
}
