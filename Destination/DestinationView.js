export class DestinationView {
  constructor() {
    this.body = document.getElementById('view');
    this.currentIndex = 0;
  }

  displayContent(content) {
    console.log(content);
    this.body.innerHTML = '';

    // Change the background image
    this.body.style.backgroundImage =
      'url("./assets/destination/background-destination-desktop.jpg")';

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

    // Main
    const main = document.createElement('main');

    // Page title
    const title = document.createElement('h5');
    title.textContent = '01 PICK YOUR DESTINATION';
    title.className = "title";

    // Carousel
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';
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
      const distance = document.createElement('p');
      distance.textContent = elm.distance;
      const travel = document.createElement('p');
      travel.textContent = elm.travel;

      // Pagination nav
      const dot = document.createElement('a');
      dot.textContent = elm.name.toUpperCase();
      dot.classList.add('dot');
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
      carouselInfo.appendChild(distance);
      carouselInfo.appendChild(travel);

      carouselImage.appendChild(img);

      imageCarousel.appendChild(carouselImage);
      infoCarousel.appendChild(carouselInfo);

      pagination.appendChild(dot);
    });

    // Displaying the page
    header.appendChild(img);
    header.appendChild(hr);
    nav.appendChild(navLink1);
    nav.appendChild(navLink2);
    nav.appendChild(navLink3);
    nav.appendChild(navLink4);
    header.appendChild(nav);
    infoAndPage.appendChild(pagination);
    infoAndPage.appendChild(infoCarousel);
    carouselContainer.appendChild(imageCarousel);
    carouselContainer.appendChild(infoAndPage);
    main.appendChild(title);
    main.appendChild(carouselContainer);
    this.body.appendChild(header);
    this.body.appendChild(main);
  }
}
