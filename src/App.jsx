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
        <div className="row mt-4">
            <MyTasks tasks={tasks} setTasks={setTasks} />
            <Currently tasks={tasks} setTasks={setTasks} />
        </div>
    )
}