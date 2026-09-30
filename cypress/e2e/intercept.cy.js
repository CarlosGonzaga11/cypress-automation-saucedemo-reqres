describe("", () => {
  it("deve usar interceptar requisição do navegador e retornar dados mockados", () => {
    cy.intercept("GET", "**/api/users/*", {
      statusCode: 200,
      body: {
        data: {
          first_name: "Carlos (MOCKED)",
          email: "mock@mail.com",
        },
      },
    }).as("getUserMock");

    cy.visit("https://reqres.in/");
    cy.window().then((win) => {
      win.fetch("https://reqres.in/api/users/2");
    });
    cy.wait("@getUserMock").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body.data.first_name).to.eq(
        "Carlos (MOCKED)",
      );
      expect(interception.response.body.data.email).to.eq("mock@mail.com");
    });
  });
  it("simulando internal error", () => {
    cy.intercept("GET", "**/api/users/2", {
      statusCode: 500,
      body: {
        message: "Internal Server Error",
      },
    }).as("getServerMock");

    cy.visit("https://reqres.in/");
    cy.window().then((win) => {
      win.fetch("https://reqres.in/api/users/2");
    });

    cy.wait("@getServerMock").then((intercept) => {
      expect(intercept.response.statusCode).to.eq(500);
    });
  });
});
