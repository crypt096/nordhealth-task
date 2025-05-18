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
    const email = 'test@example.com';

    cy.get('provet-button').contains('Sign up').click();

    const emailField = cy.get('provet-input[label="Email"]').shadow().find('input')
    emailField.should('have.value', '');
    emailField.should('have.attr', 'aria-invalid', 'true');
  });
  //
  // it('shows validation errors for invalid input', () => {
  //   // Type into EmailField
  //   cy.get('provet-input[label="Email"] input').type('invalid-email');
  //   cy.get('provet-input[label="Password"] input').type('Password123!');
  //   cy.get('provet-input[label="Confirm password"] input').type('Different123!');
  //
  //   cy.get('provet-button').contains('Sign up').click();
  //
  //   cy.contains('Enter a valid email').should('exist');
  //   cy.contains('Passwords must match').should('exist');
  // });
  //
  // it('submits form and redirects to success page', () => {
  //   const email = 'test@example.com';
  //
  //   cy.get('provet-input[label="Email"] input').type(email);
  //   cy.get('provet-input[label="Password"] input').type('Password123!');
  //   cy.get('provet-input[label="Confirm password"] input').type('Password123!');
  //   cy.get('provet-checkbox').click();
  //
  //   cy.get('provet-button').contains('Sign up').click();
  //
  //   // Wait for redirect and check success
  //   cy.url({ timeout: 5000 }).should('include', '/success');
  //
  //   cy.window().then(win => {
  //     const data = JSON.parse(win.localStorage.getItem('signup-data') || '{}');
  //     expect(data.email).to.equal(email);
  //   });
  // });
});
