import { EssTrainingPage } from './app.po';

describe('ess-training App', function() {
  let page: EssTrainingPage;

  beforeEach(() => {
    page = new EssTrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
