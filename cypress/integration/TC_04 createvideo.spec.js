/// <reference types="Cypress" />
import dashboardloc from '../pages/user/dashboard'
import  createvideoloc from '../pages/editor/create_video_popup'

describe("verify the functionality of create video button",()=>{
// ***********Firt login to the app*************
const dashloc = new dashboardloc();
const popuploc = new createvideoloc();

it("login first",()=>{
    cy.login();
    cy.wait(10000);
    
})
it("verify clickable or not", ()=>{
    // cy.wait(10000);
    dashloc.createbutton.click();
    popuploc.popupwrapper.should('be.visible');
})
it("verify popup for blank title", ()=>{
 popuploc.popuptitle(' {enter}');
 //cy.checktoastmessage("Please enter title");
})
it("verify popup with title", ()=>{
    popuploc.popuptitle('my new 1 auto');
    popuploc.layoutpop.click();
    popuploc.createvideopopup.click();
    //cy.checktoastmessage("Video created successfully");
   })

})