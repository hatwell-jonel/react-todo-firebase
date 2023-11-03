// import React, {useState} from 'react'

// import Header from "../components/Header"
// import TodoForm from "../components/TodoForm"
// import User from "../components/User"

// import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

// function Main() {

//   const [todos, setTodos] = useState([
//     { id: 1, text: 'Learn React', completed: false },
//     { id: 2, text: 'Build a To-Do App', completed: false },
//     { id: 3, text: 'Test your app', completed: true },
//   ]);

//   const onDragEnd = (result) => {

//     console.log(result);
//     if (!result.destination) {
//       return;
//     }

//     const updatedTodos = Array.from(todos);
//     const [reorderedItem] = updatedTodos.splice(result.source.index, 1);
//     updatedTodos.splice(result.destination.index, 0, reorderedItem);

//     setTodos(updatedTodos);
//   };


//   return (
//     <main>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId='todos'>
//           {(provided) =>(
//               <ul 
//                 className='temp' 
//                 {...provided.droppableProps} 
//                 ref={provided.innerRef}
//               >
//                 {
//                   todos.map((item, index) => (
//                       <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
//                         {(provided) => (
//                           <li          
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           ref={provided.innerRef}
//                           >
//                             {item.id}
//                             </li>
//                         )}
//                       </Draggable>
//                     )
//                 )
//                 }
//                   {provided.placeholder}
//               </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </main>
//   )
// }

// export default Main


import React from 'react'

import TodoForm from "../components/TodoForm"
import User from "../components/User"

function Main() {

  return (
    <main>
        <User />
        <TodoForm />
    </main>
  )
}

export default Main