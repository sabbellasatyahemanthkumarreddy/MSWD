import React from 'react'

const Part = () => {
  const course = 'Mearn Stack web application development'
  const part1 = 'Fundamentals of the React'
  const exercises1 = 10

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part />
      <Part />
      <Part />
    </div>
  )
}

export default Content;
