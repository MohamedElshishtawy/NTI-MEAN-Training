TaskType = {
    TASK: {
        name: "TasK",
        color: "gray",
    },
    IN_PROGRESS: {
        name: "In Progress",
        color: "blue",
    },
    DONE: {
        name: "Done",
        color: "green",
    }
}
let TypeSelector = document.getElementById("type")
for (let i = 0; i < TaskType.length; i++) {
    let option = document.createElement("option");
    option.value = TaskType[i].name;
    option.textContent = TaskType[i].name;
    option.style.color = TaskType[i].color;
    TypeSelector.appendChild(option);
}
