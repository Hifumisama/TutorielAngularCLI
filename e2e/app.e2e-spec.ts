import { TutoAngularCLIversionPage } from './app.po';

describe('tuto-angular-cliversion App', function() {
  let page: TutoAngularCLIversionPage;

  beforeEach(() => {
    page = new TutoAngularCLIversionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
