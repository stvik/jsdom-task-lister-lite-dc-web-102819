document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let formEl = document.querySelector("form") 
  
  formEl.addEventListener("submit", submitForm)
});

function submitForm(event) {
	event.preventDefault()
	// console.log("Submit???")
	let description = document.getElementById("new-task-description").value
	let priority = document.getElementById("priority").value
	addTask(description, priority)
	
	event.target.reset()
}

let i = 0
function addTask(description, priority) {
	let ul = document.getElementById("tasks")

	let newLi = document.createElement("li")
	newLi.innerHTML = `<div>${description}</div>`
	i++
	newLi.setAttribute("id", `${description}-${i}-task`)
	newLi.setAttribute("class", "li-element")
	newLi.style.color = priority

	arrayLi = document.getElementsByClassName("li-element")
	

	ul.append(newLi)
	let makeButton = document.createElement("BUTTON");
	makeButton.innerHTML = "x";
	makeButton.setAttribute("id", `${description}-${i}`)
	newLi.append(makeButton)
	makeButton.addEventListener("click", deleteTask)
	let buttonEdit = document.createElement("BUTTON");
	buttonEdit.innerHTML = "edit";
	buttonEdit.dataset.id = `${description}-${i}`
	newLi.append(buttonEdit);
	buttonEdit.addEventListener("click", editTask);
}

function deleteTask(task) {

 taskId = task.target.id
 let deleteEl = document.getElementById(`${taskId}-task`)
 deleteEl.remove();
}

function editTask(task){
	console.log("wafeefafef")
	let submitButton = document.getElementById("submit")
	submitButton.setAttribute("value", "Edit Task")
	// document.querySelector(`${task.target.parentElement}`)
	// debugger
	let parent = document.getElementById(`${task.target.parentElement.id}`)
	let input = document.getElementById("new-task-description");
	// debugger
	input.value = parent.children[0].innerHTML
	submitButton.addEventListener("click", editForm)  
}

function editForm(event) {
	event.preventDefault()
	// console.log("Submit???")
	let description = document.getElementById("new-task-description").value
	let priority = document.getElementById("priority").value
	addTask(description, priority)
	debugger
	taskId = event.target.id
	let deleteEl = document.getElementById(`${taskId}-task`)
	deleteEl.remove();
	
	event.target.reset()
}

