Cypress.Commands.add('navigateAndOpenForm', () => {
  cy.visit('http://localhost:5173/')
  cy.get('[data-testid="account-nav-btn"]').click()
})

describe('customer authentication', () => {
  it('user can sign up', () => {
    //navigate to sign up form
    cy.navigateAndOpenForm()
    cy.get('[data-testid="sign-in-form"]').should('be.visible')
    cy.get('[data-testid="sign-up-link"]').click()
    cy.get('[data-testid="sign-in-form"]').should('not.be.visible')
    cy.get('[data-testid="sign-up-form"]').should('be.visible')

    //try to sign up with incorrectly retyping password
    cy.get('input[id="emailSU"]').type('testuser1@mail.com')
    cy.get('input[id="passwordSU"]').type('password1')
    cy.get('input[id="confirmPasswordSU"]').type('password2')
    cy.get('button').contains('Sign Up').click()
    cy.get('p')
      .contains(/PASSWORDS DO NOT MATCH!/i)
      .should('exist')
    cy.get('[data-testid="alert-close-btn"]')
      .click()
      .get('p')
      .contains(/PASSWORDS DO NOT MATCH!/i)
      .should('not.exist')

    //correct password and successfully sign up
    cy.get('input[id="confirmPasswordSU"]')
      .clear()
      .type('password1')
      .get('button')
      .contains('Sign Up')
      .click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:5173/account')
    })
  })

  it('user can reset password', () => {
    //sign in form shows on navbar item click
    cy.navigateAndOpenForm()
    cy.get('[data-testid="sign-in-form"]').should('be.visible')

    //click on forgot password to get reset password form
    cy.get('a')
      .contains(/forgot password?/i)
      .click()
    cy.get('[data-testid="sign-in-form"]').should('not.be.visible')
    cy.get('[data-testid="reset-password-form"]').should('be.visible')

    //enter email address and send password reset email
    cy.get('[data-testid="rp-email-input"]').type('testuser1@mail.com')
    cy.get('button')
      .contains(/send reset link/i)
      .click()
    cy.get('p')
      .contains(/password reset email sent!/i)
      .should('exist')
  })

  it('user can sign in', () => {
    //sign in form shows on navbar item click
    cy.navigateAndOpenForm()
    cy.get('[data-testid="sign-in-form"]').should('be.visible')

    //enter wrong password/email
    cy.get('input[id="emailSI"]').type('fakeuser@mail.com')
    cy.get('input[id="passwordSI"]').type('wrongpassword')
    cy.get('button')
      .contains(/sign in/i)
      .click()
    cy.get('p')
      .contains(/please enter valid username \/ password/i)
      .should('exist')
    cy.get('[data-testid="alert-close-btn"]')
      .click()
      .get('p')
      .contains(/please enter valid username \/ password/i)
      .should('not.exist')

    //enter correct information and successfully sign in
    cy.get('input[id="emailSI"]').clear()
    cy.get('input[id="passwordSI"]').clear()
    cy.get('input[id="emailSI"]').type('testuser1@mail.com')
    cy.get('input[id="passwordSI"]').type('password1')
    cy.get('button')
      .contains(/sign in/i)
      .click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:5173/account')
    })
  })
})
