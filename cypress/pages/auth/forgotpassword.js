import loginPage from "./login"

class forgotPasswordPage extends loginPage {

    backtologin() {
        cy.xpath('//*[@id="__next"]/div[1]/div[1]/form/div[2]/p/a');
        cy.click();
        return this;
    }

    forgotemail(foremail) {
        cy.xpath("//input[@placeholder='Enter your email']")
            .clear()
            .type('foremail');
        return this;

    }


}
export default forgotPasswordPage