 // selecting player character
function playerCatSelection(select){
   var players = document.getElementById(select.target.id);
}

var check_boxes = ["0","1","2","3","4","5","6","7","8"];

function humanPlay(human){
   var humanId = document.getElementById(human.target.id);
   if(humanId.innerHTML === ""){
      humanId.innerHTML = "o";
      check_boxes.forEach(function(remove){
         if(humanId.id === remove){
            var a = check_boxes.splice(remove,1);
            console.log(a);
            // console.log("human",check_boxes)
         }
      })
   }
   generateRandomNum()
}

function generateRandomNum(){
   var computer_selection = Math.floor(Math.random()*8);
   computer_selection = computer_selection.toString();
   var computer_player = document.getElementById(computer_selection);
   if(computer_player.innerHTML === ""){
      computer_player.innerHTML = "x";

   }

   else{
      generateRandomNum();
      check_boxes.forEach(function(remove){
         if(computer_player.id === remove){
            var b = check_boxes.splice(remove,1);
            console.log(b)
            // console.log("computer",check_boxes)
         }
      })
      return
   }
}