
///<reference types="cypress"/>
import  logingpage from '../../../pageObjects/logingpage'
import  portalspage from '../../../pageObjects/portals'
import  dsaportal from '../../../pageObjects/dsaportal'
import  Renewals from '../../../pageObjects/renewalspage'
const logingPage = new logingpage()
const portalsPage = new portalspage()
const DsaPortal = new dsaportal()
const RenewalPage = new  Renewals()
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given('I login to the portal',function(){
    cy.visit(Cypress.env('url'))
        cy.wait(2000)
        logingPage.getemail().type(this.data.userid)
        logingPage. getPassword().type(this.data.password)
        logingPage. loginbtn().click()
        cy.wait(1000)

})
When('i enter collections portal',function(){
    portalsPage.dsaportal().click()
        RenewalPage.portalbutton().click()
        cy.wait(3000)
        RenewalPage.resetbutton().click()
        cy.pause()
    
})
And('filter by different criteria',function(){
    RenewalPage.producttype().select('cash')
    RenewalPage.searchbtn().click()
    cy.pause()
    RenewalPage.selectshowroon().select('Gate')
    RenewalPage.searchbtn().click()
    cy.pause()
    
})
Then('Export list',function(){
    RenewalPage.downloadbtn().click()
    
})