# 🧪 Cypress Automation Framework - SauceDemo & ReqRes API

Framework de automação de testes E2E e de API desenvolvidos com **Cypress**, estruturado com o padrão de arquitetura **Page Object Model (POM)** e integrado a uma pipeline de **CI/CD** com **GitHub Actions**.

---

## 🎯 Objetivo do Projeto
Demonstrar a aplicação de boas práticas de Engenharia de QA, cobrindo o fluxo crítico de e-commerce na interface gráfica (**SauceDemo**) e a validação de contratos e endpoints REST (**ReqRes API**).

---

## 🏛️ Arquitetura & Boas Práticas

- **Page Object Model (POM):** Encapsulamento de seletores CSS/data-test e ações de tela (`LoginPage`, `InventoryPage`, `CheckoutPage`) promovendo reutilização de código e facilidade de manutenção (Princípio DRY).
- **Validações Defensivas:** Métodos de formulário adaptados para suporte a cenários de testes negativos sem quebra de execução nativa do Cypress.
- **CI/CD Integrado:** Execução automatizada da suíte inteira em ambiente *Headless* (Linux) via **GitHub Actions** a cada `push` ou `pull request`.
- **Organização Modular:** Separação clara entre testes de UI (`cypress/e2e/`) e cenários de backend/API.

---

## 📊 Plano de Testes & Matriz de Cobertura

Os cenários foram mapeados e priorizados de acordo com o impacto no negócio (Golden Path vs. Tratas de Exceção):

| Prioridade | Módulo | Cenário de Teste | Tipo | Status |
| :---: | :--- | :--- | :---: | :---: |
| **P0 (Crítico)** | Autenticação | Login com credenciais válidas (`standard_user`) | E2E |  Automated |
| **P0 (Crítico)** | Checkout | Realizar fluxo completo de compra de produto | E2E |  Automated |
| **P1 (Alto)** | Autenticação | Validar erro ao tentar login com usuário bloqueado | E2E / Negativo |  Automated |
| **P1 (Alto)** | Checkout | Validar erro ao tentar avançar sem **First Name** | E2E / Negativo |  Automated |
| **P1 (Alto)** | Checkout | Validar erro ao tentar avançar sem **Last Name** | E2E / Negativo |  Automated |
| **P1 (Alto)** | Checkout | Validar erro ao tentar avançar sem **Postal Code** | E2E / Negativo |  Automated |
| **P1 (Alto)** | API (ReqRes) | Validar contrato de requisição e resposta REST | API |  Automated |
| **P2 (Médio)** | Inventário | Adicionar e remover produtos do carrinho | E2E | ⏳ Planejado |

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)
- [Git](https://git-scm.com/) instalado

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/CarlosGonzaga11/cypress-automation-saucedemo-reqres.git](https://github.com/CarlosGonzaga11/cypress-automation-saucedemo-reqres.git)
   cd cypress-automation-saucedemo-reqres
