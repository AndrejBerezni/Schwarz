describe('product purchase', () => {
  it('user can add products to cart and proceed to checkout', () => {
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

    //search for product and navigate to product page
    cy.get('input').first().type('rolex')
    cy.get('p')
      .contains(/cosmograph daytona/i)
      .should('exist')
      .click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq(
        'http://localhost:5173/products/prod_P016YytFCDKxKs'
      )
    })

    //add product to cart
    cy.get('button').contains('+').click()
    cy.get('button')
      .contains(/add to cart/i)
      .click()

    //return to home
    cy.get('a')
      .contains(/schwarz/i)
      .click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:5173/')
    })

    //open cart
    cy.get('p').contains('2').should('exist').click()

    //reduce number of items to 1
    cy.get('button').contains('-').click()

    //proceed to checkout
    cy.get('button')
      .contains(/checkout/i)
      .click()
    cy.wait(3000)
    cy.location().should((loc) => {
      expect(loc.origin).to.eq('https://checkout.stripe.com/')
    })
  })
})
