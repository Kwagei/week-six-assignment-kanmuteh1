// selecting player character
var playerX = document.querySelectorAll("#player-x");
console.log(playerX);

var playerO = document.querySelectorAll("#player-o");
console.log(playerO);

var getPlayingSpot = document.querySelectorAll(".playing-spot");
Array.from(getPlayingSpot).forEach(function(getPlayingSpot){
   getPlayingSpot.addEventListener("click", function(spot){
        while(getPlayingSpot.innerHTML === ""){
            if(getPlayingSpot.innerHTML === ""){
                spot.target.innerHTML = "o";
            }
            var computer = Math.floor(Math.random()*8)+0;

            if(computer === 0){
                document.getElementById("0").innerHTML = "x";
            }

            else if(computer === 1){
                document.getElementById("1").innerHTML = "x";
            }

            else if(computer === 2){
                document.getElementById("2").innerHTML = "x";
            }

            else if(computer === 3){
                document.getElementById("3").innerHTML = "x";
            }

            else if(computer === 4){
                document.getElementById("4").innerHTML = "x";
            }

            else if(computer === 5){
                document.getElementById("5").innerHTML = "x";
            }

            else if(computer === 6){
                document.getElementById("6").innerHTML = "x";
            }

            else if(computer === 7){
                document.getElementById("7").innerHTML = "x";
            }

            else if(computer === 8){
                document.getElementById("8").innerHTML = "x";
            }

        }
   })

   
})
    
        