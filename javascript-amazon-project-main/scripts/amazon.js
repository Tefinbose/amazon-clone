import { Cart } from "../data/Cart.js";


let productsHtml = "";
products.forEach((products) => {
  const { image } = products;
  // console.log(image);

  // console.log(products);
  // Accumulator pattern(looping through the array and save it in a variable)
  productsHtml += ` 
<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
           ${(products.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-productId="${
            products.id
          }">
            Add to Cart
          </button>
        </div>
`;
});
console.log(productsHtml);
const acessingElement = document.querySelector(".js-products-grid");
acessingElement.innerHTML = productsHtml;


// console.log(ListQuantity);

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const ProductId = button.dataset;
    //  console.log(ProductName);
    // Accessing the list of the Quantity
let ListQuantity = document.querySelectorAll(
  ".product-quantity-container select"
);
console.log(ListQuantity);
ListQuantity.forEach((item) => {
  item.addEventListener("change", () => {
    console.log(item.value);
  });
});

    let MatchingItem;
    Cart.forEach((item) => {
      if (ProductId === item.ProductId) {
        MatchingItem = item;
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

    // To display the CartQuantity
    let CartQuantity = 0;
    Cart.forEach((item) => {
      CartQuantity += item.quantity;
    });
    document.querySelector(".to-add-cart-quantity").innerHTML = CartQuantity;
    console.log(CartQuantity);

    console.log(Cart);
  });
});
