// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('openLoginPage', () => {
  cy.visit('/')
});

Cypress.Commands.add('loginAsStandardUser', () => {
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
});

Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click()
  cy.get('#logout_sidebar_link').click()
});

Cypress.Commands.add('clickAddToCartBtnFirstItem', () => {
    cy.get('.inventory_item').first().find('button:contains("Add to cart")')
        .should('contain.text', 'Add to cart').click()
})

Cypress.Commands.add('clickAddToCartBtnSecondItem', () => {
  cy.get('.inventory_item').last().find('button:contains("Add to cart")')
      .should('contain.text', 'Add to cart').click()
})

Cypress.Commands.add('readJsonFile', (filePath) => {
  return cy.fixture(filePath);
});
