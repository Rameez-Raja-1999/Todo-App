const inputBox= document.querySelector("#input-box");
const listContainer= document.querySelector("#list-container");

function addTask(){
    if(inputBox.value===""){
        alert("you must have to write something");
    }else{
        const li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        }

    inputBox.value="";
}

listContainer.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("unhecked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

    }

}, false)