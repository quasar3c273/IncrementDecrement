import React from 'react';

const Counter = ({id, value, name, onIncrement, onDecrement, onDelete}) => {
  const classesBtn = 'btn btn-secondary btn-sm';

  const formValue = () => {
    return value === 0 ? 'Ноль' : value;
  };

  const getBadgeClasses = () => {
    let classes = 'badge m-2 bg-';
    classes += value === 0 ? 'danger' : 'primary';

    return classes;
  };

  return (
    <React.Fragment>
      <h4>{name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        style={{ marginRight: '5px' }}
        onClick={() => onIncrement(id)}
        className={classesBtn}
      >
        Increment
      </button>
      <button
        onClick={() => onDecrement(id)}
        className={classesBtn}
        disabled={value === 0}
      >
        Decrement
      </button>
      <button
        className='btn btn-danger btn-sm m-2'
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default Counter;