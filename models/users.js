// Include the Connection module, which allows to use the database.js where establish the connection.
// Include the File System module, which allows to do actions with files.
const fs = require('fs');
const json = require('../config/json');
// Write a JSON file
// const usersPromise = new Promise((resolve, reject) => {
//     fs.readFile('../register.json', (err, jsonData) => {
//         resolve(jsonData);
//     });
//   });

class UserModel {
    constructor(userModel) {
        this.userModel = json;
    }
    async getUser(email) {
        const users = await this.userModel;
        const user = users.find((user) => user.email===email);
        return user;
    }
}

module.exports = new UserModel();