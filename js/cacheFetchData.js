const processPrice = require('./processPrice')

const cacheFetchData = async (storage, fetcher) => {
    storage.setItem('lastUpdated', performance.now())
    
    return await fetcher(storage).then(([{EUR, GBP, USD}, {updatedISO}]) => {
                
                    storage.setItem('euros', processPrice(EUR.rate))
                    storage.setItem('dollars', processPrice(USD.rate))
                    storage.setItem('pounds', processPrice(GBP.rate))
                    storage.setItem('ISODate', updatedISO)
        
        
                })
    }                                        

module.exports = cacheFetchData