var title = document.getElementById("title")
var task = document.getElementById("task")
var submit = document.getElementById("submit")
var taskList = document.getElementById("taskList")
submit.addEventListener("click", addNewTask);
var allTasks = []

function addNewTask(e) {
    e.preventDefault()
    console.log("click")
    var newTitle = title.value
    var newTask = task.value
    console.log(newTitle, newTask)
    var toDo = {
        title: newTitle,
        task: newTask,
        completed: false
    }

    allTasks.push(toDo)
    console.log(allTasks)
    populateTaskList()
}
function populateTaskList() {
    taskList.innerHTML = ""
    for (let x = 0; x < allTasks.length; x++) {
        console.log(x)
        var item = allTasks[x]
        console.log(item)
        var li = document.createElement("li")
        if(item.completed){
            li.style.color="green"
        }
        li.textContent = item.title + ": " + item.task
        var button = document.createElement("button")
        button.addEventListener("click", function () {
            console.log(x)
            allTasks[x].completed = true
            populateTaskList()
        })
        button.textContent = "done"
        var deletebutton = document.createElement("button")
        deletebutton.addEventListener("click", function () {
            allTasks.splice(x, 1)
            populateTaskList()
        })
        deletebutton.textContent = "x"
        li.append(button)
        li.append(deletebutton)
        taskList.append(li)
    }
}