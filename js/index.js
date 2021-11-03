const cacheFetchData = require('./cacheFetchData')
const cacheLastCurrency = require('./cacheLastCurrency')
const convertTime = require('./convertTime')
const fetchPrice = require('./fetchPrice')
const unhighlightCurrencies = require('./unhighlightCurrencies')
const highlightCurrency = require('./highlightCurrency')
const isDueForNewUpdate = require('./isDueForNewUpdate')
const processPrice = require('./processPrice')
const swapCurrencySymbol = require('./swapCurrencySymbol')
const updateDOM = require('./updateDOM')

const main = document.getElementById('main-content')
    
if (localStorage.getItem('lastUpdated') === null) {
    cacheFetchData(localStorage, fetchPrice).then(() => {
        updateDOM('#update-time', convertTime(localStorage.getItem('ISODate')))
        updateDOM('#price-digits', localStorage.getItem('dollars'))
	updateDOM('#reader-price', `${localStorage.getItem('dollars')} dollars`)
    })
}

if (localStorage.getItem('lastCurrency') === null) {
    localStorage.setItem('lastCurrency', 'dollars')
    highlightCurrency('dollars')
}

if (localStorage.getItem('ISODate') === null){ 
    const now = Date.now()
    const ISOString = (new Date(Date.now())).toISOString()
    localStorage.setItem('ISODate', ISOString)
                                             } else {
    let lastCurrency = localStorage.getItem('lastCurrency')    
    updateDOM('#update-time', convertTime(localStorage.getItem('ISODate')))
    updateDOM('#price-digits', localStorage.getItem(lastCurrency))
    updateDOM('#reader-price', `${localStorage.getItem(lastCurrency)} ${lastCurrency}`)
    swapCurrencySymbol(lastCurrency)
    unhighlightCurrencies()
    highlightCurrency(lastCurrency)
                                             }


main.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
        
        if (e.target.id === 'refresh-button'){ 
            if (!isDueForNewUpdate(localStorage)) return
            
            return cacheFetchData(localStorage, fetchPrice).then(() => {
                            updateDOM('#update-time', convertTime(localStorage.getItem('ISODate')))
            let lastCurrency = localStorage.getItem('lastCurrency')
            updateDOM('#price-digits', localStorage.getItem(lastCurrency))
	    updateDOM('#reader-price', `${localStorage.getItem(lastCurrency)} ${lastCurrency}`)
            
            })
                }
        
        const buttonDictionary = {
            'dollars-button': 'dollars',
            'euros-button': 'euros',
            'pounds-button': 'pounds',
        }
        
        let lastCurrency = buttonDictionary[e.target.id]        
        cacheLastCurrency(localStorage, lastCurrency)
        
        if (isDueForNewUpdate(localStorage)) {
            cacheFetchData(localStorage, fetchPrice).then(() =>{
            updateDOM('#update-time', convertTime(localStorage.getItem('ISODate')))
            updateDOM('#price-digits', localStorage.getItem(lastCurrency))
	    updateDOM('#reader-price', `${localStorage.getItem(lastCurrency)} ${lastCurrency}`)
        swapCurrencySymbol(lastCurrency)
        unhighlightCurrencies()
        highlightCurrency(lastCurrency)
            })
            
        }

        updateDOM('#price-digits', localStorage.getItem(lastCurrency))
	updateDOM('#reader-price', `${localStorage.getItem(lastCurrency)} ${lastCurrency}`)
        swapCurrencySymbol(lastCurrency)
        unhighlightCurrencies()
        highlightCurrency(lastCurrency)
    }
}, false)


    
