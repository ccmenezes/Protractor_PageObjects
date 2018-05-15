'use strict'
class InitialPage {

    constructor() {
        this.adLink = element(by.css('.btn.btn-large.btn-orange'));
        this.onChat = element(by.css('div.box'));
        let myAccount = element(by.css("div#container_not_logged.login-msg-box.not-logged"));
    }
    
    getTitle() {
        return browser.getTitle();
    }
}
module.exports = InitialPage;