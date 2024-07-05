const { odd, even } = require('./var')

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd
    } else {
        return even
    }
}

module.exports = checkStringOddOrEven
