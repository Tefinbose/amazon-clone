import { RenderOrderSummary } from "./checkout/orderSummary.js";
import { RenderPaymentSummary } from "./checkout/paymentSummary.js";
import { LoadProducts } from "../data/products.js";

// import '../data/Cart-class.js'
// import '../data/backend-practice.js'
LoadProducts(() => {
  // Anonymous function
  RenderOrderSummary();
  RenderPaymentSummary();
});
