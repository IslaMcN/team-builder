import React, {useState} from 'react';
import List from './Peeps';
import './App.css';
import employees from './Form';

function App() {
  const [workers, setWorkers] = useState(data);
  const addNewWorker = person => {
    setWorkers([...workers,person])
  }
  return (
    <div className="App">
       <h1>Employee Data Input</h1>
       <List workerList={workers} />
       <Form addNewWorker={addNewWorker}/>
      
    </div>
  );
}

export default App;
