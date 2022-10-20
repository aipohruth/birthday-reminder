import React from 'react';

const List = ({people, onDelete}) => {
  return (
    <>
     {people.map((person) => {
const {name, age, image, id, gender} = person;
      return (
        <article key={id} className='person'>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <small>{gender}</small>
            <p>{age} years old</p>
          </div>
          <button onClick={() => onDelete(id)} className='btn'>Delete</button>
        </article>
      )
     })}
    
    </>
  );
};

export default List;
