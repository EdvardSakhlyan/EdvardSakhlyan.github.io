export interface ITodo {
    id : number
    title: string
    prop? : number | boolean
    created_at : number
    priority : number
}

export interface IPayload{
    prop : number | boolean
}


export type IAction = {
    type: string
    payload: ITodo | IPayload
}
//IAction["type"]

export const actionCreator = function (type : string) {
    return function (payload? : ITodo | IPayload) {
        if (arguments.length > 0){
            return {type , payload} as IAction
        }
        else return {type}
    }
}

// export const actionCreator = (type: string) => (payload : ITodo | any) => {
//     return {type , payload } as IAction
// }

export const addTodoAction = actionCreator('ADD_TODO')
export const deleteTodoAction = actionCreator('DELETE_TODO')
