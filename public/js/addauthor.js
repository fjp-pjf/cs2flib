function addAuthor(){

    title = document.getElementById("inputTitle4").value.trim(),
    author = document.getElementById("inputAuthor4").value.trim(),
    genre = document.getElementById("inputGenre4").value.trim()

let titleErrorFlag = false;
let authorErrorFlag = false;
let genreErrorFlag = false;
//title validation
if(title === "" || title.length > 30){
titleError.innerHTML = "Invalid author";
titleError.style.color = "red";
inputTitle4.style.border = "2px solid red";
titleErrorFlag = true;
}
else{
titleError.innerHTML = "Good to go!";
titleError.style.color = "green";
inputTitle4.style.border = "2px solid green";
}

//author validation

if(author === "" || author.length > 25){
authorError.innerHTML = "No country found";
authorError.style.color = "red";
inputAuthor4.style.border = "2px solid red";
authorErrorFlag = true;
}
else{
authorError.innerHTML = "Good to go!";
authorError.style.color = "green";
inputAuthor4.style.border = "2px solid green";
}

//genre validation
if(genre === "" || genre.length >10){
genreError.innerHTML = "Oops! invalid input";
genreError.style.color = "red";
inputGenre4.style.border = "2px solid red";
genreErrorFlag = true;
}
else{
genreError.innerHTML = "Good to go!";
genreError.style.color = "green";
inputGenre4.style.border = "2px solid green";
}


if (titleErrorFlag===true||authorErrorFlag===true||genreErrorFlag===true){
return false;
}
else{
return true;
}

}//function end
