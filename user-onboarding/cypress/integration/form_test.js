describe("Form App", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("name check", () => {
    const nameInput = () => cy.get('input[name="name"]');
    nameInput()
      .type("Christina Melchor")
      .should("have.value", "Christina Melchor");
  });
});
