const isDueForNewUpdate = (storage) => {
    const now = Date.now()
    
    const lastUpdated = Number.parseInt(localStorage.getItem('lastUpdated'),10)

const fiveMins = 5 * 60 * 1000

return now > (lastUpdated + fiveMins)
                                             
}

module.exports = isDueForNewUpdate