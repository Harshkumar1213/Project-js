let istatus = document.querySelector("h5");
let add = document.querySelector("#add");
let image = document.querySelector("img");
let icon = document.querySelector("#love");
let like = document.querySelector("#like");

let check = 0

add.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML = "Friend";
        istatus.style.color = "lightgreen";
        istatus.style.fontWeight = "700";
        add.innerHTML = "Remove Friend"
        add.style.backgroundColor = "red";
        check = 1
    } else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red";
        add.innerHTML = "Add Friend"
        add.style.backgroundColor ="burlywood" 
        check = 0;
    }
});

image.addEventListener("dblclick", function (){
    icon.style.transform = 'translate(-50%, -50%) scale(1)';
    icon.style.opacity = 0.8;
    setTimeout(function(){
        icon.style.opacity = 0;
    }, 1000);
    setTimeout(function(){
        icon.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 1500);

});

let likes = 0
like.addEventListener("click", function(){
   setTimeout(function(){
    if(likes == 0){
        like.style.color = "red"
        likes = 1;
      } 
   },1000)
   setTimeout(function(){
    if(likes = 1){
        like.style.color = "black"
        likes = 0
       }
   },1500)
})
