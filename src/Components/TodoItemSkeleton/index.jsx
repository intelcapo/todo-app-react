import React from "react";
import './TodoItemSkeleton.css'

function TodoItemSkeleton (){
    return (
        <div className="container-todo-item-skeleton">
            <div className="todo-item-skeleton"></div>
            <div className="todo-item-skeleton--icon"></div>
        </div>
    )
}

export {TodoItemSkeleton}