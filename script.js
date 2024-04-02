const TASKLIST = [];

document.addEventListener("DOMContentLoaded",function(){

  var addButton = document.getElementById("add-task-button");
  var addTaskInput = document.getElementById("add-task");
  var TaskDescInput = document.getElementById("task-description");
  var priorityOptions = document.querySelector(".priority-options");
  var taskContainer = document.getElementById("tasks-list");

  addButton.addEventListener("click",function(){
    var priority = priorityOptions.value;
    var taskName = addTaskInput.value;
    var description = TaskDescInput.value;

    if(task.value != ""){
      var taskElement = document.createElement("div");
      taskElement.classList.add("task-item");
      TASKLIST.push({addTask: taskName, priority: priority, description: description, taskId: TASKLIST.length +1});
      taskContainer.append(taskElement);
      // taskContainer.innerHTML = `<p>${taskName}</p>
      // <p>${description}</p>
      // <p>${priority}</p>`;
      addTaskInput.value = "";
      TaskDescInput.value = "";
      priorityOptions.value = "low";
    }else{
      alert("Please Enter the valid Inputs");
    }
  }
  
                             
});