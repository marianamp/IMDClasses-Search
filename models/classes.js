
// Include the Connection module, which allows to use the database.js where establish the connection.
const connection = require('../config');
// AJAX Request
class ClassModel {
    getClasses() {
        const query = `
        SELECT codigo, nome_disciplina, ch_total , qtd_unidades
        FROM disciplinas
        GROUP BY nome_disciplina, codigo, ch_total , qtd_unidades
        `;
        const result = new Promise((resolve, reject) => {
            connection.query(query, (err, result) => resolve(result));
        })
        return result;
    }
}

module.exports = new ClassModel();