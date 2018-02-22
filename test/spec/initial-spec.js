//browser.waitForAngularEnabled(false);
let initialPage = require('../e2e/initial-page.js');


describe('Initial Page', function(){

    let myAccountTitle = "Minha Conta | OLX";
    let initialPageTitle = "OLX - O Maior Site de Compra e Venda do Brasil";

    beforeEach(function(){
        browser.driver.sleep(5000);
        browser.get('http://olx.com.br');
        browser.driver.sleep(5000);
    })

    it('Ask for the password to insert the ad', function(){

        initialPage.clickOnChat();
        
        expect(initialPage.getTitle()).toEqual(initialPageTitle);
    })

   it('Ask for the password to access the chat', function(){

        initialPage.clickOnChat();

        expect(initialPage.getTitle()).toEqual(initialPageTitle);
    })

    it('Ask for the password to access my account', function(){

        initialPage.clickOnMyAccount();

        expect(initialPage.getTitle()).toEqual(myAccountTitle);
   })
})