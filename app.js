const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello There!');
});

app.get('/teapot', (req, res) => {
  res.status(418)
  res.set('X-Teapot', 'Yes, I\'m a teapot')
	res.send('TEAPOT!!!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
