let list = document.getElementById("todoList");
let add_btn = document.getElementById("addBtn");
let input = document.getElementById("todoInput");




input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        add_btn.click();
    }
});
// added the Enter key feature

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
    checkbox.addEventListener("click",function(){
        const span = this.parentElement.children[1];
        if(checkbox.checked){
            span.classList.add("completed");
        }
        else{
            span.classList.remove("completed")
        }
    })
    div.appendChild(checkbox);

     const span = document.createElement("span");
    const content = input.value;
    span.textContent = content;
    div.appendChild(span);

    const delete_btn = document.createElement("button");
    delete_btn.addEventListener("click",function(){
        // console.log(this);
        // getting the li

        let parent = this.parentElement;
        parent.remove();
    })
    delete_btn.classList.add("delete-btn");
    delete_btn.textContent = "Delete";
    li.appendChild(delete_btn);

    list.appendChild(li);

    // lets vaccant the input.
    input.value = "";
});

// when we createElement then it get added to ram (js memory) , browser -> nothing
// when we do append child then it get added to html --> dom
// good practice add eventlistner before append 
