const processPrice = require('./processPrice')

const cacheData = async (storage, fetcher) => {
    storage.setItem('lastUpdated', performance.now())
    
    return await fetcher(storage).then(({EUR, GBP, USD}) => {
                
                    storage.setItem('euros', processPrice(EUR.rate))
                    storage.setItem('dollars', processPrice(USD.rate))
                    storage.setItem('pounds', processPrice(GBP.rate))
                })
    }                                        

module.exports = cacheData