import logo from './logo.svg'
import './App.scss'
import Login from './components/Login/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Flights from './components/Flights/Flights'


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch >
          <Route exact path='/' render={() => <Login />} />
          <Route path='/flights' render={() => <Flights />} />
        </Switch >
      </BrowserRouter >
    </div>
  )
}

export default App
