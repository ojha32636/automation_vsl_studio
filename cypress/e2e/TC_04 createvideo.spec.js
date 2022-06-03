/// <reference types="Cypress" />
import dashboardloc from '../pages/user/dashboard'
import createvideoloc from '../pages/editor/create_video_popup'



describe("verify the functionality of create video button", () => {
    // ***********Firt login to the app*************
    //const dashloc = new dashboardloc();
    const popuploc = new createvideoloc();

    it("login first", () => {
        cy.login();
        cy.wait(1000);
        //cy.GetjwtToken();

    })
    it("verify clickable or not", () => {
        //cy.visit('https://www.vslstudio.io/dashboard');
        //console.log(cy.GetjwtToken());
        popuploc.createbtn();
        // cy.wait(4000);
        // popuploc.popupwrapper.should('be.visible');
    })
    // it("verify popup for blank title", () => {
    //     popuploc.popuptitle(' ');
    //     popuploc.layoutpop();
    //     popuploc.createvideopopup();
    //     //cy.checktoastmessage("Please enter title");
    // })
    it("verify popup with title", () => {
        
        popuploc.popuptitle('aftertoken');
        popuploc.layoutpop();
        //cy.wait(4000);
        cy.get("div[class='vsl_video_layout_btn'] button[type='button']").click();
        //cy.GetjwtToken();
        //cy.checktoastmessage("Video created successfully");
    })
    it("verify editor element", () =>{
        
    })

})