const loadTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then((res) => res.json()).then((data) => displayTodo(data));
}

// {
// "userId": 3,
// "id": 49,
// "title": "ut necessitatibus aut maiores debitis officia blanditiis velit et",
// "completed": false
// },
const displayTodo = (todos) => {
    // 1
    const todoContainer = document.getElementById("to-do-container");
    todoContainer.innerHTML = "";

    todos.forEach(todo => {
        
        const todoCard = document.createElement("div");
        todoCard.innerHTML = `
        <div class="todo-card">
         <p>${todo.completed== true? `<i class="fa-solid fa-square-check"></i> `:  `<i class="fa-regular fa-square-check"></i>`} </p>
        <h4>${todo.title}</h4>
        </div>
        `
        todoContainer.append(todoCard)

    });
}
loadTodo();
console.log("connected")