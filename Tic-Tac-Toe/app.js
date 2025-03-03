let boxes = document.querySelectorAll(".box");//All boxes

let resetBTN = document.querySelector("#reset");//reset  button

let newGameBTN = document.querySelector("#new-btn");//New game button

let msgContainer = document.querySelector(".msg-container");//message container

let msg = document.querySelector("#msg");//message


let turnO = true;  //playerO, playerX

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// reset game fun

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// check count player turns

boxes.forEach((box) =>{
    box.addEventListener("click", function (){
        console.log("box click")
        if(turnO){
            //player O
            box.innerHTML = "O";
            turnO = false;
        } else{
            //player X
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// all boxes a disable fun
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

// all boxes a enable fun

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

// winner show function

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// check winner function

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }

    }
};

newGameBTN.addEventListener(("click"), resetGame);
resetBTN.addEventListener(("click"), resetGame);