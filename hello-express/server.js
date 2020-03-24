import express from "express";

export const app = express();

app.get('/', (req, res) => {
  res.send('Hello No Pants!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));
