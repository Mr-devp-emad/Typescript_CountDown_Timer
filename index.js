// import inquirer from "inquirer";
// import {differenceInSeconds} from "date-fns"
// //Start coading   ; step 01
// //function for count down second
// function* countdownTimer(second:number) {
//     //While Loop
//     while (second > 0) {
//         yield second;
//         second--;
//     }
// }
// //Step 02
// let timer = countdownTimer(15);
// //Create a count-down timer
// function displayCountdown() {
//     let result = timer.next();
//     if(!result.done) {
//     const now = new Date();
//     const countdownTime = new Date(now.getTime()  +  (result.value  *  1000))
// const remainingSeconds  =  differenceInSecond(countdownTime ,  now)
// console.log(`Remaining Seconds:  ${remainingSeconds}`)
// setTimeout(displayCountdown, 1000)  //1 second is equal to 1000ms
//     } else {
//         console.log("Countdown Complete!")
//     }
// }
// // INVOKE
// displayCountdown();
// function differenceInSecond(countdownTime: Date, now: Date) {
//     throw new Error("Function not implemented.");
// }
//#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
let response = await inquirer.prompt([{
        name: "userInput",
        type: "number",
        message: "Please enter the Number of second",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter valid Number";
            }
            else if (input > 60) {
                return "Second must be in 60";
            }
            else {
                return true;
            }
        }
    }]);
let input = response.userInput;
function startTime(value) {
    let intTime = new Date().setSeconds(new Date().getSeconds() + value);
    let intervalTime = new Date(intTime);
    setInterval((() => {
        let currentTime = new Date();
        let timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has Expired");
            process.exit();
        }
        let min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        let sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
