import InventoryPage from "../support/pages/InventoryPage";
import LoginPage from "../support/pages/LoginPage"

describe('Teste de Adição Produto ( POM )',()=>{
    it('deve validar a adição de um produto e badge carrinho exibir 1',()=>{
        LoginPage.login('standard_user','secret_sauce')
        cy.url().should("include", "/inventory.html");
        InventoryPage.addBackpackToCart()
        InventoryPage.goToCart()
    })
})