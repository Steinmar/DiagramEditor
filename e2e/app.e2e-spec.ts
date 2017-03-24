import { DiagramEditorPage } from './app.po';

describe('diagram-editor App', () => {
  let page: DiagramEditorPage;

  beforeEach(() => {
    page = new DiagramEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
