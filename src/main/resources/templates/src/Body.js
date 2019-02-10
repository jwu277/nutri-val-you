import React, { Component } from 'react';
import './Body.css';
import Todos from './components/Todos';


class Body extends Component {

  state={
    todos: [
    {
    id: 1,  
    title: 'Trans Fat',
    checked: false
  },
  {
    id: 2,  
    title: 'Sugar',
    checked: false
  },
  {
    id: 3,  
    title: 'Manganese',
    checked: false
  }
    ]
  }

markChecked = (id) => {

    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id == id){
        todo.checked = !todo.checked
    }
    return todo;
  }) } );
  }

 namesChecked = (markChecked) => {
  this.setState( {todos:this.state.todos.map(todo =>{
    if (todo.checked)
      return todo.checked
  })});
 } 

  render() {
    return(
      <div className="flex-container">
        <div className="item"> <input type="file"/> </div>
        <div className="item">
          <p>Enter your barcode:</p>
            <input name="barcode" accept="image/*"/>
            <input type="submit"/>
        </div>
        <div className="item"> <p>Which component(s) are you interested in minimizing?</p><Todos todos={this.state.todos} markChecked=
    {this.markChecked}/> <p>Press the submit once you are ready to continue:</p> <input type="submit"/></div>

        <div className="item"> <p>Here are some related foods that minimize: <namesChecked/> 
       </p>

         </div>
      </div>
    )
  }
}


export default Body;