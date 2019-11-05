var todolist = [];

function todo(message){
  return {
    id: todolist.length,
    message: message,
    completed: false,
    createdAt: Date.now(),
    completedAt: undefined, 
    deleted: false
    }
}

 function addTodo(todo){
  todolist.push(todo)
 }
 
function toggleCheck(id){
    todolist[id].completed = !todolist[id].completed;
    todolist[id].completedAt= Date.now();
}

function deleteTodo(id){
    todolist[id].deleted = true;
}