import { combineReducers } from 'redux'
import { GET_ITEMS, ADD_ITEM } from '../actions/actions'

const initialState = ['Sample']

const itemsReducer = function(state = initialState, action) {   
   switch (action.type) {        
      case ADD_ITEM:
         var newState = state.concat([action.item]);         
         return newState;
      default:
         return state;
   }
}

const reducers = combineReducers({
   itemsReducer
})

export default reducers