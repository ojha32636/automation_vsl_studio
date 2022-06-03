// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { beforeEach } from "mocha";



// below command will get the toast message
Cypress.Commands.add('checkToastMessage', (message) => {
    cy.get('.Toastify__toast').should('be.visible').invoke('text').should('eq', message);

});
//************************************For login********************/

Cypress.Commands.add('login', () => {
    cy.visit('https://www.vslstudio.io/login')
    cy.xpath('//input[@name="email"]').clear().type('omprakash.jha@himanshusofttech.com');
    cy.xpath('//input[@name="password"]').clear().type('123456');
    cy.get('.vsl_btn').click();
  
});

beforeEach(()=>{
   cy.setCookie('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2E0MGJiMzViNDBhMWYyMDRlOWVkZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjU0MTcwMzc1LCJleHAiOjE2NTQyNTY3NzV9.zkvqqOpOmpkUMn9dTTJsiyiq36X7SrhpzWmaGmKcrEU' );
})
//*********For JWT token */
// let tkn = '';

// Cypress.Commands.add('GetjwtToken', () => {

    
     
//     cy.request({
//         method: 'POST',
//         url: 'https://api.vslstudio.io/server/login',
//         form: true,
//         body:{
//             email: "omprakash.jha@himanshusofttech.com", password: "123456"
//         }
//     }).then(resp =>{ 
//         console.log(resp.body.token);
//         tkn =  resp.body.token;
//        cy.setCookie('token', tkn , {expiry: 10000000000});
       
        
//         cy.request({
//             method: 'POST',
//             url: 'https://api.vslstudio.io/server/save-template-data',
//             headers:{
//                 'Authorization': 'Bearer ' + cy.getCookie('token'),
//                 'Content-Type': 'application/json'
                        
//             },
//             body: JSON.stringify({
//                 'name': 'my new 1 autoo',
//                 'template_data': '{ccState: false, totalDuration: 30, texts: [], images: [], graphics: [], videos: [], audios: []}',
//             })
            
//         }).then(resp2 => {
//             console.log(resp2.body.result._id);
//             window.location.pathname = "/editor/"+ resp2.body.result._id

//         })
//     })
//  //  tkn = localStorage.getItem('jwt');
//  //console.log(tkn);
    
    
// })








    


    


