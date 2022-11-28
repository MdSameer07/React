function getClassName(selected){
    if(selected){
        return 'ToDoItemContainer Selected'
    }else{
        return 'ToDoItemContaianer not Selected'
    }
}

function TodoItem({todo,onClick}){
    console.log('Mango')
    return (
        <div className = {getClassName(todo.selected)} onClick = {()=>onClick(todo.id)}>
            <p className = 'todo-title'>{todo.title}</p>
        </div>
    )
}

export default TodoItem