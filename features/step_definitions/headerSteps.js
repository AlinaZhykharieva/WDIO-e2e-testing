import Header from '../utils/pageobjects/pageComponents/header';

const { When, Then } = require('cucumber');

When(/^I go to login page$/, async () => {
  await Header.clickLogin();
});

Then(/^I go to home page$/, async () => {
  await Header.goToHomePage();
});
