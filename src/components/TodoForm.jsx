import React, { useEffect, useState } from 'react'
import { useTodoContext } from '../context/TodoContext';
import Swal from 'sweetalert2';

function TodoForm() {
  const [todo, setTodo] = useState('');


  const {
    todoList,
    createTodo
  } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
  }


  const swal = () => {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
  
  return (
    <form className='todo' onSubmit={handleSubmit}>
      <div className='todo__input'>
        <button type='submit' className='todo__input-btn'></button> 
        <input
          className='todo__input-field'
          type="text" 
          placeholder='Create a new todo...'
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>

      <ul className='todo__list'>
        {
          todoList.map((todo) => {
            return (
                <li className='todo__item' key={todo.todoId}>
                <div className='todo__item-field'>
                  <button type="button" className='todo__item-field-mark' onClick={swal}></button>
                  <input type="text" value={todo.todo} onChange={(e) => setTodo(e.target.value)} readOnly/>
                </div>
      
                <div className='todo__item-action'>
                  <button type="button" className='todo__item-action-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
                    </svg>
                  </button>
                  <button type="button" className='todo__item-action-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className='todo__filter'>
        <div className='todo__filter-item'>
          <span className=''>3</span> items left
        </div>

        <div className='todo__filter-actions'>
          <div className='todo__filter-actions-btn'>
            <input type="radio" id="filter-all" name='filter' />
            <label htmlFor="filter-all">all</label>
          </div>
          <div className='todo__filter-actions-btn'>
            <input type="radio" id="filter-active" name='filter' />
            <label htmlFor="filter-active">active</label>
          </div>
          <div className='todo__filter-actions-btn'>
            <input type="radio" id="filter-completed" name='filter' />
            <label htmlFor="filter-completed">completed</label>
          </div>
        </div>

        <button className='todo__filter-clear'>
            clear completed
        </button>
      </div>

      <p id='dragNdrop'>
        Drag and drop to reorder list.
      </p>
    </form>
  )
}

export default TodoForm