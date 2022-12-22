import React from "react"
import ProgressBar from "./ProgressBar"
import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"

export default function TasksList({ tasks, setTasks }) {

    function handleCheck(task, index) {
        const toUpdate = [...tasks]
        toUpdate.splice(index, 1, {...task, finished: !task.finished, focus: false})
        setTasks(toUpdate)
    }

    function handleDelete(e, task) {
        e.preventDefault()
        setTasks(tasks.filter(e => e !== task))
    }

    function handleFocus(task, index) {
        //tous les focus sont reset à false pour éviter les doublons
        const toUpdate = tasks.map(obj => Object.assign(obj, {...obj, focus: false}))
        toUpdate.splice(index, 1, {...task, focus: true})
        setTasks(toUpdate)
    }

    //Dark theme
    let darktheme = useContext(ThemeContext)
    const tasksListTheme = {
        light: null,
        dark: {
            backgroundColor: "rgb(44, 44, 44)",
            color: "white"
        }
    }

    return(
        <>
            {/* <p>Progess:</p> */}
            <ProgressBar tasks={tasks} />
            <h3 className="mb-3">My Tasks</h3>
            <ul className="list-group">
                {tasks.map((task, index) =>
                <li 
                    className="d-flex justify-content-between align-items-center list-group-item pl-4" 
                    key={index}
                    style={darktheme ? tasksListTheme.dark : tasksListTheme.light}
                >
                    <input 
                        className="form-check-input mb-1" 
                        type="checkbox"
                        checked={task.finished && !task.focused}
                        id={index}
                        onChange={() => handleCheck(task, index)}
                    />
                    <label className="my-2" htmlFor={index}>{task.content}</label>
                    <div className="d-flex">
                        {!task.finished && <button 
                            className="btn btn-info"
                            onClick={() => handleFocus(task, index)}
                        >
                            do now
                        </button>}
                        <button 
                            className="btn btn-danger ml-1"
                            onClick={(e) => handleDelete(e, task)}
                        >
                            X
                        </button>
                    </div>
                </li>)}
            </ul>
        </>
    )
}