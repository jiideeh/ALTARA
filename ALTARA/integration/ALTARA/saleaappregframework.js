///<reference types="cypress"/>
import  salesApp from '../pageObjects/salesapp'
describe('my first test', function()
{

    before(function () {

        cy.fixture('example').then(function(data)
        {
            this.data=data

        })
    })
    it('Register customer',function(){
        const salesAppselect = new salesApp()
        cy.visit(Cypress.env('dsa'))
        salesAppselect.signinbtn().click()
        salesAppselect.staffid().type(this.data.userid)
        salesAppselect.password().type(this.data.password)
        salesAppselect.signin().click()
        salesAppselect.close().click()
        salesAppselect.registercustomer().click()
        salesAppselect.customername().type(this.data.cusname)
        salesAppselect.prospectemail().type(this.data.prospectemail)
        salesAppselect.prospectnumber().type(this.data.prospectnumber)
        salesAppselect.prospectemploystatus().select(this.data.prospectemploystatus)
        salesAppselect.submitbtn().click()
        salesAppselect.ok().click()
        salesAppselect.viewlist().click()

    })
    
    
}

)