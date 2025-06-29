Feature: Practice Test Automation Login Functionality

  Scenario: Verify Login Functionality For Successful Login
    Given I am on the Login Page
    When I provide the credentials and Click Submit
    Then I am logged in
