/// <reference types="Cypress" />

describe('About page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('loads about page', () => {
    cy.getTestElement('headline').then((el) => {
      expect(el).to.have.text(`Hey, I'm Asmin Bhujel`);
    });
  });

  it('displays filters', () => {
    cy.getTestElement('filters');
  });

});
