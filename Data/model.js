export class Data {
  constructor() {
    this.data = {};
  }

  getData = async (property) => {
    await fetch('Data/data.json')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
      })
      .catch((error) => {
        throw error;
      });

    return this.data[property];
  };
}
