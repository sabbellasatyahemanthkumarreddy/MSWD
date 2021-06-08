import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    pid: 1,
    name: 'seshu',
    number: 98745632101
  },
  {
    pid: 2,
    name: 'rajesh',
    number: 1236547890
  {
    id: 3,
    name: 'hemanth',
    number: 5824716800
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
