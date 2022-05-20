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
Cypress.Commands.add('checkToastMessage', (message) => {
    cy.get('.Toastify__toast').should('be.visible').invoke('text').should('eq', message);
    
});
Cypress.Commands.add('login',()=>{
    cy.visit('https://www.vslstudio.io/login')
    cy.xpath('//input[@name="email"]').clear().type('omprakash.jha@himanshusofttech.com');
    cy.xpath('//input[@name="password"]').clear().type('123456');
    cy.get('.vsl_btn').click()
})