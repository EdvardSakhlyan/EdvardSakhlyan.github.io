import React from 'react';
import {deleteTodoAction, ITodo} from "../../store/actions/todoActions";
import '../../styles/Todo.scss'
import {useDispatch} from "react-redux";

interface props {
    todos : ITodo[]
}

const TodoList : React.FC<props> = (props) => {

    const dispatch = useDispatch()

    const deleteTodo = (id : number) : void => {
        const payload : ITodo = {id}
        dispatch(deleteTodoAction(payload))
    }

    return (
        <ul className="todo-list">
            {
                props.todos.map((todo) => {
                    return (
                        <li className={"todo-item"} key={todo.id} >
                            <input type="checkbox" id={"checkbox_id" + todo.id + ""}/>
                            <label className="checked-label" htmlFor={"checkbox_id" + todo.id + ""}>
                                <div id="tick_mark"></div>
                            </label>
                            <h2 className="todo-title">{todo.title}</h2>
                            <button className="delete-todo" onClick={(event) : void => deleteTodo(todo.id)}>
                                <svg
                                    fill="#000000"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 30 30"
                                    width="30px"
                                    height="30px">
                                    <path d="M 13 3
                                    A 1.0001 1.0001 0 0 0 11.986328 4
                                    L 6 4 A 1.0001 1.0001 0 1 0 6 6
                                    L 24 6 A 1.0001 1.0001 0 1 0 24 4
                                    L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3
                                    L 13 3 z M 6 8
                                    L 6 24 C 6 25.105 6.895 26 8 26
                                    L 22 26 C 23.105 26 24 25.105 24 24
                                    L 24 8
                                    L 6 8 z"/>
                                </svg>
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default TodoList;