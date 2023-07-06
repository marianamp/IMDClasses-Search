// Include the Connection module, which allows to use the database.js where establish the connection.
const connection = require('./config');
const router = require('./routes');

// Include the Express module, which allows to use the framework Express.js.
const express = require('express');
// Include the Path module, which allows to use path variables.
const path = require('path');
// Include the File System module, which allows to do actions with files.
const fs = require('fs');
// Include the Express Validator module, which allows to check and validate forms.
const { body, check, validationResult } = require('express-validator');
// New instance of a Express application.
const app = express();
// Configure the app to use a static folder.
app.use(express.static('public'));
// Static files.
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));
app.set('view engine', 'ejs'); // Define o mecanismo de modelo como EJS
app.set('views', './resources/views');
// Configurar o middleware para analisar o corpo do formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

const classesModel = require('./models/classes.js');

// Route POST to deal with the form
app.post('/register', async (req, res) => {
  // Dados enviados pelo formulário
  const dataRequest = req.body;

  // Convert the data in JSON format
  const requestData = JSON.stringify([dataRequest], null, 2);

  // Write a JSON file
  const dataPromise = new Promise((resolve, reject) => {
    fs.readFile('register.json', (err, jsonData) => {
      if (!jsonData) {
        fs.writeFile('register.json', requestData, err => {
          if (err) {
            console.error(err);
            res.status(500).send('Erro ao salvar o arquivo JSON');
          } else {
            res.send('Arquivo JSON salvo com sucesso');
          }
        });
      } else {
        resolve(jsonData);
      }
    });
  });

  const resolved = await dataPromise;

  if (resolved) {
    const data = JSON.parse(resolved);
    data.push(dataRequest)
    const result = JSON.stringify(data);
    fs.writeFile('register.json', result, err => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao salvar o arquivo JSON');
      } else {
        res.send('Arquivo JSON salvo com sucesso');
      }
    });
  }
});


// Open the server in the 8080 port.
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000")
})
