import {useState} from 'react';
// import {AddTodo} from './AddTodo'
// import {Tasks} from './Tasks'
import AddTodo from './AddTodo';
import Tasks from './Tasks';
let nextId=3;
const initialTodos=[
    {id: 0, title: 'Buy milk', done: true},
    {id: 1, title: 'Eat tacos', done: false},
    {id: 2, title: 'Brew tea', done: false},
];

export default function TaskApp(){
    const [todos, setTodos]=useState(initialTodos);

    function handleAddTodo(title){
        setTodos([
            ...todos,
            {
                id:nextId++,
                title: title,
                done: false
            }
        ]);
    }
    function handleChangeTodo(nextTodo){
        setTodos(todos.map(t=>{
            if(t.id===nextTodo.id){
                return nextTodo;
            }else{
                return t;
            }
        }));
    }

    function handlDeleteTodo(todoId){
        setTodos(
            todos.filter(t=> t.id!==todoId)       
        );
    }

    return(
        <>
            <AddTodo 
                onAddtodo={handleAddTodo}
            />
            <Tasks
                todos={todos}
               onChangeTodo={handleChangeTodo}
               onDeleteTodo={handlDeleteTodo} 
            />
        </>
    );
}