import { DicePage } from './app.po';

describe('dice App', () => {
  let page: DicePage;

  beforeEach(() => {
    page = new DicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
