# 📝 Casos de Teste (Especificações BDD)

## Módulo: Autenticação (Login)

### Cenário: Login com credenciais válidas
  **Dado** que o usuário está na tela inicial de login do SauceDemo  
  **Quando** inserir o usuário "standard_user" e a senha "secret_sauce"  
  **E** clicar no botão "Login"  
  **Então** deve ser redirecionado para a página de inventário de produtos  

---

## Módulo: Checkout E2E

### Cenário: Realizar compra completa de um produto com sucesso
  **Dado** que o usuário autenticado adicionou o item "Sauce Labs Backpack" ao carrinho  
  **E** navegou até a tela de formulário de checkout  
  **Quando** preencher o formulário com dados válidos  
  **E** confirmar a compra na tela de revisão  
  **Então** o sistema deve exibir a mensagem de confirmação "Thank you for your order!"

### Cenário: Tentativa de checkout sem preencher o primeiro nome
  **Dado** que o usuário está na tela de formulário de checkout  
  **Quando** tentar avançar sem preencher o campo "First Name"  
  **Então** deve exibir a mensagem de erro "Error: First Name is required"

### Cenário: Tentativa de checkout sem preencher o sobrenome
  **Dado** que o usuário preencheu o "First Name" no formulário de checkout  
  **Quando** tentar avançar mantendo o campo "Last Name" em branco  
  **Então** deve exibir a mensagem de erro "Error: Last Name is required"

### Cenário: Tentativa de checkout sem preencher o CEP
  **Dado** que o usuário preencheu "First Name" e "Last Name" no formulário de checkout  
  **Quando** tentar avançar mantendo o campo "Postal Code" em branco  
  **Então** deve exibir a mensagem de erro "Error: Postal Code is required"