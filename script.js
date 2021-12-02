var img = document.getElementById("arona1");
var count = document.getElementById("score");
var score = 0;
var audio = new Audio("pop.mp3");

function increaseScore(){
    score++;
    count.innerHTML = score;
};

img.addEventListener(('mousedown', 'touchstart', 'click'), function (){
        increaseScore();
        img.src = 'arona_2.png';
        return audio.play();
});

img.addEventListener(('mouseup', 'touchend'), function (){
    img.src = 'arona_1.png';
    return audio.play();
});
/*
img.addEventListener('touchstart', function(){
    increaseScore();
    img.src = 'arona_2.png';
    return audio.play();
});

img.addEventListener('touchend', function(){
    img.src = 'arona_1.png';
    return audio.play();
});
*/


