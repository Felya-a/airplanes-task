import './App.scss'
import Login from './components/Login/Login'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Flights from './components/Flights/Flights'


function App() {
  return (
    <div className="App">
      <HashRouter >
        <Switch >
          <Route exact path='/' render={() => <Login />} />
          <Route path='/flights' render={() => <Flights />} />
        </Switch >
      </HashRouter >
    </div>
  )
}

export default App
