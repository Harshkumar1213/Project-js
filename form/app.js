const form = document.querySelector("form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#pass");
const cPass = document.querySelector("#cpass");

//add event listener submit
form.addEventListener("submit",(event) =>{
    event.preventDefault();
    Validate();
});

const senData = (userNameVal,sRate,count) =>{
    if(sRate === count){
        alert('Registration SuccessFull');
        // location.href = `abc.html?username=${userNameVal}`
    }
}

//for final data validation
const setSuccessMsg = (userNameVal) =>{
    let formCom = document.getElementsByClassName("form-control");
    let count = formCom.length -1;
    for (let i=0; i<formCom.length; i++ ) {
        if(formCom[i].className === "form-control success"){
            let sRate = 0+1;
            senData (userNameVal,sRate,count);
        } else{
            return false;
        }
    }
}

//more email validate
const isEmail = (emailVal) =>{
    let atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 3) return false;
    if(dot === emailVal.length -1) return false;
    return true
}

// trim for remove space from start & end
const Validate = ()=>{
    const userNameVal = userName.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cPassVal = cPass.value.trim();

    //validate username
    if(userNameVal === ""){
        setErrorMsg(userName, 'username cannot be blank');
    } else if(userNameVal.length <= 2){
        setErrorMsg(userName, 'username min 3 char');
    } else {
        setSuccessMsg(userName);
    };

    //validate email
    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
    } else if(! isEmail (emailVal)){
        setErrorMsg(email, 'Not a valid email');
    } else {
        setSuccessMsg(email);
    };

     //validate phone
     if(phoneVal === ""){
        setErrorMsg(phone, 'phone cannot be blank');
    } else if( phoneVal <= 10){
        setErrorMsg(phone, 'Not a valid phone');
    } else {
        setSuccessMsg(phone);
    };

    //validate password
    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
    }if(passwordVal.length <= 5){
        setErrorMsg(password, 'Enter 5 char 1 special char');
    }if(!/[!@#$%^&*()_+=-]/.test(passwordVal)){
        setSuccessMsg(password, "1 special char required");
    } else {
        setSuccessMsg(password);
    }

     //validate cPassword
     if(cPassVal === ""){
        setErrorMsg(cPass, 'confirm Password cannot be blank');
    } else if(cPassVal !== passwordVal){
        setErrorMsg(cPass, 'Your password is not match, pls check again');
    } else {
        setSuccessMsg(cPass);
    }
    setSuccessMsg(userNameVal);
};

function setErrorMsg (input,setErrorMsg){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = setErrorMsg;
}

function setSuccessMsg(input,setSuccessMsg){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}