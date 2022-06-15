///<reference types="cypress"/>
import  logingpage from '../pageObjects/logingpage'
import  portalspage from '../pageObjects/portals'
import  dsaportal from '../pageObjects/dsaportal'
import  Renewals from '../pageObjects/renewalspage'
describe('my first test', function()
{

    before(function () {

        cy.fixture('data').then(function(data)
        
        {
            this.data=data

        })
    })
    it('Register customer',function(){
        const logingPage = new logingpage()
        const portalsPage = new portalspage()
        const DsaPortal = new dsaportal()
        const RenewalPage = new  Renewals()
        cy.visit(Cypress.env('url'))
        cy.wait(2000)
        logingPage.getemail().type(this.data.userid)
        logingPage. getPassword().type(this.data.password)
        logingPage. loginbtn().click()
        cy.wait(1000)
        portalsPage.dsaportal().click()
        RenewalPage.portalbutton().click()
        cy.wait(3000)
        RenewalPage.resetbutton().click()
        cy.pause()
        RenewalPage.producttype().select('cash')
        RenewalPage.searchbtn().click()
        cy.pause()
        RenewalPage.selectshowroom().select('Gate')
        RenewalPage.searchbtn().click()
        cy.pause()
        RenewalPage.downloadbtn().click()

    })
    
    
}

)