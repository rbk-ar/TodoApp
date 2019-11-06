function displayTodo(todo){
    var todoContainer= $('<div class= "todoContainer"></div>');
    var todoMessage= $(`<li class="todoMsg"> ${todo.message} </li>`);
    var completed= $(`<div id= "chbx-${todo.id}" class="completed"> <button class= "dlt"  onClick="checkTodo(${todo.id})"> <img src="images/task-complete.png"> </button></div>`);

    if(todo.completed){
        completed = $(`<div id= "chbx-${todo.id}" class="completed"><button class= "dlt"  onClick="checkTodo(${todo.id})"><img src="images/green.png"></button></div>`);
    }
    // var deleteTodo = $(`<button onClick="deleteTodo_(${todo.id})">delete</button>`);
    var deleteTodo = $(`<button class="dlt turnRed" onClick="deleteTodo_(${todo.id})"> <img id= "redImg" src="images/garbage.png"> </button> `);
    todoContainer.append(todoMessage);
    todoContainer.append(deleteTodo);
    todoContainer.append(completed);
    $('#todos').append(todoContainer);

    $('.turnRed').mouseenter(function() {
        $(this).children().attr('src', 'images/red.png')
    })
    .mouseleave(function() {
        $(this).children().attr('src', 'images/garbage.png')
    });

    $('.completed').mouseenter(function() {
            $(this).children().children().attr('src', 'images/green.png')
    })
    .mouseleave(function() {
        $(this).children().children().attr('src', 'images/task-complete.png')
    });
}

function checkTodo(id){
    $(`#chbx-`+id).html('');
    $(`#chbx-`+id).append(`<img src="images/green.png">`);
    toggleCheck(id);
}

function renderTodos(completed){
    $('#todos').html('');
    if(completed !== undefined){
        for(var i = 0; i < todolist.length; i++) {
            if(todolist[i].completed === true && !todolist[i].deleted ){
                displayTodo(todolist[i])
            }
        }
    } else {
      for(var i = 0; i < todolist.length; i++){
            if(!todolist[i].deleted){
                displayTodo(todolist[i]);
            }
        } 
    }
}

$('#todos-filter-completed').on('click', function(event){
    if (event.target.checked) {
        renderTodos(event.target.checked);
    }
     else { 
        renderTodos();
    }
});

$('#todos-filter-message').on('keyup', function(){
    var msg = $('#todos-filter-message').val()
    byMessage(msg);
});

function byMessage(message){
    $('#todos').html('');
   var display = todolist.filter(function(element) {
        return element.message.includes(message);
    });
   for (var i = 0; i < display.length; i++){
        displayTodo(display[i]);
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

$('#todos-filter-data').on('change', function(event){
    $('#todos').html('')
    var date = new Date(event.target.value).getDate()
     var month = new Date(event.target.value).getMonth()
      var year = new Date(event.target.value).getYear()
      var minutes = new Date(event.target.value).getMinutes()
      for (var i = 0; i < todolist.length; i++) {
           var something = todolist[i].createdAt;
           if(new Date (something).getDate()=== date && new Date (something).getMonth() === month && new Date (something).getYear() === year){
            displayTodo(todolist[i])
           }
      }         
         }); 