//browser.waitForAngularEnabled(false);
var InitialPage = require('../e2e/pageobjects/initial-page.js');
var Helper = require('../e2e/helper.js')

describe('Initial Page', function(){

    var initialPage = new InitialPage();
    var helper = new Helper();

    beforeEach(function(){
        let tempoEspera = 5000;
        let paginaInicial = 'http://olx.com.br';
        helper.navigateTo(paginaInicial);
        helper.fluentWait(tempoEspera);
    })

    it('Ask for the password to insert the ad', function(){
        let initialPageTitle = "OLX - O Maior Site de Compra e Venda do Brasil";

        initialPage.adLink.click();
        
        expect(initialPage.getTitle()).toEqual(initialPageTitle);
    })

   it('Ask for the password to access the chat', function(){
        let initialPageTitle = "OLX - O Maior Site de Compra e Venda do Brasil";
    
        initialPage.onChat.click();

        expect(initialPage.getTitle()).toEqual(initialPageTitle);
    })

    it('Ask for the password to access my account', function(){
        let myAccountTitle = "Minha Conta | OLX";

        initialPage.myAccount.click();

        expect(initialPage.getTitle()).toEqual(myAccountTitle);
   })
})