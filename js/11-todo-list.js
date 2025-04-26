const todoList = [];

function renderTodoList() {
    let todoListHtml = '';
    
    for (let i=0; i < todoList.length ; i++) {
        todoListHtml += `<div>${todoList[i].name}</div>
                            <div>${todoList[i].dueDate}</div>
                            <button onclick="todoList.splice(${i}, 1);
        renderTodoList();" class="delete-todo-button">Delete</button>`; //On cree un accumulateur
    }

    document.querySelector(".js-todo-list").innerHTML = todoListHtml; //On affecte l'accumulateur au contenu de l'element html
  
    
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



