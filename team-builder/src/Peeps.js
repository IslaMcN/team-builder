import React from 'react';

const List = props => {
   
    return(
        <div>
            {props.workersList.map(worker => {
                return(
                    <div>
                        <h2>{worker.name}</h2>
                        <p>{worker.email}
                        <br></br>
                        {worker.DOB}
                        <br></br>
                        {worker.shift}
                        <br></br>
                        {worker.title}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default List;