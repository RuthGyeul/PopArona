var img = document.getElementById("arona_1.jpeg");
var count = document.getElementById("score");
var score = 0;
var audio = new Audio("sonic-ring.mp3");

img.addEventListener('mousedown', function (){\
    increaseScore();
    img.src = 'arona_2.jpeg';
    //audio.play();
});

img.addEventListener('mouseup', function (){
    img.src = 'arona_1.jpeg';
    //audio.play();
});

img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'arona_2.jpeg';
    //audio.play();
});

img.addEventListener("touchmove", function(){
    img.src = 'arona_1.jpeg';
    //audio.play();
});

function increaseScore(){
    score++;
    count.innerHTML = score;
};
