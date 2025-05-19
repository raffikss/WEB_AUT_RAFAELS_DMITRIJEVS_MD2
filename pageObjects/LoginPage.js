import { BasePage } from './BasePage';

class LoginPage extends BasePage {
static elements = {
    usernameInput: () => cy.get('#txt-username'),
    passwordInput: () => cy.get('#txt-password'),
    loginButton: () => cy.get('#btn-login'),
    makeAppointmentButton: () => cy.get('#btn-make-appointment'),
};

static visit() {
    super.visit('/');
}

static clickMakeAppointment() {
    this.elements.makeAppointmentButton().click();
}

static login(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginButton().click();
}
}

export default LoginPage;