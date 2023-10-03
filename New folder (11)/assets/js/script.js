const lorem=document.querySelectorAll(".lorem")
<<<<<<< HEAD
const arrow=document.querySelectorAll("h3")
const about=document.querySelectorAll(".about")
=======
const arrow=document.querySelectorAll(".fa-caret-down")
>>>>>>> 4dd5ede4202b52ba35dd106cbe2cc646d19a7b94

for (let i = 0; i < lorem.length; i++) {
    
        arrow[i].addEventListener("click",function () {
            
            for (let k = 0; k < about.length; k++) {
           if (i!==k) {
            
           
                    about[k].classList.remove("about_open")
                
            
        }    
        about[i].classList.toggle("about_open")
    }
        
               
                

    })
}
    
 

    
