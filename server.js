const express = require("express");
const path = require('path');

const MongoDbConnect = require('./server/common/mongo_connect');

const app = express();

// adding this to server static files from public folder
app.use(express.static(path.resolve(__dirname, './public')));

// this denoted that for a request to / route, public/index.html will be returned
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.get("/categoryInfo/:categoryKey", (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/categoryInfo/index.html'));
});

// Connect to database
MongoDbConnect();

app.use(express.json());
app.use('/api', require('./server/'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));