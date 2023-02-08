let newTodo = document.getElementById('all-todos-entries-container');
let mainContent = document.getElementById('main');

let createTodoButton = document.getElementById("create-todo-button");
let deleteTodoButton = document.getElementsByClassName('delete-todo-component');

let generatedStorageKeys = []

console.log(generatedStorageKeys);

let isLocalStorageEmpty = localStorage.getItem.length === 0 || localStorage.getItem.length < 0

console.log(isLocalStorageEmpty);

loadTodosEntries()

createTodoButton.addEventListener("click", () => {
    let titleInputValue = document.getElementById("todo-title").value;
    let todoDescriptionValue = document.getElementById("todo-description").value;
    
    let x = createTodoEntry(titleInputValue, todoDescriptionValue);
    
    // console.log(localStorage.getItem(`${x}`));
    
    
    titleInputValue = "";
    todoDescriptionValue = "";
       
    })

  
    
    deleteTodoButton.addEventListener("click", () => {
        alert("Clicked")

        

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
    // enteredTodoContainer.setAttribute("onclick", `() => { deleteTodoComponent(${generatedRandomId}) }`)
    enteredTodoContainer.setAttribute("onclick", `deleteTodoComponent(${generatedRandomId})`)

    newTodo.appendChild(enteredTodoContainer);

    let storedTodos = JSON.parse(localStorage.getItem("todos")) || []

    let newTodoToStorage = { "id": `${generatedRandomId}`, "title": `${title}`, "description": `${description}` }

    storedTodos.push(newTodoToStorage )

    localStorage.setItem( "todos", JSON.stringify( storedTodos ) );

    return generatedRandomId;

}


function loadTodosEntries() {
    

    if(isLocalStorageEmpty) {
        // let defaultMessageWhenTodosIsEmptyContainer = document.createElement('div')
        // let topLineElement = document.createElement('hr')
        // let bottomLineElement = document.createElement('hr')
        // let noTasksElement = document.createElement('h3')
        // let noTodos = noTasksElement.innerHTML = "No tasks"
    
        // defaultMessageWhenTodosIsEmptyContainer.appendChild(topLineElement)
        // defaultMessageWhenTodosIsEmptyContainer.appendChild(noTasksElement)
        // defaultMessageWhenTodosIsEmptyContainer.appendChild(bottomLineElement)
    
    
        // defaultMessageWhenTodosIsEmptyContainer.classList.add('default-message-when-todos-is-empty-container')
    
    
        // mainContent.appendChild(defaultMessageWhenTodosIsEmptyContainer)




        //  let defaultMessageWhenTodosIsEmptyContainer = document.createElement('div')

        //  let html = `
        //     <div class="default-message-when-todos-is-empty-container" , id="default-message-when-todos-is-empty-container">
        //         <hr>
        //         <h3>No tasks</h3>
        //         <hr>
        //     </div>
        //  `

        //  defaultMessageWhenTodosIsEmptyContainer.innerHTML = html


        mainContent.getElementById("#default-message-when-todos-is-empty-container").display = "block"

    } else {

        for(let i = 0; i < generatedStorageKeys.length; i++) { 

            let keyName = localStorage.key(generatedStorageKeys[i]);

            let value = JSON.parse(localStorage.getItem(keyName));

            createTodoEntry(value.title, value.description)
        }
    }
}




function deleteTodoComponent(todoId) {

    const element = document.getElementById(`${todoId.id}`)

    element.remove()

    let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    let foundTodo = storedTodos.find(todo => todo.id === todoId.id);

    storedTodos = storedTodos.filter(todo => todo.id !== foundTodo.id);

    localStorage.setItem("todos", JSON.stringify(storedTodos));
}



function generateRandomId() {
    return Math.random().toString(36).substring(2);
}


