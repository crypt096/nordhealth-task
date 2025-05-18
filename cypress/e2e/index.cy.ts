describe('Index page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays the welcome message', () => {
    cy.contains('h1', 'Welcome to NordHealth Product').should('be.visible');
  });

  it('displays the intro paragraph', () => {
    cy.contains(
      'Software we design and build enables healthcare professionals to save time, deliver better care, and grow their business.'
    ).should('be.visible');
  });

  it('displays the Get Started button', () => {
    cy.contains('provet-button', 'Get Started').should('exist');
  });

  it('navigates to the signup page when clicking the button', () => {
    cy.contains('provet-button', 'Get Started').click();
    cy.url().should('include', '/signup');
  });
});
