// import data
const parksData = require('../data');
// import model
const Park = require('../models/parks');

describe('Park model', () => {
      const testPark = {
         name: "Castle Park",
         city: 'Bristol',
         foodAndBeverage: "vegan kiosk with outdoor seating area",
         parking: false,
         toilets: true,
         disableAccess: true,
         imgs: []
   };

    it('should make an instance of a cat', () => {
        const park = new Park({ ...testPark });

        expect(park.name).toBe("Castle Park");
        expect(park.city).toBe('Bristol');
        expect(park.foodAndBeverage).toBe("vegan kiosk with outdoor seating area");
        expect(park.parking).toBe(false);
        expect(park.toilets).toBe(true);
        expect(park.disableAccess).toBe(true);
        expect(park.imgs).toStrictEqual([]);
    });

    it('should return all parks', () => {
        const parks = Park.all;

        expect(parks).toEqual(parksData);
    });

/*     it('should return a cat', () => {
        const cat = Cat.findById(1);

        expect(cat).toEqual(catsData[0]);
    });

    it('should throw an error if no cat', () => {
        function testError() {
            Cat.findById(50);
        }

        expect(testError).toThrowError('That cat does not exist!');
    });

    it('should create a cat', () => {
        const newCatId = catsData.length + 1;
        const newCat = Cat.create(testCat);

        expect(newCat).toEqual({ id: newCatId, ...testCat });
    });

    it('should delete a cat', () => {
        const catToDestroyId = catsData.length;
        const catToDestroy = catsData[catToDestroyId - 1];
        catToDestroy.destroy();

        expect(catToDestroy).toEqual({ id: catToDestroyId, ...testCat });
        expect(catsData).not.toContain(catToDestroy);
    }); */
});
