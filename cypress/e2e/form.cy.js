describe("Form Tests", () => {
  beforeEach(() => {
    // Visit the Card Sets page before each test
    cy.visit("/");
    cy.get("#cardSetPage").click();
  });

  describe("Create Set Form", () => {
    it("should successfully submit a valid set title (happy path)", () => {
      // Make the form visible by clicking the toggle button if needed
      cy.get('[data-cy="set_form"]').then(($form) => {
        if ($form.hasClass("notVisible")) {
          cy.contains("button", /create/i).click();
        }
      });

      // Fill in the form with a valid title
      cy.get('[data-cy="set_form"]').within(() => {
        cy.get('input[name="titleInput"]').type("My Test Card Set");
        cy.get('input[type="submit"]').click();
      });

      // Verify that the new card set appears on the page
      cy.contains("My Test Card Set").should("exist");
    });

    it("should show an error when submitting an empty title (unhappy path)", () => {
      // Make the form visible by clicking the toggle button if needed
      cy.get('[data-cy="set_form"]').then(($form) => {
        if ($form.hasClass("notVisible")) {
          cy.contains("button", /create/i).click();
        }
      });

      // Submit the form without entering a title
      cy.get('[data-cy="set_form"]').within(() => {
        cy.get('input[type="submit"]').click();
      });

      // Verify that an error message is displayed
      cy.get(".error").should("exist");
      cy.get(".error").should("contain", "TITLE CANNOT BE EMPTY");
    });
  });

  describe("Add Card Form", () => {
    beforeEach(() => {
      // Create a card set first so we can add cards to it
      cy.get('[data-cy="set_form"]').then(($form) => {
        if ($form.hasClass("notVisible")) {
          cy.contains("button", /create/i).click();
        }
      });

      cy.get('[data-cy="set_form"]').within(() => {
        cy.get('input[name="titleInput"]').type("Test Set for Cards");
        cy.get('input[type="submit"]').click();
      });

      // Click on the newly created set to open it
      cy.contains("Test Set for Cards").click();
    });

    it("should successfully submit a valid card with term and description (happy path)", () => {
      // Fill in the card form with valid data
      cy.get('[data-cy="card_form"]').within(() => {
        cy.get('input[name="termInput"]').type("Test Term");
        cy.get('input[name="descriptionInput"]').type("Test Description");
        cy.get('input[type="submit"]').click();
      });

      // Verify that the card was created
      cy.contains("Test Term").should("exist");
    });

    it("should show an error when submitting an empty term (unhappy path)", () => {
      // Submit the form with only a description
      cy.get('[data-cy="card_form"]').within(() => {
        cy.get('input[name="descriptionInput"]').type("Test Description");
        cy.get('input[type="submit"]').click();
      });

      // Verify that an error message is displayed
      cy.get(".error").should("exist");
      cy.get(".error").should("contain", "TERM CANNOT BE EMPTY");
    });

    it("should show an error when submitting an empty description (unhappy path)", () => {
      // Submit the form with only a term
      cy.get('[data-cy="card_form"]').within(() => {
        cy.get('input[name="termInput"]').type("Test Term");
        cy.get('input[type="submit"]').click();
      });

      // Verify that an error message is displayed
      cy.get(".error").should("exist");
      cy.get(".error").should("contain", "DESCRIPTION CANNOT BE EMPTY");
    });

    it("should show an error when submitting both empty fields (unhappy path)", () => {
      // Submit the form without entering anything
      cy.get('[data-cy="card_form"]').within(() => {
        cy.get('input[type="submit"]').click();
      });

      // Verify that an error message is displayed
      cy.get(".error").should("exist");
      cy.get(".error").should("contain", "TERM AND DESCRIPTION CANNOT BE EMPTY");
    });
  });
});
