import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    pid: 1,
    name: 'vamsi',
    number: 8526725821
  },
  {
    pid: 2,
    name: 'kishore',
    number: 6300254171
  },
  {
    pid: 3,
    name: 'prakash',
    number: 8964711523
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
