class regpage {
firstname() {
    return cy.get(':nth-child(7) > .form-control')
}
middlename() {
    return cy.get(':nth-child(8) > .form-control')
}
lastname() {
    return cy.get(':nth-child(9) > .form-control')
}
selectmale(){
    return cy.get(':nth-child(17) > :nth-child(2) > label')
}
customerphone() {
    return cy.get(':nth-child(11) > .form-control')
}
customerEmail() {
   return cy.get(':nth-child(12) > .form-control')
}
streetname(){
    return cy.get(':nth-child(2) > .form-control')

}
customerhouseno(){
    return cy.get(':nth-child(3) > .form-control')
}
customernearestbstop(){
    return cy.get(':nth-child(4) > .form-control')
}
customerarea(){
    return cy.get(':nth-child(6) > .form-control')
}
customercity(){
    return cy.get(':nth-child(7) > .form-control')
}
customerstate(){
    return cy.get('.custom-select')
}
customerdescribe(){
    return cy.get('.col-md-12 > .form-control')
}
dateselect(){
    return cy.get(':nth-child(13) > .form-control')
}
maritalstatus(){
    return cy.get(':nth-child(15) > :nth-child(2) > label')
}
typeofhome(){
    return cy.get(':nth-child(9) > :nth-child(2) > label')
}
numberofroom(){
    return cy.get(':nth-child(10) > :nth-child(2) > label')
}
durationofroom(){
    return cy.get(':nth-child(1) > .form-control')
}
peopleinhouse() {
    return cy.get(':nth-child(1) > :nth-child(2) > .form-control')
}
numberworking(){
    return cy.get(':nth-child(5) > .form-control')
}
dependants(){
    return cy.get(':nth-child(3) > .form-control')
}
numberofchildren(){
    return cy.get(':nth-child(14) > .form-control')
}
nextbutton(){
    return cy.get('.step-button-next')
}
nextbutton2(){
    return cy.get('.step-button-next')
}
nextbutton3(){
    return cy.get('.step-button-next')
}
levelofeducation(){
    return cy.get('.col-md-8 > :nth-child(6) > label')
}
customerFromTime(){
    return cy.get(':nth-child(6) > .form-control')
}
customertotime(){
    return cy.get(':nth-child(7) > .form-control')
}
otherinstitutions(){
    return cy.get('.form-group.col-6 > :nth-child(3) > label')
}employmentstatus(){
    return cy.get('.custom-select')
}
civilservant(){
    return cy.get('[data-id="2"]')
}
kekenapepe(){
    return cy.get('[data-name="Keke Napep"]')
}
nextofkinfirstname(){
    return cy.get(':nth-child(13) > .form-control')
}
nextofkinmiddle(){
    return cy.get(':nth-child(14) > .form-control')
}
nextofkinlastname(){
    return cy.get(':nth-child(16) > .form-control')
}
nextofkingender(){
    return cy.get(':nth-child(36) > :nth-child(2) > label')
}
nextofkinphoenumber(){
    return cy.get(':nth-child(17) > .form-control')
}
nextofkinduration(){
    return cy.get(':nth-child(38) > .custom-select')
}
nextofkinrel(){
    return cy.get(':nth-child(40) > :nth-child(2) > label')
}
workguarant(){
    return cy.get(':nth-child(6) > .form-check-input')
}
workguaranfirst(){
    return cy.get(':nth-child(7) > :nth-child(1) > .form-control')
}
workguaranmiddle(){
    return cy.get(':nth-child(7) > :nth-child(2) > .form-control')
}
workguaranlast(){
    return cy.get(':nth-child(7) > :nth-child(3) > .form-control')
}
workguaranrel(){
    return cy.get('.col-md-9 > :nth-child(2) > label')
}
workguaransex(){
    return cy.get('.col-sm-6 > :nth-child(2) > label')
}
guaranstreetname(){
    return cy.get(':nth-child(7) > :nth-child(9) > .form-control')
}
guaranofficebuild(){
    return cy.get(':nth-child(7) > :nth-child(10) > .form-control')
}
guarannearbstop(){
    return cy.get(':nth-child(7) > :nth-child(11) > .form-control')
}
workguaranarea(){
    return cy.get(':nth-child(7) > :nth-child(13) > .form-control')
}
workguarancity(){
    return cy.get(':nth-child(7) > :nth-child(14) > .form-control')
}
workguaranstate(){
    return cy.get(':nth-child(15) > .custom-select')
}
workguaranphone() {
    return cy.get(':nth-child(7) > :nth-child(17) > .form-control')
}
workguarandur(){
    return cy.get(':nth-child(18) > .custom-select')
}
nextofkindescrip(){
    return cy.get(':nth-child(7) > :nth-child(19) > .form-control')
}
personalguaran(){
    return cy.get(':nth-child(8) > .form-check-input')
}
personalguaranfirst(){
    return cy.get(':nth-child(9) > :nth-child(1) > .form-control')
}
personalguaranmiddle(){
    return cy.get(':nth-child(9) > :nth-child(2) > .form-control')
}
personalguaranlast(){
    return cy.get(':nth-child(9) > :nth-child(3) > .form-control')
}
personalguaranrel(){
    return cy.get(':nth-child(9) > .col-md-9 > :nth-child(2) > label')
}
personalguaransex(){
   return cy.get(':nth-child(9) > .col-sm-6 > :nth-child(2) > label')
}
personalstreetname(){
    return cy.get(':nth-child(9) > :nth-child(9) > .form-control')
}
personalbuildno(){
    return cy.get(':nth-child(9) > :nth-child(10) > .form-control')

}
personalnearnstop(){
    return cy.get(':nth-child(9) > :nth-child(11) > .form-control')
}
personalarea(){
    return cy.get(':nth-child(9) > :nth-child(13) > .form-control')
}
personalcity(){
    return cy.get(':nth-child(9) > :nth-child(14) > .form-control')
}
personalstate(){
    return cy.get(':nth-child(9) > :nth-child(15) > .custom-select')
}
personalguaranphone(){
    return cy.get(':nth-child(9) > :nth-child(17) > .form-control')
}
personaldur(){
    return cy.get(':nth-child(9) > :nth-child(18) > .custom-select')
}
personaldescr(){
    return cy.get(':nth-child(9) > :nth-child(19) > .form-control')
}
otherneed(){
    return cy.get(':nth-child(10) > :nth-child(2) > .form-control')
}
needfor(){
    return cy.get(':nth-child(10) > :nth-child(3) > .form-control')
}
registerbtn(){
    return cy.get('.step-button-submit')
}
businessphone(){
    return cy.get(':nth-child(1) > .form-control')
}
companyname(){
    return cy.get(':nth-child(2) > .form-control')
}
currentsalary(){
    return cy.get(':nth-child(4) > .form-control')
}
position(){
    return cy.get(':nth-child(5) > .form-control')
}
modeofsalary(){
    return cy.get(':nth-child(7) > :nth-child(3) > label')
}
paymentperiod(){
    return cy.get(':nth-child(8) > :nth-child(2) > label')
}
workduration(){
    return cy.get(':nth-child(3) > .col-md-3 > .custom-select')
}
monday(){
    return cy.get('.col-md-9 > :nth-child(3) > label')
}
Tuesday(){
    return cy.get('.col-md-9 > :nth-child(4) > label')
}
wednesday(){
    return cy.get('.col-md-9 > :nth-child(5) > label')
}
officestreet(){
    return cy.get(':nth-child(14) > .form-control')
}
officebuilno(){
    return cy.get(':nth-child(15) > .form-control')
}
officenearbstop(){
    return cy.get(':nth-child(16) > .form-control')
}
officearea(){
    return cy.get(':nth-child(18) > .form-control')
}
officecity(){
    return cy.get(':nth-child(19) > .form-control')
}
officestate(){
    return cy.get(':nth-child(20) > .custom-select')
}
officephone(){
    return cy.get(':nth-child(3) > :nth-child(22) > .form-control')
}
officetimefrom(){
    return cy.get(':nth-child(23) > .form-control')
}
officetimeto(){
    return cy.get(':nth-child(24) > .form-control')
}
officedescrib(){
    return cy.get('.col-md-12 > .form-control')
}

}
export default regpage;