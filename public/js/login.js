function validate(){
    let email = document.getElementById("inputEmail4");
    let password = document.getElementById("inputPassword4");
    let username = document.getElementById("inputName4");

    let nameErrorFlag = false;
    let passwordErrorFlag = false;
    let emailErrorFlag = false;

    // email validation
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(!regexp.test(email.value.trim())){
       mailError.innerHTML = "invalid email";
       mailError.style.color = "red";
       inputEmail4.style.border = "2px solid red";
       emailErrorFlag = true;
    }else{
        mailError.innerHTML = "valid mail";
        mailError.style.color = "green";
        inputEmail4.style.border = "2px solid green";
    }

    //password validation
    let rgexp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if(rgexp.test(password.value)){
       if(password.value.length<9){
        pwdError.innerHTML = "strength:poor";
        pwdError.style.color = "red";
        inputPassword4.style.border = "2px solid red";
        passwordErrorFlag = true;
       }else if(password.value.length<12){
            pwdError.innerHTML = "Strength:Medium";
            pwdError.style.color = "orange";
            inputPassword4.style.border = "2px solid orange";
    }else{
            pwdError.innerHTML="Strength:Strong";
            pwdError.style.color="green";
            inputPassword4.style.border = "2px solid green";
    }
}
else{
    pwdError.innerHTML = "invalid password";
    pwdError.style.color = "red";
    inputPassword4.style.border = "2px solid red";
    passwordErrorFlag = true;
}
//username validation
let rgex = /^[a-zA-Z0-9]+$/;
if(!rgex.test(username.value.trim())||username.value.length<3){
    nameError.innerHTML = "invalid name";
    nameError.style.color = "red";
    inputName4.style.border = "2px solid red";
    nameErrorFlag = true;
 }else{
    nameError.innerHTML = "valid name";
    nameError.style.color = "green";
    inputName4.style.border = "2px solid green";
 }

if (emailErrorFlag===true||passwordErrorFlag===true||nameErrorFlag===true){
    return false;
}
 else{
    return true;
}


}//function end