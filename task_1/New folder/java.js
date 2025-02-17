const inputbox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container")
 
function addtask(){
    if(inputbox.value.trim() === ''){
        alert("you must write somethig");
  }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

        
    }
    inputbox.value='';
    saveData();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); 
    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}