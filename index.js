
var number = document.querySelectorAll(".drum").length; // returns an array then you take the length of the array
var audio = new Audio("./sounds/tom-1.mp3");
var count = 0;
for( var i = 0; i < number ; i++ ){ // tracking wen a button is clicked
document.querySelectorAll(".drum")[i].addEventListener("click", function (){ 
    
    var buttoninnerHTML = this.innerHTML;
    makeSound(buttoninnerHTML);
    btnanimation(buttoninnerHTML);
    count++;
    if( count%7==0){
    var funimg = document.getElementById("crash-img");
    funimg.style.display = "block";  

    setTimeout(function () {
                funimg.style.display = "none";  
                }, 300);
    
    var changeText = document.querySelector("h1");
    var original = "Whiplash";
    changeText.innerHTML = "were you rushing or were you dragging? start counting";

    setTimeout(
        function(){
            changeText.innerHTML = original;
        }, 3000
            ) // after 3 secs, perform this function 

}
})
}

document.addEventListener("keydown",function(event){ //
    makeSound(event.key);
    count++;
    if( count%7==0){
    var funimg = document.getElementById("crash-img");
    funimg.style.display = "block";  

    setTimeout(function () {
                funimg.style.display = "none";  
                }, 300);
    
    var changeText = document.querySelector("h1");
    var original = "Whiplash";
    changeText.innerHTML = "were you rushing or were you dragging? start counting";

    setTimeout(
        function(){
            changeText.innerHTML = original;
        }, 3000
            ) // after 3 secs, perform this function 

}
});

function makeSound(key){
    switch(key){

        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();

            var crashImg = document.getElementById("whiplash");
            crashImg.style.display = "block";  

            setTimeout(function () {
                crashImg.style.display = "none";  
                }, 300);
            break;

        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(buttoninnerHTML);
    }
}

function btnanimation(key){

    var active = document.querySelector("."+key); // select all elements with that class

    active.classList.add("pressed");

    setTimeout( function(){
        active.classList.remove("pressed");
    }, 100);
    
}

