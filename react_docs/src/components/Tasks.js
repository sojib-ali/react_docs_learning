import {useState} from 'react';
export default function Tasks({
    todos,
    onChangeTodo,
    onDeleteTodo
}){
    return(
        <ul>
            {todos.map(todo=>(
                <li key={todo.id}>
                    <Task 
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({todo, onChange, onDelete}){
    const [isEditing, SetIsEditing]=useState(false);
    let todoContent;
    if(isEditing){
        todoContent=(
          <>
            <input
                value={todo.title}
                onChange={e=>{
                    onChange({
                        ...todo,
                        title:e.target.value
                    });
                }} />
                <button onClick={()=>SetIsEditing(false)}>
                    Save
                </button>
          </>  
        );
    }else{
        todoContent=(
            <>
                {todo.title}
                <button onClick={()=>SetIsEditing(true)}>Edit</button>
            </>
        );
    }
    return(
        <label>
            <input
                type='checkbox'
                checked={todo.done}
                onChange={e=>{
                    onChange({
                        ...todo,
                        done:e.target.checked
                    });
                }}
            />
            {todoContent}
            <button onClick={()=>onDelete(todo.id)}>Delete</button>
        </label>
    );

}
