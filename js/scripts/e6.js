
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

const todoList = [];


renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    for (let i=0; i<todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
    const inputElement = document.querySelector('.input-name');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';
    renderTodoList();
}


