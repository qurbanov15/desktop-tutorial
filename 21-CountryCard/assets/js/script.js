

function card(link,box){
 
const region =document.createElement("div")
region.className = 'about'
const name =document.createElement("div")
name.className = 'about'
const valyuta =document.createElement("div")
valyuta.className = 'about'
const car=document.createElement("div")
car.className = 'about'
const capital =document.createElement("div")
capital.className = 'about'
const population =document.createElement("div")
population.className = 'about'
const idd =document.createElement("div")
idd.className = 'about'

    fetch(link)
    .then(res=>res.json())
    .then(data=>{
        
    name.innerText=data[0].name.common
    region.innerText=data[0].region
    valyuta.innerText=Object.keys(data[0].currencies)[0]
    car.innerText=data[0].car.signs[0]
    capital.innerText=data[0].capital[0]
    population.innerText=data[0].population
    idd.innerText=data[0].idd.root+data[0].idd.suffixes[0]
   
    })
    box[0].appendChild(region)
    box[1].appendChild(name)
    box[2].appendChild(valyuta)
    box[3].appendChild(car)
    box[5].appendChild(capital)
    box[4].appendChild(population)
    box[6].appendChild(idd)
}
const bottom=document.querySelector(".bottom")
card("https://restcountries.com/v3.1/name/azerbaijan",document.querySelectorAll(".box"))
card("https://restcountries.com/v3.1/name/argentina",document.querySelectorAll(".box1"))
card("https://restcountries.com/v3.1/name/sweden",document.querySelectorAll(".box2"))
card("https://restcountries.com/v3.1/name/switzerland",document.querySelectorAll(".box3"))
const form=document.querySelector("form")
const search=document.querySelector("#search")
const all=document.querySelector("#all")
const input=document.querySelector("input")
const section=document.querySelector("section")
search.addEventListener("click",function () {
  
    const card=document.createElement("div")
    card.className="card"
    const top=document.createElement("div")
    top.className="top"
    const bottom=document.createElement("div")
    bottom.className="bottom"
    const p=document.createElement("p")
    p.innerText="Lorem ipsum dolor sit."
    const img=document.createElement("img")
    img.src=""
    const h2=document.createElement("h2")
    h2.innerText=""
   
    const pug=document.createElement("div")
    pug.className="pug"
    
     const info=document.createElement("div")
     info.className="info"
     section.appendChild(card)
    card.appendChild(top)
    card.appendChild(bottom)
  top.appendChild(p)
  top.appendChild(img)
  top.appendChild(h2)
  for (let k = 0; k < 8; k++) {
   let i= document.createElement("div")
    i.className="box"
    bottom.appendChild(i)
   
  }
  const box=document.querySelectorAll(".box")
 for (let i = 0; i < 8; i++) {
    box[i].appendChild(pug)
    box[i].appendChild(info)
    
 }
 
console.log("hello");
})