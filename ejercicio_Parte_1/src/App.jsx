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
const StaticsLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  )
}

const Statistcs = ({good, neutral, bad, total, avarage, positive}) => {
  
  if(total === 0){
    return <h1> No feedback given</h1>
  }
  return(
    <>
      <h1>Statics</h1>

      <table>
        <tbody>
          <StaticsLine text={'Good'} value = {good} />
          <StaticsLine text={'Neutral'} value ={neutral} />
          <StaticsLine text={'Bad'} value = {bad} />
          <StaticsLine text={'Total'} value = {total} />
          <StaticsLine text={'Avarage'} value = {avarage} />
          <StaticsLine text={'Positive'} value = {positive} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {

  const [good, useGood] = useState(0)
  const [neutral, useNeutral] = useState(0)
  const [bad, useBad] = useState(0)
  const [total, useTotal] = useState(0)
  const [avarage, useAvarage] = useState(0)
  const [positive, usePositive] = useState(0)
  const [randomNumber, setRandomNumber] = useState(null)
  const [points, setPoints ] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0})

  const handleGood = () =>{
    useGood(good+1)
    const goodUpdate = good +1
    useTotal(goodUpdate + neutral + bad)
    const totalUpdate = goodUpdate + neutral + bad
    useAvarage((goodUpdate - bad) / totalUpdate)
    console.log(totalUpdate)
    usePositive((goodUpdate / totalUpdate) * 100)
  } 
   
  const handleNeutral = () =>{
    useNeutral(neutral+1)
    const neutralUpdate = neutral +1
    useTotal(good + neutralUpdate + bad)
  } 
  const handleBad = () =>{
    useBad(bad+1)
    const badUpdate = bad +1 
    useTotal(good + neutral + badUpdate)
    const totalUpdate = good + neutral + badUpdate
    useAvarage((good - badUpdate) / totalUpdate)
    usePositive((good / totalUpdate) * 100)
  } 
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
  }
  const savePoints = () => {
    console.log(randomNumber)
    const copy = {...points}
    copy[randomNumber] += 1
    setPoints(copy)
  }

  //console.log(course.parts)
  return (
    <div>
      <Header title = {'Give feedback'}/>
      <Button handleClick={handleGood} text={'Good'} />
      <Button handleClick={handleNeutral} text={'Neutral'} />
      <Button handleClick={handleBad} text={'Bad'} />
      <Statistcs good={good} neutral={neutral} bad={bad} total={total} avarage={avarage} positive={positive} />
      <h4>{anecdotes[randomNumber]} </h4>
      <Button handleClick={generateRandomNumber} text={'Show Anecdota'} />
      <Button handleClick={savePoints} text={'Votar'} />
    </div>
  )
}

export default App
