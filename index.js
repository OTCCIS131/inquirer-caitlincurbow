const chalk = require('chalk')
var inquirer = require('inquirer')

let questions = [{
    type : "list",
    message : "Please select a size pizza!!",
    small : "small",
    medium : "medium",
    large : "large",
    superLarge : "Super Large"
},
{

}]

inquirer.prompt(questions).then(function (answers){

    
})