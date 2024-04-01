export class DestinationView {
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
    navLink2.className = 'active';
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

  displayContent(content) {
    while (this.body.firstChild) {
      this.body.removeChild(this.body.firstChild);
    }

    this.renderHeader();

    // Change the background image according the screen width
    if (window.innerWidth > 768) {
      this.body.style.backgroundImage =
        'url("./assets/destination/background-destination-desktop.jpg")';
    } else if (window.innerWidth <= 768 && window.innerWidth > 375) {
      this.body.style.backgroundImage =
        'url("./assets/destination/background-destination-tablet.jpg")';
    } else {
      this.body.style.backgroundImage =
        'url("./assets/destination/background-destination-mobile.jpg")';
    }

    // Main
    const main = document.createElement('main');
    main.id = 'main';

    // Page title
    const title = document.createElement('h5');
    title.textContent = '01 PICK YOUR DESTINATION';
    title.className = 'title';

    // Carousel
    const wrapper = document.createElement('div');
    wrapper.className = 'destination-wrapper';
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container style-1';
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
      img.width = 450;
      img.height = 450;

      // Info Carousel
      const carouselInfo = document.createElement('div');
      carouselInfo.className = 'carousel-item';
      carouselInfo.classList.add('destination-info');

      const planet = document.createElement('h2');
      planet.textContent = elm.name.toUpperCase();

      const desc = document.createElement('p');
      desc.textContent = elm.description;

      const hr = document.createElement('hr');

      const distanceAndTravel = document.createElement('div');
      distanceAndTravel.className = 'distance-and-travel';

      const distance = document.createElement('div');

      const distTerm = document.createElement('p');
      distTerm.className = 'sub-heading-2';
      distTerm.textContent = 'AVG. DISTANCE';

      const distValue = document.createElement('p');
      distValue.className = 'sub-heading-1';
      distValue.textContent = elm.distance.toUpperCase();

      const travel = document.createElement('div');

      const travTerm = document.createElement('p');
      travTerm.className = 'sub-heading-2';
      travTerm.textContent = 'EST. TRAVEL TIME';

      const travValue = document.createElement('p');
      travValue.className = 'sub-heading-1';
      travValue.textContent = elm.travel.toUpperCase();

      distance.appendChild(distTerm);
      distance.appendChild(distValue);

      travel.appendChild(travTerm);
      travel.appendChild(travValue);

      distanceAndTravel.appendChild(distance);
      distanceAndTravel.appendChild(travel);

      // Pagination nav
      const dot = document.createElement('a');
      dot.textContent = elm.name.toUpperCase();
      dot.classList.add('dot');
      dot.classList.add('dot-1');
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

      carouselInfo.appendChild(planet);
      carouselInfo.appendChild(desc);
      carouselInfo.appendChild(hr);
      carouselInfo.appendChild(distanceAndTravel);

      carouselImage.appendChild(img);

      imageCarousel.appendChild(carouselImage);
      infoCarousel.appendChild(carouselInfo);

      pagination.appendChild(dot);
    });

    // Displaying the page
    infoAndPage.appendChild(pagination);
    infoAndPage.appendChild(infoCarousel);
    carouselContainer.appendChild(imageCarousel);
    carouselContainer.appendChild(infoAndPage);
    wrapper.appendChild(title);
    wrapper.appendChild(carouselContainer);
    main.appendChild(wrapper);
    this.body.appendChild(main);
  }
}
