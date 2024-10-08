// initialize an empty array 

// splice() takes two valeus the first one is the index of element we want to remove
// the second value is determines how many values we want to remove

const todoList = [];

renderToDoList();

function renderToDoList(){
    let todoListHTML = '';

    for(let i = 0;i<todoList.length;i++){
        const todoObject = todoList[i];
        // const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        // it is same as the codes above
        const {name,dueDate} = todoObject;
        const html =`
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick = "
                todoList.splice(${i},1);
                renderToDoList();
            " class = "delete-todo-button" >Delete</button>


            
        `;
        todoListHTML+=html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');

    const name = inputElement.value;
    const dueDate = dateInputElement.value;

    if(name === ''){
        alert('You should enter a todo name');
    }else {
        //todoList.push({name : name , dueDate : dueDate});
        // it does the same thing the code above  
        todoList.push({name , dueDate});
        console.log(todoList);

        console.log(name);

        inputElement.value = '';

        renderToDoList();
    }
}
