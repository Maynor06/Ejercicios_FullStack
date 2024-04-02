
const Header = (course) => {
  console.log(course)
  return(
    <>
      <h1>{course.course}</h1>
    </>
    
  )
}

const Part = ({part}) => {
 //console.log(part)
  return(
    <>
      <p>{part.name} {part.exercise} </p>
    </>
    
  )
}
const Content = ({parts}) => {
  console.log(parts)
  return(
    <>
      <Part part = {parts[0]}/>
      <Part part = {parts[1]}/>
      <Part part = {parts[2]}/>
    </>
  )
}
const Total = ({parts}) => {

  return(

    <>
      <h3>{parts.length}</h3>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'fundamentos of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  } 

  //console.log(course.parts)
  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
