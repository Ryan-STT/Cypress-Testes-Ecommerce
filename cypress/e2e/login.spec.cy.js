describe('Login', () => {
    beforeEach(() => {
        cy.fixture('users').as('users');
    });

    it('Deve permitir login com usuário válido', function() {
        cy.login(this.users.validUser.username, this.users.validUser.password);
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', 'Products');
    });

    it('Deve impedir login com usuário inválido', function() {
        cy.login(this.users.invalidUser.username, this.users.validUser.password);
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Deve impedir login com senha inválida', function() {
        cy.login(this.users.validUser.username, this.users.invalidPassword.password);
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Deve impedir login com usuário bloqueado', function() {
        cy.login(this.users.lockedUser.username, this.users.validUser.password);
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('Deve impedir login com campo de usuário vazio', function() {
        cy.login('',this.users.validUser.password);
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required');
    });

    it('Deve impedir login com campo de senha vazio', function() {
        cy.login(this.users.validUser.username,'');
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required');
    });
});