describe('Layout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('renders the header with title and user controls', () => {
    cy.get('provet-header').should('exist');
    cy.contains('h1', 'NordHealth Task').should('be.visible');

    cy.get('provet-header > provet-stack > provet-button').should('exist');

    cy.get('provet-dropdown').should('not.exist');
  });

  it('renders the footer with GitHub button and copyright', () => {
    cy.get('provet-footer').should('exist');

    cy.get('provet-footer > provet-stack > provet-button')
      .shadow()
      .find('a')
      .should('have.attr', 'href', 'https://github.com/crypt096/nordhealth-task')
      .should('have.attr', 'target', '_blank');

    cy.get('provet-footer').contains('© 2025 Aleksandar Cvjetan').should('be.visible');
  });

  it('toggles theme when ThemeToggle is clicked', () => {
    cy.window().then((win) => {
      const initialMode = win.localStorage.getItem('color-mode');

      cy.get('provet-header > provet-stack > provet-button').click();

      cy.wait(100);

      cy.window().then((winAfter) => {
        const newMode = winAfter.localStorage.getItem('color-mode');
        expect(newMode).to.not.equal(initialMode);
      });
    });
  });

});
