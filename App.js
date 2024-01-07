import { Data } from './Data/model.js';
import { Router } from './Router/Router.js';

import { CrewController } from './Crew/CrewController.js';
import { TechnologyController } from './Technology/TechnologyController.js';
import { DestinationController } from './Destination/DestinationController.js';

import { HomeView } from './Home/HomeView.js';
import { CrewView } from './Crew/CrewView.js';
import { TechnologyView } from './Technology/TechnologyView.js';
import { DestinationView } from './Destination/DestinationView.js';

const data = new Data();

const homeView = new HomeView();
const crewView = new CrewView();
const technologyView = new TechnologyView();
const destinationView = new DestinationView();

const crewController = new CrewController(data, crewView);
const technologyController = new TechnologyController(data, technologyView);
const destinationController = new DestinationController(data, destinationView);

const router = new Router();

router.addRoute('home', () => {
  homeView.displayContent();
});

router.addRoute('crew', () => {
  crewController.updateView();
});

router.addRoute('technology', () => {
  technologyController.updateView();
});

router.addRoute('destination', () => {
  destinationController.updateView();
});

router.navigate(window.location.hash.slice(1) || 'home');

// class App {
//   constructor() {
//     this.body = document.querySelector('body');
//     this.location = window.location.pathname.split('/')[2];
//   }

//   startApp = () => {
//     this.getHeader();
//     this.loadComponent();
//   };

//   getData = async (property) => {
//     try {
//       const res = await fetch('data.json');
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await res.json();
//       return data[property];
//     } catch (error) {
//       throw error;
//     }
//   };

//   getHeader = () => {
//     const header = document.createElement('header');
//     header.innerHTML = `<img src='./assets/shared/logo.svg'>
//     <hr/>
//     <ul>
//     <li><a class='active' href='#'>00 HOME</a></li>
//     <li><a href='#'>01 DESTINATION</a></li>
//     <li><a href='#'>02 CREW</a></li>
//     <li><a href='#'>03 TECHNOLOGY</a></li>
//     </ul>`;
//     this.body.append(header);
//   };

//   loadComponent = () => {
//     const main = document.createElement('main');
//     // Add selective render of component by param name
//     switch (this.location) {
//       case 'crew': {
//         main.innerHTML = this.getCrewMembers();
//         break;
//       }
//       case 'destinations': {
//         main.innerHTML = this.getDestination();
//         break;
//       }
//       case 'technologies': {
//         main.innerHTML = this.getTechnology();
//         break;
//       }
//       default: {
//         main.innerHTML = this.getHome();
//       }
//     }

//     this.body.append(main);
//   };

//   getHome = () => {
//     return `<div class='wrapper'>
//     <div class="introduction">
//     <p class='heading-5'>SO, YOU WANT TO TRAVEL TO</p>
//     <h1>SPACE</h1>
//     <p>Let's face it; if you want to go to space, you might as well genuinely go to
//     outer space and not hover kind of on the edge of it. Well sit back, and relax
//     because we'll give you a truly out of this world experience!</p>
//     </div>
//     <a href='destinations'><button>EXPLORE</button></a>
//     </div>`;
//   };

//   getCrewMembers = async () => {
//     const data = await this.getData('crew');
//   };

//   getTechnology = async () => {
//     const data = await this.getData('technology');
//   };

//   getDestination = async () => {
//     const data = await this.getData('destination');
//   };
// }

// const app = new App();
// app.startApp();
