document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let formEl = document.querySelector("form") 
  
  formEl.addEventListener("submit", submitForm)
  
});

function submitForm(event) {
	event.preventDefault()
	// console.log("Submit???")
	let description = document.getElementById("new-task-description").value
	addTask(description)
	event.target.reset()
}

function addTask(description) {
	let ul = document.getElementById("tasks")

	let newLi = document.createElement("li")
	newLi.innerText = description

	ul.append(newLi)
}
