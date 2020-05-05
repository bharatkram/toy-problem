var tasks = []
var done = []

function display() {
    for (let i = 0; i < tasks.length; i++) {
        task = document.createElement("li")
        task.innerHTML = tasks[i]
        if (done[i]) {
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

function corrected(pos) {
    if (pos == done.length - 1) {
        done.pop()
        return
    }
    for (let i = pos; i < done.length - 1; i++) {
        done[i] = done[i + 1]
    }
    done.pop()
}

function addtask() {
    console.log("inside addtask")
    task = document.querySelector("#task").value
    if (task != "") {
        tasks.push(task)
        done.push(false)
    }
    clear(true)
    display()
}

function markdone() {
    console.log("inside markdone")
    tasknum = document.querySelector("#task").value
    tasknum = parseInt(tasknum) - 1
    if (tasknum < tasks.length) {
        done[tasknum] = true
    }
    clear(true)
    display()
}

function remtask() {
    console.log("inside remtask")
    tasknum = document.querySelector("#task").value
    tasknum = parseInt(tasknum) - 1
    if (1 <= tasknum && tasknum < tasks.length) {
        tasks.splice(tasknum, 1)
    }
    clear(true)
    corrected(tasknum)
    if (tasks.length > 0) {
        display()
    }
}