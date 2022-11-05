import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodoAction, ITodo} from "../../store/actions/todoActions";
import {IState} from "../../store/reducers/todoReducer";
import {RootState} from "../../store/store";
import TodoList from "../TodoList/TodoList";
import '../../styles/Todo.scss'
import TodoSort from "../TodoSort/TodoSort";

const Todo : React.FC = () => {

    const ref = useRef<HTMLInputElement>(null)

    const {todos} : IState = useSelector((state: RootState) => state.todoReducer)

    const dispatch = useDispatch()

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            const newTodo: ITodo = {
                id: Date.now(),
                title: ref.current!.value,
                created_at : Date.now(),
                priority: 1
            }
            if (todos.find(todo => todo.title === ref.current!.value)) {
                alert('You have Todo whit same name')
            }else{
                dispatch(addTodoAction(newTodo))
                ref.current!.value = ""
            }

        }
    }

    return (
        <div className="mtb1r">
            <h2 className="cl-dw">Control your todo list</h2>
            <hr className="mtb1r"/>
            <div className="todo-header">
                <label htmlFor="todo_title">Add todo</label>
                <input
                    type="text"
                    placeholder="Todo Title"
                    id="todo_title"
                    ref={ref}
                    onKeyPress={keyPressHandler}
                />
            </div>
            <TodoSort/>
            <TodoList todos={todos}/>
        </div>
    );
};

export default Todo;

//todo search
//todo sort
//todo add priority