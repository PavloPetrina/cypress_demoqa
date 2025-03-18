export class AppComponentPageHolder {
    constructor(page) {
        this.page = page;
    }
}


export class Component extends AppComponentPageHolder {
    async isLoaded() {
        try {
            await this.expectLoaded();
            return true;
        } catch {
            return false;
        }
    }
}


export class AppPage extends Component {
    constructor(page) {
        super(page);
        this.dropdown = this.page.locator('ng-dropdown-panel[aria-label="Options list"]');
        this.dialog = this.page.locator('role=dialog');
        this.dialogClose = this.page.locator('button[aria-label="Close this dialog"]');
        this.submitOrderButton = this.page.getByRole('button', { name: 'Submit' });
        this.remarkImUseOnly = this.page.locator('#remark');
        this.pageErrorMessage = this.page.locator('div.invalid-combination-error');
    }

    get pagePath() {
        throw new Error("You have to implement the pagePath property");
    }

    async open(path) {
        await this.page.goto(path || this.pagePath);
        await this.expectLoaded();
    }

    async checkPageUrl(pageUrl) {
        expect(this.page.url()).toContain(pageUrl);
    }

    async selectOptionFromDropdown(option) {
        await expect(this.dropdown).toBeVisible();
        await this.dropdown.getByText(option, { exact: true }).click();
    }


    async checkDialog(text) {
        await expect(this.dialog).toBeVisible();
        await expect(this.dialog).toContainText(text);
    }

    async closeDialog() {
        await expect(this.dialogClose).toBeVisible();
        await this.dialogClose.click();
        await expect(this.dialog).toBeHidden();
    }

}