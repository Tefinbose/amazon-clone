 export const Cart=[
    {ProductId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:1
    },
    {
        ProductId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1
    }
    
 ];
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
