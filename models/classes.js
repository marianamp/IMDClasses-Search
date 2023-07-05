
// Include the Connection module, which allows to use the database.js where establish the connection.
const connection = require('../config');
// AJAX Request
exports.getClasses = (callback) => {
    $.ajax({
      url: '/classes',
      method: 'GET',
      success: callback,
      error: (xhr, status, error) => {
        console.error('Error to make a AJAX Request:', error);
        callback(error);
      }
    });
  };