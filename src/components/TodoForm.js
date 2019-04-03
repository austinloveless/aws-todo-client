import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  handleSubmit = () => {
    this.setState({ inputValue: "" });
    this.props.addTodo(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}> Add Todo </button>
      </div>
    );
  }
}

export default TodoForm;
