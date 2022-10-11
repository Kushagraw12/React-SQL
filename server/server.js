const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ROUTES
app.get("/tasks", (req, res) => {
  const TASK_QUERY = "SELECT * FROM todotaskmanager.tasks";
  connection.query(TASK_QUERY, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.send(response);
    }
  });
});

app.post("/addTask", (req, res) => {
  const ADD_QUERY = `insert into todotaskmanager.tasks (task) value ('${req.body.task}')`;
  connection.query(ADD_QUERY, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send("task has beed added");
});

app.delete("/deleteTask/:task_id", (req, res) => {
  const DELETE_QUERY = `DELETE FROM todotaskmanager.tasks WHERE (task_id = ${req.params.task_id})`;
  connection.query(DELETE_QUERY, (err, response) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(8080, () => {
  console.log("running on port 8080");
});
