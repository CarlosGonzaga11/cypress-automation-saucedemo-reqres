import LoginPage from "../support/pages/LoginPage";
import InventoryPage from "../support/pages/InventoryPage";
import CheckoutPage from "../support/pages/checkoutPage";

describe("Fluxo de Checkout E2E com POM", () => {
  beforeEach(function () {
    cy.fixture("checkoutData").as("data");

    LoginPage.login("standard_user", "secret_sauce");
    InventoryPage.addBackpackToCart();
    InventoryPage.goToCart();
    InventoryPage.goToCheckout();
  });
  it("Deve realizar uma compra completa com sucesso", function () {
    CheckoutPage.fillCheckoutForm(
      this.data.validCustomer.firstName,
      this.data.validCustomer.lastName,
      this.data.validCustomer.postalCode,
    );

    CheckoutPage.finishCheckout();

    CheckoutPage.completeHeader
      .should("be.visible")
      .should("contain", "Thank you for your order!");
  });
  it("Deve exibir mensagem de erro ao tentar avançar checkout sem preencher primeiro nome", function () {
    CheckoutPage.fillCheckoutForm("", "", "");
    CheckoutPage.errorMessage
      .should("be.visible")
      .should("contain", this.data.errorMessages.firstNameRequired);
  });
  it("Deve exibir mensagem de erro ao tentar avançar checkout sem preencher SOBRENOME", function () {
    CheckoutPage.fillCheckoutForm(this.data.validCustomer.firstName, "", "");
    CheckoutPage.errorMessage
      .should("be.visible")
      .should("contain", this.data.errorMessages.lastNameRequired);
  });
  it("Deve exibir mensagem de erro ao tentar avançar checkout sem preencher CEP", function () {
    CheckoutPage.fillCheckoutForm(
      this.data.validCustomer.firstName,
      this.data.validCustomer.lastName,
      "",
    );
    CheckoutPage.errorMessage
      .should("be.visible")
      .should("contain", this.data.errorMessages.postalCodeRequired);
  });
});
