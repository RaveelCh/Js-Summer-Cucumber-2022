Feature: Weather on Landing Page

Scenario: Verify timeline has 12-data points with 2 hours gap from current hour
    Given I am on darksky landing page
    Then I verify timeline has 12-data points with 2 hours gap from current hour