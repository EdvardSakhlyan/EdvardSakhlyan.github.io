import {IAction, ITodo} from "../actions/todoActions";

export interface IState {
    todos: ITodo[],
}

const initialState : IState = {
    todos : [
        {
          id: Math.round(Math.random() * 10000000),
          title: "BB you need todo 1",
          created_at : Date.now(),
          priority: 1
        },
        {
            id: Math.round(Math.random() * 10000000),
            title: "AWhat you need todo 2",
            created_at : Date.now() - 1,
            priority: 1
        },
        {
            id: Math.round(Math.random() * 10000000),
            title: "Zsadas you need todo 3",
            created_at : Date.now() - 2,
            priority: 2
        },
        {
            id: Math.round(Math.random() * 10000000),
            title: "CWhat you need todo 4",
            created_at : Date.now() - 3,
            priority: 4
        },
        {
            id: Math.round(Math.random() * 10000000),
            title: "Qcjmk you need todo 4",
            created_at : Date.now() - 4,
            priority: 5
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
            console.log(action.payload.prop)
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload.prop)
            } as IState
        case "SORT_BY_ALPHABET" :
            console.log(state)
            return {
                todos: state.todos.sort((a,b) => {
                    if (action.payload.prop) {
                        return a.title.localeCompare(b.title)
                    }
                    else {
                        return b.title.localeCompare(a.title)
                    }

                })
            } as IState
        case "SORT_BY_DATE" :
            return {
                todos: state.todos.sort((a,b) => {
                    if (action.payload.prop){
                        return a.created_at - b.created_at
                    }
                    else {
                        return b.created_at - a.created_at
                    }
                })
            }
        default :
            return state as IState
    }
}