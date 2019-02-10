import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
    	<TodoItem key={todo.id} todo={todo} markChecked=
    	{this.props.markChecked} />
    	));
  }
}


//not necessary, but according to the React JS
//tutorial I'm following this is good practice
Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Todos;
