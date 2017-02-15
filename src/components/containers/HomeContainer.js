/*
 * CONTAINERS
 * connects a Higher Order COMPONENT 
 * and all Mapped PROPS State and Dispatch calls
 * to the Redux STORE (ACTION to REDUCER)
 */

import { connect } from 'react-redux'
import store from '../../store'

import { 
  getTodosRequest, getTodosSuccess, getTodosFailure,
  addTodoRequest, addTodoSuccess, addTodoFailure
} from '../../actions/actions'
import  Home from '../Home'

const mapStateToProps = (state) => {	  	
  return {
    todos: state.todoReducer.todos,
    todo_input: state.todoReducer.newTodo.valid
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  	getTodosRequest: () => {
      dispatch(getTodosRequest())
      .then((response) => {
        if(!response.error) {        	
        	dispatch(getTodosSuccess(response.payload.data))
        }
        else {
        	dispatch(getTodosFailure())
        }
      });
    },    

    addTodoRequest: (title) => {
      let response = dispatch(addTodoRequest(title))      
      if (!response.validation) {
        dispatch(addTodoFailure())
      }
      else if (response.payload) {
        response.payload.then((payload) => {        
          if(payload.status == 201) {         
            // dispatch(addTodoSuccess(payload.data))
            dispatch(getTodosRequest())
            .then((response) => {
              if(!response.error) {         
                dispatch(getTodosSuccess(response.payload.data))
              }
              else {
                dispatch(getTodosFailure())
              }
            });
          }
          else {
            dispatch(addTodoFailure())
          }
        });
      }      
    }
 	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);