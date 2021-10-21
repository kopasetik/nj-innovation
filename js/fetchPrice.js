const fetch = require('node-fetch')

const fetchPrice = async () => await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')

module.exports = fetchPrice