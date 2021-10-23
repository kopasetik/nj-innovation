const isDueForNewUpdate = (storage) => {
    const now = Number.parseInt(performance.now(),10) // int because floating point math is... questionable
    
    const latestUpdate = Number.parseInt(localStorage.getItem('latestUpdate'),10)

const fiveMins = 5 * 60 * 1000

return now > (latestUpdate + fiveMins)
                                             
}

module.exports = isDueForNewUpdate