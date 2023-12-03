it('customer can leave product review', () => {
  //sign in first
  cy.visit('http://localhost:5173/')
  cy.get('[data-testid="account-nav-btn"]').click()
  cy.get('input[id="emailSI"]').type('testuser1@mail.com')
  cy.get('input[id="passwordSI"]').type('password1')
  cy.get('button')
    .contains(/sign in/i)
    .click()

  //wait for preloader to disappear
  cy.wait(3000)
})
