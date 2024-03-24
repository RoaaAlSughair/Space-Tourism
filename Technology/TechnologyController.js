export class TechnologyController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async updateView() {
    const data = await this.model.getData(location.hash.slice(1));
    this.view.displayContent(data);
  }
}