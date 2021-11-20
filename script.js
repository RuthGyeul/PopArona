window.onload = function(){
    var img = document.getElementById("arona_1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("sonic-ring.mp3");

    img.addEventListener('mousedown', function (){
        audio.play();
        img.src = 'arona_2.jpeg';
        increaseScore();
    });

    img.addEventListener('mouseup', function (){
        audio.play();
        img.src = 'arona_1.jpeg';
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}
