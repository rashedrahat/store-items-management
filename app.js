class Store {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  isItemAvailable(name) {
    var itemIndex = this.items.indexOf(name);
    if (itemIndex == -1) {
      return false;
    } else {
      return true;
    }
  }

  addItem(name) {
    this.items.push(name);
  }
}

var myStore = new Store("RAR Fashion House");
myStore.addItem("shirt");
myStore.addItem("pant");
myStore.isItemAvailable("shirt");
myStore.isItemAvailable("shoes");
