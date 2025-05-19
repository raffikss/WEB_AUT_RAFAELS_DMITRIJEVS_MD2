class AppointmentPage {
static elements = {
    facilitySelect: () => cy.get('#combo_facility'),
    hospitalReadmissionCheckbox: () => cy.get('#chk_hospotal_readmission'),
    medicaidRadio: () => cy.get('#radio_program_medicaid'),
    datePicker: () => cy.get('#txt_visit_date'),
    commentInput: () => cy.get('#txt_comment'),
    bookAppointmentButton: () => cy.get('#btn-book-appointment'),
    confirmationFacility: () => cy.get('#facility'),
    confirmationReadmission: () => cy.get('#hospital_readmission'),
    confirmationProgram: () => cy.get('#program'),
    confirmationDate: () => cy.get('#visit_date'),
    confirmationComment: () => cy.get('#comment'),

};

static makeAppointment(facility, applyReadmission, program, date, comment) {
    this.elements.facilitySelect().select(facility);
    if (applyReadmission) {
    this.elements.hospitalReadmissionCheckbox().check();
    }
    this.elements.medicaidRadio().check();
    this.elements.datePicker().click();
    cy.get('.datepicker-days').contains(date).click();
    this.elements.commentInput().type(comment);
    this.elements.bookAppointmentButton().click();
}

static validateAppointmentDetails(facility, readmission, program, date, comment) {
    this.elements.confirmationFacility().should('contain', facility);
    this.elements.confirmationReadmission().should('contain', readmission ? 'Yes' : 'No');
    this.elements.confirmationProgram().should('contain', program);
    this.elements.confirmationDate().should('contain', date);
    this.elements.confirmationComment().should('contain', comment);
}

}
export default AppointmentPage;