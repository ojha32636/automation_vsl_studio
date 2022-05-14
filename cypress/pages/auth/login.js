class loginPage {
    enteremail(email) {

        cy.xpath('//input[@name="email"]')
            .clear()
            .type(email);
        return this;
    }

     password(pswd){
         cy.xpath('//input[@name="password"]')
                .clear()
                .type(pswd);
            return this;
     }

    checkremember(){
        cy.xpath('//input[@name="remember_me"]')
        .click({ force: true })
        return this;
    }

    button(){
    cy.get('.vsl_btn')
        .click()  
        return this;  
    }

    policy(){
        cy.get('.vsl_privacy_link').click()
        return this;
    }

    forgot(){
           cy.xpath('//a[normalize-space()="Forgot Password?"]').click()
           return this ;
    }

   
    
}

export default loginPage