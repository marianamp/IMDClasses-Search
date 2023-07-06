// Include the File System module, which allows to do actions with files.
const fs = require('fs');
class Json {
    get() {
        return new Promise((resolve, reject) => {
            fs.readFile('../register.json', (err, jsonData) => {
                resolve(jsonData);
            });
        });
    }
}
module.exports = new Json();