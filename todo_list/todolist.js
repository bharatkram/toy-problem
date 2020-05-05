var tasks = []
var done = []

function display() {
    for (let i = 0; i < tasks.length; i++) {
        task = document.createElement("li")
        task.innerHTML = tasks[i]
        if (done.includes(i)) {
            console.log("color")
            task.style.color = "green"
        }
        document.querySelector("#list").appendChild(task)
    }
}

function clear(tasks) {
    const todo = document.getElementById("todo")
    todo.innerHTML = ""
    document.getElementById("task").value = "";

    if (tasks) {
        const heading1 = document.createElement("h2")
        heading1.innerHTML = "Tasks to be completed:"
        todo.appendChild(heading1)
        document.querySelector("#list").innerHTML = ""
    }
}

function addtask() {
    console.log("inside addtask")
    task = document.querySelector("#task").value
    if (task != "") {
        tasks.push(task)
    }
    clear(true)
    display()
}

function markdone() {
    console.log("inside markdone")
    tasknum = document.querySelector("#task").value
    tasknum = parseInt(tasknum)
    if (tasknum < tasks.length) {
        done.push(tasknum)
    }
    clear(true)
    display()
}

function remtask() {
    console.log("inside remtask")
    tasknum = document.querySelector("#task").value
    tasknum = parseInt(tasknum)
    if (tasknum < tasks.length) {
        tasks.splice(tasknum - 1)
    }
    clear(true)
    if (tasks.length > 1) {
        display()
    }
}