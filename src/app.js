const express = require('express');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: '16kb' })); //for JSON Body
app.use(express.urlencoded({ extended: true, limit: '16kb' })); // FORM DATA
app.use(express.static('public')); // FOr static files like Images, CSS etc

module.exports = { app };
