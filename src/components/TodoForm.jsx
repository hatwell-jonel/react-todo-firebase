import React, { useEffect, useState, useRef} from 'react'
import { useTodoContext } from '../context/TodoContext';
import checkIcon  from "../assets/icon-check.svg";
import Swal from 'sweetalert2';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const [filterTodo, setFilterTodo] = useState('all');

  const {
    todoList,
    itemLeft,
    isReadOnly,
    createTodo,
    updateTodo,
    deleteTodo,
    clearCompletedTodo
  } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
    setTodo('');
  }

  return (
    <form className='todo' onSubmit={handleSubmit}>
      <div className='todo__input'>
        <button type='submit' className='todo__input-btn'></button> 
        <input
          value={todo}
          className='todo__input-field'
          type="text" 
          placeholder='Create a new todo...'
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>

      <ul className='todo__list'>
        {
          todoList.filter(
            (todo) => {
              if (filterTodo === 'all') {
                return true;
              } else if (filterTodo === 'active') {
                return !todo.completed;
              } else if (filterTodo === 'completed') {
                return todo.completed;
              }
              return false;
            }
          ).map((todo) => {
            return (
                <li className={`todo__item ${todo.completed ? "todo__item__done" : ""}`}key={todo.todoId}>
                <div className='todo__item-field'>
                  <button type="button" className='todo__item-field-mark' onClick={() => {updateTodo(todo)}}>
                    <img src={checkIcon} alt="" />
                  </button>
                  <input type="text" value={todo.todo} onChange={(e) => updateCurrentTodo(todo.todoId)}  readOnly={isReadOnly} />
                </div>
      
                <div className='todo__item-action'>
                  {/* DELETE */}
                  <button type="button" className='todo__item-action-btn' onClick={() => deleteTodo(todo.todoId)}>
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
          {itemLeft > 1 ?   `${itemLeft} items left` :  `${itemLeft} item left` }
        </div>

        <div className='todo__filter-actions'>
          <div className='todo__filter-actions-btn'>
            <input type="radio" id="filter-all" name='filter' value={filterTodo} checked={filterTodo === 'all'} onChange={() => setFilterTodo('all')}/>
            <label htmlFor="filter-all">all</label>
          </div>
          <div className='todo__filter-actions-btn'>
            <input type="radio" id="filter-active" name='filter' checked={filterTodo === 'active'} onChange={() => setFilterTodo('active')}/>
            <label htmlFor="filter-active">active</label>
          </div>
          <div className='todo__filter-actions-btn'>
            <input type="radio" id="filter-completed" name='filter' checked={filterTodo === 'completed'} onChange={() => setFilterTodo('completed')}/>
            <label htmlFor="filter-completed">completed</label>
          </div>
        </div>

        <button type="button" className='todo__filter-clear' onClick={() => {clearCompletedTodo(todoList)}}>
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