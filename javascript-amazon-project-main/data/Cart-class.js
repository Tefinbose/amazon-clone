class Cart {
  cartitems;
  #localStorageKey ;

  constructor(localStorageKey){
    this.#localStorageKey=localStorageKey;
    this.#loadFromStorage()

  }

  #loadFromStorage() {
    this.cartitems = JSON.parse(localStorage.getItem(this.#localStorageKey));
    if (!Array.isArray(this.cartitems)) {
      this.cartitems = [
        {
          ProductName: "Black and Gray Athletic Cotton Socks - 6 Pairs",
          ProductId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
        {
          ProductName: "Intermediate Size Basketball",
          ProductId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: "2",
        },
      ];
    }
  }
  SaveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartitems));
  }
  addToCart(ProductName, ProductId) {
    let MatchingItem;
    this.cartitems.forEach((CartItem) => {
      //  console.log(CartItem.ProductName);
      if (ProductName === CartItem.ProductName) {
        MatchingItem = CartItem;
      }
    });
    if (MatchingItem) {
      MatchingItem.quantity += 1;
    } else {
      this.cartitems.push({
        ProductName,
        ProductId,
        quantity: 1,
        deliveryOptionId: "1",
      });
    }

    this.SaveToStorage();
  }
  CalculateCartQuantity() {
    let CartQuantity = 0;
    this.cartitems.forEach((item) => {
      CartQuantity += item.quantity;
      document.querySelector(".checkout-header-middle-section a").innerHTML =
        CartQuantity;
      console.log(CartQuantity);
    });
  }
  updateDeliveryOption(ProductId, deliveryOptionId) {
    let MatchingItem;
    this.cartitems.forEach((CartItem) => {
      if (ProductId === CartItem.ProductId) {
        MatchingItem = CartItem;
      }
    });
    MatchingItem.deliveryOptionId = deliveryOptionId;
    this.SaveToStorage();
  }
}

const cart= new Cart('Cart-oop')
const businessCart = new Cart('Cart-business');
// cart.#localStorageKey='oop'  acessing private property

console.log(businessCart);
console.log(cart instanceof Cart);
console.log(businessCart instanceof Cart);
console.log(this.cartitems);












