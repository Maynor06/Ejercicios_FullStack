import Courses from "./components/Courses"
import { useState } from "react"
import {ShowAllPerson, ShowPersonFilter } from "./components/showPerson"
import PersonNew from "./components/PersonNew"
import Filter from "./components/Filter"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
  ])
  const [personsFilter, setPersonsFilter] = useState([''] )
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  //controlador de evento del nombre del contact
  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value)
  }

  //controlador number of contact
  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()
    const newContact = {
      name: newName,
      number: newNumber, 
      id: persons.length +1
    }

    //verificamos si algun contacto ya existe en el array si existe mandamos una alerta
    //y si no existe lo colocamos en la agenda telefonica
    const exist = persons.some(person => person.name === newName)
    if(exist){
      console.log("es verdadero")
      alert(`${newName} is already added to phonebook`)
    }else{
      console.log("es falso", persons.includes(newName) );
      setPersons(persons.concat(newContact))
      setNewName('')
    }
  }
  const showFilters = (event) => {
    event.preventDefault()
    const arrayFilter = persons.filter(person => person.name.includes(newFilter))
    console.log(arrayFilter);
    setPersonsFilter(arrayFilter)
    setNewFilter('')
  }
  
  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Filter Number</h2>
      <Filter showFilters={showFilters} newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h3>Numbers Filters</h3>
      <ShowPersonFilter personsFilter={personsFilter}/>
      <h2>Add Number</h2>
      <PersonNew addContact={addContact} handleNameChange={handleNameChange} newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <ShowAllPerson persons={persons} />

    </div>
  )
}

export default App
