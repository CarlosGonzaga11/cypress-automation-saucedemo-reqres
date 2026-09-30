describe("Primeira API test", () => {
  it("deve retornar um user (GET)", () => {
    cy.request("GET", "https://reqres.in/api/users/2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property("id", 2);

      expect(response.body.data.email).to.eq("janet.weaver@reqres.in");
      expect(response.body.data.first_name).to.eq("Janet");
    });
  });
  it("deve enviar um body (POST) ", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "Carlos Gonzaga",
        job: "QA ",
      },
    }).then((response) => {
      console.log("response", response.body);
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("createdAt");
    });
  });
  it("deve atualizar dados do usuario (PUT) ", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: {
        name: "Carlos Gonzaga",
        job: "QA Senior",
      },
    }).then((response) => {
      console.log("response", response.body);
      expect(response.status).to.eq(200);
      expect(response.body.job).to.eq("QA Senior");
    });
  });
});
