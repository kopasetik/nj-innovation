const cacheData = require('./cacheData')
const convertTime = require('./convertTime')
const fetchPrice = require('./fetchPrice')
const highlightCurrency = require('./highlightCurrency')
const isDueForNewUpdate = require('./isDueForNewUpdate')
const processPrice = require('./processPrice')
const swapCurrencySymbol = require('./swapCurrencySymbol')
const updateDOM = require('./updateDOM')

const main = document.getElementById('main-content')

let lastUpdated = localStorage.getItem('lastUpdated')

main.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
        if (isDueForNewUpdate) {
            cacheData(localStorage, fetchPrice)
            updateDOM('#update-time', convertTime(ISODate)) // with reformatted ISO date
        }
        const ISODate = `2021-09-17T17:35:00+00:00`        
        let latestCurrency = 'dollars'

        buttonDictionary = {
            'refresh-button': 'dollars',
            'dollars-button': 'dollars',
            'euros-button': 'euros',
            'pounds-button': 'pounds',
        }
        
        latestCurrency = buttonDictionary[e.target.id]
        
        updateDOM('#price-digits', localStorage.getItem(latestCurrency)) // with last selected currency
        swapCurrencySymbol(latestCurrency)
        // highlightCurrency(latestCurrency)
    }
},)