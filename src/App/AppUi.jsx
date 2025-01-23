import React from 'react';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodoItemSkeleton } from '../Components/TodoItemSkeleton';
import { TodoAppContext } from '../Context/TodoAppContext';
import { Modal } from '../Components/Modal';
import { TodoForm } from '../Components/TodoForm';

function AppUI(){
   const {
    isLoading,
    error,
    filteredTodos,
    completeTask,
    deleteTask,
    isModalOpened,
    openModal
  } = React.useContext(TodoAppContext)

    return (
        <div className='app-container'>
          <TodoCounter/>
          <TodoSearch />         
          <TodoList>
            {
              isLoading && 
              <>
                <TodoItemSkeleton/> 
                <TodoItemSkeleton/> 
                <TodoItemSkeleton/> 
              </>
            }
            { error && <p>Hay un error cargando la DATA</p> }
            {
              (!isLoading && filteredTodos.length === 0)&& <p>No hay tareas, por favor crea una nueva tarea</p>
            }
            {
              filteredTodos.map((item)=><TodoItem 
              key={item.description}
              description={item.description}
              isCompleted={item.isCompleted}
              onComplete={()=>completeTask(item.description)}
              onDelete={()=>deleteTask(item.description)}
              />)
            }
            
          </TodoList>         
          <CreateTodoButton openModal={openModal}></CreateTodoButton>
          {
            isModalOpened && <Modal>
              <TodoForm />
            </Modal>
          }
        </div>
      );
}

export {AppUI}