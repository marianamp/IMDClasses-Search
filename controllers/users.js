'use strict';
const express = require('express');
const router = express.Router();

// Importação do modelo
const UserModel = require('../models/users');
// Include the Connection module, which allows to use the database.js where establish the connection.

class UsersController {
    constructor(userModel) {
        this.userModel = UserModel;
    }
    async execute(req, res) {
        const {email} = req.body;
        //const result = await this.userModel.getUser(email);
        //console.log(result);
        res.render('Dashboard.ejs');
    }
    
}

// Pickin up the database information

module.exports = new UsersController();