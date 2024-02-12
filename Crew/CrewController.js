export class CrewController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.name = location.hash.slice(1)
  }

  async updateView() {
    const data = await this.model.getData(this.name);
    this.view.displayContent(data);
  }
}
