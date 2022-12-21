import React from "react";

export default function Currently({ tasks }) {
  let focused = ""
  tasks.map(t => (t.focus & !t.finished) && (focused = t.content))
  return (
    <div className="col">
        <h2 className="text-center">Currently doing</h2>
        <p className="text-center">
          {focused ? `${focused}` : "Not currently doing anything."}
        </p>
    </div>
  )
}
