import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
// import thunkMiddleware from "redux-thunk";



const reducers = combineReducers({
  form: formReducer,
})

let store = createStore(reducers)
// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store