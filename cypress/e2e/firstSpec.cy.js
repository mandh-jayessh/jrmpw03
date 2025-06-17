describe("Fill Details",()=>{

    it("Fill Form",()=>{
        cy.visit("https://demo.automationtesting.in/Register.html");
        cy.get('[placeholder="First Name"]').type("Robert")
        cy.get('[placeholder="Last Name"]').type("Senior")

    })
})