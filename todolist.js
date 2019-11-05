var todolist = [];

function todo(id, message){
  return {
    id: id,
    message: message,
    completed: false,
    createdAt: Date.now(),
    completedAt: undefined, 
    }
}

 function addToDo(todo){
  todolist.push(todo)
 }
 
   function toggleCheck(id){
   
    todolist[i].completed = true;
    todolist[i].completedAt= Date.now();
    
      }
    
   