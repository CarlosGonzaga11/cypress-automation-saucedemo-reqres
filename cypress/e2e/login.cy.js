describe("Validação de mensagens de erro na tela de Login", () => {
  it("deve exibir mensagem de erro para senha incorreta", () => {
    cy.login("standard_user", "secret");

    cy.get('[data-test="error"]')
      .should("be.visible")
      .should(
        "contain",
        "Epic sadface: Username and password do not match any user in this service",
      );
  });
  it("deve exibir mensagem para usuario bloqueado", () => {
    cy.login("locked_out_user", "secret_sauce");
    cy.get('[data-test="error"]')
      .should("be.visible")
      .should("contain", "Epic sadface: Sorry, this user has been locked out.");
  });
  it("deve validar campos obrigatorios", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should("be.visible")
      .should("contain", "Epic sadface: Username is required");
  });
});
