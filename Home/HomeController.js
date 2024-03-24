export class HomeController {
    constructor(view) {
      this.view = view;
      this.name = location.hash.slice(1);
    }
  
    updateView() {
      this.view.displayContent();
    }
  }