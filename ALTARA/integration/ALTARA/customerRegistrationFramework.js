///<reference types="cypress"/>
import  logingpage from '../pageObjects/logingpage'
import  portalspage from '../pageObjects/portals'
import  dsaportal from '../pageObjects/dsaportal'
import  regpage from '../pageObjects/regpage'

describe('my first test', function()
{

    before(function () {

        cy.fixture('example').then(function(data)
        {
            this.data=data

        })
    })
    it('Register customer',function(){
        const logingPage = new logingpage()
        const portalsPage = new portalspage()
        const DsaPortal = new dsaportal()
        const RegPage = new regpage()
        cy.visit(Cypress.env('url'))
        cy.wait(2000)
        logingPage.getemail().type(this.data.userid)
        logingPage. getPassword().type(this.data.password)
        logingPage. loginbtn().click()
        cy.wait(1000)
        portalsPage.dsaportal().click()
        DsaPortal.customerregmodule().click()
        RegPage.firstname().type(this.data.firstname)
        RegPage.middlename().type(this.data.middlename)
        RegPage.lastname().type(this.data.lastname)
        
        RegPage.customerphone().type(this.data.customerphone)
        RegPage.customerEmail().type(this.data.customeremail)
        
       
       
       
        
        
        
        //cy.wait(1000)
       
        
        
        RegPage.dateselect().type(this.data.dateofbirth)
        RegPage.maritalstatus().click()
        RegPage.selectmale().click()
        RegPage.levelofeducation().click({multiple:true})
        RegPage.nextbutton().click()
        RegPage.streetname().type(this.data.streetname)
        RegPage.customerhouseno().type(this.data.customerhouseno)
        RegPage.customernearestbstop().type(this.data.customernearbstop)
        RegPage.customerarea().type(this.data.customerarea)
        RegPage.customercity().type(this.data.customercity)
        RegPage.customerstate().select(this.data.customerstate)
        RegPage.customerdescribe().type(this.data.customerdescribe)
        RegPage.nextbutton2().click()
        RegPage.durationofroom().type(this.data.durationofrooms)
        RegPage.peopleinhouse().type(this.data.peopleinhouse)
        RegPage.dependants().type(this.data.dependants)
        RegPage.numberworking().type(this.data.numberworking)
        RegPage.customerFromTime().type(this.data.customerfromtime)
        RegPage.customertotime().type(this.data.customerfromtime)
        RegPage.typeofhome().click()
        RegPage.numberofroom().click()
        RegPage.nextofkinfirstname().type(this.data.nextofkinfirst)
        RegPage.nextofkinmiddle().type(this.data.nextofkinmiddle)
        RegPage.nextofkinlastname().type(this.data.nextofkinlast)
        RegPage.nextofkinphoenumber().type(this.data.nextofkinno)
        RegPage.nextbutton3().click()
        RegPage.employmentstatus().select(this.data.employmentstatus)
        RegPage.civilservant().click()
        RegPage.kekenapepe().click()
        RegPage.businessphone().type(this.data.businessphone)
        RegPage.companyname().type(this.data.companyname)
        RegPage.currentsalary().type(this.data.currentsalary)
        RegPage.position().type(this.data.position)
        RegPage.modeofsalary().click()
        RegPage.paymentperiod().click()
        RegPage.workduration().select(this.data.nextofkinduration)
        RegPage.monday().click()
        RegPage.Tuesday().click()
        RegPage.wednesday().click()
        RegPage.officestreet().type(this.data.officestreet)
         RegPage.officebuilno().type(this.data.officebuilno)
         RegPage.officenearbstop().type(this.data.officenearbstop)
           RegPage.officearea().type(this.data.officearea)
           RegPage.officecity().type(this.data.officecity)
           RegPage.officestate().select(this.data.customerstate)
           RegPage.officephone().type(this.data.officephone)
           RegPage.officetimefrom().type(this.data.customerfromtime)
           RegPage.officetimeto().type(this.data.customerfromtime)
            RegPage.officedescrib().type(this.data.officedescrib)
            RegPage.registerbtn().click()
        
        
       
        
        
        
        
        //RegPage.numberofchildren().type(this.data.numberofchildren)
        /*cy.wait(1000)
        
        
        
        RegPage.otherinstitutions().click()
        
        
        
        
        
        

       
        cy.wait(1000)
        
        RegPage.nextofkingender().click()
        
        RegPage.nextofkinduration().select(this.data.nextofkinduration)
        RegPage.nextofkinrel().click()
        RegPage.workguarant().check()
        cy.wait(1000)
        RegPage.workguaranfirst().type(this.data.workguarantfirst)
        RegPage.workguaranmiddle().type(this.data.workguarantmid)
        RegPage.workguaranlast().type(this.data.workguarantlast)
        RegPage.workguaranrel().click({multiple:true})
        RegPage.workguaransex().click()
        RegPage.guaranstreetname().type(this.data.guaranstreetname)
        RegPage.guaranofficebuild().type(this.data.guaranofficebuild)
        RegPage.guarannearbstop().type(this.data.guarannearbstop)
        RegPage.workguaranarea().type(this.data.workguaranarea)
        RegPage.workguarancity().type(this.data.workguarancity)
        RegPage.workguaranstate().select(this.data.customerstate)
        RegPage.workguaranphone().type(this.data.workguaranphone)
        RegPage.workguarandur().select(this.data.nextofkinduration)
        RegPage.nextofkindescrip().type(this.data.nextofkindescription)
        RegPage.personalguaran().check()
        RegPage.personalguaranfirst().type(this.data.personalguaranfirst)
        RegPage.personalguaranmiddle().type(this.data.personalguaranmiddle)
        RegPage.personalguaranlast().type(this.data.personalguaranlast)
        RegPage.personalguaranrel().click()
        RegPage.personalguaransex().click()
        RegPage.personalstreetname().type(this.data.personalstreetname)
        RegPage.personalbuildno().type(this.data.personalbuildno)
        RegPage.personalnearnstop().type(this.data.personalnearnstop)
        RegPage.personalarea().type(this.data.personalarea)
        RegPage.personalcity().type(this.data.personalcity)
        RegPage.personalstate().select(this.data.customerstate)
        RegPage.personalguaranphone().type(this.data.personalguaranphone)
        RegPage.personaldur().select(this.data.nextofkinduration)
        RegPage.personaldescr().type(this.data.personaldescr)
        RegPage.otherneed().type(this.data.otherneed)
        //RegPage.needfor().type(this.data.needfor)
       
        RegPage.firstname().type(this.data.firstname)*/
         
        
        



       




    })
    
    
}

)