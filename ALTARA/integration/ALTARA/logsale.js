//<reference types="cypress"/>
describe('my first test', function()
{

   
    it('select checkboxes',function(){
        cy.visit('https://play.altaracredit.com/')
        
        cy.wait(2000)
       cy.get("input[name*='Staff ID']").type('olaosebikan')
       cy.get(':nth-child(2) > .input-group > .form-control').type('password')
       cy.get('.btn').click()
       cy.wait(1000)
       cy.get(':nth-child(4) > .card > .card-body > .text-center > .fas').click()
       cy.wait(2000)
       cy.get(':nth-child(9) > .col-md-4 > .portal-card > :nth-child(2) > .second > .btn').click()

       cy.wait(1000)
       cy.get(':nth-child(1) > label').click()
      
       cy.get('.typeahead__search').type('130')

       cy.wait(2000)

       
       cy.get("div[class=*'col-md-6 col-12 float-left d-flex justify-content-around align-items-center']").click()
    })
})