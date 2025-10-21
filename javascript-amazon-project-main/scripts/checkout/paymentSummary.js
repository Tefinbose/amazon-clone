import { Cart } from "../../data/Cart.js";
import { getProducts } from "../../data/products.js";
import { getDeliveryOptions } from "../../data/deliveryOption.js";
import {FormatCurrency} from "../utils/money.js"

export function RenderPaymentSummary() {
  // Model
  let TotalPriceCents = 0;
  let shipmentPriceCents = 0;

  Cart.forEach((cartItem) => {
    const { ProductName, ProductId, quantity, deliveryOptionId } = cartItem;
    //  For finding the totalPrice of the products
    const product = getProducts(cartItem.ProductName);
    TotalPriceCents += product.priceCents * cartItem.quantity;
    // For finding the totalshipping charges
    const shipmentChrgs = getDeliveryOptions(cartItem.deliveryOptionId);
    shipmentPriceCents += shipmentChrgs.priceCents;
  });
  const totalBeforeTaxCents = TotalPriceCents + shipmentPriceCents;
  // console.log(totalBeforeTaxCents);
  // 10% of tax
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;
  

  let paymentSummaryHtml=`
  <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items ):</div>
            <div class="payment-summary-money">${FormatCurrency(TotalPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">${FormatCurrency(shipmentPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">${FormatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">${FormatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">${FormatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
  
  `;
  document.querySelector(".js-payment-summary").innerHTML=paymentSummaryHtml
  
}
