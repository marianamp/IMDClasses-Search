'use strict';
const express = require('express');
const router = express.Router();

// Importação do modelo
const ClassModel = require('../models/classes');
// Include the Connection module, which allows to use the database.js where establish the connection.

class ClassController {
    constructor(classModel) {
        this.classModel = ClassModel;
    }
    async execute(req, res) {
        const result = await this.classModel.getClasses();
        console.log(result);
        res.render('classes.ejs',{result});
    }
}

// Pickin up the database information

module.exports = new ClassController();