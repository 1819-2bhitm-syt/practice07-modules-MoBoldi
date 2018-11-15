const encrypt = require("./encrypt");
const decrypt = require("./decrypt");

let text = "Alle meine Entchen schwimmen auf dem See, schwimmen auf dem See, Köpfchen unters Wasser, Schwänzchen in die höh.";

let encrypted = encrypt("123", text);
console.log(encrypted);

let decrypted = decrypt("123", encrypted)
console.log(decrypted);

