import { RenderOrderSummary } from "./checkout/orderSummary.js";
import { RenderPaymentSummary } from "./checkout/paymentSummary.js";
import { LoadProducts,LoadProductsfetch } from "../data/products.js";
import { LoadCart } from "../data/Cart.js";

// import '../data/Cart-class.js'
// import '../data/backend-practice.js'


Promise.all([
    LoadProductsfetch(),
new Promise((resolve)=>{
    LoadCart(()=>{
        resolve("Value2")
    })

  })
    
]).then((value)=>{
    console.log(value);
    RenderOrderSummary();
  RenderPaymentSummary();
})

/*new Promise((resolve) => {
  LoadProducts(() => {
    resolve("Value1");  //we can give parameters to the resolve
  });
  
}).then((value) => {
    console.log(value);
    
  new Promise((resolve)=>{
    LoadCart(()=>{
        resolve()
    })

  }).then(()=>{
    RenderOrderSummary();
  RenderPaymentSummary();
  })
});

/*LoadProducts(() => {
  LoadCart(() => {
    RenderOrderSummary();
    RenderPaymentSummary();
  });
  // Anonymous function
});*/
