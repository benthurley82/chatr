import { ChatrWebPage } from './app.po';

describe('chatr-web App', () => {
  let page: ChatrWebPage;

  beforeEach(() => {
    page = new ChatrWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
