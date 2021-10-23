const swapCurrencySymbol = (newCurrency) => {
    
    const currencyDictionary = {
        dollars: '$',
        euros: '€',
        pounds: '£'
    }
    
    return document.getElementById('selected-currency').innerHTML = currencyDictionary[newCurrency]
}

module.exports = swapCurrencySymbol