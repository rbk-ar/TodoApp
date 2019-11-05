function displayTodo(todo){
    var todoContainer= $('<div class= "todoContainer"></div>');
    var todoMessage= $(`<div class="todoMsg"> ${todo.message} </div>`);
    var completed= $(`<div id= "chbx-${todo.id}" class="completed"><input class= "checkbox" type= "checkbox" onClick="checkTodo(${todo.id})"></div>`);
    if(todo.completed){
        completed = $(`<div>completed</div>`);
    }
    var deleteTodo = $(`<button onClick="deleteTodo_(${todo.id})">delete</button>`);
    todoContainer.append(todoMessage);
    todoContainer.append(deleteTodo);
    todoContainer.append(completed);
    $('#todos').append(todoContainer);
}

function checkTodo(id){
    $('#chbx-'+id).html('completed')
    toggleCheck(id);
}

function renderTodos(){
    $('#todos').html('');
    for(var i = 0; i < todolist.length; i++){
        if(!todolist[i].deleted){
            displayTodo(todolist[i]);
        }
    }
}


function deleteTodo_(id){
    deleteTodo(id);
    renderTodos();
}

$('#form').on('submit', function (e){
    e.preventDefault();
    var message = $('#txtarea').val();
    if(message === ""){
        alert("sorry, you can not enter an empty todo");
    } else {
        var todo1 = todo(message);
        addTodo(todo1);
        displayTodo(todo1);
        $('#txtarea').val("");
    }       
});



