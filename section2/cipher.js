const crypto = require("crypto");

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(16).toString('hex');
const iv = '1234567890123456'

const cipher = crypto.createCipheriv(algorithm, key, iv);

let cipherText = cipher.update('암호화할 문장', 'utf8', 'base64')
cipherText += cipher.final('base64')
console.log('암호화:', cipherText)

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let plainText = decipher.update(cipherText, 'base64', 'utf8')
plainText += decipher.final('utf8')
console.log('복호화:', plainText)