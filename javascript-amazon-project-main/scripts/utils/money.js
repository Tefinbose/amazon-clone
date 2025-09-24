 export function FormatCurrency(priceCents){
    return(Math.round(priceCents)/100).toFixed(2)
    
}
// New version of a Export in [ESM]
export default FormatCurrency