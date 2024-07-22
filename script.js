let timer = 30;
let hitNum = 0;
let score = 0;
function makeBubbles() {
  let clutter = "";
  for (var i = 1; i <= 198; i++) {
    const randomNum = Math.floor(Math.random() * 10);
    clutter += `<div class="buble size-10 justify-center bg-green-400 rounded-full flex items-center"> ${randomNum}</div>`;
  }

  console.log("clutter", clutter);
  document.querySelector(".pbtm").innerHTML = clutter;
}
function Target() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector(".hit").innerText = hitNum;
}
function runTimer() {
  const stop = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector(".timer").textContent = timer;
    } else {
      clearInterval(stop);
      document.querySelector(".pbtm").innerHTML = ` 
                <div class= "flex flex-col h-full w-full items-center justify-center  ">
            <h1 class="text-xl font-bold ">Game Over</h1>
            </div> 
            `;
    }
  }, 1000);
}
function increaseScore() {   
  document.querySelector(".score").textContent = score;
  score += 10;
}
document
  .querySelector(".pbtm")
  .addEventListener("click", function newScore(event) {
    console.log("event.target.textContent", event.target.textContent);
    const clickNum = Number(event.target.textContent);
    if (clickNum === hitNum) {
      increaseScore();
      makeBubbles();
      Target();
    } else { 
    }
  });

makeBubbles();
runTimer();
increaseScore();
Target();
