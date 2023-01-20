const express = require("express");
const MongoDbConnect = require('./server/common/mongo_connect');
const app = express();

// Connect to database
MongoDbConnect();

app.use(express.json());
app.use('/api', require('./server/'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));