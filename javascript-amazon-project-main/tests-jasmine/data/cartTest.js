import { addToCart, Cart, loadFromStorage } from "../../data/Cart.js";

describe("test suite :addToCart", () => {
  it("add an existing product in to the cart", () => {
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([{
        ProductName:"Black and Gray Athletic Cotton Socks - 6 Pairs",
        ProductId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",quantity:1,
         deliveryOptionId:"1"
      }]);
    });
    loadFromStorage()
  });

  it("add an new product in to the cart", () => {
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    });
    // Here whats happening the spyon creates a new function and new method that returns an empty array ,loadFromStorage gets the value from the fake localstorage ,([])
    console.log(localStorage.getItem("Cart"));
    loadFromStorage();

    addToCart(
      "Black and Gray Athletic Cotton Socks - 6 Pairs",
      "e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
    );
    expect(Cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(Cart[0].ProductId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(Cart[0].quantity).toBe(1);
  });
});
