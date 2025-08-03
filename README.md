# Automação de Testes Web com Cypress

Este repositório contém um projeto de automação de testes End-to-End (E2E) desenvolvido para o site de demonstração [Sauce Demo](https://www.saucedemo.com/). O objetivo principal é aplicar e demonstrar habilidades em testes automatizados de interface web.

## 🚀 Tecnologias e Ferramentas

*   **Linguagem:** JavaScript
*   **Framework de Teste:** Cypress
*   **Gerenciador de Pacotes:** NPM
*   **CI/CD:** GitHub Actions

## 🎯 Escopo dos Testes

O projeto cobrirá os seguintes fluxos de usuário:
- [ ] Testes de Login (válido, inválido, usuário bloqueado).
- [ ] Navegação pelo inventário de produtos.
- [ ] Adição e remoção de produtos do carrinho de compras.
- [ ] Fluxo completo de checkout.

## 📂 Estrutura de Pastas

O projeto segue a estrutura padrão gerada pelo Cypress, facilitando a organização dos testes, comandos e configurações.

/cypress
<br>
/e2e # Onde nossos arquivos de teste (spec.cy.js) ficarão
<br>
/fixtures # Massa de dados para os testes (ex: usuários, senhas)
<br>
/support # Comandos reutilizáveis e configurações globais
<br>
cypress.config.js # Arquivo principal de configuração do Cypress
<br>
package.json # Gerenciador de dependências do projeto

## ⚙️ Como Executar o Projeto

**Pré-requisitos:** [Node.js](https://nodejs.org/) e [Git](https://git-scm.com/) instalados.

1.  **Clone o repositório:**
    ```
    git clone https://github.com/seu-usuario/cypress-testes-ecommerce
    ```

2.  **Acesse a pasta do projeto:**
    ```
    cd cypress-testes-ecommerce
    ```

3.  **Instale as dependências:**
    ```
    npm install
    ```

4.  **Abra o Cypress Test Runner (interface gráfica):**
    ```
    npx cypress open
    ```
    *Com este comando, você poderá ver e executar os testes em tempo real.*
