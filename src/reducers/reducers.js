/*
 * REDUCERS
 * receive paylod from ACTIONS
 * mutate STATE then pass to CONTAINER as PROPS
 *
 */

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { schema, normalize } from 'normalizr'
import update from 'immutability-helper'

import { 
  GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAILURE,  
  ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE,
  ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAILURE,
} from '../actions/actions'


const INITIAL_STATE = {
  todos: { todo:[], item:[], valid:null, error:null, loading:false }  
}

const todoReducer = function(state = INITIAL_STATE, action) {   
  switch(action.type) { 
    case GET_TODOS_REQUEST:      
      return {...state, todos:{todo:[], item:[], error:null, loading:true}};
    case GET_TODOS_FAILURE: 
      return {...state, todos:{todo:[], item:[], error:'Error', loading:false}};
    case GET_TODOS_SUCCESS:  
      const itemSchema = new schema.Entity('items')
      const itemArraySchema = new schema.Array(itemSchema)
      const todoSchema = new schema.Entity('todos', {items:itemArraySchema})
      const todoArraySchema = new schema.Array(todoSchema)
      const normalized = normalize(action.payload, todoArraySchema)       
      return {
        ...state, 
        todos: {
          todo: normalized.entities.todos,
          item: normalized.entities.items,
          error: null, loading: false
        }
      };          

    case ADD_TODO_REQUEST:            
      return {...state, todos:{...state.todos, error:null, loading:true, valid:null}};    
    case ADD_TODO_FAILURE:
      return {...state, todos:{...state.todos, error:null, loading:false, valid:'error'}};
    case ADD_TODO_SUCCESS: 
      const todoId = action.payload.id
      const todoObj = action.payload
      return {
        ...state, 
        todos: {
          todo: update(state.todos.todo, {$merge:{todoId:todoObj}}),
          item: state.todos.item,
          error: null, loading: false
        }
      };      

    case ADD_TASK_REQUEST:
      return {...state, todos:{...state.todos, error:null, loading:true}};    
    case ADD_TASK_FAILURE:
      return {...state, todos:{...state.todos, error:"Error", loading:false}};
    case ADD_TASK_SUCCESS:          
      const itemId = action.payload.id
      const itemObj = action.payload
      return {
        ...state, 
        todos: {
          todo: state.todos.todo,
          item: update(state.todos.item, {$merge:{itemId:itemObj}}),
          error: null, loading: false
        }
      };  

    default:
      return state;
  }
}


const reducers = combineReducers({
   todoReducer,
   form: formReducer
})

export default reducers