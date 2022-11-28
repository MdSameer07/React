import React,{useState} from 'react';
import TodoItem from './TodoItem'

function Todolist(){
    console.log('Banana')
    const [todos,setTodos] = useState([
        {id:1,title:'exercise',selected:false},
        {id:2,title:'study',selected:false},
        {id:3,title:'play',selected:false},
        {id:4,title:'sleep',selected:false}
    ])

    function onItemTodoClicked(id){
        const newTodos = [...todos]
        const todo = newTodos.find((todo)=>todo.id===id)
        todo.selected = !todo.selected
        setTodos(newTodos)
    }

    function deleteSelected(){
        const newTodos = todos.filter((todo)=>todo.selected===false)
        setTodos(newTodos)
    }
    return (
    <div className = 'TodoListContainer'>
        {todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} onClick = {onItemTodoClicked}/>
        ))}
        <div className = 'delete' onClick = {deleteSelected}>
            <button>delete</button>
        </div>
    </div>
    )

}

export default Todolist