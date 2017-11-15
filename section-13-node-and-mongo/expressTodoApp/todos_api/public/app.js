$(document).ready(function() {
  $.getJSON('/api/todos').then(addTodos);
  $('#todoInput').keypress(function(event) {
    if (event.which == 13) {
      createTodo();
    }
  });
});

function addTodos(todos) {
  todos.forEach(function(todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  var newTodo = $('<li class="task">' + todo.name + '</li>');
  if (todo.completed) {
    newTodo.addClass('done');
  }
  $('.list').append(newTodo);
}

function createTodo() {
  var userInput = $('#todoInput').val();
  $.post('/api/todos', { name: userInput })
    .then(function(newTodo) {
      $('#todoInput').val('');
      addTodo(newTodo);
    })
    .catch(function(err) {
      console.log(err);
    });
}
