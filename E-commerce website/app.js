let cards2 = document.getElementById("trendsSec");
let cards3 = document.getElementById("trendsFirst")
let mainPage = document.querySelector(".main");
let trends = document.querySelector(".trends");
let letter = document.querySelector(".letter");
let footer = document.querySelector(".footer");
let homeBTN = document.getElementById("home");
let shopBTN = document.getElementById("shop");
let blogBTN = document.getElementById("blog");
let aboutBTN = document.getElementById("about")
let contactBTN = document.getElementById("contact");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let img = document.querySelectorAll(".imgg");
let cart = document.querySelector(".cart")
let newImg = document.querySelector("#newImg");
let addCart = document.querySelector("#addCart");



homeBTN.addEventListener("click", function(){
    mainPage.style.display = "flex";
    trends.style.display = "block";
    cards2.style.display = "block";
    cards3.style.display = "block";
    cart.style.display = "none";
    about.style.display = "none"
    shop.style.color = "black";
    homeBTN.style.color = "rgb(80, 186, 186)";
    blogBTN.style.color = "black";
    aboutBTN.style.color = "black";
    contactBTN.style.color = "black";
})


shopBTN.addEventListener("click", function (){
    cards2.style.display = "block";
    cards3.style.display = "block";
    mainPage.style.display = "none";
    about.style.display = "none"
    cart.style.display = "none";
    trends.style.display = "none";
    shop.style.color = "rgb(80, 186, 186)";
    homeBTN.style.color = "black";
    blogBTN.style.color = "black";
    aboutBTN.style.color = "black";
    contactBTN.style.color = "black";
});

blogBTN.addEventListener("click", function (){
    about.style.display = "none";
    cart.style.display = "none";
    contact.style.display = "none"
    mainPage.style.display = "none";
    cards2.style.display = "none";
    cards3.style.display = "none";
    trends.style.display = "block";
    blogBTN.style.color = "rgb(80, 186, 186)"
    shop.style.color = "black";
    homeBTN.style.color = "black";
    aboutBTN.style.color = "black";
    contactBTN.style.color = "black";
});

aboutBTN.addEventListener("click", function(){
    about.style.display = "block"
    cart.style.display = "none";
    contact.style.display = "none"
    mainPage.style.display = "none";
    trends.style.display = "none";
    cards2.style.display = "none";
    cards3.style.display = "none";
    shop.style.color = "black";
    homeBTN.style.color = "black";
    blogBTN.style.color = "black";
    aboutBTN.style.color = "rgb(80, 186, 186)";
    contactBTN.style.color = "black";

});

contactBTN.addEventListener("click", function(){
    cart.style.display = "none";
    about.style.display = "none"
    mainPage.style.display = "none";
    trends.style.display = "none";
    cards2.style.display = "none";
    cards3.style.display = "none";
    contact.style.display = "block"
    shop.style.color = "black";
    homeBTN.style.color = "black";
    blogBTN.style.color = "black";
    aboutBTN.style.color = "black";
    contactBTN.style.color = "rgb(80, 186, 186)";
});

img.forEach((imgs) =>{
    imgs.addEventListener("click", function(){
        newImg.src = imgs.src;
        cart.style.display = "flex";
        about.style.display = "none"
        mainPage.style.display = "none";
        trends.style.display = "none";
        cards2.style.display = "none";
        cards3.style.display = "none";
        contact.style.display = "none";
        footer.style.display = "none";
        letter.style.display = "none"
    });
});


addCart.addEventListener("click", function(){
    alert("Do you want this product in your Cart");
    location.reload();
})