import { combineReducers, createStore } from "redux"
import { reducer as formReducer } from 'redux-form'
import flightsReducer from "./flightsReducer"



const reducers = combineReducers({
  flightsReducer: flightsReducer,
  form: formReducer,
})

let store = createStore(reducers)

export default store