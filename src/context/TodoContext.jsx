import { useContext, createContext, useEffect, useState } from "react";
import { collection, addDoc, doc, getDocs ,Timestamp } from "firebase/firestore";
import { db } from '../firebase';

const context = createContext();

export const TodoContextProvider = ({children}) => {
    const [todoList, setTodoList] = useState([]);


    const createTodo = async (todo) => {
        const timestamp = Timestamp.now();

        try {
            if(todo == ""){
                alert('requried')
                return;
            }else{
                // const todoDBDocRef = doc(db, 'todo_db');
                const todosCollectionRef = collection(db, 'todos');

                const newTodoRef = await addDoc(todosCollectionRef, { 
                    todo: todo,
                    completed: false,
                    created_at: timestamp
                }); 

                // Update the local state by prepending the new todo to the existing data
                setTodoList((prevData) => [newTodoRef, ...prevData]);
            }
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }



    useEffect(() => {
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

        fetchData();
    }, [])

    

    return (
        <context.Provider value={{todoList , createTodo}}>
            {children}
        </context.Provider>
    )
}

export const useTodoContext = () => {
    return useContext(context);
}