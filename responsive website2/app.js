
const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

function firstPageAnimation (){
    let timeLine = gsap.timeline();

    timeLine.from(".nav",{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })

   .to(".belement",{
        y: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: 0.4
    })

    .from(".hero-footer",{
        x: '-100',
        opacity: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut
    })
}

//for cursor circle manage location
function circleFlat(){
    //define default scale value
    let xScale = 1;
    let yScale = 1;

    let xPrev = 0;
    let yPrev = 0;

    window.addEventListener("mousemove", function(e){
        xScale = gsap.utils.clamp(1, 1, e.clientX - xPrev);
        yScale = gsap.utils.clamp(1, 1, e.clientY - yPrev);

        xPrev = e.clientX;
        yPrev = e.clientY;

        mouseFollow(xScale,yScale)
    });
};

function mouseFollow(xScale,yScale){
    window.addEventListener("mousemove", function(event){
        let circle = document.querySelector("#minicursor") ;
        circle.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(${xScale}, ${yScale})`  
    })
};


firstPageAnimation();
mouseFollow();
circleFlat();

let element = document.querySelectorAll(".element");

element.forEach((function(newEle){
    newEle.addEventListener("mousemove", function(event){
        let diff = event.clientY - newEle.getBoundingClientRect().top;

        gsap.to(newEle.querySelector("img"),{
            opacity: 1,
            ease: Power1,
            top: diff,
            left: event.clientX
        });
    });
}));