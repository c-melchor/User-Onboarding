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
      .click()
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
    cy.contains("on");
    // cy.contains("").should("exist");
  });
});
