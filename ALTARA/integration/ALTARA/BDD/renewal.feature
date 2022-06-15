Feature: End to end renewals test

    Application regression
    Scenario: view collections list
    Given I login to the portal
    When i enter collections portal
    And filter by different criteria
    Then Export list
