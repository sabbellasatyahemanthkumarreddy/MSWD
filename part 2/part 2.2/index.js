import React from "react";
import ReactDOM from "react-dom";


const App = () => {
	const course = {
		name: 'Mearn Stack Web Application Development',
		parts: [
			{
				name: 'React',
				exercises: 9,
				id: 1
			},
			{
				name: ' to pass data',
				exercises: 6,
				id: 2
			},
			{
				name: 'Determination of  components',
				exercises: 9,
				id: 3
			},
			{
				name: "app development",
				exercises: 15,
				id: 4
			}
		]
	}

const Course = ({course}) => {
	return (
		<div>
			<h1>{course.name}</h1>
			<p>{course.parts[0].name} {course.parts[0].exercises}</p>
			<p>{course.parts[1].name} {course.parts[1].exercises}</p>
			<p>{course.parts[2].name} {course.parts[2].exercises}</p>
			<p>{course.parts[3].name} {course.parts[3].exercises}</p>
		</div>
	)
}	
	
const Sum = () => {
	
	const a = [];
	const reducer = (s, p) => {
		return (
			s + p
		)
	}
	
	for (let i = 0; i< course.parts.length; i++) {
		a.push(course.parts[i].exercises)
	}
	
	
	return (
		<div>
			<p><b>Total of {a.reduce(reducer)} exercises</b></p>
		</div>
	)
}
	return (
		<div>
			<Course course={course} />
			<Sum />
		</div>
	)
}

ReactDOM.render(
  <App />, 
  document.getElementById('root'));
