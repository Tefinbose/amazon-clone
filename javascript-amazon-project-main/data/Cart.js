
// so Here are accessing the cart from the storage sometimes it shows null 
export let Cart ;
loadFromStorage()
export function loadFromStorage(){
   Cart=JSON.parse(localStorage.getItem("Cart"));
if (!Cart) {
  Cart = [
    {
      ProductName: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      ProductId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
      deliveryOptionId:"1"
    },
    {
      ProductName: "Intermediate Size Basketball",
      ProductId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId:"2"
    },
  ];
}
}

console.log(Cart);

// Function to save the cart in Local storage
function SaveToStorage() {
  localStorage.setItem("Cart", JSON.stringify(Cart));
}

// Fetching cartProducts
export function addToCart(ProductName, ProductId) {
  let MatchingItem;
  Cart.forEach((CartItem) => {
    //  console.log(CartItem.ProductName);
    if (ProductName === CartItem.ProductName) {
      MatchingItem = CartItem;
    }
  });
  if (MatchingItem) {
    MatchingItem.quantity += 1;
  } else {
    Cart.push({
      ProductName,
      ProductId,
      quantity: 1,
      deliveryOptionId:"1"
    
    });
  }

  SaveToStorage();
}
// Function to remove the CartItem
export function RemoveFromCart(ProductId) {
  const newCartArray = [];
  Cart.forEach((Cartitem) => {
    if (Cartitem.ProductId !== ProductId) {
      newCartArray.push(Cartitem);
    }
  });
  Cart = newCartArray;
  SaveToStorage();
  
}
// Calculate the CartQuantity function
 export function CalculateCartQuantity(){
  let CartQuantity = 0;
  Cart.forEach((item) => {
    CartQuantity += item.quantity;
    document.querySelector(".checkout-header-middle-section a").innerHTML =
      CartQuantity;
      // console.log(CartQuantity);
      
  });
}


  export function updateDeliveryOption(ProductId,deliveryOptionId){
  let MatchingItem;   
  Cart.forEach((CartItem)=>{
      if(ProductId===CartItem.ProductId){
        MatchingItem=CartItem
      }
     });
     MatchingItem.deliveryOptionId=deliveryOptionId
     SaveToStorage()

 }
 export function LoadCart(fun) {
   const xhr = new XMLHttpRequest();
  
   
   xhr.open("GET", "https://supersimplebackend.dev/cart");
   xhr.send(); 
   fun()
 }

