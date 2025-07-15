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

TaskForm = document.getElementById("taskForm");


TasksList = [];

TaskForm.addEventListener("submit", function(event) {
   
    event.preventDefault();

    let nameInput = document.getElementById("name");
    let typeInput = document.getElementById("type");

    // console.log(nameInput)

    TasksList.push({
        name: nameInput.value,
        type: typeInput.value,
        createdAt: new Date()
    });

    nameInput.value = "";
    typeInput.value = TaskType[0].name;

    console.log(TasksList);

});


