import { Cart, RemoveFromCart, updateDeliveryOption } from "../../data/Cart.js";
import { products, getProducts } from "../../data/products.js";
import { CalculateCartQuantity } from "../../data/Cart.js";
import { deliveryOptions } from "../../data/deliveryOption.js";
import { RenderPaymentSummary } from "./paymentSummary.js";
// importing utilities
import { FormatCurrency } from "../utils/money.js";

import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

export function RenderOrderSummary() {
  let CartSummaryHtml;
  Cart.forEach((CartItem) => {
    const { ProductId, quantity, ProductName } = CartItem;
    // console.log(ProductName);

    const MatchingItem = getProducts(ProductName);
    // console.log(MatchingItem);

    const deliveryOptionId = CartItem.deliveryOptionId;
   
    let deliveryOption;
    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd MMM D");

    CartSummaryHtml += `
    <div class="cart-item-container js-cart-item-container js-cart-item-container-${MatchingItem.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${MatchingItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                 ${MatchingItem.name}
                </div>
                <div class="product-price">
                  $${MatchingItem.getPrice()}
                </div>
                <div class="product-quantity js-product-quantity-${MatchingItem.id}">
                  <span>
                    Quantity: <span class="quantity-label">${
                      CartItem.quantity
                    }</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <input class="quantity-input" type="text"></input>
                  <span class="save-button">save<span/>
                  <span class="delete-quantity-link link-primary js-delete-quality-link" data-delete-Id="${
                    MatchingItem.id
                  }">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${DeliveryOptionHtml(MatchingItem, CartItem)}
                </div>
               
              </div>
            </div>
          </div>
    `;
  });

  function DeliveryOptionHtml(MatchingItem, CartItem) {
    let html;
    deliveryOptions.forEach((deliveryOpt) => {
      // console.log(deliveryOptions);
      const today = dayjs();
      const deliveryDate = today.add(deliveryOpt.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd MMMM D");
      const PriceString =
        deliveryOpt.priceCents === 0
          ? "Free"
          : `${FormatCurrency(deliveryOpt.priceCents)}`;

      const IsChecked =
        CartItem.deliveryOptionId === deliveryOpt.id ? "checked" : "";

      html += `
  <div class="delivery-option js-delivery-option" data-productid="${MatchingItem.id}" data-deliveryoptionid="${deliveryOpt.id}" >
                  <input type="radio"
                  ${IsChecked}
                  
                    class="delivery-option-input"
                    name="${MatchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${PriceString}- Shipping
                    </div>
                  </div>
                </div>
  `;
    });
    return html;
  }

  document.querySelector(".js-order-summary").innerHTML = CartSummaryHtml;

  // making the delete button interactive
  const DeleteBtn = document.querySelectorAll(".js-delete-quality-link");
  DeleteBtn.forEach((link) => {
    // console.log(link);
    link.addEventListener("click", () => {
      // console.log("Button clicked");
      const ProductId = link.dataset.deleteId;
      // console.log(ProductId);
      RemoveFromCart(ProductId);
      // console.log(Cart);

      const container = document.querySelector(
        `.js-cart-item-container-${ProductId}`
      );
      if (container) {
        container.remove();
        RenderPaymentSummary();
      } else {
        console.warn("No container with", ProductId);
      }
    });
  });
  CalculateCartQuantity();
  const deliveryOptionBtn = document.querySelectorAll(".js-delivery-option");
  deliveryOptionBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const ProductId = button.dataset.productid;
      const deliveryoptionid = button.dataset.deliveryoptionid;
      updateDeliveryOption(ProductId, deliveryoptionid);
      console.log(ProductId);
      console.log(deliveryoptionid);
      console.log(Cart);
      RenderOrderSummary();
      RenderPaymentSummary();
    });
  });
}
