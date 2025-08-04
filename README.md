# Automação de Testes Web com Cypress

![Cypress CI](https://github.com/Ryan-STT/cypress-testes-ecommerce/actions/workflows/cypress.yml/badge.svg)

Este repositório contém um projeto de automação de testes End-to-End (E2E) desenvolvido para o site de demonstração [Sauce Demo](https://www.saucedemo.com/). O objetivo principal é aplicar e demonstrar habilidades em testes automatizados de interface web.

## 🚀 Tecnologias e Ferramentas

* **Linguagem:** JavaScript
* **Framework de Teste:** Cypress
* **Gerenciador de Pacotes:** NPM
* **CI/CD:** GitHub Actions

## 🎯 Escopo dos Testes

O projeto cobrirá os seguintes fluxos de usuário:
- [ ] Testes de Login (válido, inválido, usuário bloqueado).
- [ ] Navegação pelo inventário de produtos.
- [ ] Adição e remoção de produtos do carrinho de compras.
- [ ] Fluxo completo de checkout.

## 🛠️ Integração Contínua (CI/CD)

Este projeto utiliza GitHub Actions para rodar automaticamente todos os testes Cypress a cada push ou pull request na branch main. Isso garante que o código esteja sempre testado e validado de forma automatizada, aumentando a qualidade e a confiabilidade das entregas.

🚦 Como funciona  
Sempre que houver um commit na branch principal ou a abertura de um Pull Request:
- Checkout do código.
- Instalação das dependências com `npm ci`.
- Execução dos testes automatizados Cypress em ambiente Ubuntu.
- (Opcional) Upload de screenshots e vídeos dos testes em caso de falha.

📄 Configuração do Workflow  
O arquivo de configuração está localizado em:  
`.github/workflows/cypress.yml`

## 📂 Estrutura de Pastas

O projeto segue a estrutura padrão gerada pelo Cypress, facilitando a organização dos testes, comandos e configurações.

/cypress  
/e2e # Onde nossos arquivos de teste (spec.cy.js) ficarão  
/fixtures # Massa de dados para os testes (ex: usuários, senhas)  
/support # Comandos reutilizáveis e configurações globais  
cypress.config.js # Arquivo principal de configuração do Cypress  
package.json # Gerenciador de dependências do projeto

## ⚙️ Como Executar o Projeto

**Pré-requisitos:** [Node.js](https://nodejs.org/) e [Git](https://git-scm.com/) instalados.

1. **Clone o repositório:**
    ```
    git clone https://github.com/seu-usuario/cypress-testes-ecommerce
    ```

2. **Acesse a pasta do projeto:**
    ```
    cd cypress-testes-ecommerce
    ```

3. **Instale as dependências:**
    ```
    npm install
    ```

4. **Abra o Cypress Test Runner (interface gráfica):**
    ```
    npx cypress open
    ```
    *Com este comando, você poderá ver e executar os testes em tempo real.*
