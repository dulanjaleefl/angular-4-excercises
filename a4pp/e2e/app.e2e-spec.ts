import { A4ppPage } from './app.po';

describe('a4pp App', function() {
  let page: A4ppPage;

  beforeEach(() => {
    page = new A4ppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
