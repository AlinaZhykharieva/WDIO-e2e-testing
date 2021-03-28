export default class Element {
  constructor(selector) {
    this.selector = $(selector);
  }

  get element() {
    return this.selector;
  }

  async click() {
    return (await this.element).click();
  }

  async waitForElementDisplayed() {
    return (await this.element).waitForDisplayed({ timeout: 3000 });
  }

  async waitForEnabled() {
    return (await this.element).waitForEnabled({ timeout: 12000 });
  }

  async getText() {
    return (await this.element).getText();
  }
}
