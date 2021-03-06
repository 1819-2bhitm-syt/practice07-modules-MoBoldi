const crypto = require('crypto');

function encryptText(password, text){
    const cipher = crypto.createCipher('aes192', password);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

module.exports = encryptText;