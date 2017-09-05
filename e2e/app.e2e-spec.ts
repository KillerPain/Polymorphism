import { PolymorphismExtraPage } from './app.po';

describe('polymorphism-extra App', () => {
  let page: PolymorphismExtraPage;

  beforeEach(() => {
    page = new PolymorphismExtraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pe works!');
  });
});
