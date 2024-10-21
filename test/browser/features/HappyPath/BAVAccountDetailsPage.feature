@success
Feature: Enter Bank Account Details


  Background:
    Given a user has navigated to the BAV Landing Page
    When the user clicks on Continue button
    Then the user is directed to the Account Details screen


  Scenario Outline: User routed to Check Your Answers Screen: <sortCode> and <accountNumber>
    Given the user has entered a Sort Code of <sortCode>
    Given the user has entered an Account Number of <accountNumber>
    When the user clicks the Continue button
    Then the user is directed to the Check Your Answers screen

    Examples:
      | sortCode   | accountNumber |
      | "12-34-56" | "99990086"    |
      | "12 34 56" | "99990086"    |
      | "123456"   | "99990086"    |

  Scenario: Back button routes user to Landing Page
    When the user clicks on the “Back” link
    Then they are routed to the BAV Landing Page

  Scenario: Browser back button routes user to Landing Page
    When the user clicks on the Back button on their browser
    Then they are routed to the BAV Landing Page
