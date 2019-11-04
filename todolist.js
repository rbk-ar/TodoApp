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
 
   function checked(id){
    for(var i = 0; i < todolist.length; i++){
      if(todolist[i].id === id){
        todolist[i].completed = true;
        todolist[i].completedAt= Date.now();
      }
    }
   }