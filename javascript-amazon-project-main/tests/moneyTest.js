import { FormatCurrency } from "../scripts/utils/money.js";
// Test suit
console.log("test suite : FormatCurrency");

console.log("Converting integers in to dollar");
if (FormatCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("Failed");
}
console.log("Working with Zero");

if (FormatCurrency(0) === "0.00") {
  console.log("Passed");
} else {
  console.log("failed");
}
console.log("assiging decimals based on their values");

if (FormatCurrency(500.90) === "5.01") {
  console.log("passed");
} else {
  console.log("failed");
}
