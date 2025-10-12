# Login and Navigation Testing with Cucumber

## Overview

This repository contains automated test scripts for **Login** and **Navigation** scenarios using the **Cucumber Framework** integrated with **Playwright**. The tests are written in **Gherkin** syntax and executed with **TypeScript**.

The primary goal of this project is to verify the login functionality (both valid and invalid credentials) and ensure that the navigation flows of the application work as expected.

## Technologies Used

- **Cucumber**: For behavior-driven development (BDD) tests, allowing you to write tests in Gherkin syntax.
- **Playwright**: For end-to-end testing, simulating user interactions on modern web browsers.
- **Gherkin**: For defining the feature files in a natural, readable language.
- **TypeScript**: For writing and organizing test scripts in a strongly typed, object-oriented manner.

## Features

- **Automated Login Scenarios**:
  - Valid login with correct credentials.
  - Invalid login with incorrect credentials.
  
- **Navigation Flows**:
  - Testing various navigation routes and ensuring that the application correctly loads the expected pages.

- **Cucumber Framework Structure**:
  - **Feature Files**: Contain scenarios written in Gherkin syntax.
  - **Step Definitions**: Contain the implementation of each Gherkin step.
  - **Test Execution**: Use Playwright to interact with the web application and perform assertions.

