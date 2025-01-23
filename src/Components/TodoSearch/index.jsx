import { TodoAppContext } from '../../Context/TodoAppContext'
import './TodoSearch.css'
import React from 'react'

function TodoSearch(){   
     const { searchValue, setSearchValue } = React.useContext(TodoAppContext)

    return (
        <div>
            <input 
                type="text" 
                className="input-search" 
                placeholder="Hacer ..."
                value={searchValue}
                onChange={(event)=>{
                    console.log(event.target.value)
                    setSearchValue(event.target.value)
                }}
            ></input>
        </div>
    )
}

export {TodoSearch}