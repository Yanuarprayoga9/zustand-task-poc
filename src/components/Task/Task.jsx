import { useStore } from "../../store";
import "./Task.css"
import PropTypes from "prop-types"
import trash from "../../assets/trash.svg"
import classNames from "classnames";
export default function Task({ title }) {
    const task = useStore((store) =>
        store.tasks.find((task) => task.title === title)
    );
    const setDraggedTask = useStore((store) => store.setDraggedTask);
    const deleteTask = useStore((store)=>store.deleteTask)
    return (
        <div
            className="task"
            draggable
            onDragStart={() => setDraggedTask(task.title)}
        >
            <div>{title}</div>
            <div className="bottomWrapper">
                <div>
                    <img src={trash} onClick={() => deleteTask(title)} />
                </div>
                <div className={classNames('status', task.state)}>{task.state}</div>
            </div>
        </div>
    );
}

Task.propTypes = {
    title: PropTypes.string
}