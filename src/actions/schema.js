import { normalize, schema } from 'normalizr'

export const todos = new schema.Entity('todos', {
	items: items
})
export const items = new schema.Entity('items')

export const todoSchema = {todos: [items]}

