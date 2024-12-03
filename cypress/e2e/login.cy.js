describe('Tallykhata Login Page', () => {
  it('Login Page should be Visible', () => {
    cy.visit('/login');
    cy.contains('Log in').should('be.visible'); 
  });

    it('Successfully Login with Valid Credentials', () => {
      cy.visit('/login');
      cy.get('input[name="username"]').type('zahra');
      cy.get('input[name="password"]').type('zahra');
      cy.get('button[type="submit"]').click();
      cy.contains('Welcome, Zahra Zannat').should('be.visible');
    });
  

    it('Should Show an error for Invalid Username', () => {
      cy.visit('/login');
      cy.get('input[name="username"]').type('invalidusername');
      cy.get('input[name="password"]').type('zahra');
      cy.get('button[type="submit"]').click();
      cy.contains('User `invalidusername` does not exist').should('be.visible');
  });


    it('Should Show an error for Invalid Password', () => {
      cy.visit('/login');
      cy.get('input[name="username"]').type('zahra');
      cy.get('input[name="password"]').type('invalidpassword');
      cy.get('button[type="submit"]').click();
      cy.contains('Invalid user credentials').should('be.visible');
  })

})