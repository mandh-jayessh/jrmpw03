import { Given, When, Then } from "@cucumber/cucumber";

Given(/^I am on the Login Page$/, async function () {
  await this.logIn.goto();
});

When(/^I provide the credentials and Click Submit$/, async function () {
  await this.logIn.fillCredentials();
  await this.logIn.submitCredentials();
});

Then(/^I am logged in$/, async function () {
  await this.loggedIn.assertLoggedInPage();
  await this.loggedIn.assertLogInSuccess();
  await this.loggedIn.logOut();
});
