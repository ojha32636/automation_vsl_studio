class createvideoloc {
    popuptitle(title){
        cy.get("input[name = 'name']")
        .clear().type(title);

    }
    popuptitleplmessage(plmessage){
        cy.get("input[name = 'name']").invoke('attr', 'placeholder').should('eq', plmessage);

    }
    layoutpop(v1,v2,v3){
        cy.get('.vsl_video_layout > div').should(($layout)=>{
            expect($layout,'3 items')
            expect($layout.eq(0)).to.contain(v1)
            expect($layout.eq(1)).to.contain(v2)
            expect($layout.eq(2)).to.contain(v3)
        })
    }
}