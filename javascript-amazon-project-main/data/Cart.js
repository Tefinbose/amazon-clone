 export const Cart=[];
console.log(Cart);

// Fetching catProducts
 export function addToCart(ProductId) {
  let MatchingItem;
  Cart.forEach((CartItem) => {
    if (ProductId === CartItem.ProductId) {
      MatchingItem = CartItem;
    }
  });
  if (MatchingItem) {
    MatchingItem.quantity += 1;
  } else {
    Cart.push({
      ProductId: ProductId,
      quantity: 1,
    });
  }
}
