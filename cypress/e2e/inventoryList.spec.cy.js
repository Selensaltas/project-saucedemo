import { onInventoryListPage } from "../support/pages/inventoryListPage";

describe('Inventory List', () => {

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

    it('Verifies each inventory item has a title', () => {
        onInventoryListPage.verifyInventoryItemDescriptions()
    })

    it('Verifies each inventory item has a title', () => {
        onInventoryListPage.verifyInventoryItemPrice()
    })

    it('Verifies Add to Cart button', () => {
        onInventoryListPage.verifyAddToCartBtn()
    })

    it('Verifies remove item button', () => {
        onInventoryListPage.verifyRemoveItemBtn()
    })
})