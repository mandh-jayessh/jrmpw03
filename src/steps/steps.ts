import { Given, When, Then } from "@cucumber/cucumber";

Given(/^I am on the Login Page$/, async function () {
  await this.logIn.goto();
});

Given(/^I am on the Home Page$/, async function () {
  await this.home.goto();
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


Then(/^I click (.*)$/, async function (linkText: string) {
  await this.home.clickLink(linkText);
});

Then(/^I validate the user is navigated to (.*) page$/, async function(page: string) {
  await this.home.assertURLandTitle(page);
});
