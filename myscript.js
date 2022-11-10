alert("hello");
const musicSound = new Audio("music.mp3");
const gameOverSound = new Audio("death.mp3");
score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("key code is:" + e.keyCode);

    setTimeout(() => {
        musicSound.play();
    }, 1000)
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");

        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 700)
    }
    //dino moving forward
    if (e.keyCode == 39) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinox + 112 + "px";
    }

    if (e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinox - 112 + "px";
    }
}

//display the gameOver

setInterval(() => {

    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    dragon = document.querySelector(".dragon");


    dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dinoy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));


    dragonx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"));
    dragony = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"));

    offsetX = Math.abs(dinox - dragonx);
    offsetY = Math.abs(dinoy - dragony);

    if (offsetX < 73 && offsetY < 52) {

        gameOver.style.visibility = "visible";
        gameOverSound.play();

        setTimeout(() => {
            gameOverSound.pause();
            musicSound.pause();
        }, 1000)
        dragon.classList.remove("dragonAni");
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 1000)


        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle("dargon, null").getPropertyValue("animation-duration"));
            newDur = aniDur - 0.1;
            dragon.style.animationduration = newDur + "3";
            console.log("new animation-duration:" + newDur);
        }, 500)
    }
}, 100)

function updateScore(score) {
    scoreCount.innerHTML = "your score:" + score;
}