const Contact = ({id, name, number}) => {
    return(
      <>
        <li key={id}>
          {name}, {number}
        </li>
      </>
    )
}

export const ShowPersonFilter = ({personsFilter}) => {

    return (
        <>
            <ul>{personsFilter.map(personFilter => {
            return <Contact key={personFilter.id} name={personFilter.name} number={personFilter.number} />
            })}
            </ul>
        </>
    )
}

export const ShowAllPerson = ({persons}) => {
    return(
        <>
            <ul>
            {persons.map(person => {
            //console.log(person.name)
            return <Contact key={person.id} name={person.name} number={person.number} />
            })}          
            </ul>
        </>
    )
}
