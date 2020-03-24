const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello No Pants!');
});

const port = process.env.PORT || 3000;
console.log(`listening on port ${port}...`);

app.listen(port);
