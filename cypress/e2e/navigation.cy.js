describe("Navigation Tests", () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit("/");
  });

  it("should navigate to the Home page when clicking on Home", () => {
    // Click on the Home menu item
    cy.get("#homePage").click();

    // Verify that we're on the Home page by checking for the home page content
    cy.get('[data-cy="header"]').should("contain", "Study Night");
    cy.get(".homeContainer").should("exist");
  });

  it("should navigate to the About page when clicking on About", () => {
    // Click on the About menu item
    cy.get("#aboutPage").click();

    // Verify that we're on the About page by checking for the about page content
    cy.get(".aboutContainer").should("exist");
    cy.get(".textContainer").should("exist");
  });

  it("should navigate to the Card Sets page when clicking on Card Sets", () => {
    // Click on the Card Sets menu item
    cy.get("#cardSetPage").click();

    // Verify that we're on the Card Sets page by checking for the card sets content
    cy.get('[data-cy="set_form"]').should("exist");
  });
});
