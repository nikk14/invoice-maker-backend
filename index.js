const express = require("express");
const app = express();
const cors = require("cors");
const knexRouter = require("./router/router")
const port = process.env.port || 4200;


app.use(cors());
app.use(express.json());
app.use(knexRouter)

app.get("/", (req, res) => {
  res.json({ status: "healthy and good" });
}); 


app.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
