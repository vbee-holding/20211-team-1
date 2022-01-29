require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const swaggerJsDoc = require("swagger-jsdoc")
const path = require('path');
const cookieParser = require('cookie-parser');
const swaggerUI = require("swagger-ui-express")
const swaggerOptions = require('./swagger.json')
const db = require('./config/db/connect')
const articlesRouter = require('./routes/Articles');
const categoriesRouter = require('./routes/Categories');
const sourcesRouter = require('./routes/Sources');
const adminRouter = require('./routes/Admin');
const cors = require("cors");

const specs = swaggerJsDoc(swaggerOptions);
const app = express();
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

db.connect();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/articles', articlesRouter);
app.use('/api/v1/categories', categoriesRouter);
app.use('/api/v1/sources', sourcesRouter);
app.use('/api/v1/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(404).send('404 not found');
});

module.exports = app;