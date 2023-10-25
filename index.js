document.getElementById("Addbtn").addEventListener("click", function () {
  let task = document.getElementById("task").value;
  if (task.length == 0) {
    alert("Enter some task!");
  } else {
    document.getElementById("task").value = "";

    document.getElementById("Added-task").innerHTML += `<div class="Added-task">
        <p class="para1">${task}</p>
        <button type="button" class="Finish">
            <i class="bi bi-check2-circle"></i>
        </button>
        <button type="button" class="removebtn">
          <i class="bi bi-trash-fill fa-lg"></i>
        </button>
      </div>`;

    let currentTasks = document.querySelectorAll(".removebtn");
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].addEventListener("click", function () {
        this.parentNode.remove();
      });
    }

    let completedTasks = document.querySelectorAll(".Finish");
    for (let i = 0; i < completedTasks.length; i++) {
      console.log("finish");
      completedTasks[i].addEventListener("click", function () {
        this.parentElement.classList.add("finished");
        console.log(this.parentElement.classList);
      });
    }

    let allTask = document.querySelectorAll(".Added-task");

    document
      .getElementById("check-complete")
      .addEventListener("click", function () {
        for (let i = 0; i < allTask.length; i++) {
          if (!allTask[i].classList.contains("finished")) {
            allTask[i].classList.add("hide");
          }
        }
      });

    document.getElementById("check-all").addEventListener("click", function () {
      for (let i = 0; i < allTask.length; i++) {
        if (allTask[i].classList.contains("hide")) {
          allTask[i].classList.remove("hide");
        }
      }
    });
  }
});
