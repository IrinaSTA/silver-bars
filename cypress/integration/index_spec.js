describe('My First Test', function() {
  it('visits the live trading board', function() {
    cy.visit('/index.html')
    cy.contains('Enter New Order:')
    cy.contains('User ID')
    cy.contains('Quantity')
    cy.contains('Price')
    cy.contains('Bid')
    cy.contains('Ask')
  })
})
