Feature: Payment by credit card

  Scenario Outline: Payment by credit card with invalid card data

    Given I am on the home page
    When I go to login page
    And I login with username and password
    Then I am on personal account page with <url>
    And I go to home page
    And I choose for two adults tour <tourName>, <dataOfStart>
    Then On detail tour page amount of adults should be <adults>
    When I book the tour
    And Fill form with <name>, <email>, <phone>, <address>
    Then On invoice page displayed <name>, <email>, <phone>, <address>
    When I choose payment method by credit card
    And I click button Pay without filling in the required fields
    Then Alert message displayed



    Examples:
      | url     | tourName              | dataOfStart | adults | name | email      | phone       | address             |
      | account | Big Bus Tour of Dubai | 30          | 2      | Anna | dre@gh.com | +3805665656 | R2, Avenue du Maroc |
      | account | Big Bus Tour of Dubai | 20          | 5      | Mary | mre@gh.com | +3888888888 | R5, Avenue du Maroc |
