/// <reference types="Cypress" />
import { mobileReplenishment } from "../support/pages/mobileReplenishment";
import { transfers } from "../support/pages/transfers";
import { basePage } from "../support/pages/basePage";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

it("Replenishment of Ukraine mobile phone number", () => {
  basePage.open("https://next.privat24.ua/mobile?lang=en");
  mobileReplenishment.typePhoneNumber("964567890");
  mobileReplenishment.clearAmount();
  basePage.typeAmount("1");
  basePage.typeDebitCardData("4552331448138217", "0524", "111");
  cy.wait(3000);
  mobileReplenishment.typeFirstNameAndLastName("TARAS", "SHEVCHENKO");
  cy.wait(3000);
  basePage.submitPayment();
  mobileReplenishment.checkDebitCard("4552 **** **** 8217");
  mobileReplenishment.checkDebitAmount("1\u00a0UAH");
  mobileReplenishment.checkDebitAmountAndCommission("2");
  mobileReplenishment.checkPaymentCurrency("UAH");

  // .get('[data-qa-node="phone-number"]')
  // .type("964567890")

  // .get('[data-qa-node="amount"]')
  // .clear()

  // .get('[data-qa-node="amount"]')
  // .type("1")

  // .get('[data-qa-node="numberdebitSource"]')
  // .type("4552331448138217")

  // .get('[data-qa-node="expiredebitSource"]')
  // .type("0524")

  // .get('[data-qa-node="cvvdebitSource"]')
  // .type("111")

  // .get('[data-qa-node="firstNamedebitSource"]')
  // .type("TARAS")

  // .get('[data-qa-node="lastNamedebitSource"]')
  // .type("SHEVCHENKO")

  // .get('[data-qa-node="submit"]')
  // .click()

  // cy.get('[data-qa-node="card"]')
  // .should("have.text", "4552 **** **** 8217")

  // cy.get('[data-qa-node="amount"]')
  // .should("have.text", "1\u00a0UAH")

  // .should("contain.text", "1")
  // .should("contain.text", "UAH")
  //   cy.get('[data-qa-node="commission"]')
  //     .eq(1)
  //     .should("contain.text", "2")

  //   cy.get('[data-qa-node="commission-currency"]').should("contain.text", "UAH");
  // .get('[data-qa-node="amount"]');
  // .invoke("text")
  // .then((text) => {
  //   // remove the space char
  //   expect(text.replace(/\u00a0/g, " ")).equal("1 UAH");
  // })
  // .get('[data-qa-node="amount"]')
  // .should("have.text", "1\u00a0UAH");
  // .get('[data-qa-node="commission"]')
  // .eq(1)
  // .should("have.text", "2");
});

it("Money transfer between foreign cards", () => {
  basePage.open("https://next.privat24.ua/money-transfer/card?lang=en");
  basePage.typeDebitCardData("4552331448138217", "0524", "111");
  transfers.typeDebitFirstNameAndLastName("Shayne", "McConnell");
  transfers.typeReceiverCard("5309233034765085");
  transfers.typeReceiverFirstNameAndLastName("Taras", "Shevchenko");
  basePage.typeAmount("500");
  transfers.typeComment("Cypress Test");
  cy.wait(3000);
  basePage.submitPayment();
  transfers.checkDebitAndReceiverCards(
    "4552 3314 4813 8217",
    "5309 2330 3476 5085"
  );
  transfers.checkDebitAmountAndTotalAmount(
    "500 UAH",
    "Total to debit\u00a0620.49\u00a0UAH"
  );
  transfers.checkDebitCommission("120.49 UAH");
  transfers.checkComment("Cypress Test");
  // .get('[data-qa-node="numberdebitSource"]')
  // .type("4552331448138217")
  // .get('[data-qa-node="expiredebitSource"]')
  // .type("0524")
  // .get('[data-qa-node="cvvdebitSource"]')
  // .type("111")

  // cy.get('[data-qa-node="firstNamedebitSource"]').type("Shayne");
  // cy.get('[data-qa-node="lastNamedebitSource"]').type("McConnell");

  // cy.get('[data-qa-node="numberreceiver"]').type("5309233034765085");

  // cy.get('[data-qa-node="firstNamereceiver"]').type("Taras");
  // cy.get('[data-qa-node="lastNamereceiver"]').type("Shevchenko");

  // cy.get('[data-qa-node="amount"]').type("500");

  // cy.get('[data-qa-node="toggle-comment"]').click();
  // cy.get('[data-qa-node="comment"]').type("Cypress Test");

  // cy.get('button[type="submit"]').click();

  // cy.get('[data-qa-node="payer-card"]')
  // .should("have.text", "4552 3314 4813 8217");

  // cy.get('[data-qa-node="receiver-card"]')
  // .should("have.text", "5309 2330 3476 5085");

  // cy.get('[data-qa-node="payer-amount"]').should("have.text", "500 UAH");
  // cy.get('[data-qa-node="total"]').should("have.text","Total to debit\u00a0620.49\u00a0UAH");

  // cy.get('[data-qa-node="payer-currency"]').should("have.text", "120.49 UAH");

  // cy.get('[data-qa-node="comment"]').should("have.text", "Cypress Test");
});

it("Example sending the GET request", () => {
  cy.request("https://next.privat24.ua").then((response) => {
    console.log(response);
  });
});

it.only("Example sending the POST request", () => {
  const requestBody = {
    action: "info",
    phone: "+380962616939",
    amount: 1,
    currency: "UAH",
    cardCvv: "111",
    cardExp: "0524",
    card: "4552331448138217",
    xref: "d724fdd972cc6437bb219e7d06ad1296",
    _: 1678976128612,
  };

  const headersData = {
    cookie:
      "_ga=GA1.2.436588987.1678795012; _gid=GA1.2.251687636.1678795012; pubkey=040dbfb361903a4bead1e75162246f30; fp=21; lfp=3/14/2023, 1:57:02 PM; pa=1678867614975.85770.8763406514303103next.privat24.ua0.5387709970486083+9",
  };

  cy.request({
    method: "POST",
    url: "https://next.privat24.ua/api/p24/pub/mobipay",
    body: requestBody,
    headers: headersData,
  }).then((response) => {
    console.log(response.body);
  });
});
