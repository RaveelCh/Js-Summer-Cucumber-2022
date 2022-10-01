Feature: Rewards and Join now

Scenario: Rewards
    Given I am on hotels landing page
    When I click on Learn about Hotels.com Rewards
    Then I verify Hotels Rewards opened in a new window
    When Click on Join Now
    Then I verify Form is blank
    And I verify Continue button is NOT enabled
