import {
  BeforeAll,
  AfterAll,
  Before,
  After,
  AfterStep,
  Status,
  setDefaultTimeout,
} from "@cucumber/cucumber";

import { Browser, BrowserContext, chromium } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { LoginPage } from "../pages/login-page";
import { LoggedInPage } from "../pages/logged-in-page";
let browser: Browser
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
  this.home = new HomePage(this.page);
  this.logIn = new LoginPage(this.page);
  this.loggedIn = new LoggedInPage(this.page);
});

AfterStep(async function ({ result, pickle }) {
  if (result.status === Status.FAILED) {
    const images = await this.page.screenshot({
      path: `./reports/failure-screenshots/${pickle.name}.png`,
      type: "png",
    });
    this.attach(images, "image/png");
  }
});

After(async function () {
  await this.page.close();
  await this.context.close();
});

AfterAll(async function () {
  await browser.close();
});
