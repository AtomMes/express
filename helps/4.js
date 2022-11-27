import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(404);//! vor senc enq uxarkum inqy status koda hamarum es tivy u 404 erora uxarkelu
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
