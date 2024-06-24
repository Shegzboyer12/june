class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    getTotalItems() {
      let totalItems = 0;
      this.items.forEach(item => {
        totalItems += item.quantity;
      });
      return totalItems;
    }
  
    addItem(product, quantity = 1) {
      // Check if the product is already in the cart
      let found = false;
      this.items.forEach(item => {
        if (item.product.id === product.id) {
          item.quantity += quantity;
          found = true;
        }
      });
  
      // If not found, add new item to the cart
      if (!found) {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    displayCart() {
      console.log("Shopping Cart:");
      this.items.forEach(item => {
        console.log(`${item.product.name} - Quantity: ${item.quantity}`);
      });
      console.log(`Total Items: ${this.getTotalItems()}`);
    }
  }
// Create some products
let product1 = new Product(1, "Laptop", 999);
let product2 = new Product(2, "Mouse", 25);
let product3 = new Product(3, "Keyboard", 50);

// Create a shopping cart
let cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart
cart.displayCart(); 

// Remove an item from the cart (e.g., product with id 2)
cart.removeItem(2);

// Display the cart again after removing item
cart.displayCart();
      