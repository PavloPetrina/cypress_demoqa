export default class BasePage {

  commonElements = {
    submitButton: () => cy.get('button[class="btn btn-primary"]'),
    tagsMenuList: () => cy.get('div[class*="subjects-auto-complete__menu"]'),
    dropDownMenu: () => cy.get('.css-11unzgr'),
    dropDownMenuOption: () => cy.get('div[class*="subjects-auto-complete__menu"]'),

  }

  clickSubmitButtonWithText(text) {
    this.commonElements.submitButton().should('contain.text', text).click();
  }

  checkPageUrl(url) {
    cy.url().should("include", url);
  }

  selectOptionFromTagsList(option) {
    this.commonElements.tagsMenuList().should("be.visible");
    this.commonElements
        .tagsMenuList()
        .contains(option)
        .click();
}

selectOptionFromDropdownMenu(option) {
  this.commonElements.dropDownMenu().should("be.visible");
  this.commonElements
      .dropDownMenu()
      .contains(option)
      .click();
}

}