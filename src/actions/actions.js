export const ADD_ITEM = 'ADD_ITEM'
export const GET_ITEMS = 'GET_ITEMS'

export function addItem(item) {
   return {
      type: ADD_ITEM,
      item
   };
}