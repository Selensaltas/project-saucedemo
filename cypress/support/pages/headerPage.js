
export class HeaderPage {

    verifyPrimaryHeader(){
        cy.get('.primary_header').should('be.visible')
    }

    verifyBurgerBtn() {
        cy.get('#react-burger-menu-btn').should('be.visible')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#react-burger-cross-btn').click()
    }

    verifyAppLogo() {
        cy.get('.app_logo').should('have.text','Swag Labs').should('be.visible')
    }

    verifyShoppingCart() {
        cy.get('#shopping_cart_container').should('be.visible').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    }

}

export const onHeaderPage = new HeaderPage()