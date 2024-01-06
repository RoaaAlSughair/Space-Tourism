class Router {
  constructor() {
    this.routes = {};
    window.addEventListener('hashchange', () =>
      this.navigate(window.location.hash.slice(1))
    );
  }

  addRoute(route, callback) {
    this.routes[route] = callback;
  }

  navigate(route) {
    if (this.routes[route]) {
      this.routes[route]();
    } else {
      console.error('Route not found:', route);
    }
  }
}
