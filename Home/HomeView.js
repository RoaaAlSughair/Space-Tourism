export class HomeView {
  constructor() {
    this.body = document.getElementById('view');
  }

  displayContent() {
    this.body.innerHTML = '';
    this.body.append(`<div class='wrapper'>
      <div class="introduction">
      <p class='heading-5'>SO, YOU WANT TO TRAVEL TO</p>
      <h1>SPACE</h1>
      <p>Let's face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we'll give you a truly out of this world experience!</p>
      </div>
      <a href='destinations'><button>EXPLORE</button></a>
      </div>`);
  }
}