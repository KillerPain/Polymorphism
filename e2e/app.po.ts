import { browser, element, by } from 'protractor';

export class PolymorphismExtraPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pe-root h1')).getText();
  }
}
