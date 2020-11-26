var tic_tac_toe = document.querySelector(".tic-tac-toe-intro-container");
var game_on = document.querySelector(".game-on-container");
var first_page = document.querySelector(".first-page");
// first page of tic-tac-toe
// w3school progress bar modification for trial purpose
var i = 0;
var nextPageBtn = document.getElementById("move-to-next-page")
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var interval = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(interval);
        i = 0;
      } 
      else {
        width++;
        document.getElementById("my-progess-percentage").innerHTML= width + "%";
        elem.style.width = width + "%";
        if(width < 100){
          nextPageBtn.style.visibility = "hidden";
        }
        else{
          nextPageBtn.style.visibility = "visible";
        }
      }
    }
  }
}
nextPageBtn.style.visibility = "visible";

function moveToNextPage(){
   first_page.style.display = "none";
   tic_tac_toe.style.display = "block";
}

//  tic-tac-toe js
var hideSinglePlayerItems; 
var hideTwoPlayersItems;
var instructions;
function hideTwoPlayersItems(){
   hideTwoPlayersItems = document.querySelector(".two-players-items");
   hideTwoPlayersItems.style.display = "none";

   instructions = document.querySelector(".instruction-box");
   instructions.style.display = "none";

   var displaySinglePlayerCat = document.querySelector(".single-player-characters");
   displaySinglePlayerCat.style.display = "block";
}

function hideSinglePlayerItems(){
   hideSinglePlayerItems = document.querySelector(".single-player-items");
   hideSinglePlayerItems.style.display = "none";

   instructions = document.querySelector(".instruction-box");
   instructions.style.display = "none";

   var displayTwoPlayersCat = document.querySelector(".two-players-characters");
   displayTwoPlayersCat.style.display = "block";
}

function hideSingleAndTwoPlayers(){
   hideSinglePlayerItems = document.querySelector(".single-player-items");
   hideSinglePlayerItems.style.display = "none";

   hideTwoPlayersItems = document.querySelector(".two-players-items");
   hideTwoPlayersItems.style.display = "none";

   instructions = document.querySelector(".instruction-box");
   instructions.style.display = "block";

   var instructions_list = document.querySelector(".instructions-list");
   instructions_list.style.display = "block";
}
//  game-on js

// selecting player character
var human_name;
var computer_name;
function playerCatSelection(select){
   human_name = document.getElementById(select.target.id).innerHTML;
   if(human_name === "X"){
      computer_name = "O";
   }

   else{
      computer_name = "X";
   }
   tic_tac_toe.style.display = "none";
   game_on.style.display = "block";
}

var score = parseInt(0);
var display_score = document.querySelectorAll(".player-sco");
display_score[0].innerText +=  score;
display_score[1].innerText +=  score;
var check_boxes = ["0","1","2","3","4","5","6","7","8"];

function humanPlay(human){
   var humanId = document.getElementById(human.target.id);
   if(humanId.innerHTML === ""){
      humanId.innerHTML = human_name;
      var items_index1 = check_boxes.indexOf(humanId.id).toString();
      check_boxes.splice(items_index1,1);
   } 
   else{
      humanPlay();
   }
   humanResults();
   setTimeout(() =>{
      generateRandomNum()
   }, 1000);
}

function generateRandomNum(){
   var items_index;
   var computer_selection = Math.floor(Math.random()*8);
   computer_selection = computer_selection.toString();
   var computer_player = document.getElementById(computer_selection);          
   if(computer_player.innerHTML === ""){
      computer_player.innerHTML = computer_name;
      items_index = check_boxes.indexOf(computer_player.id);
      check_boxes.splice(items_index,1);

   }
   else{
      if(check_boxes.length > 0){
      generateRandomNum();
      }
   
      return
   }
   humanResults();
}

var game_state = document.querySelector(".game-state h1");
var result = document.querySelector(".result-statement-area");
var hide_all_boxes = document.querySelector(".tic-tac-toe-grid");
var get_paying_spot = document.querySelectorAll(".playing-spot");

function playAgain(){
   for (var remove = 0; remove <= get_paying_spot.length; remove++){
      get_paying_spot[remove].innerHTML = "";
      check_boxes = ["0","1","2","3","4","5","6","7","8"];
      result.style.display = "none";
      hide_all_boxes.style.display = "grid";
      game_state.innerHTML = "GAME ON";
   }
}

function resetAll(){
   for (var remove = 0; remove <= get_paying_spot.length; remove++){
      get_paying_spot[remove].innerHTML = "";
      check_boxes = ["0","1","2","3","4","5","6","7","8"];
      result.style.display = "none";
      first_page.style.display = "block";

   }
   
}

function humanResults(){
   var a = document.getElementById("0");
   var b = document.getElementById("1");
   var c = document.getElementById("2");
   var d = document.getElementById("3");
   var e = document.getElementById("4");
   var f = document.getElementById("5");
   var g = document.getElementById("6");
   var h = document.getElementById("7");
   var i = document.getElementById("8");

   if(a.innerHTML === computer_name && b.innerHTML === computer_name && c.innerHTML === computer_name){
      score++;
      display_score[1].innerText +=  score;
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN";
   }

   else if(a.innerHTML === human_name && b.innerHTML === human_name && c.innerHTML === human_name){
      score++;
      display_score[0].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN";
   }

   else if(d.innerHTML === computer_name && e.innerHTML === computer_name && f.innerHTML === computer_name){
      score++;
      display_score[1].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN";
   }

   else if(d.innerHTML === human_name && e.innerHTML === human_name && f.innerHTML === human_name){
      score++;
      display_score[0].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN";
   }

   else if(g.innerHTML === computer_name && h.innerHTML === computer_name && i.innerHTML === computer_name){
      score++;
      display_score[1].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN";
   }

   else if(g.innerHTML === human_name && h.innerHTML === human_name && i.innerHTML === human_name){
      score++;
      display_score[0].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN";
   }

   else if(a.innerHTML === computer_name && d.innerHTML === computer_name && g.innerHTML === computer_name){
      score++;
      display_score[1].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN";
   }

   else if(a.innerHTML === human_name && d.innerHTML === human_name && g.innerHTML === human_name){
      score++;
      display_score[0].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN";
   }

   else if(b.innerHTML === computer_name && e.innerHTML === computer_name && h.innerHTML === computer_name){
      score++;
      display_score[1].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN";
   }

   else if(b.innerHTML === human_name && e.innerHTML === human_name && h.innerHTML === human_name){
      score++;
      display_score[0].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN";
   }

   else if(c.innerHTML === computer_name && f.innerHTML === computer_name && i.innerHTML === computer_name){
      score++;
      display_score[1].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN";
   }

   else if(c.innerHTML === human_name && f.innerHTML === human_name && i.innerHTML === human_name){
      score++;
      display_score[0].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN";
   }

   else if(c.innerHTML === computer_name && e.innerHTML === computer_name && g.innerHTML === computer_name){
      display_score[1].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN";
   }

   else if(c.innerHTML === human_name && e.innerHTML === human_name && g.innerHTML === human_name){
      score++;
      display_score[0].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN";
   }

   else if(a.innerHTML === computer_name && e.innerHTML === computer_name && i.innerHTML === computer_name){
      score++;
      display_score[1].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN";
   }

   else if(a.innerHTML === human_name && e.innerHTML === human_name && i.innerHTML === human_name){
      score++;
      display_score[0].innerText +=  score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN";
   }
   else{
      var draw_check = 9;
      
      for(var boxes = 0; boxes < get_paying_spot.length; boxes++){
         
         if(get_paying_spot[boxes].innerText !== ""){
            draw_check -= 1;
         }
      }

      if(draw_check === 0){
         game_state.innerHTML = "GAME OVER";
         hide_all_boxes.style.display = "none";
         result.style.display = "block";
         result.innerHTML = "GAME DRAW";
      }
   }
}