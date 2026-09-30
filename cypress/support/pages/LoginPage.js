class LoginPage { 
  get usernameInput() {
    return cy.get('[data-test="username"]');
  }

  get passwordInput() {
    return cy.get('[data-test="password"]');
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  fillUsername(username) {
    if (username) this.usernameInput.type(username);
  }

  fillPassword(password) {
    if (password) this.passwordInput.type(password);
  }

  clickLogin() {
    this.loginButton.click();
  }

  login(username, password) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();