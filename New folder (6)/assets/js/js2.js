const form = document.querySelector("form");
const companyName = document.querySelector("#companyName");
const contactName = document.querySelector("#contactName");
const city = document.querySelector("#city");
const country = document.querySelector("#country");

const submit=document.querySelector("#button")


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