import { AppPage } from '../abstractClasses';
import { PopUp } from '../component/popUp';


export class RegistrationFormPagePage extends AppPage {

    form = this.page.locator('#lightbox');
    email = this.page.locator('input[type=email]');
    password = this.page.locator('input[type=password]');
    submitButton = this.page.locator('input[type=submit]');

    pagePath = '/automation-practice-form'
    PopUp = new PopUp(this.page);

    async expectLoaded() {
        await expect(this.loginForm).toBeVisible();
        await expect(this.loginForm).toContainText('Sign in');
        await expect(this.email).toBeVisible();
    }

    @step()
    async clickSubmitButton() {
        await expect(this.submitButton).toBeEnabled();
        await this.submitButton.click();
    }

}
