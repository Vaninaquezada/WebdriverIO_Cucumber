Feature: Search product on ebay tests

  
@androidBrowser
  Scenario: Search product Pila on ebay
    Given the user open the Ebay page
    When the user write on the search bar Pila
    And the user click on the search button 
    Then verify the Search was susccesfull

