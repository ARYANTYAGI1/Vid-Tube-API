const { app } = require('./app.js');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const DBConnection = require('./config/db.js');
DBConnection();

app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
});
