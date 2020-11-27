const express = require('express');
const morgan = require('morgan');
const Cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 4000);

app.use(Cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//llamos a las rutas
app.use("/api/employees", require('./routes/employees.routes'));

module.exports = app;