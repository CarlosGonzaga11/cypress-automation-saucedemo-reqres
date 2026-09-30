describe("Cart shopp", () => {
  it("deve validar a adição de um item ao carrinho", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-badge"]')
      .should("be.visible")
      .should("have.text", "1");

    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should("include", "/cart.html");
    cy.get('[data-test="inventory-item-name"]').should(
      "contain",
      "Sauce Labs Backpack",
    );
  });
});

describe("adição dinamica de produtos sem seletores de teste", () => {
  it("DEVE ADICICONAR SAUCE LABS BOLT NO CARRINHO", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get(".inventory_list")
      .contains(".inventory_item_name", "Sauce Labs Bolt T-Shirt")
      .parents(".inventory_item")
      .find("button")
      .click();
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", "1");
  });
});
