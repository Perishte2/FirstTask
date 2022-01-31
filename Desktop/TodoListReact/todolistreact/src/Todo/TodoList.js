import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList(props) {
    const styles = {
        ol: {
            listStyle: 'none',
            margin: 0,
            padding: 0
        }
       }
       
    return(
  <ol id="todo-list" style={styles.ul}>
      {props.todos.map((todo , index) => {
          return(<TodoItem 
          todo={todo}
          key={todo.id}
          index={index} />
          )
      })}

  </ol>
    );
};

TodoList.propTypes =  {
     todos: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default TodoList;