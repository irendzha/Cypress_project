/// <reference types="Cypress" />

//type

it("type", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-node="phone-number"]')
    .type(112233344);
});

it("focus", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-node="amount"]')
    .focus();
});

it("blur", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-node="amount"]')
    .focus()
    .blur();
});

it("clear", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-node="amount"]')
    .type(999)
    .wait(2000)
    .clear();
});

it("submit", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('form[method="post"]')
    .submit();
});

it("click", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-value="manual"]')
    .click();
});

it("rightclick", () => {
  cy.visit("https://example.cypress.io/commands/actions")
    .contains("Right click to edit")
    .rightclick();
});

it("dblclick", () => {
  cy.visit(
    "https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html"
  )
    .contains("My Card")
    .dblclick();
});

it("check", () => {
  cy.visit("https://example.cypress.io/commands/actions")
    .get('input[value="checkbox1"]')
    .check()
    .get('input[value="radio1"]')
    .check();
});

it("uncheck1", () => {
  cy.visit("https://example.cypress.io/commands/actions")
    .get('input[value="checkbox1"]')
    .uncheck()
    .get('input[value="checkbox3"]')
    .uncheck();
});

it("uncheck2", () => {
  cy.visit("https://en.privatbank.ua/")
    .get("#switch-input")
    .check({ force: true })
    .wait(2000)
    .uncheck({ force: true });
});

it("select", () => {
  cy.visit("https://example.cypress.io/commands/actions")
    .get('[class="form-control action-select"]')
    .select("apples");
});

it("sescrollIntoViewlect", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get('[data-qa-node="lang"]')
    .wait(2000)
    .scrollIntoView();
});

it("scrollTo", () => {
  cy.visit("https://next.privat24.ua/mobile?lang=en").wait(2000);
  cy.scrollTo(0, 500);
});

it.only("trigger", () => {
  cy.visit("https://next.privat24.ua/?lang=en")
    .get('[title="Services"]')
    .trigger("mouseover");
});
