const mongoose = require('mongoose');

const USER_NAME = 'uc_her_stride';
const PASSWORD = 'AYLe6Ef0blqKazni';
const DATABASE = 'uc_her_stride'
const MONGO_CONNECTION_URI = `mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.moqd5yq.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

const MongoDbConnect = async () => {
  try {
    await mongoose.connect(MONGO_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = MongoDbConnect;