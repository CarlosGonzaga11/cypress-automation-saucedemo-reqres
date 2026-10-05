class CheckoutPage {
  // 1. Elementos da etapa de dados do cliente (Step One)
  get firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }

  get lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }

  get postalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }

  get continueBtn() {
    return cy.get('[data-test="continue"]');
  }

  get finishBtn() {
    return cy.get('[data-test="finish"]');
  }

  get completeHeader() {
    return cy.get('[data-test="complete-header"]');
  }

  fillCheckoutForm(firstName, lastName, postalCode) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.postalCodeInput.type(postalCode);
    this.continueBtn.click();
  }

  finishCheckout() {
    this.finishBtn.click();
  }
}

export default new CheckoutPage();
