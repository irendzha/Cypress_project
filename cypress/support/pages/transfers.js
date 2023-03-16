export class Transfers {
  typeDebitFirstNameAndLastName(firstName, lastName) {
    cy.get('[data-qa-node="firstNamedebitSource"]')
      .type(firstName)
      .get('[data-qa-node="lastNamedebitSource"]')
      .type(lastName);
  }

  typeReceiverCard(receiverCard) {
    cy.get('[data-qa-node="numberreceiver"]').type(receiverCard);
  }

  typeReceiverFirstNameAndLastName(firstName, lastName) {
    cy.get('[data-qa-node="firstNamereceiver"]')
      .type(firstName)
      .get('[data-qa-node="lastNamereceiver"]')
      .type(lastName);
  }

  typeComment(comment) {
    cy.get('[data-qa-node="toggle-comment"]')
      .click()
      .get('[data-qa-node="comment"]')
      .type(comment);
  }

  checkDebitAndReceiverCards(debitCard, receiverCard) {
    cy.get('[data-qa-node="payer-card"]')
      .should("have.text", debitCard)
      .get('[data-qa-node="receiver-card"]')
      .should("have.text", receiverCard);
  }

  checkDebitAmountAndTotalAmount(debitAmount, totalAmount) {
    cy.get('[data-qa-node="payer-amount"]')
      .should("have.text", debitAmount)
      .get('[data-qa-node="total"]')
      .should("have.text", totalAmount);
  }

  checkDebitCommission(commission) {
    cy.get('[data-qa-node="payer-currency"]').should("have.text", commission);
  }

  checkComment(comment) {
    cy.get('[data-qa-node="comment"]').should("have.text", comment);
  }
}

export const transfers = new Transfers();
