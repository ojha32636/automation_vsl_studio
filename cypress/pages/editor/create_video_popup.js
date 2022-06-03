class createvideoloc {
    popupwrapper() {
        cy.get(".vsl_popup_wrapper");
        return this;
    }
    createbtn() {
        cy.get("div[class='vsl_aditional_btns'] button[type='button']").click();
        return this;

    }
    popuptitle(title) {
        cy.get("input[name = 'name']")
            .clear().type(title).click();
        return this;

    }
    popuptitleplmessage(plmessage) {
        cy.get("input[name = 'name']").invoke('attr', 'placeholder').should('eq', plmessage);
        return this;

    }

    layoutpop() {
        cy.get("div[data-layout='square']").click();
        return this;
    }
    createvideopopup() {
        cy.get("div[class='vsl_video_layout_btn'] button[type='button']");
        return this;
    }
}

export default createvideoloc