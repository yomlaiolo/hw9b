const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.static("css"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/api/form", (req, res) => {
  res.sendFile(`${__dirname}/views/ex1.html`);
});

app.post("/api/form", (req, res) => {
  const { name, email, payment, sign, location } = req.body;
  res.send(
    `<div>
      <p>${name}, thank you for your order. We will keep you posted on delivery status at ${email}.</p>
    <div>`
  );
});

app.get("/api/countries", (req, res) => {
  res.sendFile(`${__dirname}/views/ex2.html`);
});

app.post("/api/countries", (req, res) => {
  const { name, countries } = req.body;
  res.send(
    `Your name is ${name} and you visited ${countries.length} countries. Keep traveling!`
  );
});

const articles = [
  { id: 1, title: "First article", content: "Hello World!" },
  {
    id: 2,
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor. Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum.",
  },
  {
    id: 3,
    title: "Lorem ipsum in French",
    content:
      "J'en dis autant de ceux qui, par mollesse d'esprit, c'est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j'avance.",
  },
];

app.get("/api/articles", (req, res) => {
  res.sendFile(`${__dirname}/views/ex3.html`);
});

app.post("/api/articles", (req, res) => {
  const { title, content } = req.body;
  const id = articles.length + 1;
  articles.push({ id, title, content });
  res.send(
    `New article added successfully with title \"${title}\" and ID ${id}!`
  );
});

app.listen(port, () => {
  console.log(`My app listening on port ${port}`);
});
