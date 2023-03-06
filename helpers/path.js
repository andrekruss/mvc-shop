const path = require('path');

// this will return the path to the directory where our entry point for the app is located
// in this case, app.js
module.exports = path.dirname(process.mainModule.filename);