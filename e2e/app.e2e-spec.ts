import { Angular2FocusDirectivePage } from './app.po';

describe('angular2-focus-directive App', () => {
  let page: Angular2FocusDirectivePage;

  beforeEach(() => {
    page = new Angular2FocusDirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
