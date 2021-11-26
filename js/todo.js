const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function doneToDo(event) {
    const li = event.target.parentElement;
    li.classList.toggle("done"); 

    if (li.classList.contains("done")) {
        toDos.forEach(function(e) {
            if (e.id == parseInt(li.id)) {
                e.done = true;
            }
        });
    } else {
        toDos.forEach(function(e) {
            if (e.id == parseInt(li.id)) {
                e.done = false;
            }
        });
    }

    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    
    const input = document.createElement("input");
    input.type = "checkbox"
    input.title = "done"
    if (newTodo.done == true) {
        li.classList.add("done");
        input.checked = true;
    }  

    const label = document.createElement("label");
    label.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "✕";
    button.title= "delete this task";

    button.addEventListener("click", deleteToDo);
    input.addEventListener("click", doneToDo);
      
    toDoList.appendChild(li);
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(button);  
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value= "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        done: false,
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

