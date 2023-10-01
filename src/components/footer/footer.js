import React from "react";
import PropTypes from "prop-types";
import TasksFilter from "../tasks-filter/tasks-filter";

import "./footer.css"


function Footer ({ todoCount, todoFilter, status, clearCompleted }) 
 { return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter todoFilter={todoFilter} status={status} />
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
  }
  
  Footer.defaultProps = {
    todoCount: 0,
    todoFilter: () => {},
    clearCompleted: () => {},
    status: "all",
  };
  
  Footer.propTypes = {
    todoCount: PropTypes.number,
    todoFilter: PropTypes.func,
    clearCompleted: PropTypes.func,
    status: PropTypes.string,
  };

  export default Footer;