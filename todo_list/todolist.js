function clear(tasks, done) {
    const todo = document.getElementById("todo")
    todo.innerHTML = ""

    if (tasks) {
        const heading1 = document.createElement("h2")
        heading1.innerHTML = "Tasks to be completed:"
        todo.appendChild(heading1)
    }

    // if (done) {
    //     const heading2 = document.createElement("h2")
    //     heading2.innerHTML = "Tasks completed:"
    //     const comp = document.getElementById("done")
    //     comp.innerHTML = ""
    //     comp.appendChild(heading2)
    // }
}

document.addEventListener('DOMContentLoader', () => {
    var tasks = []
    var done = []
    document.querySelector('#add').onclick = function() {

    }
})