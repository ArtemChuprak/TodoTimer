import React from "react";
import PropTypes from "prop-types";
import Task from "../task/task";



function TaskList ({ todos, onDeleted, onToggleDone, status, redactingTask, timerSaveById }) 
   { 
    const elements = todos
      .filter((item) => {
        if (status === "all") {
          return item;
        }
        if (status === "active") {
          return !item.done;
        }
        if (status === "completed") {
          return item.done;
        }
        return todos;
      })
      .map((item) => (
        <Task
          {...item}
          key={item.id}
          onDeleted={() => onDeleted(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
          redactingTask={redactingTask}
          id ={item.id}
          timerSaveById ={timerSaveById}
          
        />
      ));
    return <ul className="todo-list">{elements}</ul>;
  };
  
  TaskList.defaultProps = {
    todos: [],
    onToggleDone: () => {},
    onDeleted: () => {},
    status: 'all',
    redactingTask: () => {},
    min: 0,
    sec: 0,
    timerSaveById:() => {}
  };
  
  TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
    onToggleDone: PropTypes.func,
    onDeleted: PropTypes.func,
    status: PropTypes.string,
    redactingTask: PropTypes.func,
    min: PropTypes.number,
    sec: PropTypes.number,
    timerSaveById: PropTypes.func
  };
  
  export default TaskList;