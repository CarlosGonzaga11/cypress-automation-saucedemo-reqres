# 🚀 Cypress QA Automation Project

Projeto de automação de testes End-to-End (E2E) e testes de API REST desenvolvidos durante o treinamento de QA Automation.

## 🛠️ Tecnologias Utilizadas
- **Cypress** (Automação UI e API)
- **JavaScript**
- **Node.js**

## 🧪 Cobertura de Testes
- **UI (SauceDemo):** Fluxo de login, mensagens de erro, validação de campos obrigatórios e fluxo de checkout E2E.
- **API (ReqRes):** Validação de contrato em requisições GET, criação de recursos via POST e atualização via PUT.
- **Mock & Intercept:** Simulação de respostas com `cy.intercept()` (status 200 e erro 500).
- **Arquitetura:** Custom Commands reutilizáveis (`cy.login()`).
