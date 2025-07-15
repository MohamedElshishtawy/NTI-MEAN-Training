TaskType = [
    {
        name: "TasK",
        color: "gray",
    },
     {
        name: "In Progress",
        color: "blue",
    },
     {
        name: "Done",
        color: "green",
    }
]
let TypeSelector = document.getElementById("type")
for (let i = 0; i < TaskType.length; i++) {
    let option = document.createElement("option");
    option.value = TaskType[i].name;
    option.textContent = TaskType[i].name;
    TypeSelector.appendChild(option);
}
