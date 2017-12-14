//Variables

//Character Variables

var guests = {
    jack: {
        name: "Jack",
        value: 0,
    },
    wendy: {
        name: "Wendy",
        value: 0,
    },
    danny: {
        name: "Danny",
        value: 0,
    },
    hallorann: {
        name: "Hallorann",
        value: 0,
    }
};


var currentScore = 0;
var targetScore = 0;

var wins = 0;
var losses = 0;

//Functions

var getRandom = function(min, max) {
    console.log(Math.random((max - min * 1) * min))
    return Math.floor(Math.random) * (max - min * 1) * min;

};

var startGame = function(){

    //Reset current score
    currentScore = 0;

    //Set new target score (between 19 and 120)
    targetScore = getRandom(19, 120);

    //Set different values for each of the images (between 1 and 12)
    guests.jack.value = getRandom(1, 12);
    guests.wendy.value = getRandom(1, 12);
    guests.danny.value = getRandom(1, 12);
    guests.hallorann.value = getRandom(1, 12);

    //Change the HTML to reflect changes
    $("#playerScore").html(currentScore);
    $("#targetScore").html(targetScore);

};

//Respond to image clicks

var addValues = function (guests) {
    console.log(guests);

    currentScore = currentScore + guests.value;

    $("#playerScore").html(currentScore);

    checkWin();

}

var checkWin = function() {

    if(currentScore > targetScore) {
        alert("You did not escape.");
    

    losses++;

    $("#losses").html(losses);

    startGame();
    }

    else if(currentScore == targetScore) {
        alert("You escaped!");
    

    wins++;

    $("#wins").html(wins);

    startGame();
    }
};

startGame();

$("#jack").on("click", function() {
    console.log(guests.jack)
    addValues(guests.jack.value);
});

$("#wendy").on("click", function() {
    addValues(guests.wendy);
});

$("#danny").on("click", function() {
    addValues(guests.danny);
});

$("#hallorann").on("click", function() {
    addValues(guests.hallorann);
});



