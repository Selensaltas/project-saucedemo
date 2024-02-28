function clearLoginFields() {
    cy.get('[data-test="username"]').clear()
    cy.get('[data-test="password"]').clear()
}

function clickOnLoginBtn() {
    cy.get('[data-test="login-button"]').click()
}

export class LoginPage {

    loginAllUsersNoIssues() {

        cy.fixture('login.json').then((login) => {
            login.users.forEach((user) => {

                cy.get('[data-test="username"]').type(user.username)
                cy.get('[data-test="password"]').type(user.password)
                clickOnLoginBtn()

                if (user.valid) {
                    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
                    cy.logout()
                } else if (user.username === 'locked_out_user') {
                    cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
                    clearLoginFields()
                } else {
                    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
                    clearLoginFields()
                }
            })
        })
    }

    loginWithoutUsername() {
        cy.get('[data-test="password"]').type('secret_sauce')
        clickOnLoginBtn()
        cy.get('[data-test="error"]').contains('Epic sadface: Username is required')
    }

    loginWithoutPassword() {
        cy.get('[data-test="username"]').type('standard_user')
        clickOnLoginBtn()
        cy.get('[data-test="error"]').contains('Epic sadface: Password is required')
    }
}

export const onLoginPage = new LoginPage()