const fetchPrice = require('./fetchPrice')


const cacheData = (storage) => {
    lastUpdated= storage.getItem('lastUpdated')
    if (performance.now - lastUpdated> 300000) {
        fetchPrice(storage)
        } else {
        //noop
        ()=>{}
    }
}

module.exports = cacheData