const parksData = require('../data')

class Park {
   constructor(data) {
      this.name = data.name
      this.city = data.city
      this.foodAndBeverage = data.foodAndBeverage
      this.parking = data.parking
      this.toilets = data.toilets
      this.disableAccess = data.disableAccess
      this.imgs = data.imgs
   }

   static get all() {
      const parks = parksData.map((park) => new Park(park));
      return parks;
   }

   static findByCity(city) {
      try {
         const result = parksData.filter( (park) => park.city.toLowerCase() === city.toLowerCase());
         const parks = result.map((park) => new Park(park));
         return parks;
      } catch (err) {
         throw new Error(`No parks registered for ${city}`)
      }
   }

   static findByName(name) {
      try {
         const result = parksData.filter( (park) => park.name.toLowerCase() === name.toLowerCase());
         const parks = result.map((park) => new Park(park));
         return parks;
      } catch (err) {
         throw new Error(`No parks registered for ${name}`)
      }
   }


   static create(park) {
      const newPark = new Park(...park);
      parksData.push(newPark);
      return newPark;
   }

   destroy() {
      const park = parksData.filter((park) => park.name === this.name)[0];
      parksData.splice(parksData.indexOf(park), 1);
   }
}


module.exports = Park;
