document.addEventListener("DOMContentLoaded", (function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                setInterval(timer, 1000);
            } 
        });
    }
}));

var myTimerObj = (function(document){
   
  var myTimer;

  function start() {
    myTimer = setInterval(myClock, 1000);
    var count = 11;

    function myClock() {
      document.getElementById("timerContent").innerHTML = --count;
      if (count == 0) {
        clearInterval(myTimer);
        alert("BOOM!");
      }
    }
  }
  
  function end() {
      clearInterval(myTimer)
  }

  return {start:start, end:end};
})(document);

function getRandomColor(arr) {

  const randomIndex = Math.floor(Math.random() * arr.length);

  const color = arr[randomIndex];

  return color;
}

var colorArray = ['red', 'green', 'blue', 'orange', 'yellow'];


function setRandomColor() {
  $("#color1").css("background-color", getRandomColor(colorArray));
  $("#color2").css("background-color", getRandomColor(colorArray));
  $("#color3").css("background-color", getRandomColor(colorArray));
  $("#color4").css("background-color", getRandomColor(colorArray));
  $("#color5").css("background-color", getRandomColor(colorArray));
  $("#color6").css("background-color", getRandomColor(colorArray));
  $("#color7").css("background-color", getRandomColor(colorArray));
  $("#color8").css("background-color", getRandomColor(colorArray));
  $("#color9").css("background-color", getRandomColor(colorArray));
}

function changeColorOne() {
  $("#color1").css("background-color", getRandomColor(colorArray));
}

function changeColorOne() {
  $("#color1").css("background-color", getRandomColor(colorArray));
}

function changeColorTwo() {
  $("#color2").css("background-color", getRandomColor(colorArray));
}

function changeColorThree() {
  $("#color3").css("background-color", getRandomColor(colorArray));
}

function changeColorFour() {
  $("#color4").css("background-color", getRandomColor(colorArray));
}

function changeColorFive() {
  $("#color5").css("background-color", getRandomColor(colorArray));
}

function changeColorSix() {
  $("#color6").css("background-color", getRandomColor(colorArray));
}

function changeColorSeven() {
  $("#color7").css("background-color", getRandomColor(colorArray));
}

function changeColorEight() {
  $("#color8").css("background-color", getRandomColor(colorArray));
}

function changeColorNine() {
  $("#color9").css("background-color", getRandomColor(colorArray));
}
