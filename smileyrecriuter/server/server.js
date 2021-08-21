const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Connects to the mongo database, supposedly; copied from // 18/11/SOlved
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/smiley_User", { useNewUrlParser: true });


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});