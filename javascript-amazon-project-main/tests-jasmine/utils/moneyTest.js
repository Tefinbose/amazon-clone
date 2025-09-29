import {FormatCurrency} from "../../scripts/utils/money.js"
describe(' test suite : FormatCurrency',()=>{
    it('converts cents in to dollar',()=>{
        expect(FormatCurrency(2095)).toBe('20.95')
    })
})
it('works with 0',()=>{
    expect(FormatCurrency(0)).toBe('0.00')
})
it('Rounding the decimals based on values',()=>{
    expect(FormatCurrency(200.5)).toBe("2.01")
})