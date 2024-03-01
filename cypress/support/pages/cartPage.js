let cartItemCount

export class CartPage {

    goToTheCart() {
        cy.get('#shopping_cart_container').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    }

    cartItemCount() {
        cy.get('.cart_item').then((value) => {
            cartItemCount = Cypress.$(value).length;
            expect(value).to.have.length(cartItemCount)
        })
    }

    removeItemClickingOnRemoveBtn() {
        cy.get('.cart_item').first().find('button').contains('Remove').click()
        cy.get('.cart_item').then((value) => {
            cartItemCount = Cypress.$(value).length;
            expect(value).to.have.length(cartItemCount)
        })
    }

    clickOnCheckOutBtn() {
        cy.get('[data-test="checkout"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
    }
    }

export const onCartPage = new CartPage()
