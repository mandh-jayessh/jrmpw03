import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given(/^I am on the Login Page$/, async function () {
  await this.page.goto(
    "https://practicetestautomation.com/practice-test-login/"
  );
  await expect(this.page).toHaveTitle("Test Login | Practice Test Automation");
});

When(/^I provide the credentials and Click Submit$/, async function () {
  await this.page.locator("#username").fill("student");
  await this.page.locator("#password").fill("Password123");
  await this.page.getByRole("button", { name: "submit" }).click();
});

Then(/^I am logged in$/, async function () {
  await expect(this.page).toHaveTitle(
    "Logged In Successfully | Practice Test Automation"
  );
  await expect(this.page).toHaveURL(new RegExp("/logged-in-successfully/"));
  await expect(this.page.getByRole("heading")).toHaveText(
    "Logged In Successfully"
  );
});
