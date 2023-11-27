let taskList = document.querySelector(".tasklist");
let input = document.querySelector(".input");
let addBtn = document.querySelector(".btn");
addBtn.addEventListener("click", () => {
  if (input.value != "") {
    structure(input);
    input.value = "";
  } else {
    alert("Please enter some value");
  }
  setToLocal();
});

taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove();
  }
  setToLocal();
});

function structure(input) {
  let li = document.createElement("li");
  li.innerHTML = input.value;
  taskList.appendChild(li);

  let deleteMark = document.createElement("div");
  deleteMark.innerHTML = `<i class="fa-solid fa-square-xmark"></i>`;
  li.appendChild(deleteMark);
}

  //function to set the data in brower local data;
  function setToLocal(){
    localStorage.setItem("finalData" , taskList.innerHTML);
  }

    //function to get the data in brower local data;
    function getFromLocal(){
        taskList.innerHTML = localStorage.getItem("finalData");
    }
    getFromLocal();
