
import React from 'react'
import './TodoCounter.css'
import { TodoAppContext } from '../../Context/TodoAppContext'

function TodoCounter(){
    const {todosCompleted:completed,totalTodos:allTask} = React.useContext(TodoAppContext)
    return(
        <h1>Has completado {completed} de {allTask} TODOS</h1>)
}

export { TodoCounter }