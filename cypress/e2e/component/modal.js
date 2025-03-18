import BasePage from '../basePage';

export class Modal extends BasePage {

    elements = {
        modal: () => cy.get('div[role="dialog"]'),
        modalTitle: () => cy.get('#example-modal-sizes-title-lg'),
        modalBody: () => cy.get('.modal-body'),
    }

    expectLoaded() {
        this.elements.modal().should('be.visible');
        this.elements.modalTitle().should('have.text', 'Thanks for submitting the form');
        this.elements.modalBody().should('be.visible');
    }
    checkModalData(rowNumb, text) {
        cy.get('table > tbody > tr:nth-child(' + rowNumb + ')').should('have.text', text);
    }

    checkModalIsNotExist() {
        this.elements.modal().should('not.exist');
    }

    closeModal(text) {
        this.clickSubmitButtonWithText(text);
        this.checkModalIsNotExist();
    }
}
export default new Modal();