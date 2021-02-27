const { Then } = require('cucumber');

Then(/^I am on personal account page with (.*)$/, async (url) => {
  await expect(browser).toHaveUrlContaining(url);
});
