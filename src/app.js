const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const logger = require('./middlewares/logger');

app.use(express.json()); // Parse JSON
app.use(logger); // Middleware global
app.use('/users', usersRoutes); // Rota base

module.exports = app;
