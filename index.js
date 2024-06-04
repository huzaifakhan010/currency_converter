#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    LIRA: 32.19,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "LIRA"],
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "LIRA"],
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    },
]);
let fromamount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromamount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
