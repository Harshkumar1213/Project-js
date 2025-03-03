setInterval (() =>{
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    hRotation = 30*hTime + mTime/2;
    mRotation = 6*mTime;
    sRotation = 6*sTime;

    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${sRotation}deg)`

    let Hmine = document.querySelector("#h-mine")
    let Mmine = document.querySelector("#m-mine")
    let Smine = document.querySelector("#s-mine")

    hMineTime = d.getHours();
    mMineTime = d.getMinutes();
    sMineTime = d.getSeconds();

    hRotation = 30*hMineTime + mMineTime/2;
    mRotation = 6*mMineTime;
    sRotation = 6*sMineTime;

    Hmine.style.transform = `rotate(${hRotation}deg)`
    Mmine.style.transform = `rotate(${mRotation}deg)`
    Smine.style.transform = `rotate(${sRotation}deg)`

    let time = document.querySelector(".time")
    let times = new Date();
    let HH = times.getHours();
    let MM = times.getMinutes();
    let SS = times.getSeconds();
    time.innerHTML = `${HH} : ${MM} : ${SS}`

}, 1000);
