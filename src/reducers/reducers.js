import { combineReducers } from 'redux'
import { ADD_ITEM, UPDATE_ITEM } from '../actions/actions'

const listReducer = function(state = ['Sample'], action) {   
   switch(action.type) {        
      case ADD_ITEM:
         const newState = state.concat([action.item]);   
         return newState;               
      default:
         return state;
   }
}

const menuReducer = function(state = [], action) {
  switch(action.type) {
    case UPDATE_ITEM:
      const newState = action.item;
      return newState;
    default:
      return state;
  }
}

const reducers = combineReducers({
   listReducer,
   menuReducer
})

export default reducers