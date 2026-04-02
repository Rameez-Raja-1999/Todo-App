const inputBox= document.querySelector("#input-box");
const listContainer= document.querySelector("#list-container");

function addTask(){
    if(inputBox.value===""){
        alert("you must have to write something");
    }else{
        const li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
    }

    inputBox.value="";
}