
import './App.css';
import React from 'react';
import { TodoAppContextProvider } from '../Context/TodoAppContext';
import { AppUI } from './AppUi';

/**
    It's important to separate the presentation logic to other type of logic
    for example in this case we separate the AppUI componene from App
    because AppUI is responsible to only manage the HTML logic and App
    is responsible to manage the state of the component
 
 */

function App() {  
 
  return (
    <TodoAppContextProvider>
      <AppUI  />
    </TodoAppContextProvider>
   )
}

export default App;
