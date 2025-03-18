import Modal from "../component/modal";
import RegistrationFormPagePage from "../pages/registrationFormPage";

describe('QA demo Registration form test suit', () => {
  beforeEach(() => {
    cy.step('open a page');
    cy.visit('/');
    cy.step('Registration form is rendered');
    RegistrationFormPagePage.expectLoaded();
  })

  it('TC #1. User is succesfully registered only with required fields', () => {
    cy.step('Fill-out all required fields');
    RegistrationFormPagePage.filloutRequiredFields('John', 'Doe', 'Male', '1234567890', '25 Jul 1986');
    cy.step('Submit the form');
    RegistrationFormPagePage.clickSubmitButtonWithText('Submit');
    cy.step('Expected result: User is registered - registration modal is rendered and filled data is present');
    Modal.expectLoaded();
    Modal.checkModalData(1, 'Student NameJohn Doe');
    Modal.checkModalData(2, 'Student Email');
    Modal.checkModalData(3, 'GenderMale');
    Modal.checkModalData(4, 'Mobile1234567890');
    Modal.checkModalData(5, 'Date of Birth25 July,1986');
    Modal.checkModalData(6, 'Subjects');
    Modal.checkModalData(7, 'Hobbies');
    Modal.checkModalData(8, 'Picture');
    Modal.checkModalData(9, 'Address');
    Modal.checkModalData(10, 'State and City');
  });

  it('TC #2.  User is succesfully registered with required and optional fields', () => {
    cy.step('Fill-out all required and optional fields');
    RegistrationFormPagePage.filloutRequiredFields('John', 'Doe', 'Male', '1234567890', '25 Jul 1986');
    RegistrationFormPagePage.filloutOptionalFields('john@mail.com', 'Biology', 'English', '2', 'cat.jpg', 'Mexico, king str.25', 'NCR', 'Noida');
    cy.step('Submit the form');
    RegistrationFormPagePage.clickSubmitButtonWithText('Submit');
    cy.step('Expected result: User is registered - registration modal is rendered and filled data is present');
    Modal.expectLoaded();
    Modal.checkModalData(1, 'Student NameJohn Doe');
    Modal.checkModalData(2, 'Student Emailjohn@mail.com');
    Modal.checkModalData(3, 'GenderMale');
    Modal.checkModalData(4, 'Mobile1234567890');
    Modal.checkModalData(5, 'Date of Birth25 July,1986');
    Modal.checkModalData(6, 'SubjectsBiology, English');
    Modal.checkModalData(7, 'HobbiesReading');
    Modal.checkModalData(8, 'Picturecat.jpg');
    Modal.checkModalData(9, 'AddressMexico, king str.25');
    Modal.checkModalData(10, 'State and CityNCR Noida');
  });

})