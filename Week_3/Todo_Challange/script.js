let newTodo = document.getElementById('all-todos-entries-container');
let mainContent = document.getElementById('main');

let createTodoButton = document.getElementById("create-todo-button");
let deleteTodoButton = document.getElementsByClassName('delete-todo-component')[0];

let generatedStorageKeys = []



createTodoButton.addEventListener("click", () => {
    let titleInputValue = document.getElementById("todo-title").value;
    let todoDescriptionValue = document.getElementById("todo-description").value;
    
    let x = createTodoEntry(titleInputValue, todoDescriptionValue);
    
    // console.log(localStorage.getItem(`${x}`));
    
    
    titleInputValue = "";
    todoDescriptionValue = "";
       
    })
    
    deleteTodoButton.addEventListener("click", () => {
        alert("cli")



    })




function createTodoEntry(title, description) { 

    
    
    let generatedRandomId = generateRandomId()



    let enteredTodoContainer = document.createElement('div');
    let enteredTodoContent = document.createElement('div');
    let enteredTodoTileAndTextContainer = document.createElement('div');
    let enteredTodoTitleContent = document.createElement('div');

    let enteredTodoDescriptionContent = document.createElement('div');

    let deleteTodoComponent = document.createElement('div');


    enteredTodoContainer.classList.add('entered-todo-container');
    enteredTodoContent.classList.add('entered-todo-content');
    enteredTodoTileAndTextContainer.classList.add('entered-todo-tile-and-text-container');
    enteredTodoTitleContent.classList.add('entered-todo-title-content');
    enteredTodoDescriptionContent.classList.add('entered-todo-description-content');
    deleteTodoComponent.classList.add('delete-todo-component');





    let todoTitleElement = document.createElement('p');
    let todoDescriptionElement = document.createElement('p');

    let deleteButtonElement = document.createElement('button')
    let materialIconsElement = document.createElement('i');

    todoDescriptionElement.classList.add('todo-description');
    todoDescriptionElement.classList.add('todo-description');
    materialIconsElement.classList.add('material-icons');





    let todoTitle = todoTitleElement.innerHTML = title;

    let todoDescription =  todoDescriptionElement.innerHTML = description;

    let materialIcons = materialIconsElement.innerText = "close";




    enteredTodoContainer.appendChild(enteredTodoContent);
    enteredTodoContainer.appendChild(deleteTodoComponent);

    enteredTodoContent.appendChild(enteredTodoTileAndTextContainer);
    enteredTodoContent.appendChild(enteredTodoDescriptionContent);

    enteredTodoTileAndTextContainer.appendChild(enteredTodoTitleContent);
    enteredTodoTileAndTextContainer.appendChild(enteredTodoDescriptionContent);

    enteredTodoTitleContent.appendChild(todoTitleElement);
    enteredTodoDescriptionContent.appendChild(todoDescriptionElement);
    deleteTodoComponent.appendChild(deleteButtonElement)
    deleteButtonElement.appendChild(materialIconsElement)

    enteredTodoContainer.setAttribute("id", generatedRandomId);

    newTodo.appendChild(enteredTodoContainer);

    localStorage.setItem(`${generatedRandomId}`, JSON.stringify( { "title": `${title}`, "description": `${description}` }));

    generatedStorageKeys.push[generatedRandomId]

    
    return generatedRandomId;

}



function loadTodosEntries() {
    if(localStorage.length === 0) {
        let defaultMessageWhenTodosIsEmptyContainer = document.createElement('div')
        let topLineElement = document.createElement('hr')
        let bottomLineElement = document.createElement('hr')
        let noTasksElement = document.createElement('h3')
        let noTodos = noTasksElement.innerHTML = "No tasks"
    
        defaultMessageWhenTodosIsEmptyContainer.appendChild(topLineElement)
        defaultMessageWhenTodosIsEmptyContainer.appendChild(noTasksElement)
        defaultMessageWhenTodosIsEmptyContainer.appendChild(bottomLineElement)
    
    
        defaultMessageWhenTodosIsEmptyContainer.classList.add('default-message-when-todos-is-empty-container')
    
    
        mainContent.appendChild(defaultMessageWhenTodosIsEmptyContainer)

    } else {

        for(let i = 0; generatedStorageKeys.length; i++) { 

            let key = localStorage.key(generatedStorageKeys[i])

            let value = JSON.parse(localStorage.getItem(key))

            console.log(value);
        
            createTodoEntry(value.title, value.description)

        }
    }
}

loadTodosEntries()



function deleteTodoComponent(todoId) {

    

}


function generateRandomId() {
    return Math.random().toString(36).substring(2);
}


