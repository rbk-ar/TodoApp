var todolist = [];

function todo(message){
  return {
    id: todolist.length,
    message: message,
    completed: false,
    createdAt: Date.now(),
    completedAt: undefined, 
    }
}

 function addTodo(todo){
  todolist.push(todo)
 }
 
function toggleCheck(id){
    todolist[id].completed = !todolist[id].completed;
    todolist[id].completedAt= Date.now();
}