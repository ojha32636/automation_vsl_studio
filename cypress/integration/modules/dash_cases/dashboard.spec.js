/// <reference types="Cypress" />

import dashboardloc from "../../../pages/user/dashboard";


describe("verify the dashboard items",()=>{
    //Object Creation for PageObject Page Class and assigning it to a constant variable
    const dashloc = new dashboardloc();
    it("login first",()=>{
        cy.login();
    })
    it("verify showing menu items or not",()=>{
        // cy.contains('My Videos').should('be.visible');
        // cy.contains('Templates').should('be.visible');
        // cy.contains('Agency Users').should('be.visible');
        cy.get('.Header_vsl_header_menu__6j3bB > ul > li').should(($limenu)=>{
            expect($limenu,'3 items')
            expect($limenu.eq(0)).to.contain('My Videos')
            expect($limenu.eq(1)).to.contain('Templates')
            expect($limenu.eq(2)).to.contain('Agency Users')
        })


    })
    it("verify showing logo or not", ()=>{
        cy.get('.Header_vsl_header_logo__yVLZd').should('be.visible')
        
        
    })
})