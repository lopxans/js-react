const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function(todoObject, index) {

      const { name, dueDate } = todoObject;
      const html = `
          <div>${name}</div>
          <div>${dueDate}</div>
    
          <button class="del-btn js-delete-btn">Delete</button>
          `;
      todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-btn')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', ()=>{
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-btn').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".input-name");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date");
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate,
  });

  inputElement.value = "";
  renderTodoList();
}

function handleCostKeydown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
