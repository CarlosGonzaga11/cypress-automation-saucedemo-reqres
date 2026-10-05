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
  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  get completeHeader() {
    return cy.get('[data-test="complete-header"]');
  }

  fillCheckoutForm(firstName, lastName, postalCode) {
    if (firstName && firstName.length > 0) {
      this.firstNameInput.type(firstName);
    }

    if (lastName && lastName.length > 0) {
      this.lastNameInput.type(lastName);
    }

    if (postalCode && postalCode.length > 0) {
      this.postalCodeInput.type(postalCode);
    }

    this.continueBtn.click();
  }

  finishCheckout() {
    this.finishBtn.click();
  }
}

export default new CheckoutPage();
