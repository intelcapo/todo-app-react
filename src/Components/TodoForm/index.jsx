import React, { useState } from "react";
import './TodoForm.css'
import { TodoAppContext } from "../../Context/TodoAppContext";

function TodoForm(){
    const { closeModal, addTask } = React.useContext(TodoAppContext)
    const [newTodoDescription, setNewTodoDescription] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()
        addTask(newTodoDescription)
        closeModal()
    }

    const onChange = (e)=>{
        setNewTodoDescription(e.target.value)
    }

    
    return (
        <form className="task-form" onSubmit={onSubmit}>
        <label htmlFor="task" className="form-label">Describe la tarea</label>
        <textarea id="task" className="form-textarea" placeholder="Escribe los detalles de la tarea..."
            onChange={onChange}
        ></textarea>
        <div className="form-buttons">
          <button type="button" className="btn btn-cancel" onClick={closeModal}>Cancelar</button>
          <button type="submit" className="btn btn-create">Crear Tarea</button>
        </div>
      </form>
    )
}

export { TodoForm }