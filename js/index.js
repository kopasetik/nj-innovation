const fetchPrice = require('./fetchPrice')
const convertTime = require('./convertTime')
const swapCurrency = require('./swapCurrency')
const cacheData = require('./cacheData')

const main = document.getElementById('main-content')

let lastUpdated = localStorage.getItem('lastUpdated')

main.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
        switch (e.target.id){
            case 'refresh-button':
                fetchPrice(localStorage)
                break
            case 'dollars-button':
                fetchPrice(localStorage)
                swapCurrency('dollars')
                break
            case 'euros-button':
                fetchPrice(localStorage)
                swapCurrency('euros')
                break
            case 'pounds-button':
                fetchPrice(localStorage)
                swapCurrency('pounds')
                break

        }
    }
},)