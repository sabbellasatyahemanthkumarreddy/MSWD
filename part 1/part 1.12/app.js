import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
	const [index, setIndex] = useState(0)
	
	const anecdotes = [
		'If it hurts, do it ',
		'Adding manpower to a   project makes it later',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that human beings can understand.',
		'Premature optimization is the root of all evil or devils.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
	]
	
	const handleChange = () => {
		setIndex(Math.floor(Math.random()*anecdotes.length))
	}
	
	return (
		<div>
			<button onClick = {handleChange}>Click Me!!!</button>
			<h1>{anecdotes[index]}</h1>
		</div>
	)
}

export default App;
