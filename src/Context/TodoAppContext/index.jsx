import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoAppContext = React.createContext();

function TodoAppContextProvider({children}){
    const { 
        items: todos,
        saveItems: saveTodos,
        loading: isLoading,
        error
    } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = React.useState('');

    const [isModalOpened, setIsModalOpened] = React.useState(false)

    const todosCompleted = todos.filter((todo)=> !!todo.isCompleted).length

    const totalTodos = todos.length
    
    const filteredTodos = todos.filter(
        todo=> todo.description.toLowerCase().includes(searchValue.toLowerCase()))

    const addTask = (description)=>{
        const newTodos = [...todos]
        newTodos.push({
            description,
            isCompleted: false
        })
        saveTodos(newTodos)
    }

    const completeTask = (description)=>{
        const newTodos = [...todos]
        const taskIndex= newTodos.findIndex(todo=> todo.description.toLowerCase() === description.toLowerCase())
        newTodos[taskIndex].isCompleted = true
        saveTodos(newTodos)
    }

    const deleteTask = (description)=>{
        const newTodos = [...todos]
        const taskIndex= newTodos.findIndex(todo=> todo.description.toLowerCase() === description.toLowerCase())
        newTodos.splice(taskIndex,1)
        saveTodos(newTodos)
    }

    const openModal = ()=>{
        setIsModalOpened(true)
    }

    const closeModal = ()=>{
        setIsModalOpened(false)
    }

    return(
        <TodoAppContext.Provider value= {{
            isLoading,
            error,
            filteredTodos,
            todosCompleted,
            totalTodos,
            searchValue,
            isModalOpened,
            setSearchValue,
            completeTask,
            deleteTask ,
            setIsModalOpened,
            openModal,
            closeModal,
            addTask             
        }}>
            {children}
        </TodoAppContext.Provider>
    )
}

export {TodoAppContext, TodoAppContextProvider}