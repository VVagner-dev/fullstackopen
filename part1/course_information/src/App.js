const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack"

  const part1 = { name: "Fundamentos da biblioteca React", exercises: 10 }
  const part2 = { name: "Usando props para passar dados", exercises: 7 }
  const part3 = { name: "Estado de um componente", exercises: 14 }

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <p>{Total(part1, part2, part3)}</p>
    </div>
  )
}

const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Part = ({ part }) => (
  <div>
    <p>
      {part.name} | {part.exercises}
    </p>
  </div>
)

const Content = ({ part1, part2, part3 }) => (
  <div>
    <Part part={part1} />
    <Part part={part2} />
    <Part part={part3} />
  </div>
)

const Total = (part1, part2, part3) => {
  return <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>

}


export default App
