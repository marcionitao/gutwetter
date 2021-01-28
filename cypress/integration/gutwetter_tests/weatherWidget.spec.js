/* eslint-disable no-undef */
describe('GutWetter test UI', () => {
  it('Visits the app root url, if elements are visibles', () => {
    cy.visit('/');
    cy.contains('City').should('be.visible');
    cy.contains('Country').should('be.visible');
    cy.get('[data-cy=btn-search]').should('be.visible');
  });

  it('Add city and country', () => {
    cy.visit('/');
    cy.get('[data-cy=city]').type('London');
    cy.get('[data-cy=country]').type('UK');
    cy.get('[data-cy=btn-search]').click();
  });
});
