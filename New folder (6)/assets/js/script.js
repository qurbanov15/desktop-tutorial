



// const form = document.querySelector("form");
// const companyName = document.querySelector("#companyName");
// const contactName = document.querySelector("#contactName");
// const city = document.querySelector("#city");
// const country = document.querySelector("#country");
// const phone = document.querySelector("#phone");
// const submit=document.querySelector("button")


form.addEventListener("submit", function (event) {
  event.preventDefault();

  let obj = {
    id:"",
    sual: "",
    A: "",
    B: "",
    C: "",

    
  };

  
    obj.sual = companyName.value;
    obj.A = contactName.value;
    obj.B = city.value;
    obj.C = country.value;
   
   
  
   
    fetch('http://localhost:3000/siyaset/', {
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
const basla=document.querySelector(".start")
const suallar=document.querySelector(".suallar")
basla.addEventListener("click",function () {
    fetch("http://localhost:3000/siyaset")
    .then(resp=> resp.json())
    .then(data=>{
        const sual=document.createElement("div")
        const variantlar=document.createElement("div")
        const A=document.createElement("p")
        const B=document.createElement("p")
        const C=document.createElement("p")
        variantlar.append(A,B,C)
        suallar.append(sual,variantlar)
        data.forEach(elem => {
             const sual=document.createElement("div")
        const variantlar=document.createElement("div")
        variantlar.className="variantlar"
        const A=document.createElement("p")
        const B=document.createElement("p")
        const C=document.createElement("p")
        variantlar.append(A,B,C)
        suallar.append(sual,variantlar)
            sual.innerText=elem.sual
            A.innerText="A "+elem.A
            B.innerText="B "+elem.B
            C.innerText="C "+elem.C
        });
    })
    
})