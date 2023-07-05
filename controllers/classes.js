const express = require('express');
const router = express.Router();

// Importação do modelo
const disciplinaModel = require('../models/classes');
// Include the Connection module, which allows to use the database.js where establish the connection.
const connection = require('../config');
// Pickin up the database information
router.get('/disciplinas', (req, res) => {
    const query = `
      SELECT codigo, nome_disciplina, ch_total , qtd_unidades
      FROM disciplinas
      GROUP BY nome_disciplina
    `;
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error obtain the database data:', error);
        res.status(500).send('Server Error');
        return;
      }
      res.json(results);
    });
  });

  module.exports = router;