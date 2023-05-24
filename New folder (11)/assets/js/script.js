const lorem=document.querySelectorAll(".lorem")
const arrow=document.querySelectorAll(".fa-caret-down")

for (let i = 0; i < lorem.length; i++) {
    arrow[i+1].addEventListener("click",function () {
       add_p(lorem[i])
    })
    
}