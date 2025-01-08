const input = document.querySelector("#input_box");

const List = document.querySelector(".list");

const start = document.querySelector(".Start_List");

function OnStart() {
  if (List.childElementCount > 0) {
    start.style.display = "none";
  }
}

function handleTask() {
  if (input.value == "") {
    return alert("Add some task");
  }
  const li = document.createElement("li");
  li.innerHTML = `${input.value}<span onClick="handleDelete(this)">X</span>`;
  List.appendChild(li);
  input.value = "";

  if (List.childElementCount > 0) {
    start.style.display = "none";
  }
  saveData();
}

function handleDelete(span) {
  const li = span.parentElement;
  List.removeChild(li);

  if (List.childElementCount == 0) {
    start.style.display = "block";
  }
  saveData();
}

function saveData() {
  localStorage.setItem("data", List.innerHTML);
}

function showItems() {
  List.innerHTML = localStorage.getItem("data");
}

showItems();
