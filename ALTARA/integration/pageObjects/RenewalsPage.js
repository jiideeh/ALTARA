class Renewalspage {
    portalbutton(){
        return cy.get("a[href*='/dsa/renewal']")
    }
    resetbutton(){
        return cy.get("button[class*='my-auto p-3 btn rounded mx-2 bg-default w-100']")
    }
    producttype(){
        return cy.get("select[id='product']")
    }
    searchbtn(){
        return cy.get("button[class='my-auto p-3  btn rounded bg-default w-100']")
    }
    selectshowroom(){
        return cy.get("select[id='branch']")
    }
    downloadbtn(){
        return cy.get("button[class='reset-button p3 rounded bg-default w-100']")
    }
}
export default Renewalspage;