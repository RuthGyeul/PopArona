var img = document.getElementById("arona1");
var count = document.getElementById("score");
var score = 0;
var audio = new Audio("pop.mp3");

img.addEventListener('mousedown', function (){
    increaseScore();
    img.src = 'arona_2.png';
    audio.play();
});

img.addEventListener('mouseup', function (){
    img.src = 'arona_1.png';
    audio.play();
});

img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'arona_2.png';
    audio.play();
});

img.addEventListener("touchend", function(){
    img.src = 'arona_1.png';
    audio.play();
});

function increaseScore(){
    score++;
    count.innerHTML = score;
};
