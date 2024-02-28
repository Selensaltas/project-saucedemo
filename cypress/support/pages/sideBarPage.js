function clickBurgerMenuBtn() {
    cy.get('#react-burger-menu-btn').click()
}

export class SideBarMenu {

    openCloseSideBarMenu() {
        clickBurgerMenuBtn()
        cy.get('.bm-menu-wrap').should('be.visible')
        cy.get('#react-burger-cross-btn').click()
        cy.get('.bm-menu-wrap').should('not.be.visible')
        clickBurgerMenuBtn()
    }

    sideBarMenuItems() {
        cy.get('.bm-item.menu-item').should('have.length', 4)
        cy.get('.bm-item.menu-item').eq(0).should('contain.text', 'All Items').url('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get('.bm-item.menu-item').eq(1).should('contain.text', 'About').url('eq', 'https://saucelabs.com/')
        cy.get('.bm-item.menu-item').eq(2).should('contain.text', 'Logout')
        cy.get('.bm-item.menu-item').eq(3).should('contain.text', 'Reset App State')
    }
}

export const onSideBarMenu = new SideBarMenu()