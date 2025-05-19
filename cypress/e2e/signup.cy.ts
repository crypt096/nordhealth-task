describe('Signup page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup');
  });

  it('renders all provet-input fields and sign up button', () => {
    cy.contains('Create an account').should('be.visible');

    cy.get('provet-input').should('have.length', 3);
    cy.get('provet-checkbox').should('exist');
    cy.get('provet-button').contains('Sign up').should('exist');
  });

  it('shows validation errors when submitting empty form', () => {
    cy.get('provet-button').contains('Sign up').click();

    const emailField = cy.get('#v-0-0').shadow().find('input');
    emailField.should('have.value', '');
    emailField.should('have.attr', 'aria-invalid', 'true');

    const passwordField = cy.get('#v-0-1').shadow().find('input');
    passwordField.should('have.value', '');
    passwordField.should('have.attr', 'aria-invalid', 'true');

    const confirmPasswordField = cy.get('#v-0-2').shadow().find('input');
    confirmPasswordField.should('have.value', '');
    confirmPasswordField.should('have.attr', 'aria-invalid', 'true');
  });

  it('successfully submits form with valid inputs and redirects', () => {
    const email = 'valid@example.com';
    const password = 'ValidPass123!';

    cy.get('#v-0-0').shadow().find('input').type(email);
    cy.get('#v-0-1').shadow().find('input').type(password);
    cy.get('#v-0-2').shadow().find('input').type(password);
    cy.get('provet-checkbox').shadow().find('input[type="checkbox"]').check({ force: true });
    cy.get('[variant="primary"]').click();
    cy.url({ timeout: 5000 }).should('include', '/success');

    cy.window().then(win => {
      const saved = JSON.parse(win.localStorage.getItem('signup-data') || '{}');
      expect(saved.email).to.equal(email);
    });
  });

  it('shows validation error when passwords do not match', () => {
    cy.get('#v-0-0').shadow().find('input').type('test@example.com');
    cy.get('#v-0-1').shadow().find('input').type('Password123!');
    cy.get('#v-0-2').shadow().find('input').type('DifferentPass456!');

    cy.get('[variant="primary"]').click();

    cy.get('#v-0-2').should('have.attr', 'error', 'Passwords must match');
  });

  it('shows loading state on submit', () => {
    const email = 'loading@example.com';
    const password = 'LoadingPass123!';

    cy.get('#v-0-0').shadow().find('input').type(email);
    cy.get('#v-0-1').shadow().find('input').type(password);
    cy.get('#v-0-2').shadow().find('input').type(password);

    cy.get('provet-checkbox').shadow().find('input[type="checkbox"]').check({ force: true });

    cy.window().then(win => {
      const originalSetTimeout = win.setTimeout;
      cy.stub(win, 'setTimeout').callsFake((cb, delay) => originalSetTimeout(cb, delay));
    });

    cy.get('provet-button').contains('Sign up').click();
    cy.get('[variant="primary"]').should('have.attr', 'loading');
  });
});
