const {Given,When, Then} = require('cucumber');

const EbayPage = require('../pages/ebay.page');

const ebayPage = new EbayPage();

Given(/^the user open the Ebay page$/, () => {
    ebayPage.launchEbay();
});
When(/^the user write on the search bar (.*)$/, (product) => {
    //ebayPage.clickOn('#kw');
    ebayPage.writeSearch(product,'#kw');
});
When(/^the user click on the search button$/, () => {
    ebayPage.clickOn('.gh-search__submitbtn');
});
Then(/^verify the Search was susccesfull$/, () => {
    ebayPage.verifySearch();
    

});



