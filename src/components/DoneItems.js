import React from 'react'

export default function DoneItems(props) {
  return (
    <div>
      <h3>Tasks Done:</h3>
      <ul>
      {
        props.doneTasks.map((item,index) => (
            <li key={index}>{item}</li>
        ))
      }
      </ul>
    </div>
  )
}
