import React from 'react'
import { taskTypes } from './type'

type PropsTypes={
    task:taskTypes;
    onDeleteTask(nameDelete:string):void
}



function DeleteTask({task,onDeleteTask}:PropsTypes) {
  return (
    <div className='task'>
        <p>{task.name}</p>
        <p>{task.count}</p>
        <button className='taskbutton' onClick={()=>onDeleteTask(task.name)}>Delete</button>
    </div>
  )
}

export default DeleteTask