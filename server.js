const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const counties = [
    { county: "Bomi", capital: "Tubmanburg" },
    { county: "Bong", capital: "Gbarnga" },
    { county: "Gbarpolu", capital: "Bopolu" },
    { county: "Grand Bassa", capital: "Buchanan" },
    { county: "Grand Cape Mount", capital: "Robertsport" },
    { county: "Grand Gedeh", capital: "Zwedru" },
    { county: "Grand Kru", capital: "Barclayville" },
    { county: "Lofa", capital: "Voinjama" },
    { county: "Margibi", capital: "Kakata" },
    { county: "Maryland", capital: "Harper" },
    { county: "Montserrado", capital: "Bensonville" }, // Monrovia is the national capital but Bensonville is the county capital
    { county: "Nimba", capital: "Sanniquellie" },
    { county: "River Cess", capital: "Cestos City" },
    { county: "River Gee", capital: "Fish Town" },
    { county: "Sinoe", capital: "Greenville" }
];

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
