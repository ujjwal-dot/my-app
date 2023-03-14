import React from 'react'
import Person from './Person'


function NameList() {

    const names =['bruce','clark','diana','bruce']

    const person = [
        {
            id: 1,
            name: "Bruce",
            age : 23,
            skill: "Vue"
        },
        {
            id: 2,
            name: "clark",
            age : 23,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Diana",
            age : 25,
            skill: "React"
        }
    ]
 
    const personList = person.map(person => <Person key={person.id} person={person}/>)
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
  return <div>{nameList}</div>
  
}

export default NameList