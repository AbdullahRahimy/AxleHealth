class Homepage {
  get contactBtn() {return cy.get('[href="/contact-us"]');}
  get backToPerviousPage() {return cy.go('back');}
  get softwareLearnMoreBtn() {return cy.get('[class="learn-more-button home-page w-button"]');}
  verifyUrlContains(partialUrl) { cy.url().should('include', partialUrl); }
  get routeOptimizationTxt() {return cy.get('[class="features-heading"]')}
  get advancedAnalyticsTxt() {return cy.get('[class="features-heading patient-engagement"]');}
  get leftLearnMoreBtn() {return cy.get('[class="link-to-software"]');}
  get rightLearnMoreBtn() {return cy.get('[class="link-to-software patient-engagement"]')}
  get patientEngagementTxt() {return cy.get('[class="features-heading simplified-operations"]')}
  get comprehensiveIntegrationsTxt() {return cy.get('[class="features-heading comprehensive-integrations"]')}
  // scrollTo(text) {cy.contains(text).scrollIntoView();}
  get meaningfullImpactHeader() {return cy.get('[class="heading-10"]')}
  get whatOurCustomerSays() {return cy.get('[class="testimonial-heading"]')}
  get securityComplianceHeader() {return cy.get('[class="security-flexbox-heading"]')}
  get securityPortalBtn() {return cy.get('.security-box-link.w-inline-block')}
  get nameFiled() {return cy.get('[name="name-2"]')}
  get emailFiled() {return cy.get('[name="email-2"]')}
  get messageFiled() {return cy.get('[name="Message-2"]')}
  get submitBtn() {return cy.get('[type="submit"]')}
}
export default new Homepage();
