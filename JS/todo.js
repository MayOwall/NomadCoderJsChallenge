const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const TODOLIST_KEY = 'todo-list';

//첫 로딩때 todo 만들기
function todoPainter() {
    const array = JSON.parse(localStorage.getItem(TODOLIST_KEY));
    for(let i = 0; i < array.length; i++) {
        todoAdder(array[i]);
    };
};
if(localStorage.getItem(TODOLIST_KEY) !== null) {
    todoPainter();
};

//화면상 todo 더하기
function todoAdder(todo) {
    const button = document.createElement("button");
    button.innerText = '✔️';
    button.addEventListener("click", todoDeleter);
    button.addEventListener("click", todoLocalDeleter);

    const newTodo = document.createElement("span");
    newTodo.innerText = todo;

    const li = document.createElement("li");
    li.appendChild(button);
    li.appendChild(newTodo);

    todoList.appendChild(li);
};

//화면상 todo 지우기
function todoDeleter(event) {
    event.target.parentElement.remove();
};

//localStorage에 todo 더하기
function todoLocalAdder(todo) {
    if(localStorage.getItem(TODOLIST_KEY) === null) {
        const array = [todo];
        localStorage.setItem(TODOLIST_KEY, JSON.stringify(array));
    } else {
        const array = JSON.parse(localStorage.getItem(TODOLIST_KEY));
        array.push(todo);
        localStorage.setItem(TODOLIST_KEY, JSON.stringify(array));
    };
};

//localStorage에 todo 지우기
function todoLocalDeleter(event) {
    const array = JSON.parse(localStorage.getItem(TODOLIST_KEY));
    const todo = event.target.nextSibling.innerText;
    const newArray = array.filter(element => element !== todo);
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(newArray));
};

//todoForm 핸들러
function todoListHandler(event) {
    event.preventDefault();
    const todoInput = todoForm.querySelector("input:first-of-type");
    todoAdder(todoInput.value);
    todoLocalAdder(todoInput.value);
    todoInput.value = '';
}
todoForm.addEventListener("submit", todoListHandler);
