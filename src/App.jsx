import React, { useState } from 'react'
import Currently from "./Currently"
import MyTasks from "./MyTasks"

export default function App() {
    const [tasks, setTasks] = useState([
        {content: "Coucou petit perruche 🦜", finished: false, focus: false}, 
        {content: "Le bébé 🐥", finished: false, focus: false}
    ])

    return(
        <div className="row mt-4">
            <MyTasks tasks={tasks} setTasks={setTasks} />
            <Currently tasks={tasks} setTasks={setTasks} />
        </div>
    )
}