// const player = document.querySelector(".player")
// const computer = document.querySelector(".computer")
// const score = document.querySelector(".score")
// const img=document.querySelectorAll("img")
// const img_computer=document.querySelector(".img_computer")
// const player_score=document.querySelector("#player")
// const computer_score=document.querySelector("#computer")
// document.body.addEventListener("keydown",function (a) {
//    console.log(a.key);
  
   
   
    
   
//     let name=a.key
//     if (name==="k") {
     
//      img[0].setAttribute("src","./assets/img/Screenshot 2023-04-26 102312.png")
  
//      return
//     }
//     if (name==="q") {
    
//      img[0].setAttribute("src","./assets/img/Screenshot 2023-04-26 102328.png")
    
//      return
//     }
//     if (name==="d") {
     
//      img[0].setAttribute("src","./assets/img/Screenshot 2023-04-26 102244.png")
     
//      return
//     }
   
//     else{
//      alert("duzgun daxil et")
//      return
//     }

   
 
   
// })
// document.body.addEventListener("keydown",function () {
    
//     let random=Math.floor(Math.random()*3)
//     if (random===0) {
     
//      img[1].setAttribute("src","./assets/img/Screenshot 2023-04-26 102312.png")
  
//      return
//     }
//     if (random===1) {
     
//      img[1].setAttribute("src","./assets/img/Screenshot 2023-04-26 102328.png")
    
//      return
//     }
//     if (random===2) {
    
//      img[1].setAttribute("src","./assets/img/Screenshot 2023-04-26 102244.png")
//      return
//     }
   
// })
// document.body.addEventListener("keydown",function () {
 
// fetch("https://northwind.vercel.app/api/categories")
// .then(res=>res.json())
// .then(data=>console.log(data))
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
    if (input.value==='') {
        
    alert("duzgun daxil et")
    
   
    }
    else{
        newDiv.appendChild(task);
        edit.appendChild(newContent1)
        task.appendChild(newContent)
        deletes.appendChild(newContent2)
        buttons.appendChild(edit)
        buttons.appendChild(deletes)
        
        newDiv.appendChild(buttons)
    }
    console.log(newDiv.innerText);
    deletes.addEventListener("click",function () {
        newDiv.remove()
    })
    edit.addEventListener("click",function(a){
       task.innerText=prompt("editi daxil et:")
    })
    tasks.appendChild(newDiv);
   
 a.preventDefault()
})
