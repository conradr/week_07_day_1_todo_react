import './App.css'
import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    { name: 'Buy shopping', priority: 'high', isCompleted: false },
    { name: 'Clean bathroom', priority: 'low', isCompleted: false },
    { name: "Car's MOT", priority: 'high', isCompleted: false },
  ])

  const [newTodoName, setNewTodoName] = useState('')
  const [newTodoPriority, setNewTodoPriority] = useState('')

  const handleTodoNameChange = (e) => {
    setNewTodoName(e.target.value)
  }

  const handleNewTodoPriorityChange = (e) => {
    setNewTodoPriority(e.target.value)
  }

  const addNewTodoToList = (e) => {
    e.preventDefault()
    const copyTodos = [...todos]
    copyTodos.push({ name: newTodoName, priority: newTodoPriority })
    setTodos(copyTodos)
    setNewTodoName('')
    setNewTodoPriority('')
  }

  const completeItem = (index) => {
    const copyTodos = [...todos]
    //const updatedItem = { ...copyTodos[index] }
    copyTodos[index].isCompleted = true
    //updatedItem.isCompleted = true
    //copyTodos[index] = updatedItem
    setTodos(copyTodos)
  }

  const listTodos = todos.map((todo, index) => {
    return (
      <li
        key={index}
        className={todo.priority === 'high' ? 'high-priority' : 'low-priority'}
      >
        <span>{todo.name}</span>
        {todo.isCompleted ? (
          <span>Completed</span>
        ) : (
          <button onClick={() => completeItem(index)}>Mark as Complete</button>
        )}
      </li>
    )
  })

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <hr></hr>
      <form onSubmit={addNewTodoToList}>
        <label htmlFor='new-item-name'>Add a new item:</label>
        <input
          type='text'
          id='new-item-name'
          value={newTodoName}
          onChange={handleTodoNameChange}
        />
        <label htmlFor='high-priority'>High</label>
        <input
          type='radio'
          id='high-priority '
          name='priority'
          value='high'
          onChange={handleNewTodoPriorityChange}
        />
        <label htmlFor='low-priority'>Low</label>
        <input
          type='radio'
          id='low-priority '
          name='priority'
          value='low'
          onChange={handleNewTodoPriorityChange}
        />
        <input type='submit' value='Add new item' />
      </form>
      <ul>{listTodos}</ul>
    </div>
  )
}

export default App
