import LoginPage from "../support/pages/LoginPage";
import InventoryPage from "../support/pages/InventoryPage";
import CheckoutPage from "../support/pages/checkoutPage";

describe("Fluxo de Checkout E2E com POM", () => {
  it("Deve realizar uma compra completa com sucesso", () => {
    LoginPage.login("standard_user", "secret_sauce");

    InventoryPage.addBackpackToCart();
    InventoryPage.goToCart();

    InventoryPage.goToCheckout();

    CheckoutPage.fillCheckoutForm("Carlos", "Gonzaga", "12345-678");

    CheckoutPage.finishCheckout();

    CheckoutPage.completeHeader
      .should("be.visible")
      .should("contain", "Thank you for your order!");
  });
});
