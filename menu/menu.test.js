const Menu = require("./menu");
const Dish = require("../dish/dish");
describe("Menu class", () => {
  const menu = new Menu(
    new Dish("Beef Burger", 7),
    new Dish("Fish & Chips", 13),
    new Dish("Lasagna & Salad", 15)
  );

  it("returns the name of users", () => {
    expect(menu.getNames()).toEqual([
      "Beef Burger",
      "Fish & Chips",
      "Lasagna & Salad",
    ]);
  });

  it("prints all menu items ", () => {
    expect(menu.dishList()).toEqual([
      "Beef Burger : 7",
      "Fish & Chips : 13",
      "Lasagna & Salad : 15",
    ]);
  });
});
