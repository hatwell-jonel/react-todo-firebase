import { useContext, createContext, useEffect, useState } from "react";
import { collection, addDoc, doc, getDocs,updateDoc, deleteDoc, Timestamp } from "firebase/firestore";
import { db } from '../firebase';
import Swal from 'sweetalert2';
import { useAuthContext } from './AuthContext';


const context = createContext();

export const TodoContextProvider = ({children}) => {
    const {user} = useAuthContext();
    const [todoList, setTodoList] = useState([]);
    const [isReadOnly, setIsReadOnly] = useState(true);
    const [itemLeft, setItemLeft] = useState(0);

 
    const createTodo = async (todo) => {
        const timestamp = Timestamp.now(); 
        

        try {
            if(todo == ""){
                Swal.fire(
                    "Todo field is required.",
                    "Can't create empty todo.",
                    "warning"
                )
                return;
            }else{

                const userDocRef = doc(db, 'todo_db', user.uid);
                const todosCollectionRef = collection(userDocRef, 'todos');

                // Create a new todo for database
                const newTodoRef = await addDoc(todosCollectionRef, { 
                    todo: todo,
                    completed: false,
                    created_at: timestamp
                }); 

                // Create a new todo for the local state
                const newTodo = {
                    todoId: newTodoRef.id,
                    todo: todo,
                    completed: false,
                    created_at: timestamp
                };

                // Update the local state by prepending the new todo to the existing data
                setTodoList((prevData) => [newTodo, ...prevData]);
            }
        } catch (error) {
            console.error("Error adding data: ", error);
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
                    const todoDocRef = doc(db,'todo_db', user.uid, 'todos', todoId);
                    await deleteDoc(todoDocRef);
                    // Update the local state by removing the completed todo
                    setTodoList((prevData) => prevData.filter((todoItem) => todoItem.todoId !== todoId));
                    Swal.fire('Saved!', '', 'success')
                }
            })
        } catch (error) {
            console.error("error deleting data:", error);
        }
    }

    const clearCompletedTodo = async (todos) => {
        try {
            Swal.fire({
                title: 'You are going to clear the completed to do?',
                showCancelButton: true,
                confirmButtonText: 'Proceed',
            }).then( async (result) => {
                if (result.isConfirmed) {
                    todos.forEach(async (todo) => { todo.completed ? await deleteDoc(doc(db,'todo_db', user.uid, 'todos', todo.todoId)) : null });
                    // Update the local state by removing the all completed todo
                    setTodoList((prevData) => prevData.filter((todoItem) => !todoItem.completed));
                    Swal.fire('Success!', '', 'success')
                }
            })
        } catch (error) {
            console.error("error deleting data:", error);
        }
    }

    const updateTodo = async(todo) => {
        try {
            const todoDocRef = doc(db,'todo_db', user.uid, 'todos', todo.todoId);
            await updateDoc(todoDocRef, {completed: !todo.completed});
            // Update the local state (todoData) by mapping over the array and toggling the completed status
            setTodoList((prevData) =>
            prevData.map((item) =>
            item.todoId === todo.todoId
                ? { ...item, completed: !item.completed }
                : item
                )
            );
        } catch (error) {
            console.error("error updating data:", error);
        }
    }

    const fetchData = async () => {
        try {
            const userDocRef = doc(db, `todo_db`, user.uid);
            const todoDbCollection = collection(userDocRef, `todos`);
            const todoDbSnapshot = await getDocs(todoDbCollection);

            const todosData = [];

            todoDbSnapshot.forEach((doc) => {
                const todoData = doc.data();
                todosData.push({ todoId: doc.id, ...todoData });
            });
    
            setTodoList(todosData); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      
    }

    useEffect(() => {
        fetchData();
    }, [user]);

    
    return (
        <context.Provider value={{
            todoList,
            setTodoList,
            itemLeft,
            isReadOnly, 
            createTodo, 
            deleteTodo, 
            updateTodo, 
            clearCompletedTodo
            }}>
            {children}
        </context.Provider>
    )
}

export const useTodoContext = () => {
    return useContext(context);
}