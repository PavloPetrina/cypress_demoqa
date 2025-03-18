import Modal from "../component/modal";
import RegistrationFormPagePage from "../pages/registrationFormPage";

describe('QA demo Registration form test suit', () => {
  beforeEach(() => {
    cy.step('open a page');
    cy.visit('/');
    cy.step('Registration form is rendered');
    RegistrationFormPagePage.expectLoaded();
  })

  it('TC #1. User is not registerter without filling the required fields', () => {
    cy.step('Default fields state of the form');
    RegistrationFormPagePage.checkFormDefaultState('Male', 'Female', 'Other', '1', '2', '3');
    cy.step('Submit the form');
    RegistrationFormPagePage.clickSubmitButtonWithText('Submit');
    cy.step('Registration modal is not appeared');
    Modal.checkModalIsNotExist();
    cy.step('Expected result: User is not registered and is left on the registration page');
    RegistrationFormPagePage.checkPageUrl('/automation-practice-form');
    cy.step('Expected result: Registration form is rendered');
    RegistrationFormPagePage.expectLoaded();
  })

  it('TC #2. User is not registerter with invalid mobile number - letters instead of digits', () => {
    cy.step('Fill-out all required fields');
    RegistrationFormPagePage.filloutRequiredFields('John', 'Doe', 'Male', 'INVALID MOB', '25 Jul 1986');
    cy.step('Submit the form');
    RegistrationFormPagePage.clickSubmitButtonWithText('Submit');
    cy.step('Registration modal is not appeared');
    Modal.checkModalIsNotExist();
    cy.step('Expected result: User is not registered and is left on the registration page');
    RegistrationFormPagePage.checkPageUrl('/automation-practice-form');
    cy.step('Expected result: Registration form is rendered');
    RegistrationFormPagePage.expectLoaded();
  })
})
