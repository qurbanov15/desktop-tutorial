const bar=document.querySelector(".bar")
const resp=document.querySelector(".resp")
const header=document.querySelector("header")
const resp_header=document.querySelector(".resp_header")
bar.addEventListener("click",function () {
 
    resp.classList.toggle("responsive")
    header.classList.toggle("header_bg")
})