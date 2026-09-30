describe("visitar a pagina", () => {
  it("deve ver se o o menu contem o texto comands", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("Commands").click();
    //  cy.get('.dropdown-toggle').contains('Commands').click()
  });
});

describe("visitar actions", () => {
  it("digitar um valor no campo input", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get("#email1").type("carlos@mail.com");
  });

  it("deve marcar uma checkbox", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get(".action-checkboxes > :nth-child(1) > label > input").check();
  });

  it("testar o envio de um form", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get(".action-form").within(() => {
      cy.get("#couponCode1").type("teste");
      cy.get(".btn-primary").click();
    });
  });
  it("test find and children", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get(".action-form").find("#couponCode1").type("kkkkkkaiaiai");
  });
});
