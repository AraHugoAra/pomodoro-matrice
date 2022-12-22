import React, { useEffect, useState } from 'react'
import Currently from "./Currently"
import MyTasks from "./MyTasks"

export default function App() {

    const savedCart = localStorage.getItem('tasks')
    const [tasks, setTasks] = useState(savedCart ? JSON.parse(savedCart) : [
        {content: "Coucou petit perruche 🦜", finished: false, focus: false}, 
        {content: "Le bébé 🐥", finished: false, focus: false}
    ])
    useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks])

    return(
        <div style={{"height":"100vh"}} className="d-flex flex-column justify-content-center align-items-center bg-light">
            <h1 class="text-center mb-4">My Dashboard</h1>
            <div style={{"width":"80%"}} className="row shadow">
                <MyTasks tasks={tasks} setTasks={setTasks} />
                <Currently tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
    )
}