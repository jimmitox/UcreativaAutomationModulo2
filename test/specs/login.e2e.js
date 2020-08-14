//Here we add all the references we need to access or use
const NavigationPage = require('../pageobjects/navigation.page');
const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const wait =  require('../helpers/waits');
const articleDetailPage = require('../pageobjects/articleDetail.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
      browser.setTimeout({'pageLoad': 10000});
     //  browser.setTimeout({'implicit': 100}); Example of implicit wait 
      NavigationPage.goToSignIn();
      //  browser.pause(5000);
      LoginPage.login('jimmzo91@gmail.com', 'Ninalecole');
      browser.setTimeout({'implicit' : 10000});
      expect(browser).toHaveUrl('https://demo.realworld.io/#/');
      expect(DashboardPage.getYourFeedTap()).toHaveAttribute('class', 'nav-link active');        

    });

    it('should open Global feed tab',()=>{
        DashboardPage.getGlobalFeedTap().click();
        browser.setTimeout({'implicit' : 10000});
        //console.log(DashboardPage.getArticlesList().size );
        //console.log('Holis GlobalTap' + DashboardPage.getArticlesList().lenght);
        // expect(DashboardPage.getGlobalFeedTap()).toHaveAttribute('class', 'nav-link active');
        //Revisa q la clase sea active 
        expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active', {message: 'Not active tap!',});
    });

    //Le da click al segun art d la lista 
    it('should open read more',()=>{
        DashboardPage.getReadMoreAnchor().click();
    });

    it('should add a description',()=> {
        browser.setTimeout({'implicit':10000});
        articleDetailPage.getdescriptionTextBox().setValue('Holis');
        browser.pause(5000);

    });


});


