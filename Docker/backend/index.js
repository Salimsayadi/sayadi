const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const data = [
  { id: 1,  name: 'c4' },
  { id: 2,  name: 'kia ' },
  { id: 3,  name: 'Dmax' },
  { id: 4,  name: 'Nissan' },
  { id: 5,  name: 'renot' },
  { id: 6,  name: 'berlingo' },
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

const server = app.listen(8000, () => {
  console.log(`Backend microservice running on ${server.address().port}`);
});

module.exports = server
