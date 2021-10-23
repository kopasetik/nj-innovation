const processPrice = require('../js/processPrice')

it ('should turn a comma-separated number string into an actual float', () => {

    expect(processPrice('52,360.6421')).toEqual(52360.64)
})