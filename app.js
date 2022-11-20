import express from "express";

const app = express();

app.use("/", (req, res, next) => {
  return res.send("Hi");
});

app.listen(5000, () => console.log("Listening to localhost port 5000"));
