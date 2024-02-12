export class CrewView {
  constructor() {
    this.body = document.getElementById('view');
  }

  displayContent(content) {
    this.body.innerHTML = '';

    // Change the background image
    this.body.style.backgroundImage =
      'url("./assets/crew/background-crew-desktop.jpg")';

    // Header and its components
    const header = document.createElement('header');
    const img = document.createElement('img');
    img.src = './assets/shared/logo.svg';
    const hr = document.createElement('hr');
    const nav = document.createElement('nav');
    const navLink1 = document.createElement('a');
    navLink1.href = '#home';
    navLink1.textContent = '00 HOME';
    const navLink2 = document.createElement('a');
    navLink2.href = '#destination';
    navLink2.textContent = '01 DESTINATION';
    const navLink3 = document.createElement('a');
    navLink3.href = '#crew';
    navLink3.textContent = '02 CREW';
    navLink3.className = 'active';
    const navLink4 = document.createElement('a');
    navLink4.href = '#technology';
    navLink4.textContent = '03 TECHNOLOGY';

    // Main
    const main = document.createElement('main');

    // Displaying the page
    header.appendChild(img);
    nav.appendChild(navLink1);
    nav.appendChild(navLink2);
    nav.appendChild(navLink3);
    nav.appendChild(navLink4);
    header.appendChild(nav);
    this.body.appendChild(header);
    this.body.appendChild(main);
  }
}
