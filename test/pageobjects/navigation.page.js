const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class navigationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get conduitLabel () { return $('a.navbar-brand.ng-binding') }
    get signInLink () { return $('=Sign In') }
    get signUpLink () { return $('*=up') }

    goToSignIn(){
        this.signInLink().click();
    }

    goConduitText(){
       return  this.signInLink().click();
    }

    open (){
        return super.open('')
    }
}

module.exports = new navigationPage();
