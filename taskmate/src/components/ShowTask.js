import React from 'react';
import "../styles/ShowTask.css";

export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleEdit = (id) => {
        const selectedTask = tasklist.find(task => task.id === id);
        setTask(selectedTask);
    }

    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter(task => task.id !== id);
        setTasklist(updatedTaskList);
    }

  return (
    <section className='showCard'>
        <div className='head'>
            <div className='title'>
                <span className='name'>Todo</span>
                <span className='number'>{tasklist.length}</span>
            </div>
            <button onClick={() => setTasklist([])}>Clear</button>
        </div>
        <div className='content'>
            {tasklist.map((todo) => (
                <div className='card' key={todo.id}>
                    <div className='card-head'>
                        <div className='card-name'>{todo.name}</div>
                        <div className='card-action'>
                            <i 
                                className="fa-solid fa-pen-to-square" style={{color: "#FFD43B"}}
                                onClick={() => handleEdit(todo.id)}
                            ></i>
                            <i 
                                className="fa-solid fa-trash-can" style={{color: "red"}}
                                onClick={() => handleDelete(todo.id)}
                            ></i>
                        </div>
                    </div>
                    <div className='card-datetime'>{todo.time}</div>
                </div>
            ))}
        </div>
    </section>
  )
}
