const cacheLastCurrency = (storage, thisCurrency) => {
    
    storage.setItem('lastCurrency', thisCurrency)
    
    return thisCurrency
    }                                        

module.exports = cacheLastCurrency