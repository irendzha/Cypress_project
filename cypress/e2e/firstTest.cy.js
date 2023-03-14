/// <reference types="Cypress" />

// describe("Mobile phone replenishment", () => {
//     context("Replenishment less than the allowed amount", () => {
//         it("Show error: Minimum amount of the replenishment 1 UAH", () => {});
//     });
// });

// it("By ID", () => {
//   cy.visit("https://facebook.com/");
//   cy.get("#email"); //search by id is with '#'
// });

// it("By Class", () => {
//   cy.visit("https://docs.cypress.io/api/cypress-api/custom-commands");
//   cy.get(".searchBox_ZlJk"); //search by class is with '.'
// });

// it("By Tag", () => {
//   cy.visit("https://docs.cypress.io/api/cypress-api/custom-commands");
//   cy.get("nav"); // search by tag is without any symbols
// });

// it("By Tag value", () => {
//   cy.visit("https://facebook.com/");
//   cy.get('[name="pass"]'); // search by tag value
// });

// it("By Different Tag", () => {
//   cy.visit("https://facebook.com/");
//   cy.get('[data-testid="open-registration-form-button"][role="button"]'); // search by tag value
// });

// it("By Different Types", () => {
//   cy.visit("https://docs.cypress.io/guides/references/assertions");
//   cy.get('button[type="button"][title="Copy"]'); // search by types
// });

// it("By Contains Name", () => {
//   cy.visit("https://next.privat24.ua/");
//   cy.get('*[class^="card"]'); // search by contains name
// });

it("Using Get with Find and Eq", () => {
  cy.visit("https://next.privat24.ua/deposit/open");
  cy.get("tbody").find("td").find("div").find("button").eq(0);
});

it.only("Using Get with Find and Eq", () => {
  cy.viewport(1800, 700);
  cy.visit("https://docs.cypress.io/api/commands/and");
  cy.get("aside")
    .find("div")
    .find("nav")
    .find("ul")
    .find("li")
    .find("div")
    .find("a")
    .eq(0);
});
