Feature: Login feature for examples table demo

  Scenario Outline: <JIRA_ID>:As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | JIRA_ID    | username | password             | message                        |
      | JIRA-00003 | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | JIRA-00004 | foobar   | barfoo               | Your username is invalid!      |
