class HistoryPage {
  static elements = {
    menuToggle: () => cy.get('#menu-toggle'),
    sidebar: () => cy.get('#sidebar-wrapper'),
    historyLink: () => cy.get('a').contains('History'),
    noAppointmentMessage: () => cy.get('p').contains('No appointment'),
};

static openMenu() {
    this.elements.menuToggle().click();
}

static validateSidebarActive() {
    this.elements.sidebar().should('have.class', 'active');
}


static navigateToHistory() {
    this.elements.historyLink().click();
}

static validateNoAppointments() {
    this.elements.noAppointmentMessage().should('be.visible');
}
}

export default HistoryPage;