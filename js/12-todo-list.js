const todoList = [];

function renderTodoList() {
    let todoListHtml = '';

    todoList.forEach(function (todoObject, index) {
        const {name, dueDate} = todoObject; //destructuring
        todoListHtml += `<div>${name}</div>
                            <div>${dueDate}</div>
                            <button class="delete-todo-button js-delete-todo-button">Delete</button>`; //On cree un accumulateur
    });
    

    document.querySelector(".js-todo-list").innerHTML = todoListHtml; //On affecte l'accumulateur au contenu de l'element html


    
document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', ()=>{
        todoList.splice(index, 1);
        renderTodoList();
    });
});
  
    
}


function addTodo() {
    const inputElement = document.querySelector(".js-name-input") ;
    const dateInputElement = document.querySelector(".js-due-date-input");
    
    const name =  inputElement.value;
    const dueDate = dateInputElement.value ;
    inputElement.value = '';
    dateInputElement.value = '';
    
    if (name && dueDate) {
        todoList.push({
            name,
            dueDate
        });
    }
    renderTodoList();
}



