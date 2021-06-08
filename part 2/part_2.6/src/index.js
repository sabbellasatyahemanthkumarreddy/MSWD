import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'hemanth'
  },
  {
    id: 2,
    name: 'Rajesh'
  },
  {
    id: 3,
    name: 'seshu'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
