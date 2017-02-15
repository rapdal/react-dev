/*
 * REDUCERS
 * receive paylod from ACTIONS
 * mutate STATE then pass to CONTAINER as PROPS
 *
 */


import { combineReducers } from 'redux'
import { 
  GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE,  
  ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE,
} from '../actions/actions'


const INITIAL_STATE = {
  todos: { 
    items: [], error: null, loading: false 
  },  
  newTodo: {
    item: null, error: null, loading: false, valid: null
  }
}

const todoReducer = function(state = INITIAL_STATE, action) {   
  switch(action.type) { 
    case GET_TODOS_REQUEST:      
      return {...state, todos:{items:[], error:null, loading:true}};
    case GET_TODOS_SUCCESS:         
      return {...state, todos:{items:action.payload, error:null, loading:true}};      
    case GET_TODOS_FAILURE: 
      return {...state, todos:{items:[], error:'Error', loading:false}};  

    case ADD_TODO_REQUEST:            
      return {...state, newTodo:{...state.newTodo, error:null, loading:true, valid:null}};
    case ADD_TODO_SUCCESS:
      return {...state, newTodo:{item:action.payload, error:null, loading:false, valid:action.validation}};
    case ADD_TODO_FAILURE:
      return {...state, newTodo:{item:null, error:null, loading:false, valid:'error'}};

    default:
      return state;
  }
}

/*
const validateReducer = function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case VALIDATE_TODO: 
      return action.payload ? {...state, todo_input:null} : {...state, todo_input:'error'}
    default:
      return state;
  }
}
*/

/*
const menuReducer = function(state = [], action) {
  switch(action.type) {
    case UPDATE_ITEM:
      const newState = action.data;
      return newState;
    default:
      return state;
  }
}
*/

const reducers = combineReducers({
   todoReducer,
   // menuReducer,
})

export default reducers