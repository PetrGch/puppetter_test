import express from 'express';

import properties from "./properties";
import db from "./db/init";

const app = express();

db.init();
const connector = db.instance;
connector.connect((err) => {
  if (err) throw err;
  console.log("Connected successfully!");
});

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  connector.query("SELECT * FROM exchange_company", function (err, result) {
    if (err) throw err;

    console.log('hi there!!!');

    res.send(JSON.stringify(result));
  });
});

app.listen(properties.port, () => {
  console.log(`😎 Server is listening on port ${properties.port}`);
});