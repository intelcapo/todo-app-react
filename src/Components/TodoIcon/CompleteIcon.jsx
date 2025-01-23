import React from "react";
import {TodoIcon} from "./index";

function CompleteIcon({isCompleted, onComplete}){
    return ( <TodoIcon type='check' color={isCompleted?'green':'gray'} onClick={onComplete}/>)
}

export {CompleteIcon};