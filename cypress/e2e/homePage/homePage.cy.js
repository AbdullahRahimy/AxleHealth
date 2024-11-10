import HomePage from "../../page_objects/Home.page";

let homepageTxts;

describe('Axle Health Home Page Functionality check', () => {
  before('HomePage Texts', ()=>{
    cy.fixture('homePageTxts.json').then((data)=>{
      homepageTxts = data;
    })
  })

  it('Axle health ', () => {
    cy.visit('');

    cy.verifyTextVisibility('.hero-heading', homepageTxts.homePageTxtOne, homepageTxts.homePageTxtTwo);

     //First contact button verification 
    HomePage.contactBtn.eq(1).click();
    HomePage.verifyUrlContains(homepageTxts.contactUsLink);
    HomePage.backToPerviousPage;
    //2nd Button verifcation
    HomePage.softwareLearnMoreBtn.click();
    HomePage.verifyUrlContains(homepageTxts.softwareLink);
    HomePage.backToPerviousPage;

    //2nd Part of the home Page
    HomePage.routeOptimizationTxt.should('have.text', homepageTxts.routeOptimizationTxt);
    HomePage.leftLearnMoreBtn.eq(0).click();
    HomePage.verifyUrlContains(homepageTxts.softwareLink);
    HomePage.backToPerviousPage;

    HomePage.advancedAnalyticsTxt.should('have.text', homepageTxts.advancedAnalyticsTxt);
    HomePage.rightLearnMoreBtn.eq(0).click();
    HomePage.verifyUrlContains(homepageTxts.softwareLink);
    HomePage.backToPerviousPage;

    HomePage.patientEngagementTxt.should('have.text', homepageTxts.patientEngagmentTxt);

    HomePage.leftLearnMoreBtn.eq(1).click();

    HomePage.verifyUrlContains(homepageTxts.softwareLink);
    HomePage.backToPerviousPage;

    HomePage.comprehensiveIntegrationsTxt.should('have.text', homepageTxts.comprehensiveTxt);

    HomePage.leftLearnMoreBtn.eq(2).click();

    HomePage.verifyUrlContains(homepageTxts.softwareLink);
    HomePage.backToPerviousPage;

    HomePage.meaningfullImpactHeader.eq(0).should('have.text', homepageTxts.clinicianProductivityTxt);
    HomePage.meaningfullImpactHeader.eq(1).should('have.text', homepageTxts.patientNoShowRateTxt);
    HomePage.meaningfullImpactHeader.eq(2).should('have.text', homepageTxts.operationsTimeSpentTxt);
    HomePage.whatOurCustomerSays.eq(0).should('have.text', homepageTxts.whatCustomerSaysTxt);
    HomePage.securityComplianceHeader.eq(0).should('have.text', homepageTxts.securityComplianceTxtOne);
    HomePage.securityComplianceHeader.eq(1).should('have.text', homepageTxts.securityComplianceTxtTwo);
    HomePage.securityComplianceHeader.eq(2).should('have.text', homepageTxts.securityComplianceTxtThree);

    HomePage.securityPortalBtn.invoke('removeAttr', 'target').click();

    HomePage.verifyUrlContains(homepageTxts.securityLink);
    HomePage.backToPerviousPage;

    HomePage.nameFiled.type(homepageTxts.nameTxt).should('have.value', homepageTxts.nameTxt);
    HomePage.emailFiled.type(homepageTxts.emailTxt).should('have.value', homepageTxts.emailTxt);
    HomePage.messageFiled.type(homepageTxts.messegeBodyTxt).should('have.value', homepageTxts.messegeBodyTxt);

    HomePage.submitBtn.should('be.visible');

  })
})
