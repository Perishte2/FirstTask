import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({todo, index}) {
    const styles={
        li: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '.5rem 1rem',
            borderRadius: '4px',
            marginBottom: '.5rem'

        }
    }
    return (
       <li className="task" style={styles.li}>
           <strong>{index + 1}</strong>
           &nbsp;
           {todo.title}
          
       </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem;