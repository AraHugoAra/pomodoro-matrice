import React, { useEffect, useState } from 'react'
import Currently from "./Currently"
import MyTasks from "./MyTasks"
import { ThemeContext } from './ThemeContext'

export default function App() {

    //cart et localStorage
    const savedCart = localStorage.getItem('tasks')
    const [tasks, setTasks] = useState(savedCart ? JSON.parse(savedCart) : [
        {content: "Coucou petit perruche 🦜", finished: false, focus: false}, 
        {content: "Le bébé 🐥", finished: false, focus: false}
    ])
    useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks])

    //Dark theme
    const [darktheme, toggleDarkTheme] = useState(false)
    function switchTheme(e){
        e.preventDefault()
        toggleDarkTheme(t => !t)
    }
    const bodyStyle = {
        light: {
            backgroundColor: "rgb(255, 244, 234)",
            color: "black",
            height: "100vh",
        },
        dark: {
            backgroundColor: "rgb(81, 81, 81)",
            color: "white",
            height: "100vh"
        }
    }

    return(
        <div style={darktheme ? bodyStyle.dark : bodyStyle.light} className={`d-flex flex-column justify-content-center align-items-center`}>
            <h1 className="text-center my-2">
                My Dashboard
                {darktheme && <span style={{"fontSize": "0.7em", "opacity": "0.7"}} role="img" aria-label='boo emoji'> 👻</span>}
            </h1>
            <button 
                style={{"marginLeft":"10%"}} 
                className="btn btn-outline-info mb-2 align-self-start"
                onClick={(e) => switchTheme(e)}
            >{darktheme ? "Light Mode" : "Dark Mode"}</button>
            <div style={{"width":"80%"}} className="row shadow">
                <ThemeContext.Provider value={darktheme}>
                    <MyTasks tasks={tasks} setTasks={setTasks} />
                    <Currently tasks={tasks} setTasks={setTasks} />
                </ThemeContext.Provider>
            </div>
        </div>
    )
}