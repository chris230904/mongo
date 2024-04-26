const mongoose = require('mongoose');
const DB_URI = `mongodb://localhost:27017/my_first_time`;

const connect = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('Conexión correcta');
  } catch (error) {
    console.log('DB: ERROR', error);
    process.exit(1);
  }
};

module.exports = connect;