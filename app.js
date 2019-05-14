class Store {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.prices = {};
    this.stock = {};
    this.totalSales = 0;
  }

  isItemAvailable(name) {
    var itemIndex = this.items.indexOf(name);
    if (itemIndex == -1) {
      return false;
    } else {
      return true;
    }
  }

  addItem(name, price) {
    this.items.push(name);
    this.prices[name] = price;
  }

  getPrice(name) {
    var isAvailable = this.isItemAvailable(name);
    if (isAvailable == true) {
      var itemPrice = this.prices[name];
      return itemPrice;
    } else {
      console.log("Sorry! We don't have the item.");
    }
  }

  sellItem(name, quantity) {
    var available = this.stock[name];
    if (available < quantity) {
      console.log("Sorry, we don't have enough!");
    } else {
      var itemPrice = getPrice(name);
      var currentSale = itemPrice * quantity;
      this.totalSales = this.totalSales + currentSale;
      var remaining = available - quantity;
      this.stock = remaining;
      console.log("Thank you for the purchase :)");
    }
  }

  getTotalSales() {
    return this.totalSales;
  }
}

var myStore = new Store("RAR Fashion House");
myStore.addItem("shirt", 500);
myStore.addItem("pant", 700);
myStore.getPrice("shirt");
myStore.getPrice("bread");
