import { onLoginPage } from "../support/pages/loginPage"

describe('Login page', () => {

  beforeEach('Clear data before each session', () => {
    cy.session('Clear data', () => {
})
  })
    it('Login and logout without', () => {
      cy.openLoginPage()
      onLoginPage.loginAllUsersNoIssues()
    })

    it('Can not login without username', () => {
      cy.openLoginPage()
      onLoginPage.loginWithoutUsername()
    })

    it('Can not login without password', () => {
      cy.openLoginPage()
      onLoginPage.loginWithoutPassword()
    })
  })
