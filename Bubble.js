var timeDuration = 30;
var score = 0;
var hitrn = 0;

var backgroundMusic = document.querySelector("#backgroundMusic");


function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function hitBubble() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
  var dabba = "";
  for (var i = 1; i < 169; i++) {
    var rn = Math.floor(Math.random() * 10);
    dabba += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = dabba;
}

function timerControl() {
  var timeInt = setInterval(function () {
    if (timeDuration > 0) {
      timeDuration--;
      document.querySelector("#timerval").textContent = timeDuration;
    } else {
      clearInterval(timeInt);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Your Score is ${score} Out of 150 <h1>`;
      backgroundMusic.pause();
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  console.log(clickedNum);
  if (clickedNum === hitrn) {
    console.log("increase score");
    increaseScore();
    makeBubble();
    hitBubble();
  } else {
    document.querySelector("#pbtm").innerHTML = `<h1>Wrong hit<h1>`;
    backgroundMusic.pause();
  }
});

if (score ==150) {
  document.querySelector(
    "#pbtm"
  ).innerHTML = `<h1>Cogratulations Successful Person!!<h1>`;
}

backgroundMusic.play();

timerControl();
hitBubble();
makeBubble();
