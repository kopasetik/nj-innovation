/**
 * @jest-environment jsdom
 */

const unhighlightCurrencies = require('../js/unhighlightCurrencies')

describe('highlights selected currency button', ()=>{
    
    beforeEach(() => {
        document.body.innerHTML = '<section id="currency-buttons" class="grid-container">' 
        + '<ul class="usa-button-group usa-button-group--segmented grid-container">' 
        + '<li class="usa-button-group__item grid-col">' 
        + '<button id="dollars-button" class="usa-button" data-currency="USD">Dollars</button>' 
        + '</li>' 
        + '<li class="usa-button-group__item grid-col">' 
        + '<button id="euros-button" class="usa-button usa-button--outline" data-currency="EUR">Euros</button>' 
        + '</li>' 
        + '<li class="usa-button-group__item grid-col">' 
        + '<button id="pounds-button" class="usa-button usa-button--outline" data-currency="GBP">Pounds</button>' 
        + '</li>' 
        + '</ul>' 
        + '</section>'
    
    })
    
    it('makes all buttons unhighlighted', ()=>{
        unhighlightCurrencies()
    
        expect(document.getElementsByClassName('usa-button--outline').length).toEqual(document.getElementsByClassName('usa-button').length)
    })
})