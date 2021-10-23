const fetch = require('node-fetch')

const fetchPrice = async (storage) => {
    storage.setItem('lastUpdated', performance.now())
    
    return await fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(res => res.json()).then(({bpi}) => bpi)
}

module.exports = fetchPrice