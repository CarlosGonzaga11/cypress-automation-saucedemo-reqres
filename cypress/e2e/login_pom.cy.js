import loginPage from "../support/pages/LoginPage";

describe("Testes de Login utilizando Page Object Model (POM)", () => {
  it("Deve realizar login com sucesso usando a LoginPage", () => {
    loginPage.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory.html");
  });

  it("Deve exibir mensagem de erro ao inserir credenciais inválidas", () => {
    loginPage.login("user_invalid", "wrong_password");

    loginPage.errorMessage
      .should("be.visible")
      .should("contain", "Username and password do not match");
  });
});