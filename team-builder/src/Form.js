import React, {useState} from 'react';


const Employees = (props) => {
    const { submitPerson, initialPerson, buttonText, history} = props;
    const [worker, setWorker] = useState (initialPerson ||
       { name:"",
        email:"",
        DOB:"",
        shift:"",
        title:""}
    )
    const handler = event => {
        setWorker({...worker, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        submitPerson(worker);
        setWorker({name:"", email:"", DOB:"",shift:"", title:""});
        history.push("/");
    }
   
    return(
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text"
        name="Name"
        placeholder="Name"
        value={worker.name}
        onChange={handler}
        />
        <label>Email</label>
        <input type="email"
        name="email"
        placeholder="youremail@here.com"
        value={worker.email}
        onChange={handler}
        />
        <label>Birthdate</label>
        <input type="text"
        name="DOB"
        placeholder="MM/DD/YYYY"
        value={worker.DOB}
        onChange={handler}
        />
        <label>Shift</label>
        <input type="text"
        name="Shift"
        placeholder="Shift"
        value={worker.shift}
        onChange={handler}
        />
        <label>Job Title</label>
        <input type="text"
        name="Title"
        placeholder="Job Title"
        value={worker.title}
        onChange={handler}
        />
        <button type= "submit">Enter</button>
    </form>
   
    );
};

export default Employees