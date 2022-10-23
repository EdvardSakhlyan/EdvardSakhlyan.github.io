export type ITodo = {
    id : number
    title?: string
}

export type IAction = {
    type: string
    payload: ITodo
}
//IAction["type"]

const actionCreator = (type: string) => (payload : ITodo) => {
    return {type , payload } as IAction
}

export const addTodoAction = actionCreator('ADD_TODO')
export const deleteTodoAction = actionCreator('DELETE_TODO')