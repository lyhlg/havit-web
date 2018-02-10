const express = require('express');
const router = require('./routes/routes.js');

const app = express();

const port = 8080;
const defaultHeader = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
};

app.use((req, res, next) => {
  res.header(defaultHeader);
  next();
})

app.use('/', router);

app.listen(port, () => console.log(` Starting Server at port ${port} :) `));

export default app;
