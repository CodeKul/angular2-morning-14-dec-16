import { AngularDec16MorningPage } from './app.po';

describe('angular-dec-16-morning App', function() {
  let page: AngularDec16MorningPage;

  beforeEach(() => {
    page = new AngularDec16MorningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
