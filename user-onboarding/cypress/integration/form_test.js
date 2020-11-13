describe("Form App", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  const submitButton = () => cy.get('button[type="submit"]');
  const termsBoxCheck = () => cy.get('input[name="terms"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');

  //name input test
  it("name check", () => {
    nameInput()
      .type("Christina Melchor")
      .should("have.value", "Christina Melchor");
  });

  //email input test
  it("email input check", () => {
    emailInput()
      .type("hi@me.com")
      .should("have.value", "hi@me.com");
  });

  //password input test
  it("password input check", () => {
    passwordInput()
      .type("password!")
      .should("have.value", "password!");
  });

  //terms checkbox test
  it("terms checkbox able to be checked", () => {
    termsBoxCheck()
      .check()
      .should("be.checked");
  });

  //submit button check
  it("submit button check", () => {
    nameInput().type("christina");
    emailInput().type("email@me.com");
    passwordInput().type("password");
    submitButton().click();
    cy.contains("christina").should("exist");
    cy.contains("email@me.com").should("exist");
    cy.contains("password").should("exist");
    termsBoxCheck()
      .check()
      .should("be.checked");
  });

  //check if inputs are empty
  //if no name, is there an error
  //if no email, is there an error
  //if no password > 5 is there an error
  //if terms not checked is there an error

  //   nameInput().should("not.be.empty");

  //validation of empty form
  it("check if form is empty", () => {
    nameInput()
      .type("another name")
      .should("have.value", "another name");
    emailInput()
      .type("email@me.com")
      .should("have.value", "email@me.com");
    passwordInput()
      .type("password")
      .should("have.value", "password");
    submitButton().click();
    nameInput().should("be.empty");
    emailInput().should("have.value", "");
    passwordInput().should("have.value", "");
  });
});
