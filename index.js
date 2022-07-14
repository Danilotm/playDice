// Get playButton by ID
var playButton = document.querySelector('#playButton');
var dice1 = document.getElementsByTagName("img")[0];
var dice2 = document.getElementsByTagName("img")[1];
var heading = document.getElementsByTagName("h1")[0];

playButton.addEventListener("click", function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imgSrc1 = `/images/dice${randomNumber1}.png`;
    var imgSrc2 = `/images/dice${randomNumber2}.png`;
    // Changing button text
    playButton.innerHTML = "Play Again";

    // Changing dice images based on random numbers
    dice1.setAttribute("src", imgSrc1);
    dice2.setAttribute("src", imgSrc2);
    

    // Comparing numbers to display the results
    if(randomNumber1 > randomNumber2) {
        heading.innerHTML = "Player 1 Wins! 🚩";
    } else 
    if(randomNumber1 < randomNumber2) {
        heading.innerHTML = " 🚩 Player 2 Wins!";
    } else {
        heading.innerHTML = "Draw";
    }
});

