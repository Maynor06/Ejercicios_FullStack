const Total = ({ sum }) => <p>Number of exercises {sum}</p>
  
const Header = ({ title }) => {
  //console.log('lo que llega al commponente title',title);
  return (
      <h1>{title}</h1>
  )

} 

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>{
    //console.log(parts);
    return(
        <>
            {parts.map(part => <Part key={part.id} part={part} /> )}      
        </>
    )
    
} 
  
const Courses = ({courses}) => {
    //console.log('Lo que llega al componente courses:', courses)
    
    return courses.map(course => {
        //console.log('lo que quiero pasar al componente parts: ', course.parts);
        
        return(
            <div key={course.id}>
              <Header title={course.name} />
              <Content parts={course.parts} />
              <Total sum={course.parts.reduce((accumulator, value) => accumulator + value.exercises, 0) } />
            </div>
          )
    })
    
    
  }

export default Courses 