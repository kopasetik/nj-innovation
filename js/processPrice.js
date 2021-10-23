const processPrice = (string) => {
    return parseFloat(string.split(',').reduce((acc, prev) => acc.concat(prev), '').slice(0,-2),10)
}

module.exports = processPrice