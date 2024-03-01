function validateFirstNameField() {
    cy.get('[data-test="firstName"]').should('be.visible')
                .type('Aname').should('have.value','Aname')
}

function validateLastNameField() {
    cy.get('[data-test="lastName"]').should('be.visible')
                .type('Asurname').should('have.value','Asurname')
}

function validatePostcodeField() {
    cy.get('[data-test="postalCode"]').should('be.visible')
                .type('E155EP').should('have.value','E155EP')
}

function clickOnContinueBtn() {
    cy.get('[data-test="continue"]').click()
}

export class CheckOutPage {

    verifyCheckOutPage() {
        cy.get('.checkout_info').should('be.visible')
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
    }

    fillOutCheckOutFormAndSubmit() {
        validateFirstNameField()
        validateLastNameField()
        validatePostcodeField()
        clickOnContinueBtn()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')
    }

    fillOutFormWithoutLastName() {
        validateFirstNameField()
        validatePostcodeField()
        clickOnContinueBtn()
        cy.get('[data-test="error"]').contains('Error: Last Name is required')
    }

    fillOutFormWithoutFirstName() {
        validateLastNameField()
        validatePostcodeField()
        clickOnContinueBtn()
        cy.get('[data-test="error"]').contains('Error: First Name is required')
    }

    fillOutFormWithoutPostcode() {
        validateFirstNameField()
        validateLastNameField()
        clickOnContinueBtn()
        cy.get('[data-test="error"]').contains('Error: Postal Code is required')
    }
}

export const onCheckOutPage = new CheckOutPage()