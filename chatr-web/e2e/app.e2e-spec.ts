import { ChatrPage } from './app.po';

describe('chatr App', function() {
  let page: ChatrPage;

  beforeEach(() => {
    page = new ChatrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
