import React, { useEffect, useState } from "react"

export default function ProgressBar({tasks}) {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const finishedTasks = tasks.filter(t => t.finished)
        setProgress(finishedTasks.length * 100 / tasks.length)
    }, [tasks])

    return(
        <div className="progress">
            <div 
                className="progress-bar" 
                role="progressbar" 
                style={{"width": `${progress}%`}}
                aria-valuenow={progress}
                aria-valuemin="0" 
                aria-valuemax="100"></div>
        </div>
    )
}