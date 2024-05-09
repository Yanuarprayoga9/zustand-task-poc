import { useState } from 'react'
import { useStore } from '../../store'
import Task from '../Task/Task'
import "./Column.css"
import PropTypes from "prop-types"
import classNames from 'classnames'
const Column = ({ state }) => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [drop, setDrop] = useState(false);


    const tasks = useStore((store) =>
        store.tasks.filter((task) => task.state === state)
    )

    const addTask = useStore((store) => store.addTask)
    const draggedTask = useStore((store) => store.draggedTask)
    const moveTask = useStore((store) => store.moveTask)

    const onDropTask = (e=>{
        setDrop(false);
        e.preventDefault();
        moveTask(draggedTask,state)
    })

    return (
        <div className={classNames('column', { drop: drop })}
        onDragOver={e=>{
            setDrop(true);
            e.preventDefault()
        }}
        onDragLeave={(e) => {
            setDrop(false);
            e.preventDefault();
          }}
        onDrop={onDropTask}
        >
            <div className="titleWrapper">
                <p>{state}</p>
                <button onClick={() => setOpen(true)}>add</button>
            </div>
            {/* <Task title={state.title}/> */}
            {
                tasks.map((task) => (
                    <Task title={task.title} key={task.title} />
                ))
            }

            {open && (
                <div className="Modal">
                    <div className="modalContent">
                        <input onChange={(e) => setText(e.target.value)} value={text} />
                        <button
                            onClick={() => {
                                if(text == '' ) {
                                    return alert("tidak boleh kosong"); 
                                }
                                addTask(text, state);
                                setText('');
                                setOpen(false);
                            }}
                        >
                            Submit
                        </button>
                        <button
                            onClick={() => {
                                
                                setOpen(false);
                            }}
                        >
                            cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

Column.propTypes = {
    state: PropTypes.string
}

export default Column