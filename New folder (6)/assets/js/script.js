



const form = document.querySelector("form");
const companyName = document.querySelector("#companyName");
const contactName = document.querySelector("#contactName");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
const phone = document.querySelector("#phone");
const submit=document.querySelector("#button")
const cavab=document.querySelector("#cavab")


form.addEventListener("submit",function () {
    



  let obj = {
    id:"",
    sual: "",
    A: "",
    B: "",
    C: "",
    cavab:"",

    
  };

  
    obj.sual = companyName.value;
    obj.A = contactName.value;
    obj.B = city.value;
    obj.C = country.value;
   obj.cavab=cavab.value;
   
  
   
    fetch('http://localhost:3000/Quiz', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))




});
let say=0
let say1=0
const basla=document.querySelector(".start")
const suallar=document.querySelector(".suallar")
let boolean=true

const h1=document.createElement("h1")
h1.innerText="0"
const h3 =document.createElement("h3")
h3.innerText="dogru cavablarin sayi:"
function suallar6 (data){

  
  
    const sual1=document.createElement("div")
    const variantlar1=document.createElement("div")
    variantlar1.className="variantlar1"
    const var_a=document.createElement("div")
    var_a.className=`variant${data.id}`
    var_a.innerText="A"
    const var_b=document.createElement("div")
    var_b.className=`variant${data.id}`
    var_b.innerText="B"
    const var_c=document.createElement("div")
    var_c.className=`variant${data.id}`
    var_c.innerText="C"
    
    const A=document.createElement("p")
    const B=document.createElement("p")
    const C=document.createElement("p")
    variantlar1.append(var_a,A,var_b,B,var_c,C)
    suallar.append(sual1,variantlar1)
    sual1.innerText=data.sual
    A.innerText=data.A
    B.innerText=data.B
    C.innerText=data.C
    const variant2=document.querySelectorAll(`.variant${data.id}`)
    var_a.style.cssText=`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    
    background-color: aqua;
    display: grid;
    place-items: center;
    `
    var_b.style.cssText=`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    
    background-color: aqua;
    display: grid;
    place-items: center;
    `
    var_c.style.cssText=`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    
    background-color: aqua;
    display: grid;
    place-items: center;
    `
    console.log(variant2);
    
    let bool=""
    
    for (let i = 0; i < variant2.length; i++) {
      if (variant2[i].innerText===data.cavab) {
        
      
        variant2[i].addEventListener("click",function () {
          say1++
             
            variant2[i].style.backgroundColor="green"
              h1.innerText=+h1.innerText+1
        
          
    }
    )
  }
 
    else if(variant2[i].innerText!==data.cavab){
      variant2[i].addEventListener("click",function () {
        variant2[i].style.backgroundColor="red"
        bool="false"
        console.log(bool);
        say++
        console.log(say);
      })
     }
     else if (bool==="false") {
      for (let k = 0; k < variant2.length; k++) {
        variant2[k].removeEventListener("click")
        
      }
      
    }       
     console.log(bool);
  
   
    
  }
  


}
let a=[]
let b=0
basla.addEventListener("click",function () {
  suallar.innerHTML=""     
  boolean=false
  fetch("http://localhost:3000/Quiz")
  .then(resp=> resp.json())
  .then(data=>{
      console.log(data.length);
    a=data
      
      data.forEach(elem => {
       
        suallar6(elem)
      });
    
   
    
if(say+say1>=a.length){
 
       
   
  suallar.appendChild(h1)

  

}
      
      console.log(data.length);
 
})
})



