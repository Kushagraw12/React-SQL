const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// ROUTES
app.get("/tasks", (req, res) => {
  res.send("list of all tasks");
});

app.post("/addTask", (req, res) => {
  console.log(req.body);
  res.send("you can add task");
});

app.get("/deleteTask", (req, res) => {
  res.send("deleted task");
});

app.listen(8080, () => {
  console.log("running on port 8080");
});
