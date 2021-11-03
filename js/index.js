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

const updateTimestamp = () => {
        updateDOM('#update-time', convertTime(localStorage.getItem('ISODate')))

}
const updatePriceIn = (currency) => {
        updateDOM('#price-digits', localStorage.getItem(currency))
	updateDOM('#reader-price', `${localStorage.getItem(currency)} ${currency}`)
}    

    cacheFetchData(localStorage, fetchPrice).then(() => {
	updateTimestamp()
	updatePriceIn('dollars')
    })
    localStorage.setItem('lastCurrency', 'dollars')
    highlightCurrency('dollars')

if (localStorage.getItem('ISODate') === null){ 
    const now = Date.now()
    const ISOString = (new Date(Date.now())).toISOString()
    localStorage.setItem('ISODate', ISOString)
                                             } else {
    let lastCurrency = localStorage.getItem('lastCurrency')    
    updateTimestamp()
    updatePriceIn(lastCurrency)
    swapCurrencySymbol(lastCurrency)
    unhighlightCurrencies()
    highlightCurrency(lastCurrency)
                                             }


main.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
        
        if (e.target.id === 'refresh-button'){ 
            if (!isDueForNewUpdate(localStorage)) return
            
            return cacheFetchData(localStorage, fetchPrice).then(() => {
	    updateTimestamp()
            let lastCurrency = localStorage.getItem('lastCurrency')
	    updatePriceIn(lastCurrency)
            
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
		updateTimestamp()
		updatePriceIn(lastCurrency)
		swapCurrencySymbol(lastCurrency)
		unhighlightCurrencies()
		highlightCurrency(lastCurrency)
            })
            
        }

	updatePriceIn(lastCurrency)
        swapCurrencySymbol(lastCurrency)
        unhighlightCurrencies()
        highlightCurrency(lastCurrency)
    }
}, false)


    
