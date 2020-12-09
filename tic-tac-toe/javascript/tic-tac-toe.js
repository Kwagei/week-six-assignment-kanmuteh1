// tic-tac-toe pages variables
var tic_tac_toe = document.querySelector(".tic-tac-toe-intro-container");
var game_on = document.querySelector(".game-on-container");
var first_page = document.querySelector(".first-page");
var game_end = false;
// selecting player character
var human_name;
var computer_name;
// setting  scores for both players
var human_score = 0;
var computer_score = 0;
var draw = 0;
var human_score_display = document.getElementById("human-score");
var computer_score_display = document.getElementById("computer-score");
var draw_display = document.getElementById("draw");
// player choice to play in a way and instruction variable
var single_player = document.querySelector(".single-player-items"); 
var two_players = document.querySelector(".two-players-items");
var instructions = document.querySelector(".instruction-box");
// selected choices variable
var instructions_list = document.querySelector(".instructions-list");
var display_two_players_cat = document.querySelector(".two-players-characters");
var display_single_player_cat = document.querySelector(".single-player-characters");
// writing game state
var game_state = document.querySelector(".game-state h1");
// game results variable
var result = document.querySelector(".result-statement-area");
// playing_spot host div
var hide_all_boxes = document.querySelector(".tic-tac-toe-grid");
// play again fnx
var get_playing_spot = document.querySelectorAll(".playing-spot");
// players foot print
var check_boxes = ["0","1","2","3","4","5","6","7","8"];
//next page btn fnx
function moveToNextPage(){
   first_page.style.display = "none";
   tic_tac_toe.style.display = "block";
}

var num_of_player = 0;

// show only single player properties and hide two-players and instructions btns
function wayToPlay(select){
  if (select.target.id === "single_player1"){
   num_of_player = 1;
   two_players.style.display = "none";
   instructions.style.display = "none";
   display_single_player_cat.style.display = "block";
  }
   
  else if(select.target.id === "two_players1"){
   single_player.style.display = "none";
   instructions.style.display = "none";
   display_two_players_cat.style.display = "block";
  }
}
// show only inttructions and hide single and two players properties
function showInstructionsItemsOnly(){
   single_player.style.display = "none";
   two_players.style.display = "none";
   instructions_list.style.display = "block";
}

// selecting player character
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

// human player fnx
function humanPlay(human){
   var humanId = document.getElementById(human.target.id);
   if(humanId.innerHTML === ""){
      humanId.innerHTML = human_name;
      var items_index1 = check_boxes.indexOf(humanId.id).toString();
      check_boxes.splice(items_index1,1);
      results();
      if (num_of_player === 1){
         if(game_end === false){
               setTimeout(() =>{
               generateRandomNum()
            }, 1000);
         }
      }
      else{
         get_playing_spot.forEach(ele=>{
            document.getElementById(ele.id).setAttribute("onclick","humanPlay2(event)")
         })
      }

   } 
}

function humanPlay2(human2){
   get_playing_spot.forEach(ele=>{
      document.getElementById(ele.id).setAttribute("onclick","humanPlay(event)")
   })
   var humanId = document.getElementById(human2.target.id);
   if(humanId.innerHTML === ""){
      humanId.innerHTML = computer_name;
      var items_index2 = check_boxes.indexOf(humanId.id).toString();
      check_boxes.splice(items_index2,1);
      results();  
   } 
}

// computer fnx

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
   results();
}

function playAgain(){
   for (var remove1 = 0; remove1 < get_playing_spot.length; remove1++){
      get_playing_spot[remove1].innerHTML = "";
      check_boxes = ["0","1","2","3","4","5","6","7","8"];
      result.style.display = "none";
      hide_all_boxes.style.display = "grid";
      game_state.innerHTML = "GAME ON";
      game_end = false
   }
}
// restart fnx
function resetAll(){
   window.location.reload();
}
// menu fnx
function backToMenu(){
   for (var remove = 0; remove < get_playing_spot.length; remove++){
      get_playing_spot[remove].innerHTML = "";
      check_boxes = ["0","1","2","3","4","5","6","7","8"];
      result.style.display = "none";
      tic_tac_toe.style.display = "block";
      game_on.style.display = "none";
      single_player.style.display = "block";
      two_players.style.display = "block";
      instructions.style.display = "block";
      instructions_list.style.display = "none"
      display_single_player_cat.style.display = "none";
      display_two_players_cat.style.display = "none";
   }
}

// results fnx
function results(){
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
      game_end = true;
      computer_score++;
      computer_score_display.innerHTML = computer_score;
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN <br>" + computer_score;
   }

   else if(a.innerHTML === human_name && b.innerHTML === human_name && c.innerHTML === human_name){
      game_end = true;
      human_score++;
      human_score_display.innerHTML = human_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN <br>" + human_score;
   }

   else if(d.innerHTML === computer_name && e.innerHTML === computer_name && f.innerHTML === computer_name){
      game_end = true;
      computer_score++;
      computer_score_display.innerHTML = computer_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN <br>" + computer_score;
   }

   else if(d.innerHTML === human_name && e.innerHTML === human_name && f.innerHTML === human_name){
      game_end = true;
      human_score++;
      human_score_display.innerHTML = human_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN <br>" + human_score;
   }

   else if(g.innerHTML === computer_name && h.innerHTML === computer_name && i.innerHTML === computer_name){
      game_end = true;
      computer_score++;
      computer_score_display.innerHTML = computer_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN <br>" + computer_score;
   }

   else if(g.innerHTML === human_name && h.innerHTML === human_name && i.innerHTML === human_name){
      game_end = true;
      human_score++;
      human_score_display.innerHTML = human_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN <br>" + human_score;
   }

   else if(a.innerHTML === computer_name && d.innerHTML === computer_name && g.innerHTML === computer_name){
      game_end = true;
      computer_score++;
      computer_score_display.innerHTML = computer_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN <br>" + computer_score;
   }

   else if(a.innerHTML === human_name && d.innerHTML === human_name && g.innerHTML === human_name){
      game_end = true;
      human_score++;
      human_score_display.innerHTML = human_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN <br>" + human_score;
   }

   else if(b.innerHTML === computer_name && e.innerHTML === computer_name && h.innerHTML === computer_name){
      game_end = true;
      computer_score++;
      computer_score_display.innerHTML = computer_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN <br>" + computer_score;
   }

   else if(b.innerHTML === human_name && e.innerHTML === human_name && h.innerHTML === human_name){
      game_end = true;
      human_score++;
      human_score_display.innerHTML = human_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN <br>" + human_score;
   }

   else if(c.innerHTML === computer_name && f.innerHTML === computer_name && i.innerHTML === computer_name){
      game_end = true;
      computer_score++;
      computer_score_display.innerHTML = computer_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN <br>" + computer_score;
   }

   else if(c.innerHTML === human_name && f.innerHTML === human_name && i.innerHTML === human_name){
      game_end = true;
      human_score++;
      human_score_display.innerHTML = human_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN <br>" + human_score;
   }

   else if(c.innerHTML === computer_name && e.innerHTML === computer_name && g.innerHTML === computer_name){
      game_end = true;
      computer_score++;
      computer_score_display.innerHTML = computer_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN <br>" + computer_score;
   }

   else if(c.innerHTML === human_name && e.innerHTML === human_name && g.innerHTML === human_name){
      game_end = true;
      human_score++;
      human_score_display.innerHTML = human_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN <br>" + human_score;
   }

   else if(a.innerHTML === computer_name && e.innerHTML === computer_name && i.innerHTML === computer_name){
      game_end = true;
      computer_score++;
      computer_score_display.innerHTML = computer_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "COMPUTER WIN <br>" + computer_score;
   }

   else if(a.innerHTML === human_name && e.innerHTML === human_name && i.innerHTML === human_name){
      game_end = true;
      human_score++;
      human_score_display.innerHTML = human_score;
      game_state.innerHTML = "GAME OVER";
      hide_all_boxes.style.display = "none";
      result.style.display = "block";
      result.innerHTML = "YOU WIN <br>" + human_score;
   }
   else{
      var draw_check = 9;
      
      for(var boxes = 0; boxes < get_playing_spot.length; boxes++){
         
         if(get_playing_spot[boxes].innerText !== ""){
            draw_check -= 1;
         }
      }

      if(draw_check === 0){
         draw++;
         draw_display.innerHTML = draw;
         game_state.innerHTML = "GAME OVER";
         hide_all_boxes.style.display = "none";
         result.style.display = "block";
         result.innerHTML = "GAME DRAW <br>" + draw++;
      }
   }
}