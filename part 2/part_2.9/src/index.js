import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    pid: 1,
    name: 'prasanth',
    number: 8524719632
  },
  {
    pid: 2,
    name: 'venu',
    number: 9632587415
  },
  {
    pid: 3,
    name: 'ramesh',
    number: 2587413690
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
