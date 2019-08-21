import React, {useState} from 'react';
import {handler} from './App';

function employees (props) {
    const [worker, setWorker] = useState ({
        name:"",
        email:"",
        DOB:"",
        shift:"",
        title:""
    })
    const handler = event => {
        setWorker({...worker, [event.target.name]: event.target.value})
    }
    const submit = event => {
        event.preventDefault();
        const newWorker ={
            ...worker,
            id: Date.now()
        }
    }
    props.addNewWorker(newWorker);
    setWorker({name: "", email: "", DOB:"",shift: "", title: ""})
    return(
    <form>
        <label>Name</label>
        <input type="text"
        name="Name"
        placeholder="Name"
        value={workers.name}
        onChange={handler}
        />
        <label>Email</label>
        <input type="email"
        name="email"
        placeholder="youremail@here.com"
        value={workers.email}
        onChange={handler}
        />
        <label>Birthdate</label>
        <input type="text"
        name="DOB"
        placeholder="MM/DD/YYYY"
        value={workers.DOB}
        onChange={handler}
        />
        <label>Shift</label>
        <input type="text"
        name="Shift"
        placeholder="Shift"
        value={workers.shift}
        onChange={handler}
        />
        <label>Job Title</label>
        <input type="text"
        name="Title"
        placeholder="Job Title"
        value={workers.title}
        onChange={handler}
        />
        <button type="submit">Enter</button>
    </form>
   
    )
}

export default employees