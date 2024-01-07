export class DestinationView {
  constructor() {
    this.body = document.getElementById('view');
  }

  displayContent(content) {
    this.body.innerHTML = '';
    // Display space destinations UI
  }
}