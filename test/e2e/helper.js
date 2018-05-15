'use strict'

class Helper {

    navigateTo(pagina){
        browser.get(pagina) ;
        this.fluentWait(2000);
    }

    fluentWait (time){
        browser.driver.sleep(time) ;
    }
}
module.exports = Helper;