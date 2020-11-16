 // selecting player character
function playerSelection(){
   var playerX = document.querySelectorAll("#player-x");
   var playerO = document.querySelectorAll("#player-o");
}

var getPlayingSpot = document.querySelectorAll(".playing-spot");
Array.from(getPlayingSpot).forEach(function(getPlayingSpot, index , array){
   getPlayingSpot.addEventListener("click", function(spot){
      getPlayingSpot.innerHTML = "o"
      // array.innerHTML = "o";
      computer();
   }) 
})


function generateRandomNum(){
   var computerSelection = Math.floor(Math.random()*8)+0;
   return computerSelection;
}
function computer(){
   generateRandomNum()
   if (getPlayingSpot[generateRandomNum()].innerHTML === ""){
      getPlayingSpot[generateRandomNum()].innerHTML = "x";
   }

   // else if(getPlayingSpot[generateRandomNum()].innerHTML === "o"){
   //    getPlayingSpot[generateRandomNum()].innerHTML === "o"
   //   generateRandomNum()
   //    getPlayingSpot[computerSelection].innerHTML === ""
   //    getPlayingSpot[computerSelection].innerHTML === "x"
   // }
}