const isDueForNewUpdate = (storage) => {
    const now = Date.now()
    
    const latestUpdate = Number.parseInt(localStorage.getItem('latestUpdate'),10)

const fiveMins = 5 * 60 * 1000

return now > (latestUpdate + fiveMins)
                                             
}

module.exports = isDueForNewUpdate