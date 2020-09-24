const { should} = require('chai');
const ActionHelper = require('../helpers/actionHelpers');
require('chai').should();
require('chai').expect();

class EbayPage {

    launchEbay() {
        ActionHelper.launchBrowserUrl('https://www.ebay.com/');
        ActionHelper.pause(2);
    }


    writeSearch(product, locator){
        ActionHelper.isVisible(locator);
        ActionHelper.sendText(locator,product);
    }
    clickOn(locator){
        
        ActionHelper.click(locator);
        ActionHelper.pause(2);

        
    }
    verifySearch(){
        var search = ActionHelper.getText('.srp-controls__count-heading');
        console.log(search);
    }


}

module.exports = EbayPage;
