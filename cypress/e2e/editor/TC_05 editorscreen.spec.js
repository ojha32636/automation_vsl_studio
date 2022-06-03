/// <reference types ="Cypress" />
import "../../pages/editor/editor_page"
import editorPage from "../../pages/editor/editor_page";

const epage = new editorPage; // declearing the 

//here we will verify editor's item visually 
describe("verify all the elements", ()=> {
    it("verify showing logo or not", ()=> {
        epage.editorlogo.should('have.img');
    })

})

