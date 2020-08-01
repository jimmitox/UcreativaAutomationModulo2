//const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const NavigationPage = require('../pageobjects/navigation.page');
const loginPage = require('../pageobjects/login.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        NavigationPage.goToSignIn();
        
        //loginPage.login();

    });
});


