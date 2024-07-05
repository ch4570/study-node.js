import { odd, even } from './var.mjs'

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd
    } else {
        return even
    }
}

export default checkStringOddOrEven
