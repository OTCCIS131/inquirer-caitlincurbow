const chalk = require('chalk')
var inquirer = require('inquirer')

let questions = [{
    type: "list",
    message: "What size pizza would you like?",
    name: "pizzaSize",
    default: "medium",
    choices: ["tiny", "small", "medium", "large", "Xlarge", "SuperLarge"]
},
{
    type: "checkbox",
    message: "What kind of toppings?",
    name: "topping",
    default: "hella cheese",
    choices: ["NONE", "Italian Sausage", "Pepperoni", "hella cheese", "canadian bacon", "hamburger", "bacon"]
},
{
    type: "list",
    message: "What kind of sauce? ",
    name: "sauce",
    default: "traditional",
    choices: ["traditional", "alfredo", "no sauce"]
}]

let order = [{
    type: "confirm",
    message: "Does the order look correct? ",
    name: "order"
}]

inquirer.prompt(questions).then(function (answers)
{
    console.log(chalk.italic.underline.magenta("------->YOUR ORDER<-------"))
    console.log(chalk.bold.cyan("Size: ") + answers.pizzaSize)
    console.log(chalk.bold.cyan("Topping's: ") + answers.topping)
    console.log(chalk.bold.cyan("Sauce type: ") + answers.sauce)

    inquirer.prompt(order).then(function(answers){
        if(answers.order === true){
            console.log(chalk.yellow("OHHHH YEAHHH, pizza  is on its way!!"))
        }
        else{
            console.log(chalk.red("Sorry boutcha, no pizza."))
        }
    })
})

