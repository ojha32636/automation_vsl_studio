class dashboardloc{

    dashlogo(){
        cy.xpath("//body/div[@id='__next']/div[1]/div[1]/a[1]/div[1]/img[1]");
        return this();
    }
    menuitem1(){
        cy.xpath("//body/div[@id='__next']/div[1]/div[2]/ul[1]/li[1]/a[1]");
        return this();
    }

    menuitem2(){
        cy.xpath("//body/div[@id='__next']/div[1]/div[2]/ul[1]/li[2]/a[1]");
        return this();
        
    }
    menuitem3(){
        cy.xpath("//body/div[@id='__next']/div[1]/div[2]/ul[1]/li[3]/a[1]");
        return this();
        
    }
    profileicon(){
        cy.xpath("//body/div[@id='__next']/div[1]/div[3]/div[1]");
        return this();
    }
    searchbar(){
        cy.xpath("//body/div[@id='__next']/div[2]/div[1]/input[1]");
        return this();
    }
    spacemsg(){
        cy.xpath("//body/div[@id='__next']/div[3]/div[2]/div[1]/div[1]");
        return this();
    }
    createbutton(){
        cy.xpath("//button[contains(text(),'+ Create Video')]");
        return this();
    }
    eletitle(){
        cy.xpath("//body/div[@id='__next']/div[3]/div[2]/h3[1]");
        return this();
    }
    loadmoreloc(){
        cy.xpath("//button[contains(text(),'Load More')]");
        return this();
    }







}
export default dashboardloc