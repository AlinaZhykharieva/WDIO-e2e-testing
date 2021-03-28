import Input from '../elements/input';
import Button from '../elements/button';

class DetailTourPage {
  get buttonMaximumAmountOfDays() {
    return new Button(':nth-child(1) > :nth-child(6) > .btn ');
  }

  get inputFirstName() {
    return new Input('[name = "firstname"]');
  }

  get inputPhone() {
    return new Input('[name ="phone"]');
  }

  get inputEmail() {
    return new Input('.form-group > [name ="email"]');
  }

  get inputAddress() {
    return new Input('[name ="address"]');
  }

  get buttonSubmit() {
    return new Button(' .col> #ClickMyButton');
  }

  async clickAmountOfDaysButton() {
    await this.buttonMaximumAmountOfDays.buttonClick();
  }

  async fillFormForCompleteBookingTour(name, email, phone, address) {
    await this.inputFirstName.waitForElementDisplayed();
    await this.inputFirstName.addValue(name);
    await this.inputEmail.addValue(email);
    await this.inputPhone.addValue(phone);
    await this.inputAddress.addValue(address);
    await this.buttonSubmit.buttonClick();
  }
}

export default new DetailTourPage();
