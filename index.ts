#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

enum operators{
    Add="Addition",
    Subtraction="Subtraction",
    Multiplication="Multiplication",
    Division="Division"

}

const prompt= inquirer.createPromptModule();



    let answer = await inquirer.prompt([
    {
         type:"input",
         name:"num1",
         message:"Enter first number"


    },
    {
        type:"input",
        name:"num2",
        message:"Enter second number"
        
    },
    {
        
        type:"list",
        name:"operator",
        message:"Select operator",
        choices:Object.values(operators)

    },


    
])

// const selectedoperator= answer.operators as operators;
const number1=parseFloat(answer.num1);
const number2=parseFloat(answer.num2);

if(answer.operator=="Addition"){
    let rsult=number1+ number2;
    console.log(chalk.yellowBright`Result is:${rsult}`);
}

else if(answer.operator=="Subtraction"){
    let rsult=number1-number2;
    console.log(chalk.bgRedBright`Result is:${rsult}`);
}

else if(answer.operator=="Multiplication"){

    let rsult=number1*number2;
    console.log(chalk.greenBright`Result is:${rsult}`);
}

else if(answer.operator=="Division"){
    let rsult=number1/number2;
    console.log(chalk.bgBlueBright`Result is:${rsult}`);
}