
class waits{


    //Function recibe un element y hace un wairt hasta q salga
    waitUntilElementisDisplayedInViewport(element){
        //Crear function
      // console.log(element);
        browser.waitUntil(
        ()=> element.isDisplayed(),
        {
            timeout: 10000,
            timeoutMsg: element + 'was not found in after 5s'
        }
    );
    }
}

module.exports = new waits();