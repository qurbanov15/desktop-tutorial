// let arr=["a","abdfg","sd","qwe"];
// function sira(a,b) {
//     return a.length-b.length
// }
// console.log(arr.join("-"));
// console.log(arr.map((x) => x*2));
// console.log(arr.filter((x) => x>4));
// arr.sort()
// console.log(arr);
// console.log(arr.every((x)=> x>0));
// console.log(arr.some((x)=> x>23));
// console.log(arr.includes(5,2));
// console.log(arr.find((x)=> x>0));
// console.log(arr.indexOf(33));
// arr.sort(sira)
// console.log(arr);
// let arrr=["a","abdfg","sd","qwe",4,2,67];
// function sira1(a,b) {
//     let result
//     if(isNaN(a,b)){
//         result=a.length-b.length
//     }
//     else{
//        result=a-b
//     }
//     return result
// }
// arrr.sort(sira1)
// console.log(arrr);
// let arr1 = [
//     {
//     "id": 2,
//     "description": "Sweet and savory sauces relishes spreads and seasonings",
//     "name": "Condiments"
//     },
//     {
//     "id": 1,
//     "description": "Soft drinks coffees teas beers and ales",
//     "name": "Beverages"
//     },
//     {
//     "id": 3,
//     "description": "Desserts candies and sweet breads",
//     "name": "Confections"
//     },
//     {
//     "id": 4,
//     "description": "Cheeses",
//     "name": "Dairy Products"
//     },
//     {
//     "id": 5,
//     "description": "Breads crackers pasta and cereal",
//     "name": "Grains/Cereals"
//     },
//     {
//     "id": 6,
//     "description": "Prepared meats",
//     "name": "Meat/Poultry"
//     },
//     {
//     "id": 7,
//     "description": "Dried fruit and bean curd",
//     "name": "Produce"
//     },
//     {
//     "id": 8,
//     "description": "Seaweed and fish",
//     "name": "Seafood"
//     }
//     ]

// console.log(arr1.sort(((a,b) => (a.name > b.name) ? 1 : ((b.name> a.name) ? -1 : 0))));
// console.log(arr1.sort(((a,b) => (a.description > b.description) ? 1 : ((b.description> a.description) ? -1 : 0))));

// let students = [
//     {
//       ad: "Senuber",
//       soyad: "Besirzade",
//       yas: "23",
//       kesir: false,
//       hobbies: ["gitara", "resm", "mahni"],
//     },
//     {
//       ad: "Zeyneb",
//       soyad: "Xanizade",
//       yas: "20",
//       kesir: false,
//       hobbies: ["musiqi", "gezmek"],
//     },
//     {
//       ad: "Yusif",
//       soyad: "Memmedov",
//       yas: "28",
//       kesir: false,
//       hobbies: ["xarici dil", "alqoritm"],
//     },
//     {
//       ad: "Cavid",
//       soyad: "Zeynalov",
//       yas: "22",
//       kesir: false,
//       hobbies: ["seir yazmaq", "xarici olkeler"],
//     },
//     {
//       ad: "Yusif",
//       soyad: "Tagiyev",
//       yas: "23",
//       kesir: false,
//       hobbies: ["oyun", "futbol", "voleybol"],
//     },
//     {
//       ad: "Adil",
//       soyad: "Sefizade",
//       yas: "21",
//       kesir: false,
//       hobbies: ["futbol", "voleybol", "at capmaq", "tarixi faklarla maraqlanmaq"],
//     },
//     {
//       ad: "Adil",
//       soyad: "Mediyev",
//       yas: "28",
//       kesir: false,
//       hobbies: ["kofe duzeltmek", "jazz"],
//     },
//     {
//       ad: "Vasif",
//       soyad: "Ejderov",
//       yas: "20",
//       kesir: true,
//       hobbies: ["futbol oynamaq", "masin surmek"],
//     },
//   ];
//   function sagird(arr) {
//     let arrr=[]
//     for (let index = 0; index < arr.length; index++) {
//      console.log(arr[index].ad)

//     }}

//   sagird(students)
//   function names(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`<${arr[i].ad} ${arr[i].soyad}>`);

//     }

//   }
//   names(students)

//   function adsoyadyas(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i].yas>24) {
//         console.log(`<${arr[i].ad} ${arr[i].soyad} ${arr[i].yas}>`);
//        }

//     }
//   }
//   adsoyadyas(students)

//   function kesr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i].kesir===true) {
//         console.log(`<${arr[i].ad} ${arr[i].soyad} hobbiler: ${arr[i].hobbies}>`);
//        }

//     }
//   }
//   kesr(students)
//   function eyniad(arr) {

//      for (let i = 0; i < arr.length; i++) {
//         for (let k = i+1; k < arr.length; k++) {
//             if(arr[i].ad===arr[k].ad){
//                 console.log(`${arr[i].ad} ${arr[i].soyad} ${arr[k].ad} ${arr[k].soyad}`);
//             }

//         }

//      }
//     }

//   eyniad(students)

// function ov(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let result=arr[i].soyad.splice(-1,-3)
//         if(result==="ov"){
//             console.log(`${arr[i].ad} ${arr[i].soyad}`);
//         }

//     }

// }
// ov(students)

// function soyad3(arr) {

//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i].soyad.match(/[aeiou]/gi).length>3) {
//         console.log(`${arr[i].ad} ${arr[i].soyad}`);
//        }

//     }

// }
// soyad3(students)

// const body = document.querySelector("body");
// const btn =document.getElementById("btn");
// const tasks= document.querySelectorAll("li")
// const ul = document.querySelector("ul")
// // const btn = document.getElementById("btn");
// body.style.backgroundColor="red"
// btn.style.cssText=`
// font-size:30px;
// background-color:green;
// `
// tasks[0].style.cssText=`
// color:green;
// background-color: blue;


// `
// tasks[1].style.cssText=`
// color:blueviolet;
// background-color: aqua;


// `
// tasks[2].style.cssText=`
// color:white;
// background-color: burlywood;


// `
// tasks[0].innerText += tasks[0].innerText=" salam"
// tasks[1].innerText += tasks[1].innerText=' salam'
// tasks[2].innerText += tasks[2].innerText=" salam"

// const collection = ul.children;
// console.log(collection);
// for (let i = 0; i < collection.length; i++) {
//     console.log(collection[i]);
    
// }


//     const buttons= document.createElement("button");
//     const buttons1= document.createElement("button");
//     buttons.innerText="delete"
//     buttons1.innerText="edit"
//     const buttons2= document.createElement("button");
//     const buttons3= document.createElement("button");
//     buttons2.innerText="delete"
//     buttons3.innerText="edit"
//     tasks[0].appendChild(buttons2)
//     tasks[0].appendChild(buttons3)
//     tasks[1].appendChild(buttons)
//     tasks[1].appendChild(buttons1)
//     const buttons4= document.createElement("button");
//     const buttons5= document.createElement("button");
//     buttons4.innerText="delete"
//     buttons5.innerText="edit"
//     tasks[2].appendChild(buttons4)
//     tasks[2].appendChild(buttons5)
    

//     btn.addEventListener("click", function () {
//         const value= documen.querySelector("")
//     }

// box.addEventListener("click", function () {
//   const yenielement = document.createElement("h3");
//   let deyer = prompt();
//   yenielement.innerText = deyer;
//   div.appendChild(yenielement);
// });
// const bars=document.querySelector("i")
// const ul=document.querySelector("ul")
// const nav=document.querySelector("nav")
// bars.addEventListener("click",function () {
//     ul.classList.toggle("nav")
//     ul.classList.toggle("navbg")
// })
const card=document.querySelector(".card")
const effect=document.querySelector(".effect")
const body=document.querySelector("body")
const card_bottom_left=document.querySelector(".card_bottom_left")
const master=document.querySelector("h1")
const sun = document.querySelector(".fa-sun")
const moon = document.querySelector(".fa-moon")
card.addEventListener("click",function () {
    card.classList.toggle("rotate")
   
})
effect.addEventListener("click",function () {
    body.classList.toggle("bg")
    card_bottom_left.classList.toggle("card_bottom_left_black")
card.classList.toggle("bgradient")
master.classList.toggle("h1_color")
sun.classList.toggle("fa-sun1")
moon.classList.toggle("fa-moon1")

})