//<reference types="cypress"/>
describe('my first test', function()
{

   
    it('Test collections page',function(){
        cy.visit('https://play.altaracredit.com/')
        
        cy.wait(2000)
       cy.get("input[name*='Staff ID']").type('olaosebikan')
       cy.get(':nth-child(2) > .input-group > .form-control').type('password')
       cy.get('.btn').click()
       cy.wait(1000)
       cy.get(':nth-child(2) > .card > .card-body > .text-center > .fas').click()
       cy.get(':nth-child(6) > .col-md-4 > .portal-card > :nth-child(2) > .second > .btn').click()



       cy.wait(3000)
       cy.get('.my-4.px-3 > :nth-child(2) > .custom-select').select('Challenge')
       cy.get(':nth-child(1) > .custom-select').select('Employee')

       cy.wait(2000)
       cy.get('.justify-content-between > .ml-5').click()
       cy.wait(4000)
       cy.get('.justify-content-between > .mr-5').click()
       cy.wait(2000)
       cy.get('.justify-content-between > :nth-child(2)').click()


    })
})