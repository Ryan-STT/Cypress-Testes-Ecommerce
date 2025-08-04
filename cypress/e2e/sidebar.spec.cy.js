describe('Sidebar', () => {
    beforeEach(function () {
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username, users.validUser.password);
            cy.sidebar();
        });
    });

    it('Verificar abrir e fechar', function () {
        cy.get('#react-burger-cross-btn').click();
    });

    it('Verificar quantidade de itens', function () {
        cy.get('.bm-item-list a').should('have.length', '4');
    });

    it('Verificar posição de itens', function () {
        cy.get('.bm-item-list a').eq(0).should('contain.text', 'All Items');
        cy.get('.bm-item-list a').eq(1).should('contain.text', 'About');
        cy.get('.bm-item-list a').eq(2).should('contain.text', 'Logout');
        cy.get('.bm-item-list a').eq(3).should('contain.text', 'Reset App State');
    });
});

describe('Função dos itens da Sidebar', () => {
    beforeEach(function () {
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username, users.validUser.password);
            cy.sidebar();
        });
    });

    it('Verificar All Items', function () {
        cy.get('#inventory_sidebar_link').click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get('.title').should('contain', 'Products');
    });

    // it('Verificar About', function () {
    //     cy.get('#about_sidebar_link').click();
    //     cy.url().should('eq', 'https://saucelabs.com');
    // });

    it('Verificar Logout', function () {
        cy.get('#logout_sidebar_link').click();
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.get('input[placeholder="Username"]').should('exist');
        cy.get('input[placeholder="Password"]').should('exist');
    });

    // it('Verificar Reset App State', function () {
    //     cy.get('#reset_sidebar_link').click();
    // });
});
