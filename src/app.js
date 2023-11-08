/*app.js*/
const { context, propagation, trace } = require('@opentelemetry/api');
const express = require('express');
const { rollTheDice } = require('./api/dice.js');

const PORT = parseInt(process.env.PORT || '8080');
const app = express();

app.get('/rolldice', (req, res) => {
  const rolls = req.query.rolls ? parseInt(req.query.rolls.toString()) : NaN;
  let activeContext = propagation.extract(context.active(), req.headers);
  if (isNaN(rolls)) {
    res
      .status(400)
      .send("Request parameter 'rolls' is missing or not a number.");
    return;
  }
  res
    .setHeader('Content-Type', 'application/json')
    .send(JSON.stringify(rollTheDice(rolls, 1, 6)));
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});