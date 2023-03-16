export class MobilePhoneReplenishment {
  typePhoneNumber(phoneNumber) {
    cy.get('[data-qa-node="phone-number"]').type(phoneNumber);
  }

  clearAmount() {
    cy.get('[data-qa-node="amount"]').clear();
  }

  typeFirstNameAndLastName(firstName, lastName) {
    cy.get('[data-qa-node="firstNamedebitSource"]')
      .type(firstName)
      .get('[data-qa-node="lastNamedebitSource"]')
      .type(lastName);
  }

  checkDebitCard(debitCard) {
    cy.get('[data-qa-node="card"]').should("have.text", debitCard);
  }

  checkDebitAmount(debitAmount) {
    cy.get('[data-qa-node="amount"]').should("have.text", debitAmount);
  }

  checkDebitAmountAndCommission(debitCommission) {
    cy.get('[data-qa-node="commission"]')
      .eq(1)
      .should("contain.text", debitCommission);
  }

  checkPaymentCurrency(paymentCurrency) {
    cy.get('[data-qa-node="commission-currency"]').should(
      "contain.text",
      paymentCurrency
    );
  }
}

export const mobileReplenishment = new MobilePhoneReplenishment();
