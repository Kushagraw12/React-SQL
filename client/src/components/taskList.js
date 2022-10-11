import React from "react";

class TaskList extends React.Component {
  state = {
    task: "",
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
        <div class="ui cards">
          <div class="card">
            <div class="content">
              <div class="meta">Friends of Veronika</div>
              <div class="extra content">
                <div class="ui two buttons">
                  <div class="ui basic green button">Approve</div>
                  <div class="ui basic red button">Decline</div>
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
