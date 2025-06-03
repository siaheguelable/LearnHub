const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const env = require("dotenv").config();
const path = require('path');

const app = express();


/* View Engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // ✅ sets the correct views directory
app.set('layout', 'layouts/layout'); // ✅ no './', no '.ejs'

app.use(expressLayouts);


/* Static Files */
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index'); // index.ejs will be inserted into layout
});


const port = process.env.PORT;
const host = process.env.HOST;
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});

