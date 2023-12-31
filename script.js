const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("list-container");

function addtask() {

    console.log("hello");
  if (inputbox.value === "") {
    alert("you must write something");
  } else {
    let html = `<li>${inputbox.value}
                    <span> &#215; </span>
                </li>`;
    document.getElementById("list-container").insertAdjacentHTML("beforeend", html) ;
    


  }
  inputbox.value = "";
  saveData();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        console.log("gggg");
        e.target.parentElement.remove();
        saveData();
    }
    
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
