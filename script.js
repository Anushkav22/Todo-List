const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(text) {
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <input type="checkbox" class="checkbox">
    <span>${text}</span>
    <button class="delete-button">Delete</button>
  `;

  const deleteButton = taskItem.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskList.appendChild(taskItem);
}
