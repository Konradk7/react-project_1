import React from 'react';

function TaskItem({task, removeTask, changeStatus}) {
    return (
        <li>

            <span className={task.status ? 'status done' : 'status active'} onClick={() => changeStatus(task)} />
            {task.name}
            <button onClick={() => removeTask(task)} className={'btn1'}>Delete</button>
        </li>
    );
}

export default TaskItem;