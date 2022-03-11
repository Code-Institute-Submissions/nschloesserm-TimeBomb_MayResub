document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                setInterval(timer, 1000);
            } 
        });
    }
});

let count = 10;

function timer () {
  if(count > 0){
    document.getElementById("timerContent").innerText = count;
    count--;
  } else if(count === 0){
    document.getElementById("timerContent").innerText = "BOOM!!!";
  }
};

