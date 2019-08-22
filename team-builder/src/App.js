import React, {useState} from 'react';
import List from './List.js';
import './App.css';
import Employees from './Form';
import Peeps from './Peeps';


function App() {
  const [worker, setWorker] = useState(Peeps);
  
const addWorker =person => {
  setWorker([...worker, {...person, id: Date.now()}]);
}

const editWorker = editedWorker => {
  const workerCopy = [...worker];
  const workerIndex = workerCopy.findIndex(worker=> worker.id === editedWorker.id);
  workerCopy[0] = editedWorker;
  setWorker(workerCopy);
}

  return (
    <div className="App">
      <Employees>
       (Peeps.map(person => <List person={Peeps} />))
       </Employees>
    </div>
  );
}

export default App;
