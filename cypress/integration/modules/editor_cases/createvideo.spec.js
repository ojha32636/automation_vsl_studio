/// <reference types="Cypress" />
import dashboardloc from "../../../pages/user/dashboard";

describe("verify the functionality of create video button",()=>{
// ***********Firt login to the app*************
const dashloc = new dashboardloc();
it("login first",()=>{
    cy.login();
})
it("verify clickable or not", ()=>{
    dashloc.createbutton.click();
    cy.get(".vsl_popup_wrapper").should('be.visible');
})

})