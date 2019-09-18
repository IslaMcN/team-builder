import React from 'react';


const List = props => {
    const person = props.person;

    return (
        <div key={person.id}>
            <h2>{person.name}</h2>
            <div>{person.email}</div>

            <div> {person.DOB}</div>

            <div> {person.shift}</div>

            <div> {person.title}</div>
        </div>
    );

}

export default List;