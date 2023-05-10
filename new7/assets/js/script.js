
const app=document.querySelector(".app")
const input=document.querySelector("#input")
const btn=document.querySelector(".btn")
const tasks=document.querySelector(".tasks")
const form=document.querySelector("form")
form.addEventListener("submit",function (a) {
    const newDiv = document.createElement("div");
    const task = document.createElement("p");
    const edit = document.createElement("button");
    const deletes = document.createElement("button");
    const buttons = document.createElement("div");
    const newContent1 = document.createTextNode("edit");
    const newContent2 = document.createTextNode('delete');
    const newContent = document.createTextNode(input.value);
    if(input.value!==""){
        newDiv.appendChild(task);
        edit.appendChild(newContent1)
        task.appendChild(newContent)
        deletes.appendChild(newContent2)
        buttons.appendChild(edit)
        buttons.appendChild(deletes)
        
        newDiv.appendChild(buttons)
        
        tasks.appendChild(newDiv);
    }
    else{
        
    alert("duzgun daxil et")

    }

    console.log(newDiv.innerText);
    deletes.addEventListener("click",function () {
        newDiv.remove()
    })
    edit.addEventListener("click",function(a){
       task.innerText=prompt("editi daxil et:")
    })
    
   
 a.preventDefault()
})
