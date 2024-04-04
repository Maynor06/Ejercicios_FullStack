import { useState } from "react"

const Header = ({title}) => {
  //console.log(title)
  return(
    <>
      <h1>{title}</h1>
    </>
    
  )
}

const Button = ({handleClick, text}) => {
  return(
    <div>
      <button onClick={handleClick}>{text} </button>
    </div>
  )
}

const App = () => {

  const [randomNumber, setRandomNumber] = useState(null)
  const [points, setPoints ] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0})
  const [position, setPosition] = useState(null)

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const generateRandomNumber = () => {
    const min = 1
    const max = 7 
    const randomNumber2 = Math.floor(Math.random() * (max - min +1)) + min
    setRandomNumber(randomNumber2)
    console.log("numero generado... ", randomNumber2)

  }
  const savePoints = () => {
    
    const copyPoints = {...points}
    copyPoints[randomNumber] += 1
    setPoints(copyPoints)
    
    console.log(copyPoints)
    
    const maxValue = Math.max(...Object.values(copyPoints))
    const maxPosition = Object.keys(copyPoints).find(key => copyPoints[key] === maxValue)
    setPosition(maxPosition)

    console.log('posicion de la anecdota con mas votos', maxPosition)
    
  }

  //console.log(course.parts)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h4>{anecdotes[randomNumber]} </h4>
      <Button handleClick={generateRandomNumber} text={'Show Anecdota'} />
      <Button handleClick={savePoints} text={'Votar'} />
      <h1>Anecdote with most votes</h1>
      <h4>{anecdotes[position]} </h4>
    </div>
  )
}

export default App
