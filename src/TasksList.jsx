import React from "react"

export default function TasksList({ taskList, handleDelete }) {
    return(
        <>
            <h2>My Tasks</h2>
            <ul className="list-group">
                {taskList.map((task, index) => 
                <li 
                    className="d-flex justify-content-between align-items-center list-group-item" 
                    key={index} 
                >
                    {task}
                    <button 
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(e, task)}
                    >
                        X
                    </button>
                </li>)}
            </ul>
        </>
    )
}