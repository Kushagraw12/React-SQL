import React from "react";
import axios from "axios";

class TaskList extends React.Component {
  state = {
    task: "",
    taskList: [],
  };
  componentDidMount() {
    this.getTaskList();
  }
  getTaskList = () => {
    axios
      .get("http://localhost:8080/tasks")
      .then((resp) => resp.data)
      .then((resp) =>
        this.setState({
          taskList: resp,
        })
      );
  };
  onDeleteClick = (task_id) => {
    axios.delete(`http://localhost:8080/deleteTask/${task_id}`, {});
    this.getTaskList();
  };
  onSubmitClick = () => {
    axios.post("http://localhost:8080/addTask", {
      task: this.state.task,
    });
    this.getTaskList();
    this.setState({ task: "" });
  };
  render() {
    return (
      <div>
        <h3>TaskList</h3>
        <div className="ui input">
          <input
            value={this.state.task}
            placeholder="Enter Your Task"
            onChange={(e) => this.setState({ task: e.target.value })}
          />
        </div>
        <button
          className="ui primary button basic"
          onClick={() => this.onSubmitClick()}
        >
          Submit
        </button>
        <hr />
        <div className="ui cards">
          {this.state.taskList.map((task) => (
            <div className="card">
              <div className="content">
                <div className="meta">{task.task}</div>
                <div className="extra content">
                  <div className="ui two buttons">
                    <div className="ui basic green button">Done</div>
                    <div
                      className="ui basic red button"
                      onClick={() => this.onDeleteClick(task.task_id)}
                    >
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TaskList;
