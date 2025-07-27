// Adding the task types to the select element
TaskType = [
    {
        name: "TasK",
        class: "gray",
    },
     {
        name: "In Progress",
        class: "blue",
    },
     {
        name: "Done",
        class: "green",
    }
]

function getTaskClass(TaskName) {
    for (let i = 0; i < TaskType.length; i++) {
        if (TaskType[i].name === TaskName) {
            return TaskType[i].class;
        }
    }
    return false;
}

function datetoString(date) { 
    date = new Date(date);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}


let TypeSelector = document.getElementById("type")

for (let i = 0; i < TaskType.length; i++) {
    let option = document.createElement("option");
    option.value = TaskType[i].name;
    option.textContent = TaskType[i].name;
    TypeSelector.appendChild(option);
}

TaskForm = document.getElementById("taskForm");
TasksListElemnt =  document.querySelector('#tasksList');


// --------- Start The app  ---------

TasksList = [];

TaskForm.addEventListener("submit", function(event) {
   
    event.preventDefault();

    let nameInput = document.getElementById("name");
    let typeInput = document.getElementById("type");

    // console.log(nameInput)
 
    newTask = {
        name: nameInput.value,
        type: typeInput.value,
        createdAt: new Date()
    }

    TasksList.push(newTask);

    nameInput.value = "";
    typeInput.value = TaskType[0].name;
    index = TasksList.length - 1;
    taskLi = `<li class="${getTaskClass(newTask.type)}">
    <span>${newTask.name}</span>
    <span>${datetoString(newTask.createdAt)}</span>
    <button id="delete${index}" class="delete" for="${index}">Delete</button>
    </li>`

    TasksListElemnt.innerHTML += taskLi;

    console.log(TasksList);
});


