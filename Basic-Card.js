// These are the variables
var inquirer = require("inquirer");
var basicGameArr = [];
var self = this;

//Constructor for basic flashcards
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

//Questions and Answers to push into the array variable

basicGameArr.push(new BasicCard("What is the Incredible Hulk's real name?", "Bruce Banner"),
    new BasicCard("What is Spider-Man's real name?", "Peter Parker"),
    new BasicCard("What is the hero Cyclop's real name?", "Scott Summers"));


var count = 0;

// Ask the questions as long as the count is less than the number of questions
self.basicCardQuestion = function() {
    if (count < basicGameArr.length) {
        //Display the questions one by one on the console
        inquirer.prompt([{
            name: "question",
            message: basicGameArr[count].front
        }]).then(function(answer) {
            var useranswer = answer.question;
            var backOfCard = basicGameArr[count].back;

            if ((useranswer === backOfCard) || (useranswer === backOfCard.toLowerCase()) || (useranswer === backOfCard.toUpperCase())) {
                console.log("Great! " + useranswer + " is correct!");
                count++;
                //Ask the follwing question
                self.basicCardQuestion();
            } else {
                console.log("Ooops! " + basicGameArr[count].back + " is the correct answer.");
                count++;
                self.basicCardQuestion();
            }

        });

    } else {
        console.log("End of the Game!");
    }
};