/**
 * @jest-environment jsdom
 */


const updateDOM = require('../js/updateDOM') 

const fetchPrice = require('../js/fetchPrice')


describe('update text', () => {
    it('should update a designated element with new text', () => {
        
        document.body.innerHTML = `<section id="current-price">
              <span id="selected-currency">$</span><span id="price-digits">55000</span>
          </section>`
        
        updateDOM('#price-digits', '77777')
        expect(document.getElementById('price-digits').textContent).toEqual('77777')

    })
        
        
})