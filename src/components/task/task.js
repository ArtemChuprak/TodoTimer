import React, { Component } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import PropTypes, { number } from "prop-types";
import Timer from '../Timer/Timer';
// import { id } from "date-fns/locale";

export default class Task extends Component {

  
  
  state = {
    isRedaction: false,
    inputText: this.props.label,
  };

  redactingTask = () => {
    this.setState({
      isRedaction: true,
    });
  };

  saveChange = (text) => {
    if (text.keyCode === 13 || text.keyCode === 27 ) {
      text.preventDefault();
      if (text.target.value !== "") {
        this.setState({
          inputText: text.target.value,
          isRedaction: false,
        });
      }
    }
  };


  blureChange = (text) => {
    this.setState({
      inputText: text.target.value,
      isRedaction: false,
    });
  }

  render() {
    const { label, onDeleted, onToggleDone, done, time, min, sec, timerSaveById, id } = this.props;
    const { isRedaction, inputText } = this.state;
    let changed = "";

    
    if (done) {
      changed += "completed";
    }
    if (isRedaction) {
      changed = "editing";
    }

// eslint-disable-next-line
    const timerStop = ({min,sec})=> {

      // console.log(min, sec)
      timerSaveById(id, min, sec) 
    }

       
    return (
      <li className={changed} >
        <div className="view">
          
            <input className="toggle" type="checkbox" defaultChecked={done} onClick={onToggleDone} />
            <label htmlFor="title">
              <span className="title" >{inputText}</span>
              {(min === 0 && sec === 0) || min < 0 || sec < 0 ? null : <Timer timerStop={timerStop} min={min} sec={sec} />}
              <span className="description">created {formatDistanceToNow(time, { includeSeconds: true })} ago</span>
            </label>
           
          <button type="button" label="edit" className="icon icon-edit" onClick={this.redactingTask} />
          <button type="button" label="destroy" className="icon icon-destroy" onClick={onDeleted} />
        </div>
        <input
          ref={(input) => input && input.focus()}
          type="text"
          className="edit"
          defaultValue={label}
          onKeyDown={this.saveChange}
          onBlur={this.blureChange}
          
        />
      </li>
    );
  }
}

Task.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  label: {},
  done: false,
  time: '',
  min: 0,
  sec: 0,
  timerSaveById:() => {},
  id:number
};

Task.propTypes = {
  label: PropTypes.string,
  done: PropTypes.bool,
  time: PropTypes.number,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  min: PropTypes.number,
  sec: PropTypes.number,
  timerSaveById:PropTypes.func,
  id:PropTypes.number,
};

