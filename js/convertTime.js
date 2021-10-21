const {format, parseJSON} = require('date-fns')

const convertTime = (isoTime) => format(parseJSON(isoTime), "p' ('OOO') on 'PPP")

module.exports = convertTime