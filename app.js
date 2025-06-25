function add_task () {
    let userTask = document.getElementById("user-task").value;

    while (userTask === "") {
        alert("Please enter a task.");
        return;
    }

    let task = document.createElement("li");
    task.className = "task-element";
    task.textContent = userTask;
    task.style.listStyleType = "none";
    document.getElementById("tasks-list").appendChild(task);

    let check_button = document.createElement("button");
    check_button.className = "check-button";
    check_button.textContent = "Check Task";
    check_button.onclick = function() {
        task.style.textDecoration = "line-through";
        task.style.color = "green";
        check_button.disabled = true;
    }
    task.appendChild(check_button);

    let delete_button = document.createElement("button");
    delete_button.className = "delete-button";
    delete_button.textContent = "Delete Task";
    delete_button.onclick = function() {
        task.remove();
        delete_button.disabled = true;
    }
    task.appendChild(delete_button);
}
