import DetailTourPage from '../utils/pageobjects/detail.tour.page';

const { When, Then } = require('cucumber');


Then(/^On detail tour page amount of adults should be (.*)$/, async (adults) => {
  await expect(browser).toHaveUrlContaining(adults);
});

When(/^I book the tour$/, async () => {
  await DetailTourPage.choseMaximumAmountOfDays();
});

When(/^Fill form with (.*), (.*), (.*), (.*)$/, async (name, email, phone, address) => {
  await DetailTourPage.fillFormForCompleteBookingTour(name, email, phone, address);
});
