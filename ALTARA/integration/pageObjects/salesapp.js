class salesApp {
    signinbtn(){
        return cy.get('.mr-10')
    }
    staffid(){
        return cy.get(':nth-child(1) > .px-3')
    }
    password(){
        return cy.get(':nth-child(2) > .px-3')
    }
    signin(){
        return cy.get('.text-center > .altaraBlue')
    }
    close(){
        return cy.get(':nth-child(1) > .flex > .bg-red-500')
    }
    registercustomer(){
        return cy.get('[href="/admin/register"] > .items-center > .text-xs')
    }
    customername(){
        return cy.get(':nth-child(2) > :nth-child(1) > .relative > .px-3')
    }
    prospectemail(){
        return cy.get(':nth-child(2) > :nth-child(2) > .relative > .px-3')
    }
    prospectnumber(){
        return cy.get("input[name*='phone']")
    }
  prospectemploystatus(){
      return cy.get("select[name*='employment status']")
  }
  submitbtn(){
      return cy.get('.altaraBlue')
  }
  ok(){
      return cy.get('.swal2-confirm')
  }
  viewlist(){
      return cy.get('[href="/admin/dashboard"] > .items-center > .text-xs')
  }
}
export default salesApp;