/*
 * ACTIONS
 * receive dispatch from CONTAINER
 * pass new immutable to REDUCER
 *
 */

import axios from 'axios'

export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE'

export const ADD_TODO_REQUEST = 'ADD_ITEM'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'


export function getTodosRequest(){
	const request = axios.get('/api/todos');
	return {
		type: GET_TODOS_REQUEST,	
		payload: request
	}
}

export function getTodosSuccess(todos) {
	return {
		type: GET_TODOS_SUCCESS,
		payload: todos
	}
}

export function getTodosFailure(todos) {
	return {
		type: GET_TODOS_FAILURE,
		payload: todos
	}
}

function validateTodo(title) {
	return title.length > 0 ? true : false;
}

export function addTodoRequest(title) {	
	const isValid = validateTodo(title);
	let request = [];
	if (isValid) {
		request = axios.post('/api/todos', {title: title});
	}		
	return {
		type: ADD_TODO_REQUEST,		
		validation: isValid,
		payload: request
	}
}

export function addTodoSuccess(todo) {
	return {
		type: ADD_TODO_SUCCESS,
		payload: todo
	}
}

export function addTodoFailure() {
	return {
		type: ADD_TODO_FAILURE		
	}
}