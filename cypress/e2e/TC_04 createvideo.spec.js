/// <reference types="Cypress" />
import dashboardloc from '../pages/user/dashboard'
import createvideoloc from '../pages/editor/create_video_popup'
import editorPage from '../pages/editor/editor_page'




describe("verify the functionality of create video button", () => {
    // ***********Firt login to the app*************
    //const dashloc = new dashboardloc();
    const popuploc = new createvideoloc();
    const title = '';
    const epage = new editorPage(); // declearing the 

    it("login first", () => {
        cy.login();
        cy.wait(5000);
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
        
       title = popuploc.popuptitle('aftertoken');
       console.log(title);
        popuploc.layoutpop();
        //cy.wait(4000);
        cy.get("div[class='vsl_video_layout_btn'] button[type='button']").click();
        //cy.GetjwtToken();
        //cy.checktoastmessage("Video created successfully");
    });
    
    it("verify showing logo or not", ()=> {
        cy.wait(4000);
        cy.get("img[src='/_next/image?url=%2Fimages%2Flogo.svg&w=384&q=75']").should('be.visible');

    });
    it("verify logo is clickable or not?",()=>{
        cy.get("img[src='/_next/image?url=%2Fimages%2Flogo.svg&w=384&q=75']").click().title().should('eq','VSL Studio - Dashboard');
    });
    it("verify showing resize or not",()=>{
        cy.get("div[class='Header_vsl_editor_header_logo__3hogh'] button[class='vsl_btn']").should('be.visible');
    });
    it("verify showing title or not", ()=>{
        cy.get("div[class='Header_vsl_header_menu__6j3bB'] h3").contains({})
    })

})
