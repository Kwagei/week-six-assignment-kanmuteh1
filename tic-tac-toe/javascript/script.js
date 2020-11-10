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
