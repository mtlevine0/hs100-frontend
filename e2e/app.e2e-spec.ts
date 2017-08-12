import { Hs100FrontendPage } from './app.po';

describe('hs100-frontend App', () => {
  let page: Hs100FrontendPage;

  beforeEach(() => {
    page = new Hs100FrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
