Feature: Practice Test Automation site Home

  Scenario Outline: Navigate to links and verify titile
    Given I am on the Home Page
    When I click <link>
    Then I validate the user is navigated to <link> page

    Examples:
      | link     | 
      | Practice | 
      | Courses  | 
      | Blog     | 
      | Contact  | 
