import { combineReducers } from 'redux'
import { 
  GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, 
  VALIDATE_ITEM_FAILURE, VALIDATE_ITEM_DEFAULT,
  EXPAND_COLLAPSIBLE,
  ADD_ITEM, UPDATE_ITEM 
} from '../actions/actions'

const listReducer = function(state = [], action) {   
  switch(action.type) { 
    case GET_ITEMS_SUCCESS: 
      let currentState = action.data;
      return currentState;
    case ADD_ITEM:      
      action.data.items = [];
      let addNewState = state.concat([action.data]);   
      return addNewState;               
    default:
      return state;
  }
}

const menuReducer = function(state = [], action) {
  switch(action.type) {
    case UPDATE_ITEM:
      const newState = action.data;
      return newState;
    default:
      return state;
  }
}

const validateReducer = function(state = null, action) {
  switch(action.type) {
    case VALIDATE_ITEM_FAILURE:
      return 'error'
    default:
      return null;
  }
}

const collapsibleReducer = function(state = false, action) {
  switch(action.type) {
    case EXPAND_COLLAPSIBLE:
      return !state;
    default:
      return false;
  }
}

const reducers = combineReducers({
   listReducer,
   menuReducer,
   validateReducer,
   collapsibleReducer,
})

export default reducers