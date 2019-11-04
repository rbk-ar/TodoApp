$('.btn').on('click', function (){
    var message = $('#txtarea').val();
    if(message === ""){
        alert("sorry, you can not enter empty todo")
    } else {
        var todo1 = todo(todolist.length, message)
        todolist.push(todo1)
        console.log(todolist)
        $('#todos').append(`<div> ${message} <input type= "checkbox" ></div>`);
        $('#txtarea').val("");
    }       
});