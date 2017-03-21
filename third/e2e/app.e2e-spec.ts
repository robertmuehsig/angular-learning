import { ThirdPage } from './app.po';

describe('third App', () => {
  let page: ThirdPage;

  beforeEach(() => {
    page = new ThirdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
