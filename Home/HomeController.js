export class HomeController {
    constructor(view) {
      this.view = view;
    }
  
    updateView() {
      this.view.displayContent();
    }
  }