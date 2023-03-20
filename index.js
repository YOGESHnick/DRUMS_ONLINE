var numofbuttons=document.querySelectorAll(".drum").length;

//D E T E C T I N G    M O U S E   C L I C K S 
for(var i=0;i<numofbuttons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var b=this.innerHTML;
        makesound(b);
        buttonAnimation(b);
    });
}

// K E Y    L I S T E N E R S
document.addEventListener("keydown",function(event){  // event is a parameter, can have any name ..key is a method in keydown that return the key that triggerted the event
    makesound(event.key);
    buttonAnimation(event.key);
}); 

function makesound(key)
{
    switch(key)
        {
            case "w":
                var tom1 = new Audio("tom-1.mp3");
                tom1.play();
                break;

                case "a":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play();
                break;

                case "s":
                var tom3 = new Audio("tom-3.mp3");
                tom3.play();
                break;

                case "d":
                var tom4 = new Audio("tom-4.mp3");
                tom4.play();
                break;

                case "j":
                var snare = new Audio("snare.mp3");
                snare.play();
                break;

                case "k":
                var crash = new Audio("crash.mp3");
                crash.play();
                break;

                case "l":
                var kick = new Audio("kick-bass.mp3");
                kick.play();
                break;
                
        }
}

function buttonAnimation(currentkey)
{
    var activeButton=document.querySelector("."+currentkey);      //document.querySelector(".currentkey")
    activeButton.classList.add("pressed");

    setTimeout( function() {activeButton.classList.remove("pressed");} ,100 );
    // setTimeout(function , time); is method in JS--we wait for 'time' milliseconds to execute 'function'
} 