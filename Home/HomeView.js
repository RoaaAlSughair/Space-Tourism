export class HomeView {
  constructor() {
    this.body = document.getElementById('view');
  }

  renderDesktopHeader() {
    // Header and its components
    const header = document.createElement('header');
    const img = document.createElement('img');
    img.alt = 'Logo';
    img.src = './assets/shared/logo.svg';
    const hr = document.createElement('hr');
    const nav = document.createElement('nav');
    const navLink1 = document.createElement('a');
    navLink1.href = '#home';
    navLink1.textContent = '00 HOME';
    navLink1.className = 'active';
    const navLink2 = document.createElement('a');
    navLink2.href = '#destination';
    navLink2.textContent = '01 DESTINATION';
    const navLink3 = document.createElement('a');
    navLink3.href = '#crew';
    navLink3.textContent = '02 CREW';
    const navLink4 = document.createElement('a');
    navLink4.href = '#technology';
    navLink4.textContent = '03 TECHNOLOGY';

    header.appendChild(img);
    header.appendChild(hr);
    nav.appendChild(navLink1);
    nav.appendChild(navLink2);
    nav.appendChild(navLink3);
    nav.appendChild(navLink4);
    header.appendChild(nav);
    this.body.appendChild(header);
  }

  displayContent() {
    while (this.body.firstChild) {
      this.body.removeChild(this.body.firstChild);
    }

    // Change the background image according the screen width
    if (window.innerWidth > 768) {
      this.renderDesktopHeader();
      this.body.style.backgroundImage =
        'url("./assets/home/background-home-desktop.jpg")';
    } else if (window.innerWidth <= 768 && window.innerWidth > 375) {
      this.renderDesktopHeader();
      this.body.style.backgroundImage =
      'url("./assets/home/background-home-tablet.jpg")';
    } else {
      this.renderDesktopHeader();
      this.body.style.backgroundImage =
      'url("./assets/home/background-home-mobile.jpg")';
    }
    
    // Main
    const main = document.createElement('main');
    main.id = 'main';

    // Wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'home-wrapper';

    // Explore button
    const homeLink = document.createElement('a');
    homeLink.href = '#destination';
    const btn = document.createElement('button');
    btn.textContent = 'EXPLORE';
    homeLink.appendChild(btn);

    // Introduction div
    const introduction = document.createElement('div');
    introduction.className = 'introduction';

    // Introduction div content
    const heading = document.createElement('h5');
    heading.textContent = 'SO, YOU WANT TO TRAVEL TO';
    const heading_cont = document.createElement('h1');
    heading_cont.textContent = 'SPACE';
    const desc = document.createElement('p');
    desc.textContent = `Let's face it; if you want to go to space, you might as well genuinely go to 
    outer space and not hover kind of on the edge of it. Well sit back, and relax 
    because we'll give you a truly out of this world experience!`;
    desc.className = 'description';
    introduction.appendChild(heading);
    introduction.appendChild(heading_cont);
    introduction.appendChild(desc);

    // Displaying the page
    wrapper.appendChild(introduction);
    wrapper.appendChild(homeLink);
    main.appendChild(wrapper);
    this.body.appendChild(main);
  }
}
