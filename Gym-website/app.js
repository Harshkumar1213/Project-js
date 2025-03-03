let Sbtn = document.querySelector("#search-btn");

Sbtn.addEventListener("click", function (){
    let inputsBtn = document.querySelector(".input");
    console.log(inputsBtn)
    inputsBtn.classList.toggle("active");

});

let Mbtn = document.getElementById("menu-btn");

Mbtn.addEventListener("click",function(){
    console.log("hi..");
    let Nava = document.getElementById("nav-a");
    console.log(Nava);

    Nava.classList.toggle("active")
})