const express = require('express');
const app = express(); // express app
const port = 3000; // port
const path = require('path');
const countries = require('./module/function');


app.use(express.static(path.join(__dirname, 'pubilc')));

app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  const randomN = Math.floor(Math.random() * 15);
  res.render('index.ejs', { countries: countries, index: randomN });
});

// app.post('/checkresult', (req, res) => {
//   res.send(req.body);
// });

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
