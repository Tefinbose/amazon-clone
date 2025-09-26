import {FormatCurrency} from "../scripts/utils/money.js"
console.log("converts cents in to dollar");

if(FormatCurrency(2000)==20.00){
    console.log("Passed");
    
}else{
    console.log("failed");
    
}
console.log("Works with 0 ");

if(FormatCurrency(0)==="0.00"){
    console.log("passed");
    
}else{
    console.log("failed");
}
console.log('working with');
if(FormatCurrency(2000.6)==="20.01"){
    console.log("Passed");
    
}else{
    console.log("Not passed");
    
}