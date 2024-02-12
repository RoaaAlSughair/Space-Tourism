export class DestinationView {
  constructor() {
    this.body = document.getElementById('view');
    this.currentIndex = 0;
  }

  displayContent(content) {
    console.log(content);
    this.body.innerHTML = '';
    
    // Change the background image
    this.body.style.backgroundImage = 'url("./assets/destination/background-destination-desktop.jpg")';

    // Header and its components
    const header = document.createElement('header');
    const img = document.createElement("img");
    img.src = "./assets/shared/logo.svg";
    const hr = document.createElement("hr");
    const nav = document.createElement("nav");
    const navLink1 = document.createElement("a");
    navLink1.href = "#home";
    navLink1.textContent = "00 HOME";
    const navLink2 = document.createElement("a");
    navLink2.href = "#destination";
    navLink2.textContent = "01 DESTINATION";
    navLink2.className = "active";
    const navLink3 = document.createElement("a");
    navLink3.href = "#crew";
    navLink3.textContent = "02 CREW";
    const navLink4 = document.createElement("a");
    navLink4.href = "#technology";
    navLink4.textContent = "03 TECHNOLOGY";
    
    // Main
    const main = document.createElement("main");

    // Carousel
    const carouselContainer = document.createElement("div");
    carouselContainer.className = "carousel-container";
    const carouselInner = document.createElement("div");
    carouselInner.className = "carousel-inner";
    const pagination = document.createElement("div");
    pagination.className = "pagination"

    content.forEach((elm) => {
      const carouselItem = document.createElement("div");
      carouselItem.className = "carousel-item";
      const img = document.createElement("img");
      img.src = elm.images.png;
      img.alt = elm.name;
      
      carouselItem.appendChild(img);
      carouselInner.appendChild(carouselItem);
    });

    for (let i = 0; i < content.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.setAttribute("index", i);

      if (i === this.currentIndex) {
        dot.classList.add("active-dot");
      }

      dot.addEventListener("click", function() {
        this.currentIndex = this.getAttribute("index");
        carouselInner.style.transform = `translateX(${-this.currentIndex * 100}%)`;
        pagination.getElementsByClassName("active-dot")[0].classList.toggle("active-dot");
        this.classList.toggle("active-dot");
      });
      
      pagination.appendChild(dot);
    }

    // Displaying the page
    header.appendChild(img);
    nav.appendChild(navLink1);
    nav.appendChild(navLink2);
    nav.appendChild(navLink3);
    nav.appendChild(navLink4);
    header.appendChild(nav);
    carouselContainer.appendChild(carouselInner);
    carouselContainer.appendChild(pagination);
    main.appendChild(carouselContainer);
    this.body.appendChild(header);
    this.body.appendChild(main);
  }
}