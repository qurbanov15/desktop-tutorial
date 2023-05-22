const lorem=document.querySelectorAll(".lorem")
const arrow=document.querySelectorAll(".fa-caret-down")
function add_p(lorem) {
    const p=document.createElement("p")
    p.innerText=`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid velit, asperiores libero.
    Beatae vitae nostrum et distinctio saepe autem quisquam cupiditate labore voluptatum,
    eligendi ipsam atque assumenda odit, perferendis dicta.`
lorem.appendChild(p)
}
for (let i = 0; i < lorem.length; i++) {
    arrow[i+1].addEventListener("click",function () {
       add_p(lorem[i])
    })
    
}