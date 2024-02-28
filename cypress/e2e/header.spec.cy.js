import { onHeaderPage } from "../support/pages/headerPage"; 


describe('Primary Header', () => {

    beforeEach('Login as standard user', () => {
        cy.openLoginPage()
        cy.loginAsStandardUser()
      })

    it('Verifies the primary header is visible with 3 items', () => {
        onHeaderPage.verifyPrimaryHeader()
        onHeaderPage.verifyBurgerBtn()
        onHeaderPage.verifyAppLogo()
        onHeaderPage.verifyShoppingCart()
    })

})

