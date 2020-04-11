'use strict';
let money = +prompt("Your monthly budget?", ''),
  time = prompt("Enter date in this format YYYY-MM-DD", '');

let appData = {
  budget: money,
  timeData: time,
  expenses : {},
  optionalExpenses: {},
  income: [],
  savings: false 
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Enter obligate expance item in this month", ''),
    b = prompt("How much will it cost?", '');

  if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null  
    && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
  } else {
    console.log("one more time");
    i--;
  }
}

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }

// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Everyday budget: " + appData.moneyPerDay + "RUB");

if(appData.moneyPerDay < 100) {
  console.log("Minimal income level");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Medium income level");
} else if (appData.moneyPerDay > 2000) {
  console.log("High income level");
} else {
  console.log("Error");
}