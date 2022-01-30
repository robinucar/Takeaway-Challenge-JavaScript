const Dish = require("./dish/dish");
class Menu {
  constructor(...dishes) {
    this.dishes = dishes;
  }

  getNames() {
    return this.dishes.map((dish) => {
      return dish.getName();
    });
  }

  dishList() {
    return this.dishes.map((dish) => {
      return dish.printDish();
    });
  }
}

const m = new Menu(new Dish('Beef Burger', 7), new Dish('Fish & Chips', 13), new Dish('Lasagna & Salad', 15));
console.log(m.getNames());
console.log(m.dishList());

module.exports = Menu;
