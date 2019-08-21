import React from 'react';


const List = props => {
    const person = props.person;

    return (
        <div key={person.id}>
            <h2>{person.name}</h2>
            <p>{person.email}
                <br />
                {person.DOB}
                <br />
                {person.shift}
                <br />
                {person.title}</p>
        </div>
    );

}

export default List;