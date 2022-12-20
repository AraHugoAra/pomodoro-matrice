import React, { useState } from 'react'
import Currently from "./Currently"
import MyTasks from "./MyTasks"

export default function App() {
    const [tasks, setTasks] = useState([
        {content: "Coucou petit perruche 🦜", finished: false}, 
        {content: "Le bébé 🐥", finished: false}
    ])
    const [focused, setFocus] = useState("");
    return(
        <div className="row">
            <MyTasks tasks={tasks} setTasks={setTasks} />
            <Currently 
                tasks={tasks}
                focused={focused} 
                setFocus={setFocus} />
        </div>
    )
}