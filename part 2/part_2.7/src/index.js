import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    pid: 1,
    name: 'hemanth'
  },
  {
    pid: 2,
    name: 'rajesh'
  },
  {
    pid: 3,
    name: 'seshu'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
