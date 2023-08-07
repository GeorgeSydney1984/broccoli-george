const baseUrl = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth'

describe("Page: Home", () => {
  it("Open home page", () => {
    cy.visit("http://localhost:3000/home");
  })

  it("Click Invite button should popup a modal", () => {
    cy.visit("http://localhost:3000/home");
    cy.get(".page-content").find("button").click();
    cy.contains("Request an invite")
  })

  it("Show error message when click send without fullfill fields", () => {
    cy.visit("http://localhost:3000/home");
    cy.get(".page-content").find("button").click();
    cy.contains("Request an invite");
    cy.get(".modal-container").find("button[type=submit]").click();
    cy.contains("Please fill all required fields");
  })

  it("Show confirm modal when send valid invite form data", () => {
    cy.intercept({
      method: 'POST',
      url: baseUrl,
    }, { statusCode: 200 });

    cy.visit("http://localhost:3000/home");
    cy.get(".page-content").find("button").click();
    cy.contains("Request an invite");
    cy.get(".modal-container").find("input[type=text]").type("george");
    cy.get(".modal-container").find("input[type=email]").eq(0).type("george@test.com");
    cy.get(".modal-container").find("input[type=email]").eq(1).type("george@test.com");
    cy.get(".modal-container").find("button[type=submit]").click();
    cy.get(".modal-container").contains("All Done!")
  })

  it("Show error message when api return 400 error", () => {
    cy.intercept({
      method: 'POST',
      url: baseUrl,
    }, { statusCode: 400, body: { errorMessage: "Email is already in use" } });

    cy.visit("http://localhost:3000/home");
    cy.get(".page-content").find("button").click();
    cy.contains("Request an invite");
    cy.get(".modal-container").find("input[type=text]").type("usedemail");
    cy.get(".modal-container").find("input[type=email]").eq(0).type("usedemail@airwallex.com");
    cy.get(".modal-container").find("input[type=email]").eq(1).type("usedemail@airwallex.com");
    cy.get(".modal-container").find("button[type=submit]").click();
    cy.get(".modal-container").contains("Email is already in use");
  })
})