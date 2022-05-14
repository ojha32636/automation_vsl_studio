/// <reference types= "Cypress" />
import global from '../../../cypress.json'
import loginPage from '../../pages/auth/login'

describe("verify elements showing or not", () => {
    it("verify showing title or not", () => {
        cy.visit(global.baseurl);
        cy.title().should('eq', 'VSL Studio - Login');
    })
    it("verify showing remember me or not", () => {
        cy.contains('Remember Me').should('be.visible');
    })
    it("verify showing forgot password or not", () => {
        cy.contains('Forgot Password').should('be.visible');
    })
})


describe("login test", () => {

    //Object Creation for PageObject Page Class and assigning it to a constant variable
    const loginpage = new loginPage();

    it("verify login for blank", () => {
        // cy.visit(global.baseurl);
        // cy.title().should('eq','VSL Studio - Login');
        loginpage.enteremail(' ');
        loginpage.password(' ');
        loginpage.button();
        cy.checkToastMessage("Please enter email and password");
        cy.title().should('eq', 'VSL Studio - Login');


    })

    it("Verify for invalid email", () => {
        loginpage.enteremail('omprakash.jhapixlnx.com');
        loginpage.password('123');
        loginpage.button();
        //cy.checkToastMessage("Please enter valid email");
        cy.title().should('eq', 'VSL Studio - Login');


    })

    it("verify login for valid email and blank password", () => {


        loginpage.enteremail('omprakash.jha@himanshusofttech.com');
        loginpage.password(' ');
        loginpage.button();
        cy.checkToastMessage("Please enter password");
        cy.title().should('eq', 'VSL Studio - Login');


    })

    it("verify login for valid password and blank email", () => {


        loginpage.enteremail(' ');
        loginpage.password('123');
        loginpage.button();
        cy.checkToastMessage("Please enter password");
        cy.title().should('eq', 'VSL Studio - Login');


    })

    it("verify login for unregistered email and invalid password", () => {


        loginpage.enteremail('omprakash.jha@himanshusofttech.com');
        loginpage.password('123 ');
        loginpage.button();
        cy.checkToastMessage("This email is not registered with us");
        cy.title().should('eq', 'VSL Studio - Login');


    })

    it("Verify for valid email and valid password with space", () => {
        loginpage.enteremail(' omprakash.jha@himanshusofttech.com');
        loginpage.password(' 123456');
        loginpage.checkremember();
        loginpage.button();
        cy.checkToastMessage("Logged in successfully");
        cy.title().should('eq', 'VSL Studio - Dashboard');


    })

    it("Verify for valid email and valid password", () => {
        loginpage.enteremail('omprakash.jha@himanshusofttech.com');
        loginpage.password('123456');
        loginpage.checkremember();
        loginpage.button();
        cy.checkToastMessage("Logged in successfully");
        cy.title().should('eq', 'VSL Studio - Dashboard');


    })
})
