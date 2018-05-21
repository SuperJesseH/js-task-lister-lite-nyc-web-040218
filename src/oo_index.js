const form = document.getElementById('create-task-form');
const tasks = document.getElementById('tasks');

document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();

  // figure out this arrow function at some point

  form.addEventListener('submit', (e) => {
    // prevent page load (default behavior)
    e.preventDefault();
    // run addTask()
    addTask();
    // set textbox to blank after addTask
    form.children[1].value = ""
  });

  tasks.addEventListener("click", (e) => {
    console.log(e.path);
    tasks.removeChild(e.path[1])

  })

  function addTask() {
    // create an element
    // innner html should be input from form
    // pre/append child with that input
    let value = form.children[1].value
    let button = document.createElement('BUTTON')
    let newElement = document.createElement('li');
    button.innerHTML = "X"
    newElement.innerHTML = value;
    newElement.append(button)
    tasks.append(newElement);
  }



});
