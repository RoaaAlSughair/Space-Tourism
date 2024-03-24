export class Data {
  constructor() {
    this.data = null;
  }

  getData = async (property) => {
    if (!this.data) {
      await fetch('Data/data.json')
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
        })
        .catch((error) => {
          throw error;
        });
    }
    
    return this.data[property];
  };
}
