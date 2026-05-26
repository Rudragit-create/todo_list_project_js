let list = document.getElementById("todoList");
let add_btn = document.getElementById("addBtn");
let input = document.getElementById("todoInput");




add_btn.addEventListener("click",function(){
    //prevent empty add:
    if(input.value === "") return;
    // when the button is clicked new task is added to the list
    const li = document.createElement("li");
    li.classList.add("todo-item");

    const div = document.createElement("div");
    li.appendChild(div);
    div.classList.add("task")

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    div.appendChild(checkbox);

    const span = document.createElement("span");
    const content = input.value;
    span.textContent = content;
    div.appendChild(span);

    const delete_btn = document.createElement("button");
    delete_btn.classList.add("delete-btn");
    delete_btn.textContent = "Delete";
    li.appendChild(delete_btn);

    list.appendChild(li);

    // lets vaccant the input.
    input.value = "";
});

