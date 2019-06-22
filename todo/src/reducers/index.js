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
    return {
        title: 'Hello form Todo App!'
    }
};

export default reducer;
