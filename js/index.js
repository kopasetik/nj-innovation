const cacheFetchData = require('./cacheFetchData')
const cacheLastCurrency = require('./cacheLastCurrency')
const convertTime = require('./convertTime')
const fetchPrice = require('./fetchPrice')
const highlightCurrency = require('./highlightCurrency')
const isDueForNewUpdate = require('./isDueForNewUpdate')
const processPrice = require('./processPrice')
const swapCurrencySymbol = require('./swapCurrencySymbol')
const updateDOM = require('./updateDOM')

const main = document.getElementById('main-content')

let lastUpdated = localStorage.getItem('lastUpdated')

if (localStorage.getItem('lastCurrency') === null) localStorage.setItem('lastCurrency', 'dollars')

async (() => {
    if (localStorage.getItem('lastCurrency') === null) {
    await cacheFetchData(localStorage, fetchPrice)
    updateDOM('#update-time', convertTime(localStorage.getItem('ISODate')))
    updateDOM('#price-digits', localStorage.getItem('dollars'))
}
    
main.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
        
        if (e.target.id === 'refresh-button'){ 
            if (!isDueForNewUpdate(localStorage)) return
            
            await cacheFetchData(localStorage, fetchPrice)
            updateDOM('#update-time', convertTime(localStorage.getItem('ISODate')))
            let lastCurrency = localStorage.getItem('lastCurrency')
            updateDOM('#price-digits', localStorage.getItem(lastCurrency))
            
            return
                                            }
        
        const buttonDictionary = {
            'dollars-button': 'dollars',
            'euros-button': 'euros',
            'pounds-button': 'pounds',
        }
        
        let lastCurrency = buttonDictionary[e.target.id]        
        cacheLastCurrency(localStorage, lastCurrency)
        
        if (isDueForNewUpdate(localStorage)) {
            await cacheFetchData(localStorage, fetchPrice)
            updateDOM('#update-time', convertTime(localStorage.getItem('ISODate')))
        }

        updateDOM('#price-digits', localStorage.getItem(lastCurrency))
        swapCurrencySymbol(lastCurrency)
        // highlightCurrency(lastCurrency)

    }
}, false)
    
})()