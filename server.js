'use strict';

const express = require('express');
const path = require('path');

const PORT = 3001;
const HOST = '127.0.0.1';

const clientFilePath = path.join(__dirname, './client.html');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(clientFilePath);
});

app.listen({ port: PORT, host: HOST }, () => {
  console.log('Server is listening at http://' + HOST + ':' + PORT);
});