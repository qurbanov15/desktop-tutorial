const menu=document.querySelector(".menu")

const bars=document.querySelector(".bars")
const bars_icon=document.querySelector(".fa-bars")
const back_icon=document.querySelector(".fa-x")

bars.addEventListener("click",function () {
   
    menu.classList.toggle("menu_open")
    bars_icon.classList.toggle("fa-bars1")
    back_icon.classList.toggle("fa-x1")
    
 
})
