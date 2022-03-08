Feature: Login feature for background and datable demo

  Background: open herokuapp
    Given I open the herokuapp login page

  Scenario: JIRA-00001:As a valid user, I can log into the secure area
    When I login with given username and password
      | username | password             |
      | tomsmith | SuperSecretPassword! |
    Then I should see a success flash message

  Scenario: JIRA-00002:As a invalid user, I can not log into the secure area
    When I login with given username and password
      | username | password |
      | foobar   | barfoo   |
    Then I should see a failed flash message