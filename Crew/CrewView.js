export class CrewView {
  constructor() {
    this.body = document.getElementById('view');
    this.currentIndex = 0;
  }

  renderHeader() {
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

    header.appendChild(img);
    header.appendChild(hr);
    nav.appendChild(navLink1);
    nav.appendChild(navLink2);
    nav.appendChild(navLink3);
    nav.appendChild(navLink4);
    header.appendChild(nav);
    this.body.appendChild(header);
  }

  displayContent(content) {
    while (this.body.firstChild) {
      this.body.removeChild(this.body.firstChild);
    }

    this.renderHeader()

    // Change the background image
    this.body.style.backgroundImage =
      'url("./assets/crew/background-crew-desktop.jpg")';

    // Main
    const main = document.createElement('main');
    main.id = 'main';

    // Page title
    const title = document.createElement('h5');
    title.textContent = '02 MEET YOUR CREW';
    title.className = 'title';

    // Carousel
    const wrapper = document.createElement('div');
    wrapper.className = 'crew-wrapper';
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container style-2';
    const imageCarousel = document.createElement('div');
    imageCarousel.classList.add('carousel-inner');
    const infoCarousel = document.createElement('div');
    infoCarousel.classList.add('carousel-inner');
    const pagination = document.createElement('nav');
    pagination.className = 'pagination';

    // Info and Pagination wrapper
    const infoAndPage = document.createElement('div');
    infoAndPage.className = 'info-and-page';

    content.forEach((elm, i) => {
      // Image Carousel
      const carouselImage = document.createElement('div');
      carouselImage.className = 'carousel-item';
      const img = document.createElement('img');
      img.src = elm.images.webp;
      img.alt = elm.name;

      // Info Carousel
      const carouselInfo = document.createElement('div');
      carouselInfo.className = 'carousel-item';
      carouselInfo.classList.add('destination-info');
      const crew = document.createElement('h3');
      crew.textContent = elm.name.toUpperCase();
      const role = document.createElement('h4');
      role.textContent = elm.role.toUpperCase();
      const bio = document.createElement('p');
      bio.textContent = elm.bio;

      // Pagination nav
      const dot = document.createElement('a');
      dot.htmlContent = '&nbsp;';
      dot.classList.add('dot');
      dot.classList.add('dot-2');
      dot.setAttribute('index', i);

      if (i === this.currentIndex) {
        dot.classList.add('active');
        carouselImage.classList.add('active-item');
        carouselInfo.classList.add('active-item');
      }

      dot.addEventListener('click', function () {
        this.currentIndex = this.getAttribute('index');
        let activeImg = imageCarousel.children[this.currentIndex];
        let activeInfo = infoCarousel.children[this.currentIndex];

        imageCarousel
          .getElementsByClassName('active-item')[0]
          .classList.toggle('active-item');
        infoCarousel
          .getElementsByClassName('active-item')[0]
          .classList.toggle('active-item');

        activeImg.classList.toggle('active-item');
        activeInfo.classList.toggle('active-item');

        pagination
          .getElementsByClassName('active')[0]
          .classList.toggle('active');
        this.classList.toggle('active');
      });

      carouselInfo.appendChild(role);
      carouselInfo.appendChild(crew);
      carouselInfo.appendChild(bio);

      carouselImage.appendChild(img);

      infoCarousel.appendChild(carouselInfo);
      imageCarousel.appendChild(carouselImage);

      pagination.appendChild(dot);
    });

    // Displaying the page
    infoAndPage.appendChild(title);
    infoAndPage.appendChild(infoCarousel);
    infoAndPage.appendChild(pagination);
    carouselContainer.appendChild(infoAndPage);
    carouselContainer.appendChild(imageCarousel);
    wrapper.appendChild(carouselContainer);
    main.appendChild(wrapper);
    this.body.appendChild(main);
  }
}
