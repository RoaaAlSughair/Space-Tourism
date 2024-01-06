class Data {
  constructor() {
    this.data = {};
  }

  getData = async () => {
    try {
      const res = await fetch('data.json');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      this.data = await res.json();
      return this.data;
    } catch (error) {
      throw error;
    }
  };

  getCrew = async () => {
    if (!this.data) await this.getData();
    return this.data.crew;
  };

  getDestination = async () => {
    if (!this.data) await this.getData();
    return this.data.destination;
  };

  getTechnology = async () => {
    if (!this.data) await this.getData();
    return this.data.technology;
  }
}
