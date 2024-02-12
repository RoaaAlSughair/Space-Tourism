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