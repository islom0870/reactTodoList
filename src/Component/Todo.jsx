import React, { Component } from "react";
import "./todo.css";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      todo: "",
    };
  }
  inputValue = (e) => {
    this.setState({ todo: e.target.value });
    console.log(e.target.value);
  };
  Add = () => {
    var newtodo = this.state.todo;
    if (newtodo == "") {
    }
    this.setState({ array: [...this.state.array, newtodo] });
    // this.state.array.push(this.state.todo);
    console.log(this.state.array);
    console.log(this.state.todo);
  };

  remove = (i) => {
    var newArray = this.state.array.filter((element, indx) => indx !== i);
    this.setState({ array: newArray });
  };
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <div className="input_">
          <input type="text" required id="inp" onChange={this.inputValue} />
          <label className="label" htmlFor="inp">
            Type your duties
          </label>
        </div>

        <button onClick={() => this.Add()}>Add</button>

        <div className="main">
          {this.state.array.map((element, index) => {
            return (
              <div className="block" key={index}>
                <label>
                  <input type="checkbox" id="input1" />
                  <div className="make">{element}</div>
                </label>
                <span onClick={() => this.remove(index)}>
                  <i className="bx bxs-trash-alt"></i>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
