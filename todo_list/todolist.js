var tasks = []
var done = []

function display() {
    
}

function clear(tasks) {
    const todo = document.getElementById("todo")
    todo.innerHTML = ""

    if (tasks) {
        const heading1 = document.createElement("h2")
        heading1.innerHTML = "Tasks to be completed:"
        todo.appendChild(heading1)
    }
}

function addtask() {
    console.log("inside addtask")
    task = document.querySelector("#task").value
    if (task != "") {
        tasks.push(task)
    }
    clear(true)
}

function markdone() {
    console.log("inside markdone")
    tasknum = document.querySelector("#task").value
    tasknum = parseInt(tasknum)
    if (tasknum < tasks.length) {
        done.push(tasknum)
    }
    clear(true)
}

function remtask() {
    console.log("inside remtask")
    tasknum = document.querySelector("#task").value
    tasknum = parseInt(tasknum)
    if (tasknum < tasks.length) {
        tasks.splice(tasknum - 1)
    }
    clear(true)
}