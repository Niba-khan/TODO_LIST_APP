#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos : string[] = ["sehri", "aftari"];

//____Functions___-
 async function createTodo (todos:string[]){
   do{

 //____Select list____

   let ans = await inquirer.prompt(
      {
       name: "select",
        type: "list",
        message: chalk.blue.bold("select an option"),
        choices: ["addTask", "updateTask", "View", "DeleteTask", "exit"],
   });
   //___ADD Task___
   if (ans.select == "addTask"){
      let addTodo = await inquirer.prompt(
         {
         name: "addTask",
         type: "input",
         message:chalk.red.italic("What you want to add your Task?"),
         }
         );
         todos.push(addTodo.addTask)
         console.log(todos)

    //___UPDATE TASK____

      } if(ans.select == "updateTask") {
         let updateTask = await inquirer.prompt(
         {
            type: "list",
            name: "todo",
            message: chalk.yellow.italic("what you want to update your Task?"),
            choices:todos.map(item => item)
         }
         )
         let addTodo = await inquirer.prompt(
            {
            name: "addTask",
            type: "input",
            message: "What you want to add your Task?",
            }
            );
             
         let newTodos = todos.filter(val => val !== updateTask.todo)
         todos = [...newTodos,addTodo.addTask]
         console.log(todos);
      }

      //___VIEW___

   if (ans.select == "View"){
      console.log(todos);
   }
   //___DELETE TASK____
   if (ans.select == "DeleteTask"){
      let deleteTodo= await inquirer.prompt(
         {
            type: "list",
            name: "todo",
            message:  chalk.black.italic("what you want to Delete your TASK?"),
            choices:todos.map(item => item)
         }
         )
         
      let newTodos = todos.filter(val => val !== deleteTodo.todo)
      todos=[...newTodos]
      console.log(todos)
   }
   //___EXIT___
   if (ans.select == "exit"){
      console.log(chalk.yellow.bold("Thank you for using my todo app!!."))
      break;
   }

} while(true)
 }

createTodo(todos);
console.log(chalk.gray.underline("\n \tGood Byee!!!.\n"));


 