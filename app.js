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

// Configurar o middleware para analisar o corpo do formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuring the routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'resources/views/index.html'));
});
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'resources/views/login.html'));
});
app.get('/dashboard', function(req, res) {
  res.sendFile(path.join(__dirname, 'resources/views/dashboard.html'));
});
app.get('/classes', function(req, res) {
  res.sendFile(path.join(__dirname, 'resources/views/classes.html'));
});
app.get('/settings', function(req, res) {
  res.sendFile(path.join(__dirname, 'resources/views/settings.html'));
});

    /*
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username ) {
    return res.send('Username is required');
  }
  else if(!email ) {
    return res.send('Email is required');
  }
  else if(!password ) {
    return res.send('Password is required');
  }
  if(!username || !email || !password) {
    return res.send('Por favor, preencha todos os campos');
  }

  // Se chegou até aqui, todos os campos foram preenchidos
  // Faça o processamento necessário

  res.send('Form submitted successfully');
  
const bodyParser = require('body-parser');
app.use(bodyParser.json());
});
*/
/*
app.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;
  
// Create a object with the user's data
const userData = {
  nome,
  email,
  senha
};

// Ler o arquivo JSON existente (se houver)
let jsonData = [];
if (fs.existsSync('dados.json')) {
  const fileData = fs.readFileSync('dados.json', 'utf8');
  if (fileData) {
    // Parse make the data that is a string change to a JavaScript object.
    jsonData = JSON.parse(fileData);
  }
}

// Adicionar os novos dados ao array de dados existente
jsonData.push(userData);

// Converter o array para JSON
const updatedData = JSON.stringify(jsonData, null, 2);

  // Save the data of the form in a JSON file
  fs.writeFile('dados.json', jsonData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao salvar os dados.' });
    }
    return res.json({ message: 'Dados salvos com sucesso.' });
  });
});
*/
/*
app.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;

  // Cria um objeto com os dados do usuário
  const userData = {
    nome,
    email,
    senha
  };

  // Lê o arquivo JSON existente (se houver)
  let jsonData =[];
  if (fs.existsSync('dados.json')) {
    const fileData = fs.readFileSync('dados.json', 'utf8');
    if (fileData) {
      jsonData = JSON.parse(fileData);
    }
  }
   // Adiciona os novos dados ao objeto existente
   jsonData = {
    ...jsonData,
    ...userData
  };
  // Adiciona os novos dados ao array existente
  jsonData.push(userData);

  // Converte o array para JSON
  const updatedData = JSON.stringify(jsonData, null, 2);

  // Salva os dados do formulário em um arquivo JSON
  fs.writeFile('dados.json', updatedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao salvar os dados.' });
    }
    return res.json({ message: 'Dados salvos com sucesso.' });
  });
});*/

/*
app.post('/register', [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').notEmpty().withMessage('Email is required'),
  body('password').notEmpty().withMessage('Password is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  // Se chegou até aqui, o formulário foi validado com sucesso
  // Faça o processamento necessário
  res.send('Form submitted successfully');
});
*/
/*
// Rota para lidar com o envio do formulário
app.post('/register', [
  check('username', 'This username must exist')
    .exists(),
  check('username', 'This username must have 3+ characters long')
    .isLength({ min: 3 }),
  check('email', 'Email must exist')
    .exists(),
  check('email', 'Email is not valid')
    .isEmail(),
  check('password', 'The password must exist')
    .exists(),
  check('password', 'The password must have 6+ characters')
    .isLength({ min: 6 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Se chegou até aqui, o username, o email e a senha são válidos
  res.send('Successfully Register');
});
*/
// Route POST to deal with the form
app.post('/register', (req, res) => {
  // Dados enviados pelo formulário
  const data = req.body; 

  // Convert the data in JSON format
  const jsonData = JSON.stringify(data, null, 2);

  // Write a JSON file
  fs.writeFile('register.json', jsonData, err => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao salvar o arquivo JSON');
    } else {
      res.send('Arquivo JSON salvo com sucesso');
    }
  });
});

// Open the server in the 8080 port.
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080")
})
