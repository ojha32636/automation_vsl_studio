/// <reference types="Cypress" />
import dashboardloc from '../pages/user/dashboard'
import createvideoloc from '../pages/editor/create_video_popup'
import editorPage from '../pages/editor/editor_page'




describe("verify the functionality of create video button", () => {
    // ***********Firt login to the app*************
    //const dashloc = new dashboardloc();
    const popuploc = new createvideoloc();
    //const t1 = 'assign';
    //title = "assign";
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
        //popuploc.popupwrapper.should('be.visible');
    })
    // it("verify popup for blank title", () => {
    //     popuploc.popuptitle(' ');
    //     popuploc.layoutpop();
    //     popuploc.createvideopopup();
    //     //cy.checktoastmessage("Please enter title");
    // })
    it("verify popup with title", () => {

        popuploc.popuptitle('assign');

        popuploc.layoutpop();

        cy.get("div[class='vsl_video_layout_btn'] button[type='button']").click();
        cy.wait(5000);
        cy.title().should('eq', 'VSL Studio - Editor');
        //cy.checktoastmessage("Video created successfully");
    });
/******************************* Visual inspection editor option */
    it("verify showing logo or not", () => {
        cy.wait(4000);
        cy.get("img[src='/_next/image?url=%2Fimages%2Flogo.svg&w=384&q=75']").should('be.visible');

    });
    // it("verify logo is clickable or not?",()=>{
    //     cy.get("img[src='/_next/image?url=%2Fimages%2Flogo.svg&w=384&q=75']").click().title().should('eq','VSL Studio - Dashboard');
    // });
    it("verify showing resize or not", () => {
        cy.get("div[class='Header_vsl_editor_header_logo__3hogh'] button[class='vsl_btn']").should('be.visible');
    });
    it("verify showing title or not", () => {
        cy.get("div[class='Header_vsl_header_menu__6j3bB'] h3").contains('assign');
    });
    it("verify showing save button or not", () => {
        cy.get('.vsl_btn.editorSaveBtn').should('be.visible');
    });
    it("verify showing render button or not", () => {
        cy.contains('Render').should('be.visible');
    });
    it("verify showing all elements or not",()=> {
        cy.contains('Text').should('be.visible');
        cy.contains('Image').should('be.visible');
        cy.contains('Graphic').should('be.visible');
        cy.contains('Video').should('be.visible');
        cy.contains('Animation').should('be.visible');
        cy.contains('Audio').should('be.visible');
        cy.contains('BG').should('be.visible');

    })

})
