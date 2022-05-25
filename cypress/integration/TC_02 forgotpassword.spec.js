/// <reference types="Cypress" />
import global from '../../cypress.json'
import forgotPasswordPage from '../pages/auth/forgotpassword'
import loginPage from '../pages/auth/login';
describe("verify the behaviour of forgotpassword page", () => {
    //const loginpage = new loginPage();
    const forgotloc = new forgotPasswordPage();

    it("verify redirecting to forgotpassword page or not", () => {
        cy.visit(global.baseurl);
        forgotloc.forgot();
        cy.title().should('eq', 'VSL Studio - Forgot Password');
    })

    it("validate email for blank", () => {
        forgotloc.forgotemail().invoke('text');
        forgotloc.button();
        cy.checkToastMessage('Please enter email');
        cy.title().should('eq', 'VSL Studio - Forgot Password');
    })

    it("validate email for invalid email", () => {
        forgotloc.enteremail('omprakash.jhapixlnx.com');
        forgotloc.button();
        cy.checkToastMessage('Please enter valid email');
        cy.title().should('eq', 'VSL Studio - Forgot Password');
    })

    it("validate email for unregistered email", () => {
        forgotloc.enteremail('omprakash.jha@himanshusofttech.com');
        forgotloc.button();
        cy.checkToastMessage('This email is not registered with us');
        cy.title().should('eq', 'VSL Studio - Forgot Password');
    })

    it("validate removing space or not", () => {
        forgotloc.enteremail(' omprakash.jha@himanshusofttech.com');
        forgotloc.button();
        cy.checkToastMessage('This email is not registered with us');
        cy.title().should('eq', 'VSL Studio - Forgot Password');
    })

    it("validate for valid email", () => {
        forgotloc.enteremail(' omprakash.jha@pixelnx.com');
        forgotloc.button();
        cy.checkToastMessage('We have sent an email, please check your email');
        cy.title().should('eq', 'VSL Studio - Forgot Password');
    })

    it("varify back to login", () => {
        forgotloc.backtologin();
        cy.title().should('eq', 'VSL Studio - Login');
    })
})