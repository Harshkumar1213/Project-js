let str = "";
let buttons = document.querySelectorAll(".btn");
let btns = document.getElementById("btns");

buttons.forEach((button) =>{
    button.addEventListener("click", function (e){
       if(e.target.innerHTML == "="){
        str = eval(str);
        document.querySelector(".input").value = str; 
       } else if (e.target.innerHTML == "C"){
        str = "";
        document.querySelector(".input").value = str;
       } else if(e.target.innerHTML == "X"){
        str = ""
        document.querySelector(".input").value = str;
       } else{
        str = str + e.target.innerHTML;
        document.querySelector(".input").value = str;
       }     
    });
});


