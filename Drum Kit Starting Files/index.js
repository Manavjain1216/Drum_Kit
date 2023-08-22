
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
    var button1=this.innerHTML;
    switch(button1){
        case "w":
            var crash=new Audio("D:/web dev/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3");
         crash.play();
         break;
         case "a":var kick=new Audio("D:/web dev/Drum Kit Starting Files/Drum Kit Starting Files/sounds/kick.mp3");
         kick.play();
         break;
         case "s":var snare=new Audio("D:/web dev/Drum Kit Starting Files/Drum Kit Starting Files/sounds/snare.mp3");
         snare.play();
         break;

         case "d":var tom=new Audio("D:/web dev/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom.mp3");
         tom.play();
         break;
         case "j":var tom1=new Audio("D:/web dev/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom1.mp3");
         tom1.play();
         break;
         case "k":
            var tom2=new Audio("D:/web dev/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom2.mp3");
         tom2.play();
         break;
         case "l":var tom3=new Audio("D:/web dev/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom3.mp3");
         tom3.play();
         break;
        default:console.log("wrong button pressed");
        break;

    }
    
})
}
//