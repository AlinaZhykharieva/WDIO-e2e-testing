import InvoicePage from '../utils/pageobjects/invoice.page';
import InvoicePageValidator from '../utils/validators/invoice.page.validator';

const { When, Then } = require('cucumber');

Then(/^On invoice page displayed (.*), (.*), (.*), (.*)$/, async (name, email, phone, address) => {
  await InvoicePageValidator.comparingDetailsOfBooking(name, email, phone, address);
});

When(/^I choose payment method by credit card$/, async () => {
  await InvoicePage.performPayByCreditCard();
});

When(/^I click button Pay without filling in the required fields$/, async () => {
  await InvoicePage.clickPay();
});

Then(/^Alert message displayed$/, async () => {
  await expect(await InvoicePage.alertMessage).toBeDisplayed();
});
