import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-11-21';
    
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
        const query =
      this.baseUrl +
      `&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`
      console.log(query);
   
      this._quakes = await getJSON(query);
    return this._quakes;
    
  }
  getQuakeById(id) {
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}