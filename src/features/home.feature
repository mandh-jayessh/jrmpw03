@regression
Feature: Practice Test Automation site Home
    
  Background:
    Given I am on the Home Page
  
  Scenario Outline: Navigate to links and verify titile
    When I click <link>
    Then I validate the user is navigated to <link> page
    
    Examples:
      | link     | 
      | Practice | 
      | Courses  | 
      | Blog     | 
      | Contact  | 
