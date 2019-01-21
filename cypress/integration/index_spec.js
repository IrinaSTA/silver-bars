describe('Live Order Board', function () {
  before(function() {
    cy.visit('/index.html')
  })
  it('has a form for registering an order', function () {
    cy.contains('Live Order Board')
    cy.contains('User ID')
    cy.contains('Quantity')
    cy.contains('Price')
    cy.contains('Bid')
    cy.contains('Ask')
  })
  it('allows user to place a bid', function () {
    cy.visit('/index.html')
    placeBid()
    cy.get('.orders').should('contain', 'Bid: 100 kg for 567.00')
  })
  it('allows user to place an ask', function () {
    cy.visit('/index.html')
    placeAsk()
    cy.get('.orders').should('contain', 'Ask: 100 kg for 567.00')
  })
  it('displays order summary', function () {
    placeBid();
    placeBid();
    placeAsk();
    cy.get('.summary').should('contain', '200 kg for 567.00 (Ask)')
    cy.get('.summary').should('contain', '200 kg for 567.00 (Bid)')
  })
  function placeBid() {
    cy.get('input[name="userid"]').type('1234')
    cy.get('input[name="quantity"]').type('100')
    cy.get('input[name="price"]').type('567')
    cy.get('input[value="Bid"]').click()
  }
  function placeAsk() {
    cy.get('input[name="userid"]').type('1234')
    cy.get('input[name="quantity"]').type('100')
    cy.get('input[name="price"]').type('567')
    cy.get('input[value="Ask"]').click()
  }
})
