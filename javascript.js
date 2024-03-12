document.addEventListener("DOMContentLoaded", function () {
  const list_task = document.getElementById("list-task");
  const totalTaskElement = document.getElementById("totalTaskElement");
  const taskForm = document.getElementById("taskForm");
  const btnAddTask = document.getElementById("btnAddTask");
  const inputTaskname = document.getElementById("inputTaskname");
  const inputDescription = document.getElementById("inputDescription");
  const btnCancel = document.getElementById("btnCancel");
  const btnConfirmAddTask = document.getElementById("btnConfirmAddTask");
  const addForm = document.getElementById("addForm");

  btnAddTask.addEventListener("click", function () {
    taskForm.style.display = "block";
    addForm.style.display = "none";
  });

  btnCancel.addEventListener("click", function () {
    taskForm.style.display = "none";
    addForm.style.display = "block";
  });

  // Hàm render ra Task List
  function renderTaskList() {
    let tasksHTML = "";
    for (let i = 0; i < taskList.length; i++) {
      const task = taskList[i];
      tasksHTML += `
                <div class="flex items-start py-2 pb-6 border-b-2">
                    <input type="checkbox" class="mt-1 form-checkbox w-[16px] h-[16px]">
                    <div class="ms-3">
                        <label for="link-checkbox" class="text-base">${task.title}</label>
                        <p class="text-[#8f9eb4] mt-1">${task.description}</p>
                    </div>
                </div>
            `;
    }
    list_task.innerHTML = tasksHTML;
    updateTotalTasks();
  }

  function updateTotalTasks() {
    let totalTasks = taskList.length;
    totalTaskElement.innerHTML = `<i class="fa-solid fa-check me-2"></i> ${totalTasks} tasks`;
  }

  btnConfirmAddTask.addEventListener("click", function () {
    const taskName = inputTaskname.value;
    const description = inputDescription.value;

    if (taskName.trim() !== "" && description.trim() !== "") {
      const newTask = {
        title: taskName,
        description: description,
      };
      taskList.push(newTask);

      renderTaskList();

      inputTaskname.value = "";
      inputDescription.value = "";
    }
  });

  btnCancel.addEventListener("click", function () {
    inputTaskname.value = "";
    inputDescription.value = "";
  });

  renderTaskList();
});
