export class TechnologyController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.name = 'technology';
  }

  async updateView() {
    const data = await this.model.getData(this.name);
    this.view.displayContent(data);
  }
}
