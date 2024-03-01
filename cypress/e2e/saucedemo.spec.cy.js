import { onLoginPage } from "../support/pages/loginPage";
import { onHeaderPage } from "../support/pages/headerPage";
import { onSideBarMenu } from "../support/pages/sideBarPage";
import { onInventoryListPage } from "../support/pages/inventoryListPage";
import { onCartPage } from "../support/pages/cartPage";
import { onCheckOutPage } from "../support/pages/checkOutPage";

describe('Verifies smooth login', () => {
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

describe('Verifies side-bar menu', () => {
    beforeEach('Login as standard user', () => {
        cy.openLoginPage()
        cy.loginAsStandardUser()
    })

    it('Open sidebar clicking on the burger menu', () => {
        onSideBarMenu.openCloseSideBarMenu()
    })

    it('Checks sidebar menu items', () => {
        onSideBarMenu.openCloseSideBarMenu()
        onSideBarMenu.sideBarMenuItems()
    })
})

describe('Verifies primary Header', () => {
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

describe('Verifies inventory list', () => {
    beforeEach('Login as standard user', () => {
        cy.openLoginPage()
        cy.loginAsStandardUser()
    })

    it('Verifies inventory list items', () => {
        onInventoryListPage.getInventoryItemListNumber()
    })

    it('Verifies each inventory item has a title', () => {
        onInventoryListPage.verifyInventoryItemTitles()
    })

    it('Verifies each inventory item has a description', () => {
        onInventoryListPage.verifyInventoryItemDescriptions()
    })

    it('Verifies each inventory item has a price', () => {
        onInventoryListPage.verifyInventoryItemPrice()
    })

    it('Verifies Add to Cart button', () => {
        onInventoryListPage.verifyAddToCartBtn()
    })

    it('Verifies remove item button', () => {
        onInventoryListPage.verifyRemoveItemBtn()
    })
})

describe('Verifies cart page', () => {
    beforeEach(() => {
        cy.openLoginPage()
        cy.loginAsStandardUser()
        cy.clickAddToCartBtnFirstItem()
        cy.clickAddToCartBtnSecondItem()
        onCartPage.goToTheCart()
    })

    it('Count items in the cart', () => {
        onCartPage.cartItemCount()
    })

    it('Can remove item clicking on remove button on cart page', () => {
        onCartPage.removeItemClickingOnRemoveBtn()
    })

    it('Click on checkout button', () => {
        onCartPage.clickOnCheckOutBtn()
    })

})

describe('Verifies checkout page', () => {
    beforeEach(() => {
        cy.openLoginPage()
        cy.loginAsStandardUser()
        cy.clickAddToCartBtnFirstItem()
        cy.clickAddToCartBtnSecondItem()
        onCartPage.goToTheCart()
        onCartPage.clickOnCheckOutBtn()
    })

    it('Verifies checkout page', () => {
        onCheckOutPage.verifyCheckOutPage()
    })

    it('Fill out checkout form', () => {
        onCheckOutPage.fillOutCheckOutFormAndSubmit()
    })

    it('Cant submit checkout form without first name', () => {
        onCheckOutPage.fillOutFormWithoutFirstName()
    })

    it('Cant submit checkout form without last name', () => {
        onCheckOutPage.fillOutFormWithoutLastName()
    })

    it('Cant submit checkout form without postcode', () => {
        onCheckOutPage.fillOutFormWithoutPostcode()
    })
})
