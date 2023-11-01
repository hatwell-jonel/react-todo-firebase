import { useContext, createContext, useEffect, useState } from "react";
import { collection, addDoc, doc, getDocs,updateDoc, deleteDoc, Timestamp } from "firebase/firestore";
import { db } from '../firebase';
import Swal from 'sweetalert2';


const context = createContext();

export const TodoContextProvider = ({children}) => {
    const [todoList, setTodoList] = useState([]);
    const [isReadOnly, setIsReadOnly] = useState(true);


    const createTodo = async (todo) => {
        const timestamp = Timestamp.now();

        try {
            if(todo == ""){
                alert('requried')
                return;
            }else{
                // const todoDBDocRef = doc(db, 'todo_db');
                const todosCollectionRef = collection(db, 'todos');

                await addDoc(todosCollectionRef, { 
                    todo: todo,
                    completed: false,
                    created_at: timestamp
                }); 

                // Update the local state by prepending the new todo to the existing data
                // setTodoList((prevData) => [newTodoRef, ...prevData]);

            }
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    const deleteTodo = async (todoId) => {
        try {
            Swal.fire({
                title: 'Delete Todo?',
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then( async (result) => {
                if (result.isConfirmed) {
                    await deleteDoc(doc(db, 'todos', todoId));
                    Swal.fire('Saved!', '', 'success')
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    const clearCompletedTodo = async (todo) => {
        
    }

    const updateTodo = async(todo) => {
        try {
            const docRef = doc(db, 'todos', todo.todoId);
            await updateDoc(docRef, {
                completed: !todo.completed
            });
            console.log("Todo updated:", todo);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchData = async () => {
        const todoDbCollection = collection(db, `todos`);
        const todoDbSnapshot = await getDocs(todoDbCollection);

        const todosData = [];

        todoDbSnapshot.forEach((doc) => {
            const todoData = doc.data();
            todosData.push({ todoId: doc.id, ...todoData });
        });

        // Set todoData only if it's defined
        if (todosData) {
            setTodoList(todosData);
        }
    }


    useEffect(() => {
        fetchData();
    }, [todoList])

    

    return (
        <context.Provider value={{todoList, isReadOnly, createTodo, deleteTodo, updateTodo}}>
            {children}
        </context.Provider>
    )
}

export const useTodoContext = () => {
    return useContext(context);
}