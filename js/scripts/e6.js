/* 
const myArray = [10, 20, 30];
console.log(myArray);

// get data 
console.log(myArray[0]);

// change data
myArray[0] = 99;
console.log(myArray)

// some method
let arr = [1, 'hello', {name: 'sulav'}, [1,2]];
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(arr.length);
arr.push(100);
arr.splice(0, 1);

*/

const todoList = [
  { name: "make dinner", dueDate: "2022-12-22" },
  { name: "wasj dishes", dueDate: "2022-12-25" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>

        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="del-btn">Delete</button>
        `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

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
