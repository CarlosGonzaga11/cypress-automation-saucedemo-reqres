class inventoryPage {
  get addProductCart() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }
  get shoppCartBadge() {
    return cy.get('[data-test="shopping-cart-badge"]');
  }
  get shoppCartLink() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  get checkoutBtn() {
    return cy.get('[data-test="checkout"]');
  }

  goToCheckout() {
    this.checkoutBtn.click();
  }
  addBackpackToCart() {
    this.addProductCart.click();
  }
  goToCart() {
    this.shoppCartBadge.should("be.visible").should("have.text", "1");
    this.shoppCartLink.click();
  }
  inventoryPage() {
    this.addBackpackToCart();
    this.goToCart();
  }
}
export default new inventoryPage();
