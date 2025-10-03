// so Here are accessing the cart from the storage sometimes it shows null
function Cart(localStorageKey) {
  const cart = {
    cartitems: undefined, //These are the properties
    loadFromStorage: function () {
      this.cartitems = JSON.parse(localStorage.getItem(localStorageKey));
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
    },
    // Function to save the cart in Local storage
    SaveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartitems));
    },
    // Fetching cartProducts
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
    },
    // Calculate the CartQuantity function
    CalculateCartQuantity() {
      let CartQuantity = 0;
      this.cartitems.forEach((item) => {
        CartQuantity += item.quantity;
        document.querySelector(".checkout-header-middle-section a").innerHTML =
          CartQuantity;
        console.log(CartQuantity);
      });
    },
    updateDeliveryOption(ProductId, deliveryOptionId) {
      let MatchingItem;
      this.cartitems.forEach((CartItem) => {
        if (ProductId === CartItem.ProductId) {
          MatchingItem = CartItem;
        }
      });
      MatchingItem.deliveryOptionId = deliveryOptionId;
      this.SaveToStorage();
    },
  };
  return cart;
}
// Normal cart
const cart = Cart('cart-oop');
// Business Cart
const businessCart = Cart('cart-business');
cart.loadFromStorage();
businessCart.loadFromStorage()
cart.addToCart(
  "2 Slot Toaster - Black",
  "54e0eccd-8f36-462b-b68a-8182611d9add"
);
console.log(businessCart);

console.log(cart);
