import React, { useEffect, useState } from "react"

export default function ProgressBar({tasks}) {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const finishedTasks = tasks.filter(t => t.finished)
        setProgress(finishedTasks.length * 100 / tasks.length)
    }, [tasks])

    return(
        <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 mr-2" >Progess:</p>
            <div className="progress my-4" style={{"width":"85%"}}>
                <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{"width": `${progress}%`}}
                    aria-valuenow={progress}
                    aria-valuemin="0" 
                    aria-valuemax="100"></div>
            </div>
        </div>
    )
}