Cypress.Commands.add(
    'login', (username, password) => {
    if (username !== undefined && username !== null && username !== '') {
        cy.get('[data-test="username"]').type(username);
    }
    if (password !== undefined && password !== null && password !== '') {
        cy.get('[data-test="password"]').type(password);
    }
    cy.get('[data-test="login-button"]').click();
});