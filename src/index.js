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
	newLi.innerText = description
	i++
	newLi.setAttribute("id", `${description}-${i}-task`)
	newLi.style.color = priority

	ul.append(newLi)
	let makeButton = document.createElement("BUTTON");
	makeButton.innerHTML = "x";
	makeButton.setAttribute("id", `${description}-${i}`)
	newLi.appendChild(makeButton)
	makeButton.addEventListener("click", deleteTask)
}

function deleteTask(task) {

 taskId = task.target.id
 let deleteEl = document.getElementById(`${taskId}-task`)
 deleteEl.remove();
}

