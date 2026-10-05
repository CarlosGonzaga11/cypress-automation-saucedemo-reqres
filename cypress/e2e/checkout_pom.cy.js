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
  it("Deve exibir mensagem de erro ao tentar avançar checkout sem preencher primeiro nome",()=>{
    LoginPage.login("standard_user","secret_sauce")

    InventoryPage.addBackpackToCart()
    InventoryPage.goToCart()
    InventoryPage.goToCheckout()

    CheckoutPage.fillCheckoutForm("","","")
    CheckoutPage.errorMessage
      .should("be.visible")
      .should("contain", "Error: First Name is required");
  
  })
      it("Deve exibir mensagem de erro ao tentar avançar checkout sem preencher SOBRENOME",()=>{
    LoginPage.login("standard_user","secret_sauce")

    InventoryPage.addBackpackToCart()
    InventoryPage.goToCart()
    InventoryPage.goToCheckout()

    CheckoutPage.fillCheckoutForm("CARLOS","","1234567")
    CheckoutPage.errorMessage
      .should("be.visible")
      .should("contain", "Error: Last Name is required");
  
  })
    it("Deve exibir mensagem de erro ao tentar avançar checkout sem preencher CEP",()=>{
    LoginPage.login("standard_user","secret_sauce")

    InventoryPage.addBackpackToCart()
    InventoryPage.goToCart()
    InventoryPage.goToCheckout()

    CheckoutPage.fillCheckoutForm("CARLOS","GONZAGA","")
    CheckoutPage.errorMessage
      .should("be.visible")
      .should("contain", "Error: Postal Code is required");
  
  })
});
