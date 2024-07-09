let mode_button=document.querySelector("#mode"); 

let cur_mode="light" ;

let body=document.querySelector("body") ; 

mode_button.addEventListener("click",()=> {
    console.log("You are trying to change the Mode!") ;
    
    if(cur_mode=="light") {
        cur_mode="dark" ; 
        body.classList.add("dark") ; 
        body.classList.remove("light") ; 
    }
    else {
        cur_mode="light" ; 
        body.classList.add("light") ; 
        body.classList.remove("dark") ; 
    }
})