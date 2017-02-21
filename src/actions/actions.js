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

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'

export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE'


// const response = [
// 	{
// 		id: 1,
// 		title: 'title 1',
// 		items: [
// 			{
// 				id: 1,
// 				content: 'content 1',
// 				todoId: 1,
// 			},
// 			{
// 				id: 2,
// 				content: 'content 1',
// 				todoId: 1,
// 			},
// 		]
// 	},
// 	{
// 		id: 2,
// 		title: 'title 2',
// 		items: [
// 			{
// 				id: 3,
// 				content: 'content 3',
// 				todoId: 2,
// 			}
// 		]
// 	}
// ];

// const itemSchema = new schema.Entity('items')
// const itemArraySchema = new schema.Array(itemSchema)

// const todoSchema = new schema.Entity('todos', {items:itemArraySchema})
// const todoArraySchema = new schema.Array(todoSchema)

// console.log(normalize(response, todoArraySchema))    


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
	const isValid = validateTodo(title)
	let request = []
	if (isValid) {
		request = axios.post('/api/todos', {title: title})
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

export function addTaskRequest(formData) {	
	const todoId = formData.id
	const content = formData.content
	let request = []
	request = axios.post(`/api/todos/${todoId}/items`, {content:content})	
	return {
		type: ADD_TASK_REQUEST,
		payload: request
	}
}

export function addTaskSuccess(item) {
	return {
		type: ADD_TASK_SUCCESS,
		payload: item		
	}
}

export function addTaskFailure() {
	return {
		type: ADD_TASK_FAILURE
	}
}