const crypto = require('crypto');

function decryptText(password, text){
    const decipher = crypto.createDecipher('aes192', password);
    let decrypted;
    try {
        decrypted = decipher.update(text, 'hex', 'utf8');
    } catch (err) {
        console.error('HASH-Code invalid!');
    }
    try {
        decrypted += decipher.final();
    } catch (err) {
      console.error('Authentication failed!');
    }
    return decrypted;
}

module.exports = decryptText;