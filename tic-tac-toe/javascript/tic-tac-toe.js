// tic-tac-toe pages variables
var tic_tac_toe = document.querySelector(".tic-tac-toe-intro-container");
var game_on = document.querySelector(".game-on-container");
var first_page = document.querySelector(".first-page");
var game_end = false;
// selecting player character
var human_name;
var computer_name;
// setting  scores for single player
var human_score = 0;
var computer_score = 0;
var draw = 0;
// setting score for two players
var player1_score = 0;
var player2_score = 0;
var draw2 = 0;
// setting  scores for two player
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
// variable to decide on single or double player
var num_of_player = 0;
//next page btn fnx
function moveToNextPage(){
   first_page.style.display = "none";
   tic_tac_toe.style.display = "block";
}
// show only single player properties and hide two-players and instructions btns
function wayToPlay(select){
  if (select.target.id === "single_player1"){
   num_of_player = 1;
   human_score_display.innerHTML = "HUMAN: " + human_score;
   computer_score_display.innerHTML = "COMPUTER: " + computer_score;
   draw_display.innerHTML = "DRAW: "+ draw;
   two_players.style.display = "none";
   instructions.style.display = "none";
   display_single_player_cat.style.display = "block";
  }
   
  else if(select.target.id === "two_players1"){
   p = 2;
   human_score_display.innerHTML = "PLAYER 1: " + player1_score;
   computer_score_display.innerHTML = "PLAYER 2: " + player2_score;
   draw_display.innerHTML = "DRAW: "+ draw2;
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
// first xhuman player fnx
function humanPlay(human){
   var humanId = document.getElementById(human.target.id);
   if(humanId.innerHTML === ""){
      humanId.innerHTML = human_name;
      var items_index1 = check_boxes.indexOf(humanId.id).toString();
      check_boxes.splice(items_index1,1);
      var get_result = results(human_name);
      if(get_result === "win"){
         if(num_of_player === 1){
            human_score++;
            human_score_display.innerHTML = "HUMAN: " + human_score;
            checkForPlayer("HUMAN WIN",human_score);
         }
         else{
            human_score++;
            human_score_display.innerHTML = "PLAYER 1: " + human_score;
            checkForPlayer("PLAYER 1 WIN",human_score);
         }
      }

      if (num_of_player === 1){
         for (human = 0; human < get_playing_spot.length; human++){
            get_playing_spot[human].style.pointerEvents = 'none';
         }
         if(game_end === false){
               setTimeout(() =>{
               generateRandomNum();
            }, 1000);
         }
      }
       else{
         changePlayer("humanPlay2(event)")
      }
   } 
}
// changing player
function changePlayer (player){
   get_playing_spot.forEach(ele =>{
      document.getElementById(ele.id).setAttribute("onclick",player)
   })
}
// second human player fnx
function humanPlay2(human2){
   var humanId = document.getElementById(human2.target.id);
   if(humanId.innerHTML === ""){
      humanId.innerHTML = computer_name;
      changePlayer("humanPlay(event)")
      var items_index2 = check_boxes.indexOf(humanId.id).toString();
      check_boxes.splice(items_index2,1);
      var get_results = results(computer_name);
      if(get_results === "win"){
         player2_score++;
         computer_score_display.innerHTML = "PLAYER 2: " + player2_score;
         checkForPlayer("PLAYER 2 WIN",player2_score)
      } 
   } 
}
// computer fnx
function generateRandomNum(){
   var items_index;
   var computer_selection = Math.floor(Math.random()*8);         
   if(get_playing_spot[computer_selection].innerHTML === ""){
      get_playing_spot[computer_selection].innerHTML = computer_name;
      var get_result = results(computer_name);
      if(get_result === "win"){
         computer_score++;
         computer_score_display.innerHTML = "COMPUTER: " + computer_score;
         checkForPlayer("COMPUTER WIN",computer_score)
      }
      items_index = check_boxes.indexOf(get_playing_spot[computer_selection].innerHTML.id);
      check_boxes.splice(items_index,1);
      for (let human = 0; human < get_playing_spot.length; human++){
         get_playing_spot[human].removeAttribute("style");
      }
   }
   else{
      if(check_boxes.length > 0){
      generateRandomNum();
      }
   }
}
// to start a new game
function playAgain(){
   for (var remove1 = 0; remove1 < get_playing_spot.length; remove1++){
      get_playing_spot[remove1].innerHTML = "";
      check_boxes = ["0","1","2","3","4","5","6","7","8"];
      result.style.display = "none";
      hide_all_boxes.style.display = "grid";
      game_state.innerHTML = "GAME ON";
      game_end = false
   }

   for (let human = 0; human < get_playing_spot.length; human++){
      get_playing_spot[human].removeAttribute("style");
   }

   changePlayer("humanPlay(event)")
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
function results(winner){
   if(get_playing_spot[0].innerHTML === winner && get_playing_spot[1].innerHTML === winner && get_playing_spot[2].innerHTML === winner){
      game_end = true;
      return "win"
   }else if(get_playing_spot[3].innerHTML === winner && get_playing_spot[4].innerHTML === winner && get_playing_spot[5].innerHTML === winner){
      game_end = true;
      return "win"
   }else if(get_playing_spot[6].innerHTML === winner && get_playing_spot[7].innerHTML === winner && get_playing_spot[8].innerHTML === winner){
      game_end = true;
      return "win"
   }else if(get_playing_spot[0].innerHTML === winner && get_playing_spot[3].innerHTML === winner && get_playing_spot[6].innerHTML === winner){
      game_end = true;
      return "win"
   }else if(get_playing_spot[1].innerHTML === winner && get_playing_spot[4].innerHTML === winner && get_playing_spot[7].innerHTML === winner){
      game_end = true;
      return "win"
   }else if(get_playing_spot[2].innerHTML === winner && get_playing_spot[5].innerHTML === winner && get_playing_spot[8].innerHTML === winner){
      game_end = true;
      return "win"
   }else if(get_playing_spot[0].innerHTML === winner && get_playing_spot[4].innerHTML === winner && get_playing_spot[8].innerHTML === winner){
      game_end = true;
      return "win"
   }else if(get_playing_spot[2].innerHTML === winner && get_playing_spot[4].innerHTML === winner && get_playing_spot[6].innerHTML === winner){
      game_end = true;
      return "win"
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
         draw_display.innerHTML = "DRAW: "+ draw;
         game_state.innerHTML = "GAME OVER";
         hide_all_boxes.style.display = "none";
         result.style.display = "block";
         result.innerHTML = "GAME DRAW <br>" + draw;
      }
      return;
   }
}
// end the game
function endGame(){
   game_state.innerHTML = "GAME OVER";
   hide_all_boxes.style.display = "none";
}
// check for winner player
function checkForPlayer(current_winner,score){
   result.style.display = "block";
   result.innerHTML = `${current_winner}: ${score}`;
   endGame();
}
