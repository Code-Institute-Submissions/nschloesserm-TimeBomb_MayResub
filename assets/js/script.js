document.addEventListener("DOMContentLoaded", (function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        setRandomColor();
        myTimerObj.start();
        setRandomColorWord();
        checkBoardColor()
      }
    });
  }
}));

function checkBoardColor() {
  let var1 = document.getElementById("color1").style.cssText;
  let var2 = document.getElementById("color2").style.cssText;
  let var3 = document.getElementById("color3").style.cssText;
  let var4 = document.getElementById("color4").style.cssText;
  let var5 = document.getElementById("color5").style.cssText;
  let var6 = document.getElementById("color6").style.cssText;
  let var7 = document.getElementById("color7").style.cssText;
  let var8 = document.getElementById("color8").style.cssText;
  let var9 = document.getElementById("color9").style.cssText;

  let var10 = document.getElementById("colorWord").textContent.toLowerCase();
  let var11 = `background-color: ${var10};`
  var array1 = [var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11];

  console.log(array1)
}
//timer figured out through stack overflow 

var myTimerObj = (function (document) {

  var myTimer;

  function start() {
    myTimer = setInterval(myClock, 1000);
    var count = 11;

    function myClock() {
      document.getElementById("timerContent").innerHTML = --count;
      if (count == 0) {
        clearInterval(myTimer);
        document.getElementById("colorWord").innerHTML = "BOOM!!!";
        document.getElementById("colorWord").style = "color: red;"
      }
    }
  }

  function end() {
    clearInterval(myTimer)
  }

  return {
    start: start,
    end: end
  };
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

function getRandomColorWord(arr) {

  const randomIndex = Math.floor(Math.random() * arr.length);

  const colorWord = arr[randomIndex];

  return colorWord;
}

var colorWordArray = ['red', 'green', 'blue', 'orange', 'yellow'];


function setRandomColorWord() {
  document.getElementById("colorWord").innerHTML = getRandomColorWord(colorWordArray).toUpperCase();
  $("#colorWord").css("color", getRandomColor(colorArray));
}