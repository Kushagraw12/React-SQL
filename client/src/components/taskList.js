import React from "react";
import axios from "axios";

class TaskList extends React.Component {
  state = {
    task: "",
  };
  onDeleteClick = () => {
    console.log("inside delete");
  };
  onSubmitClick = () => {
    axios.post("http://localhost:8080/addTask", {
      task: this.state.task,
    });
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
        <button className="ui primary button basic">Submit</button>
        <hr />
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="meta">Friends of Veronika</div>
              <div className="extra content">
                <div className="ui two buttons">
                  <div
                    className="ui basic green button"
                    onClick={() => this.onSubmitClick()}
                  >
                    Submit
                  </div>
                  <div
                    className="ui basic red button"
                    onClick={() => this.onDeleteClick()}
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
