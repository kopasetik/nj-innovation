/**
 * @jest-environment jsdom
 */
const unhighlightCurrencies = require('../js/unhighlightCurrencies')
const highlightCurrency = require('../js/highlightCurrency')

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
    
    it('makes a button highlighted', ()=>{
        highlightCurrency('euros')
        
        expect(document.getElementById('euros-button').classList.contains('usa-button--outline')).toBe(false)
    })
    

    it('only has one button highlighted at a time. in other words, only one currency button does not have the usa-button--outline class', ()=>{
        unhighlightCurrencies()
        highlightCurrency('pounds')
    
        expect(document.getElementsByClassName('usa-button--outline').length).toEqual(document.getElementsByClassName('usa-button').length-1)
        expect(document.getElementById('pounds-button').classList.contains('usa-button--outline')).toBe(false)
    })
})