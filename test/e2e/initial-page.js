let InitialPage = function() {
    
    this.clickTheInsertAdLink = function() {
        let adLink = element(by.css('.btn.btn-large.btn-orange'))
        adLink.click();
    }

    this.clickOnChat = function(){
        let onChat = element(by.xpath('html/body/div[2]/header/div/div[2]/div/div[1]/div/div/a'))
        onChat.click();
    }

    this.clickOnMyAccount = function(){
        let myAccount = element(by.xpath(".//*[@id='container_not_logged']/span/a"))
        myAccount.click();
    }

    this.getTitle = function(){
        return browser.getTitle();
    }
}
module.exports = new InitialPage();