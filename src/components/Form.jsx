//THIS IS THE ADDER. THE FILE CONTAINING 
//THE CODE THAT ADDS AND UPDATES ITEMS TO A TO DO LIST. THE
//FILE THAT CONTAINS THE CODE WHERE THE USER TYPES AN EVENT

import React, { useState } from 'react'
import uuid from 'react-uuid';
import TodoList from './TodoListDisplayer';

const Form = ({ addToDo }) => {
    //Keep track of user inputing an item into the to do list
    const [input, setInput] = useState("");

    
    const onInputChange = event =>{
        //set input to whatever the user is typing
        setInput(event.target.value);
        console.log(event)
        //event.target.value is a default made by react to automatically update
    }

    const onFormSubmit = (event) => {
        let id = uuid()
        event.preventDefault();
        /*preventDefault() is another default used to 
        change the state back to the original/default*/
        //setToDoItems([toDoItems, { id, title: input, completed: false }])
        addToDo(input)
        setInput("");
    }

   

  return (
    <form onSubmit={onFormSubmit} className = "todo-form" action="">
        <input type="text" placeholder ="Add Item" className="todo-input" 
        value={input} 
        required
        onChange={onInputChange}//check if the user is typing or if the user has typed a to do item
        />
        <button className="todo-button" type='submit'>Add</button>
    </form>
  )
}

export default Form