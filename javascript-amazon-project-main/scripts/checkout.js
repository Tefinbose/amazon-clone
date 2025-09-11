import { Cart, RemoveFromCart } from "../data/Cart.js";
import { products } from "../data/products.js";
// importing utilities
import { FormatCurrency } from "./utils/money.js";

let CartSummaryHtml;
Cart.forEach((CartItem) => {
  const { ProductId, quantity } = CartItem;
  let MatchingItem;
  products.forEach((product) => {
    if (ProductId === product.id) {
      MatchingItem = product;
    }
  });
  console.log(MatchingItem);

  CartSummaryHtml += `
    <div class="cart-item-container js-cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${MatchingItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${MatchingItem.name}
                </div>
                <div class="product-price">
                  ${FormatCurrency(MatchingItem.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${
                      CartItem.quantity
                    }</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
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
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="${MatchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="${MatchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="${MatchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
});

document.querySelector(".js-order-summary").innerHTML = CartSummaryHtml;

// making the delete button interactive
const DeleteBtn = document.querySelectorAll(".js-delete-quality-link");
DeleteBtn.forEach((link) => {
  console.log(link);
  link.addEventListener("click", () => {
    // console.log("Button clicked");
    const ProductId = link.dataset.deleteId;
    // console.log(ProductId);
    RemoveFromCart(ProductId);
    console.log(Cart);
    // console the item code
    const container = document.querySelector(`.js-cart-item-container`);
    console.log(container);
    console.log(ProductId);
    container.remove()
  });
});
