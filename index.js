import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Kamai Club");
});

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});