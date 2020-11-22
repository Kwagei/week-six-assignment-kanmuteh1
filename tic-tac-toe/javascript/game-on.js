 // selecting player character
 var human_name;
 var computer_name;
 function playerCatSelection(select){
   human_name = document.getElementById(select.target.id).innerHTML;
   if(human_name === "x"){
      computer_name = "o";
   }

   else if(human_name === "o"){
      computer_name = "x";
   }
  
}


var players_scores = document.querySelectorAll(".players")

var score;

var check_boxes = ["0","1","2","3","4","5","6","7","8"];

function humanPlay(human){
   var humanId = document.getElementById(human.target.id);
   if(humanId.innerHTML === ""){
      human_name = humanId.innerHTML;
      console.log(human_name)
      var items_index1 = check_boxes.indexOf(humanId.id).toString();
      check_boxes.splice(items_index1,1);
   }
   humanResults();
   generateRandomNum();
}

function generateRandomNum(){
   var items_index;
   var computer_selection = Math.floor(Math.random()*8);
   computer_selection = computer_selection.toString();
   var computer_player = document.getElementById(computer_selection);          
   if(computer_player.innerHTML === ""){
      computer_name = computer_player.innerHTML;
      console.log(computer_name)
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

function resetAll(){
   var reset = document.querySelectorAll(".playing-spot");
   for (var remove = 0; remove <= reset.length; remove++){
      reset[remove].innerHTML = "";
      check_boxes = ["0","1","2","3","4","5","6","7","8"]
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
   if(a.innerHTML === "x" && b.innerHTML === "x" && c.innerHTML === "x"){
      alert("computer win")
      score++;
   }

   else if(a.innerHTML === "o" && b.innerHTML === "o" && c.innerHTML === "o"){
      alert("you win")
      score++;
   }

   else if(d.innerHTML === "x" && e.innerHTML === "x" && f.innerHTML === "x"){
      alert("computer win")
   }

   else if(d.innerHTML === "o" && e.innerHTML === "o" && f.innerHTML === "o"){
      alert("you win")
      score++;
   }

   else if(g.innerHTML === "x" && h.innerHTML === "x" && i.innerHTML === "x"){
      alert("you win")
      score++;
   }

   else if(g.innerHTML === "o" && h.innerHTML === "o" && i.innerHTML === "o"){
      alert("you win")
      score++;
   }

   else if(a.innerHTML === "x" && d.innerHTML === "x" && g.innerHTML === "x"){
      alert("computer win")
      score++;
   }

   else if(a.innerHTML === "o" && d.innerHTML === "o" && g.innerHTML === "o"){
      alert("you win")
      score++;
   }

   else if(b.innerHTML === "x" && e.innerHTML === "x" && h.innerHTML === "x"){
      alert("computer win")
      score++;
   }

   else if(b.innerHTML === "o" && e.innerHTML === "o" && h.innerHTML === "o"){
      alert("you win")
      score++;
   }

   else if(c.innerHTML === "x" && f.innerHTML === "x" && i.innerHTML === "x"){
      alert("computer win")
      score++;
   }

   else if(c.innerHTML === "o" && f.innerHTML === "o" && i.innerHTML === "o"){
      alert("you win")
      score++;
   }

   else if(c.innerHTML === "x" && e.innerHTML === "x" && g.innerHTML === "x"){
      alert("computer win")
   }

   else if(c.innerHTML === "o" && e.innerHTML === "o" && g.innerHTML === "o"){
      alert("you win")
      score++;
   }

   else if(a.innerHTML === "x" && e.innerHTML === "x" && i.innerHTML === "x"){
      alert("computer win")
      score++;
   }

   else if(a.innerHTML === "o" && e.innerHTML === "o" && i.innerHTML === "o"){
      alert("you win")
      score++;
   }
}