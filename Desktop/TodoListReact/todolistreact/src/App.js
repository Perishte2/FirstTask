import React from 'react';
import TodoList from './Todo/TodoList';

function App() {

  let todos=[
    {id:1, title:'Buy lemonade'},
    {id:2, title:'Make toasts'},
    {id:3, title:'Repair car'},
    {id:4, title:'Play games'},
    {id:5, title:'Pet a cat'}
      
    
  ];
  return (
    <div className="wrapper">
    <h1>TodoList</h1>

    <TodoList todos={todos} />
     

    </div>
  );
}

export default App;
