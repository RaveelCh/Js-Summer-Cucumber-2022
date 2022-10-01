@Test2
Feature: Sprint 2 Testcases

@Test17
Scenario: Verify past dates and back button on Current month's calendar is disabled
    Given I am on Hotels landing page
    When I click on Dates
    And I go to current month
    Then I verify Past dates -if any- are disabled
    And I verify Back button on current month is disabled

@Test29
Scenario: Verify "List your Property" flow
    Given I am on Hotels landing page
    When I click on List your property
    Then I verify What would you like to list is displayed
    And I verify Lodging and Private residence options are displayed
    When I click on Private residence
    Then I verify Step 1 of 3 is displayed
    And I verify See how much you could earn! is displayed
    When I enter 4 bedroom
    And I enter 2.5 bathroom
    And I click on Next button
    Then I verify Step 2 of 3 is displayed
    And I verify Where is your property located is displayed
    When I enter 121 in address
    And I select 1211 6th Avenue, New York, NY, USA from auto-suggestion
    Then I verify graph is displayed
    And I verify pin in graph is displayed
    And I verify Pin location may not be exact is displayed below graph

@Test30
Scenario: Verify invalid phone number error
    Given I am on Hotels landing page
    When I scroll on Get The App
    And I enter invalid phone number
    And I click on Get The App
    Then I verify “Please enter a valid phone number.“ error is displayed

@Test23
Scenario: Verify filter-by and sort-by functionality works as expected
    Given I am on Hotels landing page
    When I enter Manhattan, NY in destination
    # And I select Jan 10, 2023 as Check-in
    # And I select Jan 23, 2023 as Check-out
    # And I click Apply
    And I click on Search button
    And I click on 5 star from star-rating
    And I select price from sort-by dropdown
    Then I verify all hotels in search results are star-rated as selected in above step
    Then I verify all hotels are listed in increasing order price

@Test19
Scenario: Verify Share feedback button is displayed at the end of search results
    Given I am on Hotels landing page
    When I enter “bora” in destination
    And I select “Bora Bora, Leeward Islands, French Polynesia” from auto suggestion
    And I select Dec 1, 2022 as Check-in
    And I select Dec 10, 2022 as Check-out
    And I click Apply
    And I click on Search button
    Then I verify Text: Tell us how we can improve our site is displayed
    And I verify Button Share feedback is displayed and enabled

@Test31
Scenario: Verify language can be changed successfully
    Given I am on Hotels landing page
    When I click on English language
    And I select Español in Language dropdown
    And I click on Save button
    Then I verify Español is displayed
    When I select English in Language dropdown
    And I click on Guardar button
    Then I verify English is displayed