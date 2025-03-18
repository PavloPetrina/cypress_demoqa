import BasePage from '../basePage';

export class RegistrationFormPagePage extends BasePage {

    elements = {
        form: () => cy.get('.practice-form-wrapper'),
        formName: () => cy.get('.practice-form-wrapper > h1'),
        formSubTitle: () => cy.get('.practice-form-wrapper > h5'),
        formFirstname: () => cy.get('#firstName'),
        formLastname: () => cy.get('#lastName'),
        formEmail: () => cy.get('#userEmail'),
        formMobile: () => cy.get('#userNumber'),
        formBirthDate: () => cy.get('#dateOfBirthInput'),
        formSubject: () => cy.get('#subjectsContainer'),
        formPicture: () => cy.get('.form-file'),
        formFileUploader: () => cy.get('#uploadPicture'),
        formCurrentAddress: () => cy.get('#currentAddress'),
        formStateSelect: () => cy.get('#state'),
        formCitySelect: () => cy.get('#city')
    }

    pagePath = '/automation-practice-form'

    expectLoaded() {
        this.elements.form().should('be.visible');
        this.elements.formName().should('have.text', 'Practice Form');
        this.elements.formSubTitle().should('have.text', 'Student Registration Form');
    }

    checkFormDefaultState(gender1, gender2, gender3, hobbie1, hobbie2, hobbie3) {
        this.elements.formFirstname().should('be.empty').should('have.attr', 'required');
        this.elements.formLastname().should('be.empty').should('have.attr', 'required');
        this.elements.formEmail().should('be.empty').should('not.have.attr', 'required');
        this.genderOption(gender1).should('not.be.checked').should('have.attr', 'required');
        this.genderOption(gender2).should('not.be.checked').should('have.attr', 'required');
        this.genderOption(gender3).should('not.be.checked').should('have.attr', 'required');
        this.elements.formMobile().should('be.empty').should('have.attr', 'required');
        this.elements.formBirthDate().invoke('val').should('match', /\b\d{2}\s[a-zA-Z]{3}\s\d{4}\b/);
        this.elements.formBirthDate().should('not.have.attr', 'required');
        this.elements.formSubject().invoke('text').should('be.empty');
        this.elements.formSubject().should('not.have.attr', 'required');
        this.hobbieOption(hobbie1).should('not.be.checked').should('not.have.attr', 'required');
        this.hobbieOption(hobbie2).should('not.be.checked').should('not.have.attr', 'required');
        this.hobbieOption(hobbie3).should('not.be.checked').should('not.have.attr', 'required');
        //this.elements.formPicture().should('contains.text', 'No file chosen'); //Not sure how to get file name
        this.elements.formFileUploader().should('not.have.attr', 'required');
        this.elements.formCurrentAddress().should('be.empty').should('not.have.attr', 'required');
        this.elements.formStateSelect().should('have.text', 'Select State').should('not.have.attr', 'required');
        this.elements.formCitySelect().should('have.text', 'Select City').should('not.have.attr', 'required');
        this.commonElements.submitButton().should('be.enabled');
    }

    fillFirstName(fName) {
        this.elements.formFirstname().type(fName);
        this.elements.formFirstname().should('have.value', fName);
    }

    fillLastName(lName) {
        this.elements.formLastname().type(lName);
        this.elements.formLastname().should('have.value', lName);
    }

    fillEmail(email) {
        this.elements.formEmail().type(email);
        this.elements.formEmail().should('have.value', email);
    }

    genderOption(gender) {
        const gen = cy.get('input[name="gender"][value="' + gender + '"]');
        return gen;
    }

    checkGenderOption(gender) {
        this.genderOption(gender).check({ force: true }).should('be.checked');
    }

    fillMobile(mob) {
        this.elements.formMobile().type(mob);
    }

    fillBirthDate(bd) {
        this.elements.formBirthDate().type('{selectAll}');
        this.elements.formBirthDate().type(bd);
    }

    selectSubject(subject) {
        this.elements.formSubject().type(subject);
        this.selectOptionFromTagsList(subject);
    }

    hobbieOption(hobbie) {
        const hob = cy.get('input[type="checkbox"][value="' + hobbie + '"]');
        return hob;
    }

    checkHobbieOption(hobbie) {
        this.hobbieOption(hobbie).check({ force: true }).should('be.checked');
    }

    uploadFile(file) {
        this.elements.formFileUploader().selectFile('cypress/fixtures/' + file);
    }

    fillCurrentAddress(address) {
        this.elements.formCurrentAddress().type(address);
        this.elements.formCurrentAddress().should('have.value', address);
    }

    selectState(state) {
        this.elements.formStateSelect().type(state);
        this.selectOptionFromDropdownMenu(state);
    }

    selectCity(city) {
        this.elements.formCitySelect().type(city);
        this.selectOptionFromDropdownMenu(city);
    }

    filloutRequiredFields(fName, lName, gender, mob, bd) {
        this.fillFirstName(fName);
        this.fillLastName(lName);
        this.checkGenderOption(gender);
        this.fillMobile(mob);
        this.fillBirthDate(bd);
    }

    filloutOptionalFields(email, subject1, subject2, hobbie, file, address, state, city) {
        this.fillEmail(email);
        this.selectSubject(subject1);
        this.selectSubject(subject2);
        this.checkHobbieOption(hobbie);
        this.uploadFile(file);
        this.fillCurrentAddress(address);
        this.selectState(state);
        this.selectCity(city);
    }

}

export default new RegistrationFormPagePage();