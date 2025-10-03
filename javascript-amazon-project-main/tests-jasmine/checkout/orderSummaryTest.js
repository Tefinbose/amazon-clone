import {RenderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/Cart.js";

describe('test suite : renderOrderSummary',()=>{
    it('displays the Cart',()=>{
        document.querySelector(".js-test-container").innerHTML=`<div class="js-order-summary"></div>`
        const productId1="e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
      
         spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([{
        ProductName:"Black and Gray Athletic Cotton Socks - 6 Pairs",
        ProductId:productId1,
        quantity:1,
         deliveryOptionId:"1"
      }]);
    });
    loadFromStorage()
    RenderOrderSummary()
    expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(2)
    expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain("quantity:1")
    })
    
}) 