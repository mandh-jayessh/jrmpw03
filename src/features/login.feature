Feature: Practice Test Automation site Login Functionality

  Background:
    Given I am on the Login Page

  Scenario: Verify Login Functionality For Successful Login
    When I provide the validUser credentials and Click Submit
    Then I am logged in

  Scenario Outline: Verify error message For invalid credentials
    When I provide the <user> credentials and Click Submit
    Then I validate the error message is <error>

    Examples:
      | user              | error                     |
      | incorrectUser     | Your username is invalid! |
      | incorrectPassword | Your password is invalid! |
