const express = require('express');
const parser = require('body-parser');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../static')));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});
