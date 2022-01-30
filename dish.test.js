const Dish = require('./dish')
describe("dish class", () => {
    const dish = new Dish("Beef Burger", 7);
  it("returns the dish name", () => { 
    expect(dish.getName()).toBe("Beef Burger");
  });

  it("returns the dish price", () => { 
    expect(dish.getPrice()).toBe(7);
  });


  it("returns the dish and price", () => {
    
    expect(dish.printDish()).toBe("Beef Burger : 7");
  });
});
