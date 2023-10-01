import React, { Component } from "react";
import PropTypes from "prop-types";


export default class NewTaskForm extends Component {
  state = {
    value: "",
    min: '',
    sec: '',
  };

  componentDidMount() {
    this.InputComponent.focus();
  }

  onLabelChange = (el) => {
    this.setState({
      value: el.target.value,
    });
  };

  onMinChange = (el) => {
    this.setState({
      min: el.target.value,
    });
  };

  onSecChange = (el) => {
    this.setState({
      sec: el.target.value,
    });
  };


  onSubmit = (el) => {
    el.preventDefault();
    const { onItemAdded } = this.props;
    const { value, min, sec} = this.state;

    if (value !== "") {
      onItemAdded(value, min, sec);
      this.setState({
        value: '',
        min: '',
        sec: '',
       
      });
    }
  };

  render() {
    const { value, min, sec} = this.state;

    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          ref={(comp) => {
            this.InputComponent = comp;
          }}
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={value}
        />
         <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          value={min}
          onChange={this.onMinChange}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          value={sec}
          onChange={this.onSecChange}
        />
       
       
        <input type="submit" hidden />
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  onItemAdded: () => {},
};

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
};