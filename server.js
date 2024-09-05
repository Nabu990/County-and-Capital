const express = require('express');
const bodyParser = require('body-parser');
const counties = require('./module/fynction');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  const randomCounty = counties[Math.floor(Math.random() * counties.length)];
  res.render('index', { county: randomCounty });
});

app.post('/submit', (req, res) => {
  const userAnswer = req.body.answer.toLowerCase();
  const countyName = req.body.county;
  const county = counties.find(c => c.county === countyName);
  const isCorrect = userAnswer === county.capital.toLowerCase();

  res.render('result', { county: county.county, correctAnswer: county.capital, userAnswer, isCorrect });
});


app.listen(port, () => {
  console.log(`Quiz app listening at http://localhost:${port}`);
});
