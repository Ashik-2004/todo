const todoInput = document.getElementById('todo-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

function createTask() {
    const taskValue = todoInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.className = 'task-item';

    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.innerText = taskValue;

    taskSpan.addEventListener('click', function () {
        taskSpan.classList.toggle('completed');
    });

    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group-custom';

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm btn-outline-secondary';
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', function () {
        const newText = prompt("Edit your task:", taskSpan.innerText);
        if (newText !== null && newText.trim() !== "") {
            taskSpan.innerText = newText;
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-outline-danger';
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(taskSpan);
    li.appendChild(btnGroup);
    todoList.appendChild(li);

    todoInput.value = "";
    todoInput.focus();
}

addTaskBtn.addEventListener('click', createTask);

todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        createTask();
    }
});
