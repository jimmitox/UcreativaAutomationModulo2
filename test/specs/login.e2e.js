

const NavigationPage = require('../pageobjects/navigation.page');
const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        NavigationPage.goToSignIn();
        browser.pause(5000);
        LoginPage.login('jimmzo91@gmail.com', 'Ninalecole');
        expect(browser).toHaveURL('https://demo.realworld.io/#/');
        expect(DashboardPage.getNoArticlesLabel()).toBeDisplayed();
        expect(DashboardPage.getYourFeedTap()).toHaveAttribute('class', 'nav-link active');        

    });

    it('should open Global feed tab',()=>{
        DashboardPage.getGlobalFeedTap().click();
        // expect(DashboardPage.getGlobalFeedTap()).toHaveAttribute('class', 'nav-link active');
        //Revisa q la clase sea active 
        expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active', {message: 'Not active tap!',});
        //  expect(DashboardPage.getGlobalFeedTap()).toHaveProperty('class', 'nav-link active');
        expect(DashboardPage.getGlobalFeedTap()).toBeClickable();
        expect(DashboardPage.getGlobalFeedTap()).toBeSelected();
    });

   

});


