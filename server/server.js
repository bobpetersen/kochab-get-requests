const express = require("express"); //
const app = express();
const PORT = 3000;

const quotes_data = require("./modules/quotes-data");

app.use(express.static("server/public"));

app.get("/quote", (req, res) => {
  const randomNumber = Math.floor(Math.random() * quotes_data.length);
  res.send(quotes_data[randomNumber]);
});

app.get("/all-quotes", (req, res) => {
  res.send(quotes_data);
});

// app.get('/', (req, res) => {
//   console.log('yep! it worked');
//   res.send('Happy Wednesday!');
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`); // back tics
});
