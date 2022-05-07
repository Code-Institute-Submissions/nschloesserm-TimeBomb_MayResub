document.addEventListener("DOMContentLoaded", (function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        setRandomColor();
        myTimerObj.start();
        setRandomColorWord();
        document.getElementById("startscreen").style.visibility = "hidden";
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
  let var10 = document.getElementById("color10").style.cssText;
  let var11 = document.getElementById("color11").style.cssText;
  let var12 = document.getElementById("color12").style.cssText;
  let var13 = document.getElementById("color13").style.cssText;
  let var14 = document.getElementById("color14").style.cssText;
  let var15 = document.getElementById("color15").style.cssText;
  let var16 = document.getElementById("color16").style.cssText;


  let var17 = document.getElementById("colorWord").textContent.toLowerCase();
  let var18 = `background-color: ${var17};`;
  var array1 = [var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13, var14, var15, var16];

  if (array1.includes(var18)) {
    wrongAnswer();
  } else if (document.getElementById("colorWord").innerHTML.includes("BOOM!!!")) {
    wrongAnswer();
  } else if (document.getElementById("timerContent").innerHTML.includes("5")) {
    document.getElementById("startscreen").style.visibility = "visible";
  } else {
    correctAnswer();
  }
}

function correctAnswer() {
  document.getElementById("leveltwoscreen").style.visibility = "visible";

}

function wrongAnswer() {
  document.getElementById("colorWord").innerHTML = "BOOM!!!";
  document.getElementById("colorWord").style = "color: red;";
  document.getElementById("explosionImage").style.visibility = "visible";

}
//timer figured out through stack overflow

var myTimerObj = (function (document) {

  var myTimer;

  function start() {
    myTimer = setInterval(myClock, 1000);
    var count = 6;

    function myClock() {
      document.getElementById("timerContent").innerHTML = --count;
      if (count == 0) {
        clearInterval(myTimer);
        wrongAnswer();
      }
    }
  }

  function end() {
    clearInterval(myTimer);
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
  $("#color10").css("background-color", getRandomColor(colorArray));
  $("#color11").css("background-color", getRandomColor(colorArray));
  $("#color12").css("background-color", getRandomColor(colorArray));
  $("#color13").css("background-color", getRandomColor(colorArray));
  $("#color14").css("background-color", getRandomColor(colorArray));
  $("#color15").css("background-color", getRandomColor(colorArray));
  $("#color16").css("background-color", getRandomColor(colorArray));
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

function changeColorTen() {
  $("#color10").css("background-color", getRandomColor(colorArray));
}

function changeColorEleven() {
  $("#color11").css("background-color", getRandomColor(colorArray));
}

function changeColorTwelve() {
  $("#color12").css("background-color", getRandomColor(colorArray));
}

function changeColorThirteen() {
  $("#color13").css("background-color", getRandomColor(colorArray));
}

function changeColorFourteen() {
  $("#color14").css("background-color", getRandomColor(colorArray));
}

function changeColorFifteen() {
  $("#color15").css("background-color", getRandomColor(colorArray));
}

function changeColorSixteen() {
  $("#color16").css("background-color", getRandomColor(colorArray));
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
