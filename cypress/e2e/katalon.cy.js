import LoginPage from '../../pageObjects/LoginPage';
import AppointmentPage from '../../pageObjects/AppointmentPage';
import HistoryPage from '../../pageObjects/HistoryPage';

describe('CURA Healthcare Appointment System', () => {
const username = 'John Doe';
const password = 'ThisIsNotAPassword';

beforeEach(() => {
    LoginPage.visit();
    LoginPage.clickMakeAppointment();
    LoginPage.login(username, password);
});

it('Scenario 1: Make an Appointment', () => {
    const appointmentDetails = {
    facility: 'Seoul CURA Healthcare Center',
    applyReadmission: true,
    program: 'Medicaid',
    date: '30',
    comment: 'CURA Healthcare Service',
    };

    AppointmentPage.makeAppointment(
    appointmentDetails.facility,
    appointmentDetails.applyReadmission,
    appointmentDetails.program,
    appointmentDetails.date,
    appointmentDetails.comment
    );

    AppointmentPage.validateAppointmentDetails(
    appointmentDetails.facility,
    appointmentDetails.applyReadmission,
    appointmentDetails.program,
    appointmentDetails.date,
    appointmentDetails.comment
    );
});

it.only('Scenario 2: Appointment history empty', () => {
    HistoryPage.openMenu();
    HistoryPage.validateSidebarActive();
    HistoryPage.navigateToHistory();
    HistoryPage.validateNoAppointments();
});
});
