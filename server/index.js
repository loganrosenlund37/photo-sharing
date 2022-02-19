const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const res = require('express/lib/response');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('public'));

// This request is a test example   
app.get('/api/new', async (request, response) => {
  response.send('This is working');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
