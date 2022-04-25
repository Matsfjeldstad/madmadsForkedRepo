const form = document.getElementById('form-one');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('passwordCheck');

form.addEventListener('submit',(e)=> {
     e.preventDefault();
/* MEMO TO ME THIS IS WHERE YOU NEED TO ALTER IN ORDER FOR IT TO REDIRECT, UPON SUCCESS. Will leave it for now. */
    checkInputs();
});

function checkInputs(){
    //get thevalues from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        // add success class
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'E-Mail cannot be blank');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Please input password');
    } else {
        setSuccessFor(password);
    }
    
    if(passwordCheckValue === ''){
        setErrorFor(passwordCheck, 'Please input password');
    } else if (passwordValue !== passwordCheckValue){
        setErrorFor(passwordCheck, 'Passwords does not match')
    } else {
        setSuccessFor(passwordCheck);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    //add error message inside the small tag
    small.innerText = message;
    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    //regex copied from https://www.youtube.com/watch?v=rsd4FNGTRBw&t=946s&ab_channel=FlorinPop
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}


  function passvalues(){
    var uname=document.getElementById("username").value;
    localStorage.setItem("usernamevalue", uname);
    return false;
  }

  document.getElementById("logoutbutton").addEventListener("click", logOut);
                //eventlistener -> if localstorage !empty, then clear
                function logOut(){
                    localStorage.clear();
                    /*const login = document.getElementById("loginfield");
                    login.innerHTML = <li><a href="login-signup.html" id="loginfield">Log In</a></li>*/
                };