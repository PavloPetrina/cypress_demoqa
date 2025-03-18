/// <reference types="cypress" />

describe('QA demo Registration form test suit', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Check registration form required fields', () => {
      /*
      TC #1. Check registration form required fields

      Description: User should be able to see the required form fields for sucessful registration

      Precondition: assume mockup of the registration from is provided

      Test Steps:
      1. Navigate to the https://demoqa.com/automation-practice-form page
      2. Check the registration form is rendered according to mockup
      3. Click on the "Submit" button

      Test Data: n/a

      Expected Result: 
      1. Required form fields and related options are highlighted by waring frames with related icons
      2. User is not registered and is left on the /automation-practice-form page

      Actual Result: 
      1. Following required form fields and related options are NOT highlighted by waring frames with related icons
      - Email: field is empty and marked as filled (green) //TODO: check the requirement if it's trully required - common sence tells "yes";
      - Hobbies: any of the check-box options aren't checked but marked as checked (green); //TODO: check the requirement if it's trully required - common sence tells "optional";
      - Current Address: text-area is empty and marked as filled (green) //TODO: check the requirement if it's trully required - common sence tells "optional";
      2. As expected

      Status: Fail
      */
      cy.get('.todo-list li').should('have.length', 2)
      cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
      cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    })
  })
  