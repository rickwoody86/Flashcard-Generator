// These are the variables
var inquirer = require("inquirer");
var clozeGameArr = [];
var self = this;

//Constructor for Cloze-Deleted flashcards
var ClozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
}

//This method returns the partial text.
ClozeCard.prototype.partial = function() {

    if (this.text.indexOf(this.cloze) === 0) {
        return this.text.replace(this.cloze, '...');
    } else {
        var notExist = " doesn\'t exist in ";
        return "'" + this.cloze + "'" + notExist + "'" + this.text + "'";

    }
};

//Questions and Answers to push into the array variable

clozeGameArr.push(new ClozeCard("Bruce Banner is the real name of the Incredible Hulk.", "Bruce Banner"),
    new ClozeCard("Peter Parker is the real name of Spider-Man.", "Peter Parker"),
    new ClozeCard("Scott Summers is the real name of the hero Cyclops.", "Scott Summers"));


var count = 0;

// Ask the questions as long as the count is less than the number of questions
self.clozeCardQuestion = function() {
    if (count < clozeGameArr.length) {
        //Display the questions one by one on the console
        inquirer.prompt([{
            name: "question",
            message: clozeGameArr[count].partial()
        }]).then(function(answer) {
            var useranswer = answer.question;
            var backOfCard = clozeGameArr[count].cloze;

            if ((useranswer === backOfCard) || (useranswer === backOfCard.toLowerCase()) || (useranswer === backOfCard.toUpperCase())) {
                console.log("Great! " + useranswer + " is correct!");
                console.log(clozeGameArr[count].text);
                count++;
                //Ask the follwing question
                self.clozeCardQuestion();
            } else {
                console.log("Ooops! " + useranswer + " is an incorrect answer.");
                console.log("The correct answer is: " + backOfCard);
                console.log(clozeGameArr[count].text);
                count++;
                self.clozeCardQuestion();
            }

        });

    } else {
        console.log("End of the Game!");
    }
};