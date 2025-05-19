describe('Success page', () => {
  const fakeEmail = 'test@example.com';

  beforeEach(() => {
    cy.visit('http://localhost:3000/success', {
      onBeforeLoad(win) {
        win.localStorage.setItem('signup-data', JSON.stringify({ email: fakeEmail }));
      },
    });
  });

  it('displays the success banner with email', () => {
    cy.contains('Account Created Successfully').should('be.visible');
    cy.contains(`Account created for email (${fakeEmail})`).should('be.visible');
  });

  it('shows the Sign out button', () => {
    cy.contains('provet-button', 'Sign out').should('be.visible');
  });

  it('clears localStorage and redirects to /signup on sign out', () => {
    cy.contains('provet-button', 'Sign out').click();
    cy.url().should('include', '/signup');
    cy.window().then(win => {
      expect(win.localStorage.getItem('signup-data')).to.be.null;
    });
  });
});
