export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST'
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE'

export const VALIDATE_ITEM_DEFAULT = 'VALIDATE_ITEM_DEFAULT'
export const VALIDATE_ITEM_FAILURE = 'VALIDATE_ITEM_FAILURE'

export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'

export function getItemsRequest(){
	return {
		type: GET_ITEMS_REQUEST,		
	}
}

export function getItemsSuccess(items) {
	return {
		type: GET_ITEMS_SUCCESS,
		items
	}
}

export function validateItemsError() {
	return {
		type: VALIDATE_ITEM_FAILURE,
		validation
	}
}

export function validateItemsDefault() {
	return {
		type: VALIDATE_ITEM_DEFAULT,
		validation
	}
}

export function addItem(item) {
   return {
      type: ADD_ITEM,
      item
   };
}

export function updateItem(item) {
   return {
      type: UPDATE_ITEM,
      item
   };
}