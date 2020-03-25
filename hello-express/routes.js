import express from "express";

export const app = express();

app.get('/', (req, res) => {
  res.send('Hello No Pants!');
});

app.get('/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}!`);
});
