/**
 * @jest-environment jsdom
 */

const swapCurrencySymbol = require('../js/swapCurrencySymbol')

describe('swaps out currency display', ()=>{    
    it('changes the currency symbol', ()=>{
         document.body.innerHTML = '<span id="selected-currency">$</span>'

        swapCurrencySymbol('euros')
        
        expect(document.getElementById('selected-currency').innerHTML).toEqual('€')
    })

    
})