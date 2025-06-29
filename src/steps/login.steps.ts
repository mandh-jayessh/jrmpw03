import { Given, When, Then } from "@cucumber/cucumber";

Given(/^I am on the Login Page$/, async function () {
  await this.logIn.goto();
});

When(/^I provide the (.*) credentials and Click Submit$/, async function (userType: string) {
  await this.logIn.fillCredentials(userType);
  await this.logIn.submitCredentials();
});

Then(/^I am logged in$/, async function () {
  await this.loggedIn.assertLoggedInPage();
  await this.loggedIn.assertLogInSuccess();
  await this.loggedIn.logOut();
});

Then(/^I validate the error message is (.*)$/, async function (errorMessage: string) {
  await this.logIn.verifyErrorMessage(errorMessage)
});
