let rect = document.querySelector(".center");

rect.addEventListener("mousemove", function (details) {
  let recLocation = rect.getBoundingClientRect();
  let inside = details.clientX - recLocation.left;

  if (inside < recLocation.width / 2) {
    let redColor = gSap.utils.mapRange(
      0,
      recLocation.width/2,
      255,
      0,
      inside
    );
    gSap.to(rect, {
      background: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  } else {
    let blueColor = gSap.utils.mapRange(
        recLocation.width / 2,
        recLocation.width,
        0,
        255,
        inside
      );
      gSap.to(rect, {
        background: `rgb(0, 0, ${blueColor})`,
        ease: Power4,});
  }
});

rect.addEventListener("mouseleave",function(){
    gSap.to(rect, {
        background: `white`,
    });
})
