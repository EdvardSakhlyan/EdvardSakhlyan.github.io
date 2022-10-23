import {IAction, ITodo} from "../actions/todoActions";

export interface IState {
    todos: ITodo[],
}

const initialState : IState = {
    todos : [
        {
          id: Math.round(Math.random() * 10000000),
          title: "What you need todo 1"
        },
        {
            id: Math.round(Math.random() * 10000000),
            title: "What you need todo 2"
        },
        {
            id: Math.round(Math.random() * 10000000),
            title: "What you need todo 3"
        },
        {
            id: Math.round(Math.random() * 10000000),
            title: "What you need todo 4"
        },
    ]
}

export const todoReducer = (state  = initialState, action : IAction) => {
    switch (action.type){
        case "ADD_TODO" :
            return {
                todos: [action.payload ,...state.todos]
            } as IState
        case "DELETE_TODO" :
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            } as IState
        default :
            return state as IState
    }
}