import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers/reducers'

const store = createStore(reducers, applyMiddleware(promiseMiddleware))
export default store