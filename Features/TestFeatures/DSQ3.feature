Feature: Min and Max Weather on Landing Page

Scenario: Verify minTemp and maxTemp on and in Today's timeline is same
    Given I am on darksky landing page
    Then I scroll to Today's timeline
    When I click on + button
    Then I verify minTemp on and in Today's timeline is same
    And I verify maxTemp on and in Today's timeline is same