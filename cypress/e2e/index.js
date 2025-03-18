import { AppComponentPageHolder } from "./abstractClasses";
import { RegistrationFormPage } from "./pages/imLoginPage";
 
export class Application extends AppComponentPageHolder {
    registrationPage = new RegistrationFormPage(this.page);
}