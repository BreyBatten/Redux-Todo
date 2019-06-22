export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addNewTodo(newTodo) {
    return {
        type: ADD_NEW_TODO,
        payload: { value: newTodo, completed: false}
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        payload: index
    }
}