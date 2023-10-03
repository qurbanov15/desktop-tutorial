const lorem=document.querySelectorAll(".lorem")
const arrow=document.querySelectorAll("h3")
const about=document.querySelectorAll(".about")

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
    
 

    
