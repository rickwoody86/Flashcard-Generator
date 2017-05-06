var basic = require("./Basic-Card.js");
var cloze = require("./Cloze-Card.js");
var inquirer = require('inquirer');

inquirer.prompt([{
    type: 'list',
    name: 'choice',
    message: 'Choose one of the flashcard games',
    choices: [
        'Basic flashcard',
        'Cloze-deleted flashcard'
    ]
}]).then(function(answer) {
    if (answer.choice == 'Basic flashcard') {
        basic.basicCardQuestion();
    } else {
        cloze.clozeCardQuestion();
    }

});