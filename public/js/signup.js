    
function validate(){
    let email = document.getElementById("inputEmail4");
    let password = document.getElementById("inputPassword4");
    let number = document.getElementById("inputPhone4");
    let adsone = document.getElementById("inputAddress");
    let adstwo = document.getElementById("inputAddress2");
    let town = document.getElementById("inputCity");
    let pincode = document.getElementById("inputZip");
    
    let emailErrorFlag = false;
    let passwordErrorFlag = false;
    let numberErrorFlag = false;
    let aOneFlag = false;
    let aTwoFlag = false;
    let cityFlag = false;
    let pinFlag = false;

    //zipcode validation
    let regx = /^[0-9]+$/;
    if(!regx.test(pincode.value.trim())||pincode.value.length == ""|| pincode.value.length === null || pincode.value.length<3){
        pinError.innerHTML = "invalid zipcode";
        pinError.style.color = "red";
        inputZip.style.border = "2px solid red";
        pinFlag = false;
    }else{
        pinError.innerHTML = "valid zipcode";
        pinError.style.color = "green";
        inputZip.style.border = "2px solid green";
    }

    //city validation
    let rgx = /^[a-zA-Z]+$/;
    if(!rgx.test(town.value.trim())||town.value.length == "" || town.value.length === null || town.value.length<5){
        cityError.innerHTML = "invalid input";
        cityError.style.color = "red";
        inputCity.style.border = "2px solid red";
        cityFlag = false;
       }else{
        cityError.innerHTML = "valid input";
        cityError.style.color = "green";
        inputCity.style.border = "2px solid green";
       }

   //address validation
   if(adsone.value.length == "" || adsone.value.length === null || adsone.value.length<5){
    adrsError.innerHTML = "invalid address";
    adrsError.style.color = "red";
    inputAddress.style.border = "2px solid red";
    aOneFlag = false;
   }else{
    adrsError.innerHTML = "valid address";
    adrsError.style.color = "green";
    inputAddress.style.border = "2px solid green";
   }

   //address validation 2
   if(adstwo.value.length == "" || adstwo.value.length === null || adstwo.value.length<5){
    addressError.innerHTML = "invalid address";
    addressError.style.color = "red";
    inputAddress2.style.border = "2px solid red";
    aTwoFlag = false;
   }else{
    addressError.innerHTML = "valid address";
    addressError.style.color = "green";
    inputAddress2.style.border = "2px solid green";
   }


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

//phone number validations
let rgex = /^((\d{10})|(\d{3}\-\d{3}\-\d{4})|(\d{3}\.\d{3}\.\d{4})|(\d{3}\s\d{3}\s\d{4}))$/;
if(!rgex.test(number.value)){
    phoneError.innerHTML = "invalid number";
    phoneError.style.color = "red";
    inputPhone4.style.color = "2px solid red";
    numberErrorFlag = true;
}else{
    phoneError.innerHTML = "valid number";
    phoneError.style.color = "green";
    inputPhone4.style.color = "2px solid green";
}

if (emailErrorFlag===true||passwordErrorFlag===true||numberErrorFlag===true||aOneFlag === true||aTwoFlag === true||cityFlag === true ||pinFlag === true){
    return false;
}
 else{
    return true;
}

}//function close
