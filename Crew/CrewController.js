export class CrewController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  updateView() {
    const data = this.model.getData();
    this.view.displayContent(data);
  }
}
