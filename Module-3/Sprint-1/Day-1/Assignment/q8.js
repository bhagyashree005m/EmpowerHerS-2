// Fetch todos from API and store first 20 in Local Storage
async function fetchTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    const first20 = todos.slice(0, 20);
    localStorage.setItem("todos", JSON.stringify(first20));
    renderTodos();
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

// Retrieve todos from Local Storage
function getTodos() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

// Render todos on UI
function renderTodos() {
  const container = document.getElementById("todo-container");
  const emptyMessage = document.getElementById("empty-message");
  container.innerHTML = "";

  const todos = getTodos();

  if (todos.length === 0) {
    emptyMessage.style.display = "block";
    return;
  } else {
    emptyMessage.style.display = "none";
  }

  todos.forEach((todo, index) => {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";

    const title = document.createElement("span");
    title.textContent = todo.title;
    if (todo.completed) title.classList.add("completed");

    // Toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = todo.completed ? "Undo" : "Complete";
    toggleBtn.className = "toggle-btn";
    toggleBtn.onclick = () => toggleTodo(index);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteTodo(index);

    todoDiv.appendChild(title);
    todoDiv.appendChild(toggleBtn);
    todoDiv.appendChild(deleteBtn);

    container.appendChild(todoDiv);
  });
}

// Delete a todo
function deleteTodo(index) {
  const todos = getTodos();
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// Toggle completed status
function toggleTodo(index) {
  const todos = getTodos();
  todos[index].completed = !todos[index].completed;
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// Initialize app
if (!localStorage.getItem("todos")) {
  fetchTodos();
} else {
  renderTodos();
}
