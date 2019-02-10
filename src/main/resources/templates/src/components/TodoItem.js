import React,  { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

getStyle = () => {

		if(this.props.todo.checked){
			return {
				backgroundColor: '#8F8',
				padding: '10px',
				borderBottom: '1px #ccc dotted'
			}
		} else{
			return {
				textDecoration: 'none',
				background: '#f4f4f4',
				padding: '10px',
				borderBottom: '1px #ccc dotted'
			}
		}
	}


	render() {

		return (
			<div style={this.getStyle()}>
				<p> 
				<input type="checkbox" onChange={this.props.markChecked.bind
					(this,this.props.todo.id)}/> {' '}
				{this.props.todo.title} 
				</p>
			</div>
			)
	}
}

//not necessary, but according to the React JS
//tutorial I'm following this is good practice
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}


export default TodoItem;