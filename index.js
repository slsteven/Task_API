import express from 'express';
import consign from 'consign'; //helps with loading and injecting dependencies


const app = express();

consign()
  .include("models")
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);

// app.get('/', function(req, res) {
//   res.json({ status: "Task API" })
// })
