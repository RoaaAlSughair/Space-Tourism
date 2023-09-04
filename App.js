class App {
  constructor() {
    this.body = document.querySelector('body');
    this.location = window.location.pathname.split('/')[2];
  }

  startApp = () => {
    this.getHeader();
    this.loadComponent();
  };

  getData = async (property) => {
    try {
      const res = await fetch('data.json');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data[property];
    } catch (error) {
      throw error;
    }
  };

  getHeader = () => {
    const header = document.createElement('header');
    header.innerHTML = `<p>00 Home
    01 Destination
    02 Crew
    03 Technology</p>`;
    this.body.append(header);
  };

  loadComponent = () => {
    const main = document.createElement('main');
    // Add selective render of component by param name
    switch (this.location) {
      case 'crew': {
        main.innerHTML = this.getCrewMembers();
        break;
      }
      case 'destinations': {
        main.innerHTML = this.getDestination();
        break;
      }
      case 'technologies': {
        main.innerHTML = this.getTechnology();
        break;
      }
      default: {
        main.innerHTML = this.getHome();
      }
    }

    this.body.append(main);
  };

  getHome = () => {
    return `<h1>So, you want to travel to
    Space</h1>
    <p>  Let’s face it; if you want to go to space, you might as well genuinely go to 
    outer space and not hover kind of on the edge of it. Well sit back, and relax 
    because we’ll give you a truly out of this world experience!</p>
    <a href='destinations'><button>Explore</button></a>`;
  };

  getCrewMembers = async () => {
    const data = await this.getData('crew');
  };

  getTechnology = async () => {
    const data = await this.getData('technology');
  };

  getDestination = async () => {
    const data = await this.getData('destination');
  };
}

const app = new App();
app.startApp();
