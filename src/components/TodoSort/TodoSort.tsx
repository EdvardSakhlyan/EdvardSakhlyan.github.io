import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {actionCreator} from "../../store/actions/todoActions";
import arrow from "../../images/icons/down-arrow.svg"


const TodoSort : React.FC = () => {

    const dispatch = useDispatch()

    const [bool , setBoll] = useState<boolean>(true)

    const sortHandler = (param : string) : void => {
        const sortAction = actionCreator("SORT_BY" + param)
        setBoll(!bool)
        dispatch(sortAction({
            prop : bool
        }))
    }

    return (
        <div className="todo-sort-header mt1r">
            <div>
                <h2>Sort by</h2>
            </div>
            <div className="sort-buttons">
                <input type="checkbox" id="ALPHABET" name="sort"/>
                <label
                    htmlFor="ALPHABET"
                    onClick={() => sortHandler("_ALPHABET")}
                >
                    <span>By alphabet</span>
                    <img src={arrow} alt="arrow" />
                </label>

                <input type="checkbox" id="PRIORITY" name="sort"/>
                <label
                    htmlFor="PRIORITY"
                    onClick={() => sortHandler("_PRIORITY")}
                >
                    By priority
                    <img src={arrow} alt="arrow" />
                </label>

                <input type="checkbox" id="DATE" name="sort"/>
                <label
                    onClick={() => sortHandler("_DATE")}
                    htmlFor="DATE"
                >
                    By date
                    <img src={arrow} alt="arrow" />
                </label>

            </div>
        </div>
    );
};

export default TodoSort;