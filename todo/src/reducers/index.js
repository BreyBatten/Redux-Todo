import { ADD_NEW_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
    title: "My Todo List",
    todos: [
        {
            value: 'Complete coding challenge',
            completed: false
        },
        {
            value: 'Workout',
            completed: false
        },
        {
            value: 'Read 10 pages',
            completed: false
        },
        {
            value: 'Complete Career Readiness exercise',
            completed: false
        },
        {
            value: 'Practice React & Redux',
            completed: false
        }
    ]
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_NEW_TODO:
            return {
                state,
                todos: [...state.todos,
                    {
                    value: action.payload,
                    completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => action.payload === index ? {...todo, completed: !todo.completed} : todo)
            }
        default:
            return state;
    }
};

export default reducer;
