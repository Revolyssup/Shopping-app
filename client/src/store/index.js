//importing rootreducer
import rootReducer from './reducers'
import thunk from 'redux-thunk'

//importing from redux to create store
import {createStore, applyMiddleware, compose } from 'redux'

const middlewares=[thunk]
const initialState={};
const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares))
  );
export default store