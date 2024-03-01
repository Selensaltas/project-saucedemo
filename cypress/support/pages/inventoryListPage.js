
export class InventoryList {

    getInventoryItemListNumber() {
        cy.get('.inventory_item').should('have.length', 6)
    }

    verifyInventoryItemTitles() {
        cy.get('.inventory_item').find('.inventory_item_name').each((item, index) => {
            cy.wrap(item).should('contain.text', '')
        })
    }

    verifyInventoryItemDescriptions() {
        cy.get('.inventory_item').find('.inventory_item_desc').each((item, index) => {
            cy.wrap(item).should('contain.text', '')
        })
    }

    verifyInventoryItemPrice() {
        cy.get('.inventory_item').find('.inventory_item_price').each((item, index) => {
            cy.wrap(item).should('contain.text', '$' + '')
        })
    }

    verifyAddToCartBtn() {
        cy.clickAddToCartBtnFirstItem()
        cy.get('.shopping_cart_badge').should('contain', 1)
    }

    verifyRemoveItemBtn() {
        cy.clickAddToCartBtnFirstItem()
        cy.get('.inventory_item').find('[data-test="remove-sauce-labs-backpack"]')
            .should('contain.text', 'Remove').click()
        cy.get('.shopping_cart_badge').should('not.exist')
    }
}

export const onInventoryListPage = new InventoryList()