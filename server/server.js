const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ROUTES
app.get("/tasks", (req, res) => {
  res.send("list of all tasks");
});

app.post("/addTask", (req, res) => {
  const ADD_QUERY = `insert into todotaskmanager.tasks (task) value ('${req.body.task}')`;
  connection.query(ADD_QUERY, (err) => {
    console.log(err);
  });
  res.send("you can add task");
});

app.get("/deleteTask", (req, res) => {
  res.send("deleted task");
});

app.listen(8080, () => {
  console.log("running on port 8080");
});
