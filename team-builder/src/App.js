import React, {useState} from 'react';
import List from './List.js';
import './App.css';
import Employees from './Form';
import Peeps from './Peeps';

function App() {
  const [worker, setWorker] = useState([{name: "Zelda", email: "doggo@gmail.com", DOB: "02/05/1020", shift: "null - LOA", title: "Front-End Developer" }]);
  const addNewWorker = person => {
    setWorker([...worker,person])
  }
  return (
    <div className="App">
      <Employees>
       (worker.map(person => <List person={{name: "Zelda", email: "doggo@gmail.com", DOB: "02/05/1020", shift: "null - LOA", title: "Front-End Developer"}} />))
       </Employees>
    </div>
  );
}

export default App;
