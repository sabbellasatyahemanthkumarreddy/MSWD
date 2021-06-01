import React from "react";
import ReactDOM from "react-dom";

const App = () => {
	const courses = [
		{
			name: 'Mearn Stack web Application Development',
			id: 1,
			parts: [
				{
					name: 'React',
					exercises: 11,
					id: 1
				},
				{
					name: ' pass data',
					exercises: 9,
					id: 2
				},
				{
					name: ' component',
					exercises: 11,
					id: 3
				},
				{
					name: 'linux',
					exercises: 11,
					id: 4
				}
			]
		}, 
		{
			name: 'Node.js',
			id: 2,
			parts: [
				{
					name: 'mongo db',
					exercises: 6,
					id: 1
				},
				{
					name: 'django',
					exercises: 8,
					id: 2
				}
			]
		}
	]


	const One = () => {
		return (
			courses[0].parts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p>)
		)
	}

	
	const Two = () => {
		return (
			courses[1].parts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p>)
		)
	}
	
	
	const Content = ({courses}) => {
		
		const a = [];
		const b = [];
		
		const reducer = (s, p) => {
			return (	
				s + p
			)
		}
		
		for (let i = 0; i < courses[0].parts.length; i++) {
			a.push(courses[0].parts[i].exercises)
		}
		
		for (let i = 0; i < courses[1].parts.length; i++) {
			b.push(courses[1].parts[i].exercises)
		}
		
		
		return (
			<div>
				<h2>{courses[0].name}</h2>
				<One />
				<p><h3>Total of {a.reduce(reducer)} exercises </h3></p>
				
				<h2>{courses[1].name}</h2>
				<Two />
				<p><h3>Total of {b.reduce(reducer)} exercises </h3></p>
			</div>
		)
	}
	
	return (
		<div>
			<h1>Web Development</h1>
			<Content courses = {courses} />
		</div>
	)
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root'));
