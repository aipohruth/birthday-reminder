import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)

  const onDelete = (id) =>{
    setPeople(people.filter(c => c.id !== id))
  }

  /*const onAdd = (person) =>{
    const id = Math.floor(Math.random() * 100 + 1);
    const newB = {...person, id}
    setPeople([...people, newB])
     <button onClick={() => onAdd()}>Add Birthdays</button>
  }*/
  return ( 
  <main>
    <section className="container">
     <h3>{people.length} birthdays today</h3>
    
     <List people={people} onDelete={onDelete} />
     <button onClick={() => setPeople([])}>Clear All</button>
    </section>
  </main>
  )
  
  
}

export default App;
